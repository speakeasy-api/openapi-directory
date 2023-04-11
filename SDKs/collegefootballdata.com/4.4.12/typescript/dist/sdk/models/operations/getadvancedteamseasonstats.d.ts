import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdvancedTeamSeasonStatsRequest extends SpeakeasyBase {
    /**
     * Starting week filter
     */
    endWeek?: number;
    /**
     * Filter to remove garbage time plays from calculations
     */
    excludeGarbageTime?: boolean;
    /**
     * Starting week filter
     */
    startWeek?: number;
    /**
     * Team filter (required if no year specified)
     */
    team?: string;
    /**
     * Year filter (required if no team specified)
     */
    year?: number;
}
export declare class GetAdvancedTeamSeasonStatsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    advancedSeasonStats?: shared.AdvancedSeasonStat[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
