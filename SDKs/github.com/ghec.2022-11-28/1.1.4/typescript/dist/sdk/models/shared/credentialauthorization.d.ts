import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Credential Authorization
 */
export declare class CredentialAuthorization extends SpeakeasyBase {
    /**
     * The expiry for the token. This will only be present when the credential is a token.
     */
    authorizedCredentialExpiresAt?: Date;
    authorizedCredentialId: number;
    /**
     * The note given to the token. This will only be present when the credential is a token.
     */
    authorizedCredentialNote?: string;
    /**
     * The title given to the ssh key. This will only be present when the credential is an ssh key.
     */
    authorizedCredentialTitle?: string;
    /**
     * Date when the credential was last accessed. May be null if it was never accessed
     */
    credentialAccessedAt: Date;
    /**
     * Date when the credential was authorized for use.
     */
    credentialAuthorizedAt: Date;
    /**
     * Unique identifier for the credential.
     */
    credentialId: number;
    /**
     * Human-readable description of the credential type.
     */
    credentialType: string;
    /**
     * Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key.
     */
    fingerprint?: string;
    /**
     * User login that owns the underlying credential.
     */
    login: string;
    /**
     * List of oauth scopes the token has been granted.
     */
    scopes?: string[];
    /**
     * Last eight characters of the credential. Only included in responses with credential_type of personal access token.
     */
    tokenLastEight?: string;
}
