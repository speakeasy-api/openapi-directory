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
     * Application for License for Inter State Migrant Workmen
     *
     * @remarks
     * API to verify Application for License for Inter State Migrant Workmen.
     */
    alimw(req: operations.AlimwRequestBody, security: operations.AlimwSecurity, config?: AxiosRequestConfig): Promise<operations.AlimwResponse>;
    /**
     * Application/ License for Boilers
     *
     * @remarks
     * API to verify Application/ License for Boilers.
     */
    alsbl(req: operations.AlsblRequestBody, security: operations.AlsblSecurity, config?: AxiosRequestConfig): Promise<operations.AlsblResponse>;
    /**
     * Application/ License for Factory
     *
     * @remarks
     * API to verify Application/ License for Factory.
     */
    alsfc(req: operations.AlsfcRequestBody, security: operations.AlsfcSecurity, config?: AxiosRequestConfig): Promise<operations.AlsfcResponse>;
    /**
     * Application realted to Trade Unions
     *
     * @remarks
     * API to verify Application realted to Trade Unions.
     */
    apptu(req: operations.ApptuRequestBody, security: operations.ApptuSecurity, config?: AxiosRequestConfig): Promise<operations.ApptuResponse>;
    /**
     * Registration Certificate for Contract Labour License
     *
     * @remarks
     * API to verify Registration Certificate for Contract Labour License.
     */
    clcer(req: operations.ClcerRequestBody, security: operations.ClcerSecurity, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * Notice of Closure
     *
     * @remarks
     * API to verify Notice of Closure.
     */
    noocl(req: operations.NooclRequestBody, security: operations.NooclSecurity, config?: AxiosRequestConfig): Promise<operations.NooclResponse>;
    /**
     * Registration Certificate of Shops And Commercial Establishment
     *
     * @remarks
     * API to verify Registration Certificate of Shops And Commercial Establishment.
     */
    srcer(req: operations.SrcerRequestBody, security: operations.SrcerSecurity, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
