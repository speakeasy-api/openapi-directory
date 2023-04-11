import { SpeakeasyBase } from "../../../internal/utils";
import { SearchedVersion } from "./searchedversion";
/**
 * Describes the response received when searching for artifacts.
 */
export declare class VersionSearchResults extends SpeakeasyBase {
    /**
     * The total number of versions that matched the query (may be more than the number of versions
     *
     * @remarks
     * returned in the result set).
     */
    count: number;
    /**
     * The collection of artifact versions returned in the result set.
     */
    versions: SearchedVersion[];
}
