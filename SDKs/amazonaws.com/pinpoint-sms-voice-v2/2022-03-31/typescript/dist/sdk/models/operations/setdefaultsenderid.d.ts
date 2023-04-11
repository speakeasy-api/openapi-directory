import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetDefaultSenderIdXAmzTargetEnum {
    PinpointSMSVoiceV2SetDefaultSenderId = "PinpointSMSVoiceV2.SetDefaultSenderId"
}
export declare class SetDefaultSenderIdRequest extends SpeakeasyBase {
    setDefaultSenderIdRequest: shared.SetDefaultSenderIdRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetDefaultSenderIdXAmzTargetEnum;
}
export declare class SetDefaultSenderIdResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    setDefaultSenderIdResult?: shared.SetDefaultSenderIdResult;
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
