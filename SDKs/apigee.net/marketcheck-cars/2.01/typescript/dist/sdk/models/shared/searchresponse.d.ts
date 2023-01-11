import { SpeakeasyBase } from "../../../internal/utils";
import { BaseListing } from "./baselisting";
/**
 * Search query response
**/
export declare class SearchResponse extends SpeakeasyBase {
    facets?: Record<string, any>;
    listings?: BaseListing[];
    numFound?: number;
    rangeFacets?: Record<string, any>;
    stats?: Record<string, any>;
}
