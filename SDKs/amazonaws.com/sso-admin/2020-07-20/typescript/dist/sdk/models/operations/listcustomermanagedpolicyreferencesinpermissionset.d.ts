import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCustomerManagedPolicyReferencesInPermissionSetXAmzTargetEnum {
    SWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSet = "SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet"
}
export declare class ListCustomerManagedPolicyReferencesInPermissionSetRequest extends SpeakeasyBase {
    listCustomerManagedPolicyReferencesInPermissionSetRequest: shared.ListCustomerManagedPolicyReferencesInPermissionSetRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCustomerManagedPolicyReferencesInPermissionSetXAmzTargetEnum;
}
export declare class ListCustomerManagedPolicyReferencesInPermissionSetResponse extends SpeakeasyBase {
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
     * Success
     */
    listCustomerManagedPolicyReferencesInPermissionSetResponse?: shared.ListCustomerManagedPolicyReferencesInPermissionSetResponse;
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
