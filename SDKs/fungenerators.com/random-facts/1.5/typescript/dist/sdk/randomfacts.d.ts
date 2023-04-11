import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get random facts based on category and other criteria.
 *
 * @see {@link http://fungenerators.com/api/facts#number} - Find out more
 */
export declare class RandomFacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a Fact belonging to the id.
     */
    getFact(req: operations.GetFactRequest, security: operations.GetFactSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactResponse>;
    /**
     * Get a random Fact.
     */
    getFactCategories(req: operations.GetFactCategoriesRequest, security: operations.GetFactCategoriesSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactCategoriesResponse>;
    /**
     * Get a random Fact for a given category(optional) and subcategory(optional).
     */
    getFactRandom(req: operations.GetFactRandomRequest, security: operations.GetFactRandomSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactRandomResponse>;
    /**
     * Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).
     */
    getFactSearch(req: operations.GetFactSearchRequest, security: operations.GetFactSearchSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactSearchResponse>;
}
