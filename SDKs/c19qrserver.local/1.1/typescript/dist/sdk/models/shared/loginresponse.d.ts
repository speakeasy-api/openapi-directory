import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payload of successful login
 */
export declare class LoginResponse extends SpeakeasyBase {
    /**
     * True if this user is an admin. False otherwise
     */
    admin?: boolean;
    /**
     * The login id for this user
     */
    loginId?: number;
    /**
     * This user's name
     */
    name?: string;
    /**
     * True if this user has permissions to write to the database. False otherwise
     */
    readOnly?: boolean;
    /**
     * The API key that will be used to authenticate the user.
     */
    token?: string;
}
