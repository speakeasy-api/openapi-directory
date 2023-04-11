import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum EnableProactiveEngagementXAmzTargetEnum {
    AWSShield20160616EnableProactiveEngagement = "AWSShield_20160616.EnableProactiveEngagement"
}
export declare class EnableProactiveEngagementRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableProactiveEngagementXAmzTargetEnum;
}
export declare class EnableProactiveEngagementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableProactiveEngagementResponse?: Record<string, any>;
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
