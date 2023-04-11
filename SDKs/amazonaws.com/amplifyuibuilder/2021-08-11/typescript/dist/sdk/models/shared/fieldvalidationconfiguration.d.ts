import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the validation configuration for a field.
 */
export declare class FieldValidationConfiguration extends SpeakeasyBase {
    numValues?: number[];
    strValues?: string[];
    type: string;
    validationMessage?: string;
}
