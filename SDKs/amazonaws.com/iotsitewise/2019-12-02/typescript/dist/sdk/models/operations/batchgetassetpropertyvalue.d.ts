import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetAssetPropertyValueRequestBody extends SpeakeasyBase {
    /**
     * The list of asset property value entries for the batch get request. You can specify up to 128 entries per request.
     */
    entries: shared.BatchGetAssetPropertyValueEntry[];
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: string;
}
export declare class BatchGetAssetPropertyValueRequest extends SpeakeasyBase {
    requestBody: BatchGetAssetPropertyValueRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class BatchGetAssetPropertyValueResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetAssetPropertyValueResponse?: shared.BatchGetAssetPropertyValueResponse;
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
