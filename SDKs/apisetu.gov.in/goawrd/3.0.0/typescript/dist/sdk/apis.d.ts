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
     * ercer - Registration Certificate of Establishment Employing Contract Labour
     *
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
    **/
    ercer(req: operations.ErcerRequest, config?: AxiosRequestConfig): Promise<operations.ErcerResponse>;
    /**
     * pfdaw - Permission/ Certificate for Well
     *
     * API to verify Permission/ Certificate for Well.
    **/
    pfdaw(req: operations.PfdawRequest, config?: AxiosRequestConfig): Promise<operations.PfdawResponse>;
    /**
     * tpcer - Permission/ Certificate for Transportation (Petroleum Products, Water etc.)
     *
     * API to verify Permission/ Certificate for Transportation (Petroleum Products, Water etc.).
    **/
    tpcer(req: operations.TpcerRequest, config?: AxiosRequestConfig): Promise<operations.TpcerResponse>;
}
