import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartFraudsterRegistrationJobXAmzTargetEnum {
    VoiceIDStartFraudsterRegistrationJob = "VoiceID.StartFraudsterRegistrationJob"
}
export declare class StartFraudsterRegistrationJobRequest extends SpeakeasyBase {
    startFraudsterRegistrationJobRequest: shared.StartFraudsterRegistrationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFraudsterRegistrationJobXAmzTargetEnum;
}
export declare class StartFraudsterRegistrationJobResponse extends SpeakeasyBase {
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startFraudsterRegistrationJobResponse?: shared.StartFraudsterRegistrationJobResponse;
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
