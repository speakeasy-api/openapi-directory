import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Translate to Shakespeare English
 *
 * @see {@link http://fungenerators.com/api/shakespeare/} - Find out more
 */
export declare class Translation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Translate from English to Shakespeare English.
     */
    getShakespeareTranslate(req: operations.GetShakespeareTranslateRequest, security: operations.GetShakespeareTranslateSecurity, config?: AxiosRequestConfig): Promise<operations.GetShakespeareTranslateResponse>;
}
