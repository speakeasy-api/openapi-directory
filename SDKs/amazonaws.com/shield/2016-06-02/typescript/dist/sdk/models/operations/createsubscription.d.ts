import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum CreateSubscriptionXAmzTargetEnum {
    AWSShield20160616CreateSubscription = "AWSShield_20160616.CreateSubscription"
}
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSubscriptionXAmzTargetEnum;
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSubscriptionResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
