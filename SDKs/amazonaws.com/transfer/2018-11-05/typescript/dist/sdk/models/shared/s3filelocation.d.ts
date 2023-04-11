import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage.
 */
export declare class S3FileLocation extends SpeakeasyBase {
    bucket?: string;
    etag?: string;
    key?: string;
    versionId?: string;
}
