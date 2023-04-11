import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Begin file upload
 */
export declare class FileUploadPartEntity extends SpeakeasyBase {
    /**
     * Type of upload
     */
    action?: string;
    /**
     * If `true`, this file exists and you may wish to ask the user for overwrite confirmation
     */
    askAboutOverwrites?: boolean;
    /**
     * Number of parts in the upload
     */
    availableParts?: number;
    /**
     * Date/time of when this Upload part expires and the URL cannot be used any more
     */
    expires?: string;
    /**
     * Additional upload headers to provide as part of the upload
     */
    headers?: Record<string, any>;
    /**
     * HTTP Method to use for uploading the part, usually `PUT`
     */
    httpMethod?: string;
    /**
     * Size in bytes for this part
     */
    nextPartsize?: number;
    /**
     * If `true`, multiple parts may be uploaded in parallel.  If `false`, be sure to only upload one part at a time, in order.
     */
    parallelParts?: boolean;
    /**
     * Additional HTTP parameters to send with the upload
     */
    parameters?: Record<string, any>;
    /**
     * Number of this upload part
     */
    partNumber?: number;
    /**
     * Size in bytes for the next upload part
     */
    partsize?: number;
    /**
     * New file path
     */
    path?: string;
    /**
     * Reference name for this upload part
     */
    ref?: string;
    /**
     * Content-Type and File to send
     */
    send?: Record<string, any>;
    /**
     * URI to upload this part to
     */
    uploadUri?: string;
}
