import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalsTerminalLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of terminals
     *
     * @remarks
     * Returns the payment terminals that the API credential has access to and that match the query parameters.
     * When using `searchQuery`, other query parameters are ignored.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API — Terminal actions read
     */
    getTerminals(req: operations.GetTerminalsRequest, security: operations.GetTerminalsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTerminalsResponse>;
}
