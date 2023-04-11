import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntityList } from "./encryptionentitylist";
/**
 * Complex data type for field-level encryption profiles that includes all of the encryption entities.
 */
export declare class EncryptionEntities extends SpeakeasyBase {
    items?: EncryptionEntityList[];
    quantity: number;
}
