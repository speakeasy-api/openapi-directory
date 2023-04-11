import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The object that's returned when a user record is created.
 */
export declare class CreateUserResponse extends SpeakeasyBase {
    /**
     * The user's email address
     */
    email?: string;
    /**
     * The user's password reset code
     */
    guid?: string;
}
