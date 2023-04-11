import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayerGameStatsRequest extends SpeakeasyBase {
    /**
     * Category filter (e.g defensive)
     */
    category?: string;
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Game id filter
     */
    gameId?: number;
    /**
     * Season type filter (regular or postseason)
     */
    seasonType?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Week filter
     */
    week?: number;
    /**
     * Year/season filter for games
     */
    year: number;
}
export declare class GetPlayerGameStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playerGames?: shared.PlayerGame[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
