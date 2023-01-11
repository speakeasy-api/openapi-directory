import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
export declare class ValidationErrorResponse extends SpeakeasyBase {
    errors?: ValidationError[];
    message?: string;
}
