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
     * delcs - Dealer License
     *
     * API to verify Dealer License.
    **/
    delcs(req: operations.DelcsRequest, config?: AxiosRequestConfig): Promise<operations.DelcsResponse>;
    /**
     * malcs - Manufacturer License
     *
     * API to verify Manufacturer License.
    **/
    malcs(req: operations.MalcsRequest, config?: AxiosRequestConfig): Promise<operations.MalcsResponse>;
    /**
     * palcs - Packers License
     *
     * API to verify Packers License.
    **/
    palcs(req: operations.PalcsRequest, config?: AxiosRequestConfig): Promise<operations.PalcsResponse>;
    /**
     * relcs - Repairer License
     *
     * API to verify Repairer License.
    **/
    relcs(req: operations.RelcsRequest, config?: AxiosRequestConfig): Promise<operations.RelcsResponse>;
}
