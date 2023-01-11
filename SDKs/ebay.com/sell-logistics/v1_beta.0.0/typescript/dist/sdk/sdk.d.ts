import { AxiosInstance } from "axios";
import { Shipment } from "./shipment";
import { ShippingQuote } from "./shippingquote";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    shipment: Shipment;
    shippingQuote: ShippingQuote;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
