# SDK

## Overview

<p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the cloud, including tools for deploying, operating, and scaling game servers. Built on Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance, high-reliability, low-cost game servers while dynamically scaling your resource usage to meet player demand. </p> <p> <b>About Amazon GameLift solutions</b> </p> <p>Get more information on these Amazon GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a>.</p> <ul> <li> <p>Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up and maintain computing machines for hosting, manage game session and player session life cycle, and handle security, storage, and performance tracking. You can use automatic scaling tools to balance player demand and hosting costs, configure your game session management to minimize player latency, and add FlexMatch for matchmaking.</p> </li> <li> <p>Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure and set up ready-to-go game servers for your game. Realtime Servers provides a game server framework with core Amazon GameLift infrastructure already built in. Then use the full range of Amazon GameLift managed hosting features, including FlexMatch, for your game.</p> </li> <li> <p>Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2 instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game hosting, including boosting the viability of low-cost Spot Instances gaming. For a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.</p> </li> <li> <p>Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a customizable matchmaking service for multiplayer games. Use FlexMatch as integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone service into your own hosting solution.</p> </li> </ul> <p> <b>About this API Reference</b> </p> <p>This reference guide describes the low-level service API for Amazon GameLift. With each topic in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI reference. Useful links:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift API operations listed by tasks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift tools and resources</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/gamelift/>
### Available Operations

