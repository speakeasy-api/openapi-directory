import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class Store extends SpeakeasyBase {
    address?: Address;
    /**
     * The description of the store.
     */
    description?: string;
    /**
     * The list of terminals assigned to the store.
     */
    inStoreTerminals?: string[];
    /**
     * The code of the merchant account.
     */
    merchantAccountCode?: string;
    /**
     * The status of the store:
     *
     * @remarks
     *
     * - `PreActive`: the store has been created, but not yet activated.
     *
     * - `Active`: the store has been activated. This means you can process payments for this store.
     *
     * - `Inactive`: the store is currently not active.
     *
     * - `InactiveWithModifications`: the store is currently not active, but payment modifications such as refunds are possible.
     *
     * - `Closed`: the store has been closed.
     */
    status?: string;
    /**
     * The code of the store.
     */
    store: string;
}
