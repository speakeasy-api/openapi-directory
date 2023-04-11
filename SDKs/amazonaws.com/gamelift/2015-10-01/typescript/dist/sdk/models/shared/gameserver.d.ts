import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerClaimStatusEnum } from "./gameserverclaimstatusenum";
import { GameServerUtilizationStatusEnum } from "./gameserverutilizationstatusenum";
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a game server group. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p>
 */
export declare class GameServer extends SpeakeasyBase {
    claimStatus?: GameServerClaimStatusEnum;
    connectionInfo?: string;
    gameServerData?: string;
    gameServerGroupArn?: string;
    gameServerGroupName?: string;
    gameServerId?: string;
    instanceId?: string;
    lastClaimTime?: Date;
    lastHealthCheckTime?: Date;
    registrationTime?: Date;
    utilizationStatus?: GameServerUtilizationStatusEnum;
}
