import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Crx {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getCrxdeStatus(config?: AxiosRequestConfig): Promise<operations.GetCrxdeStatusResponse>;
    getInstallStatus(config?: AxiosRequestConfig): Promise<operations.GetInstallStatusResponse>;
    getPackageManagerServlet(config?: AxiosRequestConfig): Promise<operations.GetPackageManagerServletResponse>;
    postPackageService(req: operations.PostPackageServiceRequest, config?: AxiosRequestConfig): Promise<operations.PostPackageServiceResponse>;
    postPackageServiceJson(req: operations.PostPackageServiceJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostPackageServiceJsonResponse>;
    postPackageUpdate(req: operations.PostPackageUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostPackageUpdateResponse>;
    postSetPassword(req: operations.PostSetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.PostSetPasswordResponse>;
}
