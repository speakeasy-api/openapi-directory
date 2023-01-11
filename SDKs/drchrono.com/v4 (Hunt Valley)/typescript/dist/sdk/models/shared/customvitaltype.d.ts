import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomVitalTypeDataTypeEnum {
    Text = "text",
    Number = "number",
    SingleSel = "single_sel"
}
export declare class CustomVitalType extends SpeakeasyBase {
    allowedValues?: string[];
    archived?: boolean;
    dataType?: CustomVitalTypeDataTypeEnum;
    description?: string;
    doctor?: string;
    fractionDelimiter?: string;
    id?: number;
    isFractionField?: boolean;
    name?: string;
    unit?: string;
}
