import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUpCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";
/**
 * Indicates the configuration applied on the column (catalog or custom) during the importation process.
**/
export declare class ColumnConfiguration extends SpeakeasyBase {
    beezUPColumnName?: string;
    canBeTruncated?: boolean;
    columnCultureName?: string;
    columnDataType: BeezUpCommonColumnDataTypeEnum;
    columnFormat?: string;
    columnImportance: BeezUpCommonColumnImportanceEnum;
    displayGroupName?: string;
}
