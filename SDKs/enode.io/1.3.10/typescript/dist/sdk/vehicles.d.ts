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
     * getVehicleChargestate - Get Vehicle Charge State
    **/
    getVehicleChargestate(req: operations.GetVehicleChargestateRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleChargestateResponse>;
    /**
     * getVehicles - List Vehicles
    **/
    getVehicles(req: operations.GetVehiclesRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesResponse>;
    /**
     * getVehiclesVehicleid - Get Vehicle
    **/
    getVehiclesVehicleid(req: operations.GetVehiclesVehicleidRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidResponse>;
    /**
     * getVehiclesVehicleidInformation - Get Vehicle Information
    **/
    getVehiclesVehicleidInformation(req: operations.GetVehiclesVehicleidInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidInformationResponse>;
    /**
     * getVehiclesVehicleidLocation - Get Vehicle Location
    **/
    getVehiclesVehicleidLocation(req: operations.GetVehiclesVehicleidLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidLocationResponse>;
    /**
     * getVehiclesVehicleidOdometer - Get Vehicle Odometer
    **/
    getVehiclesVehicleidOdometer(req: operations.GetVehiclesVehicleidOdometerRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidOdometerResponse>;
    /**
     * getVehiclesVehicleidSmartchargingpolicy - Get Vehicle Smart Charging Policy
    **/
    getVehiclesVehicleidSmartchargingpolicy(req: operations.GetVehiclesVehicleidSmartchargingpolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidSmartchargingpolicyResponse>;
    /**
     * postVehiclesVehicleidCharging - Start / Stop Charging
     *
     * Instruct the vehicle to start or stop charging.
     *
     * #### Precedence over smart charging
     * If the vehicle is at a charging location where smart charging is activated:
     * - a request to `start` charging will override smart charging and charging will stay on until fully charged.
     * - a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.
     *
     * The smart charging settings are not altered by these actions.
    **/
    postVehiclesVehicleidCharging(req: operations.PostVehiclesVehicleidChargingRequest, config?: AxiosRequestConfig): Promise<operations.PostVehiclesVehicleidChargingResponse>;
    /**
     * postVehiclesVehicleidWatch - Start Watching Vehicle
     *
     * Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.
     *
     * Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)
     *
     * The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.
     *
    **/
    postVehiclesVehicleidWatch(req: operations.PostVehiclesVehicleidWatchRequest, config?: AxiosRequestConfig): Promise<operations.PostVehiclesVehicleidWatchResponse>;
    /**
     * putVehiclesVehicleidSmartchargingpolicy - Update Vehicle Smart Charging Policy
     *
     * Updates the Smart Charging settings for a vehicle
    **/
    putVehiclesVehicleidSmartchargingpolicy(req: operations.PutVehiclesVehicleidSmartchargingpolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutVehiclesVehicleidSmartchargingpolicyResponse>;
}
