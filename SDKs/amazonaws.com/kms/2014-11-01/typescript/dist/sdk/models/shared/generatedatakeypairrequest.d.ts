import { SpeakeasyBase } from "../../../internal/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";
export declare class GenerateDataKeyPairRequest extends SpeakeasyBase {
    encryptionContext?: Record<string, string>;
    grantTokens?: string[];
    keyId: string;
    keyPairSpec: DataKeyPairSpecEnum;
}
