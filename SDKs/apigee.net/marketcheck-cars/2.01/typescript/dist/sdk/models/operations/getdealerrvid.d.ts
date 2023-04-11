import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDealerRvIdRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Dealer id to get all the dealer info attributes
     */
    id: string;
    /**
     * boolean param to include site providers name in response
     */
    provider?: boolean;
}
export declare class GetDealerRvIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Dealer for the given id
     */
    dealer?: shared.Dealer;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
