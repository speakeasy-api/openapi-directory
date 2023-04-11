import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChargeStations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Use to delete a charge station
     */
    deleteChargeStation(req: operations.DeleteChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChargeStationResponse>;
    /**
     * Get a single charge station's data
     */
    getChargeStation(req: operations.GetChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationResponse>;
    /**
     * List connectors for a chargestation
     */
    getChargeStationConnectors(req: operations.GetChargeStationConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationConnectorsResponse>;
    /**
     * List all Chargestations
     */
    getChargeStations(req: operations.GetChargeStationsRequest, config?: AxiosRequestConfig): Promise<operations.GetChargeStationsResponse>;
    /**
     * Update a charge station's data
     */
    patchChargeStation(req: operations.PatchChargeStationRequest, config?: AxiosRequestConfig): Promise<operations.PatchChargeStationResponse>;
    /**
     * Create a new charge station
     */
    postChargeStations(req: shared.Schema1, config?: AxiosRequestConfig): Promise<operations.PostChargeStationsResponse>;
}
