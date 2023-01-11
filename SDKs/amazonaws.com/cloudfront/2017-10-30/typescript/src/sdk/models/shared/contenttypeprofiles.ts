import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfileList } from "./contenttypeprofilelist";



// ContentTypeProfiles
/** 
 * Field-level encryption content type-profile. 
**/
export class ContentTypeProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ContentTypeProfileList })
  items?: ContentTypeProfileList[];

  @SpeakeasyMetadata()
  quantity: number;
}
