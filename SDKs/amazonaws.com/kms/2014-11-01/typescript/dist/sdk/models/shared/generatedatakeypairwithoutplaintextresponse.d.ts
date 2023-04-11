import { SpeakeasyBase } from "../../../internal/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";
/**
 * Success
 */
export declare class GenerateDataKeyPairWithoutPlaintextResponse extends SpeakeasyBase {
    keyId?: string;
    keyPairSpec?: DataKeyPairSpecEnum;
    privateKeyCiphertextBlob?: string;
    publicKey?: string;
}
