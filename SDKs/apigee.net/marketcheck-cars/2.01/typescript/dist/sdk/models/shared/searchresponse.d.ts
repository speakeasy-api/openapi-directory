import { SpeakeasyBase } from "../../../internal/utils";
import { BaseListing } from "./baselisting";
import { CarSearchFacets } from "./carsearchfacets";
import { CarSearchRangeFacets } from "./carsearchrangefacets";
import { CarSearchStats } from "./carsearchstats";
/**
 * Search query response
 */
export declare class SearchResponse extends SpeakeasyBase {
    facets?: CarSearchFacets;
    listings?: BaseListing[];
    /**
     * The number of listings found
     */
    numFound?: number;
    rangeFacets?: CarSearchRangeFacets;
    stats?: CarSearchStats;
}
