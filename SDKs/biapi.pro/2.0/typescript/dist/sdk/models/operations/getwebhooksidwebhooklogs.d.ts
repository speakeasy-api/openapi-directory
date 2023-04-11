import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksIdWebhookLogsRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * limit number of results to this user
     */
    idUser?: number;
    idWebhook: number;
    /**
     * limit number of results
     */
    limit?: number;
    /**
     * maximum (inclusive) date
     */
    maxDate?: Date;
    /**
     * minimal (inclusive) date
     */
    minDate?: Date;
    /**
     * offset of first result
     */
    offset?: number;
}
/**
 * webhooklogs
 */
export declare class GetWebhooksIdWebhookLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    webhooklogs: shared.WebhookLog[];
}
export declare class GetWebhooksIdWebhookLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * webhooklogs
     */
    getWebhooksIdWebhookLogs200ApplicationJSONObject?: GetWebhooksIdWebhookLogs200ApplicationJSON;
}
