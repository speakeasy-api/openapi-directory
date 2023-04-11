import { SpeakeasyBase } from "../../../internal/utils";
import { S3EncryptionOptionEnum } from "./s3encryptionoptionenum";
/**
 * The configuration that specifies an S3 location.
 */
export declare class S3Configuration extends SpeakeasyBase {
    bucketName?: string;
    encryptionOption?: S3EncryptionOptionEnum;
    kmsKeyId?: string;
    objectKeyPrefix?: string;
}
