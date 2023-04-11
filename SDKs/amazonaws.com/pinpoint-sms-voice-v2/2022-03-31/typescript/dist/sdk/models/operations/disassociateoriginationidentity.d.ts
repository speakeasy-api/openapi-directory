import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateOriginationIdentityXAmzTargetEnum {
    PinpointSMSVoiceV2DisassociateOriginationIdentity = "PinpointSMSVoiceV2.DisassociateOriginationIdentity"
}
export declare class DisassociateOriginationIdentityRequest extends SpeakeasyBase {
    disassociateOriginationIdentityRequest: shared.DisassociateOriginationIdentityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateOriginationIdentityXAmzTargetEnum;
}
export declare class DisassociateOriginationIdentityResponse extends SpeakeasyBase {
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
     * Success
     */
    disassociateOriginationIdentityResult?: shared.DisassociateOriginationIdentityResult;
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
