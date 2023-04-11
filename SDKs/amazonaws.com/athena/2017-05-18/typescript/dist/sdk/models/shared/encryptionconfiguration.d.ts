import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionOptionEnum } from "./encryptionoptionenum";
/**
 * If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information.
 */
export declare class EncryptionConfiguration extends SpeakeasyBase {
    encryptionOption: EncryptionOptionEnum;
    kmsKey?: string;
}
