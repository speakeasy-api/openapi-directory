import { SpeakeasyBase } from "../../../internal/utils";
import { MatchedPlayerSession } from "./matchedplayersession";
/**
 * Connection information for a new game session that is created in response to a start matchmaking request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the matchmaking ticket.
 */
export declare class GameSessionConnectionInfo extends SpeakeasyBase {
    dnsName?: string;
    gameSessionArn?: string;
    ipAddress?: string;
    matchedPlayerSessions?: MatchedPlayerSession[];
    port?: number;
}
