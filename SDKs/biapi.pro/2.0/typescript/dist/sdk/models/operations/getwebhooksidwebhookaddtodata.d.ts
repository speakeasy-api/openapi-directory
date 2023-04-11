import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksIdWebhookAddToDataRequest extends SpeakeasyBase {
    expand?: string;
    idWebhook: number;
}
/**
 * webhooks
 */
export declare class GetWebhooksIdWebhookAddToData200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    webhooks: shared.Webhook[];
}
export declare class GetWebhooksIdWebhookAddToDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * webhooks
     */
    getWebhooksIdWebhookAddToData200ApplicationJSONObject?: GetWebhooksIdWebhookAddToData200ApplicationJSON;
}
