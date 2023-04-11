import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for the characteristics of relationships between parties (individuals and organisations).
 *
 * @remarks
 *
 */
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of roles
     */
    getClassificationsRoles(req: operations.GetClassificationsRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsRolesResponse>;
}
