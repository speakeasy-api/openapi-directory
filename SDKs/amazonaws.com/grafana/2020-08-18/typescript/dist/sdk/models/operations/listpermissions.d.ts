import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * (Optional) If you specify <code>SSO_USER</code>, then only the permissions of IAM Identity Center users are returned. If you specify <code>SSO_GROUP</code>, only the permissions of IAM Identity Center groups are returned.
 */
export declare enum ListPermissionsUserTypeEnum {
    SsoUser = "SSO_USER",
    SsoGroup = "SSO_GROUP"
}
export declare class ListPermissionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * (Optional) Limits the results to only the group that matches this ID.
     */
    groupId?: string;
    /**
     * The maximum number of results to include in the response.
     */
    maxResults?: number;
    /**
     * The token to use when requesting the next set of results. You received this token from a previous <code>ListPermissions</code> operation.
     */
    nextToken?: string;
    /**
     * (Optional) Limits the results to only the user that matches this ID.
     */
    userId?: string;
    /**
     * (Optional) If you specify <code>SSO_USER</code>, then only the permissions of IAM Identity Center users are returned. If you specify <code>SSO_GROUP</code>, only the permissions of IAM Identity Center groups are returned.
     */
    userType?: ListPermissionsUserTypeEnum;
    /**
     * The ID of the workspace to list permissions for. This parameter is required.
     */
    workspaceId: string;
}
export declare class ListPermissionsResponse extends SpeakeasyBase {
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
    listPermissionsResponse?: shared.ListPermissionsResponse;
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
