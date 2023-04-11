import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksIdWebhookAddToDataRequest extends SpeakeasyBase {
    expand?: string;
    idWebhook: number;
}
export declare class PostWebhooksIdWebhookAddToDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful POST on Webhook resource
     */
    webhook?: shared.Webhook;
}
