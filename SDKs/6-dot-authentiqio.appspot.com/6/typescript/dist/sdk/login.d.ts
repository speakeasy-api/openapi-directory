import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Login {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pushLoginRequest - push sign-in request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
    **/
    pushLoginRequest(req: operations.PushLoginRequestRequest, config?: AxiosRequestConfig): Promise<operations.PushLoginRequestResponse>;
}
