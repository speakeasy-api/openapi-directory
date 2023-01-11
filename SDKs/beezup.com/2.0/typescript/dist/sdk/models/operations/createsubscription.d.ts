import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    pathParams: CreateSubscriptionPathParams;
    request: shared.CreateSubscriptionRequest;
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
