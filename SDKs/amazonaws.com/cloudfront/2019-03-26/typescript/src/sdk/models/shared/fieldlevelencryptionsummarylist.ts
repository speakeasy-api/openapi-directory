import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfileConfig } from "./contenttypeprofileconfig";
import { QueryArgProfileConfig } from "./queryargprofileconfig";



// FieldLevelEncryptionSummaryList
/** 
 * A summary of a field-level encryption item.
**/
export class FieldLevelEncryptionSummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  contentTypeProfileConfig?: ContentTypeProfileConfig;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  queryArgProfileConfig?: QueryArgProfileConfig;
}
