import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a new payment method to an account.
     */
    addPaymentMethod(req: operations.AddPaymentMethodRequest, security: operations.AddPaymentMethodSecurity, config?: AxiosRequestConfig): Promise<operations.AddPaymentMethodResponse>;
    /**
     * Authorize a device from a generated device authorization code.
     *
     * This is the second step in the process of authorizing a device by pin code.
     *
     * Firstly the device must request a generated authorization code via the
     * `/authorization/device/code` endpoint.
     *
     * This endpoint then authorizes the device associated with the code to sign in
     * to a user account. Typically this endpoint will be called from a page
     * presented in the web app under the account section.
     *
     * Once authorized, the device will then be able to sign in to that account
     * via the `/authorization/device` endpoint, without needing to provide the
     * credentials of the user.
     *
     */
    authorizeDevice(req: operations.AuthorizeDeviceRequest, security: operations.AuthorizeDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.AuthorizeDeviceResponse>;
    /**
     * Cancel a plan subscription.
     *
     * A cancelled subscription will continue to be valid until the subscription
     * expiry date or next renewal date.
     *
     */
    cancelSubscription(req: operations.CancelSubscriptionRequest, security: operations.CancelSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.CancelSubscriptionResponse>;
    /**
     * Change the password of an account.
     *
     * The expected token scope is Settings.
     *
     */
    changePassword(req: operations.ChangePasswordRequest, security: operations.ChangePasswordSecurity, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * Change the pin of an account.
     */
    changePin(req: operations.ChangePinRequest, security: operations.ChangePinSecurity, config?: AxiosRequestConfig): Promise<operations.ChangePinResponse>;
    /**
     * Create a new profile under the active account.
     */
    createProfile(req: operations.CreateProfileRequest, security: operations.CreateProfileSecurity, config?: AxiosRequestConfig): Promise<operations.CreateProfileResponse>;
    /**
     * Delete a profile with a specific id under the active account.
     *
     * Note that you cannot delete the primary profile.
     *
     */
    deleteProfileWithId(req: operations.DeleteProfileWithIdRequest, security: operations.DeleteProfileWithIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteProfileWithIdResponse>;
    /**
     * Deregister a playback device from an account.
     */
    deregisterDevice(req: operations.DeregisterDeviceRequest, security: operations.DeregisterDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.DeregisterDeviceResponse>;
    /**
     * Generate a new account nonce.
     *
     * A nonce may be required to help sign a response from a third party
     * service which will be passed back to these services.
     *
     * For example a Facebook single-sign-on request initiated by a client
     * application may first get a nonce from here to include in the request.
     * Facebook will then include the nonce in the auth token it issues. This
     * token can be passed back to our services and the nonce checked for validity.
     *
     */
    generateNonce(req: operations.GenerateNonceRequest, security: operations.GenerateNonceSecurity, config?: AxiosRequestConfig): Promise<operations.GenerateNonceResponse>;
    /**
     * Get the details of an account along with the profiles and entitlements under it.
     */
    getAccount(req: operations.GetAccountRequest, security: operations.GetAccountSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * Get a registered device.
     */
    getDevice(req: operations.GetDeviceRequest, security: operations.GetDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * Get all devices registered under this account.
     *
     * Also includes information around device registration and deregistration limits.
     *
     */
    getDevices(req: operations.GetDevicesRequest, security: operations.GetDevicesSecurity, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * Get all entitlements under the account.
     *
     * This list is returned under the call to get account information so a call here is
     * only required when wishing to refresh a local copy of entitlements.
     *
     */
    getEntitlements(req: operations.GetEntitlementsRequest, security: operations.GetEntitlementsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEntitlementsResponse>;
    /**
     * Get the video files associated with an item given maximum resolution, device type
     * and one or more delivery types.
     *
     * This endpoint accepts an Account Catalog token, however if when requesting
     * playback files you receive an *403 status code with error code 1* then the file
     * you're requesting is classification restricted. This means you should switch
     * to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
     * Playback token. If not already obtained, this token can be requested via the
     * `/itv/pinauthorization` endpoint with an account level pin.
     *
     * For convenience you may also access free / public files through this endpoint
     * instead of the /items/{id}/videos endpoint, when authenticated.
     *
     * Returns an array of video file objects which each include a url to a video.
     *
     * The first entry in the array contains what is predicted to be the best match.
     * The remainder of the entries, if any, may contain resolutions below what was
     * requests. For example if you request HD-720 the response may also contain
     * SD entries.
     *
     * If you specify multiple delivery types, then the response array will insert
     * types in the order you specify them in the query. For example `stream,progressive`
     * would return an array with 0 or more stream files followed by 0 or more progressive files.
     *
     * If no files are found a 404 is returned.
     *
     */
    getItemMediaFiles(req: operations.GetItemMediaFilesRequest, security: operations.GetItemMediaFilesSecurity, config?: AxiosRequestConfig): Promise<operations.GetItemMediaFilesResponse>;
    /**
     * Get the video files associated with an item given maximum resolution, device type
     * and one or more delivery types.
     *
     * This endpoint is identical to the `/account/items/{id}/videos` however it expects
     * an Account Playback token. This token, and in association this endpoint, is specifically
     * for use when playback files are classification restricted and require an account
     * level pin to access them.
     *
     * Returns an array of video file objects which each include a url to a video.
     *
     * The first entry in the array contains what is predicted to be the best match.
     * The remainder of the entries, if any, may contain resolutions below what was
     * requests. For example if you request HD-720 the response may also contain
     * SD entries.
     *
     * If you specify multiple delivery types, then the response array will insert
     * types in the order you specify them in the query. For example `stream,progressive`
     * would return an array with 0 or more stream files followed by 0 or more progressive files.
     *
     * If no files are found a 404 is returned.
     *
     */
    getItemMediaFilesGuarded(req: operations.GetItemMediaFilesGuardedRequest, security: operations.GetItemMediaFilesGuardedSecurity, config?: AxiosRequestConfig): Promise<operations.GetItemMediaFilesGuardedResponse>;
    /**
     * Get a payment method under an account.
     */
    getPaymentMethod(req: operations.GetPaymentMethodRequest, security: operations.GetPaymentMethodSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodResponse>;
    /**
     * Get the available payment methods under an account.
     */
    getPaymentMethods(req: operations.GetPaymentMethodsRequest, security: operations.GetPaymentMethodsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsResponse>;
    /**
     * Get the summary of a profile with a specific id under the active account.
     */
    getProfileWithId(req: operations.GetProfileWithIdRequest, security: operations.GetProfileWithIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetProfileWithIdResponse>;
    /**
     * Get a list of all purchases made under an account.
     */
    getPurchases(req: operations.GetPurchasesRequest, security: operations.GetPurchasesSecurity, config?: AxiosRequestConfig): Promise<operations.GetPurchasesResponse>;
    /**
     * Purchase a plan or item offer.
     * The result of a successful transaction is a new entitlement.
     *
     */
    makePurchase(req: operations.MakePurchaseRequest, security: operations.MakePurchaseSecurity, config?: AxiosRequestConfig): Promise<operations.MakePurchaseResponse>;
    /**
     * Register a playback device under an account.
     *
     * If a device with the same id already exists a `409` conflict will be returned.
     *
     */
    registerDevice(req: operations.RegisterDeviceRequest, security: operations.RegisterDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.RegisterDeviceResponse>;
    /**
     * Remove a payment method from an account.
     */
    removePaymentMethod(req: operations.RemovePaymentMethodRequest, security: operations.RemovePaymentMethodSecurity, config?: AxiosRequestConfig): Promise<operations.RemovePaymentMethodResponse>;
    /**
     * Rename a device
     */
    renameDevice(req: operations.RenameDeviceRequest, security: operations.RenameDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.RenameDeviceResponse>;
    /**
     * Request that the email address tied to an account be verified.
     *
     * This will send a verification email to the email address of the primary profile containing
     * a link which, once clicked, completes the verification process via the /verify-email endpoint.
     *
     * Note that when an account is created this email is sent automatically so there's no need
     * to call this directly.
     *
     * If the user doesn't click the link before it expires then this endpoint can be called
     * to request a new verification email. In the future it may also be used if we add support
     * for changing an account email address.
     *
     */
    requestEmailVerification(req: operations.RequestEmailVerificationRequest, security: operations.RequestEmailVerificationSecurity, config?: AxiosRequestConfig): Promise<operations.RequestEmailVerificationResponse>;
    /**
     * Update the details of an account.
     *
     * With the exception of the address, this supports partial updates, so you can send just the
     * properties you wish to update.
     *
     * When the address is provided any properties which are omitted from the address will be cleared.
     *
     */
    updateAccount(req: operations.UpdateAccountRequest, security: operations.UpdateAccountSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
    /**
     * Update the summary of a profile with a specific id under the active account.
     *
     * This supports partial updates so you can send just the properties you wish to update.
     *
     */
    updateProfileWithId(req: operations.UpdateProfileWithIdRequest, security: operations.UpdateProfileWithIdSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateProfileWithIdResponse>;
    /**
     * Renew a cancelled subscription or switch subscription to a different plan.
     *
     * When renewing a cancelled subscription membership, hit this endpoint with
     * the id of subscription to renew.
     *
     * To switch plans provide the id of the current active subscription membership
     * of the account, and in the query specify the id of the plan to switch to.
     *
     */
    updateSubscription(req: operations.UpdateSubscriptionRequest, security: operations.UpdateSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
}
