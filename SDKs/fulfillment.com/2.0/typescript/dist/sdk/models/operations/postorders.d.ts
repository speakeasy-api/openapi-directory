import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOrdersSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
/**
 * Use of this property requires special permission and must be discussed with your account executive; values are restricted while custom values need to be accepted by your AE.
 */
export declare enum PostOrdersOrderRequestV2IntegratorEnum {
    OneShoppingCart = "1ShoppingCart",
    ThreedCart = "3dCart",
    AdobeBC = "AdobeBC",
    AmazonAU = "AmazonAU",
    AmazonEU = "AmazonEU",
    AmazonNA = "AmazonNA",
    BigCommerce = "BigCommerce",
    BrandBoom = "BrandBoom",
    BrightPearl = "BrightPearl",
    BuyGoods = "BuyGoods",
    Celery = "Celery",
    ChannelAdvisor = "ChannelAdvisor",
    Clickbank = "Clickbank",
    CommerceHub = "CommerceHub",
    Custom = "Custom",
    Demandware = "Demandware",
    Ebay = "Ebay",
    Ecwid = "Ecwid",
    Etsy = "Etsy",
    FoxyCart = "FoxyCart",
    Goodsie = "Goodsie",
    Infusionsoft = "Infusionsoft",
    Konnektive = "Konnektive",
    LimeLight = "LimeLight",
    Linio = "Linio",
    Linnworks = "Linnworks",
    Magento = "Magento",
    Netsuite = "Netsuite",
    NewEgg = "NewEgg",
    Nexternal = "Nexternal",
    NuOrder = "NuOrder",
    Opencart = "Opencart",
    OrderWave = "OrderWave",
    OsCommerce1 = "osCommerce1",
    Overstock = "Overstock",
    PayPal = "PayPal",
    PrestaShop = "PrestaShop",
    Pricefalls = "Pricefalls",
    Quickbooks = "Quickbooks",
    Rakuten = "Rakuten",
    Sears = "Sears",
    Sellbrite = "Sellbrite",
    SellerCloud = "SellerCloud",
    Shipstation = "Shipstation",
    Shopify = "Shopify",
    Skubana = "Skubana",
    SolidCommerce = "SolidCommerce",
    SparkPay = "SparkPay",
    SpreeCommerce = "SpreeCommerce",
    SpsCommerce = "spsCommerce",
    StitchLabs = "StitchLabs",
    StoneEdge = "StoneEdge",
    TradeGecko = "TradeGecko",
    UltraCart = "UltraCart",
    Volusion = "Volusion",
    Vtex = "VTEX",
    Walmart = "Walmart",
    WooCommerce = "WooCommerce",
    Yahoo = "Yahoo"
}
export declare class PostOrdersOrderRequestV2Items extends SpeakeasyBase {
    /**
     * Using USD, a per unit value of a single SKU. If your declaring a kit this is the sum total for a single kit. In both scenarios we will multiply the `declaredValue` against the `quantity` for customs declaration.
     */
    declaredValue: string;
    quantity: number;
    sku: string;
}
export declare class PostOrdersOrderRequestV2ConsigneeNewV2 extends SpeakeasyBase {
    /**
     * Address Line 1
     */
    address1: string;
    /**
     * Address Line 2
     */
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
     * Country, for best results please provide the two character ISO code
     */
    country: string;
    /**
     * Email, required for international shipments
     */
    email: string;
    firstName: string;
    lastName: string;
    /**
     * Phone number, required for international shipments
     */
    phone: string;
    /**
     * Postal Code / Zip
     */
    postalCode?: string;
}
/**
 * We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
 */
export declare class PostOrdersOrderRequestV2Warehouse extends SpeakeasyBase {
    id?: number;
}
/**
 * The order to create
 */
export declare class PostOrdersOrderRequestV2 extends SpeakeasyBase {
    /**
     * Use of this property requires special permission and must be discussed with your account executive; values are restricted while custom values need to be accepted by your AE.
     */
    integrator?: PostOrdersOrderRequestV2IntegratorEnum;
    items: PostOrdersOrderRequestV2Items[];
    /**
     * Necessary if you have a multitenancy account, otherwise we will associate the order with your account
     */
    merchantId?: number;
    /**
     * Unique ID provided by the merchant
     */
    merchantOrderId: string;
    notes?: string;
    recipient: PostOrdersOrderRequestV2ConsigneeNewV2;
    /**
     * Custom for you, it will be mapped to an actual method within the OMS UI
     */
    shippingMethod: string;
    /**
     * We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
     */
    warehouse?: PostOrdersOrderRequestV2Warehouse;
}
/**
 * Conflict
 */
export declare class PostOrdersErrorStandardWithContextV2 extends SpeakeasyBase {
    context?: Record<string, any>[];
    message?: string;
}
/**
 * Responsibility for resolving this issue
 */
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy extends SpeakeasyBase {
    id?: number;
    /**
     * Human readable description of responsible party to resolve the issue
     */
    name?: string;
}
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 extends SpeakeasyBase {
    /**
     * Responsibility for resolving this issue
     */
    actionRequiredBy?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
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
    stage: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage;
    state: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State;
}
export declare class PostOrdersOrderResponseV2StatusEventV2 extends SpeakeasyBase {
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
    status?: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2;
}
export declare class PostOrdersOrderResponseV2MerchantV2 extends SpeakeasyBase {
    id: number;
    /**
     * Merchant Company Name
     */
    name: string;
}
export declare class PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
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
export declare class PostOrdersOrderResponseV2ConsigneeV2 extends SpeakeasyBase {
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
    iso?: PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    /**
     * Postal Code / Zip
     */
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class PostOrdersOrderResponseV2ParentOrder extends SpeakeasyBase {
    /**
     * Reference to parent `id` if order was grouped
     */
    id?: number;
}
export declare class PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
    id: number;
}
export declare class PostOrdersOrderResponseV2TrackingNumberV2 extends SpeakeasyBase {
    /**
     * The computer readable alternative to the human readable
     */
    barcodeScanValue?: string;
    carrier?: PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2;
    /**
     * The human readable tracking number recipients (consignee) expect
     */
    value?: string;
}
export declare class PostOrdersOrderResponseV2WarehouseV2 extends SpeakeasyBase {
    id: number;
}
/**
 * Order Created
 */
export declare class PostOrdersOrderResponseV2 extends SpeakeasyBase {
    currentStatus: PostOrdersOrderResponseV2StatusEventV2;
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
    merchant: PostOrdersOrderResponseV2MerchantV2;
    /**
     * Merchant provided ID
     */
    merchantOrderId: string;
    /**
     * Requested ship method
     */
    merchantShippingMethod: string;
    originalConsignee: PostOrdersOrderResponseV2ConsigneeV2;
    parentOrder?: PostOrdersOrderResponseV2ParentOrder;
    /**
     * Merchant provided PO#
     */
    purchaseOrderNum?: string;
    /**
     * DateTime order was recorded by FDC
     */
    recordedOn: Date;
    trackingNumbers?: PostOrdersOrderResponseV2TrackingNumberV2[];
    validatedConsignee: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;
    warehouse?: PostOrdersOrderResponseV2WarehouseV2;
}
export declare class PostOrdersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Conflict
     */
    errorStandardWithContextV2?: PostOrdersErrorStandardWithContextV2;
    /**
     * Order Created
     */
    orderResponseV2?: PostOrdersOrderResponseV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid order object
     */
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
