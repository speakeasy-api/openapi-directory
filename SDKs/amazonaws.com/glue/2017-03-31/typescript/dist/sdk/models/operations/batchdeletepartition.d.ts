import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeletePartitionXAmzTargetEnum {
    AWSGlueBatchDeletePartition = "AWSGlue.BatchDeletePartition"
}
export declare class BatchDeletePartitionRequest extends SpeakeasyBase {
    batchDeletePartitionRequest: shared.BatchDeletePartitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeletePartitionXAmzTargetEnum;
}
export declare class BatchDeletePartitionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeletePartitionResponse?: shared.BatchDeletePartitionResponse;
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
