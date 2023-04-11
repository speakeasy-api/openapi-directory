import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetAssetPropertyValueHistoryRequestBody extends SpeakeasyBase {
    /**
     * The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request.
     */
    entries: shared.BatchGetAssetPropertyValueHistoryEntry[];
    /**
     * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is less than 1 MB.</p> </li> <li> <p>The number of data points in the result set is less than the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>
     */
    maxResults?: number;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: string;
}
export declare class BatchGetAssetPropertyValueHistoryRequest extends SpeakeasyBase {
    requestBody: BatchGetAssetPropertyValueHistoryRequestBody;
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
    nextToken?: string;
}
export declare class BatchGetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetAssetPropertyValueHistoryResponse?: shared.BatchGetAssetPropertyValueHistoryResponse;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
