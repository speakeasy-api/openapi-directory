import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResult } from "./searchresult";
export declare class PackageSearchResult extends SpeakeasyBase {
    /**
     * The Debian source package for which up to 2 search results have been aggregated in `results`.
     */
    package: string;
    results: SearchResult[];
}
