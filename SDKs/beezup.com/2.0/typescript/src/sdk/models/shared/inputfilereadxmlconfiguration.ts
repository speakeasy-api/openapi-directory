import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputFileReadXmlConfiguration
/** 
 * The XML file description
**/
export class InputFileReadXmlConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flattenXmlChildElements" })
  flattenXmlChildElements: boolean;

  @SpeakeasyMetadata({ data: "json, name=useXmlAttributes" })
  useXmlAttributes: boolean;
}
