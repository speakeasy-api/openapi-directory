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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelImageCreationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelImageCreationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelImageCreationRequest();
    $request->requestBody = new CancelImageCreationRequestBody();
    $request->requestBody->clientToken = 'error';
    $request->requestBody->imageBuildVersionArn = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->cancelImageCreation($request);

    if ($response->cancelImageCreationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createComponent

<p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequestBodyPlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComponentRequest();
    $request->requestBody = new CreateComponentRequestBody();
    $request->requestBody->changeDescription = 'suscipit';
    $request->requestBody->clientToken = 'molestiae';
    $request->requestBody->data = 'minus';
    $request->requestBody->description = 'placeat';
    $request->requestBody->kmsKeyId = 'voluptatum';
    $request->requestBody->name = 'Miriam Huel';
    $request->requestBody->platform = CreateComponentRequestBodyPlatformEnum::WINDOWS;
    $request->requestBody->semanticVersion = 'quis';
    $request->requestBody->supportedOsVersions = [
        'deserunt',
    ];
    $request->requestBody->tags = [
        'ipsam' => 'repellendus',
    ];
    $request->requestBody->uri = 'https://spherical-caviar.org';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->createComponent($request);

    if ($response->createComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContainerRecipe

Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRecipeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRecipeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ComponentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ComponentParameter;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRecipeRequestBodyContainerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRecipeRequestBodyInstanceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceBlockDeviceMapping;
use \OpenAPI\OpenAPI\Models\Shared\EbsInstanceBlockDeviceSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EbsVolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRecipeRequestBodyPlatformOverrideEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRecipeRequestBodyTargetRepository;
use \OpenAPI\OpenAPI\Models\Shared\ContainerRepositoryServiceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContainerRecipeRequest();
    $request->requestBody = new CreateContainerRecipeRequestBody();
    $request->requestBody->clientToken = 'porro';
    $request->requestBody->components = [
        new ComponentConfiguration(),
        new ComponentConfiguration(),
        new ComponentConfiguration(),
    ];
    $request->requestBody->containerType = CreateContainerRecipeRequestBodyContainerTypeEnum::DOCKER;
    $request->requestBody->description = 'dicta';
    $request->requestBody->dockerfileTemplateData = 'nam';
    $request->requestBody->dockerfileTemplateUri = 'officia';
    $request->requestBody->imageOsVersionOverride = 'occaecati';
    $request->requestBody->instanceConfiguration = new CreateContainerRecipeRequestBodyInstanceConfiguration();
    $request->requestBody->instanceConfiguration->blockDeviceMappings = [
        new InstanceBlockDeviceMapping(),
    ];
    $request->requestBody->instanceConfiguration->image = 'deleniti';
    $request->requestBody->kmsKeyId = 'hic';
    $request->requestBody->name = 'Everett Breitenberg';
    $request->requestBody->parentImage = 'modi';
    $request->requestBody->platformOverride = CreateContainerRecipeRequestBodyPlatformOverrideEnum::WINDOWS;
    $request->requestBody->semanticVersion = 'impedit';
    $request->requestBody->tags = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->requestBody->targetRepository = new CreateContainerRecipeRequestBodyTargetRepository();
    $request->requestBody->targetRepository->repositoryName = 'natus';
    $request->requestBody->targetRepository->service = ContainerRepositoryServiceEnum::ECR;
    $request->requestBody->workingDirectory = 'sed';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->createContainerRecipe($request);

    if ($response->createContainerRecipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDistributionConfiguration

Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDistributionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDistributionConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\AmiDistributionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LaunchPermissionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDistributionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TargetContainerRepository;
use \OpenAPI\OpenAPI\Models\Shared\ContainerRepositoryServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\FastLaunchConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FastLaunchLaunchTemplateSpecification;
use \OpenAPI\OpenAPI\Models\Shared\FastLaunchSnapshotConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3ExportConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskImageFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDistributionConfigurationRequest();
    $request->requestBody = new CreateDistributionConfigurationRequestBody();
    $request->requestBody->clientToken = 'in';
    $request->requestBody->description = 'corporis';
    $request->requestBody->distributions = [
        new Distribution(),
        new Distribution(),
        new Distribution(),
    ];
    $request->requestBody->name = 'Mr. Kerry Predovic';
    $request->requestBody->tags = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->createDistributionConfiguration($request);

    if ($response->createDistributionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImage

Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRequestBodyImageScanningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EcrConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRequestBodyImageTestsConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRequest();
    $request->requestBody = new CreateImageRequestBody();
    $request->requestBody->clientToken = 'iure';
    $request->requestBody->containerRecipeArn = 'culpa';
    $request->requestBody->distributionConfigurationArn = 'doloribus';
    $request->requestBody->enhancedImageMetadataEnabled = false;
    $request->requestBody->imageRecipeArn = 'sapiente';
    $request->requestBody->imageScanningConfiguration = new CreateImageRequestBodyImageScanningConfiguration();
    $request->requestBody->imageScanningConfiguration->ecrConfiguration = new EcrConfiguration();
    $request->requestBody->imageScanningConfiguration->ecrConfiguration->containerTags = [
        'mollitia',
    ];
    $request->requestBody->imageScanningConfiguration->ecrConfiguration->repositoryName = 'dolorem';
    $request->requestBody->imageScanningConfiguration->imageScanningEnabled = false;
    $request->requestBody->imageTestsConfiguration = new CreateImageRequestBodyImageTestsConfiguration();
    $request->requestBody->imageTestsConfiguration->imageTestsEnabled = false;
    $request->requestBody->imageTestsConfiguration->timeoutMinutes = 635059;
    $request->requestBody->infrastructureConfigurationArn = 'consequuntur';
    $request->requestBody->tags = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->createImage($request);

    if ($response->createImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImagePipeline

Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagePipelineRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagePipelineRequestBodyImageScanningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EcrConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagePipelineRequestBodyImageTestsConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagePipelineRequestBodySchedule;
use \OpenAPI\OpenAPI\Models\Shared\PipelineExecutionStartConditionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateImagePipelineRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImagePipelineRequest();
    $request->requestBody = new CreateImagePipelineRequestBody();
    $request->requestBody->clientToken = 'quo';
    $request->requestBody->containerRecipeArn = 'sequi';
    $request->requestBody->description = 'tenetur';
    $request->requestBody->distributionConfigurationArn = 'ipsam';
    $request->requestBody->enhancedImageMetadataEnabled = false;
    $request->requestBody->imageRecipeArn = 'id';
    $request->requestBody->imageScanningConfiguration = new CreateImagePipelineRequestBodyImageScanningConfiguration();
    $request->requestBody->imageScanningConfiguration->ecrConfiguration = new EcrConfiguration();
    $request->requestBody->imageScanningConfiguration->ecrConfiguration->containerTags = [
        'aut',
        'quasi',
        'error',
        'temporibus',
    ];
    $request->requestBody->imageScanningConfiguration->ecrConfiguration->repositoryName = 'laborum';
    $request->requestBody->imageScanningConfiguration->imageScanningEnabled = false;
    $request->requestBody->imageTestsConfiguration = new CreateImagePipelineRequestBodyImageTestsConfiguration();
    $request->requestBody->imageTestsConfiguration->imageTestsEnabled = false;
    $request->requestBody->imageTestsConfiguration->timeoutMinutes = 96098;
    $request->requestBody->infrastructureConfigurationArn = 'reiciendis';
    $request->requestBody->name = 'Caleb Koss';
    $request->requestBody->schedule = new CreateImagePipelineRequestBodySchedule();
    $request->requestBody->schedule->pipelineExecutionStartCondition = PipelineExecutionStartConditionEnum::EXPRESSION_MATCH_ONLY;
    $request->requestBody->schedule->scheduleExpression = 'omnis';
    $request->requestBody->schedule->timezone = 'voluptate';
    $request->requestBody->status = CreateImagePipelineRequestBodyStatusEnum::ENABLED;
    $request->requestBody->tags = [
        'doloremque' => 'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->createImagePipeline($request);

    if ($response->createImagePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageRecipe

Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRecipeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRecipeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageRecipeRequestBodyAdditionalInstanceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SystemsManagerAgent;
use \OpenAPI\OpenAPI\Models\Shared\InstanceBlockDeviceMapping;
use \OpenAPI\OpenAPI\Models\Shared\EbsInstanceBlockDeviceSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EbsVolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComponentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ComponentParameter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageRecipeRequest();
    $request->requestBody = new CreateImageRecipeRequestBody();
    $request->requestBody->additionalInstanceConfiguration = new CreateImageRecipeRequestBodyAdditionalInstanceConfiguration();
    $request->requestBody->additionalInstanceConfiguration->systemsManagerAgent = new SystemsManagerAgent();
    $request->requestBody->additionalInstanceConfiguration->systemsManagerAgent->uninstallAfterBuild = false;
    $request->requestBody->additionalInstanceConfiguration->userDataOverride = 'harum';
    $request->requestBody->blockDeviceMappings = [
        new InstanceBlockDeviceMapping(),
        new InstanceBlockDeviceMapping(),
    ];
    $request->requestBody->clientToken = 'accusamus';
    $request->requestBody->components = [
        new ComponentConfiguration(),
        new ComponentConfiguration(),
    ];
    $request->requestBody->description = 'repudiandae';
    $request->requestBody->name = 'Edna Pouros';
    $request->requestBody->parentImage = 'pariatur';
    $request->requestBody->semanticVersion = 'modi';
    $request->requestBody->tags = [
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->requestBody->workingDirectory = 'itaque';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->createImageRecipe($request);

    if ($response->createImageRecipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInfrastructureConfiguration

Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInfrastructureConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInfrastructureConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateInfrastructureConfigurationRequestBodyInstanceMetadataOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateInfrastructureConfigurationRequestBodyLogging;
use \OpenAPI\OpenAPI\Models\Shared\S3Logs;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInfrastructureConfigurationRequest();
    $request->requestBody = new CreateInfrastructureConfigurationRequestBody();
    $request->requestBody->clientToken = 'distinctio';
    $request->requestBody->description = 'quibusdam';
    $request->requestBody->instanceMetadataOptions = new CreateInfrastructureConfigurationRequestBodyInstanceMetadataOptions();
    $request->requestBody->instanceMetadataOptions->httpPutResponseHopLimit = 289406;
    $request->requestBody->instanceMetadataOptions->httpTokens = 'modi';
    $request->requestBody->instanceProfileName = 'qui';
    $request->requestBody->instanceTypes = [
        'cupiditate',
        'quos',
    ];
    $request->requestBody->keyPair = 'perferendis';
    $request->requestBody->logging = new CreateInfrastructureConfigurationRequestBodyLogging();
    $request->requestBody->logging->s3Logs = new S3Logs();
    $request->requestBody->logging->s3Logs->s3BucketName = 'magni';
    $request->requestBody->logging->s3Logs->s3KeyPrefix = 'assumenda';
    $request->requestBody->name = 'Linda Corkery';
    $request->requestBody->resourceTags = [
        'facilis' => 'tempore',
        'labore' => 'delectus',
    ];
    $request->requestBody->securityGroupIds = [
        'non',
        'eligendi',
    ];
    $request->requestBody->snsTopicArn = 'sint';
    $request->requestBody->subnetId = 'aliquid';
    $request->requestBody->tags = [
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
        'debitis' => 'a',
    ];
    $request->requestBody->terminateInstanceOnFailure = false;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->createInfrastructureConfiguration($request);

    if ($response->createInfrastructureConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComponent

Deletes a component build version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteComponentRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->componentBuildVersionArn = 'non';

    $response = $sdk->sdk->deleteComponent($request);

    if ($response->deleteComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContainerRecipe

Deletes a container recipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerRecipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContainerRecipeRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->containerRecipeArn = 'id';

    $response = $sdk->sdk->deleteContainerRecipe($request);

    if ($response->deleteContainerRecipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDistributionConfiguration

Deletes a distribution configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDistributionConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDistributionConfigurationRequest();
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->distributionConfigurationArn = 'natus';

    $response = $sdk->sdk->deleteDistributionConfiguration($request);

    if ($response->deleteDistributionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImage

<p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->imageBuildVersionArn = 'labore';

    $response = $sdk->sdk->deleteImage($request);

    if ($response->deleteImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImagePipeline

Deletes an image pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImagePipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImagePipelineRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->imagePipelineArn = 'architecto';

    $response = $sdk->sdk->deleteImagePipeline($request);

    if ($response->deleteImagePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageRecipe

Deletes an image recipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageRecipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageRecipeRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->imageRecipeArn = 'accusantium';

    $response = $sdk->sdk->deleteImageRecipe($request);

    if ($response->deleteImageRecipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInfrastructureConfiguration

Deletes an infrastructure configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInfrastructureConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInfrastructureConfigurationRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->infrastructureConfigurationArn = 'odit';

    $response = $sdk->sdk->deleteInfrastructureConfiguration($request);

    if ($response->deleteInfrastructureConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponent

Gets a component object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentRequest();
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';
    $request->componentBuildVersionArn = 'deleniti';

    $response = $sdk->sdk->getComponent($request);

    if ($response->getComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponentPolicy

Gets a component policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentPolicyRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';
    $request->componentArn = 'nihil';

    $response = $sdk->sdk->getComponentPolicy($request);

    if ($response->getComponentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerRecipe

Retrieves a container recipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerRecipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerRecipeRequest();
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->containerRecipeArn = 'praesentium';

    $response = $sdk->sdk->getContainerRecipe($request);

    if ($response->getContainerRecipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerRecipePolicy

Retrieves the policy for a container recipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerRecipePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerRecipePolicyRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->containerRecipeArn = 'ea';

    $response = $sdk->sdk->getContainerRecipePolicy($request);

    if ($response->getContainerRecipePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributionConfiguration

Gets a distribution configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributionConfigurationRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->distributionConfigurationArn = 'ipsam';

    $response = $sdk->sdk->getDistributionConfiguration($request);

    if ($response->getDistributionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImage

Gets an image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->imageBuildVersionArn = 'perferendis';

    $response = $sdk->sdk->getImage($request);

    if ($response->getImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagePipeline

Gets an image pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagePipelineRequest();
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';
    $request->imagePipelineArn = 'nobis';

    $response = $sdk->sdk->getImagePipeline($request);

    if ($response->getImagePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagePolicy

Gets an image policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagePolicyRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->imageArn = 'eos';

    $response = $sdk->sdk->getImagePolicy($request);

    if ($response->getImagePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageRecipe

Gets an image recipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRecipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageRecipeRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->imageRecipeArn = 'hic';

    $response = $sdk->sdk->getImageRecipe($request);

    if ($response->getImageRecipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImageRecipePolicy

Gets an image recipe policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRecipePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageRecipePolicyRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->imageRecipeArn = 'blanditiis';

    $response = $sdk->sdk->getImageRecipePolicy($request);

    if ($response->getImageRecipePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInfrastructureConfiguration

Gets an infrastructure configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInfrastructureConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInfrastructureConfigurationRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->infrastructureConfigurationArn = 'modi';

    $response = $sdk->sdk->getInfrastructureConfiguration($request);

    if ($response->getInfrastructureConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowExecution

Get the runtime information that was logged for a specific runtime instance of the workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowExecutionRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->workflowExecutionId = 'delectus';

    $response = $sdk->sdk->getWorkflowExecution($request);

    if ($response->getWorkflowExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowStepExecution

Get the runtime information that was logged for a specific runtime instance of the workflow step.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowStepExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowStepExecutionRequest();
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';
    $request->stepExecutionId = 'ipsum';

    $response = $sdk->sdk->getWorkflowStepExecution($request);

    if ($response->getWorkflowStepExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importComponent

Imports a component and transforms its data into a component document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportComponentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportComponentRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportComponentRequestBodyPlatformEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportComponentRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportComponentRequest();
    $request->requestBody = new ImportComponentRequestBody();
    $request->requestBody->changeDescription = 'hic';
    $request->requestBody->clientToken = 'excepturi';
    $request->requestBody->data = 'cum';
    $request->requestBody->description = 'voluptate';
    $request->requestBody->format = ImportComponentRequestBodyFormatEnum::SHELL;
    $request->requestBody->kmsKeyId = 'dignissimos';
    $request->requestBody->name = 'Allen Parisian Jr.';
    $request->requestBody->platform = ImportComponentRequestBodyPlatformEnum::WINDOWS;
    $request->requestBody->semanticVersion = 'iure';
    $request->requestBody->tags = [
        'quaerat' => 'accusamus',
        'quidem' => 'voluptatibus',
    ];
    $request->requestBody->type = ImportComponentRequestBodyTypeEnum::BUILD;
    $request->requestBody->uri = 'https://definite-marines.com';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->importComponent($request);

    if ($response->importComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importVmImage

<p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportVmImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportVmImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportVmImageRequestBodyPlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportVmImageRequest();
    $request->requestBody = new ImportVmImageRequestBody();
    $request->requestBody->clientToken = 'deleniti';
    $request->requestBody->description = 'omnis';
    $request->requestBody->name = 'Kelvin Zboncak';
    $request->requestBody->osVersion = 'voluptate';
    $request->requestBody->platform = ImportVmImageRequestBodyPlatformEnum::LINUX;
    $request->requestBody->semanticVersion = 'saepe';
    $request->requestBody->tags = [
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->requestBody->vmImportTaskId = 'accusamus';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->importVmImage($request);

    if ($response->importVmImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponentBuildVersions

<p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentBuildVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentBuildVersionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentBuildVersionsRequest();
    $request->requestBody = new ListComponentBuildVersionsRequestBody();
    $request->requestBody->componentVersionArn = 'totam';
    $request->requestBody->maxResults = 628982;
    $request->requestBody->nextToken = 'alias';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';
    $request->maxResults = 'dolorum';
    $request->nextToken = 'a';

    $response = $sdk->sdk->listComponentBuildVersions($request);

    if ($response->listComponentBuildVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponents

<p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequestBodyOwnerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentsRequest();
    $request->requestBody = new ListComponentsRequestBody();
    $request->requestBody->byName = false;
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 687488;
    $request->requestBody->nextToken = 'iusto';
    $request->requestBody->owner = ListComponentsRequestBodyOwnerEnum::SELF;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';
    $request->maxResults = 'dolorem';
    $request->nextToken = 'sapiente';

    $response = $sdk->sdk->listComponents($request);

    if ($response->listComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContainerRecipes

Returns a list of container recipes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContainerRecipesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListContainerRecipesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListContainerRecipesRequestBodyOwnerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContainerRecipesRequest();
    $request->requestBody = new ListContainerRecipesRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 471752;
    $request->requestBody->nextToken = 'sit';
    $request->requestBody->owner = ListContainerRecipesRequestBodyOwnerEnum::AMAZON;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';
    $request->maxResults = 'ipsum';
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->listContainerRecipes($request);

    if ($response->listContainerRecipesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDistributionConfigurations

Returns a list of distribution configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributionConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributionConfigurationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDistributionConfigurationsRequest();
    $request->requestBody = new ListDistributionConfigurationsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 586784;
    $request->requestBody->nextToken = 'maxime';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->maxResults = 'dolores';
    $request->nextToken = 'distinctio';

    $response = $sdk->sdk->listDistributionConfigurations($request);

    if ($response->listDistributionConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImageBuildVersions

Returns a list of image build versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImageBuildVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImageBuildVersionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImageBuildVersionsRequest();
    $request->requestBody = new ListImageBuildVersionsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->imageVersionArn = 'aliquid';
    $request->requestBody->maxResults = 463150;
    $request->requestBody->nextToken = 'molestias';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'sunt';
    $request->maxResults = 'ullam';
    $request->nextToken = 'nam';

    $response = $sdk->sdk->listImageBuildVersions($request);

    if ($response->listImageBuildVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImagePackages

List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImagePackagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImagePackagesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImagePackagesRequest();
    $request->requestBody = new ListImagePackagesRequestBody();
    $request->requestBody->imageBuildVersionArn = 'hic';
    $request->requestBody->maxResults = 30452;
    $request->requestBody->nextToken = 'cumque';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'nobis';
    $request->maxResults = 'quos';
    $request->nextToken = 'tempore';

    $response = $sdk->sdk->listImagePackages($request);

    if ($response->listImagePackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImagePipelineImages

Returns a list of images created by the specified pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImagePipelineImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImagePipelineImagesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImagePipelineImagesRequest();
    $request->requestBody = new ListImagePipelineImagesRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->imagePipelineArn = 'aperiam';
    $request->requestBody->maxResults = 961937;
    $request->requestBody->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'aut';
    $request->maxResults = 'quas';
    $request->nextToken = 'itaque';

    $response = $sdk->sdk->listImagePipelineImages($request);

    if ($response->listImagePipelineImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImagePipelines

Returns a list of image pipelines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImagePipelinesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImagePipelinesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImagePipelinesRequest();
    $request->requestBody = new ListImagePipelinesRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 669917;
    $request->requestBody->nextToken = 'repellendus';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';
    $request->maxResults = 'laudantium';
    $request->nextToken = 'odio';

    $response = $sdk->sdk->listImagePipelines($request);

    if ($response->listImagePipelinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImageRecipes

Returns a list of image recipes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImageRecipesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImageRecipesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListImageRecipesRequestBodyOwnerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImageRecipesRequest();
    $request->requestBody = new ListImageRecipesRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 977496;
    $request->requestBody->nextToken = 'quisquam';
    $request->requestBody->owner = ListImageRecipesRequestBodyOwnerEnum::THIRD_PARTY;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';
    $request->maxResults = 'tenetur';
    $request->nextToken = 'dignissimos';

    $response = $sdk->sdk->listImageRecipes($request);

    if ($response->listImageRecipesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImageScanFindingAggregations

<p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImageScanFindingAggregationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImageScanFindingAggregationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListImageScanFindingAggregationsRequestBodyFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImageScanFindingAggregationsRequest();
    $request->requestBody = new ListImageScanFindingAggregationsRequestBody();
    $request->requestBody->filter = new ListImageScanFindingAggregationsRequestBodyFilter();
    $request->requestBody->filter->name = 'Kelvin Schmidt';
    $request->requestBody->filter->values = [
        'vero',
        'ducimus',
        'dolore',
    ];
    $request->requestBody->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->nextToken = 'nulla';

    $response = $sdk->sdk->listImageScanFindingAggregations($request);

    if ($response->listImageScanFindingAggregationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImageScanFindings

Returns a list of image scan findings for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImageScanFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImageScanFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ImageScanFindingsFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImageScanFindingsRequest();
    $request->requestBody = new ListImageScanFindingsRequestBody();
    $request->requestBody->filters = [
        new ImageScanFindingsFilter(),
    ];
    $request->requestBody->maxResults = 780427;
    $request->requestBody->nextToken = 'maiores';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'tempora';
    $request->maxResults = 'ipsam';
    $request->nextToken = 'ea';

    $response = $sdk->sdk->listImageScanFindings($request);

    if ($response->listImageScanFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImages

Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImagesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListImagesRequestBodyOwnerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImagesRequest();
    $request->requestBody = new ListImagesRequestBody();
    $request->requestBody->byName = false;
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->includeDeprecated = false;
    $request->requestBody->maxResults = 428224;
    $request->requestBody->nextToken = 'possimus';
    $request->requestBody->owner = ListImagesRequestBodyOwnerEnum::SHARED;
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quasi';
    $request->maxResults = 'ex';
    $request->nextToken = 'nulla';

    $response = $sdk->sdk->listImages($request);

    if ($response->listImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInfrastructureConfigurations

Returns a list of infrastructure configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInfrastructureConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInfrastructureConfigurationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInfrastructureConfigurationsRequest();
    $request->requestBody = new ListInfrastructureConfigurationsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 972920;
    $request->requestBody->nextToken = 'nostrum';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'veniam';
    $request->maxResults = 'aliquid';
    $request->nextToken = 'inventore';

    $response = $sdk->sdk->listInfrastructureConfigurations($request);

    if ($response->listInfrastructureConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns the list of tags for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'minima';
    $request->resourceArn = 'eaque';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflowExecutions

Returns a list of workflow runtime instance metadata objects for a specific image build version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowExecutionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowExecutionsRequest();
    $request->requestBody = new ListWorkflowExecutionsRequestBody();
    $request->requestBody->imageBuildVersionArn = 'a';
    $request->requestBody->maxResults = 725595;
    $request->requestBody->nextToken = 'aut';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'inventore';
    $request->maxResults = 'non';
    $request->nextToken = 'et';

    $response = $sdk->sdk->listWorkflowExecutions($request);

    if ($response->listWorkflowExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflowStepExecutions

Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowStepExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowStepExecutionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowStepExecutionsRequest();
    $request->requestBody = new ListWorkflowStepExecutionsRequestBody();
    $request->requestBody->maxResults = 677412;
    $request->requestBody->nextToken = 'laborum';
    $request->requestBody->workflowExecutionId = 'placeat';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->maxResults = 'voluptas';
    $request->nextToken = 'libero';

    $response = $sdk->sdk->listWorkflowStepExecutions($request);

    if ($response->listWorkflowStepExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putComponentPolicy

Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutComponentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutComponentPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutComponentPolicyRequest();
    $request->requestBody = new PutComponentPolicyRequestBody();
    $request->requestBody->componentArn = 'quasi';
    $request->requestBody->policy = 'tempora';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->putComponentPolicy($request);

    if ($response->putComponentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putContainerRecipePolicy

Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutContainerRecipePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutContainerRecipePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutContainerRecipePolicyRequest();
    $request->requestBody = new PutContainerRecipePolicyRequestBody();
    $request->requestBody->containerRecipeArn = 'eius';
    $request->requestBody->policy = 'esse';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->putContainerRecipePolicy($request);

    if ($response->putContainerRecipePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putImagePolicy

Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutImagePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutImagePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutImagePolicyRequest();
    $request->requestBody = new PutImagePolicyRequestBody();
    $request->requestBody->imageArn = 'eum';
    $request->requestBody->policy = 'suscipit';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->putImagePolicy($request);

    if ($response->putImagePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putImageRecipePolicy

Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutImageRecipePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutImageRecipePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutImageRecipePolicyRequest();
    $request->requestBody = new PutImageRecipePolicyRequestBody();
    $request->requestBody->imageRecipeArn = 'quidem';
    $request->requestBody->policy = 'neque';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->putImageRecipePolicy($request);

    if ($response->putImageRecipePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImagePipelineExecution

Manually triggers a pipeline to create an image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImagePipelineExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImagePipelineExecutionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImagePipelineExecutionRequest();
    $request->requestBody = new StartImagePipelineExecutionRequestBody();
    $request->requestBody->clientToken = 'ab';
    $request->requestBody->imagePipelineArn = 'cupiditate';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->startImagePipelineExecution($request);

    if ($response->startImagePipelineExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds a tag to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'recusandae' => 'aperiam',
        'distinctio' => 'quod',
    ];
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'odio';
    $request->resourceArn = 'occaecati';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'porro';
    $request->resourceArn = 'eum';
    $request->tagKeys = [
        'praesentium',
        'consequuntur',
        'deleniti',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDistributionConfiguration

Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDistributionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDistributionConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\AmiDistributionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LaunchPermissionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDistributionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TargetContainerRepository;
use \OpenAPI\OpenAPI\Models\Shared\ContainerRepositoryServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\FastLaunchConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FastLaunchLaunchTemplateSpecification;
use \OpenAPI\OpenAPI\Models\Shared\FastLaunchSnapshotConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTemplateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3ExportConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskImageFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDistributionConfigurationRequest();
    $request->requestBody = new UpdateDistributionConfigurationRequestBody();
    $request->requestBody->clientToken = 'fugit';
    $request->requestBody->description = 'fuga';
    $request->requestBody->distributionConfigurationArn = 'mollitia';
    $request->requestBody->distributions = [
        new Distribution(),
        new Distribution(),
    ];
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->updateDistributionConfiguration($request);

    if ($response->updateDistributionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateImagePipeline

<p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePipelineRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePipelineRequestBodyImageScanningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EcrConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePipelineRequestBodyImageTestsConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePipelineRequestBodySchedule;
use \OpenAPI\OpenAPI\Models\Shared\PipelineExecutionStartConditionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePipelineRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateImagePipelineRequest();
    $request->requestBody = new UpdateImagePipelineRequestBody();
    $request->requestBody->clientToken = 'ratione';
    $request->requestBody->containerRecipeArn = 'explicabo';
    $request->requestBody->description = 'saepe';
    $request->requestBody->distributionConfigurationArn = 'occaecati';
    $request->requestBody->enhancedImageMetadataEnabled = false;
    $request->requestBody->imagePipelineArn = 'atque';
    $request->requestBody->imageRecipeArn = 'et';
    $request->requestBody->imageScanningConfiguration = new UpdateImagePipelineRequestBodyImageScanningConfiguration();
    $request->requestBody->imageScanningConfiguration->ecrConfiguration = new EcrConfiguration();
    $request->requestBody->imageScanningConfiguration->ecrConfiguration->containerTags = [
        'eveniet',
        'accusamus',
    ];
    $request->requestBody->imageScanningConfiguration->ecrConfiguration->repositoryName = 'veritatis';
    $request->requestBody->imageScanningConfiguration->imageScanningEnabled = false;
    $request->requestBody->imageTestsConfiguration = new UpdateImagePipelineRequestBodyImageTestsConfiguration();
    $request->requestBody->imageTestsConfiguration->imageTestsEnabled = false;
    $request->requestBody->imageTestsConfiguration->timeoutMinutes = 458604;
    $request->requestBody->infrastructureConfigurationArn = 'quod';
    $request->requestBody->schedule = new UpdateImagePipelineRequestBodySchedule();
    $request->requestBody->schedule->pipelineExecutionStartCondition = PipelineExecutionStartConditionEnum::EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE;
    $request->requestBody->schedule->scheduleExpression = 'vero';
    $request->requestBody->schedule->timezone = 'aliquid';
    $request->requestBody->status = UpdateImagePipelineRequestBodyStatusEnum::DISABLED;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->updateImagePipeline($request);

    if ($response->updateImagePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInfrastructureConfiguration

Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInfrastructureConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInfrastructureConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInfrastructureConfigurationRequestBodyInstanceMetadataOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInfrastructureConfigurationRequestBodyLogging;
use \OpenAPI\OpenAPI\Models\Shared\S3Logs;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInfrastructureConfigurationRequest();
    $request->requestBody = new UpdateInfrastructureConfigurationRequestBody();
    $request->requestBody->clientToken = 'distinctio';
    $request->requestBody->description = 'eligendi';
    $request->requestBody->infrastructureConfigurationArn = 'sit';
    $request->requestBody->instanceMetadataOptions = new UpdateInfrastructureConfigurationRequestBodyInstanceMetadataOptions();
    $request->requestBody->instanceMetadataOptions->httpPutResponseHopLimit = 636061;
    $request->requestBody->instanceMetadataOptions->httpTokens = 'tempore';
    $request->requestBody->instanceProfileName = 'adipisci';
    $request->requestBody->instanceTypes = [
        'consequuntur',
        'consequatur',
        'minus',
        'quaerat',
    ];
    $request->requestBody->keyPair = 'sapiente';
    $request->requestBody->logging = new UpdateInfrastructureConfigurationRequestBodyLogging();
    $request->requestBody->logging->s3Logs = new S3Logs();
    $request->requestBody->logging->s3Logs->s3BucketName = 'consectetur';
    $request->requestBody->logging->s3Logs->s3KeyPrefix = 'esse';
    $request->requestBody->resourceTags = [
        'provident' => 'a',
        'nulla' => 'quas',
        'esse' => 'quasi',
    ];
    $request->requestBody->securityGroupIds = [
        'error',
        'sint',
        'pariatur',
        'possimus',
    ];
    $request->requestBody->snsTopicArn = 'quia';
    $request->requestBody->subnetId = 'eveniet';
    $request->requestBody->terminateInstanceOnFailure = false;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->updateInfrastructureConfiguration($request);

    if ($response->updateInfrastructureConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
