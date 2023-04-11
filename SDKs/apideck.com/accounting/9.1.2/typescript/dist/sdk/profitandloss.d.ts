import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProfitAndLoss {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Profit and Loss
     *
     * @remarks
     * Get Profit and Loss
     */
    profitAndLossOne(req: operations.ProfitAndLossOneRequest, security: operations.ProfitAndLossOneSecurity, config?: AxiosRequestConfig): Promise<operations.ProfitAndLossOneResponse>;
}
