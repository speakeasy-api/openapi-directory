import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetachCustomerManagedPolicyReferenceFromPermissionSetXAmzTargetEnum {
    SWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSet = "SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet"
}
export declare class DetachCustomerManagedPolicyReferenceFromPermissionSetRequest extends SpeakeasyBase {
    detachCustomerManagedPolicyReferenceFromPermissionSetRequest: shared.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachCustomerManagedPolicyReferenceFromPermissionSetXAmzTargetEnum;
}
export declare class DetachCustomerManagedPolicyReferenceFromPermissionSetResponse extends SpeakeasyBase {
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
    detachCustomerManagedPolicyReferenceFromPermissionSetResponse?: Record<string, any>;
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
