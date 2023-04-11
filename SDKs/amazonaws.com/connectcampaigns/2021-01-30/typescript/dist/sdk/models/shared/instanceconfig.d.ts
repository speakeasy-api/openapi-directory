import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
/**
 * Instance config object
 */
export declare class InstanceConfig extends SpeakeasyBase {
    /**
     * Amazon Connect Instance Id
     */
    connectInstanceId: string;
    /**
     * Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported
     */
    encryptionConfig: EncryptionConfig;
    /**
     * Service linked role arn
     */
    serviceLinkedRoleArn: string;
}
