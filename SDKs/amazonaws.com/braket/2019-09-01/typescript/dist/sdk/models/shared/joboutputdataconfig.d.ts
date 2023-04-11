import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.
 */
export declare class JobOutputDataConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    s3Path: string;
}
