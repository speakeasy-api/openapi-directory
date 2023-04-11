import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLinuxSubscriptionInstancesRequestBody extends SpeakeasyBase {
    /**
     * <p>An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. For example, you can filter by the name of <code>AmiID</code> with an optional operator to see subscriptions that match, partially match, or don't match a certain Amazon Machine Image (AMI) ID.</p> <p>The valid names for this filter are:</p> <ul> <li> <p> <code>AmiID</code> </p> </li> <li> <p> <code>InstanceID</code> </p> </li> <li> <p> <code>AccountID</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Region</code> </p> </li> <li> <p> <code>UsageOperation</code> </p> </li> <li> <p> <code>ProductCode</code> </p> </li> <li> <p> <code>InstanceType</code> </p> </li> </ul> <p>The valid Operators for this filter are:</p> <ul> <li> <p> <code>contains</code> </p> </li> <li> <p> <code>equals</code> </p> </li> <li> <p> <code>Notequal</code> </p> </li> </ul>
     */
    filters?: shared.Filter[];
    /**
     * Maximum number of results to return in a single call.
     */
    maxResults?: number;
    /**
     * Token for the next set of results.
     */
    nextToken?: string;
}
export declare class ListLinuxSubscriptionInstancesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListLinuxSubscriptionInstancesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLinuxSubscriptionInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listLinuxSubscriptionInstancesResponse?: shared.ListLinuxSubscriptionInstancesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
