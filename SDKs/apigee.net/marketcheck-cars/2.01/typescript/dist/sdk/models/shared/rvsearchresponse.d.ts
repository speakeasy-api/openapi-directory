import { SpeakeasyBase } from "../../../internal/utils";
import { RVBaseListing } from "./rvbaselisting";
/**
 * RV search query response
 */
export declare class RVSearchResponse extends SpeakeasyBase {
    facets?: Record<string, any>;
    listings?: RVBaseListing[];
    /**
     * The number of listings found
     */
    numFound?: number;
    rangeFacets?: Record<string, any>;
    stats?: Record<string, any>;
}
