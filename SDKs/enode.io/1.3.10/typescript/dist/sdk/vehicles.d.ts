import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Vehicles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Vehicle Charge State
     */
    getVehicleChargestate(req: operations.GetVehicleChargestateRequest, security: operations.GetVehicleChargestateSecurity, config?: AxiosRequestConfig): Promise<operations.GetVehicleChargestateResponse>;
    /**
     * List Vehicles
     */
    getVehicles(req: operations.GetVehiclesRequest, security: operations.GetVehiclesSecurity, config?: AxiosRequestConfig): Promise<operations.GetVehiclesResponse>;
    /**
     * Get Vehicle
     */
    getVehiclesVehicleid(req: operations.GetVehiclesVehicleidRequest, security: operations.GetVehiclesVehicleidSecurity, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidResponse>;
    /**
     * Get Vehicle Information
     */
    getVehiclesVehicleidInformation(req: operations.GetVehiclesVehicleidInformationRequest, security: operations.GetVehiclesVehicleidInformationSecurity, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidInformationResponse>;
    /**
     * Get Vehicle Location
     */
    getVehiclesVehicleidLocation(req: operations.GetVehiclesVehicleidLocationRequest, security: operations.GetVehiclesVehicleidLocationSecurity, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidLocationResponse>;
    /**
     * Get Vehicle Odometer
     */
    getVehiclesVehicleidOdometer(req: operations.GetVehiclesVehicleidOdometerRequest, security: operations.GetVehiclesVehicleidOdometerSecurity, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidOdometerResponse>;
    /**
     * Get Vehicle Smart Charging Policy
     */
    getVehiclesVehicleidSmartchargingpolicy(req: operations.GetVehiclesVehicleidSmartchargingpolicyRequest, security: operations.GetVehiclesVehicleidSmartchargingpolicySecurity, config?: AxiosRequestConfig): Promise<operations.GetVehiclesVehicleidSmartchargingpolicyResponse>;
    /**
     * Start / Stop Charging
     *
     * @remarks
     * Instruct the vehicle to start or stop charging.
     *
     * #### Precedence over smart charging
     * If the vehicle is at a charging location where smart charging is activated:
     * - a request to `start` charging will override smart charging and charging will stay on until fully charged.
     * - a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.
     *
     * The smart charging settings are not altered by these actions.
     */
    postVehiclesVehicleidCharging(req: operations.PostVehiclesVehicleidChargingRequest, security: operations.PostVehiclesVehicleidChargingSecurity, config?: AxiosRequestConfig): Promise<operations.PostVehiclesVehicleidChargingResponse>;
    /**
     * Start Watching Vehicle
     *
     * @remarks
     * Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.
     *
     * Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)
     *
     * The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.
     *
     */
    postVehiclesVehicleidWatch(req: operations.PostVehiclesVehicleidWatchRequest, security: operations.PostVehiclesVehicleidWatchSecurity, config?: AxiosRequestConfig): Promise<operations.PostVehiclesVehicleidWatchResponse>;
    /**
     * Update Vehicle Smart Charging Policy
     *
     * @remarks
     * Updates the Smart Charging settings for a vehicle
     */
    putVehiclesVehicleidSmartchargingpolicy(req: operations.PutVehiclesVehicleidSmartchargingpolicyRequest, security: operations.PutVehiclesVehicleidSmartchargingpolicySecurity, config?: AxiosRequestConfig): Promise<operations.PutVehiclesVehicleidSmartchargingpolicyResponse>;
}
