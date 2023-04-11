import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationErrorMessage } from "./validationerrormessage";
/**
 * Bad Request
 */
export declare class BadRequestResponse extends SpeakeasyBase {
    /**
     * A list of validation errors that occurred when processing the request.
     */
    validationErrors?: ValidationErrorMessage[];
}
