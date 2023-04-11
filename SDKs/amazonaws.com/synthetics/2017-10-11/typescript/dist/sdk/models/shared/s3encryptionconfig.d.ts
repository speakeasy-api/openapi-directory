import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionModeEnum } from "./encryptionmodeenum";
/**
 * <p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary uploads to Amazon S3. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> </p>
 */
export declare class S3EncryptionConfig extends SpeakeasyBase {
    encryptionMode?: EncryptionModeEnum;
    kmsKeyArn?: string;
}
