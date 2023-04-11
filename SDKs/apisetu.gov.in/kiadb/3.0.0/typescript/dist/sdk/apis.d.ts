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
     * Allotment Letter
     *
     * @remarks
     * API to verify Allotment Letter.
     */
    alltr(req: operations.AlltrRequestBody, security: operations.AlltrSecurity, config?: AxiosRequestConfig): Promise<operations.AlltrResponse>;
    /**
     * NOC For Banks
     *
     * @remarks
     * API to verify NOC For Banks.
     */
    bknoc(req: operations.BknocRequestBody, security: operations.BknocSecurity, config?: AxiosRequestConfig): Promise<operations.BknocResponse>;
    /**
     * Building Plan
     *
     * @remarks
     * API to verify Building Plan.
     */
    bpcer(req: operations.BpcerRequestBody, security: operations.BpcerSecurity, config?: AxiosRequestConfig): Promise<operations.BpcerResponse>;
    /**
     * Confirmatory Letter
     *
     * @remarks
     * API to verify Confirmatory Letter.
     */
    cfltr(req: operations.CfltrRequestBody, security: operations.CfltrSecurity, config?: AxiosRequestConfig): Promise<operations.CfltrResponse>;
    /**
     * Lease cum Sale Agreement
     *
     * @remarks
     * API to verify Lease cum Sale Agreement.
     */
    lcsag(req: operations.LcsagRequestBody, security: operations.LcsagSecurity, config?: AxiosRequestConfig): Promise<operations.LcsagResponse>;
    /**
     * Possession Certificate
     *
     * @remarks
     * API to verify Possession Certificate.
     */
    pscer(req: operations.PscerRequestBody, security: operations.PscerSecurity, config?: AxiosRequestConfig): Promise<operations.PscerResponse>;
    /**
     * NOC for New Power Supply
     *
     * @remarks
     * API to verify NOC for New Power Supply.
     */
    psnoc(req: operations.PsnocRequestBody, security: operations.PsnocSecurity, config?: AxiosRequestConfig): Promise<operations.PsnocResponse>;
    /**
     * Water Bill/ Connection
     *
     * @remarks
     * API to verify Water Bill/ Connection.
     */
    wtrbl(req: operations.WtrblRequestBody, security: operations.WtrblSecurity, config?: AxiosRequestConfig): Promise<operations.WtrblResponse>;
}
