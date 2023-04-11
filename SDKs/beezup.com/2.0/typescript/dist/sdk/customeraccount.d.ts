import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerAccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate the user account
     */
    activateUserAccount(req: string, config?: AxiosRequestConfig): Promise<operations.ActivateUserAccountResponse>;
    /**
     * Change user email
     */
    changeEmail(req: shared.ChangeEmailRequest, config?: AxiosRequestConfig): Promise<operations.ChangeEmailResponse>;
    /**
     * Change user password
     */
    changePassword(req: shared.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * Get credit card information
     */
    getCreditCardInfo(req: operations.GetCreditCardInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditCardInfoResponse>;
    /**
     * Get profile picture information
     */
    getProfilePictureInfo(req: operations.GetProfilePictureInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetProfilePictureInfoResponse>;
    /**
     * Get user account information
     */
    getUserAccountInfo(req: operations.GetUserAccountInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountInfoResponse>;
    /**
     * Resend email activation
     */
    resendEmailActivation(config?: AxiosRequestConfig): Promise<operations.ResendEmailActivationResponse>;
    /**
     * Change company information
     */
    saveCompanyInfo(req: shared.CompanyInfo, config?: AxiosRequestConfig): Promise<operations.SaveCompanyInfoResponse>;
    /**
     * Save user credit card info
     */
    saveCreditCardInfo(req: shared.CreditCardInfo, config?: AxiosRequestConfig): Promise<operations.SaveCreditCardInfoResponse>;
    /**
     * Save user personal information
     */
    savePersonalInfo(req: shared.PersonalInfo, config?: AxiosRequestConfig): Promise<operations.SavePersonalInfoResponse>;
    /**
     * Change user picture information
     */
    saveProfilePictureInfo(req: shared.ProfilePictureInfo, config?: AxiosRequestConfig): Promise<operations.SaveProfilePictureInfoResponse>;
}
