import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.ecr-public.{region}.amazonaws.com", "https://api.ecr-public.{region}.amazonaws.com", "http://api.ecr-public.{region}.amazonaws.com.cn", "https://api.ecr-public.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>Amazon Elastic Container Registry Public</fullname> <p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both public and private registries to host your container images. You can use the Docker CLI or your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/ecr-public/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    batchCheckLayerAvailability(req: operations.BatchCheckLayerAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.BatchCheckLayerAvailabilityResponse>;
    /**
     * <p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>
     */
    batchDeleteImage(req: operations.BatchDeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteImageResponse>;
    /**
     * <p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    completeLayerUpload(req: operations.CompleteLayerUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteLayerUploadResponse>;
    /**
     * Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
     */
    createRepository(req: operations.CreateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryResponse>;
    /**
     * Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.
     */
    deleteRepository(req: operations.DeleteRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryResponse>;
    /**
     * Deletes the repository policy that's associated with the specified repository.
     */
    deleteRepositoryPolicy(req: operations.DeleteRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPolicyResponse>;
    /**
     * Returns the image tag details for a repository in a public registry.
     */
    describeImageTags(req: operations.DescribeImageTagsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageTagsResponse>;
    /**
     * <p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>
     */
    describeImages(req: operations.DescribeImagesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImagesResponse>;
    /**
     * Returns details for a public registry.
     */
    describeRegistries(req: operations.DescribeRegistriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRegistriesResponse>;
    /**
     * Describes repositories that are in a public registry.
     */
    describeRepositories(req: operations.DescribeRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRepositoriesResponse>;
    /**
     * Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
     */
    getAuthorizationToken(req: operations.GetAuthorizationTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizationTokenResponse>;
    /**
     * Retrieves catalog metadata for a public registry.
     */
    getRegistryCatalogData(req: operations.GetRegistryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryCatalogDataResponse>;
    /**
     * Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.
     */
    getRepositoryCatalogData(req: operations.GetRepositoryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryCatalogDataResponse>;
    /**
     * Retrieves the repository policy for the specified repository.
     */
    getRepositoryPolicy(req: operations.GetRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPolicyResponse>;
    /**
     * <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    initiateLayerUpload(req: operations.InitiateLayerUploadRequest, config?: AxiosRequestConfig): Promise<operations.InitiateLayerUploadResponse>;
    /**
     * List the tags for an Amazon ECR Public resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    putImage(req: operations.PutImageRequest, config?: AxiosRequestConfig): Promise<operations.PutImageResponse>;
    /**
     * Create or update the catalog data for a public registry.
     */
    putRegistryCatalogData(req: operations.PutRegistryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.PutRegistryCatalogDataResponse>;
    /**
     * Creates or updates the catalog data for a repository in a public registry.
     */
    putRepositoryCatalogData(req: operations.PutRepositoryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoryCatalogDataResponse>;
    /**
     * Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
     */
    setRepositoryPolicy(req: operations.SetRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SetRepositoryPolicyResponse>;
    /**
     * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deletes specified tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    uploadLayerPart(req: operations.UploadLayerPartRequest, config?: AxiosRequestConfig): Promise<operations.UploadLayerPartResponse>;
}
