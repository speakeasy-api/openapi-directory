import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubscriptionSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetSubscriptionRequest extends SpeakeasyBase {
    /**
     * This field is for future use.
     */
    continuationToken?: string;
    /**
     * This field is for future use.
     */
    limit?: string;
}
export declare class GetSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    subscriptionResponse?: shared.SubscriptionResponse;
}
