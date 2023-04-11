import { SpeakeasyBase } from "../../../internal/utils";
import { DataKeySpecEnum } from "./datakeyspecenum";
export declare class GenerateDataKeyRequest extends SpeakeasyBase {
    encryptionContext?: Record<string, string>;
    grantTokens?: string[];
    keyId: string;
    keySpec?: DataKeySpecEnum;
    numberOfBytes?: number;
}
