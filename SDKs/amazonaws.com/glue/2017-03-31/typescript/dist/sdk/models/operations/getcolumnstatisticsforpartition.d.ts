import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetColumnStatisticsForPartitionXAmzTargetEnum {
    AWSGlueGetColumnStatisticsForPartition = "AWSGlue.GetColumnStatisticsForPartition"
}
export declare class GetColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    getColumnStatisticsForPartitionRequest: shared.GetColumnStatisticsForPartitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetColumnStatisticsForPartitionXAmzTargetEnum;
}
export declare class GetColumnStatisticsForPartitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getColumnStatisticsForPartitionResponse?: shared.GetColumnStatisticsForPartitionResponse;
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
