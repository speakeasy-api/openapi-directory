import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Vehicles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVehicle - Get a vehicle's data
    **/
    getVehicle(req: operations.GetVehicleRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleResponse>;
    /**
     * getVehicleBattery - Get a vehicle's battery
    **/
    getVehicleBattery(req: operations.GetVehicleBatteryRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleBatteryResponse>;
    /**
     * getVehicleCharge - Get a vehicle's charge
    **/
    getVehicleCharge(req: operations.GetVehicleChargeRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleChargeResponse>;
    /**
     * getVehicleLocation - Get a vehicle's location
    **/
    getVehicleLocation(req: operations.GetVehicleLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleLocationResponse>;
    /**
     * getVehicleOdometer - Get a vehicle's odometer
    **/
    getVehicleOdometer(req: operations.GetVehicleOdometerRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleOdometerResponse>;
    /**
     * getVehicles - List all vehicles
    **/
    getVehicles(req: operations.GetVehiclesRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesResponse>;
    /**
     * postCharge - Change charge
    **/
    postCharge(req: operations.PostChargeRequest, config?: AxiosRequestConfig): Promise<operations.PostChargeResponse>;
}
