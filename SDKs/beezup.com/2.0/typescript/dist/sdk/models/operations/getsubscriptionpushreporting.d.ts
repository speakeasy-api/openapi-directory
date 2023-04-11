import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubscriptionPushReportingRequest extends SpeakeasyBase {
    id: string;
    pageNumber?: number;
    pageSize?: number;
}
export declare class GetSubscriptionPushReportingResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The subscription is not found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
    /**
     * Subscription push reporting info
     */
    subscriptionPushReportings?: shared.SubscriptionPushReporting[];
}
