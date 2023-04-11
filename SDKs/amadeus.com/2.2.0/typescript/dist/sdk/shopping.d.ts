import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Shopping {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return list of Flight Offers based on searching criteria.
     */
    getFlightOffers(req: operations.GetFlightOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetFlightOffersResponse>;
    /**
     * Return list of Flight Offers based on posted searching criteria.
     */
    searchFlightOffers(req: operations.SearchFlightOffersRequest, config?: AxiosRequestConfig): Promise<operations.SearchFlightOffersResponse>;
}
