import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomFieldSettingCompact
/** 
 * Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
**/
export class CustomFieldSettingCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
