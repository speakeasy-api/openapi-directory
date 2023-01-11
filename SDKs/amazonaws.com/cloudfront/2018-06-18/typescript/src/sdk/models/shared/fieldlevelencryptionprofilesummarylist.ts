import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntities } from "./encryptionentities";



// FieldLevelEncryptionProfileSummaryList
/** 
 * The field-level encryption profile summary.
**/
export class FieldLevelEncryptionProfileSummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  encryptionEntities: EncryptionEntities;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  name: string;
}
