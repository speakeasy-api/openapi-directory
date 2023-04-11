import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class App {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the global configuration for an application. Should be called during app statup.
     *
     * This includes things like device and playback rules, classifications,
     * sitemap and subscriptions.
     *
     * You have the option to select specific configuration objects using the 'include'
     * parameter, or if unspecified, getting all configuration.
     *
     */
    getAppConfig(req: operations.GetAppConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetAppConfigResponse>;
    /**
     * Returns a page with the specified id.
     *
     * This is a cut down version for low memory devices.123
     *
     * If targeting the search page you must url encode the search term as a parameter
     * using the `q` key. For example if your browser path looks like `/search?q=the`
     * then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.
     *
     */
    getItvPage(req: operations.GetItvPageRequest, config?: AxiosRequestConfig): Promise<operations.GetItvPageResponse>;
    /**
     * Returns a page with the specified id.
     *
     * If targeting the search page you must url encode the search term as a parameter
     * using the `q` key. For example if your browser path looks like `/search?q=the`
     * then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.
     *
     */
    getPage(req: operations.GetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetPageResponse>;
}
