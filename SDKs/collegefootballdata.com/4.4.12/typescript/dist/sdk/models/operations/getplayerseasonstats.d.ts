import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlayerSeasonStatsRequest extends SpeakeasyBase {
    /**
     * Stat category filter (e.g. passing)
     */
    category?: string;
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Start week filter
     */
    endWeek?: number;
    /**
     * Season type filter (regular, postseason, or both)
     */
    seasonType?: string;
    /**
     * Start week filter
     */
    startWeek?: number;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Year filter
     */
    year: number;
}
export declare class GetPlayerSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playerSeasonStats?: shared.PlayerSeasonStat[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
