import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUpCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";



// BeezUpColumnConfiguration
/** 
 * Describe a BeezUP column
**/
export class BeezUpColumnConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPColumnName" })
  beezUPColumnName: string;

  @SpeakeasyMetadata({ data: "json, name=canBeTruncated" })
  canBeTruncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=columnDataType" })
  columnDataType?: BeezUpCommonColumnDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=columnImportance" })
  columnImportance: BeezUpCommonColumnImportanceEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayGroupName" })
  displayGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=unique" })
  unique?: boolean;
}
