import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindWebhooksSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindWebhooksRequest extends SpeakeasyBase {
    /**
     * A callback URL
     */
    callback?: string;
    /**
     * Specifies whether webhook is enabled
     */
    enabled?: boolean;
    /**
     * A name of event, available values: 'started', 'stopped', 'finished'
     */
    event?: string;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * A name of a webhook
     */
    name?: string;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * A name of a resource, available values: 'CccCampaign', 'CallBroadcast', 'TextBroadcast',  'OutboundCall', 'OutboundText', 'InboundCall', 'InboundText', 'ContactList'
     */
    resource?: string;
}
export declare class FindWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    webhookPage?: shared.WebhookPage;
}
