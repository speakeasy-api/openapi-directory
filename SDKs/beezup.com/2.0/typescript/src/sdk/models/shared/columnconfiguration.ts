import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUpCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";



// ColumnConfiguration
/** 
 * Indicates the configuration applied on the column (catalog or custom) during the importation process.
**/
export class ColumnConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPColumnName" })
  beezUPColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=canBeTruncated" })
  canBeTruncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=columnCultureName" })
  columnCultureName?: string;

  @SpeakeasyMetadata({ data: "json, name=columnDataType" })
  columnDataType: BeezUpCommonColumnDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=columnFormat" })
  columnFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=columnImportance" })
  columnImportance: BeezUpCommonColumnImportanceEnum;

  @SpeakeasyMetadata({ data: "json, name=displayGroupName" })
  displayGroupName?: string;
}
