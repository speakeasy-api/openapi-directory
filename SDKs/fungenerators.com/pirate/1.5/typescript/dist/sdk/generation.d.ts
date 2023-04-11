import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Generate names, insults, lorem ipsum etc
 *
 * @see {@link http://fungenerators.com/api/pirate/} - Find out more
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
     * Generate random pirate insults.
     */
    getPirateGenerateInsult(req: operations.GetPirateGenerateInsultRequest, security: operations.GetPirateGenerateInsultSecurity, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateInsultResponse>;
    /**
     * Generate pirate lorem ipsum.
     */
    getPirateGenerateLoremIpsum(req: operations.GetPirateGenerateLoremIpsumRequest, security: operations.GetPirateGenerateLoremIpsumSecurity, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateLoremIpsumResponse>;
    /**
     * Generate random pirate names.
     */
    getPirateGenerateName(req: operations.GetPirateGenerateNameRequest, security: operations.GetPirateGenerateNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateNameResponse>;
}
