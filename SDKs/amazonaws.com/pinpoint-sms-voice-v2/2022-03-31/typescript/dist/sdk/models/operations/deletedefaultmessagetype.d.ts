import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDefaultMessageTypeXAmzTargetEnum {
    PinpointSMSVoiceV2DeleteDefaultMessageType = "PinpointSMSVoiceV2.DeleteDefaultMessageType"
}
export declare class DeleteDefaultMessageTypeRequest extends SpeakeasyBase {
    deleteDefaultMessageTypeRequest: shared.DeleteDefaultMessageTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDefaultMessageTypeXAmzTargetEnum;
}
export declare class DeleteDefaultMessageTypeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteDefaultMessageTypeResult?: shared.DeleteDefaultMessageTypeResult;
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
