import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. Article private file
 */
export declare class PrivateFile extends SpeakeasyBase {
    /**
     * File computed md5
     */
    computedMd5: string;
    /**
     * Url for file download
     */
    downloadUrl: string;
    /**
     * File id
     */
    id: number;
    /**
     * True if the file is attached to a public item version
     */
    isAttachedToPublicVersion: boolean;
    /**
     * True if file is hosted somewhere else
     */
    isLinkOnly: boolean;
    /**
     * File name
     */
    name: string;
    /**
     * File preview state
     */
    previewState: string;
    /**
     * File size
     */
    size: number;
    /**
     * Status for file upload
     */
    status: string;
    /**
     * File supplied md5
     */
    suppliedMd5: string;
    /**
     * Token for file upload
     */
    uploadToken: string;
    /**
     * Upload url for file
     */
    uploadUrl: string;
    /**
     * File viewer type
     */
    viewerType: string;
}
