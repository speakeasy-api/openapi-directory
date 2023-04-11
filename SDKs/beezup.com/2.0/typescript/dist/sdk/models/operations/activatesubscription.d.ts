import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivateSubscriptionRequest extends SpeakeasyBase {
    activateSubscriptionRequest?: shared.ActivateSubscriptionRequest;
    id: string;
}
export declare class ActivateSubscriptionResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Activation subscription request is invalid
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
