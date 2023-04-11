import { SpeakeasyBase } from "../../../internal/utils";
import { Aspect } from "./aspect";
import { Image } from "./image";
/**
 * This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the <b>getProduct</b> URL for retrieving the product details.
 */
export declare class ProductSummary extends SpeakeasyBase {
    /**
     * Contains information about additional images associated with this product. For the primary image, see the <b>image</b> container.
     */
    additionalImages?: Image[];
    /**
     * Contains an array of the category aspects and their values that are associated with this product.
     */
    aspects?: Aspect[];
    /**
     * The manufacturer's brand name for this product.
     */
    brand?: string;
    /**
     * A list of all European Article Numbers (EANs) that identify this product.
     */
    ean?: string[];
    /**
     * The eBay product ID of this product.
     */
    epid?: string;
    /**
     * A list of all GTINs that identify this product. This includes all of the values returned in the <b>ean</b>, <b>isbn</b>, and <b>upc</b> fields.
     */
    gtin?: string[];
    /**
     * This type contains information about a product image stored in eBay Picture Services (EPS).
     */
    image?: Image;
    /**
     * A list of all International Standard Book Numbers (ISBNs) that identify this product.
     */
    isbn?: string[];
    /**
     * A list of all Manufacturer Product Number (MPN) values that the manufacturer uses to identify this product.
     */
    mpn?: string[];
    /**
     * The URI of the <b>getProduct</b> call request that retrieves this product's details.
     */
    productHref?: string;
    /**
     * The URL for this product's eBay product page.
     */
    productWebUrl?: string;
    /**
     * The title of this product on eBay.
     */
    title?: string;
    /**
     * A list of Universal Product Codes (UPCs) that identify this product.
     */
    upc?: string[];
}
