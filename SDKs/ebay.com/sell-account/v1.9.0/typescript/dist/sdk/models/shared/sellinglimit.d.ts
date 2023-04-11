import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * Type used by the <b>sellingLimit</b> container, a container that lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account.
 */
export declare class SellingLimit extends SpeakeasyBase {
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field.
     */
    amount?: Amount;
    /**
     * This field shows the monthly cap for total quantity sold allowed for the seller's account. This container may not be returned if a seller does not have a monthly cap for total quantity sold.
     */
    quantity?: number;
}
