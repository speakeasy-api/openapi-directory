import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The public key used for setting user Codespaces' Secrets.
 */
export declare class CodespacesUserPublicKey extends SpeakeasyBase {
    /**
     * The Base64 encoded public key.
     */
    key: string;
    /**
     * The identifier for the key.
     */
    keyId: string;
}
