import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { S3FileUploadPart } from "./s3fileuploadpart";
/**
 * Node conflict resolution strategy:
 *
 * @remarks
 *
 * * `autorename`
 *
 * * `overwrite`
 *
 * * `fail`
 */
export declare enum CompleteS3FileUploadRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for completing a S3 file upload
 */
export declare class CompleteS3FileUploadRequest extends SpeakeasyBase {
    /**
     * File key information
     */
    fileKey?: FileKey;
    /**
     * New file name to store with
     */
    fileName?: string;
    /**
     * Preserve Download Share Links and point them to the new node.
     */
    keepShareLinks?: boolean;
    /**
     * List of S3 file upload parts
     */
    parts: S3FileUploadPart[];
    /**
     * Node conflict resolution strategy:
     *
     * @remarks
     *
     * * `autorename`
     *
     * * `overwrite`
     *
     * * `fail`
     */
    resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategyEnum;
}
