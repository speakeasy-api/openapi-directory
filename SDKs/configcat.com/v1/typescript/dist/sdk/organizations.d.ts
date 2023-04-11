import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can get useful information about your Organizations.
 *
 * @remarks
 * This also can be used to manage your [Products](#tag/Products).
 *
 * <a href="https://configcat.com/docs/organization/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the Organizations.
 */
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Organizations
     *
     * @remarks
     * This endpoint returns the list of the Organizations that belongs to the user.
     */
    getOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
}
