import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAccountsForProvisionedPermissionSetXAmzTargetEnum {
    SWBExternalServiceListAccountsForProvisionedPermissionSet = "SWBExternalService.ListAccountsForProvisionedPermissionSet"
}
export declare class ListAccountsForProvisionedPermissionSetRequest extends SpeakeasyBase {
    listAccountsForProvisionedPermissionSetRequest: shared.ListAccountsForProvisionedPermissionSetRequest;
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
    xAmzTarget: ListAccountsForProvisionedPermissionSetXAmzTargetEnum;
}
export declare class ListAccountsForProvisionedPermissionSetResponse extends SpeakeasyBase {
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
    listAccountsForProvisionedPermissionSetResponse?: shared.ListAccountsForProvisionedPermissionSetResponse;
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
