import { Vehicle } from "./vehicle";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry", "https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Interface specification for the DVLA Vehicle Enquiry API
 */
export declare class SDK {
    vehicle: Vehicle;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
