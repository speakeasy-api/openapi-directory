import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhookRequest extends SpeakeasyBase {
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
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Sucessful operation
     */
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
