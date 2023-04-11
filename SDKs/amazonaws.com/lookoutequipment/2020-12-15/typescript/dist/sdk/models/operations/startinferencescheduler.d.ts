import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartInferenceSchedulerXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceStartInferenceScheduler = "AWSLookoutEquipmentFrontendService.StartInferenceScheduler"
}
export declare class StartInferenceSchedulerRequest extends SpeakeasyBase {
    startInferenceSchedulerRequest: shared.StartInferenceSchedulerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartInferenceSchedulerXAmzTargetEnum;
}
export declare class StartInferenceSchedulerResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startInferenceSchedulerResponse?: shared.StartInferenceSchedulerResponse;
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
