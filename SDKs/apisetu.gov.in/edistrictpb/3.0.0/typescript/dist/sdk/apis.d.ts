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
     * Birth Certificate
     *
     * @remarks
     * API to verify Birth Certificate.
     */
    btcer(req: operations.BtcerRequestBody, security: operations.BtcerSecurity, config?: AxiosRequestConfig): Promise<operations.BtcerResponse>;
    /**
     * Death Certificate
     *
     * @remarks
     * API to verify Death Certificate.
     */
    dtcer(req: operations.DtcerRequestBody, security: operations.DtcerSecurity, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * Economically Weaker Section Certificate
     *
     * @remarks
     * API to verify Economically Weaker Section Certificate.
     */
    ewcer(req: operations.EwcerRequestBody, security: operations.EwcerSecurity, config?: AxiosRequestConfig): Promise<operations.EwcerResponse>;
    /**
     * OBC Certificate
     *
     * @remarks
     * API to verify OBC Certificate.
     */
    obcer(req: operations.ObcerRequestBody, security: operations.ObcerSecurity, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * Rural Area Certificate
     *
     * @remarks
     * API to verify Rural Area Certificate.
     */
    racer(req: operations.RacerRequestBody, security: operations.RacerSecurity, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
    /**
     * Residence Certificate
     *
     * @remarks
     * API to verify Residence Certificate.
     */
    rscer(req: operations.RscerRequestBody, security: operations.RscerSecurity, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * SC/ST  Certificate
     *
     * @remarks
     * API to verify SC/ST  Certificate.
     */
    shcer(req: operations.ShcerRequestBody, security: operations.ShcerSecurity, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
}
