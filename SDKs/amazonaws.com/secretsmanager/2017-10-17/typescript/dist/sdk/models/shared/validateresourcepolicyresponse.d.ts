import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationErrorsEntry } from "./validationerrorsentry";
/**
 * Success
 */
export declare class ValidateResourcePolicyResponse extends SpeakeasyBase {
    policyValidationPassed?: boolean;
    validationErrors?: ValidationErrorsEntry[];
}
