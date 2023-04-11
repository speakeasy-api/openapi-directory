import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSiteTestWebhookRequestBody extends SpeakeasyBase {
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
     * Additional request headers.
     */
    headers?: Record<string, any>;
    /**
     * HTTP method(GET or POST).
     */
    method?: string;
    /**
     * URL for testing the webhook.
     */
    url: string;
}
export declare class PostSiteTestWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The Behaviors object.
     */
    statusEntity?: shared.StatusEntity;
}
