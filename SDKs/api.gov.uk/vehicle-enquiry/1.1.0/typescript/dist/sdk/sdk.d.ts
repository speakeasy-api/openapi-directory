import { AxiosInstance } from "axios";
import { Vehicle } from "./vehicle";
export declare const ServerList: readonly ["https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry", "https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    vehicle: Vehicle;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
