import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksIdWebhookAddToDataRequest extends SpeakeasyBase {
    expand?: string;
    idWebhook: number;
}
export declare class DeleteWebhooksIdWebhookAddToDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful DELETE on Webhook resource
     */
    webhook?: shared.Webhook;
}
