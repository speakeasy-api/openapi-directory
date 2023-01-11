import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagCompact
/** 
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
**/
export class TagCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
