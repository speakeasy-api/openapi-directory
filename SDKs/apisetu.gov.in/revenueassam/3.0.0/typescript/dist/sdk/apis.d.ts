import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * nncer - Non-Encumbrance Certificate
     *
     * API to verify Non-Encumbrance Certificate.
    **/
    nncer(req: operations.NncerRequest, config?: AxiosRequestConfig): Promise<operations.NncerResponse>;
}
