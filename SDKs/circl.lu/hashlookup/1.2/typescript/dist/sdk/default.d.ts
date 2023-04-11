import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Default namespace
 */
export declare class Default {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
     */
    getChildren(req: operations.GetChildrenRequest, config?: AxiosRequestConfig): Promise<operations.GetChildrenResponse>;
    /**
     * Info about the hashlookup database
     */
    getInfo(config?: AxiosRequestConfig): Promise<operations.GetInfoResponse>;
    /**
     * Lookup MD5.
     */
    getLookupMd5(req: operations.GetLookupMd5Request, config?: AxiosRequestConfig): Promise<operations.GetLookupMd5Response>;
    /**
     * Lookup SHA-1.
     */
    getLookupSha1(req: operations.GetLookupSha1Request, config?: AxiosRequestConfig): Promise<operations.GetLookupSha1Response>;
    /**
     * Lookup SHA-256.
     */
    getLookupSha256(req: operations.GetLookupSha256Request, config?: AxiosRequestConfig): Promise<operations.GetLookupSha256Response>;
    /**
     * Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
     */
    getParents(req: operations.GetParentsRequest, config?: AxiosRequestConfig): Promise<operations.GetParentsResponse>;
    /**
     * Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
     */
    getSessionCreate(req: operations.GetSessionCreateRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionCreateResponse>;
    /**
     * Return set of matching and non-matching hashes from a session.
     */
    getSessionMatches(req: operations.GetSessionMatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionMatchesResponse>;
    /**
     * Return the top 100 of most queried values.
     */
    getStattop(config?: AxiosRequestConfig): Promise<operations.GetStattopResponse>;
    /**
     * Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
     */
    postBulkmd5(config?: AxiosRequestConfig): Promise<operations.PostBulkmd5Response>;
    /**
     * Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
     */
    postBulksha1(config?: AxiosRequestConfig): Promise<operations.PostBulksha1Response>;
}
