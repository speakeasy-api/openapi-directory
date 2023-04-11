import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Registration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Register a new user, creating them an account.
     *
     * Registration, when successful, will return an array of access tokens so the user is
     * immediately signed in.
     *
     * It returns Catalog and Commerce scoped tokens for both Account and Profile.
     * The Commerce ones are intended to allow the purchase of a subscription plan
     * in the step after registration, without the user being prompted to enter
     * their username and password again.
     *
     * An email will also be sent with a link they need to click to confirm their
     * email address. This confirmation is done via the /verify-email endpoint.
     *
     */
    register(req: operations.RegisterRequest, config?: AxiosRequestConfig): Promise<operations.RegisterResponse>;
}
