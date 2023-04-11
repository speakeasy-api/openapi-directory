import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Account service allows you to authenticate and manage a user account.
 */
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Password Recovery
     *
     * @remarks
     * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
     */
    accountCreateRecovery(req: operations.AccountCreateRecoveryRequestBody, security: operations.AccountCreateRecoverySecurity, config?: AxiosRequestConfig): Promise<operations.AccountCreateRecoveryResponse>;
    /**
     * Create Email Verification
     *
     * @remarks
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     */
    accountCreateVerification(req: operations.AccountCreateVerificationRequestBody, security: operations.AccountCreateVerificationSecurity, config?: AxiosRequestConfig): Promise<operations.AccountCreateVerificationResponse>;
    /**
     * Delete Account
     *
     * @remarks
     * Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.
     */
    accountDelete(config?: AxiosRequestConfig): Promise<operations.AccountDeleteResponse>;
    /**
     * Delete Account Session
     *
     * @remarks
     * Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.
     */
    accountDeleteSession(req: operations.AccountDeleteSessionRequest, security: operations.AccountDeleteSessionSecurity, config?: AxiosRequestConfig): Promise<operations.AccountDeleteSessionResponse>;
    /**
     * Delete All Account Sessions
     *
     * @remarks
     * Delete all sessions from the user account and remove any sessions cookies from the end client.
     */
    accountDeleteSessions(config?: AxiosRequestConfig): Promise<operations.AccountDeleteSessionsResponse>;
    /**
     * Get Account
     *
     * @remarks
     * Get currently logged in user data as JSON object.
     */
    accountGet(config?: AxiosRequestConfig): Promise<operations.AccountGetResponse>;
    /**
     * Get Account Logs
     *
     * @remarks
     * Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.
     */
    accountGetLogs(config?: AxiosRequestConfig): Promise<operations.AccountGetLogsResponse>;
    /**
     * Get Account Preferences
     *
     * @remarks
     * Get currently logged in user preferences as a key-value object.
     */
    accountGetPrefs(config?: AxiosRequestConfig): Promise<operations.AccountGetPrefsResponse>;
    /**
     * Get Session By ID
     *
     * @remarks
     * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
     */
    accountGetSession(req: operations.AccountGetSessionRequest, security: operations.AccountGetSessionSecurity, config?: AxiosRequestConfig): Promise<operations.AccountGetSessionResponse>;
    /**
     * Get Account Sessions
     *
     * @remarks
     * Get currently logged in user list of active sessions across different devices.
     */
    accountGetSessions(config?: AxiosRequestConfig): Promise<operations.AccountGetSessionsResponse>;
    /**
     * Update Account Email
     *
     * @remarks
     * Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
     */
    accountUpdateEmail(req: operations.AccountUpdateEmailRequestBody, security: operations.AccountUpdateEmailSecurity, config?: AxiosRequestConfig): Promise<operations.AccountUpdateEmailResponse>;
    /**
     * Update Account Name
     *
     * @remarks
     * Update currently logged in user account name.
     */
    accountUpdateName(req: operations.AccountUpdateNameRequestBody, security: operations.AccountUpdateNameSecurity, config?: AxiosRequestConfig): Promise<operations.AccountUpdateNameResponse>;
    /**
     * Update Account Password
     *
     * @remarks
     * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.
     */
    accountUpdatePassword(req: operations.AccountUpdatePasswordRequestBody, security: operations.AccountUpdatePasswordSecurity, config?: AxiosRequestConfig): Promise<operations.AccountUpdatePasswordResponse>;
    /**
     * Update Account Preferences
     *
     * @remarks
     * Update currently logged in user account preferences. You can pass only the specific settings you wish to update.
     */
    accountUpdatePrefs(req: operations.AccountUpdatePrefsRequestBody, security: operations.AccountUpdatePrefsSecurity, config?: AxiosRequestConfig): Promise<operations.AccountUpdatePrefsResponse>;
    /**
     * Complete Password Recovery
     *
     * @remarks
     * Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     */
    accountUpdateRecovery(req: operations.AccountUpdateRecoveryRequestBody, security: operations.AccountUpdateRecoverySecurity, config?: AxiosRequestConfig): Promise<operations.AccountUpdateRecoveryResponse>;
    /**
     * Complete Email Verification
     *
     * @remarks
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
     */
    accountUpdateVerification(req: operations.AccountUpdateVerificationRequestBody, security: operations.AccountUpdateVerificationSecurity, config?: AxiosRequestConfig): Promise<operations.AccountUpdateVerificationResponse>;
}
