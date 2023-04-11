import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File information
 */
export declare class PublicUploadedFileData extends SpeakeasyBase {
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * Hash value of transferred file
     */
    hash?: string;
    /**
     * Name
     */
    name: string;
    /**
     * File size in byte
     */
    size: number;
}
