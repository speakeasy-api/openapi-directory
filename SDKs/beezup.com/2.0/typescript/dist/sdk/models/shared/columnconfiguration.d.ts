import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUPCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";
/**
 * Indicates the configuration applied on the column (catalog or custom) during the importation process.
 */
export declare class ColumnConfiguration extends SpeakeasyBase {
    /**
     * The BeezUP column name
     */
    beezUPColumnName?: string;
    /**
     * If the size of the value is greater than the limit we can truncate the value instead of failing...
     */
    canBeTruncated?: boolean;
    /**
     * If non null, culture used to parse the value to the storage type of this column\r\n will be used for parsing and for consolidation proces
     */
    columnCultureName?: string;
    /**
     * Data type of the column, will be used for parsing and for consolidation proces
     */
    columnDataType: BeezUPCommonColumnDataTypeEnum;
    /**
     * If non null, format used to parse the value to the storage type of this column\r\n will be used for parsing and for consolidation proces
     */
    columnFormat?: string;
    /**
     * Importance of the column
     */
    columnImportance: BeezUPCommonColumnImportanceEnum;
    /**
     * Indicate the display group name where the column must be putted
     */
    displayGroupName?: string;
}
