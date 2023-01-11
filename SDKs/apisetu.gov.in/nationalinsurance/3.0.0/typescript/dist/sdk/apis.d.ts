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
     * cripc - Insurance Policy - Car
     *
     * API to verify Insurance Policy - Car.
    **/
    cripc(req: operations.CripcRequest, config?: AxiosRequestConfig): Promise<operations.CripcResponse>;
    /**
     * cvipc - Insurance Policy - Commercial Vehicle
     *
     * API to verify Insurance Policy - Commercial Vehicle.
    **/
    cvipc(req: operations.CvipcRequest, config?: AxiosRequestConfig): Promise<operations.CvipcResponse>;
    /**
     * egipc - Insurance Policy - Engineering
     *
     * API to verify Insurance Policy - Engineering.
    **/
    egipc(req: operations.EgipcRequest, config?: AxiosRequestConfig): Promise<operations.EgipcResponse>;
    /**
     * gicer - Insurance Policy - Group
     *
     * API to verify Insurance Policy - Group.
    **/
    gicer(req: operations.GicerRequest, config?: AxiosRequestConfig): Promise<operations.GicerResponse>;
    /**
     * hlipc - Insurance Policy - Health
     *
     * API to verify Insurance Policy - Health.
    **/
    hlipc(req: operations.HlipcRequest, config?: AxiosRequestConfig): Promise<operations.HlipcResponse>;
    /**
     * hmipc - Insurance Policy - Home
     *
     * API to verify Insurance Policy - Home.
    **/
    hmipc(req: operations.HmipcRequest, config?: AxiosRequestConfig): Promise<operations.HmipcResponse>;
    /**
     * miipc - Insurance Policy - Miscellaneous
     *
     * API to verify Insurance Policy - Miscellaneous.
    **/
    miipc(req: operations.MiipcRequest, config?: AxiosRequestConfig): Promise<operations.MiipcResponse>;
    /**
     * mripc - Insurance Policy - Marine
     *
     * API to verify Insurance Policy - Marine.
    **/
    mripc(req: operations.MripcRequest, config?: AxiosRequestConfig): Promise<operations.MripcResponse>;
    /**
     * pripc - Insurance Policy - Property
     *
     * API to verify Insurance Policy - Property.
    **/
    pripc(req: operations.PripcRequest, config?: AxiosRequestConfig): Promise<operations.PripcResponse>;
    /**
     * twipc - Insurance Policy - Two Wheeler
     *
     * API to verify Insurance Policy - Two Wheeler.
    **/
    twipc(req: operations.TwipcRequest, config?: AxiosRequestConfig): Promise<operations.TwipcResponse>;
}
