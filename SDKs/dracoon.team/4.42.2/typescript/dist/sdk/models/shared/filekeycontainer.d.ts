import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File key container
 */
export declare class FileKeyContainer extends SpeakeasyBase {
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
    tag?: string;
    /**
     * Version
     */
    version: string;
}
