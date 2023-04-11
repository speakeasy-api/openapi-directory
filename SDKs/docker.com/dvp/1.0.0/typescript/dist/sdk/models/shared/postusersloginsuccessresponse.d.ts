import { SpeakeasyBase } from "../../../internal/utils";
/**
 * successful user login response
 */
export declare class PostUsersLoginSuccessResponse extends SpeakeasyBase {
    /**
     * Created authentication token.
     *
     * @remarks
     *
     * This token can be used in the HTTP Authorization header as a JWT to authenticate with the Docker Hub APIs.
     *
     */
    token?: string;
}
