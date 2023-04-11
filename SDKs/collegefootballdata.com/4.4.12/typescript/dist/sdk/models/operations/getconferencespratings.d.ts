import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConferenceSPRatingsRequest extends SpeakeasyBase {
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Season filter
     */
    year?: number;
}
export declare class GetConferenceSPRatingsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    conferenceSPRatings?: shared.ConferenceSPRating[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
