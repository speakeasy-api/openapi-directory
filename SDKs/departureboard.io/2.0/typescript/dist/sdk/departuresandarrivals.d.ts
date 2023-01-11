import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DeparturesAndArrivals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getArrivalsAndDeparturesByCrs - getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
    **/
    getArrivalsAndDeparturesByCrs(req: operations.GetArrivalsAndDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsAndDeparturesByCrsResponse>;
    /**
     * getArrivalsByCrs - getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
    **/
    getArrivalsByCrs(req: operations.GetArrivalsByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsByCrsResponse>;
    /**
     * getDeparturesByCrs - getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
    **/
    getDeparturesByCrs(req: operations.GetDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeparturesByCrsResponse>;
}
