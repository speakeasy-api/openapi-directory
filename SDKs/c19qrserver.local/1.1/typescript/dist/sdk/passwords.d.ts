import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints related to changing and resetting passwords
 */
export declare class Passwords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Used for changing your password
     *
     * @remarks
     * Pass in your old password and your new password
     */
    postChangePassword(req: operations.PostChangePasswordSample, config?: AxiosRequestConfig): Promise<operations.PostChangePasswordResponse>;
    /**
     * Used for requesting a password reset code
     *
     * @remarks
     * The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.
     *
     */
    postRequestPasswordReset(req: operations.PostRequestPasswordResetSample, config?: AxiosRequestConfig): Promise<operations.PostRequestPasswordResetResponse>;
    /**
     * Used for resetting your password when you forgot it
     *
     * @remarks
     * Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.
     *
     */
    postVerifyPasswordChange(req: operations.PostVerifyPasswordChangeSample, config?: AxiosRequestConfig): Promise<operations.PostVerifyPasswordChangeResponse>;
}
