import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DisassociateDRTRoleXAmzTargetEnum {
    AWSShield20160616DisassociateDRTRole = "AWSShield_20160616.DisassociateDRTRole"
}
export declare class DisassociateDRTRoleRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDRTRoleXAmzTargetEnum;
}
export declare class DisassociateDRTRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateDRTRoleResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
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
