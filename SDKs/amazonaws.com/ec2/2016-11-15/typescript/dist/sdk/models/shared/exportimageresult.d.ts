import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the destination Amazon S3 bucket.
**/
export declare class ExportImageResultS3ExportLocation extends SpeakeasyBase {
    s3Bucket?: Record<string, any>;
    s3Prefix?: Record<string, any>;
}
export declare class ExportImageResult extends SpeakeasyBase {
    description?: Record<string, any>;
    diskImageFormat?: Record<string, any>;
    exportImageTaskId?: Record<string, any>;
    imageId?: Record<string, any>;
    progress?: Record<string, any>;
    roleName?: Record<string, any>;
    s3ExportLocation?: ExportImageResultS3ExportLocation;
    status?: Record<string, any>;
    statusMessage?: Record<string, any>;
    tags?: Record<string, any>;
}
