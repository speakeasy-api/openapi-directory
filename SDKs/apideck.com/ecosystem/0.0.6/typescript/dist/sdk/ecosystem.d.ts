import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ecosystem {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get ecosystem
     *
     * @remarks
     * Get ecosystem
     */
    ecosystemsOne(req: operations.EcosystemsOneRequest, config?: AxiosRequestConfig): Promise<operations.EcosystemsOneResponse>;
}
