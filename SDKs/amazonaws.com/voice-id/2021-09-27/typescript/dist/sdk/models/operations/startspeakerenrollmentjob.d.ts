import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSpeakerEnrollmentJobXAmzTargetEnum {
    VoiceIDStartSpeakerEnrollmentJob = "VoiceID.StartSpeakerEnrollmentJob"
}
export declare class StartSpeakerEnrollmentJobRequest extends SpeakeasyBase {
    startSpeakerEnrollmentJobRequest: shared.StartSpeakerEnrollmentJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSpeakerEnrollmentJobXAmzTargetEnum;
}
export declare class StartSpeakerEnrollmentJobResponse extends SpeakeasyBase {
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
    startSpeakerEnrollmentJobResponse?: shared.StartSpeakerEnrollmentJobResponse;
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
