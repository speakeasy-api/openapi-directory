import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDefaultSenderIdXAmzTargetEnum {
    PinpointSMSVoiceV2DeleteDefaultSenderId = "PinpointSMSVoiceV2.DeleteDefaultSenderId"
}
export declare class DeleteDefaultSenderIdRequest extends SpeakeasyBase {
    deleteDefaultSenderIdRequest: shared.DeleteDefaultSenderIdRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDefaultSenderIdXAmzTargetEnum;
}
export declare class DeleteDefaultSenderIdResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteDefaultSenderIdResult?: shared.DeleteDefaultSenderIdResult;
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
