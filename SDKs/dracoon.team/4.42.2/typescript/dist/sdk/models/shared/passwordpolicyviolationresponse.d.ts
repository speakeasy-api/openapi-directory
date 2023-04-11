import { SpeakeasyBase } from "../../../internal/utils";
import { ViolatedPasswordPolicy } from "./violatedpasswordpolicy";
/**
 * List of violated password policies
 */
export declare class PasswordPolicyViolationResponse extends SpeakeasyBase {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * Debug information
     */
    debugInfo?: string;
    /**
     * Internal error code
     */
    errorCode?: number;
    /**
     * HTTP status code description
     */
    message: string;
    /**
     * List of violated password policies
     */
    violatedPasswordPolicies?: ViolatedPasswordPolicy[];
}
