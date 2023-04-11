import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdvancedTeamGameStatsRequest extends SpeakeasyBase {
    /**
     * Filter to remove garbage time plays from calculations
     */
    excludeGarbageTime?: boolean;
    /**
     * Opponent filter
     */
    opponent?: string;
    /**
     * Season type filter (regular, postseason, or both)
     */
    seasonType?: string;
    /**
     * Team filter (required if no year specified)
     */
    team?: string;
    /**
     * Week filter
     */
    week?: number;
    /**
     * Year filter (required if no team specified)
     */
    year?: number;
}
export declare class GetAdvancedTeamGameStatsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    advancedGameStats?: shared.AdvancedGameStat[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
