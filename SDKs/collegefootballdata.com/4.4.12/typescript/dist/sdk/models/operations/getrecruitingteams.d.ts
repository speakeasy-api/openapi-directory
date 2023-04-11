import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecruitingTeamsRequest extends SpeakeasyBase {
    /**
     * Team filter
     */
    team?: string;
    /**
     * Recruiting class year
     */
    year?: number;
}
export declare class GetRecruitingTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamRecruitingRanks?: shared.TeamRecruitingRank[];
}
