import { SpeakeasyBase } from "../../../internal/utils";
import { CarSearchRangeFacets } from "./carsearchrangefacets";
import { CarSearchStats } from "./carsearchstats";
import { UKBaseListing } from "./ukbaselisting";
import { UKCarSearchFacets } from "./ukcarsearchfacets";
/**
 * Search query response
 */
export declare class UKSearchResponse extends SpeakeasyBase {
    facets?: UKCarSearchFacets;
    listings?: UKBaseListing[];
    /**
     * The number of listings found
     */
    numFound?: number;
    rangeFacets?: CarSearchRangeFacets;
    stats?: CarSearchStats;
}
