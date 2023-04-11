import { SpeakeasyBase } from "../../../internal/utils";
import { FlatLocalesEnum } from "./flatlocalesenum";
/**
 * User creation
 */
export declare class UserCreation extends SpeakeasyBase {
    /**
     * Email of the new account
     */
    email?: string;
    /**
     * First name of the user
     */
    firstname?: string;
    /**
     * Last name of the user
     */
    lastname?: string;
    /**
     * The user language
     */
    locale?: FlatLocalesEnum;
    /**
     * Password of the new account
     */
    password: string;
    /**
     * Username of the new account
     */
    username: string;
}
