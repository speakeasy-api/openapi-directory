import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeleteTableVersionXAmzTargetEnum {
    AWSGlueBatchDeleteTableVersion = "AWSGlue.BatchDeleteTableVersion"
}
export declare class BatchDeleteTableVersionRequest extends SpeakeasyBase {
    batchDeleteTableVersionRequest: shared.BatchDeleteTableVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteTableVersionXAmzTargetEnum;
}
export declare class BatchDeleteTableVersionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteTableVersionResponse?: shared.BatchDeleteTableVersionResponse;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
