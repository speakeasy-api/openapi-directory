import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Violated password policy information
 */
export declare class ViolatedPasswordPolicy extends SpeakeasyBase {
    /**
     * Message from password validator
     */
    message?: string;
    /**
     * Name of the violated password policy
     */
    name?: string;
}
