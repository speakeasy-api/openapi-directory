import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The public key used for setting Codespaces secrets.
 */
export declare class CodespacesPublicKey extends SpeakeasyBase {
    createdAt?: string;
    id?: number;
    /**
     * The Base64 encoded public key.
     */
    key: string;
    /**
     * The identifier for the key.
     */
    keyId: string;
    title?: string;
    url?: string;
}
