import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RankCarRequest extends SpeakeasyBase {
    /**
     * Inputs needed for ranking a group of car listings
     */
    carRankRequest: shared.CarRankRequest;
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Flag on whether to include api_key in response API urls (if any)
     */
    appendApiKey?: boolean;
}
export declare class RankCarResponse extends SpeakeasyBase {
    /**
     * Rank listings based on inputs provided.
     */
    carRankResponse?: shared.CarRankResponse;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
