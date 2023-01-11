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
     * alltr - Allotment Letter
     *
     * API to verify Allotment Letter.
    **/
    alltr(req: operations.AlltrRequest, config?: AxiosRequestConfig): Promise<operations.AlltrResponse>;
    /**
     * bknoc - NOC For Banks
     *
     * API to verify NOC For Banks.
    **/
    bknoc(req: operations.BknocRequest, config?: AxiosRequestConfig): Promise<operations.BknocResponse>;
    /**
     * bpcer - Building Plan
     *
     * API to verify Building Plan.
    **/
    bpcer(req: operations.BpcerRequest, config?: AxiosRequestConfig): Promise<operations.BpcerResponse>;
    /**
     * cfltr - Confirmatory Letter
     *
     * API to verify Confirmatory Letter.
    **/
    cfltr(req: operations.CfltrRequest, config?: AxiosRequestConfig): Promise<operations.CfltrResponse>;
    /**
     * lcsag - Lease cum Sale Agreement
     *
     * API to verify Lease cum Sale Agreement.
    **/
    lcsag(req: operations.LcsagRequest, config?: AxiosRequestConfig): Promise<operations.LcsagResponse>;
    /**
     * pscer - Possession Certificate
     *
     * API to verify Possession Certificate.
    **/
    pscer(req: operations.PscerRequest, config?: AxiosRequestConfig): Promise<operations.PscerResponse>;
    /**
     * psnoc - NOC for New Power Supply
     *
     * API to verify NOC for New Power Supply.
    **/
    psnoc(req: operations.PsnocRequest, config?: AxiosRequestConfig): Promise<operations.PsnocResponse>;
    /**
     * wtrbl - Water Bill/ Connection
     *
     * API to verify Water Bill/ Connection.
    **/
    wtrbl(req: operations.WtrblRequest, config?: AxiosRequestConfig): Promise<operations.WtrblResponse>;
}
