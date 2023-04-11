import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for '2017 Boulder Election Expenditures' entry type
 */
export declare class Type2017BoulderElectionExpenditures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for '2017 Boulder Election Expenditures' entry type
     *
     * @remarks
     * API to search for entries of type 2017 Boulder Election Expenditures
     */
    search2017BoulderElectionExpenditures(req: operations.Search2017BoulderElectionExpendituresRequest, config?: AxiosRequestConfig): Promise<operations.Search2017BoulderElectionExpendituresResponse>;
}
