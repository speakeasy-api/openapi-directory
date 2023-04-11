import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecruitingGroupsRequest extends SpeakeasyBase {
    /**
     * conference filter
     */
    conference?: string;
    /**
     * Ending year
     */
    endYear?: number;
    /**
     * Starting year
     */
    startYear?: number;
    /**
     * Team filter
     */
    team?: string;
}
export declare class GetRecruitingGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    positionGroupRecruitingRatings?: shared.PositionGroupRecruitingRating[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
