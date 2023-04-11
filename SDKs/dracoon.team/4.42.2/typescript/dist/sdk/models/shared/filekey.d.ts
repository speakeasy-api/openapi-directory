import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File key information
 */
export declare class FileKey extends SpeakeasyBase {
    /**
     * Initial vector
     */
    iv: string;
    /**
     * Encryption key
     */
    key: string;
    /**
     * Authentication tag
     *
     * @remarks
     *
     * (needed with authenticated encryption)
     */
    tag: string;
    /**
     * Version
     */
    version: string;
}
