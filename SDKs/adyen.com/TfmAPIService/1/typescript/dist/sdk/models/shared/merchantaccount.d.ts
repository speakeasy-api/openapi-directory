import { SpeakeasyBase } from "../../../internal/utils";
import { Store } from "./store";
export declare class MerchantAccount extends SpeakeasyBase {
    /**
     * List of terminals assigned to this merchant account as in-store terminals. This means that the terminal is ready to be boarded, or is already boarded.
     */
    inStoreTerminals?: string[];
    /**
     * List of terminals assigned to the inventory of this merchant account.
     */
    inventoryTerminals?: string[];
    /**
     * The merchant account.
     */
    merchantAccount: string;
    /**
     * Array of stores under this merchant account.
     */
    stores?: Store[];
}
