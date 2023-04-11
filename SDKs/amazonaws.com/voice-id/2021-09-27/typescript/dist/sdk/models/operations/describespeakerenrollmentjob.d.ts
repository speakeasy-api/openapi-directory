import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSpeakerEnrollmentJobXAmzTargetEnum {
    VoiceIDDescribeSpeakerEnrollmentJob = "VoiceID.DescribeSpeakerEnrollmentJob"
}
export declare class DescribeSpeakerEnrollmentJobRequest extends SpeakeasyBase {
    describeSpeakerEnrollmentJobRequest: shared.DescribeSpeakerEnrollmentJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSpeakerEnrollmentJobXAmzTargetEnum;
}
export declare class DescribeSpeakerEnrollmentJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeSpeakerEnrollmentJobResponse?: shared.DescribeSpeakerEnrollmentJobResponse;
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
