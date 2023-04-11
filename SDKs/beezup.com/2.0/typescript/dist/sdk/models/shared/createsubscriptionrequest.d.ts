import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    /**
     * The name of your application
     */
    merchantApplicationName: string;
    /**
     * The version of your application
     */
    merchantApplicationVersion: string;
    /**
     * The email
     */
    merchantEmailAlert?: string;
    /**
     * The subscription name you want to use
     */
    name: string;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    targetUrl: string;
}
