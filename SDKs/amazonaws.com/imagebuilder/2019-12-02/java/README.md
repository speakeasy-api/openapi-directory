# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelImageCreationHeaders;
import org.openapis.openapi.models.operations.CancelImageCreationRequestBody;
import org.openapis.openapi.models.operations.CancelImageCreationRequest;
import org.openapis.openapi.models.operations.CancelImageCreationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CancelImageCreationRequest req = new CancelImageCreationRequest() {{
                headers = new CancelImageCreationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CancelImageCreationRequestBody() {{
                    clientToken = "illum";
                    imageBuildVersionArn = "vel";
                }};
            }};            

            CancelImageCreationResponse res = sdk.cancelImageCreation(req);

            if (res.cancelImageCreationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancelImageCreation` - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* `createComponent` - <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
* `createContainerRecipe` - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* `createDistributionConfiguration` - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `createImage` -  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* `createImagePipeline` -  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* `createImageRecipe` -  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* `createInfrastructureConfiguration` -  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* `deleteComponent` -  Deletes a component build version.
* `deleteContainerRecipe` - Deletes a container recipe.
* `deleteDistributionConfiguration` -  Deletes a distribution configuration.
* `deleteImage` - <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
* `deleteImagePipeline` -  Deletes an image pipeline.
* `deleteImageRecipe` -  Deletes an image recipe.
* `deleteInfrastructureConfiguration` -  Deletes an infrastructure configuration.
* `getComponent` -  Gets a component object.
* `getComponentPolicy` -  Gets a component policy.
* `getContainerRecipe` - Retrieves a container recipe.
* `getContainerRecipePolicy` - Retrieves the policy for a container recipe.
* `getDistributionConfiguration` -  Gets a distribution configuration.
* `getImage` -  Gets an image.
* `getImagePipeline` -  Gets an image pipeline.
* `getImagePolicy` -  Gets an image policy.
* `getImageRecipe` -  Gets an image recipe.
* `getImageRecipePolicy` -  Gets an image recipe policy.
* `getInfrastructureConfiguration` -  Gets an infrastructure configuration.
* `importComponent` - Imports a component and transforms its data into a component document.
* `importVmImage` - <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
* `listComponentBuildVersions` - <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* `listComponents` - <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* `listContainerRecipes` - Returns a list of container recipes.
* `listDistributionConfigurations` - Returns a list of distribution configurations.
* `listImageBuildVersions` -  Returns a list of image build versions.
* `listImagePackages` - List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
* `listImagePipelineImages` - Returns a list of images created by the specified pipeline.
* `listImagePipelines` - Returns a list of image pipelines.
* `listImageRecipes` -  Returns a list of image recipes.
* `listImages` - Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
* `listInfrastructureConfigurations` -  Returns a list of infrastructure configurations.
* `listTagsForResource` -  Returns the list of tags for the specified resource.
* `putComponentPolicy` -  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `putContainerRecipePolicy` - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* `putImagePolicy` - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `putImageRecipePolicy` -  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `startImagePipelineExecution` -  Manually triggers a pipeline to create an image.
* `tagResource` -  Adds a tag to a resource.
* `untagResource` -  Removes a tag from a resource.
* `updateDistributionConfiguration` -  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `updateImagePipeline` - <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* `updateInfrastructureConfiguration` -  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
