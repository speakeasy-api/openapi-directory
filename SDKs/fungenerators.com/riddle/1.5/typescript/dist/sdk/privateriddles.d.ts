import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Store and Retrive your Riddles
 *
 * @see {@link http://fungenerators.com/api/riddle} - Find out more
 */
export declare class PrivateRiddles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a random Riddle entry.
     */
    deleteRiddle(req: operations.DeleteRiddleRequest, security: operations.DeleteRiddleSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRiddleResponse>;
    /**
     * Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
     */
    getRiddle(req: operations.GetRiddleRequest, security: operations.GetRiddleSecurity, config?: AxiosRequestConfig): Promise<operations.GetRiddleResponse>;
    /**
     * Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
     */
    postRiddle(req: operations.PostRiddleRequest, security: operations.PostRiddleSecurity, config?: AxiosRequestConfig): Promise<operations.PostRiddleResponse>;
    /**
     * Create a random Riddle entry.
     */
    putRiddle(req: operations.PutRiddleRequest, security: operations.PutRiddleSecurity, config?: AxiosRequestConfig): Promise<operations.PutRiddleResponse>;
}
