import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.ecr.{region}.amazonaws.com", "https://api.ecr.{region}.amazonaws.com", "http://api.ecr.{region}.amazonaws.com.cn", "https://api.ecr.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon Elastic Container Registry</fullname> <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images.</p> <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/ecr/} - Amazon Web Services documentation
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
     * <p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    batchCheckLayerAvailability(req: operations.BatchCheckLayerAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.BatchCheckLayerAvailabilityResponse>;
    /**
     * <p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
     */
    batchDeleteImage(req: operations.BatchDeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteImageResponse>;
    /**
     * <p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>
     */
    batchGetImage(req: operations.BatchGetImageRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetImageResponse>;
    /**
     * Gets the scanning configuration for one or more repositories.
     */
    batchGetRepositoryScanningConfiguration(req: operations.BatchGetRepositoryScanningConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetRepositoryScanningConfigurationResponse>;
    /**
     * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    completeLayerUpload(req: operations.CompleteLayerUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteLayerUploadResponse>;
    /**
     * Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.
     */
    createPullThroughCacheRule(req: operations.CreatePullThroughCacheRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreatePullThroughCacheRuleResponse>;
    /**
     * Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
     */
    createRepository(req: operations.CreateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryResponse>;
    /**
     * Deletes the lifecycle policy associated with the specified repository.
     */
    deleteLifecyclePolicy(req: operations.DeleteLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLifecyclePolicyResponse>;
    /**
     * Deletes a pull through cache rule.
     */
    deletePullThroughCacheRule(req: operations.DeletePullThroughCacheRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePullThroughCacheRuleResponse>;
    /**
     * Deletes the registry permissions policy.
     */
    deleteRegistryPolicy(req: operations.DeleteRegistryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRegistryPolicyResponse>;
    /**
     * Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.
     */
    deleteRepository(req: operations.DeleteRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryResponse>;
    /**
     * Deletes the repository policy associated with the specified repository.
     */
    deleteRepositoryPolicy(req: operations.DeleteRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPolicyResponse>;
    /**
     * Returns the replication status for a specified image.
     */
    describeImageReplicationStatus(req: operations.DescribeImageReplicationStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageReplicationStatusResponse>;
    /**
     * Returns the scan findings for the specified image.
     */
    describeImageScanFindings(req: operations.DescribeImageScanFindingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageScanFindingsResponse>;
    /**
     * <p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
     */
    describeImages(req: operations.DescribeImagesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImagesResponse>;
    /**
     * Returns the pull through cache rules for a registry.
     */
    describePullThroughCacheRules(req: operations.DescribePullThroughCacheRulesRequest, config?: AxiosRequestConfig): Promise<operations.DescribePullThroughCacheRulesResponse>;
    /**
     * Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.
     */
    describeRegistry(req: operations.DescribeRegistryRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRegistryResponse>;
    /**
     * Describes image repositories in a registry.
     */
    describeRepositories(req: operations.DescribeRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRepositoriesResponse>;
    /**
     * <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    getAuthorizationToken(req: operations.GetAuthorizationTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizationTokenResponse>;
    /**
     * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    getDownloadUrlForLayer(req: operations.GetDownloadUrlForLayerRequest, config?: AxiosRequestConfig): Promise<operations.GetDownloadUrlForLayerResponse>;
    /**
     * Retrieves the lifecycle policy for the specified repository.
     */
    getLifecyclePolicy(req: operations.GetLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetLifecyclePolicyResponse>;
    /**
     * Retrieves the results of the lifecycle policy preview request for the specified repository.
     */
    getLifecyclePolicyPreview(req: operations.GetLifecyclePolicyPreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetLifecyclePolicyPreviewResponse>;
    /**
     * Retrieves the permissions policy for a registry.
     */
    getRegistryPolicy(req: operations.GetRegistryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryPolicyResponse>;
    /**
     * Retrieves the scanning configuration for a registry.
     */
    getRegistryScanningConfiguration(req: operations.GetRegistryScanningConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryScanningConfigurationResponse>;
    /**
     * Retrieves the repository policy for the specified repository.
     */
    getRepositoryPolicy(req: operations.GetRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPolicyResponse>;
    /**
     * <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    initiateLayerUpload(req: operations.InitiateLayerUploadRequest, config?: AxiosRequestConfig): Promise<operations.InitiateLayerUploadResponse>;
    /**
     * <p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
     */
    listImages(req: operations.ListImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagesResponse>;
    /**
     * List the tags for an Amazon ECR resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    putImage(req: operations.PutImageRequest, config?: AxiosRequestConfig): Promise<operations.PutImageResponse>;
    /**
     * <important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>
     */
    putImageScanningConfiguration(req: operations.PutImageScanningConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutImageScanningConfigurationResponse>;
    /**
     * Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
     */
    putImageTagMutability(req: operations.PutImageTagMutabilityRequest, config?: AxiosRequestConfig): Promise<operations.PutImageTagMutabilityResponse>;
    /**
     * Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.
     */
    putLifecyclePolicy(req: operations.PutLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutLifecyclePolicyResponse>;
    /**
     * <p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    putRegistryPolicy(req: operations.PutRegistryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutRegistryPolicyResponse>;
    /**
     * Creates or updates the scanning configuration for your private registry.
     */
    putRegistryScanningConfiguration(req: operations.PutRegistryScanningConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutRegistryScanningConfigurationResponse>;
    /**
     * <p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>
     */
    putReplicationConfiguration(req: operations.PutReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutReplicationConfigurationResponse>;
    /**
     * Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
     */
    setRepositoryPolicy(req: operations.SetRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SetRepositoryPolicyResponse>;
    /**
     * Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
     */
    startImageScan(req: operations.StartImageScanRequest, config?: AxiosRequestConfig): Promise<operations.StartImageScanResponse>;
    /**
     * Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
     */
    startLifecyclePolicyPreview(req: operations.StartLifecyclePolicyPreviewRequest, config?: AxiosRequestConfig): Promise<operations.StartLifecyclePolicyPreviewResponse>;
    /**
     * Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deletes specified tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
     */
    uploadLayerPart(req: operations.UploadLayerPartRequest, config?: AxiosRequestConfig): Promise<operations.UploadLayerPartResponse>;
}
