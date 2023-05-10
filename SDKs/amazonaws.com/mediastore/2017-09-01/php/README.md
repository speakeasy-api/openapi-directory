# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainerInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContainerRequest();
    $request->createContainerInput = new CreateContainerInput();
    $request->createContainerInput->containerName = 'corrupti';
    $request->createContainerInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = CreateContainerXAmzTargetEnum::MEDIA_STORE20170901_CREATE_CONTAINER;

    $response = $sdk->createContainer($request);

    if ($response->createContainerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createContainer](docs/sdk/README.md#createcontainer) - Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
* [deleteContainer](docs/sdk/README.md#deletecontainer) - Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 
* [deleteContainerPolicy](docs/sdk/README.md#deletecontainerpolicy) - Deletes the access policy that is associated with the specified container.
* [deleteCorsPolicy](docs/sdk/README.md#deletecorspolicy) - <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
* [deleteLifecyclePolicy](docs/sdk/README.md#deletelifecyclepolicy) - Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
* [deleteMetricPolicy](docs/sdk/README.md#deletemetricpolicy) - Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
* [describeContainer](docs/sdk/README.md#describecontainer) - Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
* [getContainerPolicy](docs/sdk/README.md#getcontainerpolicy) - Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
* [getCorsPolicy](docs/sdk/README.md#getcorspolicy) - <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
* [getLifecyclePolicy](docs/sdk/README.md#getlifecyclepolicy) - Retrieves the object lifecycle policy that is assigned to a container.
* [getMetricPolicy](docs/sdk/README.md#getmetricpolicy) - Returns the metric policy for the specified container. 
* [listContainers](docs/sdk/README.md#listcontainers) - <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of the tags assigned to the specified container. 
* [putContainerPolicy](docs/sdk/README.md#putcontainerpolicy) - <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
* [putCorsPolicy](docs/sdk/README.md#putcorspolicy) - <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
* [putLifecyclePolicy](docs/sdk/README.md#putlifecyclepolicy) - <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
* [putMetricPolicy](docs/sdk/README.md#putmetricpolicy) - The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
* [startAccessLogging](docs/sdk/README.md#startaccesslogging) - Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
* [stopAccessLogging](docs/sdk/README.md#stopaccesslogging) - Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
* [tagResource](docs/sdk/README.md#tagresource) - Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified container. You can specify one or more tags to remove. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
