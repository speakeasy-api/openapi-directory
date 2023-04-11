import { SpeakeasyBase } from "../../../internal/utils";
import { Customer } from "./customer";
import { Range } from "./range";
/**
 * List of customers
 */
export declare class CustomerList extends SpeakeasyBase {
    /**
     * List of customers
     */
    items: Customer[];
    /**
     * Range information
     */
    range: Range;
}
