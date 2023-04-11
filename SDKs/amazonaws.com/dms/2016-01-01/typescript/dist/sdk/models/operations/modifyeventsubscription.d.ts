import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyEventSubscriptionXAmzTargetEnum {
    AmazonDMSv20160101ModifyEventSubscription = "AmazonDMSv20160101.ModifyEventSubscription"
}
export declare class ModifyEventSubscriptionRequest extends SpeakeasyBase {
    modifyEventSubscriptionMessage: shared.ModifyEventSubscriptionMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyEventSubscriptionXAmzTargetEnum;
}
export declare class ModifyEventSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
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
     * Success
     */
    modifyEventSubscriptionResponse?: shared.ModifyEventSubscriptionResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SNSInvalidTopicFault
     */
    snsInvalidTopicFault?: any;
    /**
     * SNSNoAuthorizationFault
     */
    snsNoAuthorizationFault?: any;
}
