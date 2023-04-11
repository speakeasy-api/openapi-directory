import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUPCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";
/**
 * Describe a BeezUP column
 */
export declare class BeezUPColumnConfiguration extends SpeakeasyBase {
    /**
     * The BeezUP column name
     */
    beezUPColumnName: string;
    /**
     * If the size of the value is greater than the limit we can truncate the value instead of failing...
     */
    canBeTruncated?: boolean;
    /**
     * Data type of the column, will be used for parsing and for consolidation proces
     */
    columnDataType?: BeezUPCommonColumnDataTypeEnum;
    /**
     * Importance of the column
     */
    columnImportance: BeezUPCommonColumnImportanceEnum;
    /**
     * Describe the BeezUP column
     */
    description?: string;
    /**
     * Indicate the display group name where the column must be putted
     */
    displayGroupName: string;
    /**
     * /!\ ONLY AVAILABLE ON CATALOG COLUMN NOT ON CUSTOM COLUMNS!!
     *
     * @remarks
     * If true, an error happen at the second occurence of the same value for this column
     * This information will be used during the importation process and later for mapping proposal
     */
    unique?: boolean;
}
