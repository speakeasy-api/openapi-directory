import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Author {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * this functions helps you to map your application author ids to Etherpad author ids
     */
    createAuthorIfNotExistsForUsingGET(req: operations.CreateAuthorIfNotExistsForUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorIfNotExistsForUsingGETResponse>;
    /**
     * this functions helps you to map your application author ids to Etherpad author ids
     */
    createAuthorIfNotExistsForUsingPOST(req: operations.CreateAuthorIfNotExistsForUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorIfNotExistsForUsingPOSTResponse>;
    /**
     * creates a new author
     */
    createAuthorUsingGET(req: operations.CreateAuthorUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorUsingGETResponse>;
    /**
     * creates a new author
     */
    createAuthorUsingPOST(req: operations.CreateAuthorUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorUsingPOSTResponse>;
    /**
     * Returns the Author Name of the author
     */
    getAuthorNameUsingGET(req: operations.GETAuthorNameUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorNameUsingGETResponse>;
    /**
     * Returns the Author Name of the author
     */
    getAuthorNameUsingPOST(req: operations.GetAuthorNameUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorNameUsingPOSTResponse>;
    /**
     * returns an array of all pads this author contributed to
     */
    listPadsOfAuthorUsingGET(req: operations.ListPadsOfAuthorUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsOfAuthorUsingGETResponse>;
    /**
     * returns an array of all pads this author contributed to
     */
    listPadsOfAuthorUsingPOST(req: operations.ListPadsOfAuthorUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsOfAuthorUsingPOSTResponse>;
    /**
     * returns all sessions of an author
     */
    listSessionsOfAuthorUsingGET(req: operations.ListSessionsOfAuthorUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfAuthorUsingGETResponse>;
    /**
     * returns all sessions of an author
     */
    listSessionsOfAuthorUsingPOST(req: operations.ListSessionsOfAuthorUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfAuthorUsingPOSTResponse>;
}
