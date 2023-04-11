import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksIdWebhookAddToDataKeyRequest extends SpeakeasyBase {
    expand?: string;
    idWebhook: number;
    key: string;
}
export declare class DeleteWebhooksIdWebhookAddToDataKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful DELETE on Webhook resource
     */
    webhook?: shared.Webhook;
}
