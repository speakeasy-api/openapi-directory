import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksRequestBody extends SpeakeasyBase {
    /**
     * The webhook event
     */
    event?: string;
    /**
     * The webhook authentication process to use (its ID or its name)
     */
    idAuth?: string;
    /**
     * The service ID to associate with the webhook
     */
    idService?: number;
    /**
     * The user ID to associate with the webhook
     */
    idUser?: number;
    /**
     * The webhook parameters as an object with three keys: type, key and value
     */
    params?: string;
    /**
     * The webhook callback url
     */
    url?: string;
}
export declare class PostWebhooksRequest extends SpeakeasyBase {
    requestBody?: PostWebhooksRequestBody;
    expand?: string;
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful POST on Webhook resource
     */
    webhook?: shared.Webhook;
}
