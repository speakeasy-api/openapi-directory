import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { MerchandisedProduct } from "./merchandisedproduct";
/**
 * The type that defines the fields for the best selling product information.
 */
export declare class BestSellingProductResponse extends SpeakeasyBase {
    /**
     * An array of containers for the products.
     */
    merchandisedProducts?: MerchandisedProduct[];
    /**
     * The container with all the warnings for the input request.
     */
    warnings?: ErrorT[];
}
