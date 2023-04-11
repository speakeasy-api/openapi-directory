import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSubscriptionXAmzTargetEnum {
    AWSShield20160616UpdateSubscription = "AWSShield_20160616.UpdateSubscription"
}
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    updateSubscriptionRequest: shared.UpdateSubscriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubscriptionXAmzTargetEnum;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LockedSubscriptionException
     */
    lockedSubscriptionException?: any;
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
    /**
     * Success
     */
    updateSubscriptionResponse?: Record<string, any>;
}
