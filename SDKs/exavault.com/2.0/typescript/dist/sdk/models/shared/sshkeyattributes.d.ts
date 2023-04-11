import { SpeakeasyBase } from "../../../internal/utils";
export declare class SSHKeyAttributes extends SpeakeasyBase {
    /**
     * The date-time the SSH Key was created.
     */
    created?: Date;
    /**
     * The Key Fingerprint. The fingerprint can be used to identify and keep track of the key without exposing the actual credential.
     */
    fingerprint?: string;
    /**
     * The date-time the SSH Key was last used to access ExaVault.
     */
    lastLogin?: Date;
}
