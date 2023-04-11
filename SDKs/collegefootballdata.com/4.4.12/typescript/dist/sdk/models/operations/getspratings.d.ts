import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSPRatingsRequest extends SpeakeasyBase {
    /**
     * Team filter (required if year not specified)
     */
    team?: string;
    /**
     * Season filter (required if team not specified)
     */
    year?: number;
}
export declare class GetSPRatingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamSPRatings?: shared.TeamSPRating[];
}
