import { SpeakeasyBase } from "../../../internal/utils";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";
import { GameServerGroupStatusEnum } from "./gameservergroupstatusenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding Amazon EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p>
 */
export declare class GameServerGroup extends SpeakeasyBase {
    autoScalingGroupArn?: string;
    balancingStrategy?: BalancingStrategyEnum;
    creationTime?: Date;
    gameServerGroupArn?: string;
    gameServerGroupName?: string;
    gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;
    instanceDefinitions?: InstanceDefinition[];
    lastUpdatedTime?: Date;
    roleArn?: string;
    status?: GameServerGroupStatusEnum;
    statusReason?: string;
    suspendedActions?: GameServerGroupActionEnum[];
}
