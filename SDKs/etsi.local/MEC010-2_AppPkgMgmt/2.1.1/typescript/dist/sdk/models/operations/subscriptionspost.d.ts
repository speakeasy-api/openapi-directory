import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscriptionsPostRequest extends SpeakeasyBase {
    request: shared.AppPkgSubscription;
}
export declare class SubscriptionsPostResponse extends SpeakeasyBase {
    appPkgSubscriptionInfo?: shared.AppPkgSubscriptionInfo;
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
