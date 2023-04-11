import { SpeakeasyBase } from "../../../internal/utils";
import { UsernamePassword } from "./usernamepassword";
/**
 * The credentials that you can use to connect to cluster endpoints. Credentials consist of a username and a password.
 */
export declare class Credentials extends SpeakeasyBase {
    usernamePassword?: UsernamePassword;
}
