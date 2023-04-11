import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Translate to pirate lingo
 *
 * @see {@link http://fungenerators.com/api/pirate/} - Find out more
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
     * Translate from English to pirate.
     */
    getPirateTranslate(req: operations.GetPirateTranslateRequest, security: operations.GetPirateTranslateSecurity, config?: AxiosRequestConfig): Promise<operations.GetPirateTranslateResponse>;
}
