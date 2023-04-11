import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubscriptionRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetSubscriptionResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The subscription is not found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
    /**
     * Subscription info
     */
    subscriptionIndex?: shared.SubscriptionIndex;
}
