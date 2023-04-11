import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The url given for the webhook is not callable
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Contains the webhook you created
     */
    webhook?: shared.Webhook;
}
