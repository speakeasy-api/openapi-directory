import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Store and manage your own Facts online
 *
 * @see {@link http://fungenerators.com/api/facts#private} - Find out more
 */
export declare class PrivateFacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Fact entry identified by the id.
     */
    deleteFact(req: operations.DeleteFactRequest, security: operations.DeleteFactSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFactResponse>;
    /**
     * Get a Fact belonging to the id.
     */
    getFact(req: operations.GetFactRequest, security: operations.GetFactSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactResponse>;
    /**
     * Add a Fact entry to the database (private collection).
     */
    putFact(req: operations.PutFactRequest, security: operations.PutFactSecurity, config?: AxiosRequestConfig): Promise<operations.PutFactResponse>;
}
