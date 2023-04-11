import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookConfigWrite extends SpeakeasyBase {
    /**
     * an auth token, to be passed as the value for an HTTP Authorization header.
     */
    authToken?: string;
    /**
     * human readable name for this webhook e.g. for UI display.
     */
    name?: string;
    /**
     * if supplied, the webhook config will be validated by checking that this URL returns a 2xx response.
     */
    validationUrl?: string;
}
