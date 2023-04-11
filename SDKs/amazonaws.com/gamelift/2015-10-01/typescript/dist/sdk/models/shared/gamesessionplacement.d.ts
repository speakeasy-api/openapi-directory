import { SpeakeasyBase } from "../../../internal/utils";
import { GameProperty } from "./gameproperty";
import { GameSessionPlacementStateEnum } from "./gamesessionplacementstateenum";
import { PlacedPlayerSession } from "./placedplayersession";
import { PlayerLatency } from "./playerlatency";
/**
 * This object includes the full details of the original request plus the current status and start/end time stamps.
 */
export declare class GameSessionPlacement extends SpeakeasyBase {
    dnsName?: string;
    endTime?: Date;
    gameProperties?: GameProperty[];
    gameSessionArn?: string;
    gameSessionData?: string;
    gameSessionId?: string;
    gameSessionName?: string;
    gameSessionQueueName?: string;
    gameSessionRegion?: string;
    ipAddress?: string;
    matchmakerData?: string;
    maximumPlayerSessionCount?: number;
    placedPlayerSessions?: PlacedPlayerSession[];
    placementId?: string;
    playerLatencies?: PlayerLatency[];
    port?: number;
    startTime?: Date;
    status?: GameSessionPlacementStateEnum;
}
