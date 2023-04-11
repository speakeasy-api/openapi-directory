import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Ufo Sightings' entry type
 */
export declare class TypeUfoSightings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Ufo Sightings' entry type
     *
     * @remarks
     * API to search for entries of type Ufo Sightings
     */
    searchUfoSightings(req: operations.SearchUfoSightingsRequest, config?: AxiosRequestConfig): Promise<operations.SearchUfoSightingsResponse>;
}
