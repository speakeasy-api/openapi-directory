import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeleteTableXAmzTargetEnum {
    AWSGlueBatchDeleteTable = "AWSGlue.BatchDeleteTable"
}
export declare class BatchDeleteTableRequest extends SpeakeasyBase {
    batchDeleteTableRequest: shared.BatchDeleteTableRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteTableXAmzTargetEnum;
}
export declare class BatchDeleteTableResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteTableResponse?: shared.BatchDeleteTableResponse;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
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
    /**
     * ResourceNotReadyException
     */
    resourceNotReadyException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
