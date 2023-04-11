import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksIdWebhookAddToDataKeyRequest extends SpeakeasyBase {
    expand?: string;
    idWebhook: number;
    key: string;
}
export declare class PostWebhooksIdWebhookAddToDataKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful POST on Webhook resource
     */
    webhook?: shared.Webhook;
}
