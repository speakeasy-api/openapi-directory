import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
/**
 * Success
 */
export declare class DecryptResponse extends SpeakeasyBase {
    encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    keyId?: string;
    plaintext?: string;
}
