import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadSession extends SpeakeasyBase {
    expiresAt?: Date;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Indicates if parts of the file can uploaded in parallel.
     */
    parallelUploadSupported?: boolean;
    /**
     * Size in bytes of each part of the file that you will upload. Uploaded parts need to be this size for the upload to be successful.
     */
    partSize?: number;
    /**
     * Indicates if the upload session was completed successfully.
     */
    success?: boolean;
    /**
     * The range of bytes that was successfully uploaded.
     */
    uploadedByteRange?: string;
}
