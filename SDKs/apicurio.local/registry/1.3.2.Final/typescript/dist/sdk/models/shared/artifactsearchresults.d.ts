import { SpeakeasyBase } from "../../../internal/utils";
import { SearchedArtifact } from "./searchedartifact";
/**
 * Describes the response received when searching for artifacts.
 */
export declare class ArtifactSearchResults extends SpeakeasyBase {
    /**
     * The artifacts that matched the search criteria.
     */
    artifacts: SearchedArtifact[];
    /**
     * The total number of artifacts that matched the search criteria.
     */
    count: number;
}
