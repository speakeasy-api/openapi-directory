import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AttachManagedPolicyToPermissionSetXAmzTargetEnum {
    SWBExternalServiceAttachManagedPolicyToPermissionSet = "SWBExternalService.AttachManagedPolicyToPermissionSet"
}
export declare class AttachManagedPolicyToPermissionSetRequest extends SpeakeasyBase {
    attachManagedPolicyToPermissionSetRequest: shared.AttachManagedPolicyToPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachManagedPolicyToPermissionSetXAmzTargetEnum;
}
export declare class AttachManagedPolicyToPermissionSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    attachManagedPolicyToPermissionSetResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
