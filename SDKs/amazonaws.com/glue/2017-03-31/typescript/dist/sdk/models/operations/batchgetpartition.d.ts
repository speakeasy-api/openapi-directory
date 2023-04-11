import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetPartitionXAmzTargetEnum {
    AWSGlueBatchGetPartition = "AWSGlue.BatchGetPartition"
}
export declare class BatchGetPartitionRequest extends SpeakeasyBase {
    batchGetPartitionRequest: shared.BatchGetPartitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetPartitionXAmzTargetEnum;
}
export declare class BatchGetPartitionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetPartitionResponse?: shared.BatchGetPartitionResponse;
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
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
