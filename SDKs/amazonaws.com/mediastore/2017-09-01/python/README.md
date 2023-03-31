# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/mediastore/2017-09-01/python
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


req = operations.CreateContainerRequest(
    create_container_input=shared.CreateContainerInput(
        container_name="corrupti",
        tags=[
            shared.Tag(
                key="distinctio",
                value="quibusdam",
            ),
            shared.Tag(
                key="unde",
                value="nulla",
            ),
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
        ],
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
    x_amz_target="MediaStore_20170901.CreateContainer",
)
    
res = s.create_container(req)

if res.create_container_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_container` - Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
* `delete_container` - Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 
* `delete_container_policy` - Deletes the access policy that is associated with the specified container.
* `delete_cors_policy` - <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
* `delete_lifecycle_policy` - Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
* `delete_metric_policy` - Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
* `describe_container` - Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
* `get_container_policy` - Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
* `get_cors_policy` - <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
* `get_lifecycle_policy` - Retrieves the object lifecycle policy that is assigned to a container.
* `get_metric_policy` - Returns the metric policy for the specified container. 
* `list_containers` - <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
* `list_tags_for_resource` - Returns a list of the tags assigned to the specified container. 
* `put_container_policy` - <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
* `put_cors_policy` - <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
* `put_lifecycle_policy` - <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
* `put_metric_policy` - The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
* `start_access_logging` - Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
* `stop_access_logging` - Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
* `tag_resource` - Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
* `untag_resource` - Removes tags from the specified container. You can specify one or more tags to remove. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
