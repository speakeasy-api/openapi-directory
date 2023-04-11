import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopInferenceSchedulerXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceStopInferenceScheduler = "AWSLookoutEquipmentFrontendService.StopInferenceScheduler"
}
export declare class StopInferenceSchedulerRequest extends SpeakeasyBase {
    stopInferenceSchedulerRequest: shared.StopInferenceSchedulerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopInferenceSchedulerXAmzTargetEnum;
}
export declare class StopInferenceSchedulerResponse extends SpeakeasyBase {
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
     * Success
     */
    stopInferenceSchedulerResponse?: shared.StopInferenceSchedulerResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
