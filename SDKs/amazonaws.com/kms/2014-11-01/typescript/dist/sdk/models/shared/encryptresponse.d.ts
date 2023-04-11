import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
/**
 * Success
 */
export declare class EncryptResponse extends SpeakeasyBase {
    ciphertextBlob?: string;
    encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    keyId?: string;
}
