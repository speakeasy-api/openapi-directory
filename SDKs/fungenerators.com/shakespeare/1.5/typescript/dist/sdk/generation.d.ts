import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Generate random quotes, names, insults, lorem ipsum etc
 *
 * @see {@link http://fungenerators.com/api/shakespeare/} - Find out more
 */
export declare class Generation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate random Shakespeare style insults.
     */
    getShakespeareGenerateInsult(req: operations.GetShakespeareGenerateInsultRequest, security: operations.GetShakespeareGenerateInsultSecurity, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateInsultResponse>;
    /**
     * Generate Shakespeare lorem ipsum.
     */
    getShakespeareGenerateLoremIpsum(req: operations.GetShakespeareGenerateLoremIpsumRequest, security: operations.GetShakespeareGenerateLoremIpsumSecurity, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateLoremIpsumResponse>;
    /**
     * Generate random Shakespearen names.
     */
    getShakespeareGenerateName(req: operations.GetShakespeareGenerateNameRequest, security: operations.GetShakespeareGenerateNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateNameResponse>;
}
