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
     * Scheme Certificate
     *
     * @remarks
     * API to verify Scheme Certificate.
     */
    epfsc(req: operations.EpfscRequestBody, security: operations.EpfscSecurity, config?: AxiosRequestConfig): Promise<operations.EpfscResponse>;
    /**
     * Pension Certificate
     *
     * @remarks
     * API to verify Pension Certificate.
     */
    pecer(req: operations.PecerRequestBody, security: operations.PecerSecurity, config?: AxiosRequestConfig): Promise<operations.PecerResponse>;
    /**
     * UAN Card
     *
     * @remarks
     * API to verify UAN Card.
     */
    uncrd(req: operations.UncrdRequestBody, security: operations.UncrdSecurity, config?: AxiosRequestConfig): Promise<operations.UncrdResponse>;
}
