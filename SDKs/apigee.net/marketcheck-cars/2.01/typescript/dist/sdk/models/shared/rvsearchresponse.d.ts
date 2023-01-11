import { SpeakeasyBase } from "../../../internal/utils";
import { RvBaseListing } from "./rvbaselisting";
/**
 * RV search query response
**/
export declare class RvSearchResponse extends SpeakeasyBase {
    facets?: Record<string, any>;
    listings?: RvBaseListing[];
    numFound?: number;
    rangeFacets?: Record<string, any>;
    stats?: Record<string, any>;
}
