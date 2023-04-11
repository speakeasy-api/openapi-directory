import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendTestEventNotificationXAmzTargetEnum {
    MTurkRequesterServiceV20170117SendTestEventNotification = "MTurkRequesterServiceV20170117.SendTestEventNotification"
}
export declare class SendTestEventNotificationRequest extends SpeakeasyBase {
    sendTestEventNotificationRequest: shared.SendTestEventNotificationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTestEventNotificationXAmzTargetEnum;
}
export declare class SendTestEventNotificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * Success
     */
    sendTestEventNotificationResponse?: Record<string, any>;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
