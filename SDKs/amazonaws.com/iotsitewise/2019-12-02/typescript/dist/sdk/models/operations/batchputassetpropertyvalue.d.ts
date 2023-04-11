import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchPutAssetPropertyValueRequestBody extends SpeakeasyBase {
    /**
     * The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.
     */
    entries: shared.PutAssetPropertyValueEntry[];
}
export declare class BatchPutAssetPropertyValueRequest extends SpeakeasyBase {
    requestBody: BatchPutAssetPropertyValueRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchPutAssetPropertyValueResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchPutAssetPropertyValueResponse?: shared.BatchPutAssetPropertyValueResponse;
    /**
     * ConflictingOperationException
     */
    conflictingOperationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
