import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DeleteSubscriptionXAmzTargetEnum {
    AWSShield20160616DeleteSubscription = "AWSShield_20160616.DeleteSubscription"
}
export declare class DeleteSubscriptionRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubscriptionXAmzTargetEnum;
}
export declare class DeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSubscriptionResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * LockedSubscriptionException
     */
    lockedSubscriptionException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
