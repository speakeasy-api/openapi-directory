import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWehooksListRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * List of related record types to include. Valid options are `owningAccount` and `resource`
     */
    include?: string;
    /**
     * Limit of the records list
     */
    limit?: number;
    /**
     * Records to skip before returning results.
     */
    offset?: number;
}
export declare class GetWehooksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    webhookCollectionResponse?: shared.WebhookCollectionResponse;
}
