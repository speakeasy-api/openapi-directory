import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
 */
export declare class SearchResult extends SpeakeasyBase {
    /**
     * The full line containing the search result.
     */
    context: string;
    /**
     * Up to 2 full lines after the search result (see `context`).
     */
    contextAfter?: string[];
    /**
     * Up to 2 full lines before the search result (see `context`).
     */
    contextBefore?: string[];
    /**
     * Line number containing the search result.
     */
    line: number;
    /**
     * The Debian source package containing this search result, including the full Debian version number.
     */
    package: string;
    /**
     * Path to the file containing the this search result, starting with `package`.
     */
    path: string;
}
