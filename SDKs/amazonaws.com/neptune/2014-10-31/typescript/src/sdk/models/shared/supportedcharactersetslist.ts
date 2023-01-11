import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportedCharacterSetsList
/** 
 * Specifies a character set.
**/
export class SupportedCharacterSetsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterSetDescription?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;
}
