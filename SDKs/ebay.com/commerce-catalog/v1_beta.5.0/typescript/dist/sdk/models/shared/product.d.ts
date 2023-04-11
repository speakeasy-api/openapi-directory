import { SpeakeasyBase } from "../../../internal/utils";
import { Aspect } from "./aspect";
import { Image } from "./image";
/**
 * This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.
 */
export declare class Product extends SpeakeasyBase {
    /**
     * Contains information about  additional images associated with this product. For the primary image, see the <b>image</b> container.
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
     * The rich description of this product, which might contain HTML.
     */
    description?: string;
    /**
     * A list of all European Article Numbers (EANs) that identify this product.
     */
    ean?: string[];
    /**
     * The eBay product ID of this product.
     */
    epid?: string;
    /**
     * A list of all GTINs that identify this product. Currently this can include EAN, ISBN, and UPC identifier types.
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
     * A list of all MPN values that the manufacturer uses to identify this product.
     */
    mpn?: string[];
    /**
     * A list of category IDs (other than the value of <b>primaryCategoryId</b>) for all the leaf categories to which this product might belong.
     */
    otherApplicableCategoryIds?: string[];
    /**
     * The identifier of the leaf category that eBay recommends using to list this product, based on previous listings of similar products. Products in the eBay catalog are not automatically associated with any particular category, but using an inappropriate category can make it difficult for prospective buyers to find the product. For other possible categories that might be used, see <b>otherApplicableCategoryIds</b>.
     */
    primaryCategoryId?: string;
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
    /**
     * The current version number of this product record in the catalog.
     */
    version?: string;
}
