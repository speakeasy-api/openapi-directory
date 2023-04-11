import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsUpdateWebhookConfigForAppRequestBody extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    insecureSsl?: any;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-cloud@latest//webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url?: string;
}
export declare class AppsUpdateWebhookConfigForAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    webhookConfig?: shared.WebhookConfig;
}
