import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProviderEnum } from "./metadataproviderenum";
/**
 * Path to Amazon S3 storage location for input data.
 */
export declare class S3DataInput extends SpeakeasyBase {
    kmsKeyId?: string;
    metadataProvider: MetadataProviderEnum;
    s3Uri: string;
}
