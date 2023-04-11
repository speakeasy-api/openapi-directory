import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListNetworkResourcesRequestBody extends SpeakeasyBase {
    /**
     * <p>The filters.</p> <ul> <li> <p> <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>DELETED</code> | <code>DELETING</code> | <code>PENDING</code> | <code>PENDING_RETURN</code> | <code>PROVISIONING</code> | <code>SHIPPED</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p>
     */
    filters?: Record<string, string[]>;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The Amazon Resource Name (ARN) of the network.
     */
    networkArn: string;
    /**
     * The token for the next page of results.
     */
    startToken?: string;
}
export declare class ListNetworkResourcesRequest extends SpeakeasyBase {
    requestBody: ListNetworkResourcesRequestBody;
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
export declare class ListNetworkResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listNetworkResourcesResponse?: shared.ListNetworkResourcesResponse;
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
