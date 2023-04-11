import { SpeakeasyBase } from "../../../internal/utils";
import { S3EncryptionConfig } from "./s3encryptionconfig";
/**
 * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
 */
export declare class ArtifactConfigOutput extends SpeakeasyBase {
    s3Encryption?: S3EncryptionConfig;
}
