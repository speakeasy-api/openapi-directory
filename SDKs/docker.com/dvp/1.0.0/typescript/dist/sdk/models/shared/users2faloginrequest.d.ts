import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Second factor user login details
 */
export declare class Users2FALoginRequest extends SpeakeasyBase {
    /**
     * The Time-based One-Time Password of the Docker Hub account to authenticate with.
     */
    code: string;
    /**
     * The intermediate 2FA token returned from `/v2/users/login` API.
     */
    login2faToken: string;
}
