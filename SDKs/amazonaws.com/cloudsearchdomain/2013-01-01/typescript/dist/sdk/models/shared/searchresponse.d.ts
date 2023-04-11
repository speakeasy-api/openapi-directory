import { SpeakeasyBase } from "../../../internal/utils";
import { BucketInfo } from "./bucketinfo";
import { FieldStats } from "./fieldstats";
import { Hits } from "./hits";
import { SearchStatus } from "./searchstatus";
/**
 * The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
 */
export declare class SearchResponse extends SpeakeasyBase {
    facets?: Record<string, BucketInfo>;
    hits?: Hits;
    stats?: Record<string, FieldStats>;
    status?: SearchStatus;
}
