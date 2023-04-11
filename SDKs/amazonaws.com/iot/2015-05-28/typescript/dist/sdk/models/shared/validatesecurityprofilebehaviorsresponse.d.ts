import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
/**
 * Success
 */
export declare class ValidateSecurityProfileBehaviorsResponse extends SpeakeasyBase {
    valid?: boolean;
    validationErrors?: ValidationError[];
}
