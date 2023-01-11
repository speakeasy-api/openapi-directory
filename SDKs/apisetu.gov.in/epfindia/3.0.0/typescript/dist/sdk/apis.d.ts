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
     * epfsc - Scheme Certificate
     *
     * API to verify Scheme Certificate.
    **/
    epfsc(req: operations.EpfscRequest, config?: AxiosRequestConfig): Promise<operations.EpfscResponse>;
    /**
     * pecer - Pension Certificate
     *
     * API to verify Pension Certificate.
    **/
    pecer(req: operations.PecerRequest, config?: AxiosRequestConfig): Promise<operations.PecerResponse>;
    /**
     * uncrd - UAN Card
     *
     * API to verify UAN Card.
    **/
    uncrd(req: operations.UncrdRequest, config?: AxiosRequestConfig): Promise<operations.UncrdResponse>;
}
