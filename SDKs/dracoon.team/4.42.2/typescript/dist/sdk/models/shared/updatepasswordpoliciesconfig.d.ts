import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateEncryptionPasswordPolicies } from "./updateencryptionpasswordpolicies";
import { UpdateLoginPasswordPolicies } from "./updateloginpasswordpolicies";
import { UpdateSharesPasswordPolicies } from "./updatesharespasswordpolicies";
/**
 * Request model for updating a set of password policies
 */
export declare class UpdatePasswordPoliciesConfig extends SpeakeasyBase {
    /**
     * Request model for updating encryption password policies
     */
    encryptionPasswordPolicies?: UpdateEncryptionPasswordPolicies;
    /**
     * Request model for updating login password policies
     */
    loginPasswordPolicies?: UpdateLoginPasswordPolicies;
    /**
     * Request model for updating shares password policies
     */
    sharesPasswordPolicies?: UpdateSharesPasswordPolicies;
}
