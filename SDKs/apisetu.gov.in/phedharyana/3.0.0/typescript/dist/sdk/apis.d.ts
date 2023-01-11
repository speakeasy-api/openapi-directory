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
     * etcer - Enlistment Certificate
     *
     * API to verify Enlistment Certificate.
    **/
    etcer(req: operations.EtcerRequest, config?: AxiosRequestConfig): Promise<operations.EtcerResponse>;
    /**
     * govid - ID Card
     *
     * API to verify ID Card.
    **/
    govid(req: operations.GovidRequest, config?: AxiosRequestConfig): Promise<operations.GovidResponse>;
    /**
     * sicer - Sanction Letter/ Certificate
     *
     * API to verify Sanction Letter/ Certificate.
    **/
    sicer(req: operations.SicerRequest, config?: AxiosRequestConfig): Promise<operations.SicerResponse>;
}
