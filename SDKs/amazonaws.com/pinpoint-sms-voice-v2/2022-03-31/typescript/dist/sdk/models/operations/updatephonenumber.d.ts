import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePhoneNumberXAmzTargetEnum {
    PinpointSMSVoiceV2UpdatePhoneNumber = "PinpointSMSVoiceV2.UpdatePhoneNumber"
}
export declare class UpdatePhoneNumberRequest extends SpeakeasyBase {
    updatePhoneNumberRequest: shared.UpdatePhoneNumberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePhoneNumberXAmzTargetEnum;
}
export declare class UpdatePhoneNumberResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updatePhoneNumberResult?: shared.UpdatePhoneNumberResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
