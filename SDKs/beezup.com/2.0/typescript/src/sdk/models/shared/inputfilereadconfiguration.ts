import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputFileReadCsvConfiguration } from "./inputfilereadcsvconfiguration";
import { FileFormatStrategyEnum } from "./fileformatstrategyenum";
import { InputFileReadXmlConfiguration } from "./inputfilereadxmlconfiguration";



// InputFileReadConfiguration
/** 
 * Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
 * 
**/
export class InputFileReadConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvFileReadProperties" })
  csvFileReadProperties?: InputFileReadCsvConfiguration;

  @SpeakeasyMetadata({ data: "json, name=cultureName" })
  cultureName?: string;

  @SpeakeasyMetadata({ data: "json, name=encodingTypeName" })
  encodingTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: FileFormatStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=xmlFileReadProperties" })
  xmlFileReadProperties?: InputFileReadXmlConfiguration;
}
