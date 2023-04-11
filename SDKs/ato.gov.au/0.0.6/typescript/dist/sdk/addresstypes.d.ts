import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for addresses.
 *
 * @remarks
 *
 */
export declare class AddressTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of address types
     */
    getClassificationsAddressTypes(req: operations.GetClassificationsAddressTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsAddressTypesResponse>;
}
