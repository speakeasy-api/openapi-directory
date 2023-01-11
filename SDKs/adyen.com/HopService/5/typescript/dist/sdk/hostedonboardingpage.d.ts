import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HostedOnboardingPage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postGetOnboardingUrl - Get a link to a Adyen-hosted onboarding page.
     *
     * Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/platforms/hosted-onboarding-page).
    **/
    postGetOnboardingUrl(req: operations.PostGetOnboardingUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostGetOnboardingUrlResponse>;
}
