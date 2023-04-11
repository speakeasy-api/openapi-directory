import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamSeasonStatsRequest extends SpeakeasyBase {
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Starting week filter
     */
    endWeek?: number;
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
export declare class GetTeamSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamSeasonStats?: shared.TeamSeasonStat[];
}
