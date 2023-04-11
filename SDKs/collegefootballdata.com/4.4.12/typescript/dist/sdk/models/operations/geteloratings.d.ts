import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEloRatingsRequest extends SpeakeasyBase {
    /**
     * Conference filter
     */
    conference?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Maximum week filter
     */
    week?: number;
    /**
     * Season filter
     */
    year?: number;
}
export declare class GetEloRatingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamEloRatings?: shared.TeamEloRating[];
}
