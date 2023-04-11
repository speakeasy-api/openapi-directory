import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksIdRequest extends SpeakeasyBase {
    /**
     * The `id` of the webhook
     */
    id: string;
}
export declare class GetWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The url given for the webhook is not callable
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The properties of a specific webhook
     */
    webhook?: shared.Webhook;
}
