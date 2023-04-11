import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum {
    SWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSet = "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet"
}
export declare class AttachCustomerManagedPolicyReferenceToPermissionSetRequest extends SpeakeasyBase {
    attachCustomerManagedPolicyReferenceToPermissionSetRequest: shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum;
}
export declare class AttachCustomerManagedPolicyReferenceToPermissionSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    attachCustomerManagedPolicyReferenceToPermissionSetResponse?: Record<string, any>;
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
