import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-hook-config-params).
 */
export declare class OrgsUpdateWebhookRequestBodyConfig extends SpeakeasyBase {
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     */
    contentType?: string;
    insecureSsl?: any;
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads/#delivery-headers).
     */
    secret?: string;
    /**
     * The URL to which the payloads will be delivered.
     */
    url: string;
}
export declare class OrgsUpdateWebhookRequestBody extends SpeakeasyBase {
    /**
     * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
     */
    active?: boolean;
    /**
     * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-hook-config-params).
     */
    config?: OrgsUpdateWebhookRequestBodyConfig;
    /**
     * Determines what [events](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads) the hook is triggered for.
     */
    events?: string[];
    name?: string;
}
export declare class OrgsUpdateWebhookRequest extends SpeakeasyBase {
    requestBody?: OrgsUpdateWebhookRequestBody;
    hookId: number;
    org: string;
}
export declare class OrgsUpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    orgHook?: shared.OrgHook;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
