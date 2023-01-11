import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputFileReadCsvConfiguration
/** 
 * The CSV file description
**/
export class InputFileReadCsvConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvSeparator" })
  csvSeparator: string;

  @SpeakeasyMetadata({ data: "json, name=csvTextQualifier" })
  csvTextQualifier?: string;

  @SpeakeasyMetadata({ data: "json, name=hasHeaderRecord" })
  hasHeaderRecord: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignoreHeaderRecord" })
  ignoreHeaderRecord: boolean;
}
