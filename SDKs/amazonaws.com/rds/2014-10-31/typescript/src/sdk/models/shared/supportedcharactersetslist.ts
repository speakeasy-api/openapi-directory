import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportedCharacterSetsList
/** 
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
**/
export class SupportedCharacterSetsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterSetDescription?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;
}
