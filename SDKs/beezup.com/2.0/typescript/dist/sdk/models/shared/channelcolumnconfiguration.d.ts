import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUpCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";
/**
 * The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
**/
export declare class ChannelColumnConfiguration extends SpeakeasyBase {
    beezUPColumnName?: string;
    columnDataType: BeezUpCommonColumnDataTypeEnum;
    columnImportance: BeezUpCommonColumnImportanceEnum;
}
