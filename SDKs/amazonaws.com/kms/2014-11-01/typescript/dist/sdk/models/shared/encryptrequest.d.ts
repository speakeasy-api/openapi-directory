import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
export declare class EncryptRequest extends SpeakeasyBase {
    encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    encryptionContext?: Record<string, string>;
    grantTokens?: string[];
    keyId: string;
    plaintext: string;
}
