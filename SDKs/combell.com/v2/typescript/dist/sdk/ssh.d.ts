import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ssh {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Overview of SSH keys
     */
    getAllSshKeys(req: operations.GetAllSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetAllSshKeysResponse>;
}
