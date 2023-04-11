import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * webhooks
 */
export declare class GetWebhooks200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    webhooks: shared.Webhook[];
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * webhooks
     */
    getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJSON;
}
