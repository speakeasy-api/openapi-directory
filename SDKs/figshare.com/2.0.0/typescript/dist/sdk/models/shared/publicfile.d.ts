import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. File representation
 */
export declare class PublicFile extends SpeakeasyBase {
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
     * True if file is hosted somewhere else
     */
    isLinkOnly: boolean;
    /**
     * File name
     */
    name: string;
    /**
     * File size
     */
    size: number;
    /**
     * File supplied md5
     */
    suppliedMd5: string;
}
