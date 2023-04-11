import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Registry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateApi creates a specified API.
     */
    registryCreateApi(req: operations.RegistryCreateApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateApiResponse>;
    /**
     * CreateApiDeployment creates a specified deployment.
     */
    registryCreateApiDeployment(req: operations.RegistryCreateApiDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateApiDeploymentResponse>;
    /**
     * CreateApiSpec creates a specified spec.
     */
    registryCreateApiSpec(req: operations.RegistryCreateApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateApiSpecResponse>;
    /**
     * CreateApiVersion creates a specified version.
     */
    registryCreateApiVersion(req: operations.RegistryCreateApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateApiVersionResponse>;
    /**
     * CreateArtifact creates a specified artifact.
     */
    registryCreateArtifact(req: operations.RegistryCreateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryCreateArtifactResponse>;
    /**
     * DeleteApi removes a specified API and all of the resources that it
     *  owns.
     */
    registryDeleteApi(req: operations.RegistryDeleteApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiResponse>;
    /**
     * DeleteApiDeployment removes a specified deployment, all revisions, and all
     *  child resources (e.g. artifacts).
     */
    registryDeleteApiDeployment(req: operations.RegistryDeleteApiDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiDeploymentResponse>;
    /**
     * DeleteApiDeploymentRevision deletes a revision of a deployment.
     */
    registryDeleteApiDeploymentRevision(req: operations.RegistryDeleteApiDeploymentRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiDeploymentRevisionResponse>;
    /**
     * DeleteApiSpec removes a specified spec, all revisions, and all child
     *  resources (e.g. artifacts).
     */
    registryDeleteApiSpec(req: operations.RegistryDeleteApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiSpecResponse>;
    /**
     * DeleteApiSpecRevision deletes a revision of a spec.
     */
    registryDeleteApiSpecRevision(req: operations.RegistryDeleteApiSpecRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiSpecRevisionResponse>;
    /**
     * DeleteApiVersion removes a specified version and all of the resources that
     *  it owns.
     */
    registryDeleteApiVersion(req: operations.RegistryDeleteApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteApiVersionResponse>;
    /**
     * DeleteArtifact removes a specified artifact.
     */
    registryDeleteArtifact(req: operations.RegistryDeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryDeleteArtifactResponse>;
    /**
     * GetApi returns a specified API.
     */
    registryGetApi(req: operations.RegistryGetApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiResponse>;
    /**
     * GetApiDeployment returns a specified deployment.
     */
    registryGetApiDeployment(req: operations.RegistryGetApiDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiDeploymentResponse>;
    /**
     * GetApiSpec returns a specified spec.
     */
    registryGetApiSpec(req: operations.RegistryGetApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiSpecResponse>;
    /**
     * GetApiSpecContents returns the contents of a specified spec.
     *  If specs are stored with GZip compression, the default behavior
     *  is to return the spec uncompressed (the mime_type response field
     *  indicates the exact format returned).
     */
    registryGetApiSpecContents(req: operations.RegistryGetApiSpecContentsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiSpecContentsResponse>;
    /**
     * GetApiVersion returns a specified version.
     */
    registryGetApiVersion(req: operations.RegistryGetApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetApiVersionResponse>;
    /**
     * GetArtifact returns a specified artifact.
     */
    registryGetArtifact(req: operations.RegistryGetArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetArtifactResponse>;
    /**
     * GetArtifactContents returns the contents of a specified artifact.
     *  If artifacts are stored with GZip compression, the default behavior
     *  is to return the artifact uncompressed (the mime_type response field
     *  indicates the exact format returned).
     */
    registryGetArtifactContents(req: operations.RegistryGetArtifactContentsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryGetArtifactContentsResponse>;
    /**
     * ListApiDeploymentRevisions lists all revisions of a deployment.
     *  Revisions are returned in descending order of revision creation time.
     */
    registryListApiDeploymentRevisions(req: operations.RegistryListApiDeploymentRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiDeploymentRevisionsResponse>;
    /**
     * ListApiDeployments returns matching deployments.
     */
    registryListApiDeployments(req: operations.RegistryListApiDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiDeploymentsResponse>;
    /**
     * ListApiSpecRevisions lists all revisions of a spec.
     *  Revisions are returned in descending order of revision creation time.
     */
    registryListApiSpecRevisions(req: operations.RegistryListApiSpecRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiSpecRevisionsResponse>;
    /**
     * ListApiSpecs returns matching specs.
     */
    registryListApiSpecs(req: operations.RegistryListApiSpecsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiSpecsResponse>;
    /**
     * ListApiVersions returns matching versions.
     */
    registryListApiVersions(req: operations.RegistryListApiVersionsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApiVersionsResponse>;
    /**
     * ListApis returns matching APIs.
     */
    registryListApis(req: operations.RegistryListApisRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListApisResponse>;
    /**
     * ListArtifacts returns matching artifacts.
     */
    registryListArtifacts(req: operations.RegistryListArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.RegistryListArtifactsResponse>;
    /**
     * ReplaceArtifact can be used to replace a specified artifact.
     */
    registryReplaceArtifact(req: operations.RegistryReplaceArtifactRequest, config?: AxiosRequestConfig): Promise<operations.RegistryReplaceArtifactResponse>;
    /**
     * RollbackApiDeployment sets the current revision to a specified prior
     *  revision. Note that this creates a new revision with a new revision ID.
     */
    registryRollbackApiDeployment(req: operations.RegistryRollbackApiDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.RegistryRollbackApiDeploymentResponse>;
    /**
     * RollbackApiSpec sets the current revision to a specified prior revision.
     *  Note that this creates a new revision with a new revision ID.
     */
    registryRollbackApiSpec(req: operations.RegistryRollbackApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryRollbackApiSpecResponse>;
    /**
     * TagApiDeploymentRevision adds a tag to a specified revision of a
     *  deployment.
     */
    registryTagApiDeploymentRevision(req: operations.RegistryTagApiDeploymentRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryTagApiDeploymentRevisionResponse>;
    /**
     * TagApiSpecRevision adds a tag to a specified revision of a spec.
     */
    registryTagApiSpecRevision(req: operations.RegistryTagApiSpecRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryTagApiSpecRevisionResponse>;
    /**
     * UpdateApi can be used to modify a specified API.
     */
    registryUpdateApi(req: operations.RegistryUpdateApiRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateApiResponse>;
    /**
     * UpdateApiDeployment can be used to modify a specified deployment.
     */
    registryUpdateApiDeployment(req: operations.RegistryUpdateApiDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateApiDeploymentResponse>;
    /**
     * UpdateApiSpec can be used to modify a specified spec.
     */
    registryUpdateApiSpec(req: operations.RegistryUpdateApiSpecRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateApiSpecResponse>;
    /**
     * UpdateApiVersion can be used to modify a specified version.
     */
    registryUpdateApiVersion(req: operations.RegistryUpdateApiVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegistryUpdateApiVersionResponse>;
}
