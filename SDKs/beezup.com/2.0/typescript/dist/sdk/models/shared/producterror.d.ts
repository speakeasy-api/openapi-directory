import { SpeakeasyBase } from "../../../internal/utils";
import { ProductErrorCode } from "./producterrorcode";
export declare class ProductError extends SpeakeasyBase {
    ean?: string;
    errors: ProductErrorCode[];
    lineNumber: number;
    mpn?: string;
    /**
     * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. http://schema.org/sku
     */
    sku?: string;
    title?: string;
}
