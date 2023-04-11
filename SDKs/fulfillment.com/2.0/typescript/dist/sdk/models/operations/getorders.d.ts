import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrdersSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare class GetOrdersRequest extends SpeakeasyBase {
    /**
     * Date-time in ISO 8601 format for selecting orders after, or at, the specified time
     */
    fromDate: string;
    /**
     * Adds additional information to the response, uses a CSV format for multiple values.'
     */
    hydrate?: shared.HydrateParamEnum[];
    /**
     * The numbers of items to return
     */
    limit?: number;
    /**
     * A CSV of merchant id, '123' or '1,2,3'
     */
    merchantIds?: number[];
    /**
     * A multiplier of the number of items (limit parameter) to skip before returning results
     */
    page?: number;
    /**
     * Date-time in ISO 8601 format for selecting orders before, or at, the specified time
     */
    toDate: string;
    /**
     * A CSV of warehouse id, '123' or '1,2,3'
     */
    warehouseIds?: number[];
}
/**
 * No Orders Found
 */
export declare class GetOrdersErrorStandardV2 extends SpeakeasyBase {
    message?: string;
}
/**
 * Responsibility for resolving this issue
 */
export declare class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    /**
     * Human readable description of responsible party to resolve the issue
     */
    name?: string;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
    /**
     * Responsibility for resolving this issue
     */
    actionRequiredBy?: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
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
    stage: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage;
    state: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2 extends SpeakeasyBase {
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
    status?: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails extends SpeakeasyBase {
    expirationDate?: Date;
    lotNum?: string;
    quantity?: number;
    serialNum?: string;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails extends SpeakeasyBase {
    description?: string;
    externalSku?: string;
    id?: number;
    name?: string;
    totalQuantity?: number;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData extends SpeakeasyBase {
    declaredValue?: string;
    id?: number;
    quantity?: number;
    sku?: string;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2 extends SpeakeasyBase {
    id?: number;
    inventoryDetails?: GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails[];
    lineDetails?: GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails;
    requestedSkuData?: GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2MerchantV2 extends SpeakeasyBase {
    id: number;
    /**
     * Merchant Company Name
     */
    name: string;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
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
export declare class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
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
    iso?: GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    /**
     * Postal Code / Zip
     */
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2ParentOrder extends SpeakeasyBase {
    /**
     * Reference to parent `id` if order was grouped
     */
    id?: number;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2 extends SpeakeasyBase {
    canReprintPostage?: boolean;
    enabled?: boolean;
    id: number;
    includePeripherals?: boolean;
    internalRatesOnly?: boolean;
    name: string;
    requiresDimensions?: boolean;
    symbol: string;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers extends SpeakeasyBase {
    carrier?: GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2;
}
export declare class GetOrders200ApplicationJSONOrderResponseV2WarehouseV2 extends SpeakeasyBase {
    id: number;
}
/**
 * Requires hydrate to be set in the request and the corresponding node will be filled.
 */
export declare class GetOrders200ApplicationJSONOrderResponseV2 extends SpeakeasyBase {
    currentStatus: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2;
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
    lineItems?: GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2[];
    merchant: GetOrders200ApplicationJSONOrderResponseV2MerchantV2;
    /**
     * Merchant provided ID
     */
    merchantOrderId: string;
    /**
     * Requested ship method
     */
    merchantShippingMethod: string;
    originalConsignee: GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2;
    parentOrder?: GetOrders200ApplicationJSONOrderResponseV2ParentOrder;
    /**
     * Merchant provided PO#
     */
    purchaseOrderNum?: string;
    /**
     * DateTime order was recorded by FDC
     */
    recordedOn: Date;
    trackingNumbers?: GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers[];
    validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: GetOrders200ApplicationJSONOrderResponseV2WarehouseV2;
}
export declare class GetOrdersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No Orders Found
     */
    errorStandardV2?: GetOrdersErrorStandardV2;
    /**
     * OK
     */
    orderResponseOneOfV2?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
