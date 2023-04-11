import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateColumnStatisticsForTableXAmzTargetEnum {
    AWSGlueUpdateColumnStatisticsForTable = "AWSGlue.UpdateColumnStatisticsForTable"
}
export declare class UpdateColumnStatisticsForTableRequest extends SpeakeasyBase {
    updateColumnStatisticsForTableRequest: shared.UpdateColumnStatisticsForTableRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateColumnStatisticsForTableXAmzTargetEnum;
}
export declare class UpdateColumnStatisticsForTableResponse extends SpeakeasyBase {
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
    updateColumnStatisticsForTableResponse?: shared.UpdateColumnStatisticsForTableResponse;
}
