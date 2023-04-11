import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Boulder Consulting Services Database' entry type
 */
export declare class TypeBoulderConsultingServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Boulder Consulting Services Database' entry type
     *
     * @remarks
     * API to search for entries of type Boulder Consulting Services Database
     */
    searchBoulderConsultingServices(req: operations.SearchBoulderConsultingServicesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderConsultingServicesResponse>;
}
