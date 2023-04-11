import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopDataSourceSyncJobXAmzTargetEnum {
    AWSKendraFrontendServiceStopDataSourceSyncJob = "AWSKendraFrontendService.StopDataSourceSyncJob"
}
export declare class StopDataSourceSyncJobRequest extends SpeakeasyBase {
    stopDataSourceSyncJobRequest: shared.StopDataSourceSyncJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDataSourceSyncJobXAmzTargetEnum;
}
export declare class StopDataSourceSyncJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
