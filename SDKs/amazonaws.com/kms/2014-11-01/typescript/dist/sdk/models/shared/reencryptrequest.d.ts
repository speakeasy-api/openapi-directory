import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
export declare class ReEncryptRequest extends SpeakeasyBase {
    ciphertextBlob: string;
    destinationEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    destinationEncryptionContext?: Record<string, string>;
    destinationKeyId: string;
    grantTokens?: string[];
    sourceEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    sourceEncryptionContext?: Record<string, string>;
    sourceKeyId?: string;
}
