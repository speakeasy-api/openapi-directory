import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * When artifact content is updated, old versions of the artifact content are not lost.  All versions can be listed and accessed if necessary. This section describes the operations used to list and access all versions of an artifact's content and metadata.
 */
export declare class Versions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create artifact version
     *
     * @remarks
     * Creates a new version of the artifact by uploading new content.  The configured rules for
     * the artifact are applied, and if they all pass, the new content is added as the most recent
     * version of the artifact.  If any of the rules fail, an error is returned.
     *
     * The body of the request can be the raw content of the new artifact version, or the raw content
     * and a set of references pointing to other artifacts, and the type
     * of that content should match the artifact's type (for example if the artifact type is `AVRO`
     * then the content of the request should be an Apache Avro document).
     *
     * This operation can fail for the following reasons:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    createArtifactVersionJson(req: operations.CreateArtifactVersionJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactVersionJsonResponse>;
    /**
     * Create artifact version
     *
     * @remarks
     * Creates a new version of the artifact by uploading new content.  The configured rules for
     * the artifact are applied, and if they all pass, the new content is added as the most recent
     * version of the artifact.  If any of the rules fail, an error is returned.
     *
     * The body of the request can be the raw content of the new artifact version, or the raw content
     * and a set of references pointing to other artifacts, and the type
     * of that content should match the artifact's type (for example if the artifact type is `AVRO`
     * then the content of the request should be an Apache Avro document).
     *
     * This operation can fail for the following reasons:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    createArtifactVersionRaw(req: operations.CreateArtifactVersionRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactVersionRawResponse>;
    /**
     * Get artifact version
     *
     * @remarks
     * Retrieves a single version of the artifact content.  Both the `artifactId` and the
     * unique `version` number must be provided.  The `Content-Type` of the response depends
     * on the artifact type.  In most cases, this is `application/json`, but for some types
     * it may be different (for example, `PROTOBUF`).
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getArtifactVersion(req: operations.GetArtifactVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactVersionResponse>;
    /**
     * Get artifact version
     *
     * @remarks
     * Retrieves a single version of the artifact content.  Both the `artifactId` and the
     * unique `version` number must be provided.  The `Content-Type` of the response depends
     * on the artifact type.  In most cases, this is `application/json`, but for some types
     * it may be different (for example, `PROTOBUF`).
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getArtifactVersionReferences(req: operations.GetArtifactVersionReferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetArtifactVersionReferencesResponse>;
    /**
     * List artifact versions
     *
     * @remarks
     * Returns a list of all versions of the artifact.  The result set is paged.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    listArtifactVersions(req: operations.ListArtifactVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactVersionsResponse>;
    /**
     * Update artifact version state
     *
     * @remarks
     * Updates the state of a specific version of an artifact.  For example, you can use
     * this operation to disable a specific version.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No version with this `version` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    updateArtifactVersionState(req: operations.UpdateArtifactVersionStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactVersionStateResponse>;
}
