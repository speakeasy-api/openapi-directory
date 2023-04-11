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
     * Conversion Certificate
     *
     * @remarks
     * API to verify Conversion Certificate.
     */
    cncer(req: operations.CncerRequestBody, security: operations.CncerSecurity, config?: AxiosRequestConfig): Promise<operations.CncerResponse>;
    /**
     * Mutation Report/ePattadar Passbook
     *
     * @remarks
     * API to verify Mutation Report/ePattadar Passbook.
     */
    mutan(req: operations.MutanRequestBody, security: operations.MutanSecurity, config?: AxiosRequestConfig): Promise<operations.MutanResponse>;
}
