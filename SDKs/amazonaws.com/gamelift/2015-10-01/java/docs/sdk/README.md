# SDK

## Overview

<p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the cloud, including tools for deploying, operating, and scaling game servers. Built on Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance, high-reliability, low-cost game servers while dynamically scaling your resource usage to meet player demand. </p> <p> <b>About Amazon GameLift solutions</b> </p> <p>Get more information on these Amazon GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a>.</p> <ul> <li> <p>Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up and maintain computing machines for hosting, manage game session and player session life cycle, and handle security, storage, and performance tracking. You can use automatic scaling tools to balance player demand and hosting costs, configure your game session management to minimize player latency, and add FlexMatch for matchmaking.</p> </li> <li> <p>Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure and set up ready-to-go game servers for your game. Realtime Servers provides a game server framework with core Amazon GameLift infrastructure already built in. Then use the full range of Amazon GameLift managed hosting features, including FlexMatch, for your game.</p> </li> <li> <p>Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2 instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game hosting, including boosting the viability of low-cost Spot Instances gaming. For a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.</p> </li> <li> <p>Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a customizable matchmaking service for multiplayer games. Use FlexMatch as integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone service into your own hosting solution.</p> </li> </ul> <p> <b>About this API Reference</b> </p> <p>This reference guide describes the low-level service API for Amazon GameLift. With each topic in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI reference. Useful links:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift API operations listed by tasks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift tools and resources</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/gamelift/>
### Available Operations

