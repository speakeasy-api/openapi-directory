import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileCreator extends SpeakeasyBase {
    /**
     * Url for an existing file that will not be uploaded to Figshare
     */
    link?: string;
    /**
     * MD5 sum pre-computed on client side.
     */
    md5?: string;
    /**
     * File name including the extension; can be omitted only for linked files.
     */
    name?: string;
    /**
     * File size in bytes; can be omitted only for linked files.
     */
    size?: number;
}
