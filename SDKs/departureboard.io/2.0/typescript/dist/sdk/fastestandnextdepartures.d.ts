import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FastestAndNextDepartures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFastestDeparturesByCrs - getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
    **/
    getFastestDeparturesByCrs(req: operations.GetFastestDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetFastestDeparturesByCrsResponse>;
    /**
     * getNextDeparturesByCrs - getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.
    **/
    getNextDeparturesByCrs(req: operations.GetNextDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetNextDeparturesByCrsResponse>;
}
