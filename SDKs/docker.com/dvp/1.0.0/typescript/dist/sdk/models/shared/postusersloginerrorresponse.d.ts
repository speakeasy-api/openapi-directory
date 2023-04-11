import { SpeakeasyBase } from "../../../internal/utils";
/**
 * failed user login response or second factor required
 */
export declare class PostUsersLoginErrorResponse extends SpeakeasyBase {
    /**
     * Description of the error.
     */
    detail: string;
    /**
     * Short time lived token to be used on `/v2/users/2fa-login` to complete the authentication. This field is present only if 2FA is enabled.
     */
    login2faToken?: string;
}
