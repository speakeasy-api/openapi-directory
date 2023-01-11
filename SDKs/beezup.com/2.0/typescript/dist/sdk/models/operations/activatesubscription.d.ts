import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivateSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ActivateSubscriptionRequest extends SpeakeasyBase {
    pathParams: ActivateSubscriptionPathParams;
    request?: shared.ActivateSubscriptionRequest;
}
export declare class ActivateSubscriptionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
