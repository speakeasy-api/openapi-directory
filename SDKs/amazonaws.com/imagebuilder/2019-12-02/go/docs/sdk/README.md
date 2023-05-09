# SDK

## Overview

EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.

Amazon Web Services documentation
<https://docs.aws.amazon.com/imagebuilder/>
### Available Operations

* [CancelImageCreation](#cancelimagecreation) - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* [CreateComponent](#createcomponent) - <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
* [CreateContainerRecipe](#createcontainerrecipe) - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* [CreateDistributionConfiguration](#createdistributionconfiguration) - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* [CreateImage](#createimage) - Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* [CreateImagePipeline](#createimagepipeline) - Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* [CreateImageRecipe](#createimagerecipe) - Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* [CreateInfrastructureConfiguration](#createinfrastructureconfiguration) - Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* [DeleteComponent](#deletecomponent) - Deletes a component build version.
* [DeleteContainerRecipe](#deletecontainerrecipe) - Deletes a container recipe.
* [DeleteDistributionConfiguration](#deletedistributionconfiguration) - Deletes a distribution configuration.
* [DeleteImage](#deleteimage) - <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
* [DeleteImagePipeline](#deleteimagepipeline) - Deletes an image pipeline.
* [DeleteImageRecipe](#deleteimagerecipe) - Deletes an image recipe.
* [DeleteInfrastructureConfiguration](#deleteinfrastructureconfiguration) - Deletes an infrastructure configuration.
* [GetComponent](#getcomponent) - Gets a component object.
* [GetComponentPolicy](#getcomponentpolicy) - Gets a component policy.
* [GetContainerRecipe](#getcontainerrecipe) - Retrieves a container recipe.
* [GetContainerRecipePolicy](#getcontainerrecipepolicy) - Retrieves the policy for a container recipe.
* [GetDistributionConfiguration](#getdistributionconfiguration) - Gets a distribution configuration.
* [GetImage](#getimage) - Gets an image.
* [GetImagePipeline](#getimagepipeline) - Gets an image pipeline.
* [GetImagePolicy](#getimagepolicy) - Gets an image policy.
* [GetImageRecipe](#getimagerecipe) - Gets an image recipe.
* [GetImageRecipePolicy](#getimagerecipepolicy) - Gets an image recipe policy.
* [GetInfrastructureConfiguration](#getinfrastructureconfiguration) - Gets an infrastructure configuration.
* [GetWorkflowExecution](#getworkflowexecution) - Get the runtime information that was logged for a specific runtime instance of the workflow.
* [GetWorkflowStepExecution](#getworkflowstepexecution) - Get the runtime information that was logged for a specific runtime instance of the workflow step.
* [ImportComponent](#importcomponent) - Imports a component and transforms its data into a component document.
* [ImportVMImage](#importvmimage) - <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
* [ListComponentBuildVersions](#listcomponentbuildversions) - <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* [ListComponents](#listcomponents) - <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
* [ListContainerRecipes](#listcontainerrecipes) - Returns a list of container recipes.
* [ListDistributionConfigurations](#listdistributionconfigurations) - Returns a list of distribution configurations.
* [ListImageBuildVersions](#listimagebuildversions) - Returns a list of image build versions.
* [ListImagePackages](#listimagepackages) - List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
* [ListImagePipelineImages](#listimagepipelineimages) - Returns a list of images created by the specified pipeline.
* [ListImagePipelines](#listimagepipelines) - Returns a list of image pipelines.
* [ListImageRecipes](#listimagerecipes) - Returns a list of image recipes.
* [ListImageScanFindingAggregations](#listimagescanfindingaggregations) - <p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>
* [ListImageScanFindings](#listimagescanfindings) - Returns a list of image scan findings for your account.
* [ListImages](#listimages) - Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
* [ListInfrastructureConfigurations](#listinfrastructureconfigurations) - Returns a list of infrastructure configurations.
* [ListTagsForResource](#listtagsforresource) - Returns the list of tags for the specified resource.
* [ListWorkflowExecutions](#listworkflowexecutions) - Returns a list of workflow runtime instance metadata objects for a specific image build version.
* [ListWorkflowStepExecutions](#listworkflowstepexecutions) - Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.
* [PutComponentPolicy](#putcomponentpolicy) - Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [PutContainerRecipePolicy](#putcontainerrecipepolicy) - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* [PutImagePolicy](#putimagepolicy) - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [PutImageRecipePolicy](#putimagerecipepolicy) - Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* [StartImagePipelineExecution](#startimagepipelineexecution) - Manually triggers a pipeline to create an image.
* [TagResource](#tagresource) - Adds a tag to a resource.
* [UntagResource](#untagresource) - Removes a tag from a resource.
* [UpdateDistributionConfiguration](#updatedistributionconfiguration) - Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* [UpdateImagePipeline](#updateimagepipeline) - <p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* [UpdateInfrastructureConfiguration](#updateinfrastructureconfiguration) - Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

## CancelImageCreation

CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.

### Example Usage

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
    res, err := s.SDK.CancelImageCreation(ctx, operations.CancelImageCreationRequest{
        RequestBody: operations.CancelImageCreationRequestBody{
            ClientToken: "error",
            ImageBuildVersionArn: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelImageCreationResponse != nil {
        // handle response
    }
}
```

## CreateComponent

<p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>

### Example Usage

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
    res, err := s.SDK.CreateComponent(ctx, operations.CreateComponentRequest{
        RequestBody: operations.CreateComponentRequestBody{
            ChangeDescription: sdk.String("suscipit"),
            ClientToken: "molestiae",
            Data: sdk.String("minus"),
            Description: sdk.String("placeat"),
            KmsKeyID: sdk.String("voluptatum"),
            Name: "Miriam Huel",
            Platform: operations.CreateComponentRequestBodyPlatformEnumWindows,
            SemanticVersion: "quis",
            SupportedOsVersions: []string{
                "deserunt",
            },
            Tags: map[string]string{
                "ipsam": "repellendus",
            },
            URI: sdk.String("https://spherical-caviar.org"),
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComponentResponse != nil {
        // handle response
    }
}
```

## CreateContainerRecipe

Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateContainerRecipe(ctx, operations.CreateContainerRecipeRequest{
        RequestBody: operations.CreateContainerRecipeRequestBody{
            ClientToken: "porro",
            Components: []shared.ComponentConfiguration{
                shared.ComponentConfiguration{
                    ComponentArn: "dicta",
                    Parameters: []shared.ComponentParameter{
                        shared.ComponentParameter{
                            Name: "Seth Conroy",
                            Value: []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                        },
                        shared.ComponentParameter{
                            Name: "Norma Ryan",
                            Value: []string{
                                "excepturi",
                            },
                        },
                        shared.ComponentParameter{
                            Name: "Dorothy Hane",
                            Value: []string{
                                "dolor",
                                "natus",
                                "laboriosam",
                            },
                        },
                    },
                },
                shared.ComponentConfiguration{
                    ComponentArn: "hic",
                    Parameters: []shared.ComponentParameter{
                        shared.ComponentParameter{
                            Name: "Harvey Hessel",
                            Value: []string{
                                "quidem",
                                "architecto",
                                "ipsa",
                                "reiciendis",
                            },
                        },
                        shared.ComponentParameter{
                            Name: "Shaun Osinski",
                            Value: []string{
                                "explicabo",
                                "nobis",
                            },
                        },
                        shared.ComponentParameter{
                            Name: "Guadalupe Hickle",
                            Value: []string{
                                "iure",
                            },
                        },
                        shared.ComponentParameter{
                            Name: "Miss Aubrey Williamson",
                            Value: []string{
                                "consequuntur",
                                "repellat",
                                "mollitia",
                            },
                        },
                    },
                },
                shared.ComponentConfiguration{
                    ComponentArn: "occaecati",
                    Parameters: []shared.ComponentParameter{
                        shared.ComponentParameter{
                            Name: "Claudia Krajcik",
                            Value: []string{
                                "quis",
                            },
                        },
                        shared.ComponentParameter{
                            Name: "Kayla O'Kon",
                            Value: []string{
                                "sequi",
                                "tenetur",
                                "ipsam",
                                "id",
                            },
                        },
                    },
                },
            },
            ContainerType: operations.CreateContainerRecipeRequestBodyContainerTypeEnumDocker,
            Description: sdk.String("possimus"),
            DockerfileTemplateData: sdk.String("aut"),
            DockerfileTemplateURI: sdk.String("quasi"),
            ImageOsVersionOverride: sdk.String("error"),
            InstanceConfiguration: &operations.CreateContainerRecipeRequestBodyInstanceConfiguration{
                BlockDeviceMappings: []shared.InstanceBlockDeviceMapping{
                    shared.InstanceBlockDeviceMapping{
                        DeviceName: sdk.String("laborum"),
                        Ebs: &shared.EbsInstanceBlockDeviceSpecification{
                            DeleteOnTermination: sdk.Bool(false),
                            Encrypted: sdk.Bool(false),
                            Iops: sdk.Int64(96098),
                            KmsKeyID: sdk.String("reiciendis"),
                            SnapshotID: sdk.String("voluptatibus"),
                            Throughput: sdk.Int64(878194),
                            VolumeSize: sdk.Int64(468651),
                            VolumeType: shared.EbsVolumeTypeEnumGp2.ToPointer(),
                        },
                        NoDevice: sdk.String("voluptatibus"),
                        VirtualName: sdk.String("ipsa"),
                    },
                    shared.InstanceBlockDeviceMapping{
                        DeviceName: sdk.String("omnis"),
                        Ebs: &shared.EbsInstanceBlockDeviceSpecification{
                            DeleteOnTermination: sdk.Bool(false),
                            Encrypted: sdk.Bool(false),
                            Iops: sdk.Int64(451159),
                            KmsKeyID: sdk.String("cum"),
                            SnapshotID: sdk.String("perferendis"),
                            Throughput: sdk.Int64(39187),
                            VolumeSize: sdk.Int64(441711),
                            VolumeType: shared.EbsVolumeTypeEnumIo1.ToPointer(),
                        },
                        NoDevice: sdk.String("maiores"),
                        VirtualName: sdk.String("dicta"),
                    },
                    shared.InstanceBlockDeviceMapping{
                        DeviceName: sdk.String("corporis"),
                        Ebs: &shared.EbsInstanceBlockDeviceSpecification{
                            DeleteOnTermination: sdk.Bool(false),
                            Encrypted: sdk.Bool(false),
                            Iops: sdk.Int64(296140),
                            KmsKeyID: sdk.String("iusto"),
                            SnapshotID: sdk.String("dicta"),
                            Throughput: sdk.Int64(688661),
                            VolumeSize: sdk.Int64(317983),
                            VolumeType: shared.EbsVolumeTypeEnumSt1.ToPointer(),
                        },
                        NoDevice: sdk.String("commodi"),
                        VirtualName: sdk.String("repudiandae"),
                    },
                    shared.InstanceBlockDeviceMapping{
                        DeviceName: sdk.String("quae"),
                        Ebs: &shared.EbsInstanceBlockDeviceSpecification{
                            DeleteOnTermination: sdk.Bool(false),
                            Encrypted: sdk.Bool(false),
                            Iops: sdk.Int64(216822),
                            KmsKeyID: sdk.String("quidem"),
                            SnapshotID: sdk.String("molestias"),
                            Throughput: sdk.Int64(566602),
                            VolumeSize: sdk.Int64(865103),
                            VolumeType: shared.EbsVolumeTypeEnumIo1.ToPointer(),
                        },
                        NoDevice: sdk.String("praesentium"),
                        VirtualName: sdk.String("rem"),
                    },
                },
                Image: sdk.String("voluptates"),
            },
            KmsKeyID: sdk.String("quasi"),
            Name: "Kirk Boehm",
            ParentImage: "enim",
            PlatformOverride: operations.CreateContainerRecipeRequestBodyPlatformOverrideEnumWindows.ToPointer(),
            SemanticVersion: "est",
            Tags: map[string]string{
                "explicabo": "deserunt",
                "distinctio": "quibusdam",
                "labore": "modi",
                "qui": "aliquid",
            },
            TargetRepository: operations.CreateContainerRecipeRequestBodyTargetRepository{
                RepositoryName: sdk.String("cupiditate"),
                Service: shared.ContainerRepositoryServiceEnumEcr.ToPointer(),
            },
            WorkingDirectory: sdk.String("quos"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContainerRecipeResponse != nil {
        // handle response
    }
}
```

## CreateDistributionConfiguration

Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDistributionConfiguration(ctx, operations.CreateDistributionConfigurationRequest{
        RequestBody: operations.CreateDistributionConfigurationRequestBody{
            ClientToken: "excepturi",
            Description: sdk.String("tempora"),
            Distributions: []shared.Distribution{
                shared.Distribution{
                    AmiDistributionConfiguration: &shared.AmiDistributionConfiguration{
                        AmiTags: map[string]string{
                            "labore": "delectus",
                            "eum": "non",
                            "eligendi": "sint",
                        },
                        Description: sdk.String("aliquid"),
                        KmsKeyID: sdk.String("provident"),
                        LaunchPermission: &shared.LaunchPermissionConfiguration{
                            OrganizationArns: []string{
                                "sint",
                                "officia",
                                "dolor",
                                "debitis",
                            },
                            OrganizationalUnitArns: []string{
                                "dolorum",
                                "in",
                                "in",
                                "illum",
                            },
                            UserGroups: []string{
                                "rerum",
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                            UserIds: []string{
                                "ea",
                                "aliquid",
                                "laborum",
                                "accusamus",
                            },
                        },
                        Name: sdk.String("Toni Haley"),
                        TargetAccountIds: []string{
                            "provident",
                            "nam",
                            "id",
                        },
                    },
                    ContainerDistributionConfiguration: &shared.ContainerDistributionConfiguration{
                        ContainerTags: []string{
                            "deleniti",
                            "sapiente",
                            "amet",
                        },
                        Description: sdk.String("deserunt"),
                        TargetRepository: shared.TargetContainerRepository{
                            RepositoryName: "nisi",
                            Service: shared.ContainerRepositoryServiceEnumEcr,
                        },
                    },
                    FastLaunchConfigurations: []shared.FastLaunchConfiguration{
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("natus"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("omnis"),
                                LaunchTemplateName: sdk.String("molestiae"),
                                LaunchTemplateVersion: sdk.String("perferendis"),
                            },
                            MaxParallelLaunches: sdk.Int64(470132),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(301575),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("distinctio"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("id"),
                                LaunchTemplateName: sdk.String("labore"),
                                LaunchTemplateVersion: sdk.String("labore"),
                            },
                            MaxParallelLaunches: sdk.Int64(383462),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(618016),
                            },
                        },
                    },
                    LaunchTemplateConfigurations: []shared.LaunchTemplateConfiguration{
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("eum"),
                            LaunchTemplateID: "vero",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("aspernatur"),
                            LaunchTemplateID: "architecto",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("magnam"),
                            LaunchTemplateID: "et",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                    },
                    LicenseConfigurationArns: []string{
                        "ullam",
                        "provident",
                        "quos",
                    },
                    Region: "sint",
                    S3ExportConfiguration: &shared.S3ExportConfiguration{
                        DiskImageFormat: shared.DiskImageFormatEnumVmdk,
                        RoleName: "mollitia",
                        S3Bucket: "reiciendis",
                        S3Prefix: sdk.String("mollitia"),
                    },
                },
                shared.Distribution{
                    AmiDistributionConfiguration: &shared.AmiDistributionConfiguration{
                        AmiTags: map[string]string{
                            "eum": "dolor",
                            "necessitatibus": "odit",
                        },
                        Description: sdk.String("nemo"),
                        KmsKeyID: sdk.String("quasi"),
                        LaunchPermission: &shared.LaunchPermissionConfiguration{
                            OrganizationArns: []string{
                                "doloribus",
                                "debitis",
                            },
                            OrganizationalUnitArns: []string{
                                "maxime",
                                "deleniti",
                            },
                            UserGroups: []string{
                                "in",
                                "architecto",
                                "architecto",
                            },
                            UserIds: []string{
                                "ullam",
                                "expedita",
                                "nihil",
                                "repellat",
                            },
                        },
                        Name: sdk.String("Louis Turner Sr."),
                        TargetAccountIds: []string{
                            "natus",
                            "magni",
                            "sunt",
                        },
                    },
                    ContainerDistributionConfiguration: &shared.ContainerDistributionConfiguration{
                        ContainerTags: []string{
                            "illum",
                            "pariatur",
                            "maxime",
                            "ea",
                        },
                        Description: sdk.String("excepturi"),
                        TargetRepository: shared.TargetContainerRepository{
                            RepositoryName: "odit",
                            Service: shared.ContainerRepositoryServiceEnumEcr,
                        },
                    },
                    FastLaunchConfigurations: []shared.FastLaunchConfiguration{
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("accusantium"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("ab"),
                                LaunchTemplateName: sdk.String("maiores"),
                                LaunchTemplateVersion: sdk.String("quidem"),
                            },
                            MaxParallelLaunches: sdk.Int64(373291),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(453543),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("autem"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("nam"),
                                LaunchTemplateName: sdk.String("eaque"),
                                LaunchTemplateVersion: sdk.String("pariatur"),
                            },
                            MaxParallelLaunches: sdk.Int64(365496),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(975522),
                            },
                        },
                    },
                    LaunchTemplateConfigurations: []shared.LaunchTemplateConfiguration{
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("fugiat"),
                            LaunchTemplateID: "amet",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                    },
                    LicenseConfigurationArns: []string{
                        "cumque",
                    },
                    Region: "corporis",
                    S3ExportConfiguration: &shared.S3ExportConfiguration{
                        DiskImageFormat: shared.DiskImageFormatEnumVhd,
                        RoleName: "libero",
                        S3Bucket: "nobis",
                        S3Prefix: sdk.String("dolores"),
                    },
                },
                shared.Distribution{
                    AmiDistributionConfiguration: &shared.AmiDistributionConfiguration{
                        AmiTags: map[string]string{
                            "totam": "dignissimos",
                            "eaque": "quis",
                        },
                        Description: sdk.String("nesciunt"),
                        KmsKeyID: sdk.String("eos"),
                        LaunchPermission: &shared.LaunchPermissionConfiguration{
                            OrganizationArns: []string{
                                "dolores",
                            },
                            OrganizationalUnitArns: []string{
                                "quam",
                                "dolor",
                                "vero",
                                "nostrum",
                            },
                            UserGroups: []string{
                                "recusandae",
                                "omnis",
                                "facilis",
                                "perspiciatis",
                            },
                            UserIds: []string{
                                "porro",
                            },
                        },
                        Name: sdk.String("Ms. Vickie Mraz"),
                        TargetAccountIds: []string{
                            "asperiores",
                        },
                    },
                    ContainerDistributionConfiguration: &shared.ContainerDistributionConfiguration{
                        ContainerTags: []string{
                            "modi",
                            "iste",
                            "dolorum",
                            "deleniti",
                        },
                        Description: sdk.String("pariatur"),
                        TargetRepository: shared.TargetContainerRepository{
                            RepositoryName: "provident",
                            Service: shared.ContainerRepositoryServiceEnumEcr,
                        },
                    },
                    FastLaunchConfigurations: []shared.FastLaunchConfiguration{
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("libero"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("delectus"),
                                LaunchTemplateName: sdk.String("quaerat"),
                                LaunchTemplateVersion: sdk.String("quos"),
                            },
                            MaxParallelLaunches: sdk.Int64(398221),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(212390),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("dolorem"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("dolor"),
                                LaunchTemplateName: sdk.String("qui"),
                                LaunchTemplateVersion: sdk.String("ipsum"),
                            },
                            MaxParallelLaunches: sdk.Int64(944373),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(569574),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("cum"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("voluptate"),
                                LaunchTemplateName: sdk.String("dignissimos"),
                                LaunchTemplateVersion: sdk.String("reiciendis"),
                            },
                            MaxParallelLaunches: sdk.Int64(227414),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(680545),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("numquam"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("veritatis"),
                                LaunchTemplateName: sdk.String("ipsa"),
                                LaunchTemplateVersion: sdk.String("ipsa"),
                            },
                            MaxParallelLaunches: sdk.Int64(434417),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(487838),
                            },
                        },
                    },
                    LaunchTemplateConfigurations: []shared.LaunchTemplateConfiguration{
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("accusamus"),
                            LaunchTemplateID: "quidem",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("voluptatibus"),
                            LaunchTemplateID: "voluptas",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                    },
                    LicenseConfigurationArns: []string{
                        "eos",
                        "atque",
                        "sit",
                    },
                    Region: "fugiat",
                    S3ExportConfiguration: &shared.S3ExportConfiguration{
                        DiskImageFormat: shared.DiskImageFormatEnumVmdk,
                        RoleName: "soluta",
                        S3Bucket: "dolorum",
                        S3Prefix: sdk.String("iusto"),
                    },
                },
            },
            Name: "Sonya Leuschke",
            Tags: map[string]string{
                "asperiores": "nihil",
                "ipsum": "voluptate",
                "id": "saepe",
            },
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDistributionConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateImage

Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateImage(ctx, operations.CreateImageRequest{
        RequestBody: operations.CreateImageRequestBody{
            ClientToken: "saepe",
            ContainerRecipeArn: sdk.String("suscipit"),
            DistributionConfigurationArn: sdk.String("deserunt"),
            EnhancedImageMetadataEnabled: sdk.Bool(false),
            ImageRecipeArn: sdk.String("provident"),
            ImageScanningConfiguration: &operations.CreateImageRequestBodyImageScanningConfiguration{
                EcrConfiguration: &shared.EcrConfiguration{
                    ContainerTags: []string{
                        "repellendus",
                        "totam",
                    },
                    RepositoryName: sdk.String("similique"),
                },
                ImageScanningEnabled: sdk.Bool(false),
            },
            ImageTestsConfiguration: &operations.CreateImageRequestBodyImageTestsConfiguration{
                ImageTestsEnabled: sdk.Bool(false),
                TimeoutMinutes: sdk.Int64(55),
            },
            InfrastructureConfigurationArn: "at",
            Tags: map[string]string{
                "tempora": "vel",
                "quod": "officiis",
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImageResponse != nil {
        // handle response
    }
}
```

## CreateImagePipeline

Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateImagePipeline(ctx, operations.CreateImagePipelineRequest{
        RequestBody: operations.CreateImagePipelineRequestBody{
            ClientToken: "quisquam",
            ContainerRecipeArn: sdk.String("tenetur"),
            Description: sdk.String("amet"),
            DistributionConfigurationArn: sdk.String("tempore"),
            EnhancedImageMetadataEnabled: sdk.Bool(false),
            ImageRecipeArn: sdk.String("accusamus"),
            ImageScanningConfiguration: &operations.CreateImagePipelineRequestBodyImageScanningConfiguration{
                EcrConfiguration: &shared.EcrConfiguration{
                    ContainerTags: []string{
                        "enim",
                        "dolorem",
                    },
                    RepositoryName: sdk.String("sapiente"),
                },
                ImageScanningEnabled: sdk.Bool(false),
            },
            ImageTestsConfiguration: &operations.CreateImagePipelineRequestBodyImageTestsConfiguration{
                ImageTestsEnabled: sdk.Bool(false),
                TimeoutMinutes: sdk.Int64(518201),
            },
            InfrastructureConfigurationArn: "nihil",
            Name: "Mamie Durgan",
            Schedule: &operations.CreateImagePipelineRequestBodySchedule{
                PipelineExecutionStartCondition: shared.PipelineExecutionStartConditionEnumExpressionMatchAndDependencyUpdatesAvailable.ToPointer(),
                ScheduleExpression: sdk.String("voluptas"),
                Timezone: sdk.String("deserunt"),
            },
            Status: operations.CreateImagePipelineRequestBodyStatusEnumDisabled.ToPointer(),
            Tags: map[string]string{
                "incidunt": "qui",
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImagePipelineResponse != nil {
        // handle response
    }
}
```

## CreateImageRecipe

Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateImageRecipe(ctx, operations.CreateImageRecipeRequest{
        RequestBody: operations.CreateImageRecipeRequestBody{
            AdditionalInstanceConfiguration: &operations.CreateImageRecipeRequestBodyAdditionalInstanceConfiguration{
                SystemsManagerAgent: &shared.SystemsManagerAgent{
                    UninstallAfterBuild: sdk.Bool(false),
                },
                UserDataOverride: sdk.String("incidunt"),
            },
            BlockDeviceMappings: []shared.InstanceBlockDeviceMapping{
                shared.InstanceBlockDeviceMapping{
                    DeviceName: sdk.String("dolores"),
                    Ebs: &shared.EbsInstanceBlockDeviceSpecification{
                        DeleteOnTermination: sdk.Bool(false),
                        Encrypted: sdk.Bool(false),
                        Iops: sdk.Int64(716860),
                        KmsKeyID: sdk.String("facilis"),
                        SnapshotID: sdk.String("aliquid"),
                        Throughput: sdk.Int64(463150),
                        VolumeSize: sdk.Int64(565421),
                        VolumeType: shared.EbsVolumeTypeEnumSc1.ToPointer(),
                    },
                    NoDevice: sdk.String("qui"),
                    VirtualName: sdk.String("neque"),
                },
            },
            ClientToken: "fugit",
            Components: []shared.ComponentConfiguration{
                shared.ComponentConfiguration{
                    ComponentArn: "odio",
                    Parameters: []shared.ComponentParameter{
                        shared.ComponentParameter{
                            Name: "Miss Candice Weimann",
                            Value: []string{
                                "et",
                                "saepe",
                                "ipsum",
                            },
                        },
                    },
                },
            },
            Description: sdk.String("veritatis"),
            Name: "Isaac Reynolds DVM",
            ParentImage: "dolorem",
            SemanticVersion: "dolore",
            Tags: map[string]string{
                "adipisci": "dolorum",
                "architecto": "quae",
            },
            WorkingDirectory: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImageRecipeResponse != nil {
        // handle response
    }
}
```

## CreateInfrastructureConfiguration

Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateInfrastructureConfiguration(ctx, operations.CreateInfrastructureConfigurationRequest{
        RequestBody: operations.CreateInfrastructureConfigurationRequestBody{
            ClientToken: "ut",
            Description: sdk.String("facilis"),
            InstanceMetadataOptions: &operations.CreateInfrastructureConfigurationRequestBodyInstanceMetadataOptions{
                HTTPPutResponseHopLimit: sdk.Int64(586410),
                HTTPTokens: sdk.String("qui"),
            },
            InstanceProfileName: "quae",
            InstanceTypes: []string{
                "odio",
                "occaecati",
                "voluptatibus",
            },
            KeyPair: sdk.String("quisquam"),
            Logging: &operations.CreateInfrastructureConfigurationRequestBodyLogging{
                S3Logs: &shared.S3Logs{
                    S3BucketName: sdk.String("vero"),
                    S3KeyPrefix: sdk.String("omnis"),
                },
            },
            Name: "Tiffany Willms",
            ResourceTags: map[string]string{
                "tenetur": "dignissimos",
                "hic": "distinctio",
                "quod": "odio",
                "similique": "facilis",
            },
            SecurityGroupIds: []string{
                "ducimus",
                "dolore",
                "quibusdam",
                "illum",
            },
            SnsTopicArn: sdk.String("sequi"),
            SubnetID: sdk.String("natus"),
            Tags: map[string]string{
                "aut": "voluptatibus",
                "exercitationem": "nulla",
                "fugit": "porro",
                "maiores": "doloribus",
            },
            TerminateInstanceOnFailure: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInfrastructureConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteComponent

Deletes a component build version.

### Example Usage

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
    res, err := s.SDK.DeleteComponent(ctx, operations.DeleteComponentRequest{
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("ex"),
        ComponentBuildVersionArn: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteComponentResponse != nil {
        // handle response
    }
}
```

## DeleteContainerRecipe

Deletes a container recipe.

### Example Usage

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
    res, err := s.SDK.DeleteContainerRecipe(ctx, operations.DeleteContainerRecipeRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        ContainerRecipeArn: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContainerRecipeResponse != nil {
        // handle response
    }
}
```

## DeleteDistributionConfiguration

Deletes a distribution configuration.

### Example Usage

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
    res, err := s.SDK.DeleteDistributionConfiguration(ctx, operations.DeleteDistributionConfigurationRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("corporis"),
        DistributionConfigurationArn: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDistributionConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteImage

<p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>

### Example Usage

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
    res, err := s.SDK.DeleteImage(ctx, operations.DeleteImageRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        ImageBuildVersionArn: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImageResponse != nil {
        // handle response
    }
}
```

## DeleteImagePipeline

Deletes an image pipeline.

### Example Usage

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
    res, err := s.SDK.DeleteImagePipeline(ctx, operations.DeleteImagePipelineRequest{
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        ImagePipelineArn: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImagePipelineResponse != nil {
        // handle response
    }
}
```

## DeleteImageRecipe

Deletes an image recipe.

### Example Usage

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
    res, err := s.SDK.DeleteImageRecipe(ctx, operations.DeleteImageRecipeRequest{
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        ImageRecipeArn: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImageRecipeResponse != nil {
        // handle response
    }
}
```

## DeleteInfrastructureConfiguration

Deletes an infrastructure configuration.

### Example Usage

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
    res, err := s.SDK.DeleteInfrastructureConfiguration(ctx, operations.DeleteInfrastructureConfigurationRequest{
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        InfrastructureConfigurationArn: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInfrastructureConfigurationResponse != nil {
        // handle response
    }
}
```

## GetComponent

Gets a component object.

### Example Usage

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
    res, err := s.SDK.GetComponent(ctx, operations.GetComponentRequest{
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("provident"),
        ComponentBuildVersionArn: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentResponse != nil {
        // handle response
    }
}
```

## GetComponentPolicy

Gets a component policy.

### Example Usage

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
    res, err := s.SDK.GetComponentPolicy(ctx, operations.GetComponentPolicyRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        ComponentArn: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentPolicyResponse != nil {
        // handle response
    }
}
```

## GetContainerRecipe

Retrieves a container recipe.

### Example Usage

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
    res, err := s.SDK.GetContainerRecipe(ctx, operations.GetContainerRecipeRequest{
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        ContainerRecipeArn: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerRecipeResponse != nil {
        // handle response
    }
}
```

## GetContainerRecipePolicy

Retrieves the policy for a container recipe.

### Example Usage

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
    res, err := s.SDK.GetContainerRecipePolicy(ctx, operations.GetContainerRecipePolicyRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("neque"),
        ContainerRecipeArn: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerRecipePolicyResponse != nil {
        // handle response
    }
}
```

## GetDistributionConfiguration

Gets a distribution configuration.

### Example Usage

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
    res, err := s.SDK.GetDistributionConfiguration(ctx, operations.GetDistributionConfigurationRequest{
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("ab"),
        DistributionConfigurationArn: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistributionConfigurationResponse != nil {
        // handle response
    }
}
```

## GetImage

Gets an image.

### Example Usage

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
    res, err := s.SDK.GetImage(ctx, operations.GetImageRequest{
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("quo"),
        ImageBuildVersionArn: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImageResponse != nil {
        // handle response
    }
}
```

## GetImagePipeline

Gets an image pipeline.

### Example Usage

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
    res, err := s.SDK.GetImagePipeline(ctx, operations.GetImagePipelineRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
        ImagePipelineArn: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImagePipelineResponse != nil {
        // handle response
    }
}
```

## GetImagePolicy

Gets an image policy.

### Example Usage

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
    res, err := s.SDK.GetImagePolicy(ctx, operations.GetImagePolicyRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("dolores"),
        ImageArn: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImagePolicyResponse != nil {
        // handle response
    }
}
```

## GetImageRecipe

Gets an image recipe.

### Example Usage

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
    res, err := s.SDK.GetImageRecipe(ctx, operations.GetImageRecipeRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        ImageRecipeArn: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImageRecipeResponse != nil {
        // handle response
    }
}
```

## GetImageRecipePolicy

Gets an image recipe policy.

### Example Usage

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
    res, err := s.SDK.GetImageRecipePolicy(ctx, operations.GetImageRecipePolicyRequest{
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("minima"),
        ImageRecipeArn: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImageRecipePolicyResponse != nil {
        // handle response
    }
}
```

## GetInfrastructureConfiguration

Gets an infrastructure configuration.

### Example Usage

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
    res, err := s.SDK.GetInfrastructureConfiguration(ctx, operations.GetInfrastructureConfigurationRequest{
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        InfrastructureConfigurationArn: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInfrastructureConfigurationResponse != nil {
        // handle response
    }
}
```

## GetWorkflowExecution

Get the runtime information that was logged for a specific runtime instance of the workflow.

### Example Usage

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
    res, err := s.SDK.GetWorkflowExecution(ctx, operations.GetWorkflowExecutionRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("quod"),
        WorkflowExecutionID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkflowExecutionResponse != nil {
        // handle response
    }
}
```

## GetWorkflowStepExecution

Get the runtime information that was logged for a specific runtime instance of the workflow step.

### Example Usage

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
    res, err := s.SDK.GetWorkflowStepExecution(ctx, operations.GetWorkflowStepExecutionRequest{
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        StepExecutionID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkflowStepExecutionResponse != nil {
        // handle response
    }
}
```

## ImportComponent

Imports a component and transforms its data into a component document.

### Example Usage

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
    res, err := s.SDK.ImportComponent(ctx, operations.ImportComponentRequest{
        RequestBody: operations.ImportComponentRequestBody{
            ChangeDescription: sdk.String("occaecati"),
            ClientToken: "minima",
            Data: sdk.String("distinctio"),
            Description: sdk.String("eligendi"),
            Format: operations.ImportComponentRequestBodyFormatEnumShell,
            KmsKeyID: sdk.String("sit"),
            Name: "Randolph Fisher",
            Platform: operations.ImportComponentRequestBodyPlatformEnumWindows,
            SemanticVersion: "minus",
            Tags: map[string]string{
                "sapiente": "consectetur",
                "esse": "blanditiis",
            },
            Type: operations.ImportComponentRequestBodyTypeEnumTest,
            URI: sdk.String("https://tidy-method.info"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportComponentResponse != nil {
        // handle response
    }
}
```

## ImportVMImage

<p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>

### Example Usage

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
    res, err := s.SDK.ImportVMImage(ctx, operations.ImportVMImageRequest{
        RequestBody: operations.ImportVMImageRequestBody{
            ClientToken: "eveniet",
            Description: sdk.String("asperiores"),
            Name: "Miss Peter Cronin",
            OsVersion: sdk.String("aliquid"),
            Platform: operations.ImportVMImageRequestBodyPlatformEnumLinux,
            SemanticVersion: "quae",
            Tags: map[string]string{
                "vel": "in",
                "eius": "libero",
                "illum": "soluta",
                "accusantium": "aliquam",
            },
            VMImportTaskID: "sapiente",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportVMImageResponse != nil {
        // handle response
    }
}
```

## ListComponentBuildVersions

<p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

### Example Usage

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
    res, err := s.SDK.ListComponentBuildVersions(ctx, operations.ListComponentBuildVersionsRequest{
        RequestBody: operations.ListComponentBuildVersionsRequestBody{
            ComponentVersionArn: "qui",
            MaxResults: sdk.Int64(845358),
            NextToken: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quasi"),
        MaxResults: sdk.String("at"),
        NextToken: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentBuildVersionsResponse != nil {
        // handle response
    }
}
```

## ListComponents

<p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListComponents(ctx, operations.ListComponentsRequest{
        RequestBody: operations.ListComponentsRequestBody{
            ByName: sdk.Bool(false),
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Joann Bogan"),
                    Values: []string{
                        "temporibus",
                        "accusantium",
                        "rem",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Marsha Keebler IV"),
                    Values: []string{
                        "voluptatem",
                        "dolor",
                    },
                },
            },
            MaxResults: sdk.Int64(580152),
            NextToken: sdk.String("numquam"),
            Owner: operations.ListComponentsRequestBodyOwnerEnumThirdParty.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
        MaxResults: sdk.String("velit"),
        NextToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentsResponse != nil {
        // handle response
    }
}
```

## ListContainerRecipes

Returns a list of container recipes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListContainerRecipes(ctx, operations.ListContainerRecipesRequest{
        RequestBody: operations.ListContainerRecipesRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Kevin Jast"),
                    Values: []string{
                        "officia",
                        "maxime",
                        "dignissimos",
                        "officia",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Vernon Bergnaum"),
                    Values: []string{
                        "labore",
                        "ab",
                        "adipisci",
                        "fuga",
                    },
                },
            },
            MaxResults: sdk.Int64(662505),
            NextToken: sdk.String("suscipit"),
            Owner: operations.ListContainerRecipesRequestBodyOwnerEnumSelf.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        MaxResults: sdk.String("quos"),
        NextToken: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContainerRecipesResponse != nil {
        // handle response
    }
}
```

## ListDistributionConfigurations

Returns a list of distribution configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributionConfigurations(ctx, operations.ListDistributionConfigurationsRequest{
        RequestBody: operations.ListDistributionConfigurationsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Johnathan Ritchie"),
                    Values: []string{
                        "reiciendis",
                        "assumenda",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Miss Sophie Jacobi"),
                    Values: []string{
                        "exercitationem",
                        "earum",
                    },
                },
            },
            MaxResults: sdk.Int64(814967),
            NextToken: sdk.String("numquam"),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("dolore"),
        MaxResults: sdk.String("sunt"),
        NextToken: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDistributionConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListImageBuildVersions

Returns a list of image build versions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImageBuildVersions(ctx, operations.ListImageBuildVersionsRequest{
        RequestBody: operations.ListImageBuildVersionsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Wendy Breitenberg"),
                    Values: []string{
                        "consectetur",
                        "corporis",
                        "harum",
                        "laboriosam",
                    },
                },
            },
            ImageVersionArn: "ipsa",
            MaxResults: sdk.Int64(916727),
            NextToken: sdk.String("libero"),
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        MaxResults: sdk.String("voluptas"),
        NextToken: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImageBuildVersionsResponse != nil {
        // handle response
    }
}
```

## ListImagePackages

List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.

### Example Usage

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
    res, err := s.SDK.ListImagePackages(ctx, operations.ListImagePackagesRequest{
        RequestBody: operations.ListImagePackagesRequestBody{
            ImageBuildVersionArn: "nobis",
            MaxResults: sdk.Int64(680116),
            NextToken: sdk.String("adipisci"),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("officiis"),
        MaxResults: sdk.String("temporibus"),
        NextToken: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImagePackagesResponse != nil {
        // handle response
    }
}
```

## ListImagePipelineImages

Returns a list of images created by the specified pipeline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImagePipelineImages(ctx, operations.ListImagePipelineImagesRequest{
        RequestBody: operations.ListImagePipelineImagesRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Guy Luettgen"),
                    Values: []string{
                        "corrupti",
                        "pariatur",
                        "totam",
                    },
                },
            },
            ImagePipelineArn: "hic",
            MaxResults: sdk.Int64(348783),
            NextToken: sdk.String("nobis"),
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("facilis"),
        MaxResults: sdk.String("voluptate"),
        NextToken: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImagePipelineImagesResponse != nil {
        // handle response
    }
}
```

## ListImagePipelines

Returns a list of image pipelines.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImagePipelines(ctx, operations.ListImagePipelinesRequest{
        RequestBody: operations.ListImagePipelinesRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Micheal Osinski"),
                    Values: []string{
                        "quidem",
                        "explicabo",
                    },
                },
            },
            MaxResults: sdk.Int64(378326),
            NextToken: sdk.String("unde"),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        MaxResults: sdk.String("corrupti"),
        NextToken: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImagePipelinesResponse != nil {
        // handle response
    }
}
```

## ListImageRecipes

Returns a list of image recipes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImageRecipes(ctx, operations.ListImageRecipesRequest{
        RequestBody: operations.ListImageRecipesRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Sherri Gerlach"),
                    Values: []string{
                        "occaecati",
                        "quos",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Eddie Goodwin"),
                    Values: []string{
                        "sit",
                        "non",
                    },
                },
            },
            MaxResults: sdk.Int64(888044),
            NextToken: sdk.String("praesentium"),
            Owner: operations.ListImageRecipesRequestBodyOwnerEnumAmazon.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("nobis"),
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImageRecipesResponse != nil {
        // handle response
    }
}
```

## ListImageScanFindingAggregations

<p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>

### Example Usage

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
    res, err := s.SDK.ListImageScanFindingAggregations(ctx, operations.ListImageScanFindingAggregationsRequest{
        RequestBody: operations.ListImageScanFindingAggregationsRequestBody{
            Filter: &operations.ListImageScanFindingAggregationsRequestBodyFilter{
                Name: sdk.String("Sophie Wisoky"),
                Values: []string{
                    "saepe",
                },
            },
            NextToken: sdk.String("numquam"),
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        NextToken: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImageScanFindingAggregationsResponse != nil {
        // handle response
    }
}
```

## ListImageScanFindings

Returns a list of image scan findings for your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImageScanFindings(ctx, operations.ListImageScanFindingsRequest{
        RequestBody: operations.ListImageScanFindingsRequestBody{
            Filters: []shared.ImageScanFindingsFilter{
                shared.ImageScanFindingsFilter{
                    Name: sdk.String("Bob Mueller"),
                    Values: []string{
                        "neque",
                        "dolorum",
                        "nostrum",
                        "officia",
                    },
                },
                shared.ImageScanFindingsFilter{
                    Name: sdk.String("Byron Thiel"),
                    Values: []string{
                        "ut",
                    },
                },
            },
            MaxResults: sdk.Int64(856303),
            NextToken: sdk.String("voluptatem"),
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("sit"),
        MaxResults: sdk.String("voluptatum"),
        NextToken: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImageScanFindingsResponse != nil {
        // handle response
    }
}
```

## ListImages

Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImages(ctx, operations.ListImagesRequest{
        RequestBody: operations.ListImagesRequestBody{
            ByName: sdk.Bool(false),
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Janet Kuvalis"),
                    Values: []string{
                        "vel",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Mrs. Tricia Mueller"),
                    Values: []string{
                        "harum",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Diane Mayer"),
                    Values: []string{
                        "laborum",
                        "nam",
                        "tenetur",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Patricia Farrell"),
                    Values: []string{
                        "reiciendis",
                        "provident",
                        "repellendus",
                    },
                },
            },
            IncludeDeprecated: sdk.Bool(false),
            MaxResults: sdk.Int64(962771),
            NextToken: sdk.String("voluptates"),
            Owner: operations.ListImagesRequestBodyOwnerEnumSelf.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        MaxResults: sdk.String("veniam"),
        NextToken: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImagesResponse != nil {
        // handle response
    }
}
```

## ListInfrastructureConfigurations

Returns a list of infrastructure configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListInfrastructureConfigurations(ctx, operations.ListInfrastructureConfigurationsRequest{
        RequestBody: operations.ListInfrastructureConfigurationsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Ryan Littel"),
                    Values: []string{
                        "suscipit",
                        "quidem",
                        "maxime",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Georgia Farrell"),
                    Values: []string{
                        "error",
                        "officiis",
                        "officiis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Wendell Harber"),
                    Values: []string{
                        "corrupti",
                        "at",
                        "error",
                        "blanditiis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Delia Littel DVM"),
                    Values: []string{
                        "repellendus",
                        "labore",
                        "reiciendis",
                    },
                },
            },
            MaxResults: sdk.Int64(42976),
            NextToken: sdk.String("repudiandae"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("velit"),
        MaxResults: sdk.String("a"),
        NextToken: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInfrastructureConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns the list of tags for the specified resource.

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("in"),
        ResourceArn: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWorkflowExecutions

Returns a list of workflow runtime instance metadata objects for a specific image build version.

### Example Usage

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
    res, err := s.SDK.ListWorkflowExecutions(ctx, operations.ListWorkflowExecutionsRequest{
        RequestBody: operations.ListWorkflowExecutionsRequestBody{
            ImageBuildVersionArn: "eveniet",
            MaxResults: sdk.Int64(580887),
            NextToken: sdk.String("consequuntur"),
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("corporis"),
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowExecutionsResponse != nil {
        // handle response
    }
}
```

## ListWorkflowStepExecutions

Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.

### Example Usage

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
    res, err := s.SDK.ListWorkflowStepExecutions(ctx, operations.ListWorkflowStepExecutionsRequest{
        RequestBody: operations.ListWorkflowStepExecutionsRequestBody{
            MaxResults: sdk.Int64(247399),
            NextToken: sdk.String("vero"),
            WorkflowExecutionID: "doloremque",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("qui"),
        MaxResults: sdk.String("cum"),
        NextToken: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowStepExecutionsResponse != nil {
        // handle response
    }
}
```

## PutComponentPolicy

Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

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
    res, err := s.SDK.PutComponentPolicy(ctx, operations.PutComponentPolicyRequest{
        RequestBody: operations.PutComponentPolicyRequestBody{
            ComponentArn: "necessitatibus",
            Policy: "ratione",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutComponentPolicyResponse != nil {
        // handle response
    }
}
```

## PutContainerRecipePolicy

Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

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
    res, err := s.SDK.PutContainerRecipePolicy(ctx, operations.PutContainerRecipePolicyRequest{
        RequestBody: operations.PutContainerRecipePolicyRequestBody{
            ContainerRecipeArn: "alias",
            Policy: "corporis",
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutContainerRecipePolicyResponse != nil {
        // handle response
    }
}
```

## PutImagePolicy

Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

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
    res, err := s.SDK.PutImagePolicy(ctx, operations.PutImagePolicyRequest{
        RequestBody: operations.PutImagePolicyRequestBody{
            ImageArn: "dolores",
            Policy: "id",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutImagePolicyResponse != nil {
        // handle response
    }
}
```

## PutImageRecipePolicy

Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

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
    res, err := s.SDK.PutImageRecipePolicy(ctx, operations.PutImageRecipePolicyRequest{
        RequestBody: operations.PutImageRecipePolicyRequestBody{
            ImageRecipeArn: "quaerat",
            Policy: "molestiae",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutImageRecipePolicyResponse != nil {
        // handle response
    }
}
```

## StartImagePipelineExecution

Manually triggers a pipeline to create an image.

### Example Usage

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
    res, err := s.SDK.StartImagePipelineExecution(ctx, operations.StartImagePipelineExecutionRequest{
        RequestBody: operations.StartImagePipelineExecutionRequestBody{
            ClientToken: "nemo",
            ImagePipelineArn: "recusandae",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartImagePipelineExecutionResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds a tag to a resource.

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "quasi": "animi",
                "nostrum": "mollitia",
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("repellat"),
        ResourceArn: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes a tag from a resource.

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("placeat"),
        ResourceArn: "modi",
        TagKeys: []string{
            "molestias",
            "officiis",
            "sapiente",
            "cumque",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateDistributionConfiguration

Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDistributionConfiguration(ctx, operations.UpdateDistributionConfigurationRequest{
        RequestBody: operations.UpdateDistributionConfigurationRequestBody{
            ClientToken: "vitae",
            Description: sdk.String("rerum"),
            DistributionConfigurationArn: "tempora",
            Distributions: []shared.Distribution{
                shared.Distribution{
                    AmiDistributionConfiguration: &shared.AmiDistributionConfiguration{
                        AmiTags: map[string]string{
                            "fugit": "cumque",
                        },
                        Description: sdk.String("quae"),
                        KmsKeyID: sdk.String("perferendis"),
                        LaunchPermission: &shared.LaunchPermissionConfiguration{
                            OrganizationArns: []string{
                                "aspernatur",
                            },
                            OrganizationalUnitArns: []string{
                                "eius",
                                "rem",
                            },
                            UserGroups: []string{
                                "impedit",
                                "eos",
                                "sapiente",
                                "eum",
                            },
                            UserIds: []string{
                                "minima",
                            },
                        },
                        Name: sdk.String("Misty McKenzie"),
                        TargetAccountIds: []string{
                            "illum",
                            "eaque",
                            "earum",
                            "perspiciatis",
                        },
                    },
                    ContainerDistributionConfiguration: &shared.ContainerDistributionConfiguration{
                        ContainerTags: []string{
                            "debitis",
                            "aliquid",
                            "porro",
                            "suscipit",
                        },
                        Description: sdk.String("dolorem"),
                        TargetRepository: shared.TargetContainerRepository{
                            RepositoryName: "fugit",
                            Service: shared.ContainerRepositoryServiceEnumEcr,
                        },
                    },
                    FastLaunchConfigurations: []shared.FastLaunchConfiguration{
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("fuga"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("ratione"),
                                LaunchTemplateName: sdk.String("animi"),
                                LaunchTemplateVersion: sdk.String("necessitatibus"),
                            },
                            MaxParallelLaunches: sdk.Int64(862063),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(8931),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("quasi"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("et"),
                                LaunchTemplateName: sdk.String("ducimus"),
                                LaunchTemplateVersion: sdk.String("natus"),
                            },
                            MaxParallelLaunches: sdk.Int64(581082),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(382440),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("adipisci"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("quasi"),
                                LaunchTemplateName: sdk.String("magni"),
                                LaunchTemplateVersion: sdk.String("doloribus"),
                            },
                            MaxParallelLaunches: sdk.Int64(859581),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(896582),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("ipsa"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("tempora"),
                                LaunchTemplateName: sdk.String("nihil"),
                                LaunchTemplateVersion: sdk.String("molestiae"),
                            },
                            MaxParallelLaunches: sdk.Int64(115834),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(479754),
                            },
                        },
                    },
                    LaunchTemplateConfigurations: []shared.LaunchTemplateConfiguration{
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("praesentium"),
                            LaunchTemplateID: "maiores",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("reiciendis"),
                            LaunchTemplateID: "vel",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                    },
                    LicenseConfigurationArns: []string{
                        "fugiat",
                    },
                    Region: "doloremque",
                    S3ExportConfiguration: &shared.S3ExportConfiguration{
                        DiskImageFormat: shared.DiskImageFormatEnumVmdk,
                        RoleName: "odio",
                        S3Bucket: "tempora",
                        S3Prefix: sdk.String("esse"),
                    },
                },
                shared.Distribution{
                    AmiDistributionConfiguration: &shared.AmiDistributionConfiguration{
                        AmiTags: map[string]string{
                            "consectetur": "aliquid",
                            "ipsa": "laborum",
                        },
                        Description: sdk.String("sunt"),
                        KmsKeyID: sdk.String("nostrum"),
                        LaunchPermission: &shared.LaunchPermissionConfiguration{
                            OrganizationArns: []string{
                                "expedita",
                                "aliquid",
                                "officia",
                                "suscipit",
                            },
                            OrganizationalUnitArns: []string{
                                "perferendis",
                                "eum",
                            },
                            UserGroups: []string{
                                "iste",
                                "id",
                            },
                            UserIds: []string{
                                "error",
                            },
                        },
                        Name: sdk.String("Pat O'Keefe"),
                        TargetAccountIds: []string{
                            "deleniti",
                            "enim",
                        },
                    },
                    ContainerDistributionConfiguration: &shared.ContainerDistributionConfiguration{
                        ContainerTags: []string{
                            "repellendus",
                        },
                        Description: sdk.String("ex"),
                        TargetRepository: shared.TargetContainerRepository{
                            RepositoryName: "quo",
                            Service: shared.ContainerRepositoryServiceEnumEcr,
                        },
                    },
                    FastLaunchConfigurations: []shared.FastLaunchConfiguration{
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("ut"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("ad"),
                                LaunchTemplateName: sdk.String("expedita"),
                                LaunchTemplateVersion: sdk.String("voluptatem"),
                            },
                            MaxParallelLaunches: sdk.Int64(561577),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(737254),
                            },
                        },
                        shared.FastLaunchConfiguration{
                            AccountID: sdk.String("aliquid"),
                            Enabled: false,
                            LaunchTemplate: &shared.FastLaunchLaunchTemplateSpecification{
                                LaunchTemplateID: sdk.String("beatae"),
                                LaunchTemplateName: sdk.String("voluptatum"),
                                LaunchTemplateVersion: sdk.String("omnis"),
                            },
                            MaxParallelLaunches: sdk.Int64(85233),
                            SnapshotConfiguration: &shared.FastLaunchSnapshotConfiguration{
                                TargetResourceCount: sdk.Int64(703218),
                            },
                        },
                    },
                    LaunchTemplateConfigurations: []shared.LaunchTemplateConfiguration{
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("culpa"),
                            LaunchTemplateID: "voluptatem",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("sapiente"),
                            LaunchTemplateID: "officiis",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                        shared.LaunchTemplateConfiguration{
                            AccountID: sdk.String("architecto"),
                            LaunchTemplateID: "fuga",
                            SetDefaultVersion: sdk.Bool(false),
                        },
                    },
                    LicenseConfigurationArns: []string{
                        "debitis",
                        "voluptatem",
                        "alias",
                        "deleniti",
                    },
                    Region: "earum",
                    S3ExportConfiguration: &shared.S3ExportConfiguration{
                        DiskImageFormat: shared.DiskImageFormatEnumRaw,
                        RoleName: "sapiente",
                        S3Bucket: "rem",
                        S3Prefix: sdk.String("minus"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDistributionConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateImagePipeline

<p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateImagePipeline(ctx, operations.UpdateImagePipelineRequest{
        RequestBody: operations.UpdateImagePipelineRequestBody{
            ClientToken: "impedit",
            ContainerRecipeArn: sdk.String("quibusdam"),
            Description: sdk.String("nam"),
            DistributionConfigurationArn: sdk.String("ipsam"),
            EnhancedImageMetadataEnabled: sdk.Bool(false),
            ImagePipelineArn: "culpa",
            ImageRecipeArn: sdk.String("dolor"),
            ImageScanningConfiguration: &operations.UpdateImagePipelineRequestBodyImageScanningConfiguration{
                EcrConfiguration: &shared.EcrConfiguration{
                    ContainerTags: []string{
                        "inventore",
                        "deleniti",
                    },
                    RepositoryName: sdk.String("veritatis"),
                },
                ImageScanningEnabled: sdk.Bool(false),
            },
            ImageTestsConfiguration: &operations.UpdateImagePipelineRequestBodyImageTestsConfiguration{
                ImageTestsEnabled: sdk.Bool(false),
                TimeoutMinutes: sdk.Int64(274575),
            },
            InfrastructureConfigurationArn: "dolor",
            Schedule: &operations.UpdateImagePipelineRequestBodySchedule{
                PipelineExecutionStartCondition: shared.PipelineExecutionStartConditionEnumExpressionMatchOnly.ToPointer(),
                ScheduleExpression: sdk.String("architecto"),
                Timezone: sdk.String("sit"),
            },
            Status: operations.UpdateImagePipelineRequestBodyStatusEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateImagePipelineResponse != nil {
        // handle response
    }
}
```

## UpdateInfrastructureConfiguration

Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateInfrastructureConfiguration(ctx, operations.UpdateInfrastructureConfigurationRequest{
        RequestBody: operations.UpdateInfrastructureConfigurationRequestBody{
            ClientToken: "consequuntur",
            Description: sdk.String("ipsa"),
            InfrastructureConfigurationArn: "quas",
            InstanceMetadataOptions: &operations.UpdateInfrastructureConfigurationRequestBodyInstanceMetadataOptions{
                HTTPPutResponseHopLimit: sdk.Int64(911198),
                HTTPTokens: sdk.String("impedit"),
            },
            InstanceProfileName: "officiis",
            InstanceTypes: []string{
                "necessitatibus",
                "sed",
            },
            KeyPair: sdk.String("veniam"),
            Logging: &operations.UpdateInfrastructureConfigurationRequestBodyLogging{
                S3Logs: &shared.S3Logs{
                    S3BucketName: sdk.String("nesciunt"),
                    S3KeyPrefix: sdk.String("expedita"),
                },
            },
            ResourceTags: map[string]string{
                "vel": "voluptatum",
                "magnam": "exercitationem",
            },
            SecurityGroupIds: []string{
                "porro",
            },
            SnsTopicArn: sdk.String("autem"),
            SubnetID: sdk.String("nobis"),
            TerminateInstanceOnFailure: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInfrastructureConfigurationResponse != nil {
        // handle response
    }
}
```
