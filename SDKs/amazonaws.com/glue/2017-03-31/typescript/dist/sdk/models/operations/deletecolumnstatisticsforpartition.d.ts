import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteColumnStatisticsForPartitionXAmzTargetEnum {
    AWSGlueDeleteColumnStatisticsForPartition = "AWSGlue.DeleteColumnStatisticsForPartition"
}
export declare class DeleteColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    deleteColumnStatisticsForPartitionRequest: shared.DeleteColumnStatisticsForPartitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteColumnStatisticsForPartitionXAmzTargetEnum;
}
export declare class DeleteColumnStatisticsForPartitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteColumnStatisticsForPartitionResponse?: Record<string, any>;
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
