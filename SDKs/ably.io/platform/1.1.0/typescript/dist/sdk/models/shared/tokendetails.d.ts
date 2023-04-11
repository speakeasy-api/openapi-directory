import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TokenDetails extends SpeakeasyBase {
    /**
     * Regular expression representation of the capabilities of the token.
     */
    capability?: string;
    /**
     * Timestamp of token expiration.
     */
    expires?: number;
    /**
     * Timestamp of token creation.
     */
    issued?: number;
    /**
     * Name of the key used to create the token
     */
    keyName?: string;
    /**
     * The Ably Token.
     */
    token?: string;
}
