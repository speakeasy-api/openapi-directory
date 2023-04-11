import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve the TLS Certificate
     *
     * @remarks
     * This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.
     */
    getTlskey(req: operations.GetTlskeyRequest, config?: AxiosRequestConfig): Promise<operations.GetTlskeyResponse>;
    /**
     * Refresh the TLS Certificate
     *
     * @remarks
     * This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).
     */
    putTlskeyRefresh(req: operations.PutTlskeyRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PutTlskeyRefreshResponse>;
}
