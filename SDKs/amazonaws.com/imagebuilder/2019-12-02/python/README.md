# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/imagebuilder/2019-12-02/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CancelImageCreationRequest(
    request_body=operations.CancelImageCreationRequestBody(
        client_token="corrupti",
        image_build_version_arn="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.cancel_image_creation(req)

if res.cancel_image_creation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `cancel_image_creation` - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* `create_component` - <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
* `create_container_recipe` - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* `create_distribution_configuration` - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `create_image` -  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* `create_image_pipeline` -  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* `create_image_recipe` -  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* `create_infrastructure_configuration` -  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* `delete_component` -  Deletes a component build version.
* `delete_container_recipe` - Deletes a container recipe.
* `delete_distribution_configuration` -  Deletes a distribution configuration.
* `delete_image` - <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
* `delete_image_pipeline` -  Deletes an image pipeline.
* `delete_image_recipe` -  Deletes an image recipe.
* `delete_infrastructure_configuration` -  Deletes an infrastructure configuration.
* `get_component` -  Gets a component object.
* `get_component_policy` -  Gets a component policy.
* `get_container_recipe` - Retrieves a container recipe.
* `get_container_recipe_policy` - Retrieves the policy for a container recipe.
* `get_distribution_configuration` -  Gets a distribution configuration.
* `get_image` -  Gets an image.
* `get_image_pipeline` -  Gets an image pipeline.
* `get_image_policy` -  Gets an image policy.
* `get_image_recipe` -  Gets an image recipe.
* `get_image_recipe_policy` -  Gets an image recipe policy.
* `get_infrastructure_configuration` -  Gets an infrastructure configuration.
* `import_component` - Imports a component and transforms its data into a component document.
* `import_vm_image` - <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
* `list_component_build_versions` - <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* `list_components` - <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* `list_container_recipes` - Returns a list of container recipes.
* `list_distribution_configurations` - Returns a list of distribution configurations.
* `list_image_build_versions` -  Returns a list of image build versions.
* `list_image_packages` - List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
* `list_image_pipeline_images` - Returns a list of images created by the specified pipeline.
* `list_image_pipelines` - Returns a list of image pipelines.
* `list_image_recipes` -  Returns a list of image recipes.
* `list_images` - Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
* `list_infrastructure_configurations` -  Returns a list of infrastructure configurations.
* `list_tags_for_resource` -  Returns the list of tags for the specified resource.
* `put_component_policy` -  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `put_container_recipe_policy` - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* `put_image_policy` - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `put_image_recipe_policy` -  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `start_image_pipeline_execution` -  Manually triggers a pipeline to create an image.
* `tag_resource` -  Adds a tag to a resource.
* `untag_resource` -  Removes a tag from a resource.
* `update_distribution_configuration` -  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `update_image_pipeline` - <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* `update_infrastructure_configuration` -  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
