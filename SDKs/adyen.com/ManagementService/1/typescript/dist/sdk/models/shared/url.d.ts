import { SpeakeasyBase } from "../../../internal/utils";
export declare class Url extends SpeakeasyBase {
    /**
     * Indicates if the message sent to this URL should be encrypted.
     */
    encrypted?: boolean;
    /**
     * The password for authentication of the notifications.
     */
    password?: string;
    /**
     * The URL in the format: http(s)://domain.com.
     */
    url?: string;
    /**
     * The username for authentication of the notifications.
     */
    username?: string;
}
