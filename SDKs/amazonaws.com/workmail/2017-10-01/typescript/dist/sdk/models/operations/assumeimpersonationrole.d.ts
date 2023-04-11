import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssumeImpersonationRoleXAmzTargetEnum {
    WorkMailServiceAssumeImpersonationRole = "WorkMailService.AssumeImpersonationRole"
}
export declare class AssumeImpersonationRoleRequest extends SpeakeasyBase {
    assumeImpersonationRoleRequest: shared.AssumeImpersonationRoleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssumeImpersonationRoleXAmzTargetEnum;
}
export declare class AssumeImpersonationRoleResponse extends SpeakeasyBase {
    /**
     * Success
     */
    assumeImpersonationRoleResponse?: shared.AssumeImpersonationRoleResponse;
    contentType: string;
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
