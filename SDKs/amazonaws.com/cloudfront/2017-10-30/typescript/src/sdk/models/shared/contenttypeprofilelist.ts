import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// ContentTypeProfileList
/** 
 * A field-level encryption content type profile. 
**/
export class ContentTypeProfileList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  format: FormatEnum;

  @SpeakeasyMetadata()
  profileId?: string;
}
