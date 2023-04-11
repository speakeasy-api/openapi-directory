import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    /**
     * Adds additional information to the response, uses a CSV format for multiple values.'
     */
    hydrate?: shared.HydrateParamEnum[];
    /**
     * The FDC order Id
     */
    id: string;
    /**
     * Providing your `merchantId` indicates the `id` is your `merchantOrderId`. Although it is not necessary to provide this it will speed up your results when using your `merchantOrderId` however it will slow your results when using the FDC provided `id`
     */
    merchantId?: number;
}
/**
 * Responsibility for resolving this issue
 */
export declare class GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    /**
     * Human readable description of responsible party to resolve the issue
     */
    name?: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
    /**
     * Responsibility for resolving this issue
     */
    actionRequiredBy?: GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
    /**
     * Code, see [status codes](#section/Getting-Started/Status-Codes)
     */
    code: string;
    detail?: string;
    detailCode: string;
    /**
     * Depricated, use code instead
     */
    id?: number;
    /**
     * Depricated, does this status event close the order
     */
    isClosed?: boolean;
    /**
     * Depricated, use stage/state instead
     */
    name?: string;
    /**
     * Depricated
     */
    reason?: string;
    stage: GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage;
    state: GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2StatusEventV2 extends SpeakeasyBase {
    createdBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    /**
     * DateTime of Status Event
     */
    date?: Date;
    id: number;
    /**
     * Explanation for status
     */
    reason?: string;
    status?: GetOrder200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails extends SpeakeasyBase {
    expirationDate?: Date;
    lotNum?: string;
    quantity?: number;
    serialNum?: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails extends SpeakeasyBase {
    description?: string;
    externalSku?: string;
    id?: number;
    name?: string;
    totalQuantity?: number;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData extends SpeakeasyBase {
    declaredValue?: string;
    id?: number;
    quantity?: number;
    sku?: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2 extends SpeakeasyBase {
    id?: number;
    inventoryDetails?: GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails[];
    lineDetails?: GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails;
    requestedSkuData?: GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2MerchantV2 extends SpeakeasyBase {
    id: number;
    /**
     * Merchant Company Name
     */
    name: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
    id?: number;
    /**
     * Two character ISO code
     */
    iso2?: string;
    /**
     * Country Name
     */
    name?: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    /**
     * City
     */
    addressLocality: string;
    /**
     * Province / State
     */
    addressRegion: string;
    companyName?: string;
    /**
     * Ideally provide the two character ISO code
     */
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    /**
     * Postal Code / Zip
     */
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2ParentOrder extends SpeakeasyBase {
    /**
     * Reference to parent `id` if order was grouped
     */
    id?: number;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 extends SpeakeasyBase {
    canReprintPostage?: boolean;
    enabled?: boolean;
    id: number;
    includePeripherals?: boolean;
    internalRatesOnly?: boolean;
    name: string;
    requiresDimensions?: boolean;
    symbol: string;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2TrackingNumbers extends SpeakeasyBase {
    carrier?: GetOrder200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2;
}
export declare class GetOrder200ApplicationJSONOrderResponseV2WarehouseV2 extends SpeakeasyBase {
    id: number;
}
/**
 * Requires hydrate to be set in the request and the corresponding node will be filled.
 */
export declare class GetOrder200ApplicationJSONOrderResponseV2 extends SpeakeasyBase {
    currentStatus: GetOrder200ApplicationJSONOrderResponseV2StatusEventV2;
    /**
     * DateTime order departed an FDC warehouse
     */
    departDate?: Date;
    /**
     * DateTime order was dispatched for fulfillment by FDC
     */
    dispatchDate?: Date;
    /**
     * FDC ID for this order
     */
    id: number;
    integrator?: string;
    lineItems?: GetOrder200ApplicationJSONOrderResponseV2LineItemsResponseV2[];
    merchant: GetOrder200ApplicationJSONOrderResponseV2MerchantV2;
    /**
     * Merchant provided ID
     */
    merchantOrderId: string;
    /**
     * Requested ship method
     */
    merchantShippingMethod: string;
    originalConsignee: GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2;
    parentOrder?: GetOrder200ApplicationJSONOrderResponseV2ParentOrder;
    /**
     * Merchant provided PO#
     */
    purchaseOrderNum?: string;
    /**
     * DateTime order was recorded by FDC
     */
    recordedOn: Date;
    trackingNumbers?: GetOrder200ApplicationJSONOrderResponseV2TrackingNumbers[];
    validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: GetOrder200ApplicationJSONOrderResponseV2WarehouseV2;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Order Found
     */
    oneordersGetResponses200ContentApplication1jsonSchema?: any;
}
