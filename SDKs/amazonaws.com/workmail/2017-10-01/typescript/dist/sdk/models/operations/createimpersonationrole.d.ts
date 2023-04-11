import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateImpersonationRoleXAmzTargetEnum {
    WorkMailServiceCreateImpersonationRole = "WorkMailService.CreateImpersonationRole"
}
export declare class CreateImpersonationRoleRequest extends SpeakeasyBase {
    createImpersonationRoleRequest: shared.CreateImpersonationRoleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImpersonationRoleXAmzTargetEnum;
}
export declare class CreateImpersonationRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createImpersonationRoleResponse?: shared.CreateImpersonationRoleResponse;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
