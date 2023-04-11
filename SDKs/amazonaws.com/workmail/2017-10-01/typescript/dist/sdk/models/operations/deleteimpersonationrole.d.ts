import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteImpersonationRoleXAmzTargetEnum {
    WorkMailServiceDeleteImpersonationRole = "WorkMailService.DeleteImpersonationRole"
}
export declare class DeleteImpersonationRoleRequest extends SpeakeasyBase {
    deleteImpersonationRoleRequest: shared.DeleteImpersonationRoleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImpersonationRoleXAmzTargetEnum;
}
export declare class DeleteImpersonationRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteImpersonationRoleResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
