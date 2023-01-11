import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Console {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getAemProductInfo(config?: AxiosRequestConfig): Promise<operations.GetAemProductInfoResponse>;
    getConfigMgr(config?: AxiosRequestConfig): Promise<operations.GetConfigMgrResponse>;
    postBundle(req: operations.PostBundleRequest, config?: AxiosRequestConfig): Promise<operations.PostBundleResponse>;
    postJmxRepository(req: operations.PostJmxRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.PostJmxRepositoryResponse>;
    postSamlConfiguration(req: operations.PostSamlConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostSamlConfigurationResponse>;
}
