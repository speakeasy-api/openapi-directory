import { SpeakeasyBase } from "../../../internal/utils";
import { S3EncryptionOptionEnum } from "./s3encryptionoptionenum";
/**
 * <p/>
 */
export declare class ReportS3Configuration extends SpeakeasyBase {
    bucketName: string;
    encryptionOption?: S3EncryptionOptionEnum;
    kmsKeyId?: string;
    objectKeyPrefix?: string;
}
