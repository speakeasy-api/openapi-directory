import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonColumnDataTypeEnum } from "./beezupcommoncolumndatatypeenum";
import { BeezUpCommonColumnImportanceEnum } from "./beezupcommoncolumnimportanceenum";
/**
 * Describe a BeezUP column
**/
export declare class BeezUpColumnConfiguration extends SpeakeasyBase {
    beezUPColumnName: string;
    canBeTruncated?: boolean;
    columnDataType?: BeezUpCommonColumnDataTypeEnum;
    columnImportance: BeezUpCommonColumnImportanceEnum;
    description?: string;
    displayGroupName: string;
    unique?: boolean;
}
