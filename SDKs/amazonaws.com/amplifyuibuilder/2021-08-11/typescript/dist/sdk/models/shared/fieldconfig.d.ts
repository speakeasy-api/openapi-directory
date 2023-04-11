import { SpeakeasyBase } from "../../../internal/utils";
import { FieldInputConfig } from "./fieldinputconfig";
import { FieldPosition } from "./fieldposition";
import { FieldValidationConfiguration } from "./fieldvalidationconfiguration";
/**
 * Describes the configuration information for a field in a table.
 */
export declare class FieldConfig extends SpeakeasyBase {
    excluded?: boolean;
    inputType?: FieldInputConfig;
    label?: string;
    position?: FieldPosition;
    validations?: FieldValidationConfiguration[];
}
