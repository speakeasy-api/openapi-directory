import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Shopping {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFlightOffers - Return list of Flight Offers based on searching criteria.
    **/
    getFlightOffers(req: operations.GetFlightOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetFlightOffersResponse>;
    /**
     * searchFlightOffers - Return list of Flight Offers based on posted searching criteria.
    **/
    searchFlightOffers(req: operations.SearchFlightOffersRequest, config?: AxiosRequestConfig): Promise<operations.SearchFlightOffersResponse>;
}
