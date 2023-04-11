import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Custom {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getAemHealthCheck(req: operations.GetAemHealthCheckRequest, config?: AxiosRequestConfig): Promise<operations.GetAemHealthCheckResponse>;
    postConfigAemHealthCheckServlet(req: operations.PostConfigAemHealthCheckServletRequest, config?: AxiosRequestConfig): Promise<operations.PostConfigAemHealthCheckServletResponse>;
    postConfigAemPasswordReset(req: operations.PostConfigAemPasswordResetRequest, config?: AxiosRequestConfig): Promise<operations.PostConfigAemPasswordResetResponse>;
}
