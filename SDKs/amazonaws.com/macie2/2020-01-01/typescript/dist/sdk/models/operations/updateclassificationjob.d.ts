import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The status of a classification job. Possible values are:
 */
export declare enum UpdateClassificationJobRequestBodyJobStatusEnum {
    Running = "RUNNING",
    Paused = "PAUSED",
    Cancelled = "CANCELLED",
    Complete = "COMPLETE",
    Idle = "IDLE",
    UserPaused = "USER_PAUSED"
}
export declare class UpdateClassificationJobRequestBody extends SpeakeasyBase {
    /**
     * The status of a classification job. Possible values are:
     */
    jobStatus: UpdateClassificationJobRequestBodyJobStatusEnum;
}
export declare class UpdateClassificationJobRequest extends SpeakeasyBase {
    requestBody: UpdateClassificationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the classification job.
     */
    jobId: string;
}
export declare class UpdateClassificationJobResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateClassificationJobResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
