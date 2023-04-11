import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDeviceIdentifiersRequestBody extends SpeakeasyBase {
    /**
     * <p>The filters.</p> <ul> <li> <p> <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>ACTIVE</code> | <code>INACTIVE</code>).</p> </li> <li> <p> <code>TRAFFIC_GROUP</code> - The Amazon Resource Name (ARN) of the traffic group.</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p>
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
export declare class ListDeviceIdentifiersRequest extends SpeakeasyBase {
    requestBody: ListDeviceIdentifiersRequestBody;
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
export declare class ListDeviceIdentifiersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listDeviceIdentifiersResponse?: shared.ListDeviceIdentifiersResponse;
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
