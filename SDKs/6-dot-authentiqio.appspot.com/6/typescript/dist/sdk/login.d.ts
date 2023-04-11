import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Login {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * push sign-in request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    pushLoginRequest(req: operations.PushLoginRequestRequest, config?: AxiosRequestConfig): Promise<operations.PushLoginRequestResponse>;
}