* [AcceptMatch](#acceptmatch) - <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match or failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. For tickets where players have accepted or not yet responded, the ticket status is returned to <code>SEARCHING</code> to find a new match. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>
* [ClaimGameServer](#claimgameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> </ul> <note> <p>When claiming a specific game server, this request will succeed even if the game server is running on an instance in <code>DRAINING</code> status. To avoid this, first check the instance status by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html">DescribeGameServerInstances</a> .</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [CreateAlias](#createalias) - <p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreateBuild](#createbuild) - <p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the operation in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can't update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreateFleet](#createfleet) - <p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet's home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>
* [CreateFleetLocations](#createfleetlocations) - <p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don't support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>
* [CreateGameServerGroup](#creategameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [CreateGameSession](#creategamesession) - <p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreateGameSessionQueue](#creategamesessionqueue) - <p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreateLocation](#createlocation) - Creates a custom location for use in an Anywhere fleet.
* [CreateMatchmakingConfiguration](#creatematchmakingconfiguration) - <p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>
* [CreateMatchmakingRuleSet](#creatematchmakingruleset) - <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>
* [CreatePlayerSession](#createplayersession) - <p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreatePlayerSessions](#createplayersessions) - <p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreateScript](#createscript) - <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreateVpcPeeringAuthorization](#createvpcpeeringauthorization) - <p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [CreateVpcPeeringConnection](#createvpcpeeringconnection) - <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DeleteAlias](#deletealias) - <p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DeleteBuild](#deletebuild) - <p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DeleteFleet](#deletefleet) - <p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don't need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>
* [DeleteFleetLocations](#deletefleetlocations) - <p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [DeleteGameServerGroup](#deletegameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [DeleteGameSessionQueue](#deletegamesessionqueue) - Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.
* [DeleteLocation](#deletelocation) - <p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>
* [DeleteMatchmakingConfiguration](#deletematchmakingconfiguration) - Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.
* [DeleteMatchmakingRuleSet](#deletematchmakingruleset) - <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>
* [DeleteScalingPolicy](#deletescalingpolicy) - <p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>
* [DeleteScript](#deletescript) - <p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DeleteVpcPeeringAuthorization](#deletevpcpeeringauthorization) - <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DeleteVpcPeeringConnection](#deletevpcpeeringconnection) - <p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DeregisterCompute](#deregistercompute) - Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.
* [DeregisterGameServer](#deregistergameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [DescribeAlias](#describealias) - <p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeBuild](#describebuild) - <p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeCompute](#describecompute) - Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.
* [DescribeEc2InstanceLimits](#describeec2instancelimits) - <p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [DescribeFleetAttributes](#describefleetattributes) - <p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [DescribeFleetCapacity](#describefleetcapacity) - <p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet's home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
* [DescribeFleetEvents](#describefleetevents) - <p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [DescribeFleetLocationAttributes](#describefleetlocationattributes) - <p>Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [DescribeFleetLocationCapacity](#describefleetlocationcapacity) - <p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
* [DescribeFleetLocationUtilization](#describefleetlocationutilization) - <p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
* [DescribeFleetPortSettings](#describefleetportsettings) - <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet's unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [DescribeFleetUtilization](#describefleetutilization) - <p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet's remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet's home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>
* [DescribeGameServer](#describegameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [DescribeGameServerGroup](#describegameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [DescribeGameServerInstances](#describegameserverinstances) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [DescribeGameSessionDetails](#describegamesessiondetails) - <p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeGameSessionPlacement](#describegamesessionplacement) - <p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>
* [DescribeGameSessionQueues](#describegamesessionqueues) - <p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>
* [DescribeGameSessions](#describegamesessions) - <p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeInstances](#describeinstances) - <p>Retrieves information about a fleet's instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet's home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet's remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeMatchmaking](#describematchmaking) - <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>
* [DescribeMatchmakingConfigurations](#describematchmakingconfigurations) - <p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>
* [DescribeMatchmakingRuleSets](#describematchmakingrulesets) - <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>
* [DescribePlayerSessions](#describeplayersessions) - <p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeRuntimeConfiguration](#describeruntimeconfiguration) - <p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>
* [DescribeScalingPolicies](#describescalingpolicies) - <p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>
* [DescribeScript](#describescript) - <p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeVpcPeeringAuthorizations](#describevpcpeeringauthorizations) - <p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [DescribeVpcPeeringConnections](#describevpcpeeringconnections) - <p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [GetComputeAccess](#getcomputeaccess) - <p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>
* [GetComputeAuthToken](#getcomputeauthtoken) - Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.
* [GetGameSessionLogURL](#getgamesessionlogurl) - <p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [GetInstanceAccess](#getinstanceaccess) - <p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [ListAliases](#listaliases) - <p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [ListBuilds](#listbuilds) - <p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [ListCompute](#listcompute) - Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.
* [ListFleets](#listfleets) - <p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don't provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [ListGameServerGroups](#listgameservergroups) - Lists a game server groups.
* [ListGameServers](#listgameservers) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [ListLocations](#listlocations) - Lists all custom and Amazon Web Services locations.
* [ListScripts](#listscripts) - <p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [ListTagsForResource](#listtagsforresource) - <p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [PutScalingPolicy](#putscalingpolicy) - <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>
* [RegisterCompute](#registercompute) - <p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>
* [RegisterGameServer](#registergameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [RequestUploadCredentials](#requestuploadcredentials) - <p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [ResolveAlias](#resolvealias) - <p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [ResumeGameServerGroup](#resumegameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [SearchGameSessions](#searchgamesessions) - <p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [StartFleetActions](#startfleetactions) - <p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [StartGameSessionPlacement](#startgamesessionplacement) - <p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>
* [StartMatchBackfill](#startmatchbackfill) - <p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>
* [StartMatchmaking](#startmatchmaking) - <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>
* [StopFleetActions](#stopfleetactions) - <p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>
* [StopGameSessionPlacement](#stopgamesessionplacement) - Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.
* [StopMatchmaking](#stopmatchmaking) - <p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>
* [SuspendGameServerGroup](#suspendgameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [TagResource](#tagresource) - <p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [UntagResource](#untagresource) - <p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [UpdateAlias](#updatealias) - <p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [UpdateBuild](#updatebuild) - <p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [UpdateFleetAttributes](#updatefleetattributes) - <p>Updates a fleet's mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [UpdateFleetCapacity](#updatefleetcapacity) - <p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet's capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet's desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet's remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location's active instance count matches the new desired instance count. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type's limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>
* [UpdateFleetPortSettings](#updatefleetportsettings) - <p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [UpdateGameServer](#updategameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [UpdateGameServerGroup](#updategameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [UpdateGameSession](#updategamesession) - <p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [UpdateGameSessionQueue](#updategamesessionqueue) - <p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>
* [UpdateMatchmakingConfiguration](#updatematchmakingconfiguration) - <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>
* [UpdateRuntimeConfiguration](#updateruntimeconfiguration) - <p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [UpdateScript](#updatescript) - <p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [ValidateMatchmakingRuleSet](#validatematchmakingruleset) - <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

## AcceptMatch

<p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match or failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. For tickets where players have accepted or not yet responded, the ticket status is returned to <code>SEARCHING</code> to find a new match. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AcceptMatch(ctx, operations.AcceptMatchRequest{
        AcceptMatchInput: shared.AcceptMatchInput{
            AcceptanceType: shared.AcceptanceTypeEnumAccept,
            PlayerIds: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            TicketID: "molestiae",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.AcceptMatchXAmzTargetEnumGameLiftAcceptMatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptMatchOutput != nil {
        // handle response
    }
}
```

## ClaimGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> </ul> <note> <p>When claiming a specific game server, this request will succeed even if the game server is running on an instance in <code>DRAINING</code> status. To avoid this, first check the instance status by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html">DescribeGameServerInstances</a> .</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ClaimGameServer(ctx, operations.ClaimGameServerRequest{
        ClaimGameServerInput: shared.ClaimGameServerInput{
            GameServerData: sdk.String("temporibus"),
            GameServerGroupName: "ab",
            GameServerID: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.ClaimGameServerXAmzTargetEnumGameLiftClaimGameServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimGameServerOutput != nil {
        // handle response
    }
}
```

## CreateAlias

<p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAlias(ctx, operations.CreateAliasRequest{
        CreateAliasInput: shared.CreateAliasInput{
            Description: sdk.String("odit"),
            Name: "Wilfred Wolff",
            RoutingStrategy: shared.RoutingStrategy{
                FleetID: sdk.String("quod"),
                Message: sdk.String("esse"),
                Type: shared.RoutingStrategyTypeEnumTerminal.ToPointer(),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorum",
                    Value: "dicta",
                },
                shared.Tag{
                    Key: "nam",
                    Value: "officia",
                },
                shared.Tag{
                    Key: "occaecati",
                    Value: "fugit",
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: "hic",
                },
            },
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.CreateAliasXAmzTargetEnumGameLiftCreateAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAliasOutput != nil {
        // handle response
    }
}
```

## CreateBuild

<p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the operation in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can't update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBuild(ctx, operations.CreateBuildRequest{
        CreateBuildInput: shared.CreateBuildInput{
            Name: sdk.String("Jonathon Klocko"),
            OperatingSystem: shared.OperatingSystemEnumWindows2012.ToPointer(),
            ServerSDKVersion: sdk.String("perferendis"),
            StorageLocation: &shared.S3Location{
                Bucket: sdk.String("ad"),
                Key: sdk.String("natus"),
                ObjectVersion: sdk.String("sed"),
                RoleArn: sdk.String("iste"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "natus",
                    Value: "laboriosam",
                },
            },
            Version: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreateBuildXAmzTargetEnumGameLiftCreateBuild,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBuildOutput != nil {
        // handle response
    }
}
```

## CreateFleet

<p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet's home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFleet(ctx, operations.CreateFleetRequest{
        CreateFleetInput: shared.CreateFleetInput{
            AnywhereConfiguration: &shared.AnywhereConfiguration{
                Cost: "quidem",
            },
            BuildID: sdk.String("architecto"),
            CertificateConfiguration: &shared.CertificateConfiguration{
                CertificateType: shared.CertificateTypeEnumDisabled,
            },
            ComputeType: shared.ComputeTypeEnumAnywhere.ToPointer(),
            Description: sdk.String("est"),
            Ec2InboundPermissions: []shared.IPPermission{
                shared.IPPermission{
                    FromPort: 670638,
                    IPRange: "dolores",
                    Protocol: shared.IPProtocolEnumTCP,
                    ToPort: 358152,
                },
                shared.IPPermission{
                    FromPort: 128926,
                    IPRange: "nobis",
                    Protocol: shared.IPProtocolEnumTCP,
                    ToPort: 607831,
                },
                shared.IPPermission{
                    FromPort: 363711,
                    IPRange: "minima",
                    Protocol: shared.IPProtocolEnumUDP,
                    ToPort: 38425,
                },
            },
            Ec2InstanceType: shared.Ec2InstanceTypeEnumR5aXlarge.ToPointer(),
            FleetType: shared.FleetTypeEnumSpot.ToPointer(),
            InstanceRoleArn: sdk.String("doloribus"),
            Locations: []shared.LocationConfiguration{
                shared.LocationConfiguration{
                    Location: "architecto",
                },
                shared.LocationConfiguration{
                    Location: "mollitia",
                },
                shared.LocationConfiguration{
                    Location: "dolorem",
                },
                shared.LocationConfiguration{
                    Location: "culpa",
                },
            },
            LogPaths: []string{
                "repellat",
            },
            MetricGroups: []string{
                "occaecati",
                "numquam",
                "commodi",
            },
            Name: "Nellie Frami",
            NewGameSessionProtectionPolicy: shared.ProtectionPolicyEnumNoProtection.ToPointer(),
            PeerVpcAwsAccountID: sdk.String("vitae"),
            PeerVpcID: sdk.String("laborum"),
            ResourceCreationLimitPolicy: &shared.ResourceCreationLimitPolicy{
                NewGameSessionsPerCreator: sdk.Int64(656330),
                PolicyPeriodInMinutes: sdk.Int64(317202),
            },
            RuntimeConfiguration: &shared.RuntimeConfiguration{
                GameSessionActivationTimeoutSeconds: sdk.Int64(138183),
                MaxConcurrentGameSessionActivations: sdk.Int64(778346),
                ServerProcesses: []shared.ServerProcess{
                    shared.ServerProcess{
                        ConcurrentExecutions: 949572,
                        LaunchPath: "ipsam",
                        Parameters: sdk.String("id"),
                    },
                },
            },
            ScriptID: sdk.String("possimus"),
            ServerLaunchParameters: sdk.String("aut"),
            ServerLaunchPath: sdk.String("quasi"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "temporibus",
                    Value: "laborum",
                },
                shared.Tag{
                    Key: "quasi",
                    Value: "reiciendis",
                },
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "vero",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.CreateFleetXAmzTargetEnumGameLiftCreateFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFleetOutput != nil {
        // handle response
    }
}
```

## CreateFleetLocations

<p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don't support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFleetLocations(ctx, operations.CreateFleetLocationsRequest{
        CreateFleetLocationsInput: shared.CreateFleetLocationsInput{
            FleetID: "perferendis",
            Locations: []shared.LocationConfiguration{
                shared.LocationConfiguration{
                    Location: "reprehenderit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.CreateFleetLocationsXAmzTargetEnumGameLiftCreateFleetLocations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFleetLocationsOutput != nil {
        // handle response
    }
}
```

## CreateGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGameServerGroup(ctx, operations.CreateGameServerGroupRequest{
        CreateGameServerGroupInput: shared.CreateGameServerGroupInput{
            AutoScalingPolicy: &shared.GameServerGroupAutoScalingPolicy{
                EstimatedInstanceWarmup: sdk.Int64(688661),
                TargetTrackingConfiguration: shared.TargetTrackingConfiguration{
                    TargetValue: 3179.83,
                },
            },
            BalancingStrategy: shared.BalancingStrategyEnumOnDemandOnly.ToPointer(),
            GameServerGroupName: "commodi",
            GameServerProtectionPolicy: shared.GameServerProtectionPolicyEnumFullProtection.ToPointer(),
            InstanceDefinitions: []shared.InstanceDefinition{
                shared.InstanceDefinition{
                    InstanceType: shared.GameServerGroupInstanceTypeEnumC5a16xlarge,
                    WeightedCapacity: sdk.String("quidem"),
                },
            },
            LaunchTemplate: shared.LaunchTemplateSpecification{
                LaunchTemplateID: sdk.String("molestias"),
                LaunchTemplateName: sdk.String("excepturi"),
                Version: sdk.String("pariatur"),
            },
            MaxSize: 265389,
            MinSize: 508969,
            RoleArn: "rem",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quasi",
                    Value: "repudiandae",
                },
                shared.Tag{
                    Key: "sint",
                    Value: "veritatis",
                },
                shared.Tag{
                    Key: "itaque",
                    Value: "incidunt",
                },
                shared.Tag{
                    Key: "enim",
                    Value: "consequatur",
                },
            },
            VpcSubnets: []string{
                "quibusdam",
                "explicabo",
                "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.CreateGameServerGroupXAmzTargetEnumGameLiftCreateGameServerGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGameServerGroupOutput != nil {
        // handle response
    }
}
```

## CreateGameSession

<p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGameSession(ctx, operations.CreateGameSessionRequest{
        CreateGameSessionInput: shared.CreateGameSessionInput{
            AliasID: sdk.String("quos"),
            CreatorID: sdk.String("perferendis"),
            FleetID: sdk.String("magni"),
            GameProperties: []shared.GameProperty{
                shared.GameProperty{
                    Key: "ipsam",
                    Value: "alias",
                },
                shared.GameProperty{
                    Key: "fugit",
                    Value: "dolorum",
                },
                shared.GameProperty{
                    Key: "excepturi",
                    Value: "tempora",
                },
                shared.GameProperty{
                    Key: "facilis",
                    Value: "tempore",
                },
            },
            GameSessionData: sdk.String("labore"),
            GameSessionID: sdk.String("delectus"),
            IdempotencyToken: sdk.String("eum"),
            Location: sdk.String("non"),
            MaximumPlayerSessionCount: 756107,
            Name: sdk.String("Gilbert Medhurst"),
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.CreateGameSessionXAmzTargetEnumGameLiftCreateGameSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGameSessionOutput != nil {
        // handle response
    }
}
```

## CreateGameSessionQueue

<p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGameSessionQueue(ctx, operations.CreateGameSessionQueueRequest{
        CreateGameSessionQueueInput: shared.CreateGameSessionQueueInput{
            CustomEventData: sdk.String("illum"),
            Destinations: []shared.GameSessionQueueDestination{
                shared.GameSessionQueueDestination{
                    DestinationArn: sdk.String("rerum"),
                },
                shared.GameSessionQueueDestination{
                    DestinationArn: sdk.String("dicta"),
                },
                shared.GameSessionQueueDestination{
                    DestinationArn: sdk.String("magnam"),
                },
                shared.GameSessionQueueDestination{
                    DestinationArn: sdk.String("cumque"),
                },
            },
            FilterConfiguration: &shared.FilterConfiguration{
                AllowedLocations: []string{
                    "ea",
                    "aliquid",
                    "laborum",
                    "accusamus",
                },
            },
            Name: "Toni Haley",
            NotificationTarget: sdk.String("quidem"),
            PlayerLatencyPolicies: []shared.PlayerLatencyPolicy{
                shared.PlayerLatencyPolicy{
                    MaximumIndividualPlayerLatencyMilliseconds: sdk.Int64(725255),
                    PolicyDurationSeconds: sdk.Int64(659669),
                },
                shared.PlayerLatencyPolicy{
                    MaximumIndividualPlayerLatencyMilliseconds: sdk.Int64(501324),
                    PolicyDurationSeconds: sdk.Int64(533206),
                },
                shared.PlayerLatencyPolicy{
                    MaximumIndividualPlayerLatencyMilliseconds: sdk.Int64(956084),
                    PolicyDurationSeconds: sdk.Int64(230533),
                },
            },
            PriorityConfiguration: &shared.PriorityConfiguration{
                LocationOrder: []string{
                    "nisi",
                    "vel",
                    "natus",
                },
                PriorityOrder: []shared.PriorityTypeEnum{
                    shared.PriorityTypeEnumCost,
                    shared.PriorityTypeEnumLatency,
                    shared.PriorityTypeEnumCost,
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "distinctio",
                    Value: "id",
                },
                shared.Tag{
                    Key: "labore",
                    Value: "labore",
                },
            },
            TimeoutInSeconds: sdk.Int64(383462),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.CreateGameSessionQueueXAmzTargetEnumGameLiftCreateGameSessionQueue,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGameSessionQueueOutput != nil {
        // handle response
    }
}
```

## CreateLocation

Creates a custom location for use in an Anywhere fleet.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateLocation(ctx, operations.CreateLocationRequest{
        CreateLocationInput: shared.CreateLocationInput{
            LocationName: "et",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ullam",
                    Value: "provident",
                },
                shared.Tag{
                    Key: "quos",
                    Value: "sint",
                },
                shared.Tag{
                    Key: "accusantium",
                    Value: "mollitia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.CreateLocationXAmzTargetEnumGameLiftCreateLocation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationOutput != nil {
        // handle response
    }
}
```

## CreateMatchmakingConfiguration

<p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateMatchmakingConfiguration(ctx, operations.CreateMatchmakingConfigurationRequest{
        CreateMatchmakingConfigurationInput: shared.CreateMatchmakingConfigurationInput{
            AcceptanceRequired: false,
            AcceptanceTimeoutSeconds: sdk.Int64(367562),
            AdditionalPlayerCount: sdk.Int64(97260),
            BackfillMode: shared.BackfillModeEnumAutomatic.ToPointer(),
            CustomEventData: sdk.String("doloribus"),
            Description: sdk.String("debitis"),
            FlexMatchMode: shared.FlexMatchModeEnumStandalone.ToPointer(),
            GameProperties: []shared.GameProperty{
                shared.GameProperty{
                    Key: "deleniti",
                    Value: "facilis",
                },
                shared.GameProperty{
                    Key: "in",
                    Value: "architecto",
                },
                shared.GameProperty{
                    Key: "architecto",
                    Value: "repudiandae",
                },
                shared.GameProperty{
                    Key: "ullam",
                    Value: "expedita",
                },
            },
            GameSessionData: sdk.String("nihil"),
            GameSessionQueueArns: []string{
                "quibusdam",
                "sed",
                "saepe",
                "pariatur",
            },
            Name: "Kathryn Lang",
            NotificationTarget: sdk.String("sunt"),
            RequestTimeoutSeconds: 779051,
            RuleSetName: "illum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "maxime",
                    Value: "ea",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "odit",
                },
                shared.Tag{
                    Key: "ea",
                    Value: "accusantium",
                },
                shared.Tag{
                    Key: "ab",
                    Value: "maiores",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.CreateMatchmakingConfigurationXAmzTargetEnumGameLiftCreateMatchmakingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMatchmakingConfigurationOutput != nil {
        // handle response
    }
}
```

## CreateMatchmakingRuleSet

<p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateMatchmakingRuleSet(ctx, operations.CreateMatchmakingRuleSetRequest{
        CreateMatchmakingRuleSetInput: shared.CreateMatchmakingRuleSetInput{
            Name: "Camille Armstrong",
            RuleSetBody: "aut",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "corporis",
                    Value: "hic",
                },
                shared.Tag{
                    Key: "libero",
                    Value: "nobis",
                },
                shared.Tag{
                    Key: "dolores",
                    Value: "quis",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "dignissimos",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.CreateMatchmakingRuleSetXAmzTargetEnumGameLiftCreateMatchmakingRuleSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMatchmakingRuleSetOutput != nil {
        // handle response
    }
}
```

## CreatePlayerSession

<p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePlayerSession(ctx, operations.CreatePlayerSessionRequest{
        CreatePlayerSessionInput: shared.CreatePlayerSessionInput{
            GameSessionID: "quam",
            PlayerData: sdk.String("dolor"),
            PlayerID: "vero",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.CreatePlayerSessionXAmzTargetEnumGameLiftCreatePlayerSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePlayerSessionOutput != nil {
        // handle response
    }
}
```

## CreatePlayerSessions

<p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePlayerSessions(ctx, operations.CreatePlayerSessionsRequest{
        CreatePlayerSessionsInput: shared.CreatePlayerSessionsInput{
            GameSessionID: "porro",
            PlayerDataMap: map[string]string{
                "blanditiis": "error",
            },
            PlayerIds: []string{
                "occaecati",
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.CreatePlayerSessionsXAmzTargetEnumGameLiftCreatePlayerSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePlayerSessionsOutput != nil {
        // handle response
    }
}
```

## CreateScript

<p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateScript(ctx, operations.CreateScriptRequest{
        CreateScriptInput: shared.CreateScriptInput{
            Name: sdk.String("Ervin McLaughlin"),
            StorageLocation: &shared.S3Location{
                Bucket: sdk.String("delectus"),
                Key: sdk.String("quaerat"),
                ObjectVersion: sdk.String("quos"),
                RoleArn: sdk.String("aliquid"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: "dolor",
                },
            },
            Version: sdk.String("qui"),
            ZipFile: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.CreateScriptXAmzTargetEnumGameLiftCreateScript,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScriptOutput != nil {
        // handle response
    }
}
```

## CreateVpcPeeringAuthorization

<p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVpcPeeringAuthorization(ctx, operations.CreateVpcPeeringAuthorizationRequest{
        CreateVpcPeeringAuthorizationInput: shared.CreateVpcPeeringAuthorizationInput{
            GameLiftAwsAccountID: "dolorum",
            PeerVpcID: "numquam",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.CreateVpcPeeringAuthorizationXAmzTargetEnumGameLiftCreateVpcPeeringAuthorization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVpcPeeringAuthorizationOutput != nil {
        // handle response
    }
}
```

## CreateVpcPeeringConnection

<p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVpcPeeringConnection(ctx, operations.CreateVpcPeeringConnectionRequest{
        CreateVpcPeeringConnectionInput: shared.CreateVpcPeeringConnectionInput{
            FleetID: "quidem",
            PeerVpcAwsAccountID: "voluptatibus",
            PeerVpcID: "voluptas",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.CreateVpcPeeringConnectionXAmzTargetEnumGameLiftCreateVpcPeeringConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVpcPeeringConnectionOutput != nil {
        // handle response
    }
}
```

## DeleteAlias

<p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAlias(ctx, operations.DeleteAliasRequest{
        DeleteAliasInput: shared.DeleteAliasInput{
            AliasID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeleteAliasXAmzTargetEnumGameLiftDeleteAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteBuild

<p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBuild(ctx, operations.DeleteBuildRequest{
        DeleteBuildInput: shared.DeleteBuildInput{
            BuildID: "asperiores",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DeleteBuildXAmzTargetEnumGameLiftDeleteBuild,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFleet

<p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don't need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFleet(ctx, operations.DeleteFleetRequest{
        DeleteFleetInput: shared.DeleteFleetInput{
            FleetID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DeleteFleetXAmzTargetEnumGameLiftDeleteFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFleetLocations

<p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFleetLocations(ctx, operations.DeleteFleetLocationsRequest{
        DeleteFleetLocationsInput: shared.DeleteFleetLocationsInput{
            FleetID: "provident",
            Locations: []string{
                "repellendus",
                "totam",
            },
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DeleteFleetLocationsXAmzTargetEnumGameLiftDeleteFleetLocations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFleetLocationsOutput != nil {
        // handle response
    }
}
```

## DeleteGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteGameServerGroup(ctx, operations.DeleteGameServerGroupRequest{
        DeleteGameServerGroupInput: shared.DeleteGameServerGroupInput{
            DeleteOption: shared.GameServerGroupDeleteOptionEnumRetain.ToPointer(),
            GameServerGroupName: "qui",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.DeleteGameServerGroupXAmzTargetEnumGameLiftDeleteGameServerGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGameServerGroupOutput != nil {
        // handle response
    }
}
```

## DeleteGameSessionQueue

Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteGameSessionQueue(ctx, operations.DeleteGameSessionQueueRequest{
        DeleteGameSessionQueueInput: shared.DeleteGameSessionQueueInput{
            Name: "Marvin Renner",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.DeleteGameSessionQueueXAmzTargetEnumGameLiftDeleteGameSessionQueue,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGameSessionQueueOutput != nil {
        // handle response
    }
}
```

## DeleteLocation

<p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteLocation(ctx, operations.DeleteLocationRequest{
        DeleteLocationInput: shared.DeleteLocationInput{
            LocationName: "neque",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DeleteLocationXAmzTargetEnumGameLiftDeleteLocation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLocationOutput != nil {
        // handle response
    }
}
```

## DeleteMatchmakingConfiguration

Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMatchmakingConfiguration(ctx, operations.DeleteMatchmakingConfigurationRequest{
        DeleteMatchmakingConfigurationInput: shared.DeleteMatchmakingConfigurationInput{
            Name: "Norma McGlynn",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DeleteMatchmakingConfigurationXAmzTargetEnumGameLiftDeleteMatchmakingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMatchmakingConfigurationOutput != nil {
        // handle response
    }
}
```

## DeleteMatchmakingRuleSet

<p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMatchmakingRuleSet(ctx, operations.DeleteMatchmakingRuleSetRequest{
        DeleteMatchmakingRuleSetInput: shared.DeleteMatchmakingRuleSetInput{
            Name: "Cesar Hyatt",
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.DeleteMatchmakingRuleSetXAmzTargetEnumGameLiftDeleteMatchmakingRuleSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMatchmakingRuleSetOutput != nil {
        // handle response
    }
}
```

## DeleteScalingPolicy

<p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteScalingPolicy(ctx, operations.DeleteScalingPolicyRequest{
        DeleteScalingPolicyInput: shared.DeleteScalingPolicyInput{
            FleetID: "ullam",
            Name: "Terrell Bartell",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.DeleteScalingPolicyXAmzTargetEnumGameLiftDeleteScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteScript

<p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteScript(ctx, operations.DeleteScriptRequest{
        DeleteScriptInput: shared.DeleteScriptInput{
            ScriptID: "tempore",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DeleteScriptXAmzTargetEnumGameLiftDeleteScript,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteVpcPeeringAuthorization

<p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVpcPeeringAuthorization(ctx, operations.DeleteVpcPeeringAuthorizationRequest{
        DeleteVpcPeeringAuthorizationInput: shared.DeleteVpcPeeringAuthorizationInput{
            GameLiftAwsAccountID: "dolorum",
            PeerVpcID: "architecto",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.DeleteVpcPeeringAuthorizationXAmzTargetEnumGameLiftDeleteVpcPeeringAuthorization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVpcPeeringAuthorizationOutput != nil {
        // handle response
    }
}
```

## DeleteVpcPeeringConnection

<p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVpcPeeringConnection(ctx, operations.DeleteVpcPeeringConnectionRequest{
        DeleteVpcPeeringConnectionInput: shared.DeleteVpcPeeringConnectionInput{
            FleetID: "porro",
            VpcPeeringConnectionID: "doloribus",
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DeleteVpcPeeringConnectionXAmzTargetEnumGameLiftDeleteVpcPeeringConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVpcPeeringConnectionOutput != nil {
        // handle response
    }
}
```

## DeregisterCompute

Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterCompute(ctx, operations.DeregisterComputeRequest{
        DeregisterComputeInput: shared.DeregisterComputeInput{
            ComputeName: "occaecati",
            FleetID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeregisterComputeXAmzTargetEnumGameLiftDeregisterCompute,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterComputeOutput != nil {
        // handle response
    }
}
```

## DeregisterGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterGameServer(ctx, operations.DeregisterGameServerRequest{
        DeregisterGameServerInput: shared.DeregisterGameServerInput{
            GameServerGroupName: "consectetur",
            GameServerID: "vero",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.DeregisterGameServerXAmzTargetEnumGameLiftDeregisterGameServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAlias

<p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAlias(ctx, operations.DescribeAliasRequest{
        DescribeAliasInput: shared.DescribeAliasInput{
            AliasID: "facilis",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DescribeAliasXAmzTargetEnumGameLiftDescribeAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAliasOutput != nil {
        // handle response
    }
}
```

## DescribeBuild

<p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBuild(ctx, operations.DescribeBuildRequest{
        DescribeBuildInput: shared.DescribeBuildInput{
            BuildID: "impedit",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribeBuildXAmzTargetEnumGameLiftDescribeBuild,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBuildOutput != nil {
        // handle response
    }
}
```

## DescribeCompute

Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCompute(ctx, operations.DescribeComputeRequest{
        DescribeComputeInput: shared.DescribeComputeInput{
            ComputeName: "doloribus",
            FleetID: "iusto",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DescribeComputeXAmzTargetEnumGameLiftDescribeCompute,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComputeOutput != nil {
        // handle response
    }
}
```

## DescribeEc2InstanceLimits

<p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEc2InstanceLimits(ctx, operations.DescribeEc2InstanceLimitsRequest{
        DescribeEc2InstanceLimitsInput: shared.DescribeEc2InstanceLimitsInput{
            Ec2InstanceType: shared.Ec2InstanceTypeEnumC5Xlarge.ToPointer(),
            Location: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DescribeEc2InstanceLimitsXAmzTargetEnumGameLiftDescribeEc2InstanceLimits,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEc2InstanceLimitsOutput != nil {
        // handle response
    }
}
```

## DescribeFleetAttributes

<p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetAttributes(ctx, operations.DescribeFleetAttributesRequest{
        DescribeFleetAttributesInput: shared.DescribeFleetAttributesInput{
            FleetIds: []string{
                "quasi",
                "ex",
                "nulla",
                "excepturi",
            },
            Limit: sdk.Int64(972920),
            NextToken: sdk.String("nostrum"),
        },
        Limit: sdk.String("sapiente"),
        NextToken: sdk.String("quisquam"),
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.DescribeFleetAttributesXAmzTargetEnumGameLiftDescribeFleetAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetAttributesOutput != nil {
        // handle response
    }
}
```

## DescribeFleetCapacity

<p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet's home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetCapacity(ctx, operations.DescribeFleetCapacityRequest{
        DescribeFleetCapacityInput: shared.DescribeFleetCapacityInput{
            FleetIds: []string{
                "ea",
                "quo",
            },
            Limit: sdk.Int64(232234),
            NextToken: sdk.String("recusandae"),
        },
        Limit: sdk.String("aspernatur"),
        NextToken: sdk.String("minima"),
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.DescribeFleetCapacityXAmzTargetEnumGameLiftDescribeFleetCapacity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetCapacityOutput != nil {
        // handle response
    }
}
```

## DescribeFleetEvents

<p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetEvents(ctx, operations.DescribeFleetEventsRequest{
        DescribeFleetEventsInput: shared.DescribeFleetEventsInput{
            EndTime: types.MustTimeFromString("2022-11-08T08:44:49.857Z"),
            FleetID: "accusamus",
            Limit: sdk.Int64(79522),
            NextToken: sdk.String("non"),
            StartTime: types.MustTimeFromString("2022-04-28T17:52:20.381Z"),
        },
        Limit: sdk.String("laborum"),
        NextToken: sdk.String("placeat"),
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.DescribeFleetEventsXAmzTargetEnumGameLiftDescribeFleetEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetEventsOutput != nil {
        // handle response
    }
}
```

## DescribeFleetLocationAttributes

<p>Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetLocationAttributes(ctx, operations.DescribeFleetLocationAttributesRequest{
        DescribeFleetLocationAttributesInput: shared.DescribeFleetLocationAttributesInput{
            FleetID: "voluptas",
            Limit: sdk.Int64(727044),
            Locations: []string{
                "tempora",
            },
            NextToken: sdk.String("numquam"),
        },
        Limit: sdk.String("explicabo"),
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DescribeFleetLocationAttributesXAmzTargetEnumGameLiftDescribeFleetLocationAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetLocationAttributesOutput != nil {
        // handle response
    }
}
```

## DescribeFleetLocationCapacity

<p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetLocationCapacity(ctx, operations.DescribeFleetLocationCapacityRequest{
        DescribeFleetLocationCapacityInput: shared.DescribeFleetLocationCapacityInput{
            FleetID: "rem",
            Location: "fuga",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.DescribeFleetLocationCapacityXAmzTargetEnumGameLiftDescribeFleetLocationCapacity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetLocationCapacityOutput != nil {
        // handle response
    }
}
```

## DescribeFleetLocationUtilization

<p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetLocationUtilization(ctx, operations.DescribeFleetLocationUtilizationRequest{
        DescribeFleetLocationUtilizationInput: shared.DescribeFleetLocationUtilizationInput{
            FleetID: "eos",
            Location: "praesentium",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DescribeFleetLocationUtilizationXAmzTargetEnumGameLiftDescribeFleetLocationUtilization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetLocationUtilizationOutput != nil {
        // handle response
    }
}
```

## DescribeFleetPortSettings

<p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet's unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetPortSettings(ctx, operations.DescribeFleetPortSettingsRequest{
        DescribeFleetPortSettingsInput: shared.DescribeFleetPortSettingsInput{
            FleetID: "illum",
            Location: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.DescribeFleetPortSettingsXAmzTargetEnumGameLiftDescribeFleetPortSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetPortSettingsOutput != nil {
        // handle response
    }
}
```

## DescribeFleetUtilization

<p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet's remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet's home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetUtilization(ctx, operations.DescribeFleetUtilizationRequest{
        DescribeFleetUtilizationInput: shared.DescribeFleetUtilizationInput{
            FleetIds: []string{
                "debitis",
                "ipsam",
            },
            Limit: sdk.Int64(133465),
            NextToken: sdk.String("sequi"),
        },
        Limit: sdk.String("quo"),
        NextToken: sdk.String("esse"),
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DescribeFleetUtilizationXAmzTargetEnumGameLiftDescribeFleetUtilization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetUtilizationOutput != nil {
        // handle response
    }
}
```

## DescribeGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGameServer(ctx, operations.DescribeGameServerRequest{
        DescribeGameServerInput: shared.DescribeGameServerInput{
            GameServerGroupName: "totam",
            GameServerID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DescribeGameServerXAmzTargetEnumGameLiftDescribeGameServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGameServerOutput != nil {
        // handle response
    }
}
```

## DescribeGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGameServerGroup(ctx, operations.DescribeGameServerGroupRequest{
        DescribeGameServerGroupInput: shared.DescribeGameServerGroupInput{
            GameServerGroupName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeGameServerGroupXAmzTargetEnumGameLiftDescribeGameServerGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGameServerGroupOutput != nil {
        // handle response
    }
}
```

## DescribeGameServerInstances

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGameServerInstances(ctx, operations.DescribeGameServerInstancesRequest{
        DescribeGameServerInstancesInput: shared.DescribeGameServerInstancesInput{
            GameServerGroupName: "fugit",
            InstanceIds: []string{
                "mollitia",
                "incidunt",
                "atque",
            },
            Limit: sdk.Int64(128860),
            NextToken: sdk.String("minima"),
        },
        Limit: sdk.String("nisi"),
        NextToken: sdk.String("fugit"),
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.DescribeGameServerInstancesXAmzTargetEnumGameLiftDescribeGameServerInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGameServerInstancesOutput != nil {
        // handle response
    }
}
```

## DescribeGameSessionDetails

<p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGameSessionDetails(ctx, operations.DescribeGameSessionDetailsRequest{
        DescribeGameSessionDetailsInput: shared.DescribeGameSessionDetailsInput{
            AliasID: sdk.String("et"),
            FleetID: sdk.String("esse"),
            GameSessionID: sdk.String("eveniet"),
            Limit: sdk.Int64(882042),
            Location: sdk.String("veritatis"),
            NextToken: sdk.String("esse"),
            StatusFilter: sdk.String("quod"),
        },
        Limit: sdk.String("nam"),
        NextToken: sdk.String("vero"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DescribeGameSessionDetailsXAmzTargetEnumGameLiftDescribeGameSessionDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGameSessionDetailsOutput != nil {
        // handle response
    }
}
```

## DescribeGameSessionPlacement

<p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGameSessionPlacement(ctx, operations.DescribeGameSessionPlacementRequest{
        DescribeGameSessionPlacementInput: shared.DescribeGameSessionPlacementInput{
            PlacementID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeGameSessionPlacementXAmzTargetEnumGameLiftDescribeGameSessionPlacement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGameSessionPlacementOutput != nil {
        // handle response
    }
}
```

## DescribeGameSessionQueues

<p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGameSessionQueues(ctx, operations.DescribeGameSessionQueuesRequest{
        DescribeGameSessionQueuesInput: shared.DescribeGameSessionQueuesInput{
            Limit: sdk.Int64(766964),
            Names: []string{
                "consequatur",
            },
            NextToken: sdk.String("minus"),
        },
        Limit: sdk.String("quaerat"),
        NextToken: sdk.String("sapiente"),
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.DescribeGameSessionQueuesXAmzTargetEnumGameLiftDescribeGameSessionQueues,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGameSessionQueuesOutput != nil {
        // handle response
    }
}
```

## DescribeGameSessions

<p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGameSessions(ctx, operations.DescribeGameSessionsRequest{
        DescribeGameSessionsInput: shared.DescribeGameSessionsInput{
            AliasID: sdk.String("esse"),
            FleetID: sdk.String("quasi"),
            GameSessionID: sdk.String("a"),
            Limit: sdk.Int64(621679),
            Location: sdk.String("sint"),
            NextToken: sdk.String("pariatur"),
            StatusFilter: sdk.String("possimus"),
        },
        Limit: sdk.String("quia"),
        NextToken: sdk.String("eveniet"),
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.DescribeGameSessionsXAmzTargetEnumGameLiftDescribeGameSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGameSessionsOutput != nil {
        // handle response
    }
}
```

## DescribeInstances

<p>Retrieves information about a fleet's instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet's home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet's remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeInstances(ctx, operations.DescribeInstancesRequest{
        DescribeInstancesInput: shared.DescribeInstancesInput{
            FleetID: "aliquid",
            InstanceID: sdk.String("tenetur"),
            Limit: sdk.Int64(62713),
            Location: sdk.String("earum"),
            NextToken: sdk.String("vel"),
        },
        Limit: sdk.String("in"),
        NextToken: sdk.String("eius"),
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeInstancesXAmzTargetEnumGameLiftDescribeInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstancesOutput != nil {
        // handle response
    }
}
```

## DescribeMatchmaking

<p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMatchmaking(ctx, operations.DescribeMatchmakingRequest{
        DescribeMatchmakingInput: shared.DescribeMatchmakingInput{
            TicketIds: []string{
                "reprehenderit",
                "ullam",
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeMatchmakingXAmzTargetEnumGameLiftDescribeMatchmaking,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMatchmakingOutput != nil {
        // handle response
    }
}
```

## DescribeMatchmakingConfigurations

<p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMatchmakingConfigurations(ctx, operations.DescribeMatchmakingConfigurationsRequest{
        DescribeMatchmakingConfigurationsInput: shared.DescribeMatchmakingConfigurationsInput{
            Limit: sdk.Int64(929292),
            Names: []string{
                "architecto",
                "omnis",
                "tenetur",
            },
            NextToken: sdk.String("quasi"),
            RuleSetName: sdk.String("at"),
        },
        Limit: sdk.String("et"),
        NextToken: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.DescribeMatchmakingConfigurationsXAmzTargetEnumGameLiftDescribeMatchmakingConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMatchmakingConfigurationsOutput != nil {
        // handle response
    }
}
```

## DescribeMatchmakingRuleSets

<p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMatchmakingRuleSets(ctx, operations.DescribeMatchmakingRuleSetsRequest{
        DescribeMatchmakingRuleSetsInput: shared.DescribeMatchmakingRuleSetsInput{
            Limit: sdk.Int64(33074),
            Names: []string{
                "aut",
                "laudantium",
                "eum",
            },
            NextToken: sdk.String("mollitia"),
        },
        Limit: sdk.String("ab"),
        NextToken: sdk.String("corrupti"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DescribeMatchmakingRuleSetsXAmzTargetEnumGameLiftDescribeMatchmakingRuleSets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMatchmakingRuleSetsOutput != nil {
        // handle response
    }
}
```

## DescribePlayerSessions

<p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePlayerSessions(ctx, operations.DescribePlayerSessionsRequest{
        DescribePlayerSessionsInput: shared.DescribePlayerSessionsInput{
            GameSessionID: sdk.String("voluptas"),
            Limit: sdk.Int64(12036),
            NextToken: sdk.String("dignissimos"),
            PlayerID: sdk.String("dicta"),
            PlayerSessionID: sdk.String("maiores"),
            PlayerSessionStatusFilter: sdk.String("natus"),
        },
        Limit: sdk.String("velit"),
        NextToken: sdk.String("voluptatibus"),
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.DescribePlayerSessionsXAmzTargetEnumGameLiftDescribePlayerSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePlayerSessionsOutput != nil {
        // handle response
    }
}
```

## DescribeRuntimeConfiguration

<p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRuntimeConfiguration(ctx, operations.DescribeRuntimeConfigurationRequest{
        DescribeRuntimeConfigurationInput: shared.DescribeRuntimeConfigurationInput{
            FleetID: "officia",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DescribeRuntimeConfigurationXAmzTargetEnumGameLiftDescribeRuntimeConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRuntimeConfigurationOutput != nil {
        // handle response
    }
}
```

## DescribeScalingPolicies

<p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeScalingPolicies(ctx, operations.DescribeScalingPoliciesRequest{
        DescribeScalingPoliciesInput: shared.DescribeScalingPoliciesInput{
            FleetID: "porro",
            Limit: sdk.Int64(801836),
            Location: sdk.String("labore"),
            NextToken: sdk.String("ab"),
            StatusFilter: shared.ScalingStatusTypeEnumUpdateRequested.ToPointer(),
        },
        Limit: sdk.String("fuga"),
        NextToken: sdk.String("id"),
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.DescribeScalingPoliciesXAmzTargetEnumGameLiftDescribeScalingPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScalingPoliciesOutput != nil {
        // handle response
    }
}
```

## DescribeScript

<p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeScript(ctx, operations.DescribeScriptRequest{
        DescribeScriptInput: shared.DescribeScriptInput{
            ScriptID: "vel",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DescribeScriptXAmzTargetEnumGameLiftDescribeScript,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScriptOutput != nil {
        // handle response
    }
}
```

## DescribeVpcPeeringAuthorizations

<p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVpcPeeringAuthorizations(ctx, operations.DescribeVpcPeeringAuthorizationsRequest{
        RequestBody: map[string]interface{}{
            "in": "corporis",
            "reiciendis": "assumenda",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DescribeVpcPeeringAuthorizationsXAmzTargetEnumGameLiftDescribeVpcPeeringAuthorizations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVpcPeeringAuthorizationsOutput != nil {
        // handle response
    }
}
```

## DescribeVpcPeeringConnections

<p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVpcPeeringConnections(ctx, operations.DescribeVpcPeeringConnectionsRequest{
        DescribeVpcPeeringConnectionsInput: shared.DescribeVpcPeeringConnectionsInput{
            FleetID: sdk.String("exercitationem"),
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DescribeVpcPeeringConnectionsXAmzTargetEnumGameLiftDescribeVpcPeeringConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVpcPeeringConnectionsOutput != nil {
        // handle response
    }
}
```

## GetComputeAccess

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComputeAccess(ctx, operations.GetComputeAccessRequest{
        GetComputeAccessInput: shared.GetComputeAccessInput{
            ComputeName: "saepe",
            FleetID: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.GetComputeAccessXAmzTargetEnumGameLiftGetComputeAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComputeAccessOutput != nil {
        // handle response
    }
}
```

## GetComputeAuthToken

Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComputeAuthToken(ctx, operations.GetComputeAuthTokenRequest{
        GetComputeAuthTokenInput: shared.GetComputeAuthTokenInput{
            ComputeName: "dignissimos",
            FleetID: "a",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.GetComputeAuthTokenXAmzTargetEnumGameLiftGetComputeAuthToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComputeAuthTokenOutput != nil {
        // handle response
    }
}
```

## GetGameSessionLogURL

<p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetGameSessionLogURL(ctx, operations.GetGameSessionLogURLRequest{
        GetGameSessionLogURLInput: shared.GetGameSessionLogURLInput{
            GameSessionID: "libero",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.GetGameSessionLogURLXAmzTargetEnumGameLiftGetGameSessionLogURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGameSessionLogURLOutput != nil {
        // handle response
    }
}
```

## GetInstanceAccess

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetInstanceAccess(ctx, operations.GetInstanceAccessRequest{
        GetInstanceAccessInput: shared.GetInstanceAccessInput{
            FleetID: "voluptas",
            InstanceID: "minima",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.GetInstanceAccessXAmzTargetEnumGameLiftGetInstanceAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceAccessOutput != nil {
        // handle response
    }
}
```

## ListAliases

<p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAliases(ctx, operations.ListAliasesRequest{
        Limit: sdk.String("dolore"),
        ListAliasesInput: shared.ListAliasesInput{
            Limit: sdk.Int64(304468),
            Name: sdk.String("Lionel Herman"),
            NextToken: sdk.String("blanditiis"),
            RoutingStrategyType: shared.RoutingStrategyTypeEnumTerminal.ToPointer(),
        },
        NextToken: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.ListAliasesXAmzTargetEnumGameLiftListAliases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAliasesOutput != nil {
        // handle response
    }
}
```

## ListBuilds

<p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBuilds(ctx, operations.ListBuildsRequest{
        Limit: sdk.String("nobis"),
        ListBuildsInput: shared.ListBuildsInput{
            Limit: sdk.Int64(24619),
            NextToken: sdk.String("rerum"),
            Status: shared.BuildStatusEnumInitialized.ToPointer(),
        },
        NextToken: sdk.String("reiciendis"),
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.ListBuildsXAmzTargetEnumGameLiftListBuilds,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBuildsOutput != nil {
        // handle response
    }
}
```

## ListCompute

Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCompute(ctx, operations.ListComputeRequest{
        Limit: sdk.String("dolore"),
        ListComputeInput: shared.ListComputeInput{
            FleetID: "laborum",
            Limit: sdk.Int64(152354),
            Location: sdk.String("in"),
            NextToken: sdk.String("commodi"),
        },
        NextToken: sdk.String("quidem"),
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.ListComputeXAmzTargetEnumGameLiftListCompute,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComputeOutput != nil {
        // handle response
    }
}
```

## ListFleets

<p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don't provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFleets(ctx, operations.ListFleetsRequest{
        Limit: sdk.String("illo"),
        ListFleetsInput: shared.ListFleetsInput{
            BuildID: sdk.String("reiciendis"),
            Limit: sdk.Int64(19300),
            NextToken: sdk.String("corrupti"),
            ScriptID: sdk.String("maiores"),
        },
        NextToken: sdk.String("incidunt"),
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.ListFleetsXAmzTargetEnumGameLiftListFleets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFleetsOutput != nil {
        // handle response
    }
}
```

## ListGameServerGroups

Lists a game server groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGameServerGroups(ctx, operations.ListGameServerGroupsRequest{
        Limit: sdk.String("quos"),
        ListGameServerGroupsInput: shared.ListGameServerGroupsInput{
            Limit: sdk.Int64(975752),
            NextToken: sdk.String("tempora"),
        },
        NextToken: sdk.String("tempora"),
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ListGameServerGroupsXAmzTargetEnumGameLiftListGameServerGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGameServerGroupsOutput != nil {
        // handle response
    }
}
```

## ListGameServers

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGameServers(ctx, operations.ListGameServersRequest{
        Limit: sdk.String("facilis"),
        ListGameServersInput: shared.ListGameServersInput{
            GameServerGroupName: "quaerat",
            Limit: sdk.Int64(277773),
            NextToken: sdk.String("ipsam"),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        NextToken: sdk.String("rem"),
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.ListGameServersXAmzTargetEnumGameLiftListGameServers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGameServersOutput != nil {
        // handle response
    }
}
```

## ListLocations

Lists all custom and Amazon Web Services locations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListLocations(ctx, operations.ListLocationsRequest{
        Limit: sdk.String("nulla"),
        ListLocationsInput: shared.ListLocationsInput{
            Filters: []shared.LocationFilterEnum{
                shared.LocationFilterEnumAws,
            },
            Limit: sdk.Int64(901483),
            NextToken: sdk.String("numquam"),
        },
        NextToken: sdk.String("veniam"),
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.ListLocationsXAmzTargetEnumGameLiftListLocations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsOutput != nil {
        // handle response
    }
}
```

## ListScripts

<p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListScripts(ctx, operations.ListScriptsRequest{
        Limit: sdk.String("laboriosam"),
        ListScriptsInput: shared.ListScriptsInput{
            Limit: sdk.Int64(680515),
            NextToken: sdk.String("voluptatum"),
        },
        NextToken: sdk.String("error"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.ListScriptsXAmzTargetEnumGameLiftListScripts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScriptsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "dolorum",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumGameLiftListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutScalingPolicy

<p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutScalingPolicy(ctx, operations.PutScalingPolicyRequest{
        PutScalingPolicyInput: shared.PutScalingPolicyInput{
            ComparisonOperator: shared.ComparisonOperatorTypeEnumGreaterThanOrEqualToThreshold.ToPointer(),
            EvaluationPeriods: sdk.Int64(635057),
            FleetID: "expedita",
            MetricName: shared.MetricNameEnumAvailableGameSessions,
            Name: "Ms. Georgia Hintz",
            PolicyType: shared.PolicyTypeEnumTargetBased.ToPointer(),
            ScalingAdjustment: sdk.Int64(361151),
            ScalingAdjustmentType: shared.ScalingAdjustmentTypeEnumChangeInCapacity.ToPointer(),
            TargetConfiguration: &shared.TargetConfiguration{
                TargetValue: 5027.1,
            },
            Threshold: sdk.Float64(4059.42),
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.PutScalingPolicyXAmzTargetEnumGameLiftPutScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutScalingPolicyOutput != nil {
        // handle response
    }
}
```

## RegisterCompute

<p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterCompute(ctx, operations.RegisterComputeRequest{
        RegisterComputeInput: shared.RegisterComputeInput{
            CertificatePath: sdk.String("incidunt"),
            ComputeName: "reiciendis",
            DNSName: sdk.String("dolorem"),
            FleetID: "harum",
            IPAddress: sdk.String("dicta"),
            Location: sdk.String("architecto"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.RegisterComputeXAmzTargetEnumGameLiftRegisterCompute,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterComputeOutput != nil {
        // handle response
    }
}
```

## RegisterGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterGameServer(ctx, operations.RegisterGameServerRequest{
        RegisterGameServerInput: shared.RegisterGameServerInput{
            ConnectionInfo: sdk.String("laboriosam"),
            GameServerData: sdk.String("alias"),
            GameServerGroupName: "amet",
            GameServerID: "deserunt",
            InstanceID: "voluptate",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.RegisterGameServerXAmzTargetEnumGameLiftRegisterGameServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterGameServerOutput != nil {
        // handle response
    }
}
```

## RequestUploadCredentials

<p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RequestUploadCredentials(ctx, operations.RequestUploadCredentialsRequest{
        RequestUploadCredentialsInput: shared.RequestUploadCredentialsInput{
            BuildID: "est",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.RequestUploadCredentialsXAmzTargetEnumGameLiftRequestUploadCredentials,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestUploadCredentialsOutput != nil {
        // handle response
    }
}
```

## ResolveAlias

<p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResolveAlias(ctx, operations.ResolveAliasRequest{
        ResolveAliasInput: shared.ResolveAliasInput{
            AliasID: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.ResolveAliasXAmzTargetEnumGameLiftResolveAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResolveAliasOutput != nil {
        // handle response
    }
}
```

## ResumeGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResumeGameServerGroup(ctx, operations.ResumeGameServerGroupRequest{
        ResumeGameServerGroupInput: shared.ResumeGameServerGroupInput{
            GameServerGroupName: "suscipit",
            ResumeActions: []shared.GameServerGroupActionEnum{
                shared.GameServerGroupActionEnumReplaceInstanceTypes,
                shared.GameServerGroupActionEnumReplaceInstanceTypes,
                shared.GameServerGroupActionEnumReplaceInstanceTypes,
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.ResumeGameServerGroupXAmzTargetEnumGameLiftResumeGameServerGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResumeGameServerGroupOutput != nil {
        // handle response
    }
}
```

## SearchGameSessions

<p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchGameSessions(ctx, operations.SearchGameSessionsRequest{
        Limit: sdk.String("error"),
        NextToken: sdk.String("officiis"),
        SearchGameSessionsInput: shared.SearchGameSessionsInput{
            AliasID: sdk.String("officiis"),
            FilterExpression: sdk.String("accusamus"),
            FleetID: sdk.String("natus"),
            Limit: sdk.Int64(328303),
            Location: sdk.String("aspernatur"),
            NextToken: sdk.String("ex"),
            SortExpression: sdk.String("maiores"),
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.SearchGameSessionsXAmzTargetEnumGameLiftSearchGameSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchGameSessionsOutput != nil {
        // handle response
    }
}
```

## StartFleetActions

<p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartFleetActions(ctx, operations.StartFleetActionsRequest{
        StartFleetActionsInput: shared.StartFleetActionsInput{
            Actions: []shared.FleetActionEnum{
                shared.FleetActionEnumAutoScaling,
                shared.FleetActionEnumAutoScaling,
                shared.FleetActionEnumAutoScaling,
            },
            FleetID: "sunt",
            Location: sdk.String("recusandae"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.StartFleetActionsXAmzTargetEnumGameLiftStartFleetActions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFleetActionsOutput != nil {
        // handle response
    }
}
```

## StartGameSessionPlacement

<p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartGameSessionPlacement(ctx, operations.StartGameSessionPlacementRequest{
        StartGameSessionPlacementInput: shared.StartGameSessionPlacementInput{
            DesiredPlayerSessions: []shared.DesiredPlayerSession{
                shared.DesiredPlayerSession{
                    PlayerData: sdk.String("beatae"),
                    PlayerID: sdk.String("dolores"),
                },
            },
            GameProperties: []shared.GameProperty{
                shared.GameProperty{
                    Key: "laboriosam",
                    Value: "velit",
                },
                shared.GameProperty{
                    Key: "a",
                    Value: "molestias",
                },
            },
            GameSessionData: sdk.String("magnam"),
            GameSessionName: sdk.String("saepe"),
            GameSessionQueueName: "consequuntur",
            MaximumPlayerSessionCount: 580107,
            PlacementID: "officiis",
            PlayerLatencies: []shared.PlayerLatency{
                shared.PlayerLatency{
                    LatencyInMilliseconds: sdk.Float32(4463.94),
                    PlayerID: sdk.String("adipisci"),
                    RegionIdentifier: sdk.String("eveniet"),
                },
                shared.PlayerLatency{
                    LatencyInMilliseconds: sdk.Float32(5808.87),
                    PlayerID: sdk.String("consequuntur"),
                    RegionIdentifier: sdk.String("fugit"),
                },
                shared.PlayerLatency{
                    LatencyInMilliseconds: sdk.Float32(6611.18),
                    PlayerID: sdk.String("quis"),
                    RegionIdentifier: sdk.String("reprehenderit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.StartGameSessionPlacementXAmzTargetEnumGameLiftStartGameSessionPlacement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartGameSessionPlacementOutput != nil {
        // handle response
    }
}
```

## StartMatchBackfill

<p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartMatchBackfill(ctx, operations.StartMatchBackfillRequest{
        StartMatchBackfillInput: shared.StartMatchBackfillInput{
            ConfigurationName: "doloremque",
            GameSessionArn: sdk.String("iure"),
            Players: []shared.Player{
                shared.Player{
                    LatencyInMs: map[string]int64{
                        "quae": 474668,
                        "eveniet": 184362,
                        "cum": 434761,
                    },
                    PlayerAttributes: map[string]shared.AttributeValue{
                        "ratione": shared.AttributeValue{
                            N: sdk.Float64(6725.82),
                            S: sdk.String("distinctio"),
                            Sdm: map[string]float64{
                                "rem": 3044.46,
                                "ad": 9979.63,
                                "alias": 3621.89,
                            },
                            Sl: []string{
                                "nihil",
                                "mollitia",
                                "voluptas",
                            },
                        },
                        "alias": shared.AttributeValue{
                            N: sdk.Float64(9795.27),
                            S: sdk.String("reiciendis"),
                            Sdm: map[string]float64{
                                "id": 3279.88,
                            },
                            Sl: []string{
                                "dolorum",
                                "nesciunt",
                            },
                        },
                        "quae": shared.AttributeValue{
                            N: sdk.Float64(9257.03),
                            S: sdk.String("omnis"),
                            Sdm: map[string]float64{
                                "molestiae": 4032.18,
                                "ut": 6330.62,
                            },
                            Sl: []string{
                                "debitis",
                            },
                        },
                        "laudantium": shared.AttributeValue{
                            N: sdk.Float64(4326.06),
                            S: sdk.String("nemo"),
                            Sdm: map[string]float64{
                                "esse": 5920.81,
                                "quis": 4317.85,
                                "reiciendis": 5927.8,
                                "aspernatur": 3545.06,
                            },
                            Sl: []string{
                                "animi",
                            },
                        },
                    },
                    PlayerID: sdk.String("nostrum"),
                    Team: sdk.String("mollitia"),
                },
            },
            TicketID: sdk.String("provident"),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.StartMatchBackfillXAmzTargetEnumGameLiftStartMatchBackfill,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartMatchBackfillOutput != nil {
        // handle response
    }
}
```

## StartMatchmaking

<p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartMatchmaking(ctx, operations.StartMatchmakingRequest{
        StartMatchmakingInput: shared.StartMatchmakingInput{
            ConfigurationName: "ullam",
            Players: []shared.Player{
                shared.Player{
                    LatencyInMs: map[string]int64{
                        "earum": 637583,
                        "laborum": 813054,
                        "modi": 976226,
                    },
                    PlayerAttributes: map[string]shared.AttributeValue{
                        "officiis": shared.AttributeValue{
                            N: sdk.Float64(9569.33),
                            S: sdk.String("cumque"),
                            Sdm: map[string]float64{
                                "rerum": 2722.29,
                            },
                            Sl: []string{
                                "inventore",
                                "fugit",
                            },
                        },
                        "cumque": shared.AttributeValue{
                            N: sdk.Float64(626.36),
                            S: sdk.String("perferendis"),
                            Sdm: map[string]float64{
                                "aspernatur": 4322.81,
                            },
                            Sl: []string{
                                "rem",
                                "at",
                            },
                        },
                        "impedit": shared.AttributeValue{
                            N: sdk.Float64(1794.1),
                            S: sdk.String("sapiente"),
                            Sdm: map[string]float64{
                                "dicta": 3251.18,
                                "beatae": 5834.04,
                            },
                            Sl: []string{
                                "earum",
                                "soluta",
                                "hic",
                            },
                        },
                    },
                    PlayerID: sdk.String("illum"),
                    Team: sdk.String("eaque"),
                },
                shared.Player{
                    LatencyInMs: map[string]int64{
                        "perspiciatis": 983427,
                        "debitis": 399802,
                        "porro": 380335,
                        "dolorem": 147808,
                    },
                    PlayerAttributes: map[string]shared.AttributeValue{
                        "fuga": shared.AttributeValue{
                            N: sdk.Float64(1890.62),
                            S: sdk.String("animi"),
                            Sdm: map[string]float64{
                                "nulla": 89.31,
                                "quasi": 902.33,
                                "ducimus": 6191.83,
                                "occaecati": 3824.4,
                            },
                            Sl: []string{
                                "quasi",
                            },
                        },
                        "magni": shared.AttributeValue{
                            N: sdk.Float64(9849.34),
                            S: sdk.String("nulla"),
                            Sdm: map[string]float64{
                                "ipsa": 2711.13,
                                "nihil": 4731.9,
                                "dicta": 4797.54,
                                "esse": 5083.9,
                            },
                            Sl: []string{
                                "reiciendis",
                                "vel",
                                "architecto",
                                "fugiat",
                            },
                        },
                        "doloremque": shared.AttributeValue{
                            N: sdk.Float64(1173.15),
                            S: sdk.String("odio"),
                            Sdm: map[string]float64{
                                "esse": 4037.93,
                                "consectetur": 3998.12,
                            },
                            Sl: []string{
                                "laborum",
                            },
                        },
                        "sunt": shared.AttributeValue{
                            N: sdk.Float64(3447.18),
                            S: sdk.String("fugiat"),
                            Sdm: map[string]float64{
                                "aliquid": 6391.87,
                                "suscipit": 3991.61,
                                "perferendis": 4317.6,
                            },
                            Sl: []string{
                                "iste",
                                "id",
                            },
                        },
                    },
                    PlayerID: sdk.String("ab"),
                    Team: sdk.String("error"),
                },
            },
            TicketID: sdk.String("possimus"),
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.StartMatchmakingXAmzTargetEnumGameLiftStartMatchmaking,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartMatchmakingOutput != nil {
        // handle response
    }
}
```

## StopFleetActions

<p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopFleetActions(ctx, operations.StopFleetActionsRequest{
        StopFleetActionsInput: shared.StopFleetActionsInput{
            Actions: []shared.FleetActionEnum{
                shared.FleetActionEnumAutoScaling,
            },
            FleetID: "repellendus",
            Location: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.StopFleetActionsXAmzTargetEnumGameLiftStopFleetActions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopFleetActionsOutput != nil {
        // handle response
    }
}
```

## StopGameSessionPlacement

Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopGameSessionPlacement(ctx, operations.StopGameSessionPlacementRequest{
        StopGameSessionPlacementInput: shared.StopGameSessionPlacementInput{
            PlacementID: "cum",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.StopGameSessionPlacementXAmzTargetEnumGameLiftStopGameSessionPlacement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopGameSessionPlacementOutput != nil {
        // handle response
    }
}
```

## StopMatchmaking

<p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopMatchmaking(ctx, operations.StopMatchmakingRequest{
        StopMatchmakingInput: shared.StopMatchmakingInput{
            TicketID: "culpa",
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.StopMatchmakingXAmzTargetEnumGameLiftStopMatchmaking,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopMatchmakingOutput != nil {
        // handle response
    }
}
```

## SuspendGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SuspendGameServerGroup(ctx, operations.SuspendGameServerGroupRequest{
        SuspendGameServerGroupInput: shared.SuspendGameServerGroupInput{
            GameServerGroupName: "voluptatem",
            SuspendActions: []shared.GameServerGroupActionEnum{
                shared.GameServerGroupActionEnumReplaceInstanceTypes,
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.SuspendGameServerGroupXAmzTargetEnumGameLiftSuspendGameServerGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuspendGameServerGroupOutput != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "asperiores",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ullam",
                    Value: "perferendis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumGameLiftTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "dolor",
            TagKeys: []string{
                "inventore",
                "deleniti",
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumGameLiftUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAlias

<p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAlias(ctx, operations.UpdateAliasRequest{
        UpdateAliasInput: shared.UpdateAliasInput{
            AliasID: "fugit",
            Description: sdk.String("ab"),
            Name: sdk.String("Eric Fadel"),
            RoutingStrategy: &shared.RoutingStrategy{
                FleetID: sdk.String("consequuntur"),
                Message: sdk.String("ipsa"),
                Type: shared.RoutingStrategyTypeEnumTerminal.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.UpdateAliasXAmzTargetEnumGameLiftUpdateAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAliasOutput != nil {
        // handle response
    }
}
```

## UpdateBuild

<p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBuild(ctx, operations.UpdateBuildRequest{
        UpdateBuildInput: shared.UpdateBuildInput{
            BuildID: "nesciunt",
            Name: sdk.String("Andre Kautzer"),
            Version: sdk.String("exercitationem"),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.UpdateBuildXAmzTargetEnumGameLiftUpdateBuild,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBuildOutput != nil {
        // handle response
    }
}
```

## UpdateFleetAttributes

<p>Updates a fleet's mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFleetAttributes(ctx, operations.UpdateFleetAttributesRequest{
        UpdateFleetAttributesInput: shared.UpdateFleetAttributesInput{
            AnywhereConfiguration: &shared.AnywhereConfiguration{
                Cost: "voluptatem",
            },
            Description: sdk.String("exercitationem"),
            FleetID: "necessitatibus",
            MetricGroups: []string{
                "nisi",
            },
            Name: sdk.String("Caleb Orn"),
            NewGameSessionProtectionPolicy: shared.ProtectionPolicyEnumFullProtection.ToPointer(),
            ResourceCreationLimitPolicy: &shared.ResourceCreationLimitPolicy{
                NewGameSessionsPerCreator: sdk.Int64(918092),
                PolicyPeriodInMinutes: sdk.Int64(759283),
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.UpdateFleetAttributesXAmzTargetEnumGameLiftUpdateFleetAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFleetAttributesOutput != nil {
        // handle response
    }
}
```

## UpdateFleetCapacity

<p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet's capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet's desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet's remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location's active instance count matches the new desired instance count. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type's limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFleetCapacity(ctx, operations.UpdateFleetCapacityRequest{
        UpdateFleetCapacityInput: shared.UpdateFleetCapacityInput{
            DesiredInstances: sdk.Int64(364912),
            FleetID: "quos",
            Location: sdk.String("eius"),
            MaxSize: sdk.Int64(131903),
            MinSize: sdk.Int64(495970),
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.UpdateFleetCapacityXAmzTargetEnumGameLiftUpdateFleetCapacity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFleetCapacityOutput != nil {
        // handle response
    }
}
```

## UpdateFleetPortSettings

<p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFleetPortSettings(ctx, operations.UpdateFleetPortSettingsRequest{
        UpdateFleetPortSettingsInput: shared.UpdateFleetPortSettingsInput{
            FleetID: "dicta",
            InboundPermissionAuthorizations: []shared.IPPermission{
                shared.IPPermission{
                    FromPort: 159845,
                    IPRange: "consectetur",
                    Protocol: shared.IPProtocolEnumTCP,
                    ToPort: 585432,
                },
                shared.IPPermission{
                    FromPort: 970732,
                    IPRange: "soluta",
                    Protocol: shared.IPProtocolEnumTCP,
                    ToPort: 608989,
                },
            },
            InboundPermissionRevocations: []shared.IPPermission{
                shared.IPPermission{
                    FromPort: 579011,
                    IPRange: "iste",
                    Protocol: shared.IPProtocolEnumTCP,
                    ToPort: 81369,
                },
            },
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.UpdateFleetPortSettingsXAmzTargetEnumGameLiftUpdateFleetPortSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFleetPortSettingsOutput != nil {
        // handle response
    }
}
```

## UpdateGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGameServer(ctx, operations.UpdateGameServerRequest{
        UpdateGameServerInput: shared.UpdateGameServerInput{
            GameServerData: sdk.String("praesentium"),
            GameServerGroupName: "maxime",
            GameServerID: "magnam",
            HealthCheck: shared.GameServerHealthCheckEnumHealthy.ToPointer(),
            UtilizationStatus: shared.GameServerUtilizationStatusEnumUtilized.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.UpdateGameServerXAmzTargetEnumGameLiftUpdateGameServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGameServerOutput != nil {
        // handle response
    }
}
```

## UpdateGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGameServerGroup(ctx, operations.UpdateGameServerGroupRequest{
        UpdateGameServerGroupInput: shared.UpdateGameServerGroupInput{
            BalancingStrategy: shared.BalancingStrategyEnumOnDemandOnly.ToPointer(),
            GameServerGroupName: "vero",
            GameServerProtectionPolicy: shared.GameServerProtectionPolicyEnumNoProtection.ToPointer(),
            InstanceDefinitions: []shared.InstanceDefinition{
                shared.InstanceDefinition{
                    InstanceType: shared.GameServerGroupInstanceTypeEnumR52xlarge,
                    WeightedCapacity: sdk.String("alias"),
                },
                shared.InstanceDefinition{
                    InstanceType: shared.GameServerGroupInstanceTypeEnumC54xlarge,
                    WeightedCapacity: sdk.String("non"),
                },
            },
            RoleArn: sdk.String("maiores"),
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.UpdateGameServerGroupXAmzTargetEnumGameLiftUpdateGameServerGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGameServerGroupOutput != nil {
        // handle response
    }
}
```

## UpdateGameSession

<p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGameSession(ctx, operations.UpdateGameSessionRequest{
        UpdateGameSessionInput: shared.UpdateGameSessionInput{
            GameSessionID: "est",
            MaximumPlayerSessionCount: sdk.Int64(336102),
            Name: sdk.String("Tomas Ryan"),
            PlayerSessionCreationPolicy: shared.PlayerSessionCreationPolicyEnumDenyAll.ToPointer(),
            ProtectionPolicy: shared.ProtectionPolicyEnumNoProtection.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.UpdateGameSessionXAmzTargetEnumGameLiftUpdateGameSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGameSessionOutput != nil {
        // handle response
    }
}
```

## UpdateGameSessionQueue

<p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGameSessionQueue(ctx, operations.UpdateGameSessionQueueRequest{
        UpdateGameSessionQueueInput: shared.UpdateGameSessionQueueInput{
            CustomEventData: sdk.String("consectetur"),
            Destinations: []shared.GameSessionQueueDestination{
                shared.GameSessionQueueDestination{
                    DestinationArn: sdk.String("atque"),
                },
            },
            FilterConfiguration: &shared.FilterConfiguration{
                AllowedLocations: []string{
                    "impedit",
                },
            },
            Name: "Shelia Walker",
            NotificationTarget: sdk.String("iusto"),
            PlayerLatencyPolicies: []shared.PlayerLatencyPolicy{
                shared.PlayerLatencyPolicy{
                    MaximumIndividualPlayerLatencyMilliseconds: sdk.Int64(194023),
                    PolicyDurationSeconds: sdk.Int64(493958),
                },
                shared.PlayerLatencyPolicy{
                    MaximumIndividualPlayerLatencyMilliseconds: sdk.Int64(205566),
                    PolicyDurationSeconds: sdk.Int64(778172),
                },
            },
            PriorityConfiguration: &shared.PriorityConfiguration{
                LocationOrder: []string{
                    "quibusdam",
                    "iure",
                    "odit",
                },
                PriorityOrder: []shared.PriorityTypeEnum{
                    shared.PriorityTypeEnumCost,
                    shared.PriorityTypeEnumCost,
                    shared.PriorityTypeEnumLocation,
                    shared.PriorityTypeEnumLatency,
                },
            },
            TimeoutInSeconds: sdk.Int64(818034),
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.UpdateGameSessionQueueXAmzTargetEnumGameLiftUpdateGameSessionQueue,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGameSessionQueueOutput != nil {
        // handle response
    }
}
```

## UpdateMatchmakingConfiguration

<p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateMatchmakingConfiguration(ctx, operations.UpdateMatchmakingConfigurationRequest{
        UpdateMatchmakingConfigurationInput: shared.UpdateMatchmakingConfigurationInput{
            AcceptanceRequired: sdk.Bool(false),
            AcceptanceTimeoutSeconds: sdk.Int64(75359),
            AdditionalPlayerCount: sdk.Int64(36561),
            BackfillMode: shared.BackfillModeEnumAutomatic.ToPointer(),
            CustomEventData: sdk.String("ea"),
            Description: sdk.String("beatae"),
            FlexMatchMode: shared.FlexMatchModeEnumWithQueue.ToPointer(),
            GameProperties: []shared.GameProperty{
                shared.GameProperty{
                    Key: "eum",
                    Value: "velit",
                },
                shared.GameProperty{
                    Key: "ut",
                    Value: "perspiciatis",
                },
                shared.GameProperty{
                    Key: "earum",
                    Value: "dicta",
                },
            },
            GameSessionData: sdk.String("impedit"),
            GameSessionQueueArns: []string{
                "iste",
                "itaque",
                "alias",
                "nisi",
            },
            Name: "Jacob Pacocha",
            NotificationTarget: sdk.String("iusto"),
            RequestTimeoutSeconds: sdk.Int64(24753),
            RuleSetName: sdk.String("doloremque"),
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.UpdateMatchmakingConfigurationXAmzTargetEnumGameLiftUpdateMatchmakingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMatchmakingConfigurationOutput != nil {
        // handle response
    }
}
```

## UpdateRuntimeConfiguration

<p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRuntimeConfiguration(ctx, operations.UpdateRuntimeConfigurationRequest{
        UpdateRuntimeConfigurationInput: shared.UpdateRuntimeConfigurationInput{
            FleetID: "placeat",
            RuntimeConfiguration: shared.RuntimeConfiguration{
                GameSessionActivationTimeoutSeconds: sdk.Int64(596065),
                MaxConcurrentGameSessionActivations: sdk.Int64(709036),
                ServerProcesses: []shared.ServerProcess{
                    shared.ServerProcess{
                        ConcurrentExecutions: 954334,
                        LaunchPath: "voluptate",
                        Parameters: sdk.String("ullam"),
                    },
                    shared.ServerProcess{
                        ConcurrentExecutions: 600193,
                        LaunchPath: "necessitatibus",
                        Parameters: sdk.String("animi"),
                    },
                    shared.ServerProcess{
                        ConcurrentExecutions: 769967,
                        LaunchPath: "ipsam",
                        Parameters: sdk.String("corporis"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.UpdateRuntimeConfigurationXAmzTargetEnumGameLiftUpdateRuntimeConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRuntimeConfigurationOutput != nil {
        // handle response
    }
}
```

## UpdateScript

<p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateScript(ctx, operations.UpdateScriptRequest{
        UpdateScriptInput: shared.UpdateScriptInput{
            Name: sdk.String("Stephanie Effertz"),
            ScriptID: "iste",
            StorageLocation: &shared.S3Location{
                Bucket: sdk.String("ex"),
                Key: sdk.String("nemo"),
                ObjectVersion: sdk.String("soluta"),
                RoleArn: sdk.String("libero"),
            },
            Version: sdk.String("rem"),
            ZipFile: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.UpdateScriptXAmzTargetEnumGameLiftUpdateScript,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateScriptOutput != nil {
        // handle response
    }
}
```

## ValidateMatchmakingRuleSet

<p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ValidateMatchmakingRuleSet(ctx, operations.ValidateMatchmakingRuleSetRequest{
        ValidateMatchmakingRuleSetInput: shared.ValidateMatchmakingRuleSetInput{
            RuleSetBody: "modi",
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.ValidateMatchmakingRuleSetXAmzTargetEnumGameLiftValidateMatchmakingRuleSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateMatchmakingRuleSetOutput != nil {
        // handle response
    }
}
```
