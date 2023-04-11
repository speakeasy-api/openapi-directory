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
     * Khatha Extract / Certificate
     *
     * @remarks
     * API to verify Khatha Extract / Certificate.
     */
    kecer(req: operations.KecerRequestBody, security: operations.KecerSecurity, config?: AxiosRequestConfig): Promise<operations.KecerResponse>;
    /**
     * New Tap Connection
     *
     * @remarks
     * API to verify New Tap Connection.
     */
    tapcn(req: operations.TapcnRequestBody, security: operations.TapcnSecurity, config?: AxiosRequestConfig): Promise<operations.TapcnResponse>;
    /**
     * Trade License/ Certificate
     *
     * @remarks
     * API to verify Trade License/ Certificate.
     */
    tdlcs(req: operations.TdlcsRequestBody, security: operations.TdlcsSecurity, config?: AxiosRequestConfig): Promise<operations.TdlcsResponse>;
    /**
     * Jalanidhi - New UGD Connection
     *
     * @remarks
     * API to verify Jalanidhi - New UGD Connection.
     */
    ugdcn(req: operations.UgdcnRequestBody, security: operations.UgdcnSecurity, config?: AxiosRequestConfig): Promise<operations.UgdcnResponse>;
}
