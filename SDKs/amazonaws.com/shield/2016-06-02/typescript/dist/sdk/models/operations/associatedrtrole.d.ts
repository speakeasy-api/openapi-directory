import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateDRTRoleXAmzTargetEnum {
    AWSShield20160616AssociateDRTRole = "AWSShield_20160616.AssociateDRTRole"
}
export declare class AssociateDRTRoleRequest extends SpeakeasyBase {
    associateDRTRoleRequest: shared.AssociateDRTRoleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDRTRoleXAmzTargetEnum;
}
export declare class AssociateDRTRoleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedForDependencyException
     */
    accessDeniedForDependencyException?: any;
    /**
     * Success
     */
    associateDRTRoleResponse?: Record<string, any>;
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
