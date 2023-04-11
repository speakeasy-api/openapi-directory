import { SpeakeasyBase } from "../../../internal/utils";
import { SearchedArtifact } from "./searchedartifact";
/**
 * Describes the response received when searching for artifacts.
 */
export declare class ArtifactSearchResults extends SpeakeasyBase {
    /**
     * The artifacts returned in the result set.
     */
    artifacts: SearchedArtifact[];
    /**
     * The total number of artifacts that matched the query that produced the result set (may be
     *
     * @remarks
     * more than the number of artifacts in the result set).
     */
    count: number;
}