* [acceptMatch](#acceptmatch) - <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match or failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. For tickets where players have accepted or not yet responded, the ticket status is returned to <code>SEARCHING</code> to find a new match. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>
* [claimGameServer](#claimgameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> </ul> <note> <p>When claiming a specific game server, this request will succeed even if the game server is running on an instance in <code>DRAINING</code> status. To avoid this, first check the instance status by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html">DescribeGameServerInstances</a> .</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [createAlias](#createalias) - <p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createBuild](#createbuild) - <p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the operation in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can't update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createFleet](#createfleet) - <p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet's home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>
* [createFleetLocations](#createfleetlocations) - <p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don't support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>
* [createGameServerGroup](#creategameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [createGameSession](#creategamesession) - <p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createGameSessionQueue](#creategamesessionqueue) - <p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createLocation](#createlocation) - Creates a custom location for use in an Anywhere fleet.
* [createMatchmakingConfiguration](#creatematchmakingconfiguration) - <p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>
* [createMatchmakingRuleSet](#creatematchmakingruleset) - <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>
* [createPlayerSession](#createplayersession) - <p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createPlayerSessions](#createplayersessions) - <p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createScript](#createscript) - <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createVpcPeeringAuthorization](#createvpcpeeringauthorization) - <p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [createVpcPeeringConnection](#createvpcpeeringconnection) - <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [deleteAlias](#deletealias) - <p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [deleteBuild](#deletebuild) - <p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [deleteFleet](#deletefleet) - <p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don't need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>
* [deleteFleetLocations](#deletefleetlocations) - <p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [deleteGameServerGroup](#deletegameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [deleteGameSessionQueue](#deletegamesessionqueue) - Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.
* [deleteLocation](#deletelocation) - <p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>
* [deleteMatchmakingConfiguration](#deletematchmakingconfiguration) - Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.
* [deleteMatchmakingRuleSet](#deletematchmakingruleset) - <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>
* [deleteScalingPolicy](#deletescalingpolicy) - <p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>
* [deleteScript](#deletescript) - <p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [deleteVpcPeeringAuthorization](#deletevpcpeeringauthorization) - <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [deleteVpcPeeringConnection](#deletevpcpeeringconnection) - <p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [deregisterCompute](#deregistercompute) - Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.
* [deregisterGameServer](#deregistergameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [describeAlias](#describealias) - <p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeBuild](#describebuild) - <p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeCompute](#describecompute) - Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.
* [describeEc2InstanceLimits](#describeec2instancelimits) - <p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [describeFleetAttributes](#describefleetattributes) - <p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [describeFleetCapacity](#describefleetcapacity) - <p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet's home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
* [describeFleetEvents](#describefleetevents) - <p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [describeFleetLocationAttributes](#describefleetlocationattributes) - <p>Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [describeFleetLocationCapacity](#describefleetlocationcapacity) - <p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
* [describeFleetLocationUtilization](#describefleetlocationutilization) - <p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
* [describeFleetPortSettings](#describefleetportsettings) - <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet's unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [describeFleetUtilization](#describefleetutilization) - <p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet's remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet's home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>
* [describeGameServer](#describegameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [describeGameServerGroup](#describegameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [describeGameServerInstances](#describegameserverinstances) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [describeGameSessionDetails](#describegamesessiondetails) - <p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeGameSessionPlacement](#describegamesessionplacement) - <p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>
* [describeGameSessionQueues](#describegamesessionqueues) - <p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>
* [describeGameSessions](#describegamesessions) - <p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeInstances](#describeinstances) - <p>Retrieves information about a fleet's instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet's home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet's remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeMatchmaking](#describematchmaking) - <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>
* [describeMatchmakingConfigurations](#describematchmakingconfigurations) - <p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>
* [describeMatchmakingRuleSets](#describematchmakingrulesets) - <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>
* [describePlayerSessions](#describeplayersessions) - <p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeRuntimeConfiguration](#describeruntimeconfiguration) - <p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>
* [describeScalingPolicies](#describescalingpolicies) - <p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>
* [describeScript](#describescript) - <p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeVpcPeeringAuthorizations](#describevpcpeeringauthorizations) - <p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [describeVpcPeeringConnections](#describevpcpeeringconnections) - <p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [getComputeAccess](#getcomputeaccess) - <p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>
* [getComputeAuthToken](#getcomputeauthtoken) - Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.
* [getGameSessionLogUrl](#getgamesessionlogurl) - <p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [getInstanceAccess](#getinstanceaccess) - <p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [listAliases](#listaliases) - <p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [listBuilds](#listbuilds) - <p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [listCompute](#listcompute) - Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.
* [listFleets](#listfleets) - <p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don't provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [listGameServerGroups](#listgameservergroups) - Lists a game server groups.
* [listGameServers](#listgameservers) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [listLocations](#listlocations) - Lists all custom and Amazon Web Services locations.
* [listScripts](#listscripts) - <p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [listTagsForResource](#listtagsforresource) - <p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [putScalingPolicy](#putscalingpolicy) - <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>
* [registerCompute](#registercompute) - <p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>
* [registerGameServer](#registergameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [requestUploadCredentials](#requestuploadcredentials) - <p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [resolveAlias](#resolvealias) - <p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [resumeGameServerGroup](#resumegameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [searchGameSessions](#searchgamesessions) - <p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [startFleetActions](#startfleetactions) - <p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [startGameSessionPlacement](#startgamesessionplacement) - <p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>
* [startMatchBackfill](#startmatchbackfill) - <p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>
* [startMatchmaking](#startmatchmaking) - <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>
* [stopFleetActions](#stopfleetactions) - <p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>
* [stopGameSessionPlacement](#stopgamesessionplacement) - Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.
* [stopMatchmaking](#stopmatchmaking) - <p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>
* [suspendGameServerGroup](#suspendgameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [tagResource](#tagresource) - <p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [untagResource](#untagresource) - <p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [updateAlias](#updatealias) - <p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [updateBuild](#updatebuild) - <p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [updateFleetAttributes](#updatefleetattributes) - <p>Updates a fleet's mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [updateFleetCapacity](#updatefleetcapacity) - <p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet's capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet's desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet's remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location's active instance count matches the new desired instance count. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type's limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>
* [updateFleetPortSettings](#updatefleetportsettings) - <p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [updateGameServer](#updategameserver) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [updateGameServerGroup](#updategameservergroup) - <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
* [updateGameSession](#updategamesession) - <p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [updateGameSessionQueue](#updategamesessionqueue) - <p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>
* [updateMatchmakingConfiguration](#updatematchmakingconfiguration) - <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>
* [updateRuntimeConfiguration](#updateruntimeconfiguration) - <p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
* [updateScript](#updatescript) - <p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
* [validateMatchmakingRuleSet](#validatematchmakingruleset) - <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

## acceptMatch

<p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match or failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. For tickets where players have accepted or not yet responded, the ticket status is returned to <code>SEARCHING</code> to find a new match. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptMatchRequest;
import org.openapis.openapi.models.operations.AcceptMatchResponse;
import org.openapis.openapi.models.operations.AcceptMatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptMatchInput;
import org.openapis.openapi.models.shared.AcceptanceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptMatchRequest req = new AcceptMatchRequest(                new AcceptMatchInput(AcceptanceTypeEnum.ACCEPT,                 new String[]{{
                                                add("tempora"),
                                                add("suscipit"),
                                                add("molestiae"),
                                                add("minus"),
                                            }}, "placeat");, AcceptMatchXAmzTargetEnum.GAME_LIFT_ACCEPT_MATCH) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            AcceptMatchResponse res = sdk.sdk.acceptMatch(req);

            if (res.acceptMatchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## claimGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> </ul> <note> <p>When claiming a specific game server, this request will succeed even if the game server is running on an instance in <code>DRAINING</code> status. To avoid this, first check the instance status by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html">DescribeGameServerInstances</a> .</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimGameServerRequest;
import org.openapis.openapi.models.operations.ClaimGameServerResponse;
import org.openapis.openapi.models.operations.ClaimGameServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClaimGameServerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimGameServerRequest req = new ClaimGameServerRequest(                new ClaimGameServerInput("veritatis") {{
                                gameServerData = "deserunt";
                                gameServerId = "perferendis";
                            }};, ClaimGameServerXAmzTargetEnum.GAME_LIFT_CLAIM_GAME_SERVER) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            ClaimGameServerResponse res = sdk.sdk.claimGameServer(req);

            if (res.claimGameServerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAlias

<p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.operations.CreateAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAliasInput;
import org.openapis.openapi.models.shared.RoutingStrategy;
import org.openapis.openapi.models.shared.RoutingStrategyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAliasRequest req = new CreateAliasRequest(                new CreateAliasInput("molestiae",                 new RoutingStrategy() {{
                                                fleetId = "quod";
                                                message = "quod";
                                                type = RoutingStrategyTypeEnum.SIMPLE;
                                            }};) {{
                                description = "totam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                    add(new Tag("deleniti", "hic") {{
                                        key = "occaecati";
                                        value = "fugit";
                                    }}),
                                    add(new Tag("beatae", "commodi") {{
                                        key = "optio";
                                        value = "totam";
                                    }}),
                                    add(new Tag("qui", "impedit") {{
                                        key = "molestiae";
                                        value = "modi";
                                    }}),
                                }};
                            }};, CreateAliasXAmzTargetEnum.GAME_LIFT_CREATE_ALIAS) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            CreateAliasResponse res = sdk.sdk.createAlias(req);

            if (res.createAliasOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBuild

<p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the operation in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can't update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBuildRequest;
import org.openapis.openapi.models.operations.CreateBuildResponse;
import org.openapis.openapi.models.operations.CreateBuildXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateBuildInput;
import org.openapis.openapi.models.shared.OperatingSystemEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBuildRequest req = new CreateBuildRequest(                new CreateBuildInput() {{
                                name = "Sheryl Fadel";
                                operatingSystem = OperatingSystemEnum.WINDOWS2016;
                                serverSDKVersion = "saepe";
                                storageLocation = new S3Location() {{
                                    bucket = "fuga";
                                    key = "in";
                                    objectVersion = "corporis";
                                    roleArn = "iste";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("architecto", "ipsa") {{
                                        key = "saepe";
                                        value = "quidem";
                                    }}),
                                    add(new Tag("mollitia", "laborum") {{
                                        key = "reiciendis";
                                        value = "est";
                                    }}),
                                }};
                                version = "dolores";
                            }};, CreateBuildXAmzTargetEnum.GAME_LIFT_CREATE_BUILD) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            CreateBuildResponse res = sdk.sdk.createBuild(req);

            if (res.createBuildOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFleet

<p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet's home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFleetRequest;
import org.openapis.openapi.models.operations.CreateFleetResponse;
import org.openapis.openapi.models.operations.CreateFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnywhereConfiguration;
import org.openapis.openapi.models.shared.CertificateConfiguration;
import org.openapis.openapi.models.shared.CertificateTypeEnum;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.CreateFleetInput;
import org.openapis.openapi.models.shared.Ec2InstanceTypeEnum;
import org.openapis.openapi.models.shared.FleetTypeEnum;
import org.openapis.openapi.models.shared.IpPermission;
import org.openapis.openapi.models.shared.IpProtocolEnum;
import org.openapis.openapi.models.shared.LocationConfiguration;
import org.openapis.openapi.models.shared.ProtectionPolicyEnum;
import org.openapis.openapi.models.shared.ResourceCreationLimitPolicy;
import org.openapis.openapi.models.shared.RuntimeConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerProcess;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFleetRequest req = new CreateFleetRequest(                new CreateFleetInput("excepturi") {{
                                anywhereConfiguration = new AnywhereConfiguration("accusantium");;
                                buildId = "iure";
                                certificateConfiguration = new CertificateConfiguration(CertificateTypeEnum.GENERATED);;
                                computeType = ComputeTypeEnum.ANYWHERE;
                                description = "sapiente";
                                ec2InboundPermissions = new org.openapis.openapi.models.shared.IpPermission[]{{
                                    add(new IpPermission(995300L, "mollitia", IpProtocolEnum.UDP, 253291L) {{
                                        fromPort = 652790L;
                                        ipRange = "dolorem";
                                        protocol = IpProtocolEnum.UDP;
                                        toPort = 161309L;
                                    }}),
                                }};
                                ec2InstanceType = Ec2InstanceTypeEnum.R516XLARGE;
                                fleetType = FleetTypeEnum.ON_DEMAND;
                                instanceRoleArn = "molestiae";
                                locations = new org.openapis.openapi.models.shared.LocationConfiguration[]{{
                                    add(new LocationConfiguration("quia") {{
                                        location = "error";
                                    }}),
                                }};
                                logPaths = new String[]{{
                                    add("vitae"),
                                    add("laborum"),
                                }};
                                metricGroups = new String[]{{
                                    add("enim"),
                                    add("odit"),
                                    add("quo"),
                                }};
                                newGameSessionProtectionPolicy = ProtectionPolicyEnum.NO_PROTECTION;
                                peerVpcAwsAccountId = "tenetur";
                                peerVpcId = "ipsam";
                                resourceCreationLimitPolicy = new ResourceCreationLimitPolicy() {{
                                    newGameSessionsPerCreator = 662527L;
                                    policyPeriodInMinutes = 820994L;
                                }};;
                                runtimeConfiguration = new RuntimeConfiguration() {{
                                    gameSessionActivationTimeoutSeconds = 13571L;
                                    maxConcurrentGameSessionActivations = 97101L;
                                    serverProcesses = new org.openapis.openapi.models.shared.ServerProcess[]{{
                                        add(new ServerProcess(971945L, "voluptatibus") {{
                                            concurrentExecutions = 837945L;
                                            launchPath = "laborum";
                                            parameters = "quasi";
                                        }}),
                                        add(new ServerProcess(976762L, "ipsa") {{
                                            concurrentExecutions = 878194L;
                                            launchPath = "nihil";
                                            parameters = "praesentium";
                                        }}),
                                        add(new ServerProcess(19987L, "doloremque") {{
                                            concurrentExecutions = 604846L;
                                            launchPath = "voluptate";
                                            parameters = "cum";
                                        }}),
                                    }};
                                }};;
                                scriptId = "reprehenderit";
                                serverLaunchParameters = "ut";
                                serverLaunchPath = "maiores";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("iusto", "dicta") {{
                                        key = "corporis";
                                        value = "dolore";
                                    }}),
                                }};
                            }};, CreateFleetXAmzTargetEnum.GAME_LIFT_CREATE_FLEET) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            CreateFleetResponse res = sdk.sdk.createFleet(req);

            if (res.createFleetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFleetLocations

<p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don't support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFleetLocationsRequest;
import org.openapis.openapi.models.operations.CreateFleetLocationsResponse;
import org.openapis.openapi.models.operations.CreateFleetLocationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFleetLocationsInput;
import org.openapis.openapi.models.shared.LocationConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFleetLocationsRequest req = new CreateFleetLocationsRequest(                new CreateFleetLocationsInput("molestias",                 new org.openapis.openapi.models.shared.LocationConfiguration[]{{
                                                add(new LocationConfiguration("modi") {{
                                                    location = "pariatur";
                                                }}),
                                                add(new LocationConfiguration("rem") {{
                                                    location = "praesentium";
                                                }}),
                                                add(new LocationConfiguration("quasi") {{
                                                    location = "voluptates";
                                                }}),
                                            }});, CreateFleetLocationsXAmzTargetEnum.GAME_LIFT_CREATE_FLEET_LOCATIONS) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            CreateFleetLocationsResponse res = sdk.sdk.createFleetLocations(req);

            if (res.createFleetLocationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGameServerGroupRequest;
import org.openapis.openapi.models.operations.CreateGameServerGroupResponse;
import org.openapis.openapi.models.operations.CreateGameServerGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.BalancingStrategyEnum;
import org.openapis.openapi.models.shared.CreateGameServerGroupInput;
import org.openapis.openapi.models.shared.GameServerGroupAutoScalingPolicy;
import org.openapis.openapi.models.shared.GameServerGroupInstanceTypeEnum;
import org.openapis.openapi.models.shared.GameServerProtectionPolicyEnum;
import org.openapis.openapi.models.shared.InstanceDefinition;
import org.openapis.openapi.models.shared.LaunchTemplateSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetTrackingConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGameServerGroupRequest req = new CreateGameServerGroupRequest(                new CreateGameServerGroupInput("quibusdam",                 new org.openapis.openapi.models.shared.InstanceDefinition[]{{
                                                add(new InstanceDefinition(GameServerGroupInstanceTypeEnum.M5A2XLARGE) {{
                                                    instanceType = GameServerGroupInstanceTypeEnum.R6G8XLARGE;
                                                    weightedCapacity = "distinctio";
                                                }}),
                                            }},                 new LaunchTemplateSpecification() {{
                                                launchTemplateId = "labore";
                                                launchTemplateName = "modi";
                                                version = "qui";
                                            }};, 397821L, 586513L, "quos") {{
                                autoScalingPolicy = new GameServerGroupAutoScalingPolicy(                new TargetTrackingConfiguration(201.07);) {{
                                    estimatedInstanceWarmup = 164940L;
                                }};;
                                balancingStrategy = BalancingStrategyEnum.ON_DEMAND_ONLY;
                                gameServerProtectionPolicy = GameServerProtectionPolicyEnum.NO_PROTECTION;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("excepturi", "tempora") {{
                                        key = "fugit";
                                        value = "dolorum";
                                    }}),
                                }};
                                vpcSubnets = new String[]{{
                                    add("tempore"),
                                    add("labore"),
                                    add("delectus"),
                                }};
                            }};, CreateGameServerGroupXAmzTargetEnum.GAME_LIFT_CREATE_GAME_SERVER_GROUP) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            CreateGameServerGroupResponse res = sdk.sdk.createGameServerGroup(req);

            if (res.createGameServerGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGameSession

<p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGameSessionRequest;
import org.openapis.openapi.models.operations.CreateGameSessionResponse;
import org.openapis.openapi.models.operations.CreateGameSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGameSessionInput;
import org.openapis.openapi.models.shared.GameProperty;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGameSessionRequest req = new CreateGameSessionRequest(                new CreateGameSessionInput(638921L) {{
                                aliasId = "dolor";
                                creatorId = "debitis";
                                fleetId = "a";
                                gameProperties = new org.openapis.openapi.models.shared.GameProperty[]{{
                                    add(new GameProperty("illum", "maiores") {{
                                        key = "in";
                                        value = "in";
                                    }}),
                                    add(new GameProperty("magnam", "cumque") {{
                                        key = "rerum";
                                        value = "dicta";
                                    }}),
                                    add(new GameProperty("aliquid", "laborum") {{
                                        key = "facere";
                                        value = "ea";
                                    }}),
                                }};
                                gameSessionData = "accusamus";
                                gameSessionId = "non";
                                idempotencyToken = "occaecati";
                                location = "enim";
                                name = "Toby Pouros";
                            }};, CreateGameSessionXAmzTargetEnum.GAME_LIFT_CREATE_GAME_SESSION) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            CreateGameSessionResponse res = sdk.sdk.createGameSession(req);

            if (res.createGameSessionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGameSessionQueue

<p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGameSessionQueueRequest;
import org.openapis.openapi.models.operations.CreateGameSessionQueueResponse;
import org.openapis.openapi.models.operations.CreateGameSessionQueueXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGameSessionQueueInput;
import org.openapis.openapi.models.shared.FilterConfiguration;
import org.openapis.openapi.models.shared.GameSessionQueueDestination;
import org.openapis.openapi.models.shared.PlayerLatencyPolicy;
import org.openapis.openapi.models.shared.PriorityConfiguration;
import org.openapis.openapi.models.shared.PriorityTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGameSessionQueueRequest req = new CreateGameSessionQueueRequest(                new CreateGameSessionQueueInput("natus") {{
                                customEventData = "omnis";
                                destinations = new org.openapis.openapi.models.shared.GameSessionQueueDestination[]{{
                                    add(new GameSessionQueueDestination() {{
                                        destinationArn = "perferendis";
                                    }}),
                                    add(new GameSessionQueueDestination() {{
                                        destinationArn = "nihil";
                                    }}),
                                }};
                                filterConfiguration = new FilterConfiguration() {{
                                    allowedLocations = new String[]{{
                                        add("distinctio"),
                                        add("id"),
                                    }};
                                }};;
                                notificationTarget = "labore";
                                playerLatencyPolicies = new org.openapis.openapi.models.shared.PlayerLatencyPolicy[]{{
                                    add(new PlayerLatencyPolicy() {{
                                        maximumIndividualPlayerLatencyMilliseconds = 383462L;
                                        policyDurationSeconds = 618016L;
                                    }}),
                                    add(new PlayerLatencyPolicy() {{
                                        maximumIndividualPlayerLatencyMilliseconds = 749170L;
                                        policyDurationSeconds = 428769L;
                                    }}),
                                }};
                                priorityConfiguration = new PriorityConfiguration() {{
                                    locationOrder = new String[]{{
                                        add("aspernatur"),
                                        add("architecto"),
                                        add("magnam"),
                                        add("et"),
                                    }};
                                    priorityOrder = new org.openapis.openapi.models.shared.PriorityTypeEnum[]{{
                                        add(PriorityTypeEnum.COST),
                                        add(PriorityTypeEnum.DESTINATION),
                                        add(PriorityTypeEnum.DESTINATION),
                                    }};
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("reiciendis", "mollitia") {{
                                        key = "accusantium";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag("dolor", "necessitatibus") {{
                                        key = "ad";
                                        value = "eum";
                                    }}),
                                    add(new Tag("quasi", "iure") {{
                                        key = "odit";
                                        value = "nemo";
                                    }}),
                                }};
                                timeoutInSeconds = 984043L;
                            }};, CreateGameSessionQueueXAmzTargetEnum.GAME_LIFT_CREATE_GAME_SESSION_QUEUE) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateGameSessionQueueResponse res = sdk.sdk.createGameSessionQueue(req);

            if (res.createGameSessionQueueOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocation

Creates a custom location for use in an Anywhere fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationRequest;
import org.openapis.openapi.models.operations.CreateLocationResponse;
import org.openapis.openapi.models.operations.CreateLocationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationRequest req = new CreateLocationRequest(                new CreateLocationInput("repudiandae") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("repellat", "quibusdam") {{
                                        key = "expedita";
                                        value = "nihil";
                                    }}),
                                    add(new Tag("pariatur", "accusantium") {{
                                        key = "sed";
                                        value = "saepe";
                                    }}),
                                }};
                            }};, CreateLocationXAmzTargetEnum.GAME_LIFT_CREATE_LOCATION) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            CreateLocationResponse res = sdk.sdk.createLocation(req);

            if (res.createLocationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMatchmakingConfiguration

<p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMatchmakingConfigurationRequest;
import org.openapis.openapi.models.operations.CreateMatchmakingConfigurationResponse;
import org.openapis.openapi.models.operations.CreateMatchmakingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.BackfillModeEnum;
import org.openapis.openapi.models.shared.CreateMatchmakingConfigurationInput;
import org.openapis.openapi.models.shared.FlexMatchModeEnum;
import org.openapis.openapi.models.shared.GameProperty;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMatchmakingConfigurationRequest req = new CreateMatchmakingConfigurationRequest(                new CreateMatchmakingConfigurationInput(false, "maxime", 411397L, "excepturi") {{
                                acceptanceTimeoutSeconds = 139972L;
                                additionalPlayerCount = 407183L;
                                backfillMode = BackfillModeEnum.AUTOMATIC;
                                customEventData = "ab";
                                description = "maiores";
                                flexMatchMode = FlexMatchModeEnum.WITH_QUEUE;
                                gameProperties = new org.openapis.openapi.models.shared.GameProperty[]{{
                                    add(new GameProperty("nam", "eaque") {{
                                        key = "voluptate";
                                        value = "autem";
                                    }}),
                                    add(new GameProperty("voluptatibus", "perferendis") {{
                                        key = "pariatur";
                                        value = "nemo";
                                    }}),
                                }};
                                gameSessionData = "fugiat";
                                gameSessionQueueArns = new String[]{{
                                    add("aut"),
                                }};
                                notificationTarget = "cumque";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nobis", "dolores") {{
                                        key = "hic";
                                        value = "libero";
                                    }}),
                                    add(new Tag("dignissimos", "eaque") {{
                                        key = "quis";
                                        value = "totam";
                                    }}),
                                }};
                            }};, CreateMatchmakingConfigurationXAmzTargetEnum.GAME_LIFT_CREATE_MATCHMAKING_CONFIGURATION) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            CreateMatchmakingConfigurationResponse res = sdk.sdk.createMatchmakingConfiguration(req);

            if (res.createMatchmakingConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMatchmakingRuleSet

<p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMatchmakingRuleSetRequest;
import org.openapis.openapi.models.operations.CreateMatchmakingRuleSetResponse;
import org.openapis.openapi.models.operations.CreateMatchmakingRuleSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMatchmakingRuleSetInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMatchmakingRuleSetRequest req = new CreateMatchmakingRuleSetRequest(                new CreateMatchmakingRuleSetInput("vero", "nostrum") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("facilis", "perspiciatis") {{
                                        key = "recusandae";
                                        value = "omnis";
                                    }}),
                                    add(new Tag("consequuntur", "blanditiis") {{
                                        key = "voluptatem";
                                        value = "porro";
                                    }}),
                                    add(new Tag("occaecati", "rerum") {{
                                        key = "error";
                                        value = "eaque";
                                    }}),
                                    add(new Tag("earum", "modi") {{
                                        key = "adipisci";
                                        value = "asperiores";
                                    }}),
                                }};
                            }};, CreateMatchmakingRuleSetXAmzTargetEnum.GAME_LIFT_CREATE_MATCHMAKING_RULE_SET) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "libero";
            }};            

            CreateMatchmakingRuleSetResponse res = sdk.sdk.createMatchmakingRuleSet(req);

            if (res.createMatchmakingRuleSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPlayerSession

<p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePlayerSessionRequest;
import org.openapis.openapi.models.operations.CreatePlayerSessionResponse;
import org.openapis.openapi.models.operations.CreatePlayerSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePlayerSessionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePlayerSessionRequest req = new CreatePlayerSessionRequest(                new CreatePlayerSessionInput("quaerat", "quos") {{
                                playerData = "aliquid";
                            }};, CreatePlayerSessionXAmzTargetEnum.GAME_LIFT_CREATE_PLAYER_SESSION) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreatePlayerSessionResponse res = sdk.sdk.createPlayerSession(req);

            if (res.createPlayerSessionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPlayerSessions

<p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePlayerSessionsRequest;
import org.openapis.openapi.models.operations.CreatePlayerSessionsResponse;
import org.openapis.openapi.models.operations.CreatePlayerSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePlayerSessionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePlayerSessionsRequest req = new CreatePlayerSessionsRequest(                new CreatePlayerSessionsInput("voluptate",                 new String[]{{
                                                add("reiciendis"),
                                                add("amet"),
                                            }}) {{
                                playerDataMap = new java.util.HashMap<String, String>() {{
                                    put("numquam", "veritatis");
                                    put("ipsa", "ipsa");
                                    put("iure", "odio");
                                }};
                            }};, CreatePlayerSessionsXAmzTargetEnum.GAME_LIFT_CREATE_PLAYER_SESSIONS) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            CreatePlayerSessionsResponse res = sdk.sdk.createPlayerSessions(req);

            if (res.createPlayerSessionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScript

<p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScriptRequest;
import org.openapis.openapi.models.operations.CreateScriptResponse;
import org.openapis.openapi.models.operations.CreateScriptXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateScriptInput;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScriptRequest req = new CreateScriptRequest(                new CreateScriptInput() {{
                                name = "Ginger Bergstrom";
                                storageLocation = new S3Location() {{
                                    bucket = "iusto";
                                    key = "voluptate";
                                    objectVersion = "dolorum";
                                    roleArn = "deleniti";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("asperiores", "nihil") {{
                                        key = "necessitatibus";
                                        value = "distinctio";
                                    }}),
                                    add(new Tag("id", "saepe") {{
                                        key = "ipsum";
                                        value = "voluptate";
                                    }}),
                                    add(new Tag("perferendis", "amet") {{
                                        key = "eius";
                                        value = "aspernatur";
                                    }}),
                                }};
                                version = "optio";
                                zipFile = "accusamus";
                            }};, CreateScriptXAmzTargetEnum.GAME_LIFT_CREATE_SCRIPT) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "suscipit";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "provident";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "repellendus";
            }};            

            CreateScriptResponse res = sdk.sdk.createScript(req);

            if (res.createScriptOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVpcPeeringAuthorization

<p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVpcPeeringAuthorizationRequest;
import org.openapis.openapi.models.operations.CreateVpcPeeringAuthorizationResponse;
import org.openapis.openapi.models.operations.CreateVpcPeeringAuthorizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVpcPeeringAuthorizationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVpcPeeringAuthorizationRequest req = new CreateVpcPeeringAuthorizationRequest(                new CreateVpcPeeringAuthorizationInput("similique", "alias");, CreateVpcPeeringAuthorizationXAmzTargetEnum.GAME_LIFT_CREATE_VPC_PEERING_AUTHORIZATION) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            CreateVpcPeeringAuthorizationResponse res = sdk.sdk.createVpcPeeringAuthorization(req);

            if (res.createVpcPeeringAuthorizationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVpcPeeringConnection

<p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVpcPeeringConnectionRequest;
import org.openapis.openapi.models.operations.CreateVpcPeeringConnectionResponse;
import org.openapis.openapi.models.operations.CreateVpcPeeringConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVpcPeeringConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVpcPeeringConnectionRequest req = new CreateVpcPeeringConnectionRequest(                new CreateVpcPeeringConnectionInput("a", "esse", "harum");, CreateVpcPeeringConnectionXAmzTargetEnum.GAME_LIFT_CREATE_VPC_PEERING_CONNECTION) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            CreateVpcPeeringConnectionResponse res = sdk.sdk.createVpcPeeringConnection(req);

            if (res.createVpcPeeringConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlias

<p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAliasRequest;
import org.openapis.openapi.models.operations.DeleteAliasResponse;
import org.openapis.openapi.models.operations.DeleteAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAliasInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAliasRequest req = new DeleteAliasRequest(                new DeleteAliasInput("enim");, DeleteAliasXAmzTargetEnum.GAME_LIFT_DELETE_ALIAS) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            DeleteAliasResponse res = sdk.sdk.deleteAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBuild

<p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBuildRequest;
import org.openapis.openapi.models.operations.DeleteBuildResponse;
import org.openapis.openapi.models.operations.DeleteBuildXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBuildInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBuildRequest req = new DeleteBuildRequest(                new DeleteBuildInput("vel");, DeleteBuildXAmzTargetEnum.GAME_LIFT_DELETE_BUILD) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            DeleteBuildResponse res = sdk.sdk.deleteBuild(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFleet

<p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don't need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFleetRequest;
import org.openapis.openapi.models.operations.DeleteFleetResponse;
import org.openapis.openapi.models.operations.DeleteFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFleetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFleetRequest req = new DeleteFleetRequest(                new DeleteFleetInput("maxime");, DeleteFleetXAmzTargetEnum.GAME_LIFT_DELETE_FLEET) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteFleetResponse res = sdk.sdk.deleteFleet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFleetLocations

<p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFleetLocationsRequest;
import org.openapis.openapi.models.operations.DeleteFleetLocationsResponse;
import org.openapis.openapi.models.operations.DeleteFleetLocationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFleetLocationsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFleetLocationsRequest req = new DeleteFleetLocationsRequest(                new DeleteFleetLocationsInput("distinctio",                 new String[]{{
                                                add("aliquid"),
                                                add("quam"),
                                                add("molestias"),
                                            }});, DeleteFleetLocationsXAmzTargetEnum.GAME_LIFT_DELETE_FLEET_LOCATIONS) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "qui";
                xAmzCredential = "neque";
                xAmzDate = "fugit";
                xAmzSecurityToken = "magni";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "sunt";
            }};            

            DeleteFleetLocationsResponse res = sdk.sdk.deleteFleetLocations(req);

            if (res.deleteFleetLocationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGameServerGroupRequest;
import org.openapis.openapi.models.operations.DeleteGameServerGroupResponse;
import org.openapis.openapi.models.operations.DeleteGameServerGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGameServerGroupInput;
import org.openapis.openapi.models.shared.GameServerGroupDeleteOptionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGameServerGroupRequest req = new DeleteGameServerGroupRequest(                new DeleteGameServerGroupInput("nam") {{
                                deleteOption = GameServerGroupDeleteOptionEnum.RETAIN;
                            }};, DeleteGameServerGroupXAmzTargetEnum.GAME_LIFT_DELETE_GAME_SERVER_GROUP) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "soluta";
                xAmzDate = "nobis";
                xAmzSecurityToken = "et";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ipsum";
            }};            

            DeleteGameServerGroupResponse res = sdk.sdk.deleteGameServerGroup(req);

            if (res.deleteGameServerGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGameSessionQueue

Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGameSessionQueueRequest;
import org.openapis.openapi.models.operations.DeleteGameSessionQueueResponse;
import org.openapis.openapi.models.operations.DeleteGameSessionQueueXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGameSessionQueueInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGameSessionQueueRequest req = new DeleteGameSessionQueueRequest(                new DeleteGameSessionQueueInput("nobis");, DeleteGameSessionQueueXAmzTargetEnum.GAME_LIFT_DELETE_GAME_SESSION_QUEUE) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteGameSessionQueueResponse res = sdk.sdk.deleteGameSessionQueue(req);

            if (res.deleteGameSessionQueueOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLocation

<p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLocationRequest;
import org.openapis.openapi.models.operations.DeleteLocationResponse;
import org.openapis.openapi.models.operations.DeleteLocationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLocationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLocationRequest req = new DeleteLocationRequest(                new DeleteLocationInput("adipisci");, DeleteLocationXAmzTargetEnum.GAME_LIFT_DELETE_LOCATION) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "quae";
                xAmzDate = "aut";
                xAmzSecurityToken = "quas";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "consequatur";
            }};            

            DeleteLocationResponse res = sdk.sdk.deleteLocation(req);

            if (res.deleteLocationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMatchmakingConfiguration

Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMatchmakingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteMatchmakingConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteMatchmakingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMatchmakingConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMatchmakingConfigurationRequest req = new DeleteMatchmakingConfigurationRequest(                new DeleteMatchmakingConfigurationInput("repellendus");, DeleteMatchmakingConfigurationXAmzTargetEnum.GAME_LIFT_DELETE_MATCHMAKING_CONFIGURATION) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "ut";
                xAmzDate = "facilis";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "quae";
            }};            

            DeleteMatchmakingConfigurationResponse res = sdk.sdk.deleteMatchmakingConfiguration(req);

            if (res.deleteMatchmakingConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMatchmakingRuleSet

<p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMatchmakingRuleSetRequest;
import org.openapis.openapi.models.operations.DeleteMatchmakingRuleSetResponse;
import org.openapis.openapi.models.operations.DeleteMatchmakingRuleSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMatchmakingRuleSetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMatchmakingRuleSetRequest req = new DeleteMatchmakingRuleSetRequest(                new DeleteMatchmakingRuleSetInput("odio");, DeleteMatchmakingRuleSetXAmzTargetEnum.GAME_LIFT_DELETE_MATCHMAKING_RULE_SET) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "quisquam";
                xAmzDate = "vero";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "ipsum";
            }};            

            DeleteMatchmakingRuleSetResponse res = sdk.sdk.deleteMatchmakingRuleSet(req);

            if (res.deleteMatchmakingRuleSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScalingPolicy

<p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScalingPolicyRequest;
import org.openapis.openapi.models.operations.DeleteScalingPolicyResponse;
import org.openapis.openapi.models.operations.DeleteScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteScalingPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScalingPolicyRequest req = new DeleteScalingPolicyRequest(                new DeleteScalingPolicyInput("voluptate", "consectetur");, DeleteScalingPolicyXAmzTargetEnum.GAME_LIFT_DELETE_SCALING_POLICY) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
            }};            

            DeleteScalingPolicyResponse res = sdk.sdk.deleteScalingPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScript

<p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScriptRequest;
import org.openapis.openapi.models.operations.DeleteScriptResponse;
import org.openapis.openapi.models.operations.DeleteScriptXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteScriptInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScriptRequest req = new DeleteScriptRequest(                new DeleteScriptInput("facilis");, DeleteScriptXAmzTargetEnum.GAME_LIFT_DELETE_SCRIPT) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteScriptResponse res = sdk.sdk.deleteScript(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVpcPeeringAuthorization

<p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVpcPeeringAuthorizationRequest;
import org.openapis.openapi.models.operations.DeleteVpcPeeringAuthorizationResponse;
import org.openapis.openapi.models.operations.DeleteVpcPeeringAuthorizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVpcPeeringAuthorizationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVpcPeeringAuthorizationRequest req = new DeleteVpcPeeringAuthorizationRequest(                new DeleteVpcPeeringAuthorizationInput("aut", "voluptatibus");, DeleteVpcPeeringAuthorizationXAmzTargetEnum.GAME_LIFT_DELETE_VPC_PEERING_AUTHORIZATION) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "fugit";
                xAmzDate = "porro";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "iusto";
            }};            

            DeleteVpcPeeringAuthorizationResponse res = sdk.sdk.deleteVpcPeeringAuthorization(req);

            if (res.deleteVpcPeeringAuthorizationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVpcPeeringConnection

<p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVpcPeeringConnectionRequest;
import org.openapis.openapi.models.operations.DeleteVpcPeeringConnectionResponse;
import org.openapis.openapi.models.operations.DeleteVpcPeeringConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVpcPeeringConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVpcPeeringConnectionRequest req = new DeleteVpcPeeringConnectionRequest(                new DeleteVpcPeeringConnectionInput("ducimus", "alias");, DeleteVpcPeeringConnectionXAmzTargetEnum.GAME_LIFT_DELETE_VPC_PEERING_CONNECTION) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "ipsam";
                xAmzDate = "ea";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "possimus";
            }};            

            DeleteVpcPeeringConnectionResponse res = sdk.sdk.deleteVpcPeeringConnection(req);

            if (res.deleteVpcPeeringConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterCompute

Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterComputeRequest;
import org.openapis.openapi.models.operations.DeregisterComputeResponse;
import org.openapis.openapi.models.operations.DeregisterComputeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterComputeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterComputeRequest req = new DeregisterComputeRequest(                new DeregisterComputeInput("ratione", "ex");, DeregisterComputeXAmzTargetEnum.GAME_LIFT_DEREGISTER_COMPUTE) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "dolor";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "nulla";
            }};            

            DeregisterComputeResponse res = sdk.sdk.deregisterCompute(req);

            if (res.deregisterComputeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterGameServerRequest;
import org.openapis.openapi.models.operations.DeregisterGameServerResponse;
import org.openapis.openapi.models.operations.DeregisterGameServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterGameServerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterGameServerRequest req = new DeregisterGameServerRequest(                new DeregisterGameServerInput("voluptatibus", "nostrum");, DeregisterGameServerXAmzTargetEnum.GAME_LIFT_DEREGISTER_GAME_SERVER) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "saepe";
                xAmzDate = "ea";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "veniam";
            }};            

            DeregisterGameServerResponse res = sdk.sdk.deregisterGameServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAlias

<p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAliasRequest;
import org.openapis.openapi.models.operations.DescribeAliasResponse;
import org.openapis.openapi.models.operations.DescribeAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAliasInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAliasRequest req = new DescribeAliasRequest(                new DescribeAliasInput("inventore");, DescribeAliasXAmzTargetEnum.GAME_LIFT_DESCRIBE_ALIAS) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quo";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeAliasResponse res = sdk.sdk.describeAlias(req);

            if (res.describeAliasOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBuild

<p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBuildRequest;
import org.openapis.openapi.models.operations.DescribeBuildResponse;
import org.openapis.openapi.models.operations.DescribeBuildXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBuildInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBuildRequest req = new DescribeBuildRequest(                new DescribeBuildInput("a");, DescribeBuildXAmzTargetEnum.GAME_LIFT_DESCRIBE_BUILD) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "fugit";
            }};            

            DescribeBuildResponse res = sdk.sdk.describeBuild(req);

            if (res.describeBuildOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCompute

Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComputeRequest;
import org.openapis.openapi.models.operations.DescribeComputeResponse;
import org.openapis.openapi.models.operations.DescribeComputeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeComputeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComputeRequest req = new DescribeComputeRequest(                new DescribeComputeInput("inventore", "non");, DescribeComputeXAmzTargetEnum.GAME_LIFT_DESCRIBE_COMPUTE) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "laborum";
                xAmzDate = "placeat";
                xAmzSecurityToken = "velit";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "autem";
            }};            

            DescribeComputeResponse res = sdk.sdk.describeCompute(req);

            if (res.describeComputeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEc2InstanceLimits

<p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEc2InstanceLimitsRequest;
import org.openapis.openapi.models.operations.DescribeEc2InstanceLimitsResponse;
import org.openapis.openapi.models.operations.DescribeEc2InstanceLimitsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEc2InstanceLimitsInput;
import org.openapis.openapi.models.shared.Ec2InstanceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEc2InstanceLimitsRequest req = new DescribeEc2InstanceLimitsRequest(                new DescribeEc2InstanceLimitsInput() {{
                                ec2InstanceType = Ec2InstanceTypeEnum.M42XLARGE;
                                location = "assumenda";
                            }};, DescribeEc2InstanceLimitsXAmzTargetEnum.GAME_LIFT_DESCRIBE_EC2_INSTANCE_LIMITS) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
            }};            

            DescribeEc2InstanceLimitsResponse res = sdk.sdk.describeEc2InstanceLimits(req);

            if (res.describeEc2InstanceLimitsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetAttributes

<p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetAttributesRequest;
import org.openapis.openapi.models.operations.DescribeFleetAttributesResponse;
import org.openapis.openapi.models.operations.DescribeFleetAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetAttributesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetAttributesRequest req = new DescribeFleetAttributesRequest(                new DescribeFleetAttributesInput() {{
                                fleetIds = new String[]{{
                                    add("molestiae"),
                                }};
                                limit = 301598L;
                                nextToken = "odio";
                            }};, DescribeFleetAttributesXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_ATTRIBUTES) {{
                limit = "eius";
                nextToken = "esse";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "rem";
                xAmzCredential = "fuga";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ut";
            }};            

            DescribeFleetAttributesResponse res = sdk.sdk.describeFleetAttributes(req);

            if (res.describeFleetAttributesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetCapacity

<p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet's home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetCapacityRequest;
import org.openapis.openapi.models.operations.DescribeFleetCapacityResponse;
import org.openapis.openapi.models.operations.DescribeFleetCapacityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetCapacityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetCapacityRequest req = new DescribeFleetCapacityRequest(                new DescribeFleetCapacityInput() {{
                                fleetIds = new String[]{{
                                    add("assumenda"),
                                    add("eos"),
                                }};
                                limit = 509342L;
                                nextToken = "quisquam";
                            }};, DescribeFleetCapacityXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_CAPACITY) {{
                limit = "veritatis";
                nextToken = "ipsa";
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "neque";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "fuga";
            }};            

            DescribeFleetCapacityResponse res = sdk.sdk.describeFleetCapacity(req);

            if (res.describeFleetCapacityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetEvents

<p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetEventsRequest;
import org.openapis.openapi.models.operations.DescribeFleetEventsResponse;
import org.openapis.openapi.models.operations.DescribeFleetEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetEventsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetEventsRequest req = new DescribeFleetEventsRequest(                new DescribeFleetEventsInput("eos") {{
                                endTime = OffsetDateTime.parse("2022-12-06T12:02:05.098Z");
                                limit = 587600L;
                                nextToken = "consequatur";
                                startTime = OffsetDateTime.parse("2022-02-09T09:38:41.756Z");
                            }};, DescribeFleetEventsXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_EVENTS) {{
                limit = "ipsam";
                nextToken = "aspernatur";
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "quo";
                xAmzCredential = "esse";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            DescribeFleetEventsResponse res = sdk.sdk.describeFleetEvents(req);

            if (res.describeFleetEventsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetLocationAttributes

<p>Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetLocationAttributesRequest;
import org.openapis.openapi.models.operations.DescribeFleetLocationAttributesResponse;
import org.openapis.openapi.models.operations.DescribeFleetLocationAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetLocationAttributesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetLocationAttributesRequest req = new DescribeFleetLocationAttributesRequest(                new DescribeFleetLocationAttributesInput("inventore") {{
                                limit = 469498L;
                                locations = new String[]{{
                                    add("accusamus"),
                                    add("aliquam"),
                                    add("odio"),
                                }};
                                nextToken = "occaecati";
                            }};, DescribeFleetLocationAttributesXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_LOCATION_ATTRIBUTES) {{
                limit = "commodi";
                nextToken = "sapiente";
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
            }};            

            DescribeFleetLocationAttributesResponse res = sdk.sdk.describeFleetLocationAttributes(req);

            if (res.describeFleetLocationAttributesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetLocationCapacity

<p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetLocationCapacityRequest;
import org.openapis.openapi.models.operations.DescribeFleetLocationCapacityResponse;
import org.openapis.openapi.models.operations.DescribeFleetLocationCapacityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetLocationCapacityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetLocationCapacityRequest req = new DescribeFleetLocationCapacityRequest(                new DescribeFleetLocationCapacityInput("consequuntur", "deleniti");, DescribeFleetLocationCapacityXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_LOCATION_CAPACITY) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeFleetLocationCapacityResponse res = sdk.sdk.describeFleetLocationCapacity(req);

            if (res.describeFleetLocationCapacityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetLocationUtilization

<p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetLocationUtilizationRequest;
import org.openapis.openapi.models.operations.DescribeFleetLocationUtilizationResponse;
import org.openapis.openapi.models.operations.DescribeFleetLocationUtilizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetLocationUtilizationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetLocationUtilizationRequest req = new DescribeFleetLocationUtilizationRequest(                new DescribeFleetLocationUtilizationInput("fugit", "sapiente");, DescribeFleetLocationUtilizationXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_LOCATION_UTILIZATION) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "explicabo";
                xAmzDate = "saepe";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "et";
            }};            

            DescribeFleetLocationUtilizationResponse res = sdk.sdk.describeFleetLocationUtilization(req);

            if (res.describeFleetLocationUtilizationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetPortSettings

<p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet's unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetPortSettingsRequest;
import org.openapis.openapi.models.operations.DescribeFleetPortSettingsResponse;
import org.openapis.openapi.models.operations.DescribeFleetPortSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetPortSettingsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetPortSettingsRequest req = new DescribeFleetPortSettingsRequest(                new DescribeFleetPortSettingsInput("eveniet") {{
                                location = "accusamus";
                            }};, DescribeFleetPortSettingsXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_PORT_SETTINGS) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quod";
                xAmzDate = "nam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeFleetPortSettingsResponse res = sdk.sdk.describeFleetPortSettings(req);

            if (res.describeFleetPortSettingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetUtilization

<p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet's remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet's home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetUtilizationRequest;
import org.openapis.openapi.models.operations.DescribeFleetUtilizationResponse;
import org.openapis.openapi.models.operations.DescribeFleetUtilizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetUtilizationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetUtilizationRequest req = new DescribeFleetUtilizationRequest(                new DescribeFleetUtilizationInput() {{
                                fleetIds = new String[]{{
                                    add("harum"),
                                    add("molestiae"),
                                }};
                                limit = 699622L;
                                nextToken = "occaecati";
                            }};, DescribeFleetUtilizationXAmzTargetEnum.GAME_LIFT_DESCRIBE_FLEET_UTILIZATION) {{
                limit = "minima";
                nextToken = "distinctio";
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sit";
                xAmzCredential = "culpa";
                xAmzDate = "tempore";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DescribeFleetUtilizationResponse res = sdk.sdk.describeFleetUtilization(req);

            if (res.describeFleetUtilizationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGameServerRequest;
import org.openapis.openapi.models.operations.DescribeGameServerResponse;
import org.openapis.openapi.models.operations.DescribeGameServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGameServerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGameServerRequest req = new DescribeGameServerRequest(                new DescribeGameServerInput("minus", "quaerat");, DescribeGameServerXAmzTargetEnum.GAME_LIFT_DESCRIBE_GAME_SERVER) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            DescribeGameServerResponse res = sdk.sdk.describeGameServer(req);

            if (res.describeGameServerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGameServerGroupRequest;
import org.openapis.openapi.models.operations.DescribeGameServerGroupResponse;
import org.openapis.openapi.models.operations.DescribeGameServerGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGameServerGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGameServerGroupRequest req = new DescribeGameServerGroupRequest(                new DescribeGameServerGroupInput("esse");, DescribeGameServerGroupXAmzTargetEnum.GAME_LIFT_DESCRIBE_GAME_SERVER_GROUP) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "a";
                xAmzCredential = "error";
                xAmzDate = "sint";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "quia";
            }};            

            DescribeGameServerGroupResponse res = sdk.sdk.describeGameServerGroup(req);

            if (res.describeGameServerGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGameServerInstances

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGameServerInstancesRequest;
import org.openapis.openapi.models.operations.DescribeGameServerInstancesResponse;
import org.openapis.openapi.models.operations.DescribeGameServerInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGameServerInstancesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGameServerInstancesRequest req = new DescribeGameServerInstancesRequest(                new DescribeGameServerInstancesInput("asperiores") {{
                                instanceIds = new String[]{{
                                    add("veritatis"),
                                    add("consequuntur"),
                                    add("quasi"),
                                    add("similique"),
                                }};
                                limit = 633608L;
                                nextToken = "aliquid";
                            }};, DescribeGameServerInstancesXAmzTargetEnum.GAME_LIFT_DESCRIBE_GAME_SERVER_INSTANCES) {{
                limit = "tenetur";
                nextToken = "quae";
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "in";
                xAmzDate = "eius";
                xAmzSecurityToken = "libero";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "soluta";
            }};            

            DescribeGameServerInstancesResponse res = sdk.sdk.describeGameServerInstances(req);

            if (res.describeGameServerInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGameSessionDetails

<p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGameSessionDetailsRequest;
import org.openapis.openapi.models.operations.DescribeGameSessionDetailsResponse;
import org.openapis.openapi.models.operations.DescribeGameSessionDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGameSessionDetailsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGameSessionDetailsRequest req = new DescribeGameSessionDetailsRequest(                new DescribeGameSessionDetailsInput() {{
                                aliasId = "aliquam";
                                fleetId = "sapiente";
                                gameSessionId = "dicta";
                                limit = 355369L;
                                location = "reprehenderit";
                                nextToken = "ullam";
                                statusFilter = "nisi";
                            }};, DescribeGameSessionDetailsXAmzTargetEnum.GAME_LIFT_DESCRIBE_GAME_SESSION_DETAILS) {{
                limit = "aut";
                nextToken = "voluptatum";
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "ex";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeGameSessionDetailsResponse res = sdk.sdk.describeGameSessionDetails(req);

            if (res.describeGameSessionDetailsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGameSessionPlacement

<p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGameSessionPlacementRequest;
import org.openapis.openapi.models.operations.DescribeGameSessionPlacementResponse;
import org.openapis.openapi.models.operations.DescribeGameSessionPlacementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGameSessionPlacementInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGameSessionPlacementRequest req = new DescribeGameSessionPlacementRequest(                new DescribeGameSessionPlacementInput("tenetur");, DescribeGameSessionPlacementXAmzTargetEnum.GAME_LIFT_DESCRIBE_GAME_SESSION_PLACEMENT) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "at";
                xAmzCredential = "et";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "veritatis";
            }};            

            DescribeGameSessionPlacementResponse res = sdk.sdk.describeGameSessionPlacement(req);

            if (res.describeGameSessionPlacementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGameSessionQueues

<p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGameSessionQueuesRequest;
import org.openapis.openapi.models.operations.DescribeGameSessionQueuesResponse;
import org.openapis.openapi.models.operations.DescribeGameSessionQueuesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGameSessionQueuesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGameSessionQueuesRequest req = new DescribeGameSessionQueuesRequest(                new DescribeGameSessionQueuesInput() {{
                                limit = 237173L;
                                names = new String[]{{
                                    add("temporibus"),
                                    add("accusantium"),
                                    add("rem"),
                                }};
                                nextToken = "aut";
                            }};, DescribeGameSessionQueuesXAmzTargetEnum.GAME_LIFT_DESCRIBE_GAME_SESSION_QUEUES) {{
                limit = "laudantium";
                nextToken = "eum";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ab";
                xAmzCredential = "corrupti";
                xAmzDate = "non";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
            }};            

            DescribeGameSessionQueuesResponse res = sdk.sdk.describeGameSessionQueues(req);

            if (res.describeGameSessionQueuesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGameSessions

<p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGameSessionsRequest;
import org.openapis.openapi.models.operations.DescribeGameSessionsResponse;
import org.openapis.openapi.models.operations.DescribeGameSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGameSessionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGameSessionsRequest req = new DescribeGameSessionsRequest(                new DescribeGameSessionsInput() {{
                                aliasId = "impedit";
                                fleetId = "explicabo";
                                gameSessionId = "voluptas";
                                limit = 12036L;
                                location = "dignissimos";
                                nextToken = "dicta";
                                statusFilter = "maiores";
                            }};, DescribeGameSessionsXAmzTargetEnum.GAME_LIFT_DESCRIBE_GAME_SESSIONS) {{
                limit = "natus";
                nextToken = "velit";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DescribeGameSessionsResponse res = sdk.sdk.describeGameSessions(req);

            if (res.describeGameSessionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstances

<p>Retrieves information about a fleet's instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet's home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet's remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstancesRequest;
import org.openapis.openapi.models.operations.DescribeInstancesResponse;
import org.openapis.openapi.models.operations.DescribeInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstancesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstancesRequest req = new DescribeInstancesRequest(                new DescribeInstancesInput("officia") {{
                                instanceId = "maxime";
                                limit = 490305L;
                                location = "officia";
                                nextToken = "asperiores";
                            }};, DescribeInstancesXAmzTargetEnum.GAME_LIFT_DESCRIBE_INSTANCES) {{
                limit = "nemo";
                nextToken = "quae";
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "porro";
                xAmzCredential = "quod";
                xAmzDate = "labore";
                xAmzSecurityToken = "ab";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "fuga";
            }};            

            DescribeInstancesResponse res = sdk.sdk.describeInstances(req);

            if (res.describeInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMatchmaking

<p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMatchmakingRequest;
import org.openapis.openapi.models.operations.DescribeMatchmakingResponse;
import org.openapis.openapi.models.operations.DescribeMatchmakingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMatchmakingInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMatchmakingRequest req = new DescribeMatchmakingRequest(                new DescribeMatchmakingInput(                new String[]{{
                                                add("velit"),
                                                add("culpa"),
                                            }});, DescribeMatchmakingXAmzTargetEnum.GAME_LIFT_DESCRIBE_MATCHMAKING) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "totam";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "vel";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "quos";
            }};            

            DescribeMatchmakingResponse res = sdk.sdk.describeMatchmaking(req);

            if (res.describeMatchmakingOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMatchmakingConfigurations

<p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMatchmakingConfigurationsRequest;
import org.openapis.openapi.models.operations.DescribeMatchmakingConfigurationsResponse;
import org.openapis.openapi.models.operations.DescribeMatchmakingConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMatchmakingConfigurationsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMatchmakingConfigurationsRequest req = new DescribeMatchmakingConfigurationsRequest(                new DescribeMatchmakingConfigurationsInput() {{
                                limit = 287051L;
                                names = new String[]{{
                                    add("facilis"),
                                    add("cum"),
                                    add("commodi"),
                                    add("in"),
                                }};
                                nextToken = "corporis";
                                ruleSetName = "reiciendis";
                            }};, DescribeMatchmakingConfigurationsXAmzTargetEnum.GAME_LIFT_DESCRIBE_MATCHMAKING_CONFIGURATIONS) {{
                limit = "assumenda";
                nextToken = "nemo";
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "aperiam";
                xAmzDate = "cum";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "in";
                xAmzSignedHeaders = "exercitationem";
            }};            

            DescribeMatchmakingConfigurationsResponse res = sdk.sdk.describeMatchmakingConfigurations(req);

            if (res.describeMatchmakingConfigurationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMatchmakingRuleSets

<p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMatchmakingRuleSetsRequest;
import org.openapis.openapi.models.operations.DescribeMatchmakingRuleSetsResponse;
import org.openapis.openapi.models.operations.DescribeMatchmakingRuleSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMatchmakingRuleSetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMatchmakingRuleSetsRequest req = new DescribeMatchmakingRuleSetsRequest(                new DescribeMatchmakingRuleSetsInput() {{
                                limit = 814967L;
                                names = new String[]{{
                                    add("doloribus"),
                                    add("suscipit"),
                                }};
                                nextToken = "reiciendis";
                            }};, DescribeMatchmakingRuleSetsXAmzTargetEnum.GAME_LIFT_DESCRIBE_MATCHMAKING_RULE_SETS) {{
                limit = "quidem";
                nextToken = "saepe";
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "sunt";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "non";
                xAmzSignedHeaders = "amet";
            }};            

            DescribeMatchmakingRuleSetsResponse res = sdk.sdk.describeMatchmakingRuleSets(req);

            if (res.describeMatchmakingRuleSetsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePlayerSessions

<p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePlayerSessionsRequest;
import org.openapis.openapi.models.operations.DescribePlayerSessionsResponse;
import org.openapis.openapi.models.operations.DescribePlayerSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePlayerSessionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePlayerSessionsRequest req = new DescribePlayerSessionsRequest(                new DescribePlayerSessionsInput() {{
                                gameSessionId = "dignissimos";
                                limit = 950953L;
                                nextToken = "debitis";
                                playerId = "consectetur";
                                playerSessionId = "corporis";
                                playerSessionStatusFilter = "harum";
                            }};, DescribePlayerSessionsXAmzTargetEnum.GAME_LIFT_DESCRIBE_PLAYER_SESSIONS) {{
                limit = "laboriosam";
                nextToken = "ipsa";
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "libero";
                xAmzCredential = "vitae";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "similique";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DescribePlayerSessionsResponse res = sdk.sdk.describePlayerSessions(req);

            if (res.describePlayerSessionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRuntimeConfiguration

<p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRuntimeConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeRuntimeConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeRuntimeConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRuntimeConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRuntimeConfigurationRequest req = new DescribeRuntimeConfigurationRequest(                new DescribeRuntimeConfigurationInput("voluptas");, DescribeRuntimeConfigurationXAmzTargetEnum.GAME_LIFT_DESCRIBE_RUNTIME_CONFIGURATION) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nobis";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "dolores";
            }};            

            DescribeRuntimeConfigurationResponse res = sdk.sdk.describeRuntimeConfiguration(req);

            if (res.describeRuntimeConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScalingPolicies

<p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScalingPoliciesRequest;
import org.openapis.openapi.models.operations.DescribeScalingPoliciesResponse;
import org.openapis.openapi.models.operations.DescribeScalingPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeScalingPoliciesInput;
import org.openapis.openapi.models.shared.ScalingStatusTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScalingPoliciesRequest req = new DescribeScalingPoliciesRequest(                new DescribeScalingPoliciesInput("in") {{
                                limit = 296242L;
                                location = "aliquam";
                                nextToken = "officiis";
                                statusFilter = ScalingStatusTypeEnum.DELETED;
                            }};, DescribeScalingPoliciesXAmzTargetEnum.GAME_LIFT_DESCRIBE_SCALING_POLICIES) {{
                limit = "ullam";
                nextToken = "adipisci";
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "quas";
                xAmzDate = "hic";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "corrupti";
            }};            

            DescribeScalingPoliciesResponse res = sdk.sdk.describeScalingPolicies(req);

            if (res.describeScalingPoliciesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScript

<p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScriptRequest;
import org.openapis.openapi.models.operations.DescribeScriptResponse;
import org.openapis.openapi.models.operations.DescribeScriptXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeScriptInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScriptRequest req = new DescribeScriptRequest(                new DescribeScriptInput("totam");, DescribeScriptXAmzTargetEnum.GAME_LIFT_DESCRIBE_SCRIPT) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nobis";
                xAmzDate = "sit";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DescribeScriptResponse res = sdk.sdk.describeScript(req);

            if (res.describeScriptOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVpcPeeringAuthorizations

<p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVpcPeeringAuthorizationsRequest;
import org.openapis.openapi.models.operations.DescribeVpcPeeringAuthorizationsResponse;
import org.openapis.openapi.models.operations.DescribeVpcPeeringAuthorizationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVpcPeeringAuthorizationsRequest req = new DescribeVpcPeeringAuthorizationsRequest(                new java.util.HashMap<String, Object>() {{
                                put("facilis", "voluptate");
                                put("expedita", "ab");
                                put("iste", "dolore");
                                put("laborum", "sed");
                            }}, DescribeVpcPeeringAuthorizationsXAmzTargetEnum.GAME_LIFT_DESCRIBE_VPC_PEERING_AUTHORIZATIONS) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quidem";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeVpcPeeringAuthorizationsResponse res = sdk.sdk.describeVpcPeeringAuthorizations(req);

            if (res.describeVpcPeeringAuthorizationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVpcPeeringConnections

<p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVpcPeeringConnectionsRequest;
import org.openapis.openapi.models.operations.DescribeVpcPeeringConnectionsResponse;
import org.openapis.openapi.models.operations.DescribeVpcPeeringConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeVpcPeeringConnectionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVpcPeeringConnectionsRequest req = new DescribeVpcPeeringConnectionsRequest(                new DescribeVpcPeeringConnectionsInput() {{
                                fleetId = "sapiente";
                            }};, DescribeVpcPeeringConnectionsXAmzTargetEnum.GAME_LIFT_DESCRIBE_VPC_PEERING_CONNECTIONS) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "illo";
                xAmzCredential = "reiciendis";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "incidunt";
            }};            

            DescribeVpcPeeringConnectionsResponse res = sdk.sdk.describeVpcPeeringConnections(req);

            if (res.describeVpcPeeringConnectionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComputeAccess

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComputeAccessRequest;
import org.openapis.openapi.models.operations.GetComputeAccessResponse;
import org.openapis.openapi.models.operations.GetComputeAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetComputeAccessInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComputeAccessRequest req = new GetComputeAccessRequest(                new GetComputeAccessInput("provident", "eius");, GetComputeAccessXAmzTargetEnum.GAME_LIFT_GET_COMPUTE_ACCESS) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "ea";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "quos";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "tempora";
            }};            

            GetComputeAccessResponse res = sdk.sdk.getComputeAccess(req);

            if (res.getComputeAccessOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComputeAuthToken

Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComputeAuthTokenRequest;
import org.openapis.openapi.models.operations.GetComputeAuthTokenResponse;
import org.openapis.openapi.models.operations.GetComputeAuthTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetComputeAuthTokenInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComputeAuthTokenRequest req = new GetComputeAuthTokenRequest(                new GetComputeAuthTokenInput("voluptate", "reiciendis");, GetComputeAuthTokenXAmzTargetEnum.GAME_LIFT_GET_COMPUTE_AUTH_TOKEN) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sit";
                xAmzCredential = "non";
                xAmzDate = "officiis";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetComputeAuthTokenResponse res = sdk.sdk.getComputeAuthToken(req);

            if (res.getComputeAuthTokenOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGameSessionLogUrl

<p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGameSessionLogUrlRequest;
import org.openapis.openapi.models.operations.GetGameSessionLogUrlResponse;
import org.openapis.openapi.models.operations.GetGameSessionLogUrlXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetGameSessionLogUrlInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGameSessionLogUrlRequest req = new GetGameSessionLogUrlRequest(                new GetGameSessionLogUrlInput("ipsam");, GetGameSessionLogUrlXAmzTargetEnum.GAME_LIFT_GET_GAME_SESSION_LOG_URL) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "rem";
                xAmzCredential = "sit";
                xAmzDate = "nobis";
                xAmzSecurityToken = "error";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "minima";
            }};            

            GetGameSessionLogUrlResponse res = sdk.sdk.getGameSessionLogUrl(req);

            if (res.getGameSessionLogUrlOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceAccess

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceAccessRequest;
import org.openapis.openapi.models.operations.GetInstanceAccessResponse;
import org.openapis.openapi.models.operations.GetInstanceAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceAccessInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceAccessRequest req = new GetInstanceAccessRequest(                new GetInstanceAccessInput("reiciendis", "nulla");, GetInstanceAccessXAmzTargetEnum.GAME_LIFT_GET_INSTANCE_ACCESS) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "saepe";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "in";
                xAmzSignedHeaders = "officiis";
            }};            

            GetInstanceAccessResponse res = sdk.sdk.getInstanceAccess(req);

            if (res.getInstanceAccessOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAliases

<p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAliasesRequest;
import org.openapis.openapi.models.operations.ListAliasesResponse;
import org.openapis.openapi.models.operations.ListAliasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAliasesInput;
import org.openapis.openapi.models.shared.RoutingStrategyTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAliasesRequest req = new ListAliasesRequest(                new ListAliasesInput() {{
                                limit = 512452L;
                                name = "Mabel Robel";
                                nextToken = "voluptatum";
                                routingStrategyType = RoutingStrategyTypeEnum.TERMINAL;
                            }};, ListAliasesXAmzTargetEnum.GAME_LIFT_LIST_ALIASES) {{
                limit = "hic";
                nextToken = "expedita";
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "neque";
                xAmzCredential = "dolorum";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "corrupti";
            }};            

            ListAliasesResponse res = sdk.sdk.listAliases(req);

            if (res.listAliasesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBuilds

<p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBuildsRequest;
import org.openapis.openapi.models.operations.ListBuildsResponse;
import org.openapis.openapi.models.operations.ListBuildsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BuildStatusEnum;
import org.openapis.openapi.models.shared.ListBuildsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBuildsRequest req = new ListBuildsRequest(                new ListBuildsInput() {{
                                limit = 272683L;
                                nextToken = "atque";
                                status = BuildStatusEnum.INITIALIZED;
                            }};, ListBuildsXAmzTargetEnum.GAME_LIFT_LIST_BUILDS) {{
                limit = "ut";
                nextToken = "fugiat";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "expedita";
                xAmzDate = "magnam";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsam";
            }};            

            ListBuildsResponse res = sdk.sdk.listBuilds(req);

            if (res.listBuildsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCompute

Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComputeRequest;
import org.openapis.openapi.models.operations.ListComputeResponse;
import org.openapis.openapi.models.operations.ListComputeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListComputeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComputeRequest req = new ListComputeRequest(                new ListComputeInput("voluptatum") {{
                                limit = 558065L;
                                location = "repudiandae";
                                nextToken = "corporis";
                            }};, ListComputeXAmzTargetEnum.GAME_LIFT_LIST_COMPUTE) {{
                limit = "et";
                nextToken = "blanditiis";
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sed";
                xAmzCredential = "sit";
                xAmzDate = "vel";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "error";
            }};            

            ListComputeResponse res = sdk.sdk.listCompute(req);

            if (res.listComputeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFleets

<p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don't provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFleetsRequest;
import org.openapis.openapi.models.operations.ListFleetsResponse;
import org.openapis.openapi.models.operations.ListFleetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFleetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFleetsRequest req = new ListFleetsRequest(                new ListFleetsInput() {{
                                buildId = "incidunt";
                                limit = 968865L;
                                nextToken = "dolorem";
                                scriptId = "harum";
                            }};, ListFleetsXAmzTargetEnum.GAME_LIFT_LIST_FLEETS) {{
                limit = "dicta";
                nextToken = "architecto";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "labore";
                xAmzCredential = "quidem";
                xAmzDate = "atque";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "tenetur";
            }};            

            ListFleetsResponse res = sdk.sdk.listFleets(req);

            if (res.listFleetsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGameServerGroups

Lists a game server groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGameServerGroupsRequest;
import org.openapis.openapi.models.operations.ListGameServerGroupsResponse;
import org.openapis.openapi.models.operations.ListGameServerGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGameServerGroupsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGameServerGroupsRequest req = new ListGameServerGroupsRequest(                new ListGameServerGroupsInput() {{
                                limit = 2703L;
                                nextToken = "amet";
                            }};, ListGameServerGroupsXAmzTargetEnum.GAME_LIFT_LIST_GAME_SERVER_GROUPS) {{
                limit = "deserunt";
                nextToken = "voluptate";
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "provident";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "perferendis";
            }};            

            ListGameServerGroupsResponse res = sdk.sdk.listGameServerGroups(req);

            if (res.listGameServerGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGameServers

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGameServersRequest;
import org.openapis.openapi.models.operations.ListGameServersResponse;
import org.openapis.openapi.models.operations.ListGameServersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGameServersInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGameServersRequest req = new ListGameServersRequest(                new ListGameServersInput("quidem") {{
                                limit = 440666L;
                                nextToken = "facere";
                                sortOrder = SortOrderEnum.DESCENDING;
                            }};, ListGameServersXAmzTargetEnum.GAME_LIFT_LIST_GAME_SERVERS) {{
                limit = "praesentium";
                nextToken = "mollitia";
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "quisquam";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            ListGameServersResponse res = sdk.sdk.listGameServers(req);

            if (res.listGameServersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLocations

Lists all custom and Amazon Web Services locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLocationsRequest;
import org.openapis.openapi.models.operations.ListLocationsResponse;
import org.openapis.openapi.models.operations.ListLocationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLocationsInput;
import org.openapis.openapi.models.shared.LocationFilterEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLocationsRequest req = new ListLocationsRequest(                new ListLocationsInput() {{
                                filters = new org.openapis.openapi.models.shared.LocationFilterEnum[]{{
                                    add(LocationFilterEnum.AWS),
                                    add(LocationFilterEnum.CUSTOM),
                                    add(LocationFilterEnum.CUSTOM),
                                }};
                                limit = 90885L;
                                nextToken = "esse";
                            }};, ListLocationsXAmzTargetEnum.GAME_LIFT_LIST_LOCATIONS) {{
                limit = "amet";
                nextToken = "assumenda";
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "atque";
                xAmzCredential = "error";
                xAmzDate = "officiis";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "natus";
            }};            

            ListLocationsResponse res = sdk.sdk.listLocations(req);

            if (res.listLocationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listScripts

<p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScriptsRequest;
import org.openapis.openapi.models.operations.ListScriptsResponse;
import org.openapis.openapi.models.operations.ListScriptsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListScriptsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListScriptsRequest req = new ListScriptsRequest(                new ListScriptsInput() {{
                                limit = 133461L;
                                nextToken = "ex";
                            }};, ListScriptsXAmzTargetEnum.GAME_LIFT_LIST_SCRIPTS) {{
                limit = "maiores";
                nextToken = "corrupti";
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "error";
                xAmzCredential = "blanditiis";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "atque";
            }};            

            ListScriptsResponse res = sdk.sdk.listScripts(req);

            if (res.listScriptsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("recusandae");, ListTagsForResourceXAmzTargetEnum.GAME_LIFT_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "labore";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "dicta";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putScalingPolicy

<p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutScalingPolicyRequest;
import org.openapis.openapi.models.operations.PutScalingPolicyResponse;
import org.openapis.openapi.models.operations.PutScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorTypeEnum;
import org.openapis.openapi.models.shared.MetricNameEnum;
import org.openapis.openapi.models.shared.PolicyTypeEnum;
import org.openapis.openapi.models.shared.PutScalingPolicyInput;
import org.openapis.openapi.models.shared.ScalingAdjustmentTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutScalingPolicyRequest req = new PutScalingPolicyRequest(                new PutScalingPolicyInput("beatae", MetricNameEnum.ACTIVE_INSTANCES, "enim") {{
                                comparisonOperator = ComparisonOperatorTypeEnum.GREATER_THAN_THRESHOLD;
                                evaluationPeriods = 246535L;
                                policyType = PolicyTypeEnum.TARGET_BASED;
                                scalingAdjustment = 562783L;
                                scalingAdjustmentType = ScalingAdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                targetConfiguration = new TargetConfiguration(9063.55);;
                                threshold = 1604.67;
                            }};, PutScalingPolicyXAmzTargetEnum.GAME_LIFT_PUT_SCALING_POLICY) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "in";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "occaecati";
            }};            

            PutScalingPolicyResponse res = sdk.sdk.putScalingPolicy(req);

            if (res.putScalingPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerCompute

<p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterComputeRequest;
import org.openapis.openapi.models.operations.RegisterComputeResponse;
import org.openapis.openapi.models.operations.RegisterComputeXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterComputeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterComputeRequest req = new RegisterComputeRequest(                new RegisterComputeInput("fugit", "id") {{
                                certificatePath = "quis";
                                dnsName = "reprehenderit";
                                ipAddress = "error";
                                location = "illo";
                            }};, RegisterComputeXAmzTargetEnum.GAME_LIFT_REGISTER_COMPUTE) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "eveniet";
                xAmzDate = "non";
                xAmzSecurityToken = "vero";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "iure";
            }};            

            RegisterComputeResponse res = sdk.sdk.registerCompute(req);

            if (res.registerComputeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterGameServerRequest;
import org.openapis.openapi.models.operations.RegisterGameServerResponse;
import org.openapis.openapi.models.operations.RegisterGameServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterGameServerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterGameServerRequest req = new RegisterGameServerRequest(                new RegisterGameServerInput("totam", "quae", "molestiae") {{
                                connectionInfo = "eveniet";
                                gameServerData = "qui";
                            }};, RegisterGameServerXAmzTargetEnum.GAME_LIFT_REGISTER_GAME_SERVER) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "iure";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ratione";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "voluptatum";
            }};            

            RegisterGameServerResponse res = sdk.sdk.registerGameServer(req);

            if (res.registerGameServerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestUploadCredentials

<p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestUploadCredentialsRequest;
import org.openapis.openapi.models.operations.RequestUploadCredentialsResponse;
import org.openapis.openapi.models.operations.RequestUploadCredentialsXAmzTargetEnum;
import org.openapis.openapi.models.shared.RequestUploadCredentialsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestUploadCredentialsRequest req = new RequestUploadCredentialsRequest(                new RequestUploadCredentialsInput("aliquam");, RequestUploadCredentialsXAmzTargetEnum.GAME_LIFT_REQUEST_UPLOAD_CREDENTIALS) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "alias";
                xAmzDate = "corporis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "mollitia";
            }};            

            RequestUploadCredentialsResponse res = sdk.sdk.requestUploadCredentials(req);

            if (res.requestUploadCredentialsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resolveAlias

<p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResolveAliasRequest;
import org.openapis.openapi.models.operations.ResolveAliasResponse;
import org.openapis.openapi.models.operations.ResolveAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResolveAliasInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResolveAliasRequest req = new ResolveAliasRequest(                new ResolveAliasInput("alias");, ResolveAliasXAmzTargetEnum.GAME_LIFT_RESOLVE_ALIAS) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "dolores";
                xAmzDate = "id";
                xAmzSecurityToken = "minima";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "dolorum";
            }};            

            ResolveAliasResponse res = sdk.sdk.resolveAlias(req);

            if (res.resolveAliasOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resumeGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeGameServerGroupRequest;
import org.openapis.openapi.models.operations.ResumeGameServerGroupResponse;
import org.openapis.openapi.models.operations.ResumeGameServerGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GameServerGroupActionEnum;
import org.openapis.openapi.models.shared.ResumeGameServerGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResumeGameServerGroupRequest req = new ResumeGameServerGroupRequest(                new ResumeGameServerGroupInput("quae",                 new org.openapis.openapi.models.shared.GameServerGroupActionEnum[]{{
                                                add(GameServerGroupActionEnum.REPLACE_INSTANCE_TYPES),
                                                add(GameServerGroupActionEnum.REPLACE_INSTANCE_TYPES),
                                                add(GameServerGroupActionEnum.REPLACE_INSTANCE_TYPES),
                                                add(GameServerGroupActionEnum.REPLACE_INSTANCE_TYPES),
                                            }});, ResumeGameServerGroupXAmzTargetEnum.GAME_LIFT_RESUME_GAME_SERVER_GROUP) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "molestiae";
                xAmzDate = "ex";
                xAmzSecurityToken = "ut";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "adipisci";
            }};            

            ResumeGameServerGroupResponse res = sdk.sdk.resumeGameServerGroup(req);

            if (res.resumeGameServerGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchGameSessions

<p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGameSessionsRequest;
import org.openapis.openapi.models.operations.SearchGameSessionsResponse;
import org.openapis.openapi.models.operations.SearchGameSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.SearchGameSessionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchGameSessionsRequest req = new SearchGameSessionsRequest(                new SearchGameSessionsInput() {{
                                aliasId = "laudantium";
                                filterExpression = "eum";
                                fleetId = "nemo";
                                limit = 928219L;
                                location = "esse";
                                nextToken = "provident";
                                sortExpression = "quis";
                            }};, SearchGameSessionsXAmzTargetEnum.GAME_LIFT_SEARCH_GAME_SESSIONS) {{
                limit = "eum";
                nextToken = "reiciendis";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ullam";
                xAmzDate = "quasi";
                xAmzSecurityToken = "animi";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "mollitia";
            }};            

            SearchGameSessionsResponse res = sdk.sdk.searchGameSessions(req);

            if (res.searchGameSessionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFleetActions

<p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFleetActionsRequest;
import org.openapis.openapi.models.operations.StartFleetActionsResponse;
import org.openapis.openapi.models.operations.StartFleetActionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FleetActionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartFleetActionsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFleetActionsRequest req = new StartFleetActionsRequest(                new StartFleetActionsInput(                new org.openapis.openapi.models.shared.FleetActionEnum[]{{
                                                add(FleetActionEnum.AUTO_SCALING),
                                                add(FleetActionEnum.AUTO_SCALING),
                                                add(FleetActionEnum.AUTO_SCALING),
                                                add(FleetActionEnum.AUTO_SCALING),
                                            }}, "animi") {{
                                location = "ex";
                            }};, StartFleetActionsXAmzTargetEnum.GAME_LIFT_START_FLEET_ACTIONS) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "repellat";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "in";
                xAmzSignedHeaders = "nam";
            }};            

            StartFleetActionsResponse res = sdk.sdk.startFleetActions(req);

            if (res.startFleetActionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startGameSessionPlacement

<p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartGameSessionPlacementRequest;
import org.openapis.openapi.models.operations.StartGameSessionPlacementResponse;
import org.openapis.openapi.models.operations.StartGameSessionPlacementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DesiredPlayerSession;
import org.openapis.openapi.models.shared.GameProperty;
import org.openapis.openapi.models.shared.PlayerLatency;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartGameSessionPlacementInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartGameSessionPlacementRequest req = new StartGameSessionPlacementRequest(                new StartGameSessionPlacementInput("officia", 672041L, "placeat") {{
                                desiredPlayerSessions = new org.openapis.openapi.models.shared.DesiredPlayerSession[]{{
                                    add(new DesiredPlayerSession() {{
                                        playerData = "voluptatibus";
                                        playerId = "molestias";
                                    }}),
                                    add(new DesiredPlayerSession() {{
                                        playerData = "officiis";
                                        playerId = "sapiente";
                                    }}),
                                }};
                                gameProperties = new org.openapis.openapi.models.shared.GameProperty[]{{
                                    add(new GameProperty("tempora", "quis") {{
                                        key = "vitae";
                                        value = "rerum";
                                    }}),
                                    add(new GameProperty("cumque", "quae") {{
                                        key = "inventore";
                                        value = "fugit";
                                    }}),
                                    add(new GameProperty("aspernatur", "eum") {{
                                        key = "perferendis";
                                        value = "velit";
                                    }}),
                                    add(new GameProperty("at", "impedit") {{
                                        key = "eius";
                                        value = "rem";
                                    }}),
                                }};
                                gameSessionData = "eos";
                                gameSessionName = "sapiente";
                                playerLatencies = new org.openapis.openapi.models.shared.PlayerLatency[]{{
                                    add(new PlayerLatency() {{
                                        latencyInMilliseconds = 1173.2;
                                        playerId = "minima";
                                        regionIdentifier = "beatae";
                                    }}),
                                    add(new PlayerLatency() {{
                                        latencyInMilliseconds = 5834.04;
                                        playerId = "provident";
                                        regionIdentifier = "earum";
                                    }}),
                                }};
                            }};, StartGameSessionPlacementXAmzTargetEnum.GAME_LIFT_START_GAME_SESSION_PLACEMENT) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "hic";
                xAmzCredential = "illum";
                xAmzDate = "eaque";
                xAmzSecurityToken = "earum";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "maiores";
            }};            

            StartGameSessionPlacementResponse res = sdk.sdk.startGameSessionPlacement(req);

            if (res.startGameSessionPlacementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startMatchBackfill

<p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartMatchBackfillRequest;
import org.openapis.openapi.models.operations.StartMatchBackfillResponse;
import org.openapis.openapi.models.operations.StartMatchBackfillXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.Player;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartMatchBackfillInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartMatchBackfillRequest req = new StartMatchBackfillRequest(                new StartMatchBackfillInput("aliquid",                 new org.openapis.openapi.models.shared.Player[]{{
                                                add(new Player() {{
                                                    latencyInMs = new java.util.HashMap<String, Long>() {{
                                                        put("dolorem", 147808L);
                                                        put("cumque", 684935L);
                                                    }};
                                                    playerAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                        put("animi", new AttributeValue() {{
                                                            n = 8987.6;
                                                            s = "nulla";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("quasi", 902.33);
                                                            }};
                                                            sl = new String[]{{
                                                                add("natus"),
                                                                add("occaecati"),
                                                            }};
                                                        }});
                                                    }};
                                                    playerId = "suscipit";
                                                    team = "adipisci";
                                                }}),
                                                add(new Player() {{
                                                    latencyInMs = new java.util.HashMap<String, Long>() {{
                                                        put("magni", 984934L);
                                                    }};
                                                    playerAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                        put("necessitatibus", new AttributeValue() {{
                                                            n = 585.34;
                                                            s = "tempora";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("molestiae", 1158.34);
                                                                put("iusto", 4570.59);
                                                            }};
                                                            sl = new String[]{{
                                                                add("maiores"),
                                                                add("reiciendis"),
                                                                add("vel"),
                                                            }};
                                                        }});
                                                        put("architecto", new AttributeValue() {{
                                                            n = 8571.25;
                                                            s = "doloremque";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("odio", 2712.52);
                                                            }};
                                                            sl = new String[]{{
                                                                add("ex"),
                                                                add("consectetur"),
                                                            }};
                                                        }});
                                                        put("aliquid", new AttributeValue() {{
                                                            n = 588.7;
                                                            s = "laborum";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("nostrum", 8567.56);
                                                            }};
                                                            sl = new String[]{{
                                                                add("aliquid"),
                                                                add("officia"),
                                                                add("suscipit"),
                                                            }};
                                                        }});
                                                        put("aliquid", new AttributeValue() {{
                                                            n = 219.73;
                                                            s = "eum";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("iste", 6616.07);
                                                                put("ab", 6253.58);
                                                            }};
                                                            sl = new String[]{{
                                                                add("voluptates"),
                                                                add("mollitia"),
                                                                add("laborum"),
                                                                add("libero"),
                                                            }};
                                                        }});
                                                    }};
                                                    playerId = "ad";
                                                    team = "deleniti";
                                                }}),
                                                add(new Player() {{
                                                    latencyInMs = new java.util.HashMap<String, Long>() {{
                                                        put("vitae", 833316L);
                                                        put("ex", 775803L);
                                                    }};
                                                    playerAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                        put("ut", new AttributeValue() {{
                                                            n = 3210.43;
                                                            s = "expedita";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("molestias", 7372.54);
                                                            }};
                                                            sl = new String[]{{
                                                                add("beatae"),
                                                                add("voluptatum"),
                                                            }};
                                                        }});
                                                        put("omnis", new AttributeValue() {{
                                                            n = 852.33;
                                                            s = "rerum";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("culpa", 296.34);
                                                                put("sapiente", 8892.88);
                                                                put("architecto", 6821.19);
                                                            }};
                                                            sl = new String[]{{
                                                                add("debitis"),
                                                                add("voluptatem"),
                                                                add("alias"),
                                                                add("deleniti"),
                                                            }};
                                                        }});
                                                    }};
                                                    playerId = "earum";
                                                    team = "ex";
                                                }}),
                                                add(new Player() {{
                                                    latencyInMs = new java.util.HashMap<String, Long>() {{
                                                        put("rem", 796320L);
                                                        put("nemo", 992074L);
                                                        put("ratione", 355225L);
                                                        put("perferendis", 848341L);
                                                    }};
                                                    playerAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                        put("impedit", new AttributeValue() {{
                                                            n = 8427.77;
                                                            s = "nam";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("culpa", 2228.64);
                                                                put("aliquam", 805.32);
                                                            }};
                                                            sl = new String[]{{
                                                                add("veritatis"),
                                                                add("tempora"),
                                                                add("dolor"),
                                                            }};
                                                        }});
                                                        put("consequatur", new AttributeValue() {{
                                                            n = 1000.14;
                                                            s = "sit";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("fugit", 661.49);
                                                                put("laudantium", 656.04);
                                                            }};
                                                            sl = new String[]{{
                                                                add("fugiat"),
                                                            }};
                                                        }});
                                                        put("ipsam", new AttributeValue() {{
                                                            n = 1621.2;
                                                            s = "ipsa";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("eveniet", 7734.56);
                                                                put("officiis", 4564.1);
                                                                put("necessitatibus", 1533.69);
                                                            }};
                                                            sl = new String[]{{
                                                                add("nesciunt"),
                                                                add("expedita"),
                                                            }};
                                                        }});
                                                    }};
                                                    playerId = "eum";
                                                    team = "vel";
                                                }}),
                                            }}) {{
                                gameSessionArn = "voluptatum";
                                ticketId = "magnam";
                            }};, StartMatchBackfillXAmzTargetEnum.GAME_LIFT_START_MATCH_BACKFILL) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "ab";
                xAmzCredential = "porro";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "recusandae";
            }};            

            StartMatchBackfillResponse res = sdk.sdk.startMatchBackfill(req);

            if (res.startMatchBackfillOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startMatchmaking

<p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartMatchmakingRequest;
import org.openapis.openapi.models.operations.StartMatchmakingResponse;
import org.openapis.openapi.models.operations.StartMatchmakingXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.Player;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartMatchmakingInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartMatchmakingRequest req = new StartMatchmakingRequest(                new StartMatchmakingInput("voluptatem",                 new org.openapis.openapi.models.shared.Player[]{{
                                                add(new Player() {{
                                                    latencyInMs = new java.util.HashMap<String, Long>() {{
                                                        put("quasi", 392569L);
                                                        put("at", 878373L);
                                                        put("est", 690785L);
                                                        put("sequi", 987349L);
                                                    }};
                                                    playerAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                        put("optio", new AttributeValue() {{
                                                            n = 5796.81;
                                                            s = "nemo";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("blanditiis", 6423.52);
                                                                put("voluptas", 2540.25);
                                                            }};
                                                            sl = new String[]{{
                                                                add("quos"),
                                                                add("eius"),
                                                            }};
                                                        }});
                                                        put("aspernatur", new AttributeValue() {{
                                                            n = 4959.7;
                                                            s = "nesciunt";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("laudantium", 2773.4);
                                                                put("quasi", 5243.8);
                                                                put("fugiat", 1173.8);
                                                            }};
                                                            sl = new String[]{{
                                                                add("consequuntur"),
                                                                add("consectetur"),
                                                            }};
                                                        }});
                                                        put("aperiam", new AttributeValue() {{
                                                            n = 5854.32;
                                                            s = "reiciendis";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("alias", 6089.89);
                                                                put("eos", 5790.11);
                                                                put("iste", 1700.99);
                                                            }};
                                                            sl = new String[]{{
                                                                add("fuga"),
                                                            }};
                                                        }});
                                                        put("accusamus", new AttributeValue() {{
                                                            n = 9768.02;
                                                            s = "distinctio";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("delectus", 3283.79);
                                                                put("praesentium", 8026.92);
                                                                put("magnam", 8363.64);
                                                            }};
                                                            sl = new String[]{{
                                                                add("commodi"),
                                                                add("itaque"),
                                                                add("commodi"),
                                                            }};
                                                        }});
                                                    }};
                                                    playerId = "totam";
                                                    team = "earum";
                                                }}),
                                                add(new Player() {{
                                                    latencyInMs = new java.util.HashMap<String, Long>() {{
                                                        put("nam", 877399L);
                                                        put("voluptatem", 371919L);
                                                    }};
                                                    playerAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                        put("alias", new AttributeValue() {{
                                                            n = 938.94;
                                                            s = "non";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("enim", 5752.13);
                                                                put("nulla", 6436.78);
                                                                put("esse", 3644.63);
                                                                put("reprehenderit", 6677.15);
                                                            }};
                                                            sl = new String[]{{
                                                                add("sint"),
                                                                add("accusamus"),
                                                            }};
                                                        }});
                                                        put("impedit", new AttributeValue() {{
                                                            n = 9450.27;
                                                            s = "necessitatibus";
                                                            sdm = new java.util.HashMap<String, Double>() {{
                                                                put("ex", 3767.41);
                                                                put("debitis", 9661.48);
                                                                put("quae", 7918.8);
                                                                put("fuga", 6756.89);
                                                            }};
                                                            sl = new String[]{{
                                                                add("velit"),
                                                            }};
                                                        }});
                                                    }};
                                                    playerId = "atque";
                                                    team = "ipsum";
                                                }}),
                                            }}) {{
                                ticketId = "impedit";
                            }};, StartMatchmakingXAmzTargetEnum.GAME_LIFT_START_MATCHMAKING) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "repudiandae";
                xAmzDate = "nam";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            StartMatchmakingResponse res = sdk.sdk.startMatchmaking(req);

            if (res.startMatchmakingOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopFleetActions

<p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopFleetActionsRequest;
import org.openapis.openapi.models.operations.StopFleetActionsResponse;
import org.openapis.openapi.models.operations.StopFleetActionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FleetActionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopFleetActionsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopFleetActionsRequest req = new StopFleetActionsRequest(                new StopFleetActionsInput(                new org.openapis.openapi.models.shared.FleetActionEnum[]{{
                                                add(FleetActionEnum.AUTO_SCALING),
                                                add(FleetActionEnum.AUTO_SCALING),
                                            }}, "neque") {{
                                location = "quo";
                            }};, StopFleetActionsXAmzTargetEnum.GAME_LIFT_STOP_FLEET_ACTIONS) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "iure";
                xAmzDate = "odit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "magnam";
            }};            

            StopFleetActionsResponse res = sdk.sdk.stopFleetActions(req);

            if (res.stopFleetActionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopGameSessionPlacement

Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopGameSessionPlacementRequest;
import org.openapis.openapi.models.operations.StopGameSessionPlacementResponse;
import org.openapis.openapi.models.operations.StopGameSessionPlacementXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopGameSessionPlacementInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopGameSessionPlacementRequest req = new StopGameSessionPlacementRequest(                new StopGameSessionPlacementInput("inventore");, StopGameSessionPlacementXAmzTargetEnum.GAME_LIFT_STOP_GAME_SESSION_PLACEMENT) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "libero";
                xAmzCredential = "architecto";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "aliquam";
            }};            

            StopGameSessionPlacementResponse res = sdk.sdk.stopGameSessionPlacement(req);

            if (res.stopGameSessionPlacementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopMatchmaking

<p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopMatchmakingRequest;
import org.openapis.openapi.models.operations.StopMatchmakingResponse;
import org.openapis.openapi.models.operations.StopMatchmakingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopMatchmakingInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopMatchmakingRequest req = new StopMatchmakingRequest(                new StopMatchmakingInput("illo");, StopMatchmakingXAmzTargetEnum.GAME_LIFT_STOP_MATCHMAKING) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "vel";
                xAmzCredential = "ea";
                xAmzDate = "beatae";
                xAmzSecurityToken = "vero";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "eum";
            }};            

            StopMatchmakingResponse res = sdk.sdk.stopMatchmaking(req);

            if (res.stopMatchmakingOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suspendGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuspendGameServerGroupRequest;
import org.openapis.openapi.models.operations.SuspendGameServerGroupResponse;
import org.openapis.openapi.models.operations.SuspendGameServerGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GameServerGroupActionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuspendGameServerGroupInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SuspendGameServerGroupRequest req = new SuspendGameServerGroupRequest(                new SuspendGameServerGroupInput("ut",                 new org.openapis.openapi.models.shared.GameServerGroupActionEnum[]{{
                                                add(GameServerGroupActionEnum.REPLACE_INSTANCE_TYPES),
                                                add(GameServerGroupActionEnum.REPLACE_INSTANCE_TYPES),
                                                add(GameServerGroupActionEnum.REPLACE_INSTANCE_TYPES),
                                            }});, SuspendGameServerGroupXAmzTargetEnum.GAME_LIFT_SUSPEND_GAME_SERVER_GROUP) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "impedit";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "iste";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "alias";
            }};            

            SuspendGameServerGroupResponse res = sdk.sdk.suspendGameServerGroup(req);

            if (res.suspendGameServerGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("itaque",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("dolor", "iusto") {{
                                                    key = "laborum";
                                                    value = "non";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.GAME_LIFT_TAG_RESOURCE) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "consequatur";
                xAmzDate = "officia";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quidem";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("facilis",                 new String[]{{
                                                add("perspiciatis"),
                                                add("expedita"),
                                                add("deleniti"),
                                                add("a"),
                                            }});, UntagResourceXAmzTargetEnum.GAME_LIFT_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "unde";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "animi";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "ipsam";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAlias

