import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListManagedPoliciesInPermissionSetXAmzTargetEnum {
    SWBExternalServiceListManagedPoliciesInPermissionSet = "SWBExternalService.ListManagedPoliciesInPermissionSet"
}
export declare class ListManagedPoliciesInPermissionSetRequest extends SpeakeasyBase {
    listManagedPoliciesInPermissionSetRequest: shared.ListManagedPoliciesInPermissionSetRequest;
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
    xAmzTarget: ListManagedPoliciesInPermissionSetXAmzTargetEnum;
}
export declare class ListManagedPoliciesInPermissionSetResponse extends SpeakeasyBase {
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
    listManagedPoliciesInPermissionSetResponse?: shared.ListManagedPoliciesInPermissionSetResponse;
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
