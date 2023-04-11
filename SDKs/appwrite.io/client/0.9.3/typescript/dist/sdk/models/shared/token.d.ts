import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Token
 */
export declare class Token extends SpeakeasyBase {
    /**
     * Token ID.
     */
    dollarId: string;
    /**
     * Token expiration date in Unix timestamp.
     */
    expire: number;
    /**
     * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
     */
    secret: string;
    /**
     * User ID.
     */
    userId: string;
}
