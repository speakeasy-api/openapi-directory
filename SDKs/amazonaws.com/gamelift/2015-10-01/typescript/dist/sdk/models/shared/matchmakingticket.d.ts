import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionConnectionInfo } from "./gamesessionconnectioninfo";
import { MatchmakingConfigurationStatusEnum } from "./matchmakingconfigurationstatusenum";
import { Player } from "./player";
/**
 * Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request.
 */
export declare class MatchmakingTicket extends SpeakeasyBase {
    configurationArn?: string;
    configurationName?: string;
    endTime?: Date;
    estimatedWaitTime?: number;
    gameSessionConnectionInfo?: GameSessionConnectionInfo;
    players?: Player[];
    startTime?: Date;
    status?: MatchmakingConfigurationStatusEnum;
    statusMessage?: string;
    statusReason?: string;
    ticketId?: string;
}