<p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAliasRequest;
import org.openapis.openapi.models.operations.UpdateAliasResponse;
import org.openapis.openapi.models.operations.UpdateAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.RoutingStrategy;
import org.openapis.openapi.models.shared.RoutingStrategyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAliasInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAliasRequest req = new UpdateAliasRequest(                new UpdateAliasInput("est") {{
                                description = "error";
                                name = "Lucille Bogan";
                                routingStrategy = new RoutingStrategy() {{
                                    fleetId = "vitae";
                                    message = "inventore";
                                    type = RoutingStrategyTypeEnum.SIMPLE;
                                }};;
                            }};, UpdateAliasXAmzTargetEnum.GAME_LIFT_UPDATE_ALIAS) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "qui";
                xAmzCredential = "iste";
                xAmzDate = "ex";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "libero";
            }};            

            UpdateAliasResponse res = sdk.sdk.updateAlias(req);

            if (res.updateAliasOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBuild

<p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBuildRequest;
import org.openapis.openapi.models.operations.UpdateBuildResponse;
import org.openapis.openapi.models.operations.UpdateBuildXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateBuildInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBuildRequest req = new UpdateBuildRequest(                new UpdateBuildInput("dolorum") {{
                                name = "Beverly Abbott";
                                version = "quae";
                            }};, UpdateBuildXAmzTargetEnum.GAME_LIFT_UPDATE_BUILD) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "neque";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "et";
                xAmzSignedHeaders = "ipsum";
            }};            

            UpdateBuildResponse res = sdk.sdk.updateBuild(req);

            if (res.updateBuildOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFleetAttributes

<p>Updates a fleet's mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFleetAttributesRequest;
import org.openapis.openapi.models.operations.UpdateFleetAttributesResponse;
import org.openapis.openapi.models.operations.UpdateFleetAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnywhereConfiguration;
import org.openapis.openapi.models.shared.ProtectionPolicyEnum;
import org.openapis.openapi.models.shared.ResourceCreationLimitPolicy;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFleetAttributesInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFleetAttributesRequest req = new UpdateFleetAttributesRequest(                new UpdateFleetAttributesInput("nulla") {{
                                anywhereConfiguration = new AnywhereConfiguration("distinctio");;
                                description = "maxime";
                                metricGroups = new String[]{{
                                    add("quia"),
                                }};
                                name = "Miss Geneva Reinger";
                                newGameSessionProtectionPolicy = ProtectionPolicyEnum.FULL_PROTECTION;
                                resourceCreationLimitPolicy = new ResourceCreationLimitPolicy() {{
                                    newGameSessionsPerCreator = 637462L;
                                    policyPeriodInMinutes = 554603L;
                                }};;
                            }};, UpdateFleetAttributesXAmzTargetEnum.GAME_LIFT_UPDATE_FLEET_ATTRIBUTES) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "sit";
                xAmzCredential = "iusto";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "aperiam";
            }};            

            UpdateFleetAttributesResponse res = sdk.sdk.updateFleetAttributes(req);

            if (res.updateFleetAttributesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFleetCapacity

<p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet's capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet's desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet's remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location's active instance count matches the new desired instance count. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type's limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFleetCapacityRequest;
import org.openapis.openapi.models.operations.UpdateFleetCapacityResponse;
import org.openapis.openapi.models.operations.UpdateFleetCapacityXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFleetCapacityInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFleetCapacityRequest req = new UpdateFleetCapacityRequest(                new UpdateFleetCapacityInput("dolore") {{
                                desiredInstances = 755106L;
                                location = "distinctio";
                                maxSize = 32273L;
                                minSize = 418109L;
                            }};, UpdateFleetCapacityXAmzTargetEnum.GAME_LIFT_UPDATE_FLEET_CAPACITY) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "assumenda";
                xAmzDate = "beatae";
                xAmzSecurityToken = "est";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "corrupti";
            }};            

            UpdateFleetCapacityResponse res = sdk.sdk.updateFleetCapacity(req);

            if (res.updateFleetCapacityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFleetPortSettings

<p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFleetPortSettingsRequest;
import org.openapis.openapi.models.operations.UpdateFleetPortSettingsResponse;
import org.openapis.openapi.models.operations.UpdateFleetPortSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.IpPermission;
import org.openapis.openapi.models.shared.IpProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFleetPortSettingsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFleetPortSettingsRequest req = new UpdateFleetPortSettingsRequest(                new UpdateFleetPortSettingsInput("provident") {{
                                inboundPermissionAuthorizations = new org.openapis.openapi.models.shared.IpPermission[]{{
                                    add(new IpPermission(421819L, "ipsam", IpProtocolEnum.UDP, 515638L) {{
                                        fromPort = 896480L;
                                        ipRange = "tempore";
                                        protocol = IpProtocolEnum.UDP;
                                        toPort = 409726L;
                                    }}),
                                    add(new IpPermission(872303L, "alias", IpProtocolEnum.TCP, 694158L) {{
                                        fromPort = 357207L;
                                        ipRange = "officiis";
                                        protocol = IpProtocolEnum.UDP;
                                        toPort = 737279L;
                                    }}),
                                    add(new IpPermission(885208L, "eos", IpProtocolEnum.UDP, 483518L) {{
                                        fromPort = 684126L;
                                        ipRange = "repudiandae";
                                        protocol = IpProtocolEnum.TCP;
                                        toPort = 710456L;
                                    }}),
                                    add(new IpPermission(621473L, "earum", IpProtocolEnum.TCP, 923306L) {{
                                        fromPort = 510128L;
                                        ipRange = "odit";
                                        protocol = IpProtocolEnum.TCP;
                                        toPort = 358995L;
                                    }}),
                                }};
                                inboundPermissionRevocations = new org.openapis.openapi.models.shared.IpPermission[]{{
                                    add(new IpPermission(600213L, "molestiae", IpProtocolEnum.UDP, 585593L) {{
                                        fromPort = 282837L;
                                        ipRange = "quidem";
                                        protocol = IpProtocolEnum.TCP;
                                        toPort = 106255L;
                                    }}),
                                    add(new IpPermission(873557L, "officia", IpProtocolEnum.TCP, 760744L) {{
                                        fromPort = 147801L;
                                        ipRange = "numquam";
                                        protocol = IpProtocolEnum.TCP;
                                        toPort = 201010L;
                                    }}),
                                    add(new IpPermission(532669L, "cupiditate", IpProtocolEnum.TCP, 809594L) {{
                                        fromPort = 898961L;
                                        ipRange = "corporis";
                                        protocol = IpProtocolEnum.TCP;
                                        toPort = 708898L;
                                    }}),
                                }};
                            }};, UpdateFleetPortSettingsXAmzTargetEnum.GAME_LIFT_UPDATE_FLEET_PORT_SETTINGS) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "neque";
                xAmzCredential = "in";
                xAmzDate = "minus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "corporis";
            }};            

            UpdateFleetPortSettingsResponse res = sdk.sdk.updateFleetPortSettings(req);

            if (res.updateFleetPortSettingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGameServerRequest;
import org.openapis.openapi.models.operations.UpdateGameServerResponse;
import org.openapis.openapi.models.operations.UpdateGameServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.GameServerHealthCheckEnum;
import org.openapis.openapi.models.shared.GameServerUtilizationStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGameServerInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGameServerRequest req = new UpdateGameServerRequest(                new UpdateGameServerInput("voluptates", "maiores") {{
                                gameServerData = "tempore";
                                healthCheck = GameServerHealthCheckEnum.HEALTHY;
                                utilizationStatus = GameServerUtilizationStatusEnum.AVAILABLE;
                            }};, UpdateGameServerXAmzTargetEnum.GAME_LIFT_UPDATE_GAME_SERVER) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "labore";
                xAmzDate = "totam";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "quo";
            }};            

            UpdateGameServerResponse res = sdk.sdk.updateGameServer(req);

            if (res.updateGameServerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGameServerGroupRequest;
import org.openapis.openapi.models.operations.UpdateGameServerGroupResponse;
import org.openapis.openapi.models.operations.UpdateGameServerGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.BalancingStrategyEnum;
import org.openapis.openapi.models.shared.GameServerGroupInstanceTypeEnum;
import org.openapis.openapi.models.shared.GameServerProtectionPolicyEnum;
import org.openapis.openapi.models.shared.InstanceDefinition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGameServerGroupInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGameServerGroupRequest req = new UpdateGameServerGroupRequest(                new UpdateGameServerGroupInput("minus") {{
                                balancingStrategy = BalancingStrategyEnum.ON_DEMAND_ONLY;
                                gameServerProtectionPolicy = GameServerProtectionPolicyEnum.NO_PROTECTION;
                                instanceDefinitions = new org.openapis.openapi.models.shared.InstanceDefinition[]{{
                                    add(new InstanceDefinition(GameServerGroupInstanceTypeEnum.M5_LARGE) {{
                                        instanceType = GameServerGroupInstanceTypeEnum.M54XLARGE;
                                        weightedCapacity = "delectus";
                                    }}),
                                    add(new InstanceDefinition(GameServerGroupInstanceTypeEnum.M6G16XLARGE) {{
                                        instanceType = GameServerGroupInstanceTypeEnum.M5A12XLARGE;
                                        weightedCapacity = "odit";
                                    }}),
                                    add(new InstanceDefinition(GameServerGroupInstanceTypeEnum.R54XLARGE) {{
                                        instanceType = GameServerGroupInstanceTypeEnum.M5A8XLARGE;
                                        weightedCapacity = "nemo";
                                    }}),
                                }};
                                roleArn = "aperiam";
                            }};, UpdateGameServerGroupXAmzTargetEnum.GAME_LIFT_UPDATE_GAME_SERVER_GROUP) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "minima";
                xAmzCredential = "in";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "error";
            }};            

            UpdateGameServerGroupResponse res = sdk.sdk.updateGameServerGroup(req);

            if (res.updateGameServerGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGameSession

<p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGameSessionRequest;
import org.openapis.openapi.models.operations.UpdateGameSessionResponse;
import org.openapis.openapi.models.operations.UpdateGameSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.PlayerSessionCreationPolicyEnum;
import org.openapis.openapi.models.shared.ProtectionPolicyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGameSessionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGameSessionRequest req = new UpdateGameSessionRequest(                new UpdateGameSessionInput("ducimus") {{
                                maximumPlayerSessionCount = 452729L;
                                name = "Bradford Murazik";
                                playerSessionCreationPolicy = PlayerSessionCreationPolicyEnum.ACCEPT_ALL;
                                protectionPolicy = ProtectionPolicyEnum.NO_PROTECTION;
                            }};, UpdateGameSessionXAmzTargetEnum.GAME_LIFT_UPDATE_GAME_SESSION) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "quidem";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "quam";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "modi";
            }};            

            UpdateGameSessionResponse res = sdk.sdk.updateGameSession(req);

            if (res.updateGameSessionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGameSessionQueue

<p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGameSessionQueueRequest;
import org.openapis.openapi.models.operations.UpdateGameSessionQueueResponse;
import org.openapis.openapi.models.operations.UpdateGameSessionQueueXAmzTargetEnum;
import org.openapis.openapi.models.shared.FilterConfiguration;
import org.openapis.openapi.models.shared.GameSessionQueueDestination;
import org.openapis.openapi.models.shared.PlayerLatencyPolicy;
import org.openapis.openapi.models.shared.PriorityConfiguration;
import org.openapis.openapi.models.shared.PriorityTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGameSessionQueueInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGameSessionQueueRequest req = new UpdateGameSessionQueueRequest(                new UpdateGameSessionQueueInput("sint") {{
                                customEventData = "vero";
                                destinations = new org.openapis.openapi.models.shared.GameSessionQueueDestination[]{{
                                    add(new GameSessionQueueDestination() {{
                                        destinationArn = "repudiandae";
                                    }}),
                                }};
                                filterConfiguration = new FilterConfiguration() {{
                                    allowedLocations = new String[]{{
                                        add("dicta"),
                                        add("earum"),
                                        add("veniam"),
                                    }};
                                }};;
                                notificationTarget = "animi";
                                playerLatencyPolicies = new org.openapis.openapi.models.shared.PlayerLatencyPolicy[]{{
                                    add(new PlayerLatencyPolicy() {{
                                        maximumIndividualPlayerLatencyMilliseconds = 724994L;
                                        policyDurationSeconds = 115898L;
                                    }}),
                                }};
                                priorityConfiguration = new PriorityConfiguration() {{
                                    locationOrder = new String[]{{
                                        add("necessitatibus"),
                                    }};
                                    priorityOrder = new org.openapis.openapi.models.shared.PriorityTypeEnum[]{{
                                        add(PriorityTypeEnum.LATENCY),
                                        add(PriorityTypeEnum.COST),
                                        add(PriorityTypeEnum.LOCATION),
                                    }};
                                }};;
                                timeoutInSeconds = 87382L;
                            }};, UpdateGameSessionQueueXAmzTargetEnum.GAME_LIFT_UPDATE_GAME_SESSION_QUEUE) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "pariatur";
                xAmzDate = "libero";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "nemo";
            }};            

            UpdateGameSessionQueueResponse res = sdk.sdk.updateGameSessionQueue(req);

            if (res.updateGameSessionQueueOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMatchmakingConfiguration

<p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMatchmakingConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateMatchmakingConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateMatchmakingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.BackfillModeEnum;
import org.openapis.openapi.models.shared.FlexMatchModeEnum;
import org.openapis.openapi.models.shared.GameProperty;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMatchmakingConfigurationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMatchmakingConfigurationRequest req = new UpdateMatchmakingConfigurationRequest(                new UpdateMatchmakingConfigurationInput("nostrum") {{
                                acceptanceRequired = false;
                                acceptanceTimeoutSeconds = 988749L;
                                additionalPlayerCount = 757364L;
                                backfillMode = BackfillModeEnum.MANUAL;
                                customEventData = "enim";
                                description = "hic";
                                flexMatchMode = FlexMatchModeEnum.WITH_QUEUE;
                                gameProperties = new org.openapis.openapi.models.shared.GameProperty[]{{
                                    add(new GameProperty("odio", "eaque") {{
                                        key = "totam";
                                        value = "molestias";
                                    }}),
                                    add(new GameProperty("quos", "iste") {{
                                        key = "saepe";
                                        value = "architecto";
                                    }}),
                                    add(new GameProperty("libero", "velit") {{
                                        key = "assumenda";
                                        value = "tempore";
                                    }}),
                                }};
                                gameSessionData = "doloremque";
                                gameSessionQueueArns = new String[]{{
                                    add("impedit"),
                                    add("cum"),
                                    add("ipsum"),
                                    add("adipisci"),
                                }};
                                notificationTarget = "saepe";
                                requestTimeoutSeconds = 644420L;
                                ruleSetName = "doloremque";
                            }};, UpdateMatchmakingConfigurationXAmzTargetEnum.GAME_LIFT_UPDATE_MATCHMAKING_CONFIGURATION) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "libero";
                xAmzDate = "architecto";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "eligendi";
            }};            

            UpdateMatchmakingConfigurationResponse res = sdk.sdk.updateMatchmakingConfiguration(req);

            if (res.updateMatchmakingConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRuntimeConfiguration

<p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRuntimeConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateRuntimeConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateRuntimeConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.RuntimeConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerProcess;
import org.openapis.openapi.models.shared.UpdateRuntimeConfigurationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRuntimeConfigurationRequest req = new UpdateRuntimeConfigurationRequest(                new UpdateRuntimeConfigurationInput("non",                 new RuntimeConfiguration() {{
                                                gameSessionActivationTimeoutSeconds = 298187L;
                                                maxConcurrentGameSessionActivations = 932296L;
                                                serverProcesses = new org.openapis.openapi.models.shared.ServerProcess[]{{
                                                    add(new ServerProcess(813880L, "laudantium") {{
                                                        concurrentExecutions = 993002L;
                                                        launchPath = "veniam";
                                                        parameters = "consequuntur";
                                                    }}),
                                                }};
                                            }};);, UpdateRuntimeConfigurationXAmzTargetEnum.GAME_LIFT_UPDATE_RUNTIME_CONFIGURATION) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "amet";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "ab";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "facilis";
            }};            

            UpdateRuntimeConfigurationResponse res = sdk.sdk.updateRuntimeConfiguration(req);

            if (res.updateRuntimeConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScript

<p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScriptRequest;
import org.openapis.openapi.models.operations.UpdateScriptResponse;
import org.openapis.openapi.models.operations.UpdateScriptXAmzTargetEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateScriptInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateScriptRequest req = new UpdateScriptRequest(                new UpdateScriptInput("nisi") {{
                                name = "Alex Labadie";
                                storageLocation = new S3Location() {{
                                    bucket = "quis";
                                    key = "nisi";
                                    objectVersion = "libero";
                                    roleArn = "minus";
                                }};;
                                version = "facere";
                                zipFile = "facilis";
                            }};, UpdateScriptXAmzTargetEnum.GAME_LIFT_UPDATE_SCRIPT) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "ad";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateScriptResponse res = sdk.sdk.updateScript(req);

            if (res.updateScriptOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateMatchmakingRuleSet

<p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateMatchmakingRuleSetRequest;
import org.openapis.openapi.models.operations.ValidateMatchmakingRuleSetResponse;
import org.openapis.openapi.models.operations.ValidateMatchmakingRuleSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ValidateMatchmakingRuleSetInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ValidateMatchmakingRuleSetRequest req = new ValidateMatchmakingRuleSetRequest(                new ValidateMatchmakingRuleSetInput("eos");, ValidateMatchmakingRuleSetXAmzTargetEnum.GAME_LIFT_VALIDATE_MATCHMAKING_RULE_SET) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "neque";
                xAmzDate = "iusto";
                xAmzSecurityToken = "est";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "eligendi";
            }};            

            ValidateMatchmakingRuleSetResponse res = sdk.sdk.validateMatchmakingRuleSet(req);

            if (res.validateMatchmakingRuleSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
