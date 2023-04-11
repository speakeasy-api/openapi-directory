import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Dealer License
     *
     * @remarks
     * API to verify Dealer License.
     */
    delcs(req: operations.DelcsRequestBody, security: operations.DelcsSecurity, config?: AxiosRequestConfig): Promise<operations.DelcsResponse>;
    /**
     * Manufacturer License
     *
     * @remarks
     * API to verify Manufacturer License.
     */
    malcs(req: operations.MalcsRequestBody, security: operations.MalcsSecurity, config?: AxiosRequestConfig): Promise<operations.MalcsResponse>;
    /**
     * Packers License
     *
     * @remarks
     * API to verify Packers License.
     */
    palcs(req: operations.PalcsRequestBody, security: operations.PalcsSecurity, config?: AxiosRequestConfig): Promise<operations.PalcsResponse>;
    /**
     * Repairer License
     *
     * @remarks
     * API to verify Repairer License.
     */
    relcs(req: operations.RelcsRequestBody, security: operations.RelcsSecurity, config?: AxiosRequestConfig): Promise<operations.RelcsResponse>;
}
