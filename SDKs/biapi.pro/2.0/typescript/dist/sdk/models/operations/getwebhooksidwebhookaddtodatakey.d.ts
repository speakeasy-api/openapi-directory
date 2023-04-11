import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksIdWebhookAddToDataKeyRequest extends SpeakeasyBase {
    expand?: string;
    idWebhook: number;
    key: string;
}
export declare class GetWebhooksIdWebhookAddToDataKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful GET on Webhook resource
     */
    webhook?: shared.Webhook;
}
