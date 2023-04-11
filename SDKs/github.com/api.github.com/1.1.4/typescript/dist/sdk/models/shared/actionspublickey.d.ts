import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The public key used for setting Actions Secrets.
 */
export declare class ActionsPublicKey extends SpeakeasyBase {
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
