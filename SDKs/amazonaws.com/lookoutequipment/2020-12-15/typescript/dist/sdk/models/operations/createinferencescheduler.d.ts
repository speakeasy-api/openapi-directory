import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateInferenceSchedulerXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceCreateInferenceScheduler = "AWSLookoutEquipmentFrontendService.CreateInferenceScheduler"
}
export declare class CreateInferenceSchedulerRequest extends SpeakeasyBase {
    createInferenceSchedulerRequest: shared.CreateInferenceSchedulerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInferenceSchedulerXAmzTargetEnum;
}
export declare class CreateInferenceSchedulerResponse extends SpeakeasyBase {
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
     * Success
     */
    createInferenceSchedulerResponse?: shared.CreateInferenceSchedulerResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
