import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceLink
/** 
 * Links related to the retrieved resource
**/
export class ResourceLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}
