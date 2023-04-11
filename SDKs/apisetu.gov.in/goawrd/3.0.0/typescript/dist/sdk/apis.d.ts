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
     * Registration Certificate of Establishment Employing Contract Labour
     *
     * @remarks
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
     */
    ercer(req: operations.ErcerRequestBody, security: operations.ErcerSecurity, config?: AxiosRequestConfig): Promise<operations.ErcerResponse>;
    /**
     * Permission/ Certificate for Well
     *
     * @remarks
     * API to verify Permission/ Certificate for Well.
     */
    pfdaw(req: operations.PfdawRequestBody, security: operations.PfdawSecurity, config?: AxiosRequestConfig): Promise<operations.PfdawResponse>;
    /**
     * Permission/ Certificate for Transportation (Petroleum Products, Water etc.)
     *
     * @remarks
     * API to verify Permission/ Certificate for Transportation (Petroleum Products, Water etc.).
     */
    tpcer(req: operations.TpcerRequestBody, security: operations.TpcerSecurity, config?: AxiosRequestConfig): Promise<operations.TpcerResponse>;
}
