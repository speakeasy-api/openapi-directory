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
     * skcer - Skill Certificate
     *
     * API to verify Skill Certificate.
    **/
    skcer(req: operations.SkcerRequest, config?: AxiosRequestConfig): Promise<operations.SkcerResponse>;
    /**
     * skmst - Skill Marksheet/ Score Card
     *
     * API to verify Skill Marksheet/ Score Card.
    **/
    skmst(req: operations.SkmstRequest, config?: AxiosRequestConfig): Promise<operations.SkmstResponse>;
}
