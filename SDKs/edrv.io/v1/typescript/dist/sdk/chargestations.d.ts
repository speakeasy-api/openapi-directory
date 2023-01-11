import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChargeStations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteChargeStation - Use to delete a charge station
    **/
    deleteChargeStation(req: operations.DeleteChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChargeStationResponse>;
    /**
     * getChargeStation - Get a single charge station's data
    **/
    getChargeStation(req: operations.GetChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationResponse>;
    /**
     * getChargeStationConnectors - List connectors for a chargestation
    **/
    getChargeStationConnectors(req: operations.GetChargeStationConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationConnectorsResponse>;
    /**
     * getChargeStations - List all Chargestations
    **/
    getChargeStations(req: operations.GetChargeStationsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationsResponse>;
    /**
     * patchChargeStation - Update a charge station's data
    **/
    patchChargeStation(req: operations.PatchChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.PatchChargeStationResponse>;
    /**
     * postChargeStations - Create a new charge station
    **/
    postChargeStations(req: operations.PostChargeStationsRequest, config?: AxiosRequestConfig): Promise<operations.PostChargeStationsResponse>;
}
