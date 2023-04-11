import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListArtifactVersionsRequest extends SpeakeasyBase {
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
    /**
     * The number of versions to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of versions to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
}
export declare class ListArtifactVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of all artifact versions.
     */
    versionSearchResults?: shared.VersionSearchResults;
}
