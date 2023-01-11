import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionSummaryList } from "./fieldlevelencryptionsummarylist";



// FieldLevelEncryptionList
/** 
 * List of field-level encrpytion configurations.
**/
export class FieldLevelEncryptionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FieldLevelEncryptionSummaryList })
  items?: FieldLevelEncryptionSummaryList[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
