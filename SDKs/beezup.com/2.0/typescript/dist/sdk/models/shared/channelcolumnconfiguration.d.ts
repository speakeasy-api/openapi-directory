import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUPCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";
/**
 * The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
 */
export declare class ChannelColumnConfiguration extends SpeakeasyBase {
    /**
     * The BeezUP column name
     */
    beezUPColumnName?: string;
    /**
     * Data type of the column, will be used for parsing and for consolidation proces
     */
    columnDataType: BeezUPCommonColumnDataTypeEnum;
    /**
     * Importance of the column
     */
    columnImportance: BeezUPCommonColumnImportanceEnum;
}
