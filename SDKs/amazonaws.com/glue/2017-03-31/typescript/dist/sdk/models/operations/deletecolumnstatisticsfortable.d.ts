import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteColumnStatisticsForTableXAmzTargetEnum {
    AWSGlueDeleteColumnStatisticsForTable = "AWSGlue.DeleteColumnStatisticsForTable"
}
export declare class DeleteColumnStatisticsForTableRequest extends SpeakeasyBase {
    deleteColumnStatisticsForTableRequest: shared.DeleteColumnStatisticsForTableRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteColumnStatisticsForTableXAmzTargetEnum;
}
export declare class DeleteColumnStatisticsForTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteColumnStatisticsForTableResponse?: Record<string, any>;
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
