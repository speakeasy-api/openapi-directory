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
     * cncer - Conversion Certificate
     *
     * API to verify Conversion Certificate.
    **/
    cncer(req: operations.CncerRequest, config?: AxiosRequestConfig): Promise<operations.CncerResponse>;
    /**
     * mutan - Mutation Report/ePattadar Passbook
     *
     * API to verify Mutation Report/ePattadar Passbook.
    **/
    mutan(req: operations.MutanRequest, config?: AxiosRequestConfig): Promise<operations.MutanResponse>;
}
