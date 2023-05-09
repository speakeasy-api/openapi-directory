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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CancelImageCreation(ctx, operations.CancelImageCreationRequest{
        RequestBody: operations.CancelImageCreationRequestBody{
            ClientToken: "corrupti",
            ImageBuildVersionArn: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
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
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CancelImageCreation](docs/sdk/README.md#cancelimagecreation) - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* [CreateComponent](docs/sdk/README.md#createcomponent) - <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
* [CreateContainerRecipe](docs/sdk/README.md#createcontainerrecipe) - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* [CreateDistributionConfiguration](docs/sdk/README.md#createdistributionconfiguration) - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* [CreateImage](docs/sdk/README.md#createimage) - Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* [CreateImagePipeline](docs/sdk/README.md#createimagepipeline) - Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* [CreateImageRecipe](docs/sdk/README.md#createimagerecipe) - Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* [CreateInfrastructureConfiguration](docs/sdk/README.md#createinfrastructureconfiguration) - Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* [DeleteComponent](docs/sdk/README.md#deletecomponent) - Deletes a component build version.
* [DeleteContainerRecipe](docs/sdk/README.md#deletecontainerrecipe) - Deletes a container recipe.
* [DeleteDistributionConfiguration](docs/sdk/README.md#deletedistributionconfiguration) - Deletes a distribution configuration.
* [DeleteImage](docs/sdk/README.md#deleteimage) - <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
* [DeleteImagePipeline](docs/sdk/README.md#deleteimagepipeline) - Deletes an image pipeline.
* [DeleteImageRecipe](docs/sdk/README.md#deleteimagerecipe) - Deletes an image recipe.
* [DeleteInfrastructureConfiguration](docs/sdk/README.md#deleteinfrastructureconfiguration) - Deletes an infrastructure configuration.
* [GetComponent](docs/sdk/README.md#getcomponent) - Gets a component object.
* [GetComponentPolicy](docs/sdk/README.md#getcomponentpolicy) - Gets a component policy.
* [GetContainerRecipe](docs/sdk/README.md#getcontainerrecipe) - Retrieves a container recipe.
* [GetContainerRecipePolicy](docs/sdk/README.md#getcontainerrecipepolicy) - Retrieves the policy for a container recipe.
* [GetDistributionConfiguration](docs/sdk/README.md#getdistributionconfiguration) - Gets a distribution configuration.
* [GetImage](docs/sdk/README.md#getimage) - Gets an image.
* [GetImagePipeline](docs/sdk/README.md#getimagepipeline) - Gets an image pipeline.
* [GetImagePolicy](docs/sdk/README.md#getimagepolicy) - Gets an image policy.
* [GetImageRecipe](docs/sdk/README.md#getimagerecipe) - Gets an image recipe.
* [GetImageRecipePolicy](docs/sdk/README.md#getimagerecipepolicy) - Gets an image recipe policy.
* [GetInfrastructureConfiguration](docs/sdk/README.md#getinfrastructureconfiguration) - Gets an infrastructure configuration.
* [GetWorkflowExecution](docs/sdk/README.md#getworkflowexecution) - Get the runtime information that was logged for a specific runtime instance of the workflow.
* [GetWorkflowStepExecution](docs/sdk/README.md#getworkflowstepexecution) - Get the runtime information that was logged for a specific runtime instance of the workflow step.
* [ImportComponent](docs/sdk/README.md#importcomponent) - Imports a component and transforms its data into a component document.
* [ImportVMImage](docs/sdk/README.md#importvmimage) - <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
* [ListComponentBuildVersions](docs/sdk/README.md#listcomponentbuildversions) - <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* [ListComponents](docs/sdk/README.md#listcomponents) - <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* [ListContainerRecipes](docs/sdk/README.md#listcontainerrecipes) - Returns a list of container recipes.
* [ListDistributionConfigurations](docs/sdk/README.md#listdistributionconfigurations) - Returns a list of distribution configurations.
* [ListImageBuildVersions](docs/sdk/README.md#listimagebuildversions) - Returns a list of image build versions.
* [ListImagePackages](docs/sdk/README.md#listimagepackages) - List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
* [ListImagePipelineImages](docs/sdk/README.md#listimagepipelineimages) - Returns a list of images created by the specified pipeline.
* [ListImagePipelines](docs/sdk/README.md#listimagepipelines) - Returns a list of image pipelines.
* [ListImageRecipes](docs/sdk/README.md#listimagerecipes) - Returns a list of image recipes.
* [ListImageScanFindingAggregations](docs/sdk/README.md#listimagescanfindingaggregations) - <p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>
* [ListImageScanFindings](docs/sdk/README.md#listimagescanfindings) - Returns a list of image scan findings for your account.
* [ListImages](docs/sdk/README.md#listimages) - Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
* [ListInfrastructureConfigurations](docs/sdk/README.md#listinfrastructureconfigurations) - Returns a list of infrastructure configurations.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns the list of tags for the specified resource.
* [ListWorkflowExecutions](docs/sdk/README.md#listworkflowexecutions) - Returns a list of workflow runtime instance metadata objects for a specific image build version.
* [ListWorkflowStepExecutions](docs/sdk/README.md#listworkflowstepexecutions) - Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.
* [PutComponentPolicy](docs/sdk/README.md#putcomponentpolicy) - Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [PutContainerRecipePolicy](docs/sdk/README.md#putcontainerrecipepolicy) - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* [PutImagePolicy](docs/sdk/README.md#putimagepolicy) - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [PutImageRecipePolicy](docs/sdk/README.md#putimagerecipepolicy) - Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [StartImagePipelineExecution](docs/sdk/README.md#startimagepipelineexecution) - Manually triggers a pipeline to create an image.
* [TagResource](docs/sdk/README.md#tagresource) - Adds a tag to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes a tag from a resource.
* [UpdateDistributionConfiguration](docs/sdk/README.md#updatedistributionconfiguration) - Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* [UpdateImagePipeline](docs/sdk/README.md#updateimagepipeline) - <p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* [UpdateInfrastructureConfiguration](docs/sdk/README.md#updateinfrastructureconfiguration) - Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
