import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Author {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAuthorIfNotExistsForUsingGet - this functions helps you to map your application author ids to Etherpad author ids
    **/
    createAuthorIfNotExistsForUsingGet(req: operations.CreateAuthorIfNotExistsForUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorIfNotExistsForUsingGetResponse>;
    /**
     * createAuthorIfNotExistsForUsingPost - this functions helps you to map your application author ids to Etherpad author ids
    **/
    createAuthorIfNotExistsForUsingPost(req: operations.CreateAuthorIfNotExistsForUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorIfNotExistsForUsingPostResponse>;
    /**
     * createAuthorUsingGet - creates a new author
    **/
    createAuthorUsingGet(req: operations.CreateAuthorUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorUsingGetResponse>;
    /**
     * createAuthorUsingPost - creates a new author
    **/
    createAuthorUsingPost(req: operations.CreateAuthorUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorUsingPostResponse>;
    /**
     * getAuthorNameUsingGet - Returns the Author Name of the author
    **/
    getAuthorNameUsingGet(req: operations.GetAuthorNameUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorNameUsingGetResponse>;
    /**
     * getAuthorNameUsingPost - Returns the Author Name of the author
    **/
    getAuthorNameUsingPost(req: operations.GetAuthorNameUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorNameUsingPostResponse>;
    /**
     * listPadsOfAuthorUsingGet - returns an array of all pads this author contributed to
    **/
    listPadsOfAuthorUsingGet(req: operations.ListPadsOfAuthorUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsOfAuthorUsingGetResponse>;
    /**
     * listPadsOfAuthorUsingPost - returns an array of all pads this author contributed to
    **/
    listPadsOfAuthorUsingPost(req: operations.ListPadsOfAuthorUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsOfAuthorUsingPostResponse>;
    /**
     * listSessionsOfAuthorUsingGet - returns all sessions of an author
    **/
    listSessionsOfAuthorUsingGet(req: operations.ListSessionsOfAuthorUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfAuthorUsingGetResponse>;
    /**
     * listSessionsOfAuthorUsingPost - returns all sessions of an author
    **/
    listSessionsOfAuthorUsingPost(req: operations.ListSessionsOfAuthorUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfAuthorUsingPostResponse>;
}
