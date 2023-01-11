import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionPushReportingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSubscriptionPushReportingQueryParams extends SpeakeasyBase {
    pageNumber?: number;
    pageSize?: number;
}
export declare class GetSubscriptionPushReportingRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionPushReportingPathParams;
    queryParams: GetSubscriptionPushReportingQueryParams;
}
export declare class GetSubscriptionPushReportingResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    subscriptionPushReportings?: shared.SubscriptionPushReporting[];
}
