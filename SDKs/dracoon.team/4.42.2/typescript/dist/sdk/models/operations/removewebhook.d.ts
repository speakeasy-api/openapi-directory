import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveWebhookRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Webhook ID
     */
    webhookId: number;
}
export declare class RemoveWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
