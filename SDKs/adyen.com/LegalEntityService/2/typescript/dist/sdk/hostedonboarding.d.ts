import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HostedOnboarding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of hosted onboarding page themes
     *
     * @remarks
     * Returns a list of hosted onboarding page themes.
     */
    getThemes(config?: AxiosRequestConfig): Promise<operations.GetThemesResponse>;
    /**
     * Get an onboarding link theme
     *
     * @remarks
     * Returns the details of the theme identified in the path.
     */
    getThemesId(req: operations.GetThemesIdRequest, security: operations.GetThemesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetThemesIdResponse>;
    /**
     * Get a link to an Adyen-hosted onboarding page
     *
     * @remarks
     * Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.
     */
    postLegalEntitiesIdOnboardingLinks(req: operations.PostLegalEntitiesIdOnboardingLinksRequest, security: operations.PostLegalEntitiesIdOnboardingLinksSecurity, config?: AxiosRequestConfig): Promise<operations.PostLegalEntitiesIdOnboardingLinksResponse>;
}
