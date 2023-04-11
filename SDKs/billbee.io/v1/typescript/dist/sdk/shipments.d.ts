import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Shipments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of all shipments optionally filtered by date. All parameters are optional.
     */
    shipmentGetList(req: operations.ShipmentGetListRequest, config?: AxiosRequestConfig): Promise<operations.ShipmentGetListResponse>;
    shipmentGetPing(config?: AxiosRequestConfig): Promise<operations.ShipmentGetPingResponse>;
    /**
     * Queries the currently available shipping carriers.
     */
    shipmentGetShippingCarrier(config?: AxiosRequestConfig): Promise<operations.ShipmentGetShippingCarrierResponse>;
    /**
     * Query all defined shipping providers
     */
    shipmentGetShippingproviders(config?: AxiosRequestConfig): Promise<operations.ShipmentGetShippingprovidersResponse>;
    /**
     * Creates a new shipment with the selected Shippingprovider
     */
    shipmentPostShipmentForm(req: shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput, config?: AxiosRequestConfig): Promise<operations.ShipmentPostShipmentFormResponse>;
    /**
     * Creates a new shipment with the selected Shippingprovider
     */
    shipmentPostShipmentJson(req: shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput, config?: AxiosRequestConfig): Promise<operations.ShipmentPostShipmentJsonResponse>;
    /**
     * Creates a new shipment with the selected Shippingprovider
     */
    shipmentPostShipmentRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ShipmentPostShipmentRawResponse>;
    /**
     * Creates a shipment for an order in billbee
     */
    shipmentShipWithLabelForm(req: shared.RechnungsdruckWebAppControllersApiShipmentWithLabel, config?: AxiosRequestConfig): Promise<operations.ShipmentShipWithLabelFormResponse>;
    /**
     * Creates a shipment for an order in billbee
     */
    shipmentShipWithLabelJson(req: shared.RechnungsdruckWebAppControllersApiShipmentWithLabel, config?: AxiosRequestConfig): Promise<operations.ShipmentShipWithLabelJsonResponse>;
    /**
     * Creates a shipment for an order in billbee
     */
    shipmentShipWithLabelRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ShipmentShipWithLabelRawResponse>;
}
