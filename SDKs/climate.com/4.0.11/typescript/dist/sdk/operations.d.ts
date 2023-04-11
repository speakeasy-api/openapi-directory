import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operation data endpoints.
 */
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve the operations accessible to a a given user.
     *
     * @remarks
     * Retrieve the **operations** accessible to the authenticated user. Filter the results by resource owner if the `resourceOwnerId` query parameter is specified.
     */
    fetchOperations(req: operations.FetchOperationsRequest, security: operations.FetchOperationsSecurity, config?: AxiosRequestConfig): Promise<operations.FetchOperationsResponse>;
}
