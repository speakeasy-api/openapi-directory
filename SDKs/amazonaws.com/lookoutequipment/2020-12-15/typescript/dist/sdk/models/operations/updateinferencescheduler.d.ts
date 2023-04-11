import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateInferenceSchedulerXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceUpdateInferenceScheduler = "AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler"
}
export declare class UpdateInferenceSchedulerRequest extends SpeakeasyBase {
    updateInferenceSchedulerRequest: shared.UpdateInferenceSchedulerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInferenceSchedulerXAmzTargetEnum;
}
export declare class UpdateInferenceSchedulerResponse extends SpeakeasyBase {
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
