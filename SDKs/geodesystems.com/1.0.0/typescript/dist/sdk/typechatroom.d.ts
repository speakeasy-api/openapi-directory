import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Chat Room' entry type
 */
export declare class TypeChatroom {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Chat Room' entry type
     *
     * @remarks
     * API to search for entries of type Chat Room
     */
    searchChatroom(req: operations.SearchChatroomRequest, config?: AxiosRequestConfig): Promise<operations.SearchChatroomResponse>;
}
