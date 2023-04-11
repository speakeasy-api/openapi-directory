import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    createSubscriptionRequest: shared.CreateSubscriptionRequest;
    id: string;
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid subscription request.
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
