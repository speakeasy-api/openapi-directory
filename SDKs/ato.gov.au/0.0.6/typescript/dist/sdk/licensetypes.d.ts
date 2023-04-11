import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for licenses.
 *
 * @remarks
 *
 */
export declare class LicenseTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of license types
     */
    getClassificationsLicenseTypes(req: operations.GetClassificationsLicenseTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsLicenseTypesResponse>;
}
