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
     * Driving License
     *
     * @remarks
     * API to verify Driving License.
     */
    drvlc(req: operations.DrvlcRequestBody, security: operations.DrvlcSecurity, config?: AxiosRequestConfig): Promise<operations.DrvlcResponse>;
    /**
     * Fitness Certificate
     *
     * @remarks
     * API to verify Fitness Certificate.
     */
    fitcer(req: operations.FitcerRequestBody, security: operations.FitcerSecurity, config?: AxiosRequestConfig): Promise<operations.FitcerResponse>;
    /**
     * Registration of Vehicles
     *
     * @remarks
     * API to verify Registration of Vehicles.
     */
    rvcer(req: operations.RvcerRequestBody, security: operations.RvcerSecurity, config?: AxiosRequestConfig): Promise<operations.RvcerResponse>;
    /**
     * Vehicle Insurance Certificate
     *
     * @remarks
     * API to verify Vehicle Insurance Certificate.
     */
    vhinsc(req: operations.VhinscRequestBody, security: operations.VhinscSecurity, config?: AxiosRequestConfig): Promise<operations.VhinscResponse>;
    /**
     * Vehicle Tax Receipt
     *
     * @remarks
     * API to verify Vehicle Tax Receipt.
     */
    vhtax(req: operations.VhtaxRequestBody, security: operations.VhtaxSecurity, config?: AxiosRequestConfig): Promise<operations.VhtaxResponse>;
}
