import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEventSubscriptionXAmzTargetEnum {
    AmazonDMSv20160101CreateEventSubscription = "AmazonDMSv20160101.CreateEventSubscription"
}
export declare class CreateEventSubscriptionRequest extends SpeakeasyBase {
    createEventSubscriptionMessage: shared.CreateEventSubscriptionMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEventSubscriptionXAmzTargetEnum;
}
export declare class CreateEventSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEventSubscriptionResponse?: shared.CreateEventSubscriptionResponse;
    /**
     * KMSAccessDeniedFault
     */
    kmsAccessDeniedFault?: any;
    /**
     * KMSDisabledFault
     */
    kmsDisabledFault?: any;
    /**
     * KMSInvalidStateFault
     */
    kmsInvalidStateFault?: any;
    /**
     * KMSNotFoundFault
     */
    kmsNotFoundFault?: any;
    /**
     * KMSThrottlingFault
     */
    kmsThrottlingFault?: any;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
    /**
     * SNSInvalidTopicFault
     */
    snsInvalidTopicFault?: any;
    /**
     * SNSNoAuthorizationFault
     */
    snsNoAuthorizationFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
