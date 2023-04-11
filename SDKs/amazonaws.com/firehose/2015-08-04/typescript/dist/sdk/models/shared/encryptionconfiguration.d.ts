import { SpeakeasyBase } from "../../../internal/utils";
import { KMSEncryptionConfig } from "./kmsencryptionconfig";
import { NoEncryptionConfigEnum } from "./noencryptionconfigenum";
/**
 * Describes the encryption for a destination in Amazon S3.
 */
export declare class EncryptionConfiguration extends SpeakeasyBase {
    kmsEncryptionConfig?: KMSEncryptionConfig;
    noEncryptionConfig?: NoEncryptionConfigEnum;
}
