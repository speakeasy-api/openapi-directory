import { AxiosInstance } from "axios";
import { AirtravelCoordinates } from "./airtravelcoordinates";
import { EcommerceDelivery } from "./ecommercedelivery";
import { RequestApiKey } from "./requestapikey";
import { RoadDistance } from "./roaddistance";
import { UrbanDelivery } from "./urbandelivery";
import { AirtravelMultileg } from "./airtravelmultileg";
export declare const ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
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
    constructor(props: SDKProps);
}
