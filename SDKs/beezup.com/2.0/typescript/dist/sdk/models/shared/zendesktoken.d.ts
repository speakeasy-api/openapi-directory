import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JWT token to access Zendesk restricted help center
 */
export declare class ZendeskToken extends SpeakeasyBase {
    /**
     * A JWT token build from your name and email to use on Zendesk
     */
    token?: string;
}
