import { SpeakeasyBase } from "../../../internal/utils";
import { TerminalProductPrice } from "./terminalproductprice";
export declare class TerminalProduct extends SpeakeasyBase {
    /**
     * Information about items included and integration options.
     */
    description?: string;
    /**
     * The unique identifier of the product.
     */
    id?: string;
    /**
     * A list of parts included in the terminal package.
     */
    itemsIncluded?: string[];
    /**
     * The descriptive name of the product.
     */
    name?: string;
    price?: TerminalProductPrice;
}
