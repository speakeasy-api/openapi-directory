import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://imagebuilder.{region}.amazonaws.com", "https://imagebuilder.{region}.amazonaws.com", "http://imagebuilder.{region}.amazonaws.com.cn", "https://imagebuilder.{region}.amazonaws.com.cn"];
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
 * EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.
 *
 * @see {@link https://docs.aws.amazon.com/imagebuilder/} - Amazon Web Services documentation
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
     * CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
     */
    cancelImageCreation(req: operations.CancelImageCreationRequest, config?: AxiosRequestConfig): Promise<operations.CancelImageCreationResponse>;
    /**
     * <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
     */
    createComponent(req: operations.CreateComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateComponentResponse>;
    /**
     * Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
     */
    createContainerRecipe(req: operations.CreateContainerRecipeRequest, config?: AxiosRequestConfig): Promise<operations.CreateContainerRecipeResponse>;
    /**
     * Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
     */
    createDistributionConfiguration(req: operations.CreateDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDistributionConfigurationResponse>;
    /**
     *  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
     */
    createImage(req: operations.CreateImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageResponse>;
    /**
     *  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
     */
    createImagePipeline(req: operations.CreateImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagePipelineResponse>;
    /**
     *  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
     */
    createImageRecipe(req: operations.CreateImageRecipeRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageRecipeResponse>;
    /**
     *  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
     */
    createInfrastructureConfiguration(req: operations.CreateInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateInfrastructureConfigurationResponse>;
    /**
     *  Deletes a component build version.
     */
    deleteComponent(req: operations.DeleteComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComponentResponse>;
    /**
     * Deletes a container recipe.
     */
    deleteContainerRecipe(req: operations.DeleteContainerRecipeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainerRecipeResponse>;
    /**
     *  Deletes a distribution configuration.
     */
    deleteDistributionConfiguration(req: operations.DeleteDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDistributionConfigurationResponse>;
    /**
     * <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
     */
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     *  Deletes an image pipeline.
     */
    deleteImagePipeline(req: operations.DeleteImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagePipelineResponse>;
    /**
     *  Deletes an image recipe.
     */
    deleteImageRecipe(req: operations.DeleteImageRecipeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageRecipeResponse>;
    /**
     *  Deletes an infrastructure configuration.
     */
    deleteInfrastructureConfiguration(req: operations.DeleteInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInfrastructureConfigurationResponse>;
    /**
     *  Gets a component object.
     */
    getComponent(req: operations.GetComponentRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentResponse>;
    /**
     *  Gets a component policy.
     */
    getComponentPolicy(req: operations.GetComponentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentPolicyResponse>;
    /**
     * Retrieves a container recipe.
     */
    getContainerRecipe(req: operations.GetContainerRecipeRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerRecipeResponse>;
    /**
     * Retrieves the policy for a container recipe.
     */
    getContainerRecipePolicy(req: operations.GetContainerRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerRecipePolicyResponse>;
    /**
     *  Gets a distribution configuration.
     */
    getDistributionConfiguration(req: operations.GetDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfigurationResponse>;
    /**
     *  Gets an image.
     */
    getImage(req: operations.GetImageRequest, config?: AxiosRequestConfig): Promise<operations.GetImageResponse>;
    /**
     *  Gets an image pipeline.
     */
    getImagePipeline(req: operations.GetImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePipelineResponse>;
    /**
     *  Gets an image policy.
     */
    getImagePolicy(req: operations.GetImagePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePolicyResponse>;
    /**
     *  Gets an image recipe.
     */
    getImageRecipe(req: operations.GetImageRecipeRequest, config?: AxiosRequestConfig): Promise<operations.GetImageRecipeResponse>;
    /**
     *  Gets an image recipe policy.
     */
    getImageRecipePolicy(req: operations.GetImageRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetImageRecipePolicyResponse>;
    /**
     *  Gets an infrastructure configuration.
     */
    getInfrastructureConfiguration(req: operations.GetInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetInfrastructureConfigurationResponse>;
    /**
     * Imports a component and transforms its data into a component document.
     */
    importComponent(req: operations.ImportComponentRequest, config?: AxiosRequestConfig): Promise<operations.ImportComponentResponse>;
    /**
     * <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
     */
    importVmImage(req: operations.ImportVmImageRequest, config?: AxiosRequestConfig): Promise<operations.ImportVmImageResponse>;
    /**
     * <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
     */
    listComponentBuildVersions(req: operations.ListComponentBuildVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentBuildVersionsResponse>;
    /**
     * <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
     */
    listComponents(req: operations.ListComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentsResponse>;
    /**
     * Returns a list of container recipes.
     */
    listContainerRecipes(req: operations.ListContainerRecipesRequest, config?: AxiosRequestConfig): Promise<operations.ListContainerRecipesResponse>;
    /**
     * Returns a list of distribution configurations.
     */
    listDistributionConfigurations(req: operations.ListDistributionConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDistributionConfigurationsResponse>;
    /**
     *  Returns a list of image build versions.
     */
    listImageBuildVersions(req: operations.ListImageBuildVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListImageBuildVersionsResponse>;
    /**
     * List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
     */
    listImagePackages(req: operations.ListImagePackagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagePackagesResponse>;
    /**
     * Returns a list of images created by the specified pipeline.
     */
    listImagePipelineImages(req: operations.ListImagePipelineImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagePipelineImagesResponse>;
    /**
     * Returns a list of image pipelines.
     */
    listImagePipelines(req: operations.ListImagePipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagePipelinesResponse>;
    /**
     *  Returns a list of image recipes.
     */
    listImageRecipes(req: operations.ListImageRecipesRequest, config?: AxiosRequestConfig): Promise<operations.ListImageRecipesResponse>;
    /**
     * Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
     */
    listImages(req: operations.ListImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagesResponse>;
    /**
     *  Returns a list of infrastructure configurations.
     */
    listInfrastructureConfigurations(req: operations.ListInfrastructureConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListInfrastructureConfigurationsResponse>;
    /**
     *  Returns the list of tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
     */
    putComponentPolicy(req: operations.PutComponentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutComponentPolicyResponse>;
    /**
     * Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
     */
    putContainerRecipePolicy(req: operations.PutContainerRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutContainerRecipePolicyResponse>;
    /**
     * Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
     */
    putImagePolicy(req: operations.PutImagePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutImagePolicyResponse>;
    /**
     *  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
     */
    putImageRecipePolicy(req: operations.PutImageRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutImageRecipePolicyResponse>;
    /**
     *  Manually triggers a pipeline to create an image.
     */
    startImagePipelineExecution(req: operations.StartImagePipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartImagePipelineExecutionResponse>;
    /**
     *  Adds a tag to a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     *  Removes a tag from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     *  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
     */
    updateDistributionConfiguration(req: operations.UpdateDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDistributionConfigurationResponse>;
    /**
     * <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
     */
    updateImagePipeline(req: operations.UpdateImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImagePipelineResponse>;
    /**
     *  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
     */
    updateInfrastructureConfiguration(req: operations.UpdateInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInfrastructureConfigurationResponse>;
}
