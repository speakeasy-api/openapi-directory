import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
/**
 * Validation errors occured.
 */
export declare class ValidationErrorResponse extends SpeakeasyBase {
    errors?: ValidationError[];
    message?: string;
}
