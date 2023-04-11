import { SpeakeasyBase } from "../../../internal/utils";
import { MotorcycleBaseListing } from "./motorcyclebaselisting";
/**
 * Motorcycle search query response
 */
export declare class MotorcycleSearchResponse extends SpeakeasyBase {
    facets?: Record<string, any>;
    listings?: MotorcycleBaseListing[];
    /**
     * The number of listings found
     */
    numFound?: number;
    rangeFacets?: Record<string, any>;
    stats?: Record<string, any>;
}
