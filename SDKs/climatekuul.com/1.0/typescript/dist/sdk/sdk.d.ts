import { AirtravelCoordinates } from "./airtravelcoordinates";
import { AirtravelMultileg } from "./airtravelmultileg";
import { EcommerceDelivery } from "./ecommercedelivery";
import { RequestApiKey } from "./requestapikey";
import { RoadDistance } from "./roaddistance";
import { UrbanDelivery } from "./urbandelivery";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
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
export declare class SDK {
    airtravelCoordinates: AirtravelCoordinates;
    ecommerceDelivery: EcommerceDelivery;
    requestApiKey: RequestApiKey;
    roadDistance: RoadDistance;
    urbanDelivery: UrbanDelivery;
    airtravelMultileg: AirtravelMultileg;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
