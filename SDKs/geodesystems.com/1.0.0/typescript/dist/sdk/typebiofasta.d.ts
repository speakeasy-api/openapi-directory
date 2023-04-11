import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'FASTA File' entry type
 */
export declare class TypeBioFasta {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'FASTA File' entry type
     *
     * @remarks
     * API to search for entries of type FASTA File
     */
    searchBioFasta(req: operations.SearchBioFastaRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioFastaResponse>;
}
