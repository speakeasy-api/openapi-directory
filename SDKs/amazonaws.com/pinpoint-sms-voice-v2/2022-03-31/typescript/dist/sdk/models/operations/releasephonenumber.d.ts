import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReleasePhoneNumberXAmzTargetEnum {
    PinpointSMSVoiceV2ReleasePhoneNumber = "PinpointSMSVoiceV2.ReleasePhoneNumber"
}
export declare class ReleasePhoneNumberRequest extends SpeakeasyBase {
    releasePhoneNumberRequest: shared.ReleasePhoneNumberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReleasePhoneNumberXAmzTargetEnum;
}
export declare class ReleasePhoneNumberResponse extends SpeakeasyBase {
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
     * Success
     */
    releasePhoneNumberResult?: shared.ReleasePhoneNumberResult;
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
