import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeactivateSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeactivateSubscriptionRequest extends SpeakeasyBase {
    pathParams: DeactivateSubscriptionPathParams;
}
export declare class DeactivateSubscriptionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
