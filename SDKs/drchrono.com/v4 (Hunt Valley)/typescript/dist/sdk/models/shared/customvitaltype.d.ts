import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of `text`, `number`, or `single_sel`
 */
export declare enum CustomVitalTypeDataTypeEnum {
    Text = "text",
    Number = "number",
    SingleSel = "single_sel"
}
/**
 * OK
 */
export declare class CustomVitalType extends SpeakeasyBase {
    /**
     * If `data_type` is `single_sel`, this is the array of values in the select's dropdown.
     */
    allowedValues?: string[];
    /**
     * Indicates that the object has been soft-deleted and should not be used
     */
    archived?: boolean;
    /**
     * One of `text`, `number`, or `single_sel`
     */
    dataType?: CustomVitalTypeDataTypeEnum;
    description?: string;
    /**
     * ID of the doctor who created the custom vital
     */
    doctor?: string;
    /**
     * If `is_fraction_field` is true, this is the character separating the numerator and denominator
     */
    fractionDelimiter?: string;
    id?: number;
    isFractionField?: boolean;
    name?: string;
    unit?: string;
}
