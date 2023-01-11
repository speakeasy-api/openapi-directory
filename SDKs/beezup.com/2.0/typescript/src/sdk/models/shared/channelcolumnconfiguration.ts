import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUpCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";



// ChannelColumnConfiguration
/** 
 * The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
**/
export class ChannelColumnConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPColumnName" })
  beezUPColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=columnDataType" })
  columnDataType: BeezUpCommonColumnDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=columnImportance" })
  columnImportance: BeezUpCommonColumnImportanceEnum;
}
