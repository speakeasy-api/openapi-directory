import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for generating presigned URLs
 */
export declare class GeneratePresignedUrlsRequest extends SpeakeasyBase {
    /**
     * First part number of a range of requested presigned URLs (for S3 it is: `1`)
     */
    firstPartNumber: number;
    /**
     * Last part number of a range of requested presigned URLs
     */
    lastPartNumber: number;
    /**
     * `Content-Length` header size for each presigned URL (in bytes)
     *
     * @remarks
     *
     * *MUST* be >= 5 MB except the last part.
     */
    size: number;
}
