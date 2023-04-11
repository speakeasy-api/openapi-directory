import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetImpersonationRoleEffectXAmzTargetEnum {
    WorkMailServiceGetImpersonationRoleEffect = "WorkMailService.GetImpersonationRoleEffect"
}
export declare class GetImpersonationRoleEffectRequest extends SpeakeasyBase {
    getImpersonationRoleEffectRequest: shared.GetImpersonationRoleEffectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetImpersonationRoleEffectXAmzTargetEnum;
}
export declare class GetImpersonationRoleEffectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * Success
     */
    getImpersonationRoleEffectResponse?: shared.GetImpersonationRoleEffectResponse;
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
