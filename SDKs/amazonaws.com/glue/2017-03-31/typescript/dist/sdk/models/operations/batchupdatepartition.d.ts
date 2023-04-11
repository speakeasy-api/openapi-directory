import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchUpdatePartitionXAmzTargetEnum {
    AWSGlueBatchUpdatePartition = "AWSGlue.BatchUpdatePartition"
}
export declare class BatchUpdatePartitionRequest extends SpeakeasyBase {
    batchUpdatePartitionRequest: shared.BatchUpdatePartitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchUpdatePartitionXAmzTargetEnum;
}
export declare class BatchUpdatePartitionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchUpdatePartitionResponse?: shared.BatchUpdatePartitionResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
