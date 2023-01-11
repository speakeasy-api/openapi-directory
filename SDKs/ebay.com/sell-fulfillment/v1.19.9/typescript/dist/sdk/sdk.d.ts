import { AxiosInstance } from "axios";
import { Order } from "./order";
import { PaymentDispute } from "./paymentdispute";
import { ShippingFulfillment } from "./shippingfulfillment";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}", "https://apiz.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    order: Order;
    paymentDispute: PaymentDispute;
    shippingFulfillment: ShippingFulfillment;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
