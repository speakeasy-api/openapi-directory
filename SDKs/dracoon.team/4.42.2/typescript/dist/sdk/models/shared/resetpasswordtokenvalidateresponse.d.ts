import { SpeakeasyBase } from "../../../internal/utils";
import { LoginPasswordPolicies } from "./loginpasswordpolicies";
/**
 * Password reset information
 */
export declare class ResetPasswordTokenValidateResponse extends SpeakeasyBase {
    /**
     * &#128679; Deprecated since v4.14.0
     *
     * @remarks
     *
     * Allow weak password
     *
     * Please use `loginPasswordPolicies` instead
     */
    allowSystemGlobalWeakPassword?: boolean;
    /**
     * User first name
     */
    firstName: string;
    /**
     * &#128679; Deprecated since v4.12.0
     *
     * @remarks
     *
     * Gender
     */
    gender?: string;
    /**
     * User last name
     */
    lastName: string;
    /**
     * Login password policies
     */
    loginPasswordPolicies?: LoginPasswordPolicies;
    /**
     * &#128679; Deprecated since v4.18.0
     *
     * @remarks
     *
     * Job title
     */
    title?: string;
}
