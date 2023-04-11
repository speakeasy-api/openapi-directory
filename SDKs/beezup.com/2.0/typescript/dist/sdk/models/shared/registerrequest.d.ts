import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegisterRequest extends SpeakeasyBase {
    /**
     * The user id of your commercial in BeezUP.
     */
    commercialOwnerUserId?: string;
    /**
     * Can be null. Default: en-GB. The culture name you want to use. FYI. \
     *
     * @remarks
     * The email activation will use this culture.
     *
     */
    cultureName?: string;
    /**
     * Your email. We refuse disposable email.
     */
    email: string;
    /**
     * The password you want to use for your new account. \
     *
     * @remarks
     * The password length must be greater or equals to 6 and lower or equals to 128. \
     * The password must contains at least one number and one special character
     *
     */
    password: string;
}
