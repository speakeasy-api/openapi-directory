import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntityList } from "./encryptionentitylist";



// EncryptionEntities
/** 
 * Complex data type for field-level encryption profiles that includes all of the encryption entities. 
**/
export class EncryptionEntities extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EncryptionEntityList })
  items?: EncryptionEntityList[];

  @SpeakeasyMetadata()
  quantity: number;
}
