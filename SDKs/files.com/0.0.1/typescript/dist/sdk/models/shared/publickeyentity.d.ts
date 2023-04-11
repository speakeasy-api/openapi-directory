import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Public Keys
 */
export declare class PublicKeyEntity extends SpeakeasyBase {
    /**
     * Public key created at date/time
     */
    createdAt?: Date;
    /**
     * Public key fingerprint
     */
    fingerprint?: string;
    /**
     * Public key ID
     */
    id?: number;
    /**
     * Public key title
     */
    title?: string;
}
