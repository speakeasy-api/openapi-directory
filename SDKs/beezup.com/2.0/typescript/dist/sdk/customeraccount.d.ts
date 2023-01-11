import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomerAccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * activateUserAccount - Activate the user account
    **/
    activateUserAccount(req: operations.ActivateUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.ActivateUserAccountResponse>;
    /**
     * changeEmail - Change user email
    **/
    changeEmail(req: operations.ChangeEmailRequest, config?: AxiosRequestConfig): Promise<operations.ChangeEmailResponse>;
    /**
     * changePassword - Change user password
    **/
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * getCreditCardInfo - Get credit card information
    **/
    getCreditCardInfo(req: operations.GetCreditCardInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditCardInfoResponse>;
    /**
     * getProfilePictureInfo - Get profile picture information
    **/
    getProfilePictureInfo(req: operations.GetProfilePictureInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetProfilePictureInfoResponse>;
    /**
     * getUserAccountInfo - Get user account information
    **/
    getUserAccountInfo(req: operations.GetUserAccountInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccountInfoResponse>;
    /**
     * resendEmailActivation - Resend email activation
    **/
    resendEmailActivation(config?: AxiosRequestConfig): Promise<operations.ResendEmailActivationResponse>;
    /**
     * saveCompanyInfo - Change company information
    **/
    saveCompanyInfo(req: operations.SaveCompanyInfoRequest, config?: AxiosRequestConfig): Promise<operations.SaveCompanyInfoResponse>;
    /**
     * saveCreditCardInfo - Save user credit card info
    **/
    saveCreditCardInfo(req: operations.SaveCreditCardInfoRequest, config?: AxiosRequestConfig): Promise<operations.SaveCreditCardInfoResponse>;
    /**
     * savePersonalInfo - Save user personal information
    **/
    savePersonalInfo(req: operations.SavePersonalInfoRequest, config?: AxiosRequestConfig): Promise<operations.SavePersonalInfoResponse>;
    /**
     * saveProfilePictureInfo - Change user picture information
    **/
    saveProfilePictureInfo(req: operations.SaveProfilePictureInfoRequest, config?: AxiosRequestConfig): Promise<operations.SaveProfilePictureInfoResponse>;
}
