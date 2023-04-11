import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a player session. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html">DescribePlayerSessions</a> with the player session ID.
 */
export declare class PlacedPlayerSession extends SpeakeasyBase {
    playerId?: string;
    playerSessionId?: string;
}
