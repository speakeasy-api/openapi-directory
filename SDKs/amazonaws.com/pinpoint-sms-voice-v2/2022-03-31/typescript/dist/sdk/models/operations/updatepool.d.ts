import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePoolXAmzTargetEnum {
    PinpointSMSVoiceV2UpdatePool = "PinpointSMSVoiceV2.UpdatePool"
}
export declare class UpdatePoolRequest extends SpeakeasyBase {
    updatePoolRequest: shared.UpdatePoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePoolXAmzTargetEnum;
}
export declare class UpdatePoolResponse extends SpeakeasyBase {
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
    updatePoolResult?: shared.UpdatePoolResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
