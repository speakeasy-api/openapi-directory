import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DeparturesAndArrivals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
     */
    getArrivalsAndDeparturesByCRS(req: operations.GetArrivalsAndDeparturesByCRSRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsAndDeparturesByCRSResponse>;
    /**
     * getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
     */
    getArrivalsByCRS(req: operations.GetArrivalsByCRSRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsByCRSResponse>;
    /**
     * getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
     */
    getDeparturesByCRS(req: operations.GetDeparturesByCRSRequest, config?: AxiosRequestConfig): Promise<operations.GetDeparturesByCRSResponse>;
}
