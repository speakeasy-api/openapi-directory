import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetDefaultMessageTypeXAmzTargetEnum {
    PinpointSMSVoiceV2SetDefaultMessageType = "PinpointSMSVoiceV2.SetDefaultMessageType"
}
export declare class SetDefaultMessageTypeRequest extends SpeakeasyBase {
    setDefaultMessageTypeRequest: shared.SetDefaultMessageTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetDefaultMessageTypeXAmzTargetEnum;
}
export declare class SetDefaultMessageTypeResponse extends SpeakeasyBase {
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
    setDefaultMessageTypeResult?: shared.SetDefaultMessageTypeResult;
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
