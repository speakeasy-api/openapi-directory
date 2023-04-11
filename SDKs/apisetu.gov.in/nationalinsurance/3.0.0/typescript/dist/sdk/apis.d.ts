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
     * Insurance Policy - Engineering
     *
     * @remarks
     * API to verify Insurance Policy - Engineering.
     */
    egipc(req: operations.EgipcRequestBody, security: operations.EgipcSecurity, config?: AxiosRequestConfig): Promise<operations.EgipcResponse>;
    /**
     * Insurance Policy - Group
     *
     * @remarks
     * API to verify Insurance Policy - Group.
     */
    gicer(req: operations.GicerRequestBody, security: operations.GicerSecurity, config?: AxiosRequestConfig): Promise<operations.GicerResponse>;
    /**
     * Insurance Policy - Health
     *
     * @remarks
     * API to verify Insurance Policy - Health.
     */
    hlipc(req: operations.HlipcRequestBody, security: operations.HlipcSecurity, config?: AxiosRequestConfig): Promise<operations.HlipcResponse>;
    /**
     * Insurance Policy - Home
     *
     * @remarks
     * API to verify Insurance Policy - Home.
     */
    hmipc(req: operations.HmipcRequestBody, security: operations.HmipcSecurity, config?: AxiosRequestConfig): Promise<operations.HmipcResponse>;
    /**
     * Insurance Policy - Miscellaneous
     *
     * @remarks
     * API to verify Insurance Policy - Miscellaneous.
     */
    miipc(req: operations.MiipcRequestBody, security: operations.MiipcSecurity, config?: AxiosRequestConfig): Promise<operations.MiipcResponse>;
    /**
     * Insurance Policy - Marine
     *
     * @remarks
     * API to verify Insurance Policy - Marine.
     */
    mripc(req: operations.MripcRequestBody, security: operations.MripcSecurity, config?: AxiosRequestConfig): Promise<operations.MripcResponse>;
    /**
     * Insurance Policy - Property
     *
     * @remarks
     * API to verify Insurance Policy - Property.
     */
    pripc(req: operations.PripcRequestBody, security: operations.PripcSecurity, config?: AxiosRequestConfig): Promise<operations.PripcResponse>;
    /**
     * Insurance Policy - Two Wheeler
     *
     * @remarks
     * API to verify Insurance Policy - Two Wheeler.
     */
    twipc(req: operations.TwipcRequestBody, security: operations.TwipcSecurity, config?: AxiosRequestConfig): Promise<operations.TwipcResponse>;
}
