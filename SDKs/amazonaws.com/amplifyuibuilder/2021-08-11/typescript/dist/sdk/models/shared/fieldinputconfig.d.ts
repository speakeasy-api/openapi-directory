import { SpeakeasyBase } from "../../../internal/utils";
import { ValueMappings } from "./valuemappings";
/**
 * Describes the configuration for the default input values to display for a field.
 */
export declare class FieldInputConfig extends SpeakeasyBase {
    defaultChecked?: boolean;
    defaultCountryCode?: string;
    defaultValue?: string;
    descriptiveText?: string;
    isArray?: boolean;
    maxValue?: number;
    minValue?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    step?: number;
    type: string;
    value?: string;
    valueMappings?: ValueMappings;
}
