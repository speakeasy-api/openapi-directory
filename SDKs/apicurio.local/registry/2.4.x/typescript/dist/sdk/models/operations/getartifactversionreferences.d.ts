import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetArtifactVersionReferencesRequest extends SpeakeasyBase {
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
    /**
     * The unique identifier of a specific version of the artifact content.
     */
    version: string;
}
export declare class GetArtifactVersionReferencesResponse extends SpeakeasyBase {
    /**
     * List of all the artifact references for this artifact.
     */
    artifactReferences?: shared.ArtifactReference[];
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
