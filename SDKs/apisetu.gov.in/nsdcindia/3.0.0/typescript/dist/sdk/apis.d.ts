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
     * escer - Executive Skill Enhancement Certificate
     *
     * API to verify Executive Skill Enhancement Certificate.
    **/
    escer(req: operations.EscerRequest, config?: AxiosRequestConfig): Promise<operations.EscerResponse>;
    /**
     * skcer - Skill Certificate
     *
     * API to verify Skill Certificate.
    **/
    skcer(req: operations.SkcerRequest, config?: AxiosRequestConfig): Promise<operations.SkcerResponse>;
}
