# SDK

## Overview

EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.

Amazon Web Services documentation
<https://docs.aws.amazon.com/imagebuilder/>
### Available Operations

* [cancelImageCreation](#cancelimagecreation) - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* [createComponent](#createcomponent) - <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
* [createContainerRecipe](#createcontainerrecipe) - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* [createDistributionConfiguration](#createdistributionconfiguration) - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* [createImage](#createimage) - Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* [createImagePipeline](#createimagepipeline) - Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* [createImageRecipe](#createimagerecipe) - Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* [createInfrastructureConfiguration](#createinfrastructureconfiguration) - Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* [deleteComponent](#deletecomponent) - Deletes a component build version.
* [deleteContainerRecipe](#deletecontainerrecipe) - Deletes a container recipe.
* [deleteDistributionConfiguration](#deletedistributionconfiguration) - Deletes a distribution configuration.
* [deleteImage](#deleteimage) - <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
* [deleteImagePipeline](#deleteimagepipeline) - Deletes an image pipeline.
* [deleteImageRecipe](#deleteimagerecipe) - Deletes an image recipe.
* [deleteInfrastructureConfiguration](#deleteinfrastructureconfiguration) - Deletes an infrastructure configuration.
* [getComponent](#getcomponent) - Gets a component object.
* [getComponentPolicy](#getcomponentpolicy) - Gets a component policy.
* [getContainerRecipe](#getcontainerrecipe) - Retrieves a container recipe.
* [getContainerRecipePolicy](#getcontainerrecipepolicy) - Retrieves the policy for a container recipe.
* [getDistributionConfiguration](#getdistributionconfiguration) - Gets a distribution configuration.
* [getImage](#getimage) - Gets an image.
* [getImagePipeline](#getimagepipeline) - Gets an image pipeline.
* [getImagePolicy](#getimagepolicy) - Gets an image policy.
* [getImageRecipe](#getimagerecipe) - Gets an image recipe.
* [getImageRecipePolicy](#getimagerecipepolicy) - Gets an image recipe policy.
* [getInfrastructureConfiguration](#getinfrastructureconfiguration) - Gets an infrastructure configuration.
* [getWorkflowExecution](#getworkflowexecution) - Get the runtime information that was logged for a specific runtime instance of the workflow.
* [getWorkflowStepExecution](#getworkflowstepexecution) - Get the runtime information that was logged for a specific runtime instance of the workflow step.
* [importComponent](#importcomponent) - Imports a component and transforms its data into a component document.
* [importVmImage](#importvmimage) - <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
* [listComponentBuildVersions](#listcomponentbuildversions) - <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* [listComponents](#listcomponents) - <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* [listContainerRecipes](#listcontainerrecipes) - Returns a list of container recipes.
* [listDistributionConfigurations](#listdistributionconfigurations) - Returns a list of distribution configurations.
* [listImageBuildVersions](#listimagebuildversions) - Returns a list of image build versions.
* [listImagePackages](#listimagepackages) - List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
* [listImagePipelineImages](#listimagepipelineimages) - Returns a list of images created by the specified pipeline.
* [listImagePipelines](#listimagepipelines) - Returns a list of image pipelines.
* [listImageRecipes](#listimagerecipes) - Returns a list of image recipes.
* [listImageScanFindingAggregations](#listimagescanfindingaggregations) - <p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>
* [listImageScanFindings](#listimagescanfindings) - Returns a list of image scan findings for your account.
* [listImages](#listimages) - Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
* [listInfrastructureConfigurations](#listinfrastructureconfigurations) - Returns a list of infrastructure configurations.
* [listTagsForResource](#listtagsforresource) - Returns the list of tags for the specified resource.
* [listWorkflowExecutions](#listworkflowexecutions) - Returns a list of workflow runtime instance metadata objects for a specific image build version.
* [listWorkflowStepExecutions](#listworkflowstepexecutions) - Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.
* [putComponentPolicy](#putcomponentpolicy) - Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [putContainerRecipePolicy](#putcontainerrecipepolicy) - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* [putImagePolicy](#putimagepolicy) - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [putImageRecipePolicy](#putimagerecipepolicy) - Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [startImagePipelineExecution](#startimagepipelineexecution) - Manually triggers a pipeline to create an image.
* [tagResource](#tagresource) - Adds a tag to a resource.
* [untagResource](#untagresource) - Removes a tag from a resource.
* [updateDistributionConfiguration](#updatedistributionconfiguration) - Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* [updateImagePipeline](#updateimagepipeline) - <p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* [updateInfrastructureConfiguration](#updateinfrastructureconfiguration) - Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

## cancelImageCreation

CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelImageCreationRequest;
import org.openapis.openapi.models.operations.CancelImageCreationRequestBody;
import org.openapis.openapi.models.operations.CancelImageCreationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelImageCreationRequest req = new CancelImageCreationRequest(                new CancelImageCreationRequestBody("suscipit", "iure");) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CancelImageCreationResponse res = sdk.sdk.cancelImageCreation(req);

            if (res.cancelImageCreationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createComponent

<p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComponentRequest;
import org.openapis.openapi.models.operations.CreateComponentRequestBody;
import org.openapis.openapi.models.operations.CreateComponentRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.CreateComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComponentRequest req = new CreateComponentRequest(                new CreateComponentRequestBody("placeat", "voluptatum", CreateComponentRequestBodyPlatformEnum.WINDOWS, "excepturi") {{
                                changeDescription = "nisi";
                                data = "recusandae";
                                description = "temporibus";
                                kmsKeyId = "ab";
                                supportedOsVersions = new String[]{{
                                    add("veritatis"),
                                    add("deserunt"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "repellendus");
                                }};
                                uri = "https://spherical-caviar.org";
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            CreateComponentResponse res = sdk.sdk.createComponent(req);

            if (res.createComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContainerRecipe

Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContainerRecipeRequest;
import org.openapis.openapi.models.operations.CreateContainerRecipeRequestBody;
import org.openapis.openapi.models.operations.CreateContainerRecipeRequestBodyContainerTypeEnum;
import org.openapis.openapi.models.operations.CreateContainerRecipeRequestBodyInstanceConfiguration;
import org.openapis.openapi.models.operations.CreateContainerRecipeRequestBodyPlatformOverrideEnum;
import org.openapis.openapi.models.operations.CreateContainerRecipeRequestBodyTargetRepository;
import org.openapis.openapi.models.operations.CreateContainerRecipeResponse;
import org.openapis.openapi.models.shared.ComponentConfiguration;
import org.openapis.openapi.models.shared.ComponentParameter;
import org.openapis.openapi.models.shared.ContainerRepositoryServiceEnum;
import org.openapis.openapi.models.shared.EbsInstanceBlockDeviceSpecification;
import org.openapis.openapi.models.shared.EbsVolumeTypeEnum;
import org.openapis.openapi.models.shared.InstanceBlockDeviceMapping;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContainerRecipeRequest req = new CreateContainerRecipeRequest(                new CreateContainerRecipeRequestBody("dolorum",                 new org.openapis.openapi.models.shared.ComponentConfiguration[]{{
                                                add(new ComponentConfiguration("est") {{
                                                    componentArn = "nam";
                                                    parameters = new org.openapis.openapi.models.shared.ComponentParameter[]{{
                                                        add(new ComponentParameter("modi",                 new String[]{{
                                                                            add("impedit"),
                                                                        }}) {{
                                                            name = "Wayne Lind";
                                                            value = new String[]{{
                                                                add("beatae"),
                                                                add("commodi"),
                                                                add("molestiae"),
                                                            }};
                                                        }}),
                                                        add(new ComponentParameter("natus",                 new String[]{{
                                                                            add("iste"),
                                                                        }}) {{
                                                            name = "Cory Emmerich";
                                                            value = new String[]{{
                                                                add("ad"),
                                                            }};
                                                        }}),
                                                        add(new ComponentParameter("iure",                 new String[]{{
                                                                            add("quidem"),
                                                                            add("architecto"),
                                                                            add("ipsa"),
                                                                            add("reiciendis"),
                                                                        }}) {{
                                                            name = "Faye Howe";
                                                            value = new String[]{{
                                                                add("in"),
                                                                add("corporis"),
                                                                add("iste"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }}, CreateContainerRecipeRequestBodyContainerTypeEnum.DOCKER, "mollitia", "laborum", "dolores",                 new CreateContainerRecipeRequestBodyTargetRepository() {{
                                                repositoryName = "dolorem";
                                                service = ContainerRepositoryServiceEnum.ECR;
                                            }};) {{
                                description = "corporis";
                                dockerfileTemplateData = "explicabo";
                                dockerfileTemplateUri = "nobis";
                                imageOsVersionOverride = "enim";
                                instanceConfiguration = new CreateContainerRecipeRequestBodyInstanceConfiguration() {{
                                    blockDeviceMappings = new org.openapis.openapi.models.shared.InstanceBlockDeviceMapping[]{{
                                        add(new InstanceBlockDeviceMapping() {{
                                            deviceName = "nemo";
                                            ebs = new EbsInstanceBlockDeviceSpecification() {{
                                                deleteOnTermination = false;
                                                encrypted = false;
                                                iops = 325047L;
                                                kmsKeyId = "excepturi";
                                                snapshotId = "accusantium";
                                                throughput = 438601L;
                                                volumeSize = 634274L;
                                                volumeType = EbsVolumeTypeEnum.ST1;
                                            }};
                                            noDevice = "sapiente";
                                            virtualName = "architecto";
                                        }}),
                                        add(new InstanceBlockDeviceMapping() {{
                                            deviceName = "mollitia";
                                            ebs = new EbsInstanceBlockDeviceSpecification() {{
                                                deleteOnTermination = false;
                                                encrypted = false;
                                                iops = 208876L;
                                                kmsKeyId = "culpa";
                                                snapshotId = "consequuntur";
                                                throughput = 995300L;
                                                volumeSize = 653108L;
                                                volumeType = EbsVolumeTypeEnum.GP3;
                                            }};
                                            noDevice = "numquam";
                                            virtualName = "commodi";
                                        }}),
                                        add(new InstanceBlockDeviceMapping() {{
                                            deviceName = "quam";
                                            ebs = new EbsInstanceBlockDeviceSpecification() {{
                                                deleteOnTermination = false;
                                                encrypted = false;
                                                iops = 474697L;
                                                kmsKeyId = "velit";
                                                snapshotId = "error";
                                                throughput = 158969L;
                                                volumeSize = 338007L;
                                                volumeType = EbsVolumeTypeEnum.STANDARD;
                                            }};
                                            noDevice = "laborum";
                                            virtualName = "animi";
                                        }}),
                                    }};
                                    image = "enim";
                                }};;
                                kmsKeyId = "odit";
                                platformOverride = CreateContainerRecipeRequestBodyPlatformOverrideEnum.LINUX;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("tenetur", "ipsam");
                                }};
                                workingDirectory = "id";
                            }};) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateContainerRecipeResponse res = sdk.sdk.createContainerRecipe(req);

            if (res.createContainerRecipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDistributionConfiguration

Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDistributionConfigurationRequest;
import org.openapis.openapi.models.operations.CreateDistributionConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateDistributionConfigurationResponse;
import org.openapis.openapi.models.shared.AmiDistributionConfiguration;
import org.openapis.openapi.models.shared.ContainerDistributionConfiguration;
import org.openapis.openapi.models.shared.ContainerRepositoryServiceEnum;
import org.openapis.openapi.models.shared.DiskImageFormatEnum;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.FastLaunchConfiguration;
import org.openapis.openapi.models.shared.FastLaunchLaunchTemplateSpecification;
import org.openapis.openapi.models.shared.FastLaunchSnapshotConfiguration;
import org.openapis.openapi.models.shared.LaunchPermissionConfiguration;
import org.openapis.openapi.models.shared.LaunchTemplateConfiguration;
import org.openapis.openapi.models.shared.S3ExportConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetContainerRepository;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDistributionConfigurationRequest req = new CreateDistributionConfigurationRequest(                new CreateDistributionConfigurationRequestBody("voluptatibus",                 new org.openapis.openapi.models.shared.Distribution[]{{
                                                add(new Distribution("ipsam") {{
                                                    amiDistributionConfiguration = new AmiDistributionConfiguration() {{
                                                        amiTags = new java.util.HashMap<String, String>() {{
                                                            put("praesentium", "voluptatibus");
                                                            put("ipsa", "omnis");
                                                        }};
                                                        description = "voluptate";
                                                        kmsKeyId = "cum";
                                                        launchPermission = new LaunchPermissionConfiguration() {{
                                                            organizationArns = new String[]{{
                                                                add("doloremque"),
                                                            }};
                                                            organizationalUnitArns = new String[]{{
                                                                add("ut"),
                                                                add("maiores"),
                                                            }};
                                                            userGroups = new String[]{{
                                                                add("corporis"),
                                                            }};
                                                            userIds = new String[]{{
                                                                add("iusto"),
                                                                add("dicta"),
                                                            }};
                                                        }};
                                                        name = "Bill Thompson";
                                                        targetAccountIds = new String[]{{
                                                            add("ipsum"),
                                                        }};
                                                    }};
                                                    containerDistributionConfiguration = new ContainerDistributionConfiguration(                new TargetContainerRepository("voluptates", ContainerRepositoryServiceEnum.ECR);) {{
                                                        containerTags = new String[]{{
                                                            add("molestias"),
                                                            add("excepturi"),
                                                            add("pariatur"),
                                                        }};
                                                        description = "modi";
                                                        targetRepository = new TargetContainerRepository("rem", ContainerRepositoryServiceEnum.ECR) {{
                                                            repositoryName = "praesentium";
                                                            service = ContainerRepositoryServiceEnum.ECR;
                                                        }};
                                                    }};
                                                    fastLaunchConfigurations = new org.openapis.openapi.models.shared.FastLaunchConfiguration[]{{
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "repudiandae";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "sint";
                                                                launchTemplateName = "veritatis";
                                                                launchTemplateVersion = "itaque";
                                                            }};
                                                            maxParallelLaunches = 277718L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 318569L;
                                                            }};
                                                        }}),
                                                    }};
                                                    launchTemplateConfigurations = new org.openapis.openapi.models.shared.LaunchTemplateConfiguration[]{{
                                                        add(new LaunchTemplateConfiguration("explicabo") {{
                                                            accountId = "est";
                                                            launchTemplateId = "quibusdam";
                                                            setDefaultVersion = false;
                                                        }}),
                                                    }};
                                                    licenseConfigurationArns = new String[]{{
                                                        add("distinctio"),
                                                        add("quibusdam"),
                                                        add("labore"),
                                                    }};
                                                    region = "modi";
                                                    s3ExportConfiguration = new S3ExportConfiguration(DiskImageFormatEnum.VMDK, "magni", "assumenda") {{
                                                        diskImageFormat = DiskImageFormatEnum.VMDK;
                                                        roleName = "aliquid";
                                                        s3Bucket = "cupiditate";
                                                        s3Prefix = "quos";
                                                    }};
                                                }}),
                                                add(new Distribution("necessitatibus") {{
                                                    amiDistributionConfiguration = new AmiDistributionConfiguration() {{
                                                        amiTags = new java.util.HashMap<String, String>() {{
                                                            put("fugit", "dolorum");
                                                        }};
                                                        description = "excepturi";
                                                        kmsKeyId = "tempora";
                                                        launchPermission = new LaunchPermissionConfiguration() {{
                                                            organizationArns = new String[]{{
                                                                add("tempore"),
                                                                add("labore"),
                                                                add("delectus"),
                                                            }};
                                                            organizationalUnitArns = new String[]{{
                                                                add("non"),
                                                                add("eligendi"),
                                                            }};
                                                            userGroups = new String[]{{
                                                                add("aliquid"),
                                                                add("provident"),
                                                                add("necessitatibus"),
                                                            }};
                                                            userIds = new String[]{{
                                                                add("officia"),
                                                                add("dolor"),
                                                                add("debitis"),
                                                            }};
                                                        }};
                                                        name = "Wilbur King";
                                                        targetAccountIds = new String[]{{
                                                            add("rerum"),
                                                            add("dicta"),
                                                            add("magnam"),
                                                            add("cumque"),
                                                        }};
                                                    }};
                                                    containerDistributionConfiguration = new ContainerDistributionConfiguration(                new TargetContainerRepository("accusamus", ContainerRepositoryServiceEnum.ECR);) {{
                                                        containerTags = new String[]{{
                                                            add("ea"),
                                                            add("aliquid"),
                                                            add("laborum"),
                                                            add("accusamus"),
                                                        }};
                                                        description = "non";
                                                        targetRepository = new TargetContainerRepository("enim", ContainerRepositoryServiceEnum.ECR) {{
                                                            repositoryName = "occaecati";
                                                            service = ContainerRepositoryServiceEnum.ECR;
                                                        }};
                                                    }};
                                                    fastLaunchConfigurations = new org.openapis.openapi.models.shared.FastLaunchConfiguration[]{{
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "quidem";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "provident";
                                                                launchTemplateName = "nam";
                                                                launchTemplateVersion = "id";
                                                            }};
                                                            maxParallelLaunches = 501324L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 533206L;
                                                            }};
                                                        }}),
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "sapiente";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "amet";
                                                                launchTemplateName = "deserunt";
                                                                launchTemplateVersion = "nisi";
                                                            }};
                                                            maxParallelLaunches = 423855L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 618809L;
                                                            }};
                                                        }}),
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "omnis";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "molestiae";
                                                                launchTemplateName = "perferendis";
                                                                launchTemplateVersion = "nihil";
                                                            }};
                                                            maxParallelLaunches = 301575L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 716075L;
                                                            }};
                                                        }}),
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "id";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "labore";
                                                                launchTemplateName = "labore";
                                                                launchTemplateVersion = "suscipit";
                                                            }};
                                                            maxParallelLaunches = 618016L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 749170L;
                                                            }};
                                                        }}),
                                                    }};
                                                    launchTemplateConfigurations = new org.openapis.openapi.models.shared.LaunchTemplateConfiguration[]{{
                                                        add(new LaunchTemplateConfiguration("architecto") {{
                                                            accountId = "vero";
                                                            launchTemplateId = "aspernatur";
                                                            setDefaultVersion = false;
                                                        }}),
                                                        add(new LaunchTemplateConfiguration("excepturi") {{
                                                            accountId = "magnam";
                                                            launchTemplateId = "et";
                                                            setDefaultVersion = false;
                                                        }}),
                                                    }};
                                                    licenseConfigurationArns = new String[]{{
                                                        add("provident"),
                                                        add("quos"),
                                                    }};
                                                    region = "sint";
                                                    s3ExportConfiguration = new S3ExportConfiguration(DiskImageFormatEnum.VMDK, "eum", "dolor") {{
                                                        diskImageFormat = DiskImageFormatEnum.VMDK;
                                                        roleName = "mollitia";
                                                        s3Bucket = "reiciendis";
                                                        s3Prefix = "mollitia";
                                                    }};
                                                }}),
                                                add(new Distribution("nostrum") {{
                                                    amiDistributionConfiguration = new AmiDistributionConfiguration() {{
                                                        amiTags = new java.util.HashMap<String, String>() {{
                                                            put("nemo", "quasi");
                                                        }};
                                                        description = "iure";
                                                        kmsKeyId = "doloribus";
                                                        launchPermission = new LaunchPermissionConfiguration() {{
                                                            organizationArns = new String[]{{
                                                                add("eius"),
                                                                add("maxime"),
                                                                add("deleniti"),
                                                                add("facilis"),
                                                            }};
                                                            organizationalUnitArns = new String[]{{
                                                                add("architecto"),
                                                                add("architecto"),
                                                            }};
                                                            userGroups = new String[]{{
                                                                add("ullam"),
                                                                add("expedita"),
                                                                add("nihil"),
                                                                add("repellat"),
                                                            }};
                                                            userIds = new String[]{{
                                                                add("sed"),
                                                                add("saepe"),
                                                                add("pariatur"),
                                                                add("accusantium"),
                                                            }};
                                                        }};
                                                        name = "Irma Morissette DDS";
                                                        targetAccountIds = new String[]{{
                                                            add("pariatur"),
                                                            add("maxime"),
                                                            add("ea"),
                                                            add("excepturi"),
                                                        }};
                                                    }};
                                                    containerDistributionConfiguration = new ContainerDistributionConfiguration(                new TargetContainerRepository("quidem", ContainerRepositoryServiceEnum.ECR);) {{
                                                        containerTags = new String[]{{
                                                            add("ea"),
                                                        }};
                                                        description = "accusantium";
                                                        targetRepository = new TargetContainerRepository("maiores", ContainerRepositoryServiceEnum.ECR) {{
                                                            repositoryName = "ab";
                                                            service = ContainerRepositoryServiceEnum.ECR;
                                                        }};
                                                    }};
                                                    fastLaunchConfigurations = new org.openapis.openapi.models.shared.FastLaunchConfiguration[]{{
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "voluptate";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "autem";
                                                                launchTemplateName = "nam";
                                                                launchTemplateVersion = "eaque";
                                                            }};
                                                            maxParallelLaunches = 866383L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 365496L;
                                                            }};
                                                        }}),
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "voluptatibus";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "perferendis";
                                                                launchTemplateName = "fugiat";
                                                                launchTemplateVersion = "amet";
                                                            }};
                                                            maxParallelLaunches = 11714L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 764912L;
                                                            }};
                                                        }}),
                                                    }};
                                                    launchTemplateConfigurations = new org.openapis.openapi.models.shared.LaunchTemplateConfiguration[]{{
                                                        add(new LaunchTemplateConfiguration("nobis") {{
                                                            accountId = "hic";
                                                            launchTemplateId = "libero";
                                                            setDefaultVersion = false;
                                                        }}),
                                                        add(new LaunchTemplateConfiguration("totam") {{
                                                            accountId = "dolores";
                                                            launchTemplateId = "quis";
                                                            setDefaultVersion = false;
                                                        }}),
                                                    }};
                                                    licenseConfigurationArns = new String[]{{
                                                        add("eaque"),
                                                        add("quis"),
                                                    }};
                                                    region = "nesciunt";
                                                    s3ExportConfiguration = new S3ExportConfiguration(DiskImageFormatEnum.RAW, "dolor", "vero") {{
                                                        diskImageFormat = DiskImageFormatEnum.VMDK;
                                                        roleName = "perferendis";
                                                        s3Bucket = "dolores";
                                                        s3Prefix = "minus";
                                                    }};
                                                }}),
                                                add(new Distribution("saepe") {{
                                                    amiDistributionConfiguration = new AmiDistributionConfiguration() {{
                                                        amiTags = new java.util.HashMap<String, String>() {{
                                                            put("recusandae", "omnis");
                                                            put("facilis", "perspiciatis");
                                                            put("voluptatem", "porro");
                                                            put("consequuntur", "blanditiis");
                                                        }};
                                                        description = "error";
                                                        kmsKeyId = "eaque";
                                                        launchPermission = new LaunchPermissionConfiguration() {{
                                                            organizationArns = new String[]{{
                                                                add("rerum"),
                                                                add("adipisci"),
                                                                add("asperiores"),
                                                            }};
                                                            organizationalUnitArns = new String[]{{
                                                                add("modi"),
                                                                add("iste"),
                                                                add("dolorum"),
                                                                add("deleniti"),
                                                            }};
                                                            userGroups = new String[]{{
                                                                add("provident"),
                                                                add("nobis"),
                                                                add("libero"),
                                                                add("delectus"),
                                                            }};
                                                            userIds = new String[]{{
                                                                add("quos"),
                                                                add("aliquid"),
                                                            }};
                                                        }};
                                                        name = "Dawn Fadel";
                                                        targetAccountIds = new String[]{{
                                                            add("excepturi"),
                                                            add("cum"),
                                                            add("voluptate"),
                                                            add("dignissimos"),
                                                        }};
                                                    }};
                                                    containerDistributionConfiguration = new ContainerDistributionConfiguration(                new TargetContainerRepository("odio", ContainerRepositoryServiceEnum.ECR);) {{
                                                        containerTags = new String[]{{
                                                            add("amet"),
                                                            add("dolorum"),
                                                            add("numquam"),
                                                            add("veritatis"),
                                                        }};
                                                        description = "ipsa";
                                                        targetRepository = new TargetContainerRepository("iure", ContainerRepositoryServiceEnum.ECR) {{
                                                            repositoryName = "ipsa";
                                                            service = ContainerRepositoryServiceEnum.ECR;
                                                        }};
                                                    }};
                                                    fastLaunchConfigurations = new org.openapis.openapi.models.shared.FastLaunchConfiguration[]{{
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "accusamus";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "quidem";
                                                                launchTemplateName = "voluptatibus";
                                                                launchTemplateVersion = "voluptas";
                                                            }};
                                                            maxParallelLaunches = 617658L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 179603L;
                                                            }};
                                                        }}),
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "atque";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "sit";
                                                                launchTemplateName = "fugiat";
                                                                launchTemplateVersion = "ab";
                                                            }};
                                                            maxParallelLaunches = 743835L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 679393L;
                                                            }};
                                                        }}),
                                                    }};
                                                    launchTemplateConfigurations = new org.openapis.openapi.models.shared.LaunchTemplateConfiguration[]{{
                                                        add(new LaunchTemplateConfiguration("deleniti") {{
                                                            accountId = "voluptate";
                                                            launchTemplateId = "dolorum";
                                                            setDefaultVersion = false;
                                                        }}),
                                                        add(new LaunchTemplateConfiguration("distinctio") {{
                                                            accountId = "omnis";
                                                            launchTemplateId = "necessitatibus";
                                                            setDefaultVersion = false;
                                                        }}),
                                                    }};
                                                    licenseConfigurationArns = new String[]{{
                                                        add("nihil"),
                                                        add("ipsum"),
                                                        add("voluptate"),
                                                        add("id"),
                                                    }};
                                                    region = "saepe";
                                                    s3ExportConfiguration = new S3ExportConfiguration(DiskImageFormatEnum.VHD, "accusamus", "ad") {{
                                                        diskImageFormat = DiskImageFormatEnum.VMDK;
                                                        roleName = "aspernatur";
                                                        s3Bucket = "perferendis";
                                                        s3Prefix = "amet";
                                                    }};
                                                }}),
                                            }}, "suscipit") {{
                                description = "deserunt";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("minima", "repellendus");
                                    put("totam", "similique");
                                    put("alias", "at");
                                }};
                            }};) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateDistributionConfigurationResponse res = sdk.sdk.createDistributionConfiguration(req);

            if (res.createDistributionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImage

Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageRequest;
import org.openapis.openapi.models.operations.CreateImageRequestBody;
import org.openapis.openapi.models.operations.CreateImageRequestBodyImageScanningConfiguration;
import org.openapis.openapi.models.operations.CreateImageRequestBodyImageTestsConfiguration;
import org.openapis.openapi.models.operations.CreateImageResponse;
import org.openapis.openapi.models.shared.EcrConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageRequest req = new CreateImageRequest(                new CreateImageRequestBody("esse", "harum") {{
                                containerRecipeArn = "iusto";
                                distributionConfigurationArn = "ipsum";
                                enhancedImageMetadataEnabled = false;
                                imageRecipeArn = "quisquam";
                                imageScanningConfiguration = new CreateImageRequestBodyImageScanningConfiguration() {{
                                    ecrConfiguration = new EcrConfiguration() {{
                                        containerTags = new String[]{{
                                            add("amet"),
                                            add("tempore"),
                                            add("accusamus"),
                                            add("numquam"),
                                        }};
                                        repositoryName = "enim";
                                    }};;
                                    imageScanningEnabled = false;
                                }};;
                                imageTestsConfiguration = new CreateImageRequestBodyImageTestsConfiguration() {{
                                    imageTestsEnabled = false;
                                    timeoutMinutes = 213312L;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("totam", "nihil");
                                    put("sit", "expedita");
                                    put("neque", "sed");
                                    put("vel", "libero");
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "quam";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cupiditate";
            }};            

            CreateImageResponse res = sdk.sdk.createImage(req);

            if (res.createImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImagePipeline

Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImagePipelineRequest;
import org.openapis.openapi.models.operations.CreateImagePipelineRequestBody;
import org.openapis.openapi.models.operations.CreateImagePipelineRequestBodyImageScanningConfiguration;
import org.openapis.openapi.models.operations.CreateImagePipelineRequestBodyImageTestsConfiguration;
import org.openapis.openapi.models.operations.CreateImagePipelineRequestBodySchedule;
import org.openapis.openapi.models.operations.CreateImagePipelineRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreateImagePipelineResponse;
import org.openapis.openapi.models.shared.EcrConfiguration;
import org.openapis.openapi.models.shared.PipelineExecutionStartConditionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImagePipelineRequest req = new CreateImagePipelineRequest(                new CreateImagePipelineRequestBody("pariatur", "soluta", "dicta") {{
                                containerRecipeArn = "laborum";
                                description = "totam";
                                distributionConfigurationArn = "incidunt";
                                enhancedImageMetadataEnabled = false;
                                imageRecipeArn = "aspernatur";
                                imageScanningConfiguration = new CreateImagePipelineRequestBodyImageScanningConfiguration() {{
                                    ecrConfiguration = new EcrConfiguration() {{
                                        containerTags = new String[]{{
                                            add("distinctio"),
                                        }};
                                        repositoryName = "facilis";
                                    }};;
                                    imageScanningEnabled = false;
                                }};;
                                imageTestsConfiguration = new CreateImagePipelineRequestBodyImageTestsConfiguration() {{
                                    imageTestsEnabled = false;
                                    timeoutMinutes = 396060L;
                                }};;
                                schedule = new CreateImagePipelineRequestBodySchedule() {{
                                    pipelineExecutionStartCondition = PipelineExecutionStartConditionEnum.EXPRESSION_MATCH_ONLY;
                                    scheduleExpression = "molestias";
                                    timezone = "temporibus";
                                }};;
                                status = CreateImagePipelineRequestBodyStatusEnum.DISABLED;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("fugit", "magni");
                                }};
                            }};) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            CreateImagePipelineResponse res = sdk.sdk.createImagePipeline(req);

            if (res.createImagePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageRecipe

Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageRecipeRequest;
import org.openapis.openapi.models.operations.CreateImageRecipeRequestBody;
import org.openapis.openapi.models.operations.CreateImageRecipeRequestBodyAdditionalInstanceConfiguration;
import org.openapis.openapi.models.operations.CreateImageRecipeResponse;
import org.openapis.openapi.models.shared.ComponentConfiguration;
import org.openapis.openapi.models.shared.ComponentParameter;
import org.openapis.openapi.models.shared.EbsInstanceBlockDeviceSpecification;
import org.openapis.openapi.models.shared.EbsVolumeTypeEnum;
import org.openapis.openapi.models.shared.InstanceBlockDeviceMapping;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SystemsManagerAgent;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageRecipeRequest req = new CreateImageRecipeRequest(                new CreateImageRecipeRequestBody("nobis",                 new org.openapis.openapi.models.shared.ComponentConfiguration[]{{
                                                add(new ComponentConfiguration("dolorum") {{
                                                    componentArn = "saepe";
                                                    parameters = new org.openapis.openapi.models.shared.ComponentParameter[]{{
                                                        add(new ComponentParameter("dolorem",                 new String[]{{
                                                                            add("labore"),
                                                                            add("adipisci"),
                                                                        }}) {{
                                                            name = "Gayle Lueilwitz";
                                                            value = new String[]{{
                                                                add("delectus"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }}, "architecto", "quae", "aut") {{
                                additionalInstanceConfiguration = new CreateImageRecipeRequestBodyAdditionalInstanceConfiguration() {{
                                    systemsManagerAgent = new SystemsManagerAgent() {{
                                        uninstallAfterBuild = false;
                                    }};;
                                    userDataOverride = "quas";
                                }};;
                                blockDeviceMappings = new org.openapis.openapi.models.shared.InstanceBlockDeviceMapping[]{{
                                    add(new InstanceBlockDeviceMapping() {{
                                        deviceName = "consequatur";
                                        ebs = new EbsInstanceBlockDeviceSpecification() {{
                                            deleteOnTermination = false;
                                            encrypted = false;
                                            iops = 669917L;
                                            kmsKeyId = "repellendus";
                                            snapshotId = "porro";
                                            throughput = 984330L;
                                            volumeSize = 281730L;
                                            volumeType = EbsVolumeTypeEnum.GP3;
                                        }};
                                        noDevice = "cupiditate";
                                        virtualName = "qui";
                                    }}),
                                    add(new InstanceBlockDeviceMapping() {{
                                        deviceName = "quae";
                                        ebs = new EbsInstanceBlockDeviceSpecification() {{
                                            deleteOnTermination = false;
                                            encrypted = false;
                                            iops = 512393L;
                                            kmsKeyId = "odio";
                                            snapshotId = "occaecati";
                                            throughput = 977496L;
                                            volumeSize = 787542L;
                                            volumeType = EbsVolumeTypeEnum.ST1;
                                        }};
                                        noDevice = "omnis";
                                        virtualName = "quis";
                                    }}),
                                    add(new InstanceBlockDeviceMapping() {{
                                        deviceName = "ipsum";
                                        ebs = new EbsInstanceBlockDeviceSpecification() {{
                                            deleteOnTermination = false;
                                            encrypted = false;
                                            iops = 961571L;
                                            kmsKeyId = "voluptate";
                                            snapshotId = "consectetur";
                                            throughput = 878870L;
                                            volumeSize = 949319L;
                                            volumeType = EbsVolumeTypeEnum.GP2;
                                        }};
                                        noDevice = "hic";
                                        virtualName = "distinctio";
                                    }}),
                                    add(new InstanceBlockDeviceMapping() {{
                                        deviceName = "quod";
                                        ebs = new EbsInstanceBlockDeviceSpecification() {{
                                            deleteOnTermination = false;
                                            encrypted = false;
                                            iops = 486160L;
                                            kmsKeyId = "similique";
                                            snapshotId = "facilis";
                                            throughput = 874288L;
                                            volumeSize = 498140L;
                                            volumeType = EbsVolumeTypeEnum.IO2;
                                        }};
                                        noDevice = "quibusdam";
                                        virtualName = "illum";
                                    }}),
                                }};
                                description = "sequi";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("impedit", "aut");
                                    put("voluptatibus", "exercitationem");
                                    put("nulla", "fugit");
                                }};
                                workingDirectory = "porro";
                            }};) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "iusto";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "officia";
            }};            

            CreateImageRecipeResponse res = sdk.sdk.createImageRecipe(req);

            if (res.createImageRecipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInfrastructureConfiguration

Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInfrastructureConfigurationRequest;
import org.openapis.openapi.models.operations.CreateInfrastructureConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateInfrastructureConfigurationRequestBodyInstanceMetadataOptions;
import org.openapis.openapi.models.operations.CreateInfrastructureConfigurationRequestBodyLogging;
import org.openapis.openapi.models.operations.CreateInfrastructureConfigurationResponse;
import org.openapis.openapi.models.shared.S3Logs;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInfrastructureConfigurationRequest req = new CreateInfrastructureConfigurationRequest(                new CreateInfrastructureConfigurationRequestBody("ipsam", "ea", "aspernatur") {{
                                description = "vel";
                                instanceMetadataOptions = new CreateInfrastructureConfigurationRequestBodyInstanceMetadataOptions() {{
                                    httpPutResponseHopLimit = 822118L;
                                    httpTokens = "magnam";
                                }};;
                                instanceTypes = new String[]{{
                                    add("ex"),
                                }};
                                keyPair = "laudantium";
                                logging = new CreateInfrastructureConfigurationRequestBodyLogging() {{
                                    s3Logs = new S3Logs() {{
                                        s3BucketName = "dicta";
                                        s3KeyPrefix = "dolor";
                                    }};;
                                }};;
                                resourceTags = new java.util.HashMap<String, String>() {{
                                    put("quasi", "ex");
                                    put("nulla", "excepturi");
                                    put("voluptatibus", "nostrum");
                                    put("sapiente", "quisquam");
                                }};
                                securityGroupIds = new String[]{{
                                    add("ea"),
                                    add("impedit"),
                                    add("corporis"),
                                    add("veniam"),
                                }};
                                snsTopicArn = "aliquid";
                                subnetId = "inventore";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ea", "quo");
                                    put("consectetur", "recusandae");
                                }};
                                terminateInstanceOnFailure = false;
                            }};) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
            }};            

            CreateInfrastructureConfigurationResponse res = sdk.sdk.createInfrastructureConfiguration(req);

            if (res.createInfrastructureConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteComponent

Deletes a component build version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteComponentRequest;
import org.openapis.openapi.models.operations.DeleteComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteComponentRequest req = new DeleteComponentRequest("impedit") {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "accusamus";
                xAmzDate = "inventore";
                xAmzSecurityToken = "non";
                xAmzSignature = "et";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteComponentResponse res = sdk.sdk.deleteComponent(req);

            if (res.deleteComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContainerRecipe

Deletes a container recipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContainerRecipeRequest;
import org.openapis.openapi.models.operations.DeleteContainerRecipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContainerRecipeRequest req = new DeleteContainerRecipeRequest("placeat") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "eum";
                xAmzCredential = "autem";
                xAmzDate = "nobis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nulla";
            }};            

            DeleteContainerRecipeResponse res = sdk.sdk.deleteContainerRecipe(req);

            if (res.deleteContainerRecipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDistributionConfiguration

Deletes a distribution configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDistributionConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteDistributionConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDistributionConfigurationRequest req = new DeleteDistributionConfigurationRequest("libero") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "numquam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "provident";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteDistributionConfigurationResponse res = sdk.sdk.deleteDistributionConfiguration(req);

            if (res.deleteDistributionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImage

<p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageRequest;
import org.openapis.openapi.models.operations.DeleteImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImageRequest req = new DeleteImageRequest("odio") {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "esse";
                xAmzCredential = "esse";
                xAmzDate = "rem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "quidem";
            }};            

            DeleteImageResponse res = sdk.sdk.deleteImage(req);

            if (res.deleteImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImagePipeline

Deletes an image pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImagePipelineRequest;
import org.openapis.openapi.models.operations.DeleteImagePipelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImagePipelineRequest req = new DeleteImagePipelineRequest("ut") {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "assumenda";
                xAmzDate = "eos";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteImagePipelineResponse res = sdk.sdk.deleteImagePipeline(req);

            if (res.deleteImagePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImageRecipe

Deletes an image recipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageRecipeRequest;
import org.openapis.openapi.models.operations.DeleteImageRecipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImageRecipeRequest req = new DeleteImageRecipeRequest("id") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
            }};            

            DeleteImageRecipeResponse res = sdk.sdk.deleteImageRecipe(req);

            if (res.deleteImageRecipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInfrastructureConfiguration

Deletes an infrastructure configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInfrastructureConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteInfrastructureConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInfrastructureConfigurationRequest req = new DeleteInfrastructureConfigurationRequest("voluptas") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteInfrastructureConfigurationResponse res = sdk.sdk.deleteInfrastructureConfiguration(req);

            if (res.deleteInfrastructureConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComponent

Gets a component object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComponentRequest;
import org.openapis.openapi.models.operations.GetComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComponentRequest req = new GetComponentRequest("quo") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aperiam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "inventore";
            }};            

            GetComponentResponse res = sdk.sdk.getComponent(req);

            if (res.getComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComponentPolicy

Gets a component policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComponentPolicyRequest;
import org.openapis.openapi.models.operations.GetComponentPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComponentPolicyRequest req = new GetComponentPolicyRequest("totam") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "odio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dolores";
            }};            

            GetComponentPolicyResponse res = sdk.sdk.getComponentPolicy(req);

            if (res.getComponentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerRecipe

Retrieves a container recipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerRecipeRequest;
import org.openapis.openapi.models.operations.GetContainerRecipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerRecipeRequest req = new GetContainerRecipeRequest("molestiae") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "porro";
                xAmzCredential = "eum";
                xAmzDate = "quas";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "deleniti";
            }};            

            GetContainerRecipeResponse res = sdk.sdk.getContainerRecipe(req);

            if (res.getContainerRecipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerRecipePolicy

Retrieves the policy for a container recipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerRecipePolicyRequest;
import org.openapis.openapi.models.operations.GetContainerRecipePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerRecipePolicyRequest req = new GetContainerRecipePolicyRequest("fuga") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "atque";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "fugit";
            }};            

            GetContainerRecipePolicyResponse res = sdk.sdk.getContainerRecipePolicy(req);

            if (res.getContainerRecipePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributionConfiguration

Gets a distribution configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributionConfigurationRequest;
import org.openapis.openapi.models.operations.GetDistributionConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDistributionConfigurationRequest req = new GetDistributionConfigurationRequest("consequuntur") {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "saepe";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "atque";
                xAmzSignature = "et";
                xAmzSignedHeaders = "esse";
            }};            

            GetDistributionConfigurationResponse res = sdk.sdk.getDistributionConfiguration(req);

            if (res.getDistributionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImage

Gets an image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageRequest;
import org.openapis.openapi.models.operations.GetImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImageRequest req = new GetImageRequest("accusamus") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quod";
                xAmzDate = "nam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quasi";
            }};            

            GetImageResponse res = sdk.sdk.getImage(req);

            if (res.getImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagePipeline

Gets an image pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagePipelineRequest;
import org.openapis.openapi.models.operations.GetImagePipelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImagePipelineRequest req = new GetImagePipelineRequest("vel") {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "rerum";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "minima";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "eligendi";
            }};            

            GetImagePipelineResponse res = sdk.sdk.getImagePipeline(req);

            if (res.getImagePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagePolicy

Gets an image policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagePolicyRequest;
import org.openapis.openapi.models.operations.GetImagePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImagePolicyRequest req = new GetImagePolicyRequest("culpa") {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cumque";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quaerat";
            }};            

            GetImagePolicyResponse res = sdk.sdk.getImagePolicy(req);

            if (res.getImagePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageRecipe

Gets an image recipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageRecipeRequest;
import org.openapis.openapi.models.operations.GetImageRecipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImageRecipeRequest req = new GetImageRecipeRequest("consectetur") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "provident";
                xAmzDate = "a";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "esse";
            }};            

            GetImageRecipeResponse res = sdk.sdk.getImageRecipe(req);

            if (res.getImageRecipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImageRecipePolicy

Gets an image recipe policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImageRecipePolicyRequest;
import org.openapis.openapi.models.operations.GetImageRecipePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImageRecipePolicyRequest req = new GetImageRecipePolicyRequest("a") {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
            }};            

            GetImageRecipePolicyResponse res = sdk.sdk.getImageRecipePolicy(req);

            if (res.getImageRecipePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInfrastructureConfiguration

Gets an infrastructure configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfrastructureConfigurationRequest;
import org.openapis.openapi.models.operations.GetInfrastructureConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInfrastructureConfigurationRequest req = new GetInfrastructureConfigurationRequest("veritatis") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "similique";
                xAmzDate = "culpa";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quae";
            }};            

            GetInfrastructureConfigurationResponse res = sdk.sdk.getInfrastructureConfiguration(req);

            if (res.getInfrastructureConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflowExecution

Get the runtime information that was logged for a specific runtime instance of the workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowExecutionRequest;
import org.openapis.openapi.models.operations.GetWorkflowExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowExecutionRequest req = new GetWorkflowExecutionRequest("vel") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "eius";
                xAmzCredential = "libero";
                xAmzDate = "illum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "aliquam";
            }};            

            GetWorkflowExecutionResponse res = sdk.sdk.getWorkflowExecution(req);

            if (res.getWorkflowExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflowStepExecution

Get the runtime information that was logged for a specific runtime instance of the workflow step.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowStepExecutionRequest;
import org.openapis.openapi.models.operations.GetWorkflowStepExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowStepExecutionRequest req = new GetWorkflowStepExecutionRequest("dicta") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ullam";
                xAmzDate = "nisi";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "qui";
            }};            

            GetWorkflowStepExecutionResponse res = sdk.sdk.getWorkflowStepExecution(req);

            if (res.getWorkflowStepExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importComponent

Imports a component and transforms its data into a component document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportComponentRequest;
import org.openapis.openapi.models.operations.ImportComponentRequestBody;
import org.openapis.openapi.models.operations.ImportComponentRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ImportComponentRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.ImportComponentRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.ImportComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportComponentRequest req = new ImportComponentRequest(                new ImportComponentRequestBody("ex", ImportComponentRequestBodyFormatEnum.SHELL, "deleniti", ImportComponentRequestBodyPlatformEnum.LINUX, "dolorum", ImportComponentRequestBodyTypeEnum.BUILD) {{
                                changeDescription = "omnis";
                                data = "tenetur";
                                description = "quasi";
                                kmsKeyId = "at";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("voluptate", "ipsa");
                                }};
                                uri = "http://bouncy-cursor.biz";
                            }};) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "accusantium";
                xAmzDate = "rem";
                xAmzSecurityToken = "aut";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "eum";
            }};            

            ImportComponentResponse res = sdk.sdk.importComponent(req);

            if (res.importComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importVmImage

<p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportVmImageRequest;
import org.openapis.openapi.models.operations.ImportVmImageRequestBody;
import org.openapis.openapi.models.operations.ImportVmImageRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.ImportVmImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportVmImageRequest req = new ImportVmImageRequest(                new ImportVmImageRequestBody("ab", "corrupti", ImportVmImageRequestBodyPlatformEnum.WINDOWS, "voluptatem", "dolor") {{
                                description = "occaecati";
                                osVersion = "numquam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "voluptas");
                                    put("aut", "dignissimos");
                                    put("dicta", "maiores");
                                    put("natus", "velit");
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ImportVmImageResponse res = sdk.sdk.importVmImage(req);

            if (res.importVmImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponentBuildVersions

<p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentBuildVersionsRequest;
import org.openapis.openapi.models.operations.ListComponentBuildVersionsRequestBody;
import org.openapis.openapi.models.operations.ListComponentBuildVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentBuildVersionsRequest req = new ListComponentBuildVersionsRequest(                new ListComponentBuildVersionsRequestBody("officia") {{
                                maxResults = 807023L;
                                nextToken = "dignissimos";
                            }};) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nemo";
                xAmzDate = "quae";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "quod";
                maxResults = "labore";
                nextToken = "ab";
            }};            

            ListComponentBuildVersionsResponse res = sdk.sdk.listComponentBuildVersions(req);

            if (res.listComponentBuildVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponents

<p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentsRequest;
import org.openapis.openapi.models.operations.ListComponentsRequestBody;
import org.openapis.openapi.models.operations.ListComponentsRequestBodyOwnerEnum;
import org.openapis.openapi.models.operations.ListComponentsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentsRequest req = new ListComponentsRequest(                new ListComponentsRequestBody() {{
                                byName = false;
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Ricardo Franecki";
                                        values = new String[]{{
                                            add("totam"),
                                            add("fugiat"),
                                            add("vel"),
                                            add("ducimus"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Cecil Grant";
                                        values = new String[]{{
                                            add("commodi"),
                                            add("in"),
                                            add("corporis"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Mack Hettinger";
                                        values = new String[]{{
                                            add("cum"),
                                        }};
                                    }}),
                                }};
                                maxResults = 232627L;
                                nextToken = "in";
                                owner = ListComponentsRequestBodyOwnerEnum.SHARED;
                            }};) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "facere";
                xAmzCredential = "numquam";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "quidem";
                maxResults = "saepe";
                nextToken = "necessitatibus";
            }};            

            ListComponentsResponse res = sdk.sdk.listComponents(req);

            if (res.listComponentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContainerRecipes

Returns a list of container recipes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContainerRecipesRequest;
import org.openapis.openapi.models.operations.ListContainerRecipesRequestBody;
import org.openapis.openapi.models.operations.ListContainerRecipesRequestBodyOwnerEnum;
import org.openapis.openapi.models.operations.ListContainerRecipesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContainerRecipesRequest req = new ListContainerRecipesRequest(                new ListContainerRecipesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Chad Franey IV";
                                        values = new String[]{{
                                            add("debitis"),
                                            add("consectetur"),
                                            add("corporis"),
                                            add("harum"),
                                        }};
                                    }}),
                                }};
                                maxResults = 385237L;
                                nextToken = "ipsa";
                                owner = ListContainerRecipesRequestBodyOwnerEnum.THIRD_PARTY;
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "accusamus";
                xAmzDate = "similique";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "voluptas";
                maxResults = "voluptas";
                nextToken = "voluptas";
            }};            

            ListContainerRecipesResponse res = sdk.sdk.listContainerRecipes(req);

            if (res.listContainerRecipesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDistributionConfigurations

Returns a list of distribution configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDistributionConfigurationsRequest;
import org.openapis.openapi.models.operations.ListDistributionConfigurationsRequestBody;
import org.openapis.openapi.models.operations.ListDistributionConfigurationsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDistributionConfigurationsRequest req = new ListDistributionConfigurationsRequest(                new ListDistributionConfigurationsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Travis Schinner";
                                        values = new String[]{{
                                            add("dolore"),
                                            add("aliquam"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Lionel Herman";
                                        values = new String[]{{
                                            add("quas"),
                                            add("hic"),
                                            add("nesciunt"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Byron Stroman";
                                        values = new String[]{{
                                            add("nobis"),
                                            add("sit"),
                                        }};
                                    }}),
                                }};
                                maxResults = 699575L;
                                nextToken = "sed";
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "asperiores";
                xAmzDate = "facilis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "ab";
                maxResults = "iste";
                nextToken = "dolore";
            }};            

            ListDistributionConfigurationsResponse res = sdk.sdk.listDistributionConfigurations(req);

            if (res.listDistributionConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImageBuildVersions

Returns a list of image build versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImageBuildVersionsRequest;
import org.openapis.openapi.models.operations.ListImageBuildVersionsRequestBody;
import org.openapis.openapi.models.operations.ListImageBuildVersionsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImageBuildVersionsRequest req = new ListImageBuildVersionsRequest(                new ListImageBuildVersionsRequestBody("sed") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Melody Cole";
                                        values = new String[]{{
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Rogelio Bins V";
                                        values = new String[]{{
                                            add("incidunt"),
                                            add("sed"),
                                            add("provident"),
                                            add("eius"),
                                        }};
                                    }}),
                                }};
                                maxResults = 896762L;
                                nextToken = "ipsum";
                            }};) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "quos";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "voluptate";
                maxResults = "reiciendis";
                nextToken = "ex";
            }};            

            ListImageBuildVersionsResponse res = sdk.sdk.listImageBuildVersions(req);

            if (res.listImageBuildVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImagePackages

List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImagePackagesRequest;
import org.openapis.openapi.models.operations.ListImagePackagesRequestBody;
import org.openapis.openapi.models.operations.ListImagePackagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImagePackagesRequest req = new ListImagePackagesRequest(                new ListImagePackagesRequestBody("non") {{
                                maxResults = 888044L;
                                nextToken = "praesentium";
                            }};) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "incidunt";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "sit";
                maxResults = "nobis";
                nextToken = "error";
            }};            

            ListImagePackagesResponse res = sdk.sdk.listImagePackages(req);

            if (res.listImagePackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImagePipelineImages

Returns a list of images created by the specified pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImagePipelineImagesRequest;
import org.openapis.openapi.models.operations.ListImagePipelineImagesRequestBody;
import org.openapis.openapi.models.operations.ListImagePipelineImagesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImagePipelineImagesRequest req = new ListImagePipelineImagesRequest(                new ListImagePipelineImagesRequestBody("minima") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Dr. Jody Cummings";
                                        values = new String[]{{
                                            add("in"),
                                            add("officiis"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Marsha Heidenreich";
                                        values = new String[]{{
                                            add("dolorum"),
                                            add("voluptatum"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Irvin Rath";
                                        values = new String[]{{
                                            add("nostrum"),
                                            add("officia"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Caleb Goldner";
                                        values = new String[]{{
                                            add("fugiat"),
                                            add("voluptatem"),
                                        }};
                                    }}),
                                }};
                                maxResults = 635057L;
                                nextToken = "expedita";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "esse";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "sit";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "quas";
                maxResults = "repudiandae";
                nextToken = "corporis";
            }};            

            ListImagePipelineImagesResponse res = sdk.sdk.listImagePipelineImages(req);

            if (res.listImagePipelineImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImagePipelines

Returns a list of image pipelines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImagePipelinesRequest;
import org.openapis.openapi.models.operations.ListImagePipelinesRequestBody;
import org.openapis.openapi.models.operations.ListImagePipelinesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImagePipelinesRequest req = new ListImagePipelinesRequest(                new ListImagePipelinesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Jane Bailey";
                                        values = new String[]{{
                                            add("error"),
                                            add("consequatur"),
                                            add("incidunt"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Ms. Opal Buckridge";
                                        values = new String[]{{
                                            add("atque"),
                                            add("laborum"),
                                            add("nam"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Brent Abernathy";
                                        values = new String[]{{
                                            add("unde"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 588740L;
                                nextToken = "repellendus";
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "perferendis";
                xAmzDate = "est";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "facere";
                maxResults = "fuga";
                nextToken = "praesentium";
            }};            

            ListImagePipelinesResponse res = sdk.sdk.listImagePipelines(req);

            if (res.listImagePipelinesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImageRecipes

Returns a list of image recipes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImageRecipesRequest;
import org.openapis.openapi.models.operations.ListImageRecipesRequestBody;
import org.openapis.openapi.models.operations.ListImageRecipesRequestBodyOwnerEnum;
import org.openapis.openapi.models.operations.ListImageRecipesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImageRecipesRequest req = new ListImageRecipesRequest(                new ListImageRecipesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Ms. Alexandra VonRueden";
                                        values = new String[]{{
                                            add("totam"),
                                            add("suscipit"),
                                            add("quidem"),
                                            add("maxime"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Georgia Farrell";
                                        values = new String[]{{
                                            add("error"),
                                            add("officiis"),
                                            add("officiis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 880107L;
                                nextToken = "natus";
                                owner = ListImageRecipesRequestBodyOwnerEnum.SHARED;
                            }};) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "ex";
                xAmzCredential = "maiores";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "at";
                xAmzSignature = "error";
                xAmzSignedHeaders = "blanditiis";
                maxResults = "suscipit";
                nextToken = "repudiandae";
            }};            

            ListImageRecipesResponse res = sdk.sdk.listImageRecipes(req);

            if (res.listImageRecipesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImageScanFindingAggregations

<p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImageScanFindingAggregationsRequest;
import org.openapis.openapi.models.operations.ListImageScanFindingAggregationsRequestBody;
import org.openapis.openapi.models.operations.ListImageScanFindingAggregationsRequestBodyFilter;
import org.openapis.openapi.models.operations.ListImageScanFindingAggregationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImageScanFindingAggregationsRequest req = new ListImageScanFindingAggregationsRequest(                new ListImageScanFindingAggregationsRequestBody() {{
                                filter = new ListImageScanFindingAggregationsRequestBodyFilter() {{
                                    name = "Willie Walker";
                                    values = new String[]{{
                                        add("reiciendis"),
                                        add("doloremque"),
                                    }};
                                }};;
                                nextToken = "repudiandae";
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "beatae";
                xAmzDate = "dolores";
                xAmzSecurityToken = "enim";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "velit";
                nextToken = "a";
            }};            

            ListImageScanFindingAggregationsResponse res = sdk.sdk.listImageScanFindingAggregations(req);

            if (res.listImageScanFindingAggregationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImageScanFindings

Returns a list of image scan findings for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImageScanFindingsRequest;
import org.openapis.openapi.models.operations.ListImageScanFindingsRequestBody;
import org.openapis.openapi.models.operations.ListImageScanFindingsResponse;
import org.openapis.openapi.models.shared.ImageScanFindingsFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImageScanFindingsRequest req = new ListImageScanFindingsRequest(                new ListImageScanFindingsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.ImageScanFindingsFilter[]{{
                                    add(new ImageScanFindingsFilter() {{
                                        name = "Carlos McClure";
                                        values = new String[]{{
                                            add("adipisci"),
                                            add("eveniet"),
                                        }};
                                    }}),
                                    add(new ImageScanFindingsFilter() {{
                                        name = "Carlos Considine";
                                        values = new String[]{{
                                            add("error"),
                                            add("illo"),
                                        }};
                                    }}),
                                }};
                                maxResults = 361306L;
                                nextToken = "quidem";
                            }};) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "non";
                xAmzCredential = "vero";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "iure";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "totam";
                maxResults = "quae";
                nextToken = "molestiae";
            }};            

            ListImageScanFindingsResponse res = sdk.sdk.listImageScanFindings(req);

            if (res.listImageScanFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImages

Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImagesRequest;
import org.openapis.openapi.models.operations.ListImagesRequestBody;
import org.openapis.openapi.models.operations.ListImagesRequestBodyOwnerEnum;
import org.openapis.openapi.models.operations.ListImagesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImagesRequest req = new ListImagesRequest(                new ListImagesRequestBody() {{
                                byName = false;
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Elmer Treutel";
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("rem"),
                                            add("aliquam"),
                                        }};
                                    }}),
                                }};
                                includeDeprecated = false;
                                maxResults = 320565L;
                                nextToken = "repellat";
                                owner = ListImagesRequestBodyOwnerEnum.SELF;
                            }};) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "nihil";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "maiores";
                maxResults = "reiciendis";
                nextToken = "dolores";
            }};            

            ListImagesResponse res = sdk.sdk.listImages(req);

            if (res.listImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInfrastructureConfigurations

Returns a list of infrastructure configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInfrastructureConfigurationsRequest;
import org.openapis.openapi.models.operations.ListInfrastructureConfigurationsRequestBody;
import org.openapis.openapi.models.operations.ListInfrastructureConfigurationsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInfrastructureConfigurationsRequest req = new ListInfrastructureConfigurationsRequest(                new ListInfrastructureConfigurationsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Dr. Lee Dooley";
                                        values = new String[]{{
                                            add("molestiae"),
                                            add("ex"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Molly Ferry";
                                        values = new String[]{{
                                            add("nemo"),
                                            add("recusandae"),
                                        }};
                                    }}),
                                }};
                                maxResults = 456520L;
                                nextToken = "provident";
                            }};) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "quasi";
                maxResults = "animi";
                nextToken = "nostrum";
            }};            

            ListInfrastructureConfigurationsResponse res = sdk.sdk.listInfrastructureConfigurations(req);

            if (res.listInfrastructureConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns the list of tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("provident") {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "animi";
                xAmzCredential = "ex";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflowExecutions

Returns a list of workflow runtime instance metadata objects for a specific image build version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowExecutionsRequest;
import org.openapis.openapi.models.operations.ListWorkflowExecutionsRequestBody;
import org.openapis.openapi.models.operations.ListWorkflowExecutionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowExecutionsRequest req = new ListWorkflowExecutionsRequest(                new ListWorkflowExecutionsRequestBody("in") {{
                                maxResults = 721407L;
                                nextToken = "earum";
                            }};) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "modi";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "officiis";
                maxResults = "sapiente";
                nextToken = "cumque";
            }};            

            ListWorkflowExecutionsResponse res = sdk.sdk.listWorkflowExecutions(req);

            if (res.listWorkflowExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflowStepExecutions

Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowStepExecutionsRequest;
import org.openapis.openapi.models.operations.ListWorkflowStepExecutionsRequestBody;
import org.openapis.openapi.models.operations.ListWorkflowStepExecutionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowStepExecutionsRequest req = new ListWorkflowStepExecutionsRequest(                new ListWorkflowStepExecutionsRequestBody("rerum") {{
                                maxResults = 272229L;
                                nextToken = "quis";
                            }};) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "cumque";
                xAmzDate = "quae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "aspernatur";
                maxResults = "eum";
                nextToken = "eius";
            }};            

            ListWorkflowStepExecutionsResponse res = sdk.sdk.listWorkflowStepExecutions(req);

            if (res.listWorkflowStepExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putComponentPolicy

Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutComponentPolicyRequest;
import org.openapis.openapi.models.operations.PutComponentPolicyRequestBody;
import org.openapis.openapi.models.operations.PutComponentPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutComponentPolicyRequest req = new PutComponentPolicyRequest(                new PutComponentPolicyRequestBody("at", "impedit");) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "eum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "minima";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "cupiditate";
            }};            

            PutComponentPolicyResponse res = sdk.sdk.putComponentPolicy(req);

            if (res.putComponentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putContainerRecipePolicy

Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutContainerRecipePolicyRequest;
import org.openapis.openapi.models.operations.PutContainerRecipePolicyRequestBody;
import org.openapis.openapi.models.operations.PutContainerRecipePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutContainerRecipePolicyRequest req = new PutContainerRecipePolicyRequest(                new PutContainerRecipePolicyRequestBody("earum", "soluta");) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "illum";
                xAmzCredential = "eaque";
                xAmzDate = "earum";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "debitis";
            }};            

            PutContainerRecipePolicyResponse res = sdk.sdk.putContainerRecipePolicy(req);

            if (res.putContainerRecipePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putImagePolicy

Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutImagePolicyRequest;
import org.openapis.openapi.models.operations.PutImagePolicyRequestBody;
import org.openapis.openapi.models.operations.PutImagePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutImagePolicyRequest req = new PutImagePolicyRequest(                new PutImagePolicyRequestBody("porro", "suscipit");) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "cumque";
                xAmzDate = "fuga";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            PutImagePolicyResponse res = sdk.sdk.putImagePolicy(req);

            if (res.putImagePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putImageRecipePolicy

Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutImageRecipePolicyRequest;
import org.openapis.openapi.models.operations.PutImageRecipePolicyRequestBody;
import org.openapis.openapi.models.operations.PutImageRecipePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutImageRecipePolicyRequest req = new PutImageRecipePolicyRequest(                new PutImageRecipePolicyRequestBody("consequatur", "quasi");) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "natus";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "quasi";
            }};            

            PutImageRecipePolicyResponse res = sdk.sdk.putImageRecipePolicy(req);

            if (res.putImageRecipePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImagePipelineExecution

Manually triggers a pipeline to create an image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImagePipelineExecutionRequest;
import org.openapis.openapi.models.operations.StartImagePipelineExecutionRequestBody;
import org.openapis.openapi.models.operations.StartImagePipelineExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartImagePipelineExecutionRequest req = new StartImagePipelineExecutionRequest(                new StartImagePipelineExecutionRequestBody("doloribus", "nulla");) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "tempora";
                xAmzDate = "nihil";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "iusto";
            }};            

            StartImagePipelineExecutionResponse res = sdk.sdk.startImagePipelineExecution(req);

            if (res.startImagePipelineExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds a tag to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("maiores", "reiciendis");
                                                put("vel", "architecto");
                                                put("fugiat", "doloremque");
                                            }});, "dicta") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "esse";
                xAmzDate = "ex";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "ipsa";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("sunt",                 new String[]{{
                                add("fugiat"),
                                add("expedita"),
                            }}) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "officia";
                xAmzCredential = "suscipit";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "voluptas";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDistributionConfiguration

Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDistributionConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateDistributionConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateDistributionConfigurationResponse;
import org.openapis.openapi.models.shared.AmiDistributionConfiguration;
import org.openapis.openapi.models.shared.ContainerDistributionConfiguration;
import org.openapis.openapi.models.shared.ContainerRepositoryServiceEnum;
import org.openapis.openapi.models.shared.DiskImageFormatEnum;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.FastLaunchConfiguration;
import org.openapis.openapi.models.shared.FastLaunchLaunchTemplateSpecification;
import org.openapis.openapi.models.shared.FastLaunchSnapshotConfiguration;
import org.openapis.openapi.models.shared.LaunchPermissionConfiguration;
import org.openapis.openapi.models.shared.LaunchTemplateConfiguration;
import org.openapis.openapi.models.shared.S3ExportConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetContainerRepository;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDistributionConfigurationRequest req = new UpdateDistributionConfigurationRequest(                new UpdateDistributionConfigurationRequestBody("id", "ab",                 new org.openapis.openapi.models.shared.Distribution[]{{
                                                add(new Distribution("ipsa") {{
                                                    amiDistributionConfiguration = new AmiDistributionConfiguration() {{
                                                        amiTags = new java.util.HashMap<String, String>() {{
                                                            put("voluptates", "mollitia");
                                                            put("laborum", "libero");
                                                            put("ad", "deleniti");
                                                            put("enim", "vitae");
                                                        }};
                                                        description = "repellendus";
                                                        kmsKeyId = "ex";
                                                        launchPermission = new LaunchPermissionConfiguration() {{
                                                            organizationArns = new String[]{{
                                                                add("ex"),
                                                                add("ut"),
                                                                add("ad"),
                                                                add("expedita"),
                                                            }};
                                                            organizationalUnitArns = new String[]{{
                                                                add("molestias"),
                                                            }};
                                                            userGroups = new String[]{{
                                                                add("aliquid"),
                                                                add("beatae"),
                                                                add("voluptatum"),
                                                            }};
                                                            userIds = new String[]{{
                                                                add("veritatis"),
                                                                add("rerum"),
                                                                add("est"),
                                                            }};
                                                        }};
                                                        name = "Donald Williamson MD";
                                                        targetAccountIds = new String[]{{
                                                            add("debitis"),
                                                            add("voluptatem"),
                                                            add("alias"),
                                                            add("deleniti"),
                                                        }};
                                                    }};
                                                    containerDistributionConfiguration = new ContainerDistributionConfiguration(                new TargetContainerRepository("ullam", ContainerRepositoryServiceEnum.ECR);) {{
                                                        containerTags = new String[]{{
                                                            add("ex"),
                                                            add("sapiente"),
                                                            add("rem"),
                                                            add("minus"),
                                                        }};
                                                        description = "nemo";
                                                        targetRepository = new TargetContainerRepository("ratione", ContainerRepositoryServiceEnum.ECR) {{
                                                            repositoryName = "asperiores";
                                                            service = ContainerRepositoryServiceEnum.ECR;
                                                        }};
                                                    }};
                                                    fastLaunchConfigurations = new org.openapis.openapi.models.shared.FastLaunchConfiguration[]{{
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "illum";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "totam";
                                                                launchTemplateName = "impedit";
                                                                launchTemplateVersion = "quibusdam";
                                                            }};
                                                            maxParallelLaunches = 720528L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 373216L;
                                                            }};
                                                        }}),
                                                    }};
                                                    launchTemplateConfigurations = new org.openapis.openapi.models.shared.LaunchTemplateConfiguration[]{{
                                                        add(new LaunchTemplateConfiguration("inventore") {{
                                                            accountId = "dolor";
                                                            launchTemplateId = "aliquam";
                                                            setDefaultVersion = false;
                                                        }}),
                                                        add(new LaunchTemplateConfiguration("tempora") {{
                                                            accountId = "deleniti";
                                                            launchTemplateId = "veritatis";
                                                            setDefaultVersion = false;
                                                        }}),
                                                        add(new LaunchTemplateConfiguration("architecto") {{
                                                            accountId = "dolor";
                                                            launchTemplateId = "consequatur";
                                                            setDefaultVersion = false;
                                                        }}),
                                                    }};
                                                    licenseConfigurationArns = new String[]{{
                                                        add("modi"),
                                                    }};
                                                    region = "fugit";
                                                    s3ExportConfiguration = new S3ExportConfiguration(DiskImageFormatEnum.VHD, "ipsam", "consequuntur") {{
                                                        diskImageFormat = DiskImageFormatEnum.VMDK;
                                                        roleName = "laudantium";
                                                        s3Bucket = "quae";
                                                        s3Prefix = "dolor";
                                                    }};
                                                }}),
                                                add(new Distribution("distinctio") {{
                                                    amiDistributionConfiguration = new AmiDistributionConfiguration() {{
                                                        amiTags = new java.util.HashMap<String, String>() {{
                                                            put("eveniet", "impedit");
                                                            put("officiis", "esse");
                                                            put("necessitatibus", "sed");
                                                        }};
                                                        description = "veniam";
                                                        kmsKeyId = "nesciunt";
                                                        launchPermission = new LaunchPermissionConfiguration() {{
                                                            organizationArns = new String[]{{
                                                                add("eum"),
                                                                add("vel"),
                                                                add("voluptatum"),
                                                            }};
                                                            organizationalUnitArns = new String[]{{
                                                                add("exercitationem"),
                                                                add("ab"),
                                                            }};
                                                            userGroups = new String[]{{
                                                                add("autem"),
                                                                add("nobis"),
                                                                add("laboriosam"),
                                                                add("recusandae"),
                                                            }};
                                                            userIds = new String[]{{
                                                                add("voluptatem"),
                                                            }};
                                                        }};
                                                        name = "Alyssa Boyer";
                                                        targetAccountIds = new String[]{{
                                                            add("est"),
                                                            add("harum"),
                                                            add("sequi"),
                                                            add("doloribus"),
                                                        }};
                                                    }};
                                                    containerDistributionConfiguration = new ContainerDistributionConfiguration(                new TargetContainerRepository("numquam", ContainerRepositoryServiceEnum.ECR);) {{
                                                        containerTags = new String[]{{
                                                            add("optio"),
                                                            add("occaecati"),
                                                            add("nemo"),
                                                            add("voluptate"),
                                                        }};
                                                        description = "blanditiis";
                                                        targetRepository = new TargetContainerRepository("voluptas", ContainerRepositoryServiceEnum.ECR) {{
                                                            repositoryName = "officia";
                                                            service = ContainerRepositoryServiceEnum.ECR;
                                                        }};
                                                    }};
                                                    fastLaunchConfigurations = new org.openapis.openapi.models.shared.FastLaunchConfiguration[]{{
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "quos";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "eius";
                                                                launchTemplateName = "aspernatur";
                                                                launchTemplateVersion = "ducimus";
                                                            }};
                                                            maxParallelLaunches = 200516L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 681740L;
                                                            }};
                                                        }}),
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "laudantium";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "incidunt";
                                                                launchTemplateName = "quasi";
                                                                launchTemplateVersion = "rem";
                                                            }};
                                                            maxParallelLaunches = 851854L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 117380L;
                                                            }};
                                                        }}),
                                                    }};
                                                    launchTemplateConfigurations = new org.openapis.openapi.models.shared.LaunchTemplateConfiguration[]{{
                                                        add(new LaunchTemplateConfiguration("aperiam") {{
                                                            accountId = "consequuntur";
                                                            launchTemplateId = "consectetur";
                                                            setDefaultVersion = false;
                                                        }}),
                                                        add(new LaunchTemplateConfiguration("soluta") {{
                                                            accountId = "cupiditate";
                                                            launchTemplateId = "reiciendis";
                                                            setDefaultVersion = false;
                                                        }}),
                                                    }};
                                                    licenseConfigurationArns = new String[]{{
                                                        add("omnis"),
                                                    }};
                                                    region = "eos";
                                                    s3ExportConfiguration = new S3ExportConfiguration(DiskImageFormatEnum.VHD, "accusamus", "voluptatibus") {{
                                                        diskImageFormat = DiskImageFormatEnum.RAW;
                                                        roleName = "iste";
                                                        s3Bucket = "magni";
                                                        s3Prefix = "inventore";
                                                    }};
                                                }}),
                                                add(new Distribution("voluptatibus") {{
                                                    amiDistributionConfiguration = new AmiDistributionConfiguration() {{
                                                        amiTags = new java.util.HashMap<String, String>() {{
                                                            put("delectus", "minima");
                                                            put("praesentium", "maxime");
                                                            put("magnam", "temporibus");
                                                        }};
                                                        description = "quos";
                                                        kmsKeyId = "commodi";
                                                        launchPermission = new LaunchPermissionConfiguration() {{
                                                            organizationArns = new String[]{{
                                                                add("commodi"),
                                                                add("totam"),
                                                                add("earum"),
                                                                add("modi"),
                                                            }};
                                                            organizationalUnitArns = new String[]{{
                                                                add("vero"),
                                                                add("voluptatem"),
                                                                add("ipsam"),
                                                            }};
                                                            userGroups = new String[]{{
                                                                add("alias"),
                                                                add("quasi"),
                                                            }};
                                                            userIds = new String[]{{
                                                                add("maiores"),
                                                            }};
                                                        }};
                                                        name = "Bobbie Stokes";
                                                        targetAccountIds = new String[]{{
                                                            add("reprehenderit"),
                                                            add("est"),
                                                        }};
                                                    }};
                                                    containerDistributionConfiguration = new ContainerDistributionConfiguration(                new TargetContainerRepository("asperiores", ContainerRepositoryServiceEnum.ECR);) {{
                                                        containerTags = new String[]{{
                                                            add("sint"),
                                                            add("accusamus"),
                                                        }};
                                                        description = "impedit";
                                                        targetRepository = new TargetContainerRepository("necessitatibus", ContainerRepositoryServiceEnum.ECR) {{
                                                            repositoryName = "hic";
                                                            service = ContainerRepositoryServiceEnum.ECR;
                                                        }};
                                                    }};
                                                    fastLaunchConfigurations = new org.openapis.openapi.models.shared.FastLaunchConfiguration[]{{
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "voluptas";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "debitis";
                                                                launchTemplateName = "delectus";
                                                                launchTemplateVersion = "quae";
                                                            }};
                                                            maxParallelLaunches = 791880L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 685478L;
                                                            }};
                                                        }}),
                                                        add(new FastLaunchConfiguration(false) {{
                                                            accountId = "laborum";
                                                            enabled = false;
                                                            launchTemplate = new FastLaunchLaunchTemplateSpecification() {{
                                                                launchTemplateId = "consectetur";
                                                                launchTemplateName = "velit";
                                                                launchTemplateVersion = "atque";
                                                            }};
                                                            maxParallelLaunches = 216457L;
                                                            snapshotConfiguration = new FastLaunchSnapshotConfiguration() {{
                                                                targetResourceCount = 773035L;
                                                            }};
                                                        }}),
                                                    }};
                                                    launchTemplateConfigurations = new org.openapis.openapi.models.shared.LaunchTemplateConfiguration[]{{
                                                        add(new LaunchTemplateConfiguration("nam") {{
                                                            accountId = "soluta";
                                                            launchTemplateId = "repudiandae";
                                                            setDefaultVersion = false;
                                                        }}),
                                                    }};
                                                    licenseConfigurationArns = new String[]{{
                                                        add("iusto"),
                                                        add("voluptate"),
                                                    }};
                                                    region = "sequi";
                                                    s3ExportConfiguration = new S3ExportConfiguration(DiskImageFormatEnum.VHD, "iure", "odit") {{
                                                        diskImageFormat = DiskImageFormatEnum.RAW;
                                                        roleName = "neque";
                                                        s3Bucket = "quo";
                                                        s3Prefix = "deleniti";
                                                    }};
                                                }}),
                                            }}) {{
                                description = "vel";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "inventore";
                xAmzDate = "facere";
                xAmzSecurityToken = "libero";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdateDistributionConfigurationResponse res = sdk.sdk.updateDistributionConfiguration(req);

            if (res.updateDistributionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateImagePipeline

<p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateImagePipelineRequest;
import org.openapis.openapi.models.operations.UpdateImagePipelineRequestBody;
import org.openapis.openapi.models.operations.UpdateImagePipelineRequestBodyImageScanningConfiguration;
import org.openapis.openapi.models.operations.UpdateImagePipelineRequestBodyImageTestsConfiguration;
import org.openapis.openapi.models.operations.UpdateImagePipelineRequestBodySchedule;
import org.openapis.openapi.models.operations.UpdateImagePipelineRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateImagePipelineResponse;
import org.openapis.openapi.models.shared.EcrConfiguration;
import org.openapis.openapi.models.shared.PipelineExecutionStartConditionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateImagePipelineRequest req = new UpdateImagePipelineRequest(                new UpdateImagePipelineRequestBody("porro", "aliquam", "velit") {{
                                containerRecipeArn = "illo";
                                description = "accusantium";
                                distributionConfigurationArn = "vel";
                                enhancedImageMetadataEnabled = false;
                                imageRecipeArn = "ea";
                                imageScanningConfiguration = new UpdateImagePipelineRequestBodyImageScanningConfiguration() {{
                                    ecrConfiguration = new EcrConfiguration() {{
                                        containerTags = new String[]{{
                                            add("vero"),
                                        }};
                                        repositoryName = "excepturi";
                                    }};;
                                    imageScanningEnabled = false;
                                }};;
                                imageTestsConfiguration = new UpdateImagePipelineRequestBodyImageTestsConfiguration() {{
                                    imageTestsEnabled = false;
                                    timeoutMinutes = 431994L;
                                }};;
                                schedule = new UpdateImagePipelineRequestBodySchedule() {{
                                    pipelineExecutionStartCondition = PipelineExecutionStartConditionEnum.EXPRESSION_MATCH_ONLY;
                                    scheduleExpression = "ut";
                                    timezone = "perspiciatis";
                                }};;
                                status = UpdateImagePipelineRequestBodyStatusEnum.ENABLED;
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "iste";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "nisi";
            }};            

            UpdateImagePipelineResponse res = sdk.sdk.updateImagePipeline(req);

            if (res.updateImagePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInfrastructureConfiguration

Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInfrastructureConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateInfrastructureConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateInfrastructureConfigurationRequestBodyInstanceMetadataOptions;
import org.openapis.openapi.models.operations.UpdateInfrastructureConfigurationRequestBodyLogging;
import org.openapis.openapi.models.operations.UpdateInfrastructureConfigurationResponse;
import org.openapis.openapi.models.shared.S3Logs;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInfrastructureConfigurationRequest req = new UpdateInfrastructureConfigurationRequest(                new UpdateInfrastructureConfigurationRequestBody("velit", "laborum", "non") {{
                                description = "dolor";
                                instanceMetadataOptions = new UpdateInfrastructureConfigurationRequestBodyInstanceMetadataOptions() {{
                                    httpPutResponseHopLimit = 483394L;
                                    httpTokens = "sit";
                                }};;
                                instanceTypes = new String[]{{
                                    add("consequatur"),
                                }};
                                keyPair = "officia";
                                logging = new UpdateInfrastructureConfigurationRequestBodyLogging() {{
                                    s3Logs = new S3Logs() {{
                                        s3BucketName = "recusandae";
                                        s3KeyPrefix = "ea";
                                    }};;
                                }};;
                                resourceTags = new java.util.HashMap<String, String>() {{
                                    put("voluptas", "facilis");
                                    put("placeat", "perspiciatis");
                                    put("expedita", "deleniti");
                                }};
                                securityGroupIds = new String[]{{
                                    add("voluptate"),
                                    add("ullam"),
                                    add("unde"),
                                    add("necessitatibus"),
                                }};
                                snsTopicArn = "animi";
                                subnetId = "impedit";
                                terminateInstanceOnFailure = false;
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "est";
                xAmzDate = "error";
                xAmzSecurityToken = "esse";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "veritatis";
            }};            

            UpdateInfrastructureConfigurationResponse res = sdk.sdk.updateInfrastructureConfiguration(req);

            if (res.updateInfrastructureConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
