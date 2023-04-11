import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * The supplier this entity is linked to.
 */
export declare class LinkedSupplierInput extends SpeakeasyBase {
    address?: Address;
    /**
     * The display name of the supplier.
     */
    displayName?: string;
    /**
     * The ID of the supplier this entity is linked to.
     */
    id: string;
}
/**
 * The supplier this entity is linked to.
 */
export declare class LinkedSupplier extends SpeakeasyBase {
    address?: Address;
    /**
     * The company name of the supplier.
     */
    companyName?: string;
    /**
     * The display name of the supplier.
     */
    displayName?: string;
    /**
     * The ID of the supplier this entity is linked to.
     */
    id: string;
}
