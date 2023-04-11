import { CloudStorage } from "./cloudstorage";
import { CustomerAddresses } from "./customeraddresses";
import { Customers } from "./customers";
import { DeliveryNote } from "./deliverynote";
import { EnumApi } from "./enumapi";
import { Events } from "./events";
import { Invoice } from "./invoice";
import { Orders } from "./orders";
import { Products } from "./products";
import { Provisioning } from "./provisioning";
import { Shipments } from "./shipments";
import { Webhooks } from "./webhooks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://app.billbee.io"];
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
 * Documentation of the Billbee REST API to connect a Billbee account to external aplications.
 *
 * @remarks
 *
 * ## Endpoint
 *
 * The Billbee API endpoint base url is https://api.billbee.io/api/v1
 *
 * ## Activation
 *
 * You have to enable the API in the settings of your Billbee account. In addition you need a Billbee API Key identifying the application you develop. To get an API key, send a mail to support@billbee.io and send us a short note about what you are building.
 *
 * ## Authorization & security
 *
 * Because you can access private data with the Billbee API, every request has to be sent over https and must
 *
 * * Contain a valid API Key identifying the application/developer. It has to be sent as the HTTP header X-Billbee-Api-Key
 * * Contain a valid user login with billbee username and api password in form of a basic auth HTTP header
 *
 * ## Throttling
 *
 * Each endpoint has a throttle of max 2 requests per second per combination of API Key and Billbee user.
 *
 * When you exceed these 2 calls, the API will return a HTTP 429 status code
 *
 *
 */
export declare class SDK {
    cloudStorage: CloudStorage;
    customerAddresses: CustomerAddresses;
    customers: Customers;
    deliveryNote: DeliveryNote;
    enumApi: EnumApi;
    events: Events;
    invoice: Invoice;
    orders: Orders;
    products: Products;
    provisioning: Provisioning;
    shipments: Shipments;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
