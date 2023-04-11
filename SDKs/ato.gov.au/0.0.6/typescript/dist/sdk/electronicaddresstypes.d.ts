import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for electronic addresses.
 *
 * @remarks
 *
 */
export declare class ElectronicAddressTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of electronic address types
     */
    getClassificationsElectronicAddressTypes(req: operations.GetClassificationsElectronicAddressTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsElectronicAddressTypesResponse>;
}
