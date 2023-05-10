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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptMatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptMatchInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceptanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AcceptMatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptMatchRequest();
    $request->acceptMatchInput = new AcceptMatchInput();
    $request->acceptMatchInput->acceptanceType = AcceptanceTypeEnum::ACCEPT;
    $request->acceptMatchInput->playerIds = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->acceptMatchInput->ticketId = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = AcceptMatchXAmzTargetEnum::GAME_LIFT_ACCEPT_MATCH;

    $response = $sdk->sdk->acceptMatch($request);

    if ($response->acceptMatchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> </ul> <note> <p>When claiming a specific game server, this request will succeed even if the game server is running on an instance in <code>DRAINING</code> status. To avoid this, first check the instance status by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html">DescribeGameServerInstances</a> .</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimGameServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClaimGameServerInput;
use \OpenAPI\OpenAPI\Models\Operations\ClaimGameServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimGameServerRequest();
    $request->claimGameServerInput = new ClaimGameServerInput();
    $request->claimGameServerInput->gameServerData = 'temporibus';
    $request->claimGameServerInput->gameServerGroupName = 'ab';
    $request->claimGameServerInput->gameServerId = 'quis';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ClaimGameServerXAmzTargetEnum::GAME_LIFT_CLAIM_GAME_SERVER;

    $response = $sdk->sdk->claimGameServer($request);

    if ($response->claimGameServerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAlias

<p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasInput;
use \OpenAPI\OpenAPI\Models\Shared\RoutingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\RoutingStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->createAliasInput = new CreateAliasInput();
    $request->createAliasInput->description = 'odit';
    $request->createAliasInput->name = 'Wilfred Wolff';
    $request->createAliasInput->routingStrategy = new RoutingStrategy();
    $request->createAliasInput->routingStrategy->fleetId = 'quod';
    $request->createAliasInput->routingStrategy->message = 'esse';
    $request->createAliasInput->routingStrategy->type = RoutingStrategyTypeEnum::TERMINAL;
    $request->createAliasInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CreateAliasXAmzTargetEnum::GAME_LIFT_CREATE_ALIAS;

    $response = $sdk->sdk->createAlias($request);

    if ($response->createAliasOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBuild

<p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the operation in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can't update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBuildRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBuildInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateBuildXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBuildRequest();
    $request->createBuildInput = new CreateBuildInput();
    $request->createBuildInput->name = 'Ms. Earnest Lebsack';
    $request->createBuildInput->operatingSystem = OperatingSystemEnum::AMAZON_LINUX;
    $request->createBuildInput->serverSDKVersion = 'qui';
    $request->createBuildInput->storageLocation = new S3Location();
    $request->createBuildInput->storageLocation->bucket = 'impedit';
    $request->createBuildInput->storageLocation->key = 'cum';
    $request->createBuildInput->storageLocation->objectVersion = 'esse';
    $request->createBuildInput->storageLocation->roleArn = 'ipsum';
    $request->createBuildInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createBuildInput->version = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateBuildXAmzTargetEnum::GAME_LIFT_CREATE_BUILD;

    $response = $sdk->sdk->createBuild($request);

    if ($response->createBuildOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFleet

<p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet's home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFleetInput;
use \OpenAPI\OpenAPI\Models\Shared\AnywhereConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CertificateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CertificateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpPermission;
use \OpenAPI\OpenAPI\Models\Shared\IpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FleetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCreationLimitPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerProcess;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetRequest();
    $request->createFleetInput = new CreateFleetInput();
    $request->createFleetInput->anywhereConfiguration = new AnywhereConfiguration();
    $request->createFleetInput->anywhereConfiguration->cost = 'laboriosam';
    $request->createFleetInput->buildId = 'hic';
    $request->createFleetInput->certificateConfiguration = new CertificateConfiguration();
    $request->createFleetInput->certificateConfiguration->certificateType = CertificateTypeEnum::GENERATED;
    $request->createFleetInput->computeType = ComputeTypeEnum::ANYWHERE;
    $request->createFleetInput->description = 'in';
    $request->createFleetInput->ec2InboundPermissions = [
        new IpPermission(),
        new IpPermission(),
    ];
    $request->createFleetInput->ec2InstanceType = Ec2InstanceTypeEnum::M54XLARGE;
    $request->createFleetInput->fleetType = FleetTypeEnum::ON_DEMAND;
    $request->createFleetInput->instanceRoleArn = 'saepe';
    $request->createFleetInput->locations = [
        new LocationConfiguration(),
        new LocationConfiguration(),
        new LocationConfiguration(),
    ];
    $request->createFleetInput->logPaths = [
        'ipsa',
    ];
    $request->createFleetInput->metricGroups = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->createFleetInput->name = 'Stacy Champlin';
    $request->createFleetInput->newGameSessionProtectionPolicy = ProtectionPolicyEnum::FULL_PROTECTION;
    $request->createFleetInput->peerVpcAwsAccountId = 'nemo';
    $request->createFleetInput->peerVpcId = 'minima';
    $request->createFleetInput->resourceCreationLimitPolicy = new ResourceCreationLimitPolicy();
    $request->createFleetInput->resourceCreationLimitPolicy->newGameSessionsPerCreator = 570197;
    $request->createFleetInput->resourceCreationLimitPolicy->policyPeriodInMinutes = 38425;
    $request->createFleetInput->runtimeConfiguration = new RuntimeConfiguration();
    $request->createFleetInput->runtimeConfiguration->gameSessionActivationTimeoutSeconds = 438601;
    $request->createFleetInput->runtimeConfiguration->maxConcurrentGameSessionActivations = 634274;
    $request->createFleetInput->runtimeConfiguration->serverProcesses = [
        new ServerProcess(),
        new ServerProcess(),
        new ServerProcess(),
        new ServerProcess(),
    ];
    $request->createFleetInput->scriptId = 'sapiente';
    $request->createFleetInput->serverLaunchParameters = 'architecto';
    $request->createFleetInput->serverLaunchPath = 'mollitia';
    $request->createFleetInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = CreateFleetXAmzTargetEnum::GAME_LIFT_CREATE_FLEET;

    $response = $sdk->sdk->createFleet($request);

    if ($response->createFleetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFleetLocations

<p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don't support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFleetLocationsInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetLocationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetLocationsRequest();
    $request->createFleetLocationsInput = new CreateFleetLocationsInput();
    $request->createFleetLocationsInput->fleetId = 'quam';
    $request->createFleetLocationsInput->locations = [
        new LocationConfiguration(),
        new LocationConfiguration(),
    ];
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = CreateFleetLocationsXAmzTargetEnum::GAME_LIFT_CREATE_FLEET_LOCATIONS;

    $response = $sdk->sdk->createFleetLocations($request);

    if ($response->createFleetLocationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameServerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGameServerGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GameServerGroupAutoScalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TargetTrackingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BalancingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GameServerProtectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GameServerGroupInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTemplateSpecification;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameServerGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGameServerGroupRequest();
    $request->createGameServerGroupInput = new CreateGameServerGroupInput();
    $request->createGameServerGroupInput->autoScalingPolicy = new GameServerGroupAutoScalingPolicy();
    $request->createGameServerGroupInput->autoScalingPolicy->estimatedInstanceWarmup = 317202;
    $request->createGameServerGroupInput->autoScalingPolicy->targetTrackingConfiguration = new TargetTrackingConfiguration();
    $request->createGameServerGroupInput->autoScalingPolicy->targetTrackingConfiguration->targetValue = 1381.83;
    $request->createGameServerGroupInput->balancingStrategy = BalancingStrategyEnum::ON_DEMAND_ONLY;
    $request->createGameServerGroupInput->gameServerGroupName = 'sequi';
    $request->createGameServerGroupInput->gameServerProtectionPolicy = GameServerProtectionPolicyEnum::FULL_PROTECTION;
    $request->createGameServerGroupInput->instanceDefinitions = [
        new InstanceDefinition(),
        new InstanceDefinition(),
    ];
    $request->createGameServerGroupInput->launchTemplate = new LaunchTemplateSpecification();
    $request->createGameServerGroupInput->launchTemplate->launchTemplateId = 'id';
    $request->createGameServerGroupInput->launchTemplate->launchTemplateName = 'possimus';
    $request->createGameServerGroupInput->launchTemplate->version = 'aut';
    $request->createGameServerGroupInput->maxSize = 97101;
    $request->createGameServerGroupInput->minSize = 622846;
    $request->createGameServerGroupInput->roleArn = 'temporibus';
    $request->createGameServerGroupInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createGameServerGroupInput->vpcSubnets = [
        'reiciendis',
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = CreateGameServerGroupXAmzTargetEnum::GAME_LIFT_CREATE_GAME_SERVER_GROUP;

    $response = $sdk->sdk->createGameServerGroup($request);

    if ($response->createGameServerGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGameSession

<p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGameSessionInput;
use \OpenAPI\OpenAPI\Models\Shared\GameProperty;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGameSessionRequest();
    $request->createGameSessionInput = new CreateGameSessionInput();
    $request->createGameSessionInput->aliasId = 'voluptate';
    $request->createGameSessionInput->creatorId = 'cum';
    $request->createGameSessionInput->fleetId = 'perferendis';
    $request->createGameSessionInput->gameProperties = [
        new GameProperty(),
    ];
    $request->createGameSessionInput->gameSessionData = 'reprehenderit';
    $request->createGameSessionInput->gameSessionId = 'ut';
    $request->createGameSessionInput->idempotencyToken = 'maiores';
    $request->createGameSessionInput->location = 'dicta';
    $request->createGameSessionInput->maximumPlayerSessionCount = 359444;
    $request->createGameSessionInput->name = 'Heidi Carter';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = CreateGameSessionXAmzTargetEnum::GAME_LIFT_CREATE_GAME_SESSION;

    $response = $sdk->sdk->createGameSession($request);

    if ($response->createGameSessionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGameSessionQueue

<p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameSessionQueueRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGameSessionQueueInput;
use \OpenAPI\OpenAPI\Models\Shared\GameSessionQueueDestination;
use \OpenAPI\OpenAPI\Models\Shared\FilterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PlayerLatencyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PriorityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PriorityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameSessionQueueXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGameSessionQueueRequest();
    $request->createGameSessionQueueInput = new CreateGameSessionQueueInput();
    $request->createGameSessionQueueInput->customEventData = 'excepturi';
    $request->createGameSessionQueueInput->destinations = [
        new GameSessionQueueDestination(),
        new GameSessionQueueDestination(),
        new GameSessionQueueDestination(),
        new GameSessionQueueDestination(),
    ];
    $request->createGameSessionQueueInput->filterConfiguration = new FilterConfiguration();
    $request->createGameSessionQueueInput->filterConfiguration->allowedLocations = [
        'praesentium',
        'rem',
    ];
    $request->createGameSessionQueueInput->name = 'Carl Waelchi DVM';
    $request->createGameSessionQueueInput->notificationTarget = 'incidunt';
    $request->createGameSessionQueueInput->playerLatencyPolicies = [
        new PlayerLatencyPolicy(),
        new PlayerLatencyPolicy(),
    ];
    $request->createGameSessionQueueInput->priorityConfiguration = new PriorityConfiguration();
    $request->createGameSessionQueueInput->priorityConfiguration->locationOrder = [
        'est',
    ];
    $request->createGameSessionQueueInput->priorityConfiguration->priorityOrder = [
        PriorityTypeEnum::LATENCY,
        PriorityTypeEnum::DESTINATION,
        PriorityTypeEnum::DESTINATION,
        PriorityTypeEnum::LOCATION,
    ];
    $request->createGameSessionQueueInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createGameSessionQueueInput->timeoutInSeconds = 264730;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = CreateGameSessionQueueXAmzTargetEnum::GAME_LIFT_CREATE_GAME_SESSION_QUEUE;

    $response = $sdk->sdk->createGameSessionQueue($request);

    if ($response->createGameSessionQueueOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocation

Creates a custom location for use in an Anywhere fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationRequest();
    $request->createLocationInput = new CreateLocationInput();
    $request->createLocationInput->locationName = 'ipsam';
    $request->createLocationInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = CreateLocationXAmzTargetEnum::GAME_LIFT_CREATE_LOCATION;

    $response = $sdk->sdk->createLocation($request);

    if ($response->createLocationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMatchmakingConfiguration

<p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMatchmakingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMatchmakingConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\BackfillModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GameProperty;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateMatchmakingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMatchmakingConfigurationRequest();
    $request->createMatchmakingConfigurationInput = new CreateMatchmakingConfigurationInput();
    $request->createMatchmakingConfigurationInput->acceptanceRequired = false;
    $request->createMatchmakingConfigurationInput->acceptanceTimeoutSeconds = 962189;
    $request->createMatchmakingConfigurationInput->additionalPlayerCount = 433288;
    $request->createMatchmakingConfigurationInput->backfillMode = BackfillModeEnum::AUTOMATIC;
    $request->createMatchmakingConfigurationInput->customEventData = 'eligendi';
    $request->createMatchmakingConfigurationInput->description = 'sint';
    $request->createMatchmakingConfigurationInput->flexMatchMode = FlexMatchModeEnum::STANDALONE;
    $request->createMatchmakingConfigurationInput->gameProperties = [
        new GameProperty(),
        new GameProperty(),
        new GameProperty(),
    ];
    $request->createMatchmakingConfigurationInput->gameSessionData = 'necessitatibus';
    $request->createMatchmakingConfigurationInput->gameSessionQueueArns = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->createMatchmakingConfigurationInput->name = 'Wilbur King';
    $request->createMatchmakingConfigurationInput->notificationTarget = 'maiores';
    $request->createMatchmakingConfigurationInput->requestTimeoutSeconds = 699479;
    $request->createMatchmakingConfigurationInput->ruleSetName = 'dicta';
    $request->createMatchmakingConfigurationInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = CreateMatchmakingConfigurationXAmzTargetEnum::GAME_LIFT_CREATE_MATCHMAKING_CONFIGURATION;

    $response = $sdk->sdk->createMatchmakingConfiguration($request);

    if ($response->createMatchmakingConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMatchmakingRuleSet

<p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMatchmakingRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMatchmakingRuleSetInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateMatchmakingRuleSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMatchmakingRuleSetRequest();
    $request->createMatchmakingRuleSetInput = new CreateMatchmakingRuleSetInput();
    $request->createMatchmakingRuleSetInput->name = 'Jon Tillman';
    $request->createMatchmakingRuleSetInput->ruleSetBody = 'provident';
    $request->createMatchmakingRuleSetInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = CreateMatchmakingRuleSetXAmzTargetEnum::GAME_LIFT_CREATE_MATCHMAKING_RULE_SET;

    $response = $sdk->sdk->createMatchmakingRuleSet($request);

    if ($response->createMatchmakingRuleSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPlayerSession

<p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePlayerSessionInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePlayerSessionRequest();
    $request->createPlayerSessionInput = new CreatePlayerSessionInput();
    $request->createPlayerSessionInput->gameSessionId = 'vel';
    $request->createPlayerSessionInput->playerData = 'natus';
    $request->createPlayerSessionInput->playerId = 'omnis';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = CreatePlayerSessionXAmzTargetEnum::GAME_LIFT_CREATE_PLAYER_SESSION;

    $response = $sdk->sdk->createPlayerSession($request);

    if ($response->createPlayerSessionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPlayerSessions

<p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePlayerSessionsInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlayerSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePlayerSessionsRequest();
    $request->createPlayerSessionsInput = new CreatePlayerSessionsInput();
    $request->createPlayerSessionsInput->gameSessionId = 'labore';
    $request->createPlayerSessionsInput->playerDataMap = [
        'natus' => 'nobis',
        'eum' => 'vero',
    ];
    $request->createPlayerSessionsInput->playerIds = [
        'architecto',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = CreatePlayerSessionsXAmzTargetEnum::GAME_LIFT_CREATE_PLAYER_SESSIONS;

    $response = $sdk->sdk->createPlayerSessions($request);

    if ($response->createPlayerSessionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScript

<p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateScriptInput;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScriptRequest();
    $request->createScriptInput = new CreateScriptInput();
    $request->createScriptInput->name = 'Angie Wisozk';
    $request->createScriptInput->storageLocation = new S3Location();
    $request->createScriptInput->storageLocation->bucket = 'eum';
    $request->createScriptInput->storageLocation->key = 'dolor';
    $request->createScriptInput->storageLocation->objectVersion = 'necessitatibus';
    $request->createScriptInput->storageLocation->roleArn = 'odit';
    $request->createScriptInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createScriptInput->version = 'quasi';
    $request->createScriptInput->zipFile = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateScriptXAmzTargetEnum::GAME_LIFT_CREATE_SCRIPT;

    $response = $sdk->sdk->createScript($request);

    if ($response->createScriptOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVpcPeeringAuthorization

<p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcPeeringAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVpcPeeringAuthorizationInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcPeeringAuthorizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVpcPeeringAuthorizationRequest();
    $request->createVpcPeeringAuthorizationInput = new CreateVpcPeeringAuthorizationInput();
    $request->createVpcPeeringAuthorizationInput->gameLiftAwsAccountId = 'architecto';
    $request->createVpcPeeringAuthorizationInput->peerVpcId = 'architecto';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = CreateVpcPeeringAuthorizationXAmzTargetEnum::GAME_LIFT_CREATE_VPC_PEERING_AUTHORIZATION;

    $response = $sdk->sdk->createVpcPeeringAuthorization($request);

    if ($response->createVpcPeeringAuthorizationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVpcPeeringConnection

<p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcPeeringConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVpcPeeringConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcPeeringConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVpcPeeringConnectionRequest();
    $request->createVpcPeeringConnectionInput = new CreateVpcPeeringConnectionInput();
    $request->createVpcPeeringConnectionInput->fleetId = 'saepe';
    $request->createVpcPeeringConnectionInput->peerVpcAwsAccountId = 'pariatur';
    $request->createVpcPeeringConnectionInput->peerVpcId = 'accusantium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = CreateVpcPeeringConnectionXAmzTargetEnum::GAME_LIFT_CREATE_VPC_PEERING_CONNECTION;

    $response = $sdk->sdk->createVpcPeeringConnection($request);

    if ($response->createVpcPeeringConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlias

<p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAliasInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAliasRequest();
    $request->deleteAliasInput = new DeleteAliasInput();
    $request->deleteAliasInput->aliasId = 'pariatur';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = DeleteAliasXAmzTargetEnum::GAME_LIFT_DELETE_ALIAS;

    $response = $sdk->sdk->deleteAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBuild

<p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBuildRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBuildInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBuildXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBuildRequest();
    $request->deleteBuildInput = new DeleteBuildInput();
    $request->deleteBuildInput->buildId = 'maiores';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DeleteBuildXAmzTargetEnum::GAME_LIFT_DELETE_BUILD;

    $response = $sdk->sdk->deleteBuild($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFleet

<p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don't need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFleetInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetRequest();
    $request->deleteFleetInput = new DeleteFleetInput();
    $request->deleteFleetInput->fleetId = 'nemo';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DeleteFleetXAmzTargetEnum::GAME_LIFT_DELETE_FLEET;

    $response = $sdk->sdk->deleteFleet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFleetLocations

<p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFleetLocationsInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetLocationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetLocationsRequest();
    $request->deleteFleetLocationsInput = new DeleteFleetLocationsInput();
    $request->deleteFleetLocationsInput->fleetId = 'hic';
    $request->deleteFleetLocationsInput->locations = [
        'nobis',
        'dolores',
        'quis',
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteFleetLocationsXAmzTargetEnum::GAME_LIFT_DELETE_FLEET_LOCATIONS;

    $response = $sdk->sdk->deleteFleetLocations($request);

    if ($response->deleteFleetLocationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGameServerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGameServerGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GameServerGroupDeleteOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGameServerGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGameServerGroupRequest();
    $request->deleteGameServerGroupInput = new DeleteGameServerGroupInput();
    $request->deleteGameServerGroupInput->deleteOption = GameServerGroupDeleteOptionEnum::SAFE_DELETE;
    $request->deleteGameServerGroupInput->gameServerGroupName = 'minus';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DeleteGameServerGroupXAmzTargetEnum::GAME_LIFT_DELETE_GAME_SERVER_GROUP;

    $response = $sdk->sdk->deleteGameServerGroup($request);

    if ($response->deleteGameServerGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGameSessionQueue

Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGameSessionQueueRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGameSessionQueueInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGameSessionQueueXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGameSessionQueueRequest();
    $request->deleteGameSessionQueueInput = new DeleteGameSessionQueueInput();
    $request->deleteGameSessionQueueInput->name = 'Freddie Bartoletti';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DeleteGameSessionQueueXAmzTargetEnum::GAME_LIFT_DELETE_GAME_SESSION_QUEUE;

    $response = $sdk->sdk->deleteGameSessionQueue($request);

    if ($response->deleteGameSessionQueueOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLocation

<p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLocationInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLocationRequest();
    $request->deleteLocationInput = new DeleteLocationInput();
    $request->deleteLocationInput->locationName = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DeleteLocationXAmzTargetEnum::GAME_LIFT_DELETE_LOCATION;

    $response = $sdk->sdk->deleteLocation($request);

    if ($response->deleteLocationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMatchmakingConfiguration

Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMatchmakingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMatchmakingConfigurationInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMatchmakingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMatchmakingConfigurationRequest();
    $request->deleteMatchmakingConfigurationInput = new DeleteMatchmakingConfigurationInput();
    $request->deleteMatchmakingConfigurationInput->name = 'Toby Hahn';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteMatchmakingConfigurationXAmzTargetEnum::GAME_LIFT_DELETE_MATCHMAKING_CONFIGURATION;

    $response = $sdk->sdk->deleteMatchmakingConfiguration($request);

    if ($response->deleteMatchmakingConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMatchmakingRuleSet

<p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMatchmakingRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMatchmakingRuleSetInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMatchmakingRuleSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMatchmakingRuleSetRequest();
    $request->deleteMatchmakingRuleSetInput = new DeleteMatchmakingRuleSetInput();
    $request->deleteMatchmakingRuleSetInput->name = 'Adrian Kuhn';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = DeleteMatchmakingRuleSetXAmzTargetEnum::GAME_LIFT_DELETE_MATCHMAKING_RULE_SET;

    $response = $sdk->sdk->deleteMatchmakingRuleSet($request);

    if ($response->deleteMatchmakingRuleSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScalingPolicy

<p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteScalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScalingPolicyRequest();
    $request->deleteScalingPolicyInput = new DeleteScalingPolicyInput();
    $request->deleteScalingPolicyInput->fleetId = 'quaerat';
    $request->deleteScalingPolicyInput->name = 'Rickey Wolf';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DeleteScalingPolicyXAmzTargetEnum::GAME_LIFT_DELETE_SCALING_POLICY;

    $response = $sdk->sdk->deleteScalingPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScript

<p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteScriptInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScriptXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScriptRequest();
    $request->deleteScriptInput = new DeleteScriptInput();
    $request->deleteScriptInput->scriptId = 'iusto';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DeleteScriptXAmzTargetEnum::GAME_LIFT_DELETE_SCRIPT;

    $response = $sdk->sdk->deleteScript($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVpcPeeringAuthorization

<p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcPeeringAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVpcPeeringAuthorizationInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcPeeringAuthorizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVpcPeeringAuthorizationRequest();
    $request->deleteVpcPeeringAuthorizationInput = new DeleteVpcPeeringAuthorizationInput();
    $request->deleteVpcPeeringAuthorizationInput->gameLiftAwsAccountId = 'nihil';
    $request->deleteVpcPeeringAuthorizationInput->peerVpcId = 'ipsum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DeleteVpcPeeringAuthorizationXAmzTargetEnum::GAME_LIFT_DELETE_VPC_PEERING_AUTHORIZATION;

    $response = $sdk->sdk->deleteVpcPeeringAuthorization($request);

    if ($response->deleteVpcPeeringAuthorizationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVpcPeeringConnection

<p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcPeeringConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVpcPeeringConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcPeeringConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVpcPeeringConnectionRequest();
    $request->deleteVpcPeeringConnectionInput = new DeleteVpcPeeringConnectionInput();
    $request->deleteVpcPeeringConnectionInput->fleetId = 'optio';
    $request->deleteVpcPeeringConnectionInput->vpcPeeringConnectionId = 'accusamus';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = DeleteVpcPeeringConnectionXAmzTargetEnum::GAME_LIFT_DELETE_VPC_PEERING_CONNECTION;

    $response = $sdk->sdk->deleteVpcPeeringConnection($request);

    if ($response->deleteVpcPeeringConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterCompute

Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterComputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterComputeInput;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterComputeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterComputeRequest();
    $request->deregisterComputeInput = new DeregisterComputeInput();
    $request->deregisterComputeInput->computeName = 'totam';
    $request->deregisterComputeInput->fleetId = 'similique';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = DeregisterComputeXAmzTargetEnum::GAME_LIFT_DEREGISTER_COMPUTE;

    $response = $sdk->sdk->deregisterCompute($request);

    if ($response->deregisterComputeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterGameServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterGameServerInput;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterGameServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterGameServerRequest();
    $request->deregisterGameServerInput = new DeregisterGameServerInput();
    $request->deregisterGameServerInput->gameServerGroupName = 'qui';
    $request->deregisterGameServerInput->gameServerId = 'dolorum';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = DeregisterGameServerXAmzTargetEnum::GAME_LIFT_DEREGISTER_GAME_SERVER;

    $response = $sdk->sdk->deregisterGameServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAlias

<p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAliasInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAliasRequest();
    $request->describeAliasInput = new DescribeAliasInput();
    $request->describeAliasInput->aliasId = 'amet';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DescribeAliasXAmzTargetEnum::GAME_LIFT_DESCRIBE_ALIAS;

    $response = $sdk->sdk->describeAlias($request);

    if ($response->describeAliasOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBuild

<p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBuildRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBuildInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBuildXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBuildRequest();
    $request->describeBuildInput = new DescribeBuildInput();
    $request->describeBuildInput->buildId = 'nihil';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = DescribeBuildXAmzTargetEnum::GAME_LIFT_DESCRIBE_BUILD;

    $response = $sdk->sdk->describeBuild($request);

    if ($response->describeBuildOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCompute

Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeComputeInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComputeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComputeRequest();
    $request->describeComputeInput = new DescribeComputeInput();
    $request->describeComputeInput->computeName = 'deserunt';
    $request->describeComputeInput->fleetId = 'quam';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = DescribeComputeXAmzTargetEnum::GAME_LIFT_DESCRIBE_COMPUTE;

    $response = $sdk->sdk->describeCompute($request);

    if ($response->describeComputeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEc2InstanceLimits

<p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEc2InstanceLimitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEc2InstanceLimitsInput;
use \OpenAPI\OpenAPI\Models\Shared\Ec2InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEc2InstanceLimitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEc2InstanceLimitsRequest();
    $request->describeEc2InstanceLimitsInput = new DescribeEc2InstanceLimitsInput();
    $request->describeEc2InstanceLimitsInput->ec2InstanceType = Ec2InstanceTypeEnum::C48XLARGE;
    $request->describeEc2InstanceLimitsInput->location = 'laborum';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DescribeEc2InstanceLimitsXAmzTargetEnum::GAME_LIFT_DESCRIBE_EC2_INSTANCE_LIMITS;

    $response = $sdk->sdk->describeEc2InstanceLimits($request);

    if ($response->describeEc2InstanceLimitsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetAttributes

<p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetAttributesRequest();
    $request->describeFleetAttributesInput = new DescribeFleetAttributesInput();
    $request->describeFleetAttributesInput->fleetIds = [
        'molestias',
        'temporibus',
    ];
    $request->describeFleetAttributesInput->limit = 183280;
    $request->describeFleetAttributesInput->nextToken = 'neque';
    $request->limit = 'fugit';
    $request->nextToken = 'magni';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DescribeFleetAttributesXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_ATTRIBUTES;

    $response = $sdk->sdk->describeFleetAttributes($request);

    if ($response->describeFleetAttributesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetCapacity

<p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet's home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetCapacityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetCapacityInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetCapacityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetCapacityRequest();
    $request->describeFleetCapacityInput = new DescribeFleetCapacityInput();
    $request->describeFleetCapacityInput->fleetIds = [
        'nobis',
        'et',
        'saepe',
    ];
    $request->describeFleetCapacityInput->limit = 217450;
    $request->describeFleetCapacityInput->nextToken = 'veritatis';
    $request->limit = 'nobis';
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DescribeFleetCapacityXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_CAPACITY;

    $response = $sdk->sdk->describeFleetCapacity($request);

    if ($response->describeFleetCapacityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetEvents

<p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetEventsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetEventsRequest();
    $request->describeFleetEventsInput = new DescribeFleetEventsInput();
    $request->describeFleetEventsInput->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T19:10:24.037Z');
    $request->describeFleetEventsInput->fleetId = 'architecto';
    $request->describeFleetEventsInput->limit = 63038;
    $request->describeFleetEventsInput->nextToken = 'aut';
    $request->describeFleetEventsInput->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-21T10:38:46.777Z');
    $request->limit = 'consequatur';
    $request->nextToken = 'est';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DescribeFleetEventsXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_EVENTS;

    $response = $sdk->sdk->describeFleetEvents($request);

    if ($response->describeFleetEventsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetLocationAttributes

<p>Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetLocationAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetLocationAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetLocationAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetLocationAttributesRequest();
    $request->describeFleetLocationAttributesInput = new DescribeFleetLocationAttributesInput();
    $request->describeFleetLocationAttributesInput->fleetId = 'quae';
    $request->describeFleetLocationAttributesInput->limit = 512393;
    $request->describeFleetLocationAttributesInput->locations = [
        'occaecati',
        'voluptatibus',
    ];
    $request->describeFleetLocationAttributesInput->nextToken = 'quisquam';
    $request->limit = 'vero';
    $request->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = DescribeFleetLocationAttributesXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_LOCATION_ATTRIBUTES;

    $response = $sdk->sdk->describeFleetLocationAttributes($request);

    if ($response->describeFleetLocationAttributesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetLocationCapacity

<p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetLocationCapacityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetLocationCapacityInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetLocationCapacityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetLocationCapacityRequest();
    $request->describeFleetLocationCapacityInput = new DescribeFleetLocationCapacityInput();
    $request->describeFleetLocationCapacityInput->fleetId = 'dignissimos';
    $request->describeFleetLocationCapacityInput->location = 'hic';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = DescribeFleetLocationCapacityXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_LOCATION_CAPACITY;

    $response = $sdk->sdk->describeFleetLocationCapacity($request);

    if ($response->describeFleetLocationCapacityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetLocationUtilization

<p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetLocationUtilizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetLocationUtilizationInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetLocationUtilizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetLocationUtilizationRequest();
    $request->describeFleetLocationUtilizationInput = new DescribeFleetLocationUtilizationInput();
    $request->describeFleetLocationUtilizationInput->fleetId = 'dolore';
    $request->describeFleetLocationUtilizationInput->location = 'quibusdam';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->xAmzTarget = DescribeFleetLocationUtilizationXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_LOCATION_UTILIZATION;

    $response = $sdk->sdk->describeFleetLocationUtilization($request);

    if ($response->describeFleetLocationUtilizationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetPortSettings

<p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet's unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetPortSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetPortSettingsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetPortSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetPortSettingsRequest();
    $request->describeFleetPortSettingsInput = new DescribeFleetPortSettingsInput();
    $request->describeFleetPortSettingsInput->fleetId = 'nulla';
    $request->describeFleetPortSettingsInput->location = 'fugit';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = DescribeFleetPortSettingsXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_PORT_SETTINGS;

    $response = $sdk->sdk->describeFleetPortSettings($request);

    if ($response->describeFleetPortSettingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetUtilization

<p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet's remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet's home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetUtilizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetUtilizationInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetUtilizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetUtilizationRequest();
    $request->describeFleetUtilizationInput = new DescribeFleetUtilizationInput();
    $request->describeFleetUtilizationInput->fleetIds = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->describeFleetUtilizationInput->limit = 136900;
    $request->describeFleetUtilizationInput->nextToken = 'vel';
    $request->limit = 'possimus';
    $request->nextToken = 'magnam';
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribeFleetUtilizationXAmzTargetEnum::GAME_LIFT_DESCRIBE_FLEET_UTILIZATION;

    $response = $sdk->sdk->describeFleetUtilization($request);

    if ($response->describeFleetUtilizationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGameServerInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGameServerRequest();
    $request->describeGameServerInput = new DescribeGameServerInput();
    $request->describeGameServerInput->gameServerGroupName = 'ex';
    $request->describeGameServerInput->gameServerId = 'nulla';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DescribeGameServerXAmzTargetEnum::GAME_LIFT_DESCRIBE_GAME_SERVER;

    $response = $sdk->sdk->describeGameServer($request);

    if ($response->describeGameServerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameServerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGameServerGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameServerGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGameServerGroupRequest();
    $request->describeGameServerGroupInput = new DescribeGameServerGroupInput();
    $request->describeGameServerGroupInput->gameServerGroupName = 'impedit';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = DescribeGameServerGroupXAmzTargetEnum::GAME_LIFT_DESCRIBE_GAME_SERVER_GROUP;

    $response = $sdk->sdk->describeGameServerGroup($request);

    if ($response->describeGameServerGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGameServerInstances

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameServerInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGameServerInstancesInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameServerInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGameServerInstancesRequest();
    $request->describeGameServerInstancesInput = new DescribeGameServerInstancesInput();
    $request->describeGameServerInstancesInput->gameServerGroupName = 'consectetur';
    $request->describeGameServerInstancesInput->instanceIds = [
        'aspernatur',
        'minima',
        'eaque',
        'a',
    ];
    $request->describeGameServerInstancesInput->limit = 725595;
    $request->describeGameServerInstancesInput->nextToken = 'aut';
    $request->limit = 'aut';
    $request->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = DescribeGameServerInstancesXAmzTargetEnum::GAME_LIFT_DESCRIBE_GAME_SERVER_INSTANCES;

    $response = $sdk->sdk->describeGameServerInstances($request);

    if ($response->describeGameServerInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGameSessionDetails

<p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGameSessionDetailsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGameSessionDetailsRequest();
    $request->describeGameSessionDetailsInput = new DescribeGameSessionDetailsInput();
    $request->describeGameSessionDetailsInput->aliasId = 'dolorum';
    $request->describeGameSessionDetailsInput->fleetId = 'laborum';
    $request->describeGameSessionDetailsInput->gameSessionId = 'placeat';
    $request->describeGameSessionDetailsInput->limit = 245367;
    $request->describeGameSessionDetailsInput->location = 'eum';
    $request->describeGameSessionDetailsInput->nextToken = 'autem';
    $request->describeGameSessionDetailsInput->statusFilter = 'nobis';
    $request->limit = 'quas';
    $request->nextToken = 'assumenda';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DescribeGameSessionDetailsXAmzTargetEnum::GAME_LIFT_DESCRIBE_GAME_SESSION_DETAILS;

    $response = $sdk->sdk->describeGameSessionDetails($request);

    if ($response->describeGameSessionDetailsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGameSessionPlacement

<p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionPlacementRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGameSessionPlacementInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionPlacementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGameSessionPlacementRequest();
    $request->describeGameSessionPlacementInput = new DescribeGameSessionPlacementInput();
    $request->describeGameSessionPlacementInput->placementId = 'provident';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = DescribeGameSessionPlacementXAmzTargetEnum::GAME_LIFT_DESCRIBE_GAME_SESSION_PLACEMENT;

    $response = $sdk->sdk->describeGameSessionPlacement($request);

    if ($response->describeGameSessionPlacementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGameSessionQueues

<p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionQueuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGameSessionQueuesInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionQueuesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGameSessionQueuesRequest();
    $request->describeGameSessionQueuesInput = new DescribeGameSessionQueuesInput();
    $request->describeGameSessionQueuesInput->limit = 524593;
    $request->describeGameSessionQueuesInput->names = [
        'reprehenderit',
        'quidem',
        'fugiat',
    ];
    $request->describeGameSessionQueuesInput->nextToken = 'ut';
    $request->limit = 'eum';
    $request->nextToken = 'suscipit';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DescribeGameSessionQueuesXAmzTargetEnum::GAME_LIFT_DESCRIBE_GAME_SESSION_QUEUES;

    $response = $sdk->sdk->describeGameSessionQueues($request);

    if ($response->describeGameSessionQueuesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGameSessions

<p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGameSessionsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGameSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGameSessionsRequest();
    $request->describeGameSessionsInput = new DescribeGameSessionsInput();
    $request->describeGameSessionsInput->aliasId = 'quidem';
    $request->describeGameSessionsInput->fleetId = 'neque';
    $request->describeGameSessionsInput->gameSessionId = 'quo';
    $request->describeGameSessionsInput->limit = 847276;
    $request->describeGameSessionsInput->location = 'quo';
    $request->describeGameSessionsInput->nextToken = 'fuga';
    $request->describeGameSessionsInput->statusFilter = 'eius';
    $request->limit = 'eos';
    $request->nextToken = 'voluptas';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = DescribeGameSessionsXAmzTargetEnum::GAME_LIFT_DESCRIBE_GAME_SESSIONS;

    $response = $sdk->sdk->describeGameSessions($request);

    if ($response->describeGameSessionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstances

<p>Retrieves information about a fleet's instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet's home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet's remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstancesInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstancesRequest();
    $request->describeInstancesInput = new DescribeInstancesInput();
    $request->describeInstancesInput->fleetId = 'sequi';
    $request->describeInstancesInput->instanceId = 'quo';
    $request->describeInstancesInput->limit = 459856;
    $request->describeInstancesInput->location = 'recusandae';
    $request->describeInstancesInput->nextToken = 'aperiam';
    $request->limit = 'distinctio';
    $request->nextToken = 'quod';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = DescribeInstancesXAmzTargetEnum::GAME_LIFT_DESCRIBE_INSTANCES;

    $response = $sdk->sdk->describeInstances($request);

    if ($response->describeInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMatchmaking

<p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMatchmakingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMatchmakingInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMatchmakingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMatchmakingRequest();
    $request->describeMatchmakingInput = new DescribeMatchmakingInput();
    $request->describeMatchmakingInput->ticketIds = [
        'commodi',
        'sapiente',
        'dolores',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = DescribeMatchmakingXAmzTargetEnum::GAME_LIFT_DESCRIBE_MATCHMAKING;

    $response = $sdk->sdk->describeMatchmaking($request);

    if ($response->describeMatchmakingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMatchmakingConfigurations

<p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMatchmakingConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMatchmakingConfigurationsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMatchmakingConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMatchmakingConfigurationsRequest();
    $request->describeMatchmakingConfigurationsInput = new DescribeMatchmakingConfigurationsInput();
    $request->describeMatchmakingConfigurationsInput->limit = 159867;
    $request->describeMatchmakingConfigurationsInput->names = [
        'fugit',
        'fuga',
        'mollitia',
    ];
    $request->describeMatchmakingConfigurationsInput->nextToken = 'incidunt';
    $request->describeMatchmakingConfigurationsInput->ruleSetName = 'atque';
    $request->limit = 'explicabo';
    $request->nextToken = 'minima';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DescribeMatchmakingConfigurationsXAmzTargetEnum::GAME_LIFT_DESCRIBE_MATCHMAKING_CONFIGURATIONS;

    $response = $sdk->sdk->describeMatchmakingConfigurations($request);

    if ($response->describeMatchmakingConfigurationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMatchmakingRuleSets

<p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMatchmakingRuleSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMatchmakingRuleSetsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMatchmakingRuleSetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMatchmakingRuleSetsRequest();
    $request->describeMatchmakingRuleSetsInput = new DescribeMatchmakingRuleSetsInput();
    $request->describeMatchmakingRuleSetsInput->limit = 578922;
    $request->describeMatchmakingRuleSetsInput->names = [
        'et',
        'esse',
        'eveniet',
    ];
    $request->describeMatchmakingRuleSetsInput->nextToken = 'accusamus';
    $request->limit = 'veritatis';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DescribeMatchmakingRuleSetsXAmzTargetEnum::GAME_LIFT_DESCRIBE_MATCHMAKING_RULE_SETS;

    $response = $sdk->sdk->describeMatchmakingRuleSets($request);

    if ($response->describeMatchmakingRuleSetsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePlayerSessions

<p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePlayerSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePlayerSessionsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribePlayerSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePlayerSessionsRequest();
    $request->describePlayerSessionsInput = new DescribePlayerSessionsInput();
    $request->describePlayerSessionsInput->gameSessionId = 'harum';
    $request->describePlayerSessionsInput->limit = 473221;
    $request->describePlayerSessionsInput->nextToken = 'rerum';
    $request->describePlayerSessionsInput->playerId = 'occaecati';
    $request->describePlayerSessionsInput->playerSessionId = 'minima';
    $request->describePlayerSessionsInput->playerSessionStatusFilter = 'distinctio';
    $request->limit = 'eligendi';
    $request->nextToken = 'sit';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = DescribePlayerSessionsXAmzTargetEnum::GAME_LIFT_DESCRIBE_PLAYER_SESSIONS;

    $response = $sdk->sdk->describePlayerSessions($request);

    if ($response->describePlayerSessionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRuntimeConfiguration

<p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuntimeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRuntimeConfigurationInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuntimeConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRuntimeConfigurationRequest();
    $request->describeRuntimeConfigurationInput = new DescribeRuntimeConfigurationInput();
    $request->describeRuntimeConfigurationInput->fleetId = 'quaerat';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = DescribeRuntimeConfigurationXAmzTargetEnum::GAME_LIFT_DESCRIBE_RUNTIME_CONFIGURATION;

    $response = $sdk->sdk->describeRuntimeConfiguration($request);

    if ($response->describeRuntimeConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScalingPolicies

<p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScalingPoliciesInput;
use \OpenAPI\OpenAPI\Models\Shared\ScalingStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScalingPoliciesRequest();
    $request->describeScalingPoliciesInput = new DescribeScalingPoliciesInput();
    $request->describeScalingPoliciesInput->fleetId = 'quas';
    $request->describeScalingPoliciesInput->limit = 457223;
    $request->describeScalingPoliciesInput->location = 'quasi';
    $request->describeScalingPoliciesInput->nextToken = 'a';
    $request->describeScalingPoliciesInput->statusFilter = ScalingStatusTypeEnum::DELETING;
    $request->limit = 'sint';
    $request->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DescribeScalingPoliciesXAmzTargetEnum::GAME_LIFT_DESCRIBE_SCALING_POLICIES;

    $response = $sdk->sdk->describeScalingPolicies($request);

    if ($response->describeScalingPoliciesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScript

<p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScriptInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScriptXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScriptRequest();
    $request->describeScriptInput = new DescribeScriptInput();
    $request->describeScriptInput->scriptId = 'quasi';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DescribeScriptXAmzTargetEnum::GAME_LIFT_DESCRIBE_SCRIPT;

    $response = $sdk->sdk->describeScript($request);

    if ($response->describeScriptOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVpcPeeringAuthorizations

<p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcPeeringAuthorizationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcPeeringAuthorizationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVpcPeeringAuthorizationsRequest();
    $request->requestBody = [
        'eius' => 'libero',
        'illum' => 'soluta',
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DescribeVpcPeeringAuthorizationsXAmzTargetEnum::GAME_LIFT_DESCRIBE_VPC_PEERING_AUTHORIZATIONS;

    $response = $sdk->sdk->describeVpcPeeringAuthorizations($request);

    if ($response->describeVpcPeeringAuthorizationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVpcPeeringConnections

<p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcPeeringConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeVpcPeeringConnectionsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcPeeringConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVpcPeeringConnectionsRequest();
    $request->describeVpcPeeringConnectionsInput = new DescribeVpcPeeringConnectionsInput();
    $request->describeVpcPeeringConnectionsInput->fleetId = 'nisi';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = DescribeVpcPeeringConnectionsXAmzTargetEnum::GAME_LIFT_DESCRIBE_VPC_PEERING_CONNECTIONS;

    $response = $sdk->sdk->describeVpcPeeringConnections($request);

    if ($response->describeVpcPeeringConnectionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComputeAccess

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComputeAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComputeAccessInput;
use \OpenAPI\OpenAPI\Models\Operations\GetComputeAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComputeAccessRequest();
    $request->getComputeAccessInput = new GetComputeAccessInput();
    $request->getComputeAccessInput->computeName = 'dolorum';
    $request->getComputeAccessInput->fleetId = 'architecto';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = GetComputeAccessXAmzTargetEnum::GAME_LIFT_GET_COMPUTE_ACCESS;

    $response = $sdk->sdk->getComputeAccess($request);

    if ($response->getComputeAccessOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComputeAuthToken

Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComputeAuthTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComputeAuthTokenInput;
use \OpenAPI\OpenAPI\Models\Operations\GetComputeAuthTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComputeAuthTokenRequest();
    $request->getComputeAuthTokenInput = new GetComputeAuthTokenInput();
    $request->getComputeAuthTokenInput->computeName = 'minima';
    $request->getComputeAuthTokenInput->fleetId = 'veritatis';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = GetComputeAuthTokenXAmzTargetEnum::GAME_LIFT_GET_COMPUTE_AUTH_TOKEN;

    $response = $sdk->sdk->getComputeAuthToken($request);

    if ($response->getComputeAuthTokenOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGameSessionLogUrl

<p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGameSessionLogUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetGameSessionLogUrlInput;
use \OpenAPI\OpenAPI\Models\Operations\GetGameSessionLogUrlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGameSessionLogUrlRequest();
    $request->getGameSessionLogUrlInput = new GetGameSessionLogUrlInput();
    $request->getGameSessionLogUrlInput->gameSessionId = 'laudantium';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = GetGameSessionLogUrlXAmzTargetEnum::GAME_LIFT_GET_GAME_SESSION_LOG_URL;

    $response = $sdk->sdk->getGameSessionLogUrl($request);

    if ($response->getGameSessionLogUrlOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceAccess

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceAccessInput;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceAccessRequest();
    $request->getInstanceAccessInput = new GetInstanceAccessInput();
    $request->getInstanceAccessInput->fleetId = 'occaecati';
    $request->getInstanceAccessInput->instanceId = 'numquam';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = GetInstanceAccessXAmzTargetEnum::GAME_LIFT_GET_INSTANCE_ACCESS;

    $response = $sdk->sdk->getInstanceAccess($request);

    if ($response->getInstanceAccessOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAliases

<p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAliasesInput;
use \OpenAPI\OpenAPI\Models\Shared\RoutingStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAliasesRequest();
    $request->limit = 'natus';
    $request->listAliasesInput = new ListAliasesInput();
    $request->listAliasesInput->limit = 244651;
    $request->listAliasesInput->name = 'Ms. Glen Zboncak';
    $request->listAliasesInput->nextToken = 'consequuntur';
    $request->listAliasesInput->routingStrategyType = RoutingStrategyTypeEnum::TERMINAL;
    $request->nextToken = 'officia';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ListAliasesXAmzTargetEnum::GAME_LIFT_LIST_ALIASES;

    $response = $sdk->sdk->listAliases($request);

    if ($response->listAliasesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuilds

<p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBuildsInput;
use \OpenAPI\OpenAPI\Models\Shared\BuildStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuildsRequest();
    $request->limit = 'porro';
    $request->listBuildsInput = new ListBuildsInput();
    $request->listBuildsInput->limit = 801836;
    $request->listBuildsInput->nextToken = 'labore';
    $request->listBuildsInput->status = BuildStatusEnum::INITIALIZED;
    $request->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = ListBuildsXAmzTargetEnum::GAME_LIFT_LIST_BUILDS;

    $response = $sdk->sdk->listBuilds($request);

    if ($response->listBuildsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCompute

Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComputeInput;
use \OpenAPI\OpenAPI\Models\Operations\ListComputeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComputeRequest();
    $request->limit = 'totam';
    $request->listComputeInput = new ListComputeInput();
    $request->listComputeInput->fleetId = 'fugiat';
    $request->listComputeInput->limit = 424089;
    $request->listComputeInput->location = 'ducimus';
    $request->listComputeInput->nextToken = 'quos';
    $request->nextToken = 'vel';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = ListComputeXAmzTargetEnum::GAME_LIFT_LIST_COMPUTE;

    $response = $sdk->sdk->listCompute($request);

    if ($response->listComputeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFleets

<p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don't provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFleetsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFleetsRequest();
    $request->limit = 'reiciendis';
    $request->listFleetsInput = new ListFleetsInput();
    $request->listFleetsInput->buildId = 'assumenda';
    $request->listFleetsInput->limit = 363161;
    $request->listFleetsInput->nextToken = 'recusandae';
    $request->listFleetsInput->scriptId = 'aliquid';
    $request->nextToken = 'aperiam';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = ListFleetsXAmzTargetEnum::GAME_LIFT_LIST_FLEETS;

    $response = $sdk->sdk->listFleets($request);

    if ($response->listFleetsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGameServerGroups

Lists a game server groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGameServerGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGameServerGroupsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListGameServerGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGameServerGroupsRequest();
    $request->limit = 'doloribus';
    $request->listGameServerGroupsInput = new ListGameServerGroupsInput();
    $request->listGameServerGroupsInput->limit = 381760;
    $request->listGameServerGroupsInput->nextToken = 'reiciendis';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = ListGameServerGroupsXAmzTargetEnum::GAME_LIFT_LIST_GAME_SERVER_GROUPS;

    $response = $sdk->sdk->listGameServerGroups($request);

    if ($response->listGameServerGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGameServers

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGameServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGameServersInput;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListGameServersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGameServersRequest();
    $request->limit = 'amet';
    $request->listGameServersInput = new ListGameServersInput();
    $request->listGameServersInput->gameServerGroupName = 'beatae';
    $request->listGameServersInput->limit = 489509;
    $request->listGameServersInput->nextToken = 'a';
    $request->listGameServersInput->sortOrder = SortOrderEnum::DESCENDING;
    $request->nextToken = 'consectetur';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = ListGameServersXAmzTargetEnum::GAME_LIFT_LIST_GAME_SERVERS;

    $response = $sdk->sdk->listGameServers($request);

    if ($response->listGameServersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLocations

Lists all custom and Amazon Web Services locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLocationsInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLocationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLocationsRequest();
    $request->limit = 'accusamus';
    $request->listLocationsInput = new ListLocationsInput();
    $request->listLocationsInput->filters = [
        LocationFilterEnum::AWS,
        LocationFilterEnum::AWS,
        LocationFilterEnum::AWS,
    ];
    $request->listLocationsInput->limit = 374244;
    $request->listLocationsInput->nextToken = 'voluptas';
    $request->nextToken = 'minima';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ListLocationsXAmzTargetEnum::GAME_LIFT_LIST_LOCATIONS;

    $response = $sdk->sdk->listLocations($request);

    if ($response->listLocationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScripts

<p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListScriptsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListScriptsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListScriptsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScriptsRequest();
    $request->limit = 'dolore';
    $request->listScriptsInput = new ListScriptsInput();
    $request->listScriptsInput->limit = 304468;
    $request->listScriptsInput->nextToken = 'officiis';
    $request->nextToken = 'temporibus';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = ListScriptsXAmzTargetEnum::GAME_LIFT_LIST_SCRIPTS;

    $response = $sdk->sdk->listScripts($request);

    if ($response->listScriptsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'culpa';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::GAME_LIFT_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putScalingPolicy

<p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutScalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalingAdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\PutScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutScalingPolicyRequest();
    $request->putScalingPolicyInput = new PutScalingPolicyInput();
    $request->putScalingPolicyInput->comparisonOperator = ComparisonOperatorTypeEnum::LESS_THAN_THRESHOLD;
    $request->putScalingPolicyInput->evaluationPeriods = 148829;
    $request->putScalingPolicyInput->fleetId = 'reiciendis';
    $request->putScalingPolicyInput->metricName = MetricNameEnum::ACTIVE_GAME_SESSIONS;
    $request->putScalingPolicyInput->name = 'Johnathan Klein V';
    $request->putScalingPolicyInput->policyType = PolicyTypeEnum::RULE_BASED;
    $request->putScalingPolicyInput->scalingAdjustment = 671907;
    $request->putScalingPolicyInput->scalingAdjustmentType = ScalingAdjustmentTypeEnum::CHANGE_IN_CAPACITY;
    $request->putScalingPolicyInput->targetConfiguration = new TargetConfiguration();
    $request->putScalingPolicyInput->targetConfiguration->targetValue = 4475.16;
    $request->putScalingPolicyInput->threshold = 4174.86;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = PutScalingPolicyXAmzTargetEnum::GAME_LIFT_PUT_SCALING_POLICY;

    $response = $sdk->sdk->putScalingPolicy($request);

    if ($response->putScalingPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerCompute

<p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterComputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterComputeInput;
use \OpenAPI\OpenAPI\Models\Operations\RegisterComputeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterComputeRequest();
    $request->registerComputeInput = new RegisterComputeInput();
    $request->registerComputeInput->certificatePath = 'debitis';
    $request->registerComputeInput->computeName = 'illo';
    $request->registerComputeInput->dnsName = 'reiciendis';
    $request->registerComputeInput->fleetId = 'perferendis';
    $request->registerComputeInput->ipAddress = 'corrupti';
    $request->registerComputeInput->location = 'maiores';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = RegisterComputeXAmzTargetEnum::GAME_LIFT_REGISTER_COMPUTE;

    $response = $sdk->sdk->registerCompute($request);

    if ($response->registerComputeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterGameServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterGameServerInput;
use \OpenAPI\OpenAPI\Models\Operations\RegisterGameServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterGameServerRequest();
    $request->registerGameServerInput = new RegisterGameServerInput();
    $request->registerGameServerInput->connectionInfo = 'occaecati';
    $request->registerGameServerInput->gameServerData = 'quos';
    $request->registerGameServerInput->gameServerGroupName = 'voluptatibus';
    $request->registerGameServerInput->gameServerId = 'tempora';
    $request->registerGameServerInput->instanceId = 'tempora';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = RegisterGameServerXAmzTargetEnum::GAME_LIFT_REGISTER_GAME_SERVER;

    $response = $sdk->sdk->registerGameServer($request);

    if ($response->registerGameServerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestUploadCredentials

<p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestUploadCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RequestUploadCredentialsInput;
use \OpenAPI\OpenAPI\Models\Operations\RequestUploadCredentialsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestUploadCredentialsRequest();
    $request->requestUploadCredentialsInput = new RequestUploadCredentialsInput();
    $request->requestUploadCredentialsInput->buildId = 'facilis';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = RequestUploadCredentialsXAmzTargetEnum::GAME_LIFT_REQUEST_UPLOAD_CREDENTIALS;

    $response = $sdk->sdk->requestUploadCredentials($request);

    if ($response->requestUploadCredentialsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resolveAlias

<p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResolveAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResolveAliasInput;
use \OpenAPI\OpenAPI\Models\Operations\ResolveAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResolveAliasRequest();
    $request->resolveAliasInput = new ResolveAliasInput();
    $request->resolveAliasInput->aliasId = 'error';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = ResolveAliasXAmzTargetEnum::GAME_LIFT_RESOLVE_ALIAS;

    $response = $sdk->sdk->resolveAlias($request);

    if ($response->resolveAliasOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeGameServerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResumeGameServerGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GameServerGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResumeGameServerGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeGameServerGroupRequest();
    $request->resumeGameServerGroupInput = new ResumeGameServerGroupInput();
    $request->resumeGameServerGroupInput->gameServerGroupName = 'saepe';
    $request->resumeGameServerGroupInput->resumeActions = [
        GameServerGroupActionEnum::REPLACE_INSTANCE_TYPES,
        GameServerGroupActionEnum::REPLACE_INSTANCE_TYPES,
    ];
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = ResumeGameServerGroupXAmzTargetEnum::GAME_LIFT_RESUME_GAME_SERVER_GROUP;

    $response = $sdk->sdk->resumeGameServerGroup($request);

    if ($response->resumeGameServerGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchGameSessions

<p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchGameSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchGameSessionsInput;
use \OpenAPI\OpenAPI\Models\Operations\SearchGameSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGameSessionsRequest();
    $request->limit = 'cum';
    $request->nextToken = 'laboriosam';
    $request->searchGameSessionsInput = new SearchGameSessionsInput();
    $request->searchGameSessionsInput->aliasId = 'dolorum';
    $request->searchGameSessionsInput->filterExpression = 'voluptatum';
    $request->searchGameSessionsInput->fleetId = 'error';
    $request->searchGameSessionsInput->limit = 944708;
    $request->searchGameSessionsInput->location = 'expedita';
    $request->searchGameSessionsInput->nextToken = 'debitis';
    $request->searchGameSessionsInput->sortExpression = 'neque';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = SearchGameSessionsXAmzTargetEnum::GAME_LIFT_SEARCH_GAME_SESSIONS;

    $response = $sdk->sdk->searchGameSessions($request);

    if ($response->searchGameSessionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFleetActions

<p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFleetActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartFleetActionsInput;
use \OpenAPI\OpenAPI\Models\Shared\FleetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartFleetActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFleetActionsRequest();
    $request->startFleetActionsInput = new StartFleetActionsInput();
    $request->startFleetActionsInput->actions = [
        FleetActionEnum::AUTO_SCALING,
        FleetActionEnum::AUTO_SCALING,
        FleetActionEnum::AUTO_SCALING,
    ];
    $request->startFleetActionsInput->fleetId = 'fugit';
    $request->startFleetActionsInput->location = 'ut';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = StartFleetActionsXAmzTargetEnum::GAME_LIFT_START_FLEET_ACTIONS;

    $response = $sdk->sdk->startFleetActions($request);

    if ($response->startFleetActionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startGameSessionPlacement

<p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartGameSessionPlacementRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartGameSessionPlacementInput;
use \OpenAPI\OpenAPI\Models\Shared\DesiredPlayerSession;
use \OpenAPI\OpenAPI\Models\Shared\GameProperty;
use \OpenAPI\OpenAPI\Models\Shared\PlayerLatency;
use \OpenAPI\OpenAPI\Models\Operations\StartGameSessionPlacementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartGameSessionPlacementRequest();
    $request->startGameSessionPlacementInput = new StartGameSessionPlacementInput();
    $request->startGameSessionPlacementInput->desiredPlayerSessions = [
        new DesiredPlayerSession(),
        new DesiredPlayerSession(),
    ];
    $request->startGameSessionPlacementInput->gameProperties = [
        new GameProperty(),
    ];
    $request->startGameSessionPlacementInput->gameSessionData = 'voluptatum';
    $request->startGameSessionPlacementInput->gameSessionName = 'quas';
    $request->startGameSessionPlacementInput->gameSessionQueueName = 'repudiandae';
    $request->startGameSessionPlacementInput->maximumPlayerSessionCount = 361151;
    $request->startGameSessionPlacementInput->placementId = 'et';
    $request->startGameSessionPlacementInput->playerLatencies = [
        new PlayerLatency(),
        new PlayerLatency(),
        new PlayerLatency(),
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = StartGameSessionPlacementXAmzTargetEnum::GAME_LIFT_START_GAME_SESSION_PLACEMENT;

    $response = $sdk->sdk->startGameSessionPlacement($request);

    if ($response->startGameSessionPlacementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMatchBackfill

<p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMatchBackfillRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartMatchBackfillInput;
use \OpenAPI\OpenAPI\Models\Shared\Player;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\StartMatchBackfillXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMatchBackfillRequest();
    $request->startMatchBackfillInput = new StartMatchBackfillInput();
    $request->startMatchBackfillInput->configurationName = 'consequatur';
    $request->startMatchBackfillInput->gameSessionArn = 'incidunt';
    $request->startMatchBackfillInput->players = [
        new Player(),
        new Player(),
        new Player(),
        new Player(),
    ];
    $request->startMatchBackfillInput->ticketId = 'dolorem';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = StartMatchBackfillXAmzTargetEnum::GAME_LIFT_START_MATCH_BACKFILL;

    $response = $sdk->sdk->startMatchBackfill($request);

    if ($response->startMatchBackfillOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMatchmaking

<p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMatchmakingRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartMatchmakingInput;
use \OpenAPI\OpenAPI\Models\Shared\Player;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\StartMatchmakingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMatchmakingRequest();
    $request->startMatchmakingInput = new StartMatchmakingInput();
    $request->startMatchmakingInput->configurationName = 'laborum';
    $request->startMatchmakingInput->players = [
        new Player(),
        new Player(),
        new Player(),
    ];
    $request->startMatchmakingInput->ticketId = 'tenetur';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'unde';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = StartMatchmakingXAmzTargetEnum::GAME_LIFT_START_MATCHMAKING;

    $response = $sdk->sdk->startMatchmaking($request);

    if ($response->startMatchmakingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopFleetActions

<p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopFleetActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopFleetActionsInput;
use \OpenAPI\OpenAPI\Models\Shared\FleetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StopFleetActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopFleetActionsRequest();
    $request->stopFleetActionsInput = new StopFleetActionsInput();
    $request->stopFleetActionsInput->actions = [
        FleetActionEnum::AUTO_SCALING,
        FleetActionEnum::AUTO_SCALING,
        FleetActionEnum::AUTO_SCALING,
    ];
    $request->stopFleetActionsInput->fleetId = 'repellendus';
    $request->stopFleetActionsInput->location = 'delectus';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = StopFleetActionsXAmzTargetEnum::GAME_LIFT_STOP_FLEET_ACTIONS;

    $response = $sdk->sdk->stopFleetActions($request);

    if ($response->stopFleetActionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopGameSessionPlacement

Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopGameSessionPlacementRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopGameSessionPlacementInput;
use \OpenAPI\OpenAPI\Models\Operations\StopGameSessionPlacementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopGameSessionPlacementRequest();
    $request->stopGameSessionPlacementInput = new StopGameSessionPlacementInput();
    $request->stopGameSessionPlacementInput->placementId = 'praesentium';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = StopGameSessionPlacementXAmzTargetEnum::GAME_LIFT_STOP_GAME_SESSION_PLACEMENT;

    $response = $sdk->sdk->stopGameSessionPlacement($request);

    if ($response->stopGameSessionPlacementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopMatchmaking

<p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopMatchmakingRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopMatchmakingInput;
use \OpenAPI\OpenAPI\Models\Operations\StopMatchmakingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopMatchmakingRequest();
    $request->stopMatchmakingInput = new StopMatchmakingInput();
    $request->stopMatchmakingInput->ticketId = 'reprehenderit';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = StopMatchmakingXAmzTargetEnum::GAME_LIFT_STOP_MATCHMAKING;

    $response = $sdk->sdk->stopMatchmaking($request);

    if ($response->stopMatchmakingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suspendGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuspendGameServerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuspendGameServerGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GameServerGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SuspendGameServerGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuspendGameServerGroupRequest();
    $request->suspendGameServerGroupInput = new SuspendGameServerGroupInput();
    $request->suspendGameServerGroupInput->gameServerGroupName = 'amet';
    $request->suspendGameServerGroupInput->suspendActions = [
        GameServerGroupActionEnum::REPLACE_INSTANCE_TYPES,
        GameServerGroupActionEnum::REPLACE_INSTANCE_TYPES,
        GameServerGroupActionEnum::REPLACE_INSTANCE_TYPES,
        GameServerGroupActionEnum::REPLACE_INSTANCE_TYPES,
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = SuspendGameServerGroupXAmzTargetEnum::GAME_LIFT_SUSPEND_GAME_SERVER_GROUP;

    $response = $sdk->sdk->suspendGameServerGroup($request);

    if ($response->suspendGameServerGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'minima';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::GAME_LIFT_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'repudiandae';
    $request->untagResourceRequest->tagKeys = [
        'atque',
        'sunt',
        'recusandae',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::GAME_LIFT_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAlias

<p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAliasInput;
use \OpenAPI\OpenAPI\Models\Shared\RoutingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\RoutingStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAliasRequest();
    $request->updateAliasInput = new UpdateAliasInput();
    $request->updateAliasInput->aliasId = 'accusantium';
    $request->updateAliasInput->description = 'beatae';
    $request->updateAliasInput->name = 'Jill Hudson';
    $request->updateAliasInput->routingStrategy = new RoutingStrategy();
    $request->updateAliasInput->routingStrategy->fleetId = 'molestias';
    $request->updateAliasInput->routingStrategy->message = 'magnam';
    $request->updateAliasInput->routingStrategy->type = RoutingStrategyTypeEnum::TERMINAL;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = UpdateAliasXAmzTargetEnum::GAME_LIFT_UPDATE_ALIAS;

    $response = $sdk->sdk->updateAlias($request);

    if ($response->updateAliasOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBuild

<p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBuildRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBuildInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBuildXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBuildRequest();
    $request->updateBuildInput = new UpdateBuildInput();
    $request->updateBuildInput->buildId = 'occaecati';
    $request->updateBuildInput->name = 'Beverly Olson';
    $request->updateBuildInput->version = 'error';
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = UpdateBuildXAmzTargetEnum::GAME_LIFT_UPDATE_BUILD;

    $response = $sdk->sdk->updateBuild($request);

    if ($response->updateBuildOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFleetAttributes

<p>Updates a fleet's mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFleetAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\AnywhereConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCreationLimitPolicy;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFleetAttributesRequest();
    $request->updateFleetAttributesInput = new UpdateFleetAttributesInput();
    $request->updateFleetAttributesInput->anywhereConfiguration = new AnywhereConfiguration();
    $request->updateFleetAttributesInput->anywhereConfiguration->cost = 'iure';
    $request->updateFleetAttributesInput->description = 'ipsa';
    $request->updateFleetAttributesInput->fleetId = 'totam';
    $request->updateFleetAttributesInput->metricGroups = [
        'molestiae',
    ];
    $request->updateFleetAttributesInput->name = 'Clarence Ritchie';
    $request->updateFleetAttributesInput->newGameSessionProtectionPolicy = ProtectionPolicyEnum::NO_PROTECTION;
    $request->updateFleetAttributesInput->resourceCreationLimitPolicy = new ResourceCreationLimitPolicy();
    $request->updateFleetAttributesInput->resourceCreationLimitPolicy->newGameSessionsPerCreator = 672582;
    $request->updateFleetAttributesInput->resourceCreationLimitPolicy->policyPeriodInMinutes = 715208;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = UpdateFleetAttributesXAmzTargetEnum::GAME_LIFT_UPDATE_FLEET_ATTRIBUTES;

    $response = $sdk->sdk->updateFleetAttributes($request);

    if ($response->updateFleetAttributesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFleetCapacity

<p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet's capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet's desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet's remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location's active instance count matches the new desired instance count. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type's limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetCapacityRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFleetCapacityInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetCapacityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFleetCapacityRequest();
    $request->updateFleetCapacityInput = new UpdateFleetCapacityInput();
    $request->updateFleetCapacityInput->desiredInstances = 597303;
    $request->updateFleetCapacityInput->fleetId = 'nihil';
    $request->updateFleetCapacityInput->location = 'mollitia';
    $request->updateFleetCapacityInput->maxSize = 378245;
    $request->updateFleetCapacityInput->minSize = 5189;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = UpdateFleetCapacityXAmzTargetEnum::GAME_LIFT_UPDATE_FLEET_CAPACITY;

    $response = $sdk->sdk->updateFleetCapacity($request);

    if ($response->updateFleetCapacityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFleetPortSettings

<p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetPortSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFleetPortSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\IpPermission;
use \OpenAPI\OpenAPI\Models\Shared\IpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetPortSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFleetPortSettingsRequest();
    $request->updateFleetPortSettingsInput = new UpdateFleetPortSettingsInput();
    $request->updateFleetPortSettingsInput->fleetId = 'nesciunt';
    $request->updateFleetPortSettingsInput->inboundPermissionAuthorizations = [
        new IpPermission(),
    ];
    $request->updateFleetPortSettingsInput->inboundPermissionRevocations = [
        new IpPermission(),
        new IpPermission(),
        new IpPermission(),
        new IpPermission(),
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = UpdateFleetPortSettingsXAmzTargetEnum::GAME_LIFT_UPDATE_FLEET_PORT_SETTINGS;

    $response = $sdk->sdk->updateFleetPortSettings($request);

    if ($response->updateFleetPortSettingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGameServer

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGameServerInput;
use \OpenAPI\OpenAPI\Models\Shared\GameServerHealthCheckEnum;
use \OpenAPI\OpenAPI\Models\Shared\GameServerUtilizationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGameServerRequest();
    $request->updateGameServerInput = new UpdateGameServerInput();
    $request->updateGameServerInput->gameServerData = 'debitis';
    $request->updateGameServerInput->gameServerGroupName = 'laudantium';
    $request->updateGameServerInput->gameServerId = 'eum';
    $request->updateGameServerInput->healthCheck = GameServerHealthCheckEnum::HEALTHY;
    $request->updateGameServerInput->utilizationStatus = GameServerUtilizationStatusEnum::AVAILABLE;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = UpdateGameServerXAmzTargetEnum::GAME_LIFT_UPDATE_GAME_SERVER;

    $response = $sdk->sdk->updateGameServer($request);

    if ($response->updateGameServerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGameServerGroup

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameServerGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGameServerGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\BalancingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GameServerProtectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GameServerGroupInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameServerGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGameServerGroupRequest();
    $request->updateGameServerGroupInput = new UpdateGameServerGroupInput();
    $request->updateGameServerGroupInput->balancingStrategy = BalancingStrategyEnum::SPOT_ONLY;
    $request->updateGameServerGroupInput->gameServerGroupName = 'ullam';
    $request->updateGameServerGroupInput->gameServerProtectionPolicy = GameServerProtectionPolicyEnum::NO_PROTECTION;
    $request->updateGameServerGroupInput->instanceDefinitions = [
        new InstanceDefinition(),
        new InstanceDefinition(),
        new InstanceDefinition(),
    ];
    $request->updateGameServerGroupInput->roleArn = 'nostrum';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = UpdateGameServerGroupXAmzTargetEnum::GAME_LIFT_UPDATE_GAME_SERVER_GROUP;

    $response = $sdk->sdk->updateGameServerGroup($request);

    if ($response->updateGameServerGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGameSession

<p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGameSessionInput;
use \OpenAPI\OpenAPI\Models\Shared\PlayerSessionCreationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGameSessionRequest();
    $request->updateGameSessionInput = new UpdateGameSessionInput();
    $request->updateGameSessionInput->gameSessionId = 'repellat';
    $request->updateGameSessionInput->maximumPlayerSessionCount = 984632;
    $request->updateGameSessionInput->name = 'Arlene Reichert';
    $request->updateGameSessionInput->playerSessionCreationPolicy = PlayerSessionCreationPolicyEnum::DENY_ALL;
    $request->updateGameSessionInput->protectionPolicy = ProtectionPolicyEnum::FULL_PROTECTION;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = UpdateGameSessionXAmzTargetEnum::GAME_LIFT_UPDATE_GAME_SESSION;

    $response = $sdk->sdk->updateGameSession($request);

    if ($response->updateGameSessionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGameSessionQueue

<p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameSessionQueueRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGameSessionQueueInput;
use \OpenAPI\OpenAPI\Models\Shared\GameSessionQueueDestination;
use \OpenAPI\OpenAPI\Models\Shared\FilterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PlayerLatencyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PriorityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PriorityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameSessionQueueXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGameSessionQueueRequest();
    $request->updateGameSessionQueueInput = new UpdateGameSessionQueueInput();
    $request->updateGameSessionQueueInput->customEventData = 'rerum';
    $request->updateGameSessionQueueInput->destinations = [
        new GameSessionQueueDestination(),
        new GameSessionQueueDestination(),
    ];
    $request->updateGameSessionQueueInput->filterConfiguration = new FilterConfiguration();
    $request->updateGameSessionQueueInput->filterConfiguration->allowedLocations = [
        'inventore',
        'fugit',
    ];
    $request->updateGameSessionQueueInput->name = 'Scott Bahringer';
    $request->updateGameSessionQueueInput->notificationTarget = 'eum';
    $request->updateGameSessionQueueInput->playerLatencyPolicies = [
        new PlayerLatencyPolicy(),
        new PlayerLatencyPolicy(),
    ];
    $request->updateGameSessionQueueInput->priorityConfiguration = new PriorityConfiguration();
    $request->updateGameSessionQueueInput->priorityConfiguration->locationOrder = [
        'at',
        'impedit',
        'eos',
    ];
    $request->updateGameSessionQueueInput->priorityConfiguration->priorityOrder = [
        PriorityTypeEnum::COST,
        PriorityTypeEnum::LATENCY,
        PriorityTypeEnum::COST,
        PriorityTypeEnum::LATENCY,
    ];
    $request->updateGameSessionQueueInput->timeoutInSeconds = 583404;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = UpdateGameSessionQueueXAmzTargetEnum::GAME_LIFT_UPDATE_GAME_SESSION_QUEUE;

    $response = $sdk->sdk->updateGameSessionQueue($request);

    if ($response->updateGameSessionQueueOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMatchmakingConfiguration

<p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMatchmakingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMatchmakingConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\BackfillModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GameProperty;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMatchmakingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMatchmakingConfigurationRequest();
    $request->updateMatchmakingConfigurationInput = new UpdateMatchmakingConfigurationInput();
    $request->updateMatchmakingConfigurationInput->acceptanceRequired = false;
    $request->updateMatchmakingConfigurationInput->acceptanceTimeoutSeconds = 596211;
    $request->updateMatchmakingConfigurationInput->additionalPlayerCount = 983427;
    $request->updateMatchmakingConfigurationInput->backfillMode = BackfillModeEnum::MANUAL;
    $request->updateMatchmakingConfigurationInput->customEventData = 'aliquid';
    $request->updateMatchmakingConfigurationInput->description = 'porro';
    $request->updateMatchmakingConfigurationInput->flexMatchMode = FlexMatchModeEnum::STANDALONE;
    $request->updateMatchmakingConfigurationInput->gameProperties = [
        new GameProperty(),
    ];
    $request->updateMatchmakingConfigurationInput->gameSessionData = 'fugit';
    $request->updateMatchmakingConfigurationInput->gameSessionQueueArns = [
        'fuga',
        'ratione',
        'animi',
        'necessitatibus',
    ];
    $request->updateMatchmakingConfigurationInput->name = 'Ms. William Boyle';
    $request->updateMatchmakingConfigurationInput->notificationTarget = 'occaecati';
    $request->updateMatchmakingConfigurationInput->requestTimeoutSeconds = 382440;
    $request->updateMatchmakingConfigurationInput->ruleSetName = 'adipisci';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = UpdateMatchmakingConfigurationXAmzTargetEnum::GAME_LIFT_UPDATE_MATCHMAKING_CONFIGURATION;

    $response = $sdk->sdk->updateMatchmakingConfiguration($request);

    if ($response->updateMatchmakingConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRuntimeConfiguration

<p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuntimeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRuntimeConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerProcess;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuntimeConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRuntimeConfigurationRequest();
    $request->updateRuntimeConfigurationInput = new UpdateRuntimeConfigurationInput();
    $request->updateRuntimeConfigurationInput->fleetId = 'nihil';
    $request->updateRuntimeConfigurationInput->runtimeConfiguration = new RuntimeConfiguration();
    $request->updateRuntimeConfigurationInput->runtimeConfiguration->gameSessionActivationTimeoutSeconds = 473190;
    $request->updateRuntimeConfigurationInput->runtimeConfiguration->maxConcurrentGameSessionActivations = 115834;
    $request->updateRuntimeConfigurationInput->runtimeConfiguration->serverProcesses = [
        new ServerProcess(),
        new ServerProcess(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = UpdateRuntimeConfigurationXAmzTargetEnum::GAME_LIFT_UPDATE_RUNTIME_CONFIGURATION;

    $response = $sdk->sdk->updateRuntimeConfiguration($request);

    if ($response->updateRuntimeConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScript

<p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateScriptInput;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScriptRequest();
    $request->updateScriptInput = new UpdateScriptInput();
    $request->updateScriptInput->name = 'Cheryl Kub';
    $request->updateScriptInput->scriptId = 'ex';
    $request->updateScriptInput->storageLocation = new S3Location();
    $request->updateScriptInput->storageLocation->bucket = 'consectetur';
    $request->updateScriptInput->storageLocation->key = 'aliquid';
    $request->updateScriptInput->storageLocation->objectVersion = 'ipsa';
    $request->updateScriptInput->storageLocation->roleArn = 'laborum';
    $request->updateScriptInput->version = 'sunt';
    $request->updateScriptInput->zipFile = 'nostrum';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = UpdateScriptXAmzTargetEnum::GAME_LIFT_UPDATE_SCRIPT;

    $response = $sdk->sdk->updateScript($request);

    if ($response->updateScriptOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateMatchmakingRuleSet

<p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidateMatchmakingRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ValidateMatchmakingRuleSetInput;
use \OpenAPI\OpenAPI\Models\Operations\ValidateMatchmakingRuleSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateMatchmakingRuleSetRequest();
    $request->validateMatchmakingRuleSetInput = new ValidateMatchmakingRuleSetInput();
    $request->validateMatchmakingRuleSetInput->ruleSetBody = 'eum';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = ValidateMatchmakingRuleSetXAmzTargetEnum::GAME_LIFT_VALIDATE_MATCHMAKING_RULE_SET;

    $response = $sdk->sdk->validateMatchmakingRuleSet($request);

    if ($response->validateMatchmakingRuleSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
