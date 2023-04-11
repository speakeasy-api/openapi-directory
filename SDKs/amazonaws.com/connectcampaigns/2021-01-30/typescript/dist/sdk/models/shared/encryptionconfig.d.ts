import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported
 */
export declare class EncryptionConfig extends SpeakeasyBase {
    /**
     * Boolean to indicate if custom encryption has been enabled.
     */
    enabled: boolean;
    /**
     * Server-side encryption type.
     */
    encryptionType?: EncryptionTypeEnum;
    /**
     * KMS key id/arn for encryption config.
     */
    keyArn?: string;
}
