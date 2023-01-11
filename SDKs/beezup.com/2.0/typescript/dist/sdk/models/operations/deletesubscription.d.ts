import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSubscriptionRequest extends SpeakeasyBase {
    pathParams: DeleteSubscriptionPathParams;
}
export declare class DeleteSubscriptionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
