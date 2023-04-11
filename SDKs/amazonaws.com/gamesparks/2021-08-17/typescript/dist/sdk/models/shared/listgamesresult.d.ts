import { SpeakeasyBase } from "../../../internal/utils";
import { GameSummary } from "./gamesummary";
/**
 * Success
 */
export declare class ListGamesResult extends SpeakeasyBase {
    games?: GameSummary[];
    nextToken?: string;
}
