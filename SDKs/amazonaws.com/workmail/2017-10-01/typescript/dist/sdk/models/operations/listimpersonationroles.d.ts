import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListImpersonationRolesXAmzTargetEnum {
    WorkMailServiceListImpersonationRoles = "WorkMailService.ListImpersonationRoles"
}
export declare class ListImpersonationRolesRequest extends SpeakeasyBase {
    listImpersonationRolesRequest: shared.ListImpersonationRolesRequest;
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
    xAmzTarget: ListImpersonationRolesXAmzTargetEnum;
}
export declare class ListImpersonationRolesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listImpersonationRolesResponse?: shared.ListImpersonationRolesResponse;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
