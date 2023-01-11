import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfileSummaryList } from "./fieldlevelencryptionprofilesummarylist";



// FieldLevelEncryptionProfileList
/** 
 * List of field-level encryption profiles.
**/
export class FieldLevelEncryptionProfileList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FieldLevelEncryptionProfileSummaryList })
  items?: FieldLevelEncryptionProfileSummaryList[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
