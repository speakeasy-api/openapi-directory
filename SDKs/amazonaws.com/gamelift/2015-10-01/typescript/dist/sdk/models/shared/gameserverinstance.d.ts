import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerInstanceStatusEnum } from "./gameserverinstancestatusenum";
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p>
 */
export declare class GameServerInstance extends SpeakeasyBase {
    gameServerGroupArn?: string;
    gameServerGroupName?: string;
    instanceId?: string;
    instanceStatus?: GameServerInstanceStatusEnum;
}
