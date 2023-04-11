import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a specific group of vendors that can be rendered in the recommended order.
 *
 * @remarks
 * How do we figure out this order? It's a long story, and will likely get more complicated over time.
 */
export declare class DestinyComponentsVendorsDestinyVendorGroup extends SpeakeasyBase {
    vendorGroupHash?: number;
    /**
     * The ordered list of vendors within a particular group.
     */
    vendorHashes?: number[];
}
