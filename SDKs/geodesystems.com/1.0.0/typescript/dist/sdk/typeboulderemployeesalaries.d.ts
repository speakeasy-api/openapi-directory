import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Boulder Employee Salaries' entry type
 */
export declare class TypeBoulderEmployeeSalaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Boulder Employee Salaries' entry type
     *
     * @remarks
     * API to search for entries of type Boulder Employee Salaries
     */
    searchBoulderEmployeeSalaries(req: operations.SearchBoulderEmployeeSalariesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderEmployeeSalariesResponse>;
}
