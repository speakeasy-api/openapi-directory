import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The primary way to interact with the Apicurio Registry API is to add, update,
 *
 * @remarks
 * or delete artifacts. This section includes all of these primary operations.
 */
export declare class Artifacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create artifact
     *
     * @remarks
     * Creates a new artifact by posting the artifact content.  The body of the request should
     * be the raw content of the artifact.  This is typically in JSON format for *most* of the
     * supported types, but may be in another format for a few (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the
     * following supported list:
     *
     * * Avro (`AVRO`)
     * * Protobuf (`PROTOBUF`)
     * * JSON Schema (`JSON`)
     * * Kafka Connect (`KCONNECT`)
     * * OpenAPI (`OPENAPI`)
     * * AsyncAPI (`ASYNCAPI`)
     * * GraphQL (`GRAPHQL`)
     * * Web Services Description Language (`WSDL`)
     * * XML Schema (`XSD`)
     *
     * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
     * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
     *
     * ```
     * Content-Type: application/json; artifactType=AVRO
     * ```
     *
     * An artifact is created using the content provided in the body of the request.  This
     * content is created under a unique artifact ID that can be provided in the request
     * using the `X-Registry-ArtifactId` request header.  If not provided in the request,
     * the server generates a unique ID for the artifact.  It is typically recommended
     * that callers provide the ID, because this is typically a meaningful identifier,
     * and for most use cases should be supplied by the caller.
     *
     * If an artifact with the provided artifact ID already exists, the default behavior
     * is for the server to reject the content with a 409 error.  However, the caller can
     * supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
     * query parameter can have one of the following values:
     *
     * * `FAIL` (*default*) - server rejects the content with a 409 error
     * * `UPDATE` - server updates the existing artifact and returns the new metadata
     * * `RETURN` - server does not create or add content to the server, but instead
     * returns the metadata for the existing artifact
     * * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the
     * provided content if such a version exists, otherwise a new version is created
     *
     * This operation may fail for one of the following reasons:
     *
     * * An invalid `ArtifactType` was indicated (HTTP error `400`)
     * * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
     * * Provided content (request body) was empty (HTTP error `400`)
     * * An artifact with the provided ID already exists (HTTP error `409`)
     * * The content violates one of the configured global rules (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    createArtifactJson(req: operations.CreateArtifactJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactJsonResponse>;
    /**
     * Create artifact
     *
     * @remarks
     * Creates a new artifact by posting the artifact content.  The body of the request should
     * be the raw content of the artifact.  This is typically in JSON format for *most* of the
     * supported types, but may be in another format for a few (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the
     * following supported list:
     *
     * * Avro (`AVRO`)
     * * Protobuf (`PROTOBUF`)
     * * JSON Schema (`JSON`)
     * * Kafka Connect (`KCONNECT`)
     * * OpenAPI (`OPENAPI`)
     * * AsyncAPI (`ASYNCAPI`)
     * * GraphQL (`GRAPHQL`)
     * * Web Services Description Language (`WSDL`)
     * * XML Schema (`XSD`)
     *
     * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
     * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
     *
     * ```
     * Content-Type: application/json; artifactType=AVRO
     * ```
     *
     * An artifact is created using the content provided in the body of the request.  This
     * content is created under a unique artifact ID that can be provided in the request
     * using the `X-Registry-ArtifactId` request header.  If not provided in the request,
     * the server generates a unique ID for the artifact.  It is typically recommended
     * that callers provide the ID, because this is typically a meaningful identifier,
     * and for most use cases should be supplied by the caller.
     *
     * If an artifact with the provided artifact ID already exists, the default behavior
     * is for the server to reject the content with a 409 error.  However, the caller can
     * supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
     * query parameter can have one of the following values:
     *
     * * `FAIL` (*default*) - server rejects the content with a 409 error
     * * `UPDATE` - server updates the existing artifact and returns the new metadata
     * * `RETURN` - server does not create or add content to the server, but instead
     * returns the metadata for the existing artifact
     * * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the
     * provided content if such a version exists, otherwise a new version is created
     *
     * This operation may fail for one of the following reasons:
     *
     * * An invalid `ArtifactType` was indicated (HTTP error `400`)
     * * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
     * * Provided content (request body) was empty (HTTP error `400`)
     * * An artifact with the provided ID already exists (HTTP error `409`)
     * * The content violates one of the configured global rules (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    createArtifactRaw(req: operations.CreateArtifactRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactRawResponse>;
    /**
     * Delete artifact
     *
     * @remarks
     * Deletes an artifact completely, resulting in all versions of the artifact also being
     * deleted.  This may fail for one of the following reasons:
     *
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     */
    deleteArtifact(req: operations.DeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactResponse>;
    /**
     * Delete artifacts in group
     *
     * @remarks
     * Deletes all of the artifacts that exist in a given group.
     */
    deleteArtifactsInGroup(req: operations.DeleteArtifactsInGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactsInGroupResponse>;
    /**
     * Get artifact by global ID
     *
     * @remarks
     * Gets the content for an artifact version in the registry using its globally unique
     * identifier.
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact version with this `globalId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getContentByGlobalId(req: operations.GetContentByGlobalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContentByGlobalIdResponse>;
    /**
     * Get artifact content by SHA-256 hash
     *
     * @remarks
     * Gets the content for an artifact version in the registry using the
     * SHA-256 hash of the content.  This content hash may be shared by multiple artifact
     * versions in the case where the artifact versions have identical content.
     *
     * This operation may fail for one of the following reasons:
     *
     * * No content with this `contentHash` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getContentByHash(req: operations.GetContentByHashRequest, config?: AxiosRequestConfig): Promise<operations.GetContentByHashResponse>;
    /**
     * Get artifact content by ID
     *
     * @remarks
     * Gets the content for an artifact version in the registry using the unique content
     * identifier for that content.  This content ID may be shared by multiple artifact
     * versions in the case where the artifact versions are identical.
     *
     * This operation may fail for one of the following reasons:
     *
     * * No content with this `contentId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getContentById(req: operations.GetContentByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContentByIdResponse>;
    /**
     * Get latest artifact
     *
     * @remarks
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
     * response depends on the artifact type.  In most cases, this is `application/json`, but
     * for some types it may be different (for example, `PROTOBUF`).
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getLatestArtifact(req: operations.GetLatestArtifactRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestArtifactResponse>;
    /**
     * List artifacts in group
     *
     * @remarks
     * Returns a list of all artifacts in the group.  This list is paged.
     */
    listArtifactsInGroup(req: operations.ListArtifactsInGroupRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactsInGroupResponse>;
    /**
     * List artifact references by hash
     *
     * @remarks
     * Returns a list containing all the artifact references using the artifact content hash.
     *
     * This operation may fail for one of the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     */
    referencesByContentHash(req: operations.ReferencesByContentHashRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesByContentHashResponse>;
    /**
     * List artifact references by content ID
     *
     * @remarks
     * Returns a list containing all the artifact references using the artifact content ID.
     *
     * This operation may fail for one of the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     */
    referencesByContentId(req: operations.ReferencesByContentIdRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesByContentIdResponse>;
    /**
     * List artifact references by global ID
     *
     * @remarks
     * Returns a list containing all the artifact references using the artifact global ID.
     *
     * This operation may fail for one of the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     */
    referencesByGlobalId(req: operations.ReferencesByGlobalIdRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesByGlobalIdResponse>;
    /**
     * Search for artifacts
     *
     * @remarks
     * Returns a paginated list of all artifacts that match the provided filter criteria.
     *
     */
    searchArtifacts(req: operations.SearchArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsResponse>;
    /**
     * Search for artifacts by content
     *
     * @remarks
     * Returns a paginated list of all artifacts with at least one version that matches the
     * posted content.
     *
     */
    searchArtifactsByContent(req: operations.SearchArtifactsByContentRequest, config?: AxiosRequestConfig): Promise<operations.SearchArtifactsByContentResponse>;
    /**
     * Update artifact state
     *
     * @remarks
     * Updates the state of the artifact.  For example, you can use this to mark the latest
     * version of an artifact as `DEPRECATED`.  The operation changes the state of the latest
     * version of the artifact.  If multiple versions exist, only the most recent is changed.
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    updateArtifactState(req: operations.UpdateArtifactStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactStateResponse>;
    /**
     * Update artifact
     *
     * @remarks
     * Updates an artifact by uploading new content.  The body of the request can
     * be the raw content of the artifact or a JSON object containing both the raw content and
     * a set of references to other artifacts..  This is typically in JSON format for *most*
     * of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
     * The type of the content should be compatible with the artifact's type (it would be
     * an error to update an `AVRO` artifact with new `OPENAPI` content, for example).
     *
     * The update could fail for a number of reasons including:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     * When successful, this creates a new version of the artifact, making it the most recent
     * (and therefore official) version of the artifact.
     */
    updateArtifactJson(req: operations.UpdateArtifactJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactJsonResponse>;
    /**
     * Update artifact
     *
     * @remarks
     * Updates an artifact by uploading new content.  The body of the request can
     * be the raw content of the artifact or a JSON object containing both the raw content and
     * a set of references to other artifacts..  This is typically in JSON format for *most*
     * of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
     * The type of the content should be compatible with the artifact's type (it would be
     * an error to update an `AVRO` artifact with new `OPENAPI` content, for example).
     *
     * The update could fail for a number of reasons including:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     * When successful, this creates a new version of the artifact, making it the most recent
     * (and therefore official) version of the artifact.
     */
    updateArtifactRaw(req: operations.UpdateArtifactRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactRawResponse>;
}
