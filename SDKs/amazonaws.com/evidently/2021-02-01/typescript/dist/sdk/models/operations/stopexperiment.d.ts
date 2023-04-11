import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify whether the experiment is to be considered <code>COMPLETED</code> or <code>CANCELLED</code> after it stops.
 */
export declare enum StopExperimentRequestBodyDesiredStateEnum {
    Completed = "COMPLETED",
    Cancelled = "CANCELLED"
}
export declare class StopExperimentRequestBody extends SpeakeasyBase {
    /**
     * Specify whether the experiment is to be considered <code>COMPLETED</code> or <code>CANCELLED</code> after it stops.
     */
    desiredState?: StopExperimentRequestBodyDesiredStateEnum;
    /**
     * A string that describes why you are stopping the experiment.
     */
    reason?: string;
}
export declare class StopExperimentRequest extends SpeakeasyBase {
    requestBody: StopExperimentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the experiment to stop.
     */
    experiment: string;
    /**
     * The name or ARN of the project that contains the experiment to stop.
     */
    project: string;
}
export declare class StopExperimentResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    stopExperimentResponse?: shared.StopExperimentResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
