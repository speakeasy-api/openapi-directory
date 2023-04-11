import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDataSourceSyncJobXAmzTargetEnum {
    AWSKendraFrontendServiceStartDataSourceSyncJob = "AWSKendraFrontendService.StartDataSourceSyncJob"
}
export declare class StartDataSourceSyncJobRequest extends SpeakeasyBase {
    startDataSourceSyncJobRequest: shared.StartDataSourceSyncJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDataSourceSyncJobXAmzTargetEnum;
}
export declare class StartDataSourceSyncJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startDataSourceSyncJobResponse?: shared.StartDataSourceSyncJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
