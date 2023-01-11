import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reservations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReservation - Get one reservation data
    **/
    getReservation(req: operations.GetReservationRequest, config?: AxiosRequestConfig): Promise<operations.GetReservationResponse>;
    /**
     * getReservations - Get Reservations data
    **/
    getReservations(req: operations.GetReservationsRequest, config?: AxiosRequestConfig): Promise<operations.GetReservationsResponse>;
    /**
     * updatereservation - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    updatereservation(req: operations.UpdatereservationRequest, config?: AxiosRequestConfig): Promise<operations.UpdatereservationResponse>;
}
