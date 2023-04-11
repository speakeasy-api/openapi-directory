import { SpeakeasyBase } from "../../../internal/utils";
import { SearchedVersion } from "./searchedversion";
/**
 * Describes the response received when searching for artifacts.
 */
export declare class VersionSearchResults extends SpeakeasyBase {
    /**
     * The total number of artifacts that matched the search criteria.
     */
    count: number;
    versions: SearchedVersion[];
}
