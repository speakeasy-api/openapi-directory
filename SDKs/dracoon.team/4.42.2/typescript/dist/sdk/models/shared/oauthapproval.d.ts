import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OAuth client approval information
 */
export declare class OAuthApproval extends SpeakeasyBase {
    /**
     * ID of the OAuth client
     */
    clientId: string;
    /**
     * Name, which is shown at the client configuration and authorization.
     */
    clientName: string;
    /**
     * Expiration date of the approval
     */
    expiresAt?: Date;
}
