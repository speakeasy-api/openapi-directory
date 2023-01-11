import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSubscriptionRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionPathParams;
}
export declare class GetSubscriptionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    subscriptionIndex?: shared.SubscriptionIndex;
}
