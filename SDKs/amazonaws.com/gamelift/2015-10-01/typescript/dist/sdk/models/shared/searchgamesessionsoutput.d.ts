import { SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";
/**
 * Success
 */
export declare class SearchGameSessionsOutput extends SpeakeasyBase {
    gameSessions?: GameSession[];
    nextToken?: string;
}
