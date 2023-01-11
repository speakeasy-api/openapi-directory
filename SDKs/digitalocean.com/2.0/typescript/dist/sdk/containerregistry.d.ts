import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ContainerRegistry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createRegistry - Create Container Registry
     *
     * To create your container registry, send a POST request to `/v2/registry`.
     *
     * The `name` becomes part of the URL for images stored in the registry. For
     * example, if your registry is called `example`, an image in it will have the
     * URL `registry.digitalocean.com/example/image:tag`.
     *
    **/
    createRegistry(req: operations.CreateRegistryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRegistryResponse>;
    /**
     * deleteRegistry - Delete Container Registry
     *
     * To delete your container registry, destroying all container image data stored in it, send a DELETE request to `/v2/registry`.
    **/
    deleteRegistry(config?: AxiosRequestConfig): Promise<operations.DeleteRegistryResponse>;
    /**
     * deleteRepositoryManifest - Delete Container Registry Repository Manifest
     *
     * To delete a container repository manifest by digest, send a DELETE request to
     * `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/digests/$MANIFEST_DIGEST`.
     *
     * Note that if your repository name contains `/` characters, it must be
     * URL-encoded in the request URL. For example, to delete
     * `registry.digitalocean.com/example/my/repo@sha256:abcd`, the path would be
     * `/v2/registry/example/repositories/my%2Frepo/digests/sha256:abcd`.
     *
     * A successful request will receive a 204 status code with no body in response.
     * This indicates that the request was processed successfully.
     *
    **/
    deleteRepositoryManifest(req: operations.DeleteRepositoryManifestRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryManifestResponse>;
    /**
     * deleteRepositoryTag - Delete Container Registry Repository Tag
     *
     * To delete a container repository tag, send a DELETE request to
     * `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG`.
     *
     * Note that if your repository name contains `/` characters, it must be
     * URL-encoded in the request URL. For example, to delete
     * `registry.digitalocean.com/example/my/repo:mytag`, the path would be
     * `/v2/registry/example/repositories/my%2Frepo/tags/mytag`.
     *
     * A successful request will receive a 204 status code with no body in response.
     * This indicates that the request was processed successfully.
     *
    **/
    deleteRepositoryTag(req: operations.DeleteRepositoryTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryTagResponse>;
    /**
     * getDockerCredentials - Get Docker Credentials for Container Registry
     *
     * In order to access your container registry with the Docker client or from a
     * Kubernetes cluster, you will need to configure authentication. The necessary
     * JSON configuration can be retrieved by sending a GET request to
     * `/v2/registry/docker-credentials`.
     *
     * The response will be in the format of a Docker `config.json` file. To use the
     * config in your Kubernetes cluster, create a Secret with:
     *
     *     kubectl create secret generic docr \
     *       --from-file=.dockerconfigjson=config.json \
     *       --type=kubernetes.io/dockerconfigjson
     *
     * By default, the returned credentials have read-only access to your registry
     * and cannot be used to push images. This is appropriate for most Kubernetes
     * clusters. To retrieve read/write credentials, suitable for use with the Docker
     * client or in a CI system, read_write may be provided as query parameter. For
     * example: `/v2/registry/docker-credentials?read_write=true`
     *
     * By default, the returned credentials will not expire. To retrieve credentials
     * with an expiry set, expiry_seconds may be provided as a query parameter. For
     * example: `/v2/registry/docker-credentials?expiry_seconds=3600` will return
     * credentials that expire after one hour.
     *
    **/
    getDockerCredentials(req: operations.GetDockerCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetDockerCredentialsResponse>;
    /**
     * getGarbageCollection - Get Active Garbage Collection
     *
     * To get information about the currently-active garbage collection for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collection`.
    **/
    getGarbageCollection(req: operations.GetGarbageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetGarbageCollectionResponse>;
    /**
     * getRegistry - Get Container Registry Information
     *
     * To get information about your container registry, send a GET request to `/v2/registry`.
    **/
    getRegistry(config?: AxiosRequestConfig): Promise<operations.GetRegistryResponse>;
    /**
     * getRegistryOptions - List Available Subscription Tiers
     *
     * There are multiple subscription tiers available for container registry. Each tier allows a different number of image repositories to be created in your registry, and has a different amount of storage and transfer included.
     * To list the available subscription tiers, send a GET request to `/v2/registry/options`.
    **/
    getRegistryOptions(config?: AxiosRequestConfig): Promise<operations.GetRegistryOptionsResponse>;
    /**
     * getRegistrySubscription - Get Subscription Information
     *
     * A subscription is automatically created when you configure your container registry. To get information about your subscription, send a GET request to `/v2/registry/subscription`.
    **/
    getRegistrySubscription(config?: AxiosRequestConfig): Promise<operations.GetRegistrySubscriptionResponse>;
    /**
     * listGarbageCollections - List Garbage Collections
     *
     * To get information about past garbage collections for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collections`.
    **/
    listGarbageCollections(req: operations.ListGarbageCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListGarbageCollectionsResponse>;
    /**
     * listRegistryRepositories - List All Container Registry Repositories
     *
     * To list all repositories in your container registry, send a GET request to `/v2/registry/$REGISTRY_NAME/repositories`.
    **/
    listRegistryRepositories(req: operations.ListRegistryRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListRegistryRepositoriesResponse>;
    /**
     * listRepositoryTags - List All Container Registry Repository Tags
     *
     * To list all tags in your container registry repository, send a GET
     * request to `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags`.
     *
     * Note that if your repository name contains `/` characters, it must be
     * URL-encoded in the request URL. For example, to list tags for
     * `registry.digitalocean.com/example/my/repo`, the path would be
     * `/v2/registry/example/repositories/my%2Frepo/tags`.
     *
    **/
    listRepositoryTags(req: operations.ListRepositoryTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoryTagsResponse>;
    /**
     * postRegistrySubscription - Update Subscription Tier
     *
     * After creating your registry, you can switch to a different subscription tier to better suit your needs. To do this, send a POST request to `/v2/registry/subscription`.
    **/
    postRegistrySubscription(req: operations.PostRegistrySubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostRegistrySubscriptionResponse>;
    /**
     * runGarbageCollection - Start Garbage Collection
     *
     * Garbage collection enables users to clear out unreferenced blobs (layer &
     * manifest data) after deleting one or more manifests from a repository. If
     * there are no unreferenced blobs resulting from the deletion of one or more
     * manifests, garbage collection is effectively a noop.
     * [See here for more information](https://www.digitalocean.com/docs/container-registry/how-to/clean-up-container-registry/)
     * about how and why you should clean up your container registry periodically.
     *
     * To request a garbage collection run on your registry, send a POST request to
     * `/v2/registry/$REGISTRY_NAME/garbage-collection`. This will initiate the
     * following sequence of events on your registry.
     *
     * * Set the registry to read-only mode, meaning no further write-scoped
     *   JWTs will be issued to registry clients. Existing write-scoped JWTs will
     *   continue to work until they expire which can take up to 15 minutes.
     * * Wait until all existing write-scoped JWTs have expired.
     * * Scan all registry manifests to determine which blobs are unreferenced.
     * * Delete all unreferenced blobs from the registry.
     * * Record the number of blobs deleted and bytes freed, mark the garbage
     *   collection status as `success`.
     * * Remove the read-only mode restriction from the registry, meaning write-scoped
     *   JWTs will once again be issued to registry clients.
     *
    **/
    runGarbageCollection(req: operations.RunGarbageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.RunGarbageCollectionResponse>;
    /**
     * updateGarbageCollection - Update Garbage Collection
     *
     * To cancel the currently-active garbage collection for a registry, send a PUT request to `/v2/registry/$REGISTRY_NAME/garbage-collection/$GC_UUID` and specify one or more of the attributes below.
    **/
    updateGarbageCollection(req: operations.UpdateGarbageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGarbageCollectionResponse>;
    /**
     * validateRegistryName - Validate a Container Registry Name
     *
     * To validate that a container registry name is available for use, send a POST
     * request to `/v2/registry/validate-name`.
     *
     * If the name is both formatted correctly and available, the response code will
     * be 204 and contain no body. If the name is already in use, the response will
     * be a 409 Conflict.
     *
    **/
    validateRegistryName(req: operations.ValidateRegistryNameRequest, config?: AxiosRequestConfig): Promise<operations.ValidateRegistryNameResponse>;
}
