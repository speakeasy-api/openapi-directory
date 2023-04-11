import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * Contains session configuration information.
 */
export declare class SessionConfiguration extends SpeakeasyBase {
    /**
     * If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information.
     */
    encryptionConfiguration?: EncryptionConfiguration;
    executionRole?: string;
    idleTimeoutSeconds?: number;
    workingDirectory?: string;
}
