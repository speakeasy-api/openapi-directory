import { SpeakeasyBase } from "../../../internal/utils";
import { OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee } from "./oneorderspostresponses201contentapplication1jsonschemapropertiesoriginalconsignee";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
/**
 * Responsibility for resolving this issue
 */
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    /**
     * Human readable description of responsible party to resolve the issue
     */
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 extends SpeakeasyBase {
    /**
     * Responsibility for resolving this issue
     */
    actionRequiredBy?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy;
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
    stage: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage;
    state: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 extends SpeakeasyBase {
    createdBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    /**
     * DateTime of Status Event
     */
    date?: Date;
    id: number;
    /**
     * Explanation for status
     */
    reason?: string;
    status?: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 extends SpeakeasyBase {
    id: number;
    /**
     * Merchant Company Name
     */
    name: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 extends SpeakeasyBase {
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
export declare class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 extends SpeakeasyBase {
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
    iso?: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    /**
     * Postal Code / Zip
     */
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder extends SpeakeasyBase {
    /**
     * Reference to parent `id` if order was grouped
     */
    id?: number;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
    id: number;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 extends SpeakeasyBase {
    /**
     * The computer readable alternative to the human readable
     */
    barcodeScanValue?: string;
    carrier?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2;
    /**
     * The human readable tracking number recipients (consignee) expect
     */
    value?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 extends SpeakeasyBase {
    id: number;
}
/**
 * Standard Order Response or a Hydrated Response
 */
export declare class OneordersPostResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
    currentStatus: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2;
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
    merchant: OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2;
    /**
     * Merchant provided ID
     */
    merchantOrderId: string;
    /**
     * Requested ship method
     */
    merchantShippingMethod: string;
    originalConsignee: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2;
    parentOrder?: OneordersPostResponses201ContentApplication1jsonSchemaParentOrder;
    /**
     * Merchant provided PO#
     */
    purchaseOrderNum?: string;
    /**
     * DateTime order was recorded by FDC
     */
    recordedOn: Date;
    trackingNumbers?: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2[];
    validatedConsignee: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2;
}
