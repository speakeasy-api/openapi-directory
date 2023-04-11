import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetImpersonationRoleXAmzTargetEnum {
    WorkMailServiceGetImpersonationRole = "WorkMailService.GetImpersonationRole"
}
export declare class GetImpersonationRoleRequest extends SpeakeasyBase {
    getImpersonationRoleRequest: shared.GetImpersonationRoleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetImpersonationRoleXAmzTargetEnum;
}
export declare class GetImpersonationRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getImpersonationRoleResponse?: shared.GetImpersonationRoleResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
