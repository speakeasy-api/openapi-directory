import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * Provides information about the default server-side encryption settings for an S3 bucket or the encryption settings for an S3 object.
 */
export declare class ServerSideEncryption extends SpeakeasyBase {
    encryptionType?: EncryptionTypeEnum;
    kmsMasterKeyId?: string;
}
