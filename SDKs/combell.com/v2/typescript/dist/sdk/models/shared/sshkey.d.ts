import { SpeakeasyBase } from "../../../internal/utils";
export declare class SshKey extends SpeakeasyBase {
    /**
     * The fingerprint of the public key.<br />
     *
     * @remarks
     * This value is ignored for creation of new SSH keys.
     */
    fingerprint?: string;
    /**
     * Public key
     */
    publicKey?: string;
}
