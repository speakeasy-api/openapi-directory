import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhookTestsRequestBody extends SpeakeasyBase {
    /**
     * action for test body
     */
    action?: string;
    /**
     * Additional body parameters.
     */
    body?: Record<string, any>;
    /**
     * HTTP encoding method.  Can be JSON, XML, or RAW (form data).
     */
    encoding?: string;
    /**
     * Send the file data as the request body?
     */
    fileAsBody?: boolean;
    /**
     * Send the file data as a named parameter in the request POST body
     */
    fileFormField?: string;
    /**
     * Additional request headers.
     */
    headers?: Record<string, any>;
    /**
     * HTTP method(GET or POST).
     */
    method?: string;
    /**
     * raw body text
     */
    rawBody?: string;
    /**
     * URL for testing the webhook.
     */
    url: string;
}
export declare class PostWebhookTestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The WebhookTests object.
     */
    webhookTestEntity?: shared.WebhookTestEntity;
}
