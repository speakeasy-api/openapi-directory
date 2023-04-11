import { SpeakeasyBase } from "../../../internal/utils";
export declare class SshKeyDetail extends SpeakeasyBase {
    /**
     * The fingerprint of the public key.<br />
     *
     * @remarks
     * This value is ignored for creation of new SSH keys.
     */
    fingerprint?: string;
    /**
     * List of Linux hostings where SSH key is attached
     */
    linuxHostings?: string[];
    /**
     * Public key
     */
    publicKey?: string;
}
