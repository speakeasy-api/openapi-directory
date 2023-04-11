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
     * Application/ License for Factory
     *
     * @remarks
     * API to verify Application/ License for Factory.
     */
    alsfc(req: operations.AlsfcRequestBody, security: operations.AlsfcSecurity, config?: AxiosRequestConfig): Promise<operations.AlsfcResponse>;
    /**
     * Registration Certificate for Contract Labour License
     *
     * @remarks
     * API to verify Registration Certificate for Contract Labour License.
     */
    clcer(req: operations.ClcerRequestBody, security: operations.ClcerSecurity, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * Registration Certificate of Shops And Commercial Establishment
     *
     * @remarks
     * API to verify Registration Certificate of Shops And Commercial Establishment.
     */
    srcer(req: operations.SrcerRequestBody, security: operations.SrcerSecurity, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
