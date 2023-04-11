import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DisableProactiveEngagementXAmzTargetEnum {
    AWSShield20160616DisableProactiveEngagement = "AWSShield_20160616.DisableProactiveEngagement"
}
export declare class DisableProactiveEngagementRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableProactiveEngagementXAmzTargetEnum;
}
export declare class DisableProactiveEngagementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableProactiveEngagementResponse?: Record<string, any>;
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
