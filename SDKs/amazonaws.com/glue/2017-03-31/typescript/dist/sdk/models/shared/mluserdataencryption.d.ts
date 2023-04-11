import { SpeakeasyBase } from "../../../internal/utils";
import { MLUserDataEncryptionModeStringEnum } from "./mluserdataencryptionmodestringenum";
/**
 * The encryption-at-rest settings of the transform that apply to accessing user data.
 */
export declare class MLUserDataEncryption extends SpeakeasyBase {
    kmsKeyId?: string;
    mlUserDataEncryptionMode: MLUserDataEncryptionModeStringEnum;
}
