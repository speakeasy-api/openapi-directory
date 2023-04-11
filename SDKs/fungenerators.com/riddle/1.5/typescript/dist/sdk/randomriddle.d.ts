import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Generate Random Riddles
 *
 * @see {@link http://fungenerators.com/api/riddle} - Find out more
 */
export declare class RandomRiddle {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a random riddle for a given category(optional)
     */
    getRiddleRandom(req: operations.GetRiddleRandomRequest, security: operations.GetRiddleRandomSecurity, config?: AxiosRequestConfig): Promise<operations.GetRiddleRandomResponse>;
    /**
     * Search for random riddle which has the text in the query, for a given category(optional).
     */
    getRiddleSearch(req: operations.GetRiddleSearchRequest, security: operations.GetRiddleSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetRiddleSearchResponse>;
}
