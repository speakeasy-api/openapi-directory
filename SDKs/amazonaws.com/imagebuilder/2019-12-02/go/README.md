# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/imagebuilder/2019-12-02/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CancelImageCreationRequest{
        Headers: operations.CancelImageCreationHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CancelImageCreationRequestBody{
            ClientToken: "nulla",
            ImageBuildVersionArn: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.CancelImageCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelImageCreationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CancelImageCreation` - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* `CreateComponent` - <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
* `CreateContainerRecipe` - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* `CreateDistributionConfiguration` - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `CreateImage` -  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* `CreateImagePipeline` -  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* `CreateImageRecipe` -  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* `CreateInfrastructureConfiguration` -  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* `DeleteComponent` -  Deletes a component build version.
* `DeleteContainerRecipe` - Deletes a container recipe.
* `DeleteDistributionConfiguration` -  Deletes a distribution configuration.
* `DeleteImage` - <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
* `DeleteImagePipeline` -  Deletes an image pipeline.
* `DeleteImageRecipe` -  Deletes an image recipe.
* `DeleteInfrastructureConfiguration` -  Deletes an infrastructure configuration.
* `GetComponent` -  Gets a component object.
* `GetComponentPolicy` -  Gets a component policy.
* `GetContainerRecipe` - Retrieves a container recipe.
* `GetContainerRecipePolicy` - Retrieves the policy for a container recipe.
* `GetDistributionConfiguration` -  Gets a distribution configuration.
* `GetImage` -  Gets an image.
* `GetImagePipeline` -  Gets an image pipeline.
* `GetImagePolicy` -  Gets an image policy.
* `GetImageRecipe` -  Gets an image recipe.
* `GetImageRecipePolicy` -  Gets an image recipe policy.
* `GetInfrastructureConfiguration` -  Gets an infrastructure configuration.
* `ImportComponent` - Imports a component and transforms its data into a component document.
* `ImportVMImage` - <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
* `ListComponentBuildVersions` - <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* `ListComponents` - <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* `ListContainerRecipes` - Returns a list of container recipes.
* `ListDistributionConfigurations` - Returns a list of distribution configurations.
* `ListImageBuildVersions` -  Returns a list of image build versions.
* `ListImagePackages` - List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
* `ListImagePipelineImages` - Returns a list of images created by the specified pipeline.
* `ListImagePipelines` - Returns a list of image pipelines.
* `ListImageRecipes` -  Returns a list of image recipes.
* `ListImages` - Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
* `ListInfrastructureConfigurations` -  Returns a list of infrastructure configurations.
* `ListTagsForResource` -  Returns the list of tags for the specified resource.
* `PutComponentPolicy` -  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `PutContainerRecipePolicy` - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* `PutImagePolicy` - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `PutImageRecipePolicy` -  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `StartImagePipelineExecution` -  Manually triggers a pipeline to create an image.
* `TagResource` -  Adds a tag to a resource.
* `UntagResource` -  Removes a tag from a resource.
* `UpdateDistributionConfiguration` -  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `UpdateImagePipeline` - <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* `UpdateInfrastructureConfiguration` -  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
