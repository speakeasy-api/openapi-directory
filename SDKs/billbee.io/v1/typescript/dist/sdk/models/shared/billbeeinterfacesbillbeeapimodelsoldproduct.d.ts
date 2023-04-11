import { SpeakeasyBase } from "../../../internal/utils";
import { BillbeeInterfacesBillbeeAPIModelProductImage } from "./billbeeinterfacesbillbeeapimodelproductimage";
export declare class BillbeeInterfacesBillbeeAPIModelSoldProductInput extends SpeakeasyBase {
    /**
     * The Billbee internal id of the linked product
     */
    billbeeId?: number;
    /**
     * The country where this article was made
     */
    countryOfOrigin?: string;
    /**
     * The EAN / GTIN of this product
     */
    ean?: string;
    /**
     * The id of this product in the external system
     */
    id?: string;
    /**
     * The images of this product
     */
    images?: BillbeeInterfacesBillbeeAPIModelProductImage[];
    /**
     * True if the product is a digital good (download etc.), false if not
     */
    isDigital?: boolean;
    /**
     * This is for migration scenarios when the internal id of a product changes
     *
     * @remarks
     * I.E. Etsy when switching to the new inventory management, the ids for variants will change.
     */
    oldId?: string;
    /**
     * Optional platform specific Data as serialized JSON Object for the product
     */
    platformData?: string;
    /**
     * The SKU of this product
     */
    sku?: string;
    /**
     * The TARIC code
     */
    taricCode?: string;
    /**
     * The name of this product
     */
    title?: string;
    /**
     * Indicates whether the article is 1 = normal or 2 = BOM
     */
    type?: number;
    /**
     * Weight of one item in gram
     */
    weight?: number;
}
export declare class BillbeeInterfacesBillbeeAPIModelSoldProduct extends SpeakeasyBase {
    /**
     * The Billbee internal id of the linked product
     */
    billbeeId?: number;
    /**
     * The country where this article was made
     */
    countryOfOrigin?: string;
    /**
     * The EAN / GTIN of this product
     */
    ean?: string;
    /**
     * The id of this product in the external system
     */
    id?: string;
    /**
     * The images of this product
     */
    images?: BillbeeInterfacesBillbeeAPIModelProductImage[];
    /**
     * True if the product is a digital good (download etc.), false if not
     */
    isDigital?: boolean;
    /**
     * This is for migration scenarios when the internal id of a product changes
     *
     * @remarks
     * I.E. Etsy when switching to the new inventory management, the ids for variants will change.
     */
    oldId?: string;
    /**
     * Optional platform specific Data as serialized JSON Object for the product
     */
    platformData?: string;
    /**
     * The SKU of this product
     */
    sku?: string;
    /**
     * The SKU of this product or the id if the SKU is empty
     */
    skuOrId?: string;
    /**
     * The TARIC code
     */
    taricCode?: string;
    /**
     * The name of this product
     */
    title?: string;
    /**
     * Indicates whether the article is 1 = normal or 2 = BOM
     */
    type?: number;
    /**
     * Weight of one item in gram
     */
    weight?: number;
}
