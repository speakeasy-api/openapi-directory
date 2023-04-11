import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateOriginationIdentityXAmzTargetEnum {
    PinpointSMSVoiceV2AssociateOriginationIdentity = "PinpointSMSVoiceV2.AssociateOriginationIdentity"
}
export declare class AssociateOriginationIdentityRequest extends SpeakeasyBase {
    associateOriginationIdentityRequest: shared.AssociateOriginationIdentityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateOriginationIdentityXAmzTargetEnum;
}
export declare class AssociateOriginationIdentityResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateOriginationIdentityResult?: shared.AssociateOriginationIdentityResult;
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
