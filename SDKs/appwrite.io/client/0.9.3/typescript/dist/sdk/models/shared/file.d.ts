import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File
 */
export declare class File extends SpeakeasyBase {
    /**
     * File ID.
     */
    dollarId: string;
    /**
     * File permissions.
     */
    dollarPermissions: Record<string, any>;
    /**
     * File creation date in Unix timestamp.
     */
    dateCreated: number;
    /**
     * File mime type.
     */
    mimeType: string;
    /**
     * File name.
     */
    name: string;
    /**
     * File MD5 signature.
     */
    signature: string;
    /**
     * File original size in bytes.
     */
    sizeOriginal: number;
}
