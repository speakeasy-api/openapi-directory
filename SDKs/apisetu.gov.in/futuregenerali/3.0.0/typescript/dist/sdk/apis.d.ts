import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Insurance Policy - Car
     *
     * @remarks
     * API to verify Insurance Policy - Car.
     */
    cripc(req: operations.CripcRequestBody, security: operations.CripcSecurity, config?: AxiosRequestConfig): Promise<operations.CripcResponse>;
    /**
     * Insurance Policy - Commercial Vehicle
     *
     * @remarks
     * API to verify Insurance Policy - Commercial Vehicle.
     */
    cvipc(req: operations.CvipcRequestBody, security: operations.CvipcSecurity, config?: AxiosRequestConfig): Promise<operations.CvipcResponse>;
    /**
     * Insurance Policy - Home
     *
     * @remarks
     * API to verify Insurance Policy - Home.
     */
    hmipc(req: operations.HmipcRequestBody, security: operations.HmipcSecurity, config?: AxiosRequestConfig): Promise<operations.HmipcResponse>;
    /**
     * Insurance Policy - Travel
     *
     * @remarks
     * API to verify Insurance Policy - Travel.
     */
    tripc(req: operations.TripcRequestBody, security: operations.TripcSecurity, config?: AxiosRequestConfig): Promise<operations.TripcResponse>;
    /**
     * Insurance Policy - Two Wheeler
     *
     * @remarks
     * API to verify Insurance Policy - Two Wheeler.
     */
    twipc(req: operations.TwipcRequestBody, security: operations.TwipcSecurity, config?: AxiosRequestConfig): Promise<operations.TwipcResponse>;
}
