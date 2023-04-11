import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionPasswordPolicies } from "./encryptionpasswordpolicies";
import { LoginPasswordPolicies } from "./loginpasswordpolicies";
import { SharesPasswordPolicies } from "./sharespasswordpolicies";
/**
 * Set of password policies
 */
export declare class PasswordPoliciesConfig extends SpeakeasyBase {
    /**
     * Encryption password policies
     */
    encryptionPasswordPolicies?: EncryptionPasswordPolicies;
    /**
     * Login password policies
     */
    loginPasswordPolicies?: LoginPasswordPolicies;
    /**
     * Shares password policies
     */
    sharesPasswordPolicies?: SharesPasswordPolicies;
}
