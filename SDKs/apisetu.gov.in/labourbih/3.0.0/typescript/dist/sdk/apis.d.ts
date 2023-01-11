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
     * alimw - Application for License for Inter State Migrant Workmen
     *
     * API to verify Application for License for Inter State Migrant Workmen.
    **/
    alimw(req: operations.AlimwRequest, config?: AxiosRequestConfig): Promise<operations.AlimwResponse>;
    /**
     * alsbl - Application/ License for Boilers
     *
     * API to verify Application/ License for Boilers.
    **/
    alsbl(req: operations.AlsblRequest, config?: AxiosRequestConfig): Promise<operations.AlsblResponse>;
    /**
     * alsfc - Application/ License for Factory
     *
     * API to verify Application/ License for Factory.
    **/
    alsfc(req: operations.AlsfcRequest, config?: AxiosRequestConfig): Promise<operations.AlsfcResponse>;
    /**
     * apptu - Application realted to Trade Unions
     *
     * API to verify Application realted to Trade Unions.
    **/
    apptu(req: operations.ApptuRequest, config?: AxiosRequestConfig): Promise<operations.ApptuResponse>;
    /**
     * clcer - Registration Certificate for Contract Labour License
     *
     * API to verify Registration Certificate for Contract Labour License.
    **/
    clcer(req: operations.ClcerRequest, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * noocl - Notice of Closure
     *
     * API to verify Notice of Closure.
    **/
    noocl(req: operations.NooclRequest, config?: AxiosRequestConfig): Promise<operations.NooclResponse>;
    /**
     * srcer - Registration Certificate of Shops And Commercial Establishment
     *
     * API to verify Registration Certificate of Shops And Commercial Establishment.
    **/
    srcer(req: operations.SrcerRequest, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
