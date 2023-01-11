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
     * drvlc - Driving License
     *
     * API to verify Driving License.
    **/
    drvlc(req: operations.DrvlcRequest, config?: AxiosRequestConfig): Promise<operations.DrvlcResponse>;
    /**
     * fitcer - Fitness Certificate
     *
     * API to verify Fitness Certificate.
    **/
    fitcer(req: operations.FitcerRequest, config?: AxiosRequestConfig): Promise<operations.FitcerResponse>;
    /**
     * rvcer - Registration of Vehicles
     *
     * API to verify Registration of Vehicles.
    **/
    rvcer(req: operations.RvcerRequest, config?: AxiosRequestConfig): Promise<operations.RvcerResponse>;
    /**
     * vhinsc - Vehicle Insurance Certificate
     *
     * API to verify Vehicle Insurance Certificate.
    **/
    vhinsc(req: operations.VhinscRequest, config?: AxiosRequestConfig): Promise<operations.VhinscResponse>;
    /**
     * vhtax - Vehicle Tax Receipt
     *
     * API to verify Vehicle Tax Receipt.
    **/
    vhtax(req: operations.VhtaxRequest, config?: AxiosRequestConfig): Promise<operations.VhtaxResponse>;
}
