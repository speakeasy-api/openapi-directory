import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEventSubscriptionXAmzTargetEnum {
    AmazonDMSv20160101DeleteEventSubscription = "AmazonDMSv20160101.DeleteEventSubscription"
}
export declare class DeleteEventSubscriptionRequest extends SpeakeasyBase {
    deleteEventSubscriptionMessage: shared.DeleteEventSubscriptionMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventSubscriptionXAmzTargetEnum;
}
export declare class DeleteEventSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEventSubscriptionResponse?: shared.DeleteEventSubscriptionResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
