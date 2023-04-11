import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User login details
 */
export declare class UsersLoginRequest extends SpeakeasyBase {
    /**
     * The password or personal access token (PAT) of the Docker Hub account to authenticate with.
     */
    password: string;
    /**
     * The username of the Docker Hub account to authenticate with.
     */
    username: string;
}
