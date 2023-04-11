import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Simple Yes-No Vote' entry type
 */
export declare class TypeVoteYesno {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Simple Yes-No Vote' entry type
     *
     * @remarks
     * API to search for entries of type Simple Yes-No Vote
     */
    searchVoteYesno(req: operations.SearchVoteYesnoRequest, config?: AxiosRequestConfig): Promise<operations.SearchVoteYesnoResponse>;
}
