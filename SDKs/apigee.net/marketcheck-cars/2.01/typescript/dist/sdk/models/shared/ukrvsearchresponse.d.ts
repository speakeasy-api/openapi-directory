import { SpeakeasyBase } from "../../../internal/utils";
import { UKRVBaseListing } from "./ukrvbaselisting";
/**
 * RV search query response
 */
export declare class UKRVSearchResponse extends SpeakeasyBase {
    facets?: Record<string, any>;
    listings?: UKRVBaseListing[];
    /**
     * The number of listings found
     */
    numFound?: number;
    rangeFacets?: Record<string, any>;
    stats?: Record<string, any>;
}
