import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListNetworksRequestBody extends SpeakeasyBase {
    /**
     * <p>The filters.</p> <ul> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>CREATED</code> | <code>DELETED</code> | <code>DEPROVISIONING</code> | <code>PROVISIONING</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p>
     */
    filters?: Record<string, string[]>;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    startToken?: string;
}
export declare class ListNetworksRequest extends SpeakeasyBase {
    requestBody: ListNetworksRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    startToken?: string;
}
export declare class ListNetworksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listNetworksResponse?: shared.ListNetworksResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
