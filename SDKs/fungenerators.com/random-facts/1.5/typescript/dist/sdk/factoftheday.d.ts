import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get fact of the day on various categories. This is refreshed daily.
 *
 * @see {@link http://fungenerators.com/api/facts#fact-of-the-day} - Find out more
 */
export declare class FactOfTheDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get fact of the day for the given category.
     */
    getFactFod(req: operations.GetFactFodRequest, security: operations.GetFactFodSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactFodResponse>;
    /**
     * Get the list of supported fact of the day categories.
     */
    getFactFodCategories(config?: AxiosRequestConfig): Promise<operations.GetFactFodCategoriesResponse>;
}
