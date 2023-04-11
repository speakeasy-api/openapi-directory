import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetColumnStatisticsForTableXAmzTargetEnum {
    AWSGlueGetColumnStatisticsForTable = "AWSGlue.GetColumnStatisticsForTable"
}
export declare class GetColumnStatisticsForTableRequest extends SpeakeasyBase {
    getColumnStatisticsForTableRequest: shared.GetColumnStatisticsForTableRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetColumnStatisticsForTableXAmzTargetEnum;
}
export declare class GetColumnStatisticsForTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getColumnStatisticsForTableResponse?: shared.GetColumnStatisticsForTableResponse;
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
