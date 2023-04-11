import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhookByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * Webhook endpoint ID
     */
    id: number;
    /**
     *  Include metadata for related items; `ownerAccount` and/or `resource`
     */
    include?: string;
}
export declare class GetWebhookByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    webhookResponse?: shared.WebhookResponse;
}
