import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateDRTLogBucketXAmzTargetEnum {
    AWSShield20160616AssociateDRTLogBucket = "AWSShield_20160616.AssociateDRTLogBucket"
}
export declare class AssociateDRTLogBucketRequest extends SpeakeasyBase {
    associateDRTLogBucketRequest: shared.AssociateDRTLogBucketRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDRTLogBucketXAmzTargetEnum;
}
export declare class AssociateDRTLogBucketResponse extends SpeakeasyBase {
    /**
     * AccessDeniedForDependencyException
     */
    accessDeniedForDependencyException?: any;
    /**
     * Success
     */
    associateDRTLogBucketResponse?: Record<string, any>;
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
     * LimitsExceededException
     */
    limitsExceededException?: any;
    /**
     * NoAssociatedRoleException
     */
    noAssociatedRoleException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
