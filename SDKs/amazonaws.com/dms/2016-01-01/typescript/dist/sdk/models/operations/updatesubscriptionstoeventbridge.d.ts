import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSubscriptionsToEventBridgeXAmzTargetEnum {
    AmazonDMSv20160101UpdateSubscriptionsToEventBridge = "AmazonDMSv20160101.UpdateSubscriptionsToEventBridge"
}
export declare class UpdateSubscriptionsToEventBridgeRequest extends SpeakeasyBase {
    updateSubscriptionsToEventBridgeMessage: shared.UpdateSubscriptionsToEventBridgeMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubscriptionsToEventBridgeXAmzTargetEnum;
}
export declare class UpdateSubscriptionsToEventBridgeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSubscriptionsToEventBridgeResponse?: shared.UpdateSubscriptionsToEventBridgeResponse;
}
