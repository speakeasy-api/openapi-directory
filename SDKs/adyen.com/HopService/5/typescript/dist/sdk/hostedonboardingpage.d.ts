import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HostedOnboardingPage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a link to a Adyen-hosted onboarding page
     *
     * @remarks
     * Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page).
     */
    postGetOnboardingUrl(req: shared.GetOnboardingUrlRequest, security: operations.PostGetOnboardingUrlSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetOnboardingUrlResponse>;
}
