import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSubscriptionRequest extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSubscriptionResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The subscription is not found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
