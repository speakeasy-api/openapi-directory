import { SpeakeasyBase } from "../../../internal/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";
/**
 * Success
 */
export declare class GenerateDataKeyPairResponse extends SpeakeasyBase {
    keyId?: string;
    keyPairSpec?: DataKeyPairSpecEnum;
    privateKeyCiphertextBlob?: string;
    privateKeyPlaintext?: string;
    publicKey?: string;
}
