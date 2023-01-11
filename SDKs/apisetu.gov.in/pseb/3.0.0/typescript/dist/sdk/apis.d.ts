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
     * cemst - Class VIII Marksheet
     *
     * API to verify Class VIII Marksheet.
    **/
    cemst(req: operations.CemstRequest, config?: AxiosRequestConfig): Promise<operations.CemstResponse>;
    /**
     * cfmst - Class V Marksheet
     *
     * API to verify Class V Marksheet.
    **/
    cfmst(req: operations.CfmstRequest, config?: AxiosRequestConfig): Promise<operations.CfmstResponse>;
    /**
     * hscer - Class XII Marksheet
     *
     * API to verify Class XII Marksheet.
    **/
    hscer(req: operations.HscerRequest, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * micer - Migration Certificate
     *
     * API to verify Migration Certificate.
    **/
    micer(req: operations.MicerRequest, config?: AxiosRequestConfig): Promise<operations.MicerResponse>;
    /**
     * sscer - Class X Marksheet
     *
     * API to verify Class X Marksheet.
    **/
    sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
}
