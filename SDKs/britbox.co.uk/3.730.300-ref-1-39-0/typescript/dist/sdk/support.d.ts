import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Support {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Request the password of an account's primary profile be reset.
     *
     * Should be called when a user has forgotten their password.
     *
     * This will send an email with a password reset link to the email address of the
     * primary profile of an account.
     *
     * The link, once clicked, should take the user to the "reset-password" page of the
     * website. Here they will enter their new password and submit to the /reset-password
     * endpoint here, along with the password reset token provided in the original link.
     *
     */
    forgotPassword(req: operations.ForgotPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ForgotPasswordResponse>;
    /**
     * Returns the details of subscription data for a user with specified id.
     */
    getSubscriptionData(req: operations.GetSubscriptionDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionDataResponse>;
    /**
     * When a user requests to reset their password via the /request-password-reset endpoint, an
     * email is sent to the email address of the primary profile of the account. This email contains a link
     * with a reset token as query parameter. The link should take the user to the "reset-password"
     * page of the website.
     *
     * From the reset-password page a user should enter the new password they wish to use.
     * It should then be submitted to this endpoint,
     * along with the reset token from the email link.
     * The token should be provided in the body as resetToken property.
     *
     */
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * When an account is created an email is sent to the email address of the new account.
     * This contains a link, which once clicked, verifies the email address of the account is correct.
     *
     * The link contains a token as a query parameter which should be passed as the authorization
     * bearer token to this endpoint to complete email verification.
     *
     * The token has en expiry, so if the link is not clicked before it expires, the account holder
     * may need to request a new verification email be sent. This can be done via the endpoint
     * /account/request-email-verification.
     *
     */
    verifyEmail(req: operations.VerifyEmailRequest, security: operations.VerifyEmailSecurity, config?: AxiosRequestConfig): Promise<operations.VerifyEmailResponse>;
}
