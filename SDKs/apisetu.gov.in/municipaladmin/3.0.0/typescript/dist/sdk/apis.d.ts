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
     * kecer - Khatha Extract / Certificate
     *
     * API to verify Khatha Extract / Certificate.
    **/
    kecer(req: operations.KecerRequest, config?: AxiosRequestConfig): Promise<operations.KecerResponse>;
    /**
     * tapcn - New Tap Connection
     *
     * API to verify New Tap Connection.
    **/
    tapcn(req: operations.TapcnRequest, config?: AxiosRequestConfig): Promise<operations.TapcnResponse>;
    /**
     * tdlcs - Trade License/ Certificate
     *
     * API to verify Trade License/ Certificate.
    **/
    tdlcs(req: operations.TdlcsRequest, config?: AxiosRequestConfig): Promise<operations.TdlcsResponse>;
    /**
     * ugdcn - Jalanidhi - New UGD Connection
     *
     * API to verify Jalanidhi - New UGD Connection.
    **/
    ugdcn(req: operations.UgdcnRequest, config?: AxiosRequestConfig): Promise<operations.UgdcnResponse>;
}
