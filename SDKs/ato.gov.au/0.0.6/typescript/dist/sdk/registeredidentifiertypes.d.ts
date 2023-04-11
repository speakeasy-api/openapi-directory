import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for registered identifiers.
 *
 * @remarks
 *
 */
export declare class RegisteredIdentifierTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of registered identifier types
     */
    getClassificationsRegisteredIdentifierTypes(req: operations.GetClassificationsRegisteredIdentifierTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsRegisteredIdentifierTypesResponse>;
}
