import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInventorySecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare class GetInventoryRequest extends SpeakeasyBase {
    /**
     * A CSV of sku reference names, 'skuName1' or 'skuName1,skuName2,skuName3'
     */
    externalSkuNames?: string[];
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
     * A CSV of warehouse id, '123' or '1,2,3'
     */
    warehouseIds?: number[];
}
/**
 * Item this inventory data is based on
 */
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2Item extends SpeakeasyBase {
    /**
     * FDC ID for this Item
     */
    id?: number;
    /**
     * Sku reference name for this item
     */
    skuReference?: string;
}
/**
 * Merchant that owns this item
 */
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant extends SpeakeasyBase {
    /**
     * Merchants name for this item
     */
    name?: string;
}
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal extends SpeakeasyBase {
    /**
     * Number of items that are available to be used in an order
     */
    availableToPromise?: number;
}
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity extends SpeakeasyBase {
    total?: GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal;
}
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2 extends SpeakeasyBase {
    /**
     * Item this inventory data is based on
     */
    item?: GetInventoryItemInventoryArrayV2ItemInventoryV2Item;
    /**
     * Merchant that owns this item
     */
    merchant?: GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant;
    quantity?: GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity;
}
export declare class GetInventoryItemInventoryArrayV2MetaPaginationV2 extends SpeakeasyBase {
    /**
     * Count of records returned in response, this will be equal to or less then the limit parameter
     */
    count?: number;
    /**
     * Current page of the response, this will match the page parameter
     */
    currentPage?: number;
    /**
     * Total number of records available to request
     */
    total?: number;
    /**
     * Total number of pages available to request
     */
    totalPages?: number;
}
export declare class GetInventoryItemInventoryArrayV2Meta extends SpeakeasyBase {
    pagination?: GetInventoryItemInventoryArrayV2MetaPaginationV2;
}
/**
 * Found Inventory
 */
export declare class GetInventoryItemInventoryArrayV2 extends SpeakeasyBase {
    data?: GetInventoryItemInventoryArrayV2ItemInventoryV2[];
    meta?: GetInventoryItemInventoryArrayV2Meta;
}
export declare class GetInventoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Found Inventory
     */
    itemInventoryArrayV2?: GetInventoryItemInventoryArrayV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
