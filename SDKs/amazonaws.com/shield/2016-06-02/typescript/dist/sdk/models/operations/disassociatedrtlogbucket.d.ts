import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateDRTLogBucketXAmzTargetEnum {
    AWSShield20160616DisassociateDRTLogBucket = "AWSShield_20160616.DisassociateDRTLogBucket"
}
export declare class DisassociateDRTLogBucketRequest extends SpeakeasyBase {
    disassociateDRTLogBucketRequest: shared.DisassociateDRTLogBucketRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDRTLogBucketXAmzTargetEnum;
}
export declare class DisassociateDRTLogBucketResponse extends SpeakeasyBase {
    /**
     * AccessDeniedForDependencyException
     */
    accessDeniedForDependencyException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateDRTLogBucketResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * NoAssociatedRoleException
     */
    noAssociatedRoleException?: any;
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
