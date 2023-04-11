import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePartitionXAmzTargetEnum {
    AWSGlueDeletePartition = "AWSGlue.DeletePartition"
}
export declare class DeletePartitionRequest extends SpeakeasyBase {
    deletePartitionRequest: shared.DeletePartitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePartitionXAmzTargetEnum;
}
export declare class DeletePartitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePartitionResponse?: Record<string, any>;
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
