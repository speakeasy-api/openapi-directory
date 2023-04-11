import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateColumnStatisticsForPartitionXAmzTargetEnum {
    AWSGlueUpdateColumnStatisticsForPartition = "AWSGlue.UpdateColumnStatisticsForPartition"
}
export declare class UpdateColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    updateColumnStatisticsForPartitionRequest: shared.UpdateColumnStatisticsForPartitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateColumnStatisticsForPartitionXAmzTargetEnum;
}
export declare class UpdateColumnStatisticsForPartitionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateColumnStatisticsForPartitionResponse?: shared.UpdateColumnStatisticsForPartitionResponse;
}
