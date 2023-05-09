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
import org.openapis.openapi.models.operations.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.operations.CreateHttpNamespaceResponse;
import org.openapis.openapi.models.operations.CreateHttpNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHttpNamespaceRequest req = new CreateHttpNamespaceRequest(                new CreateHttpNamespaceRequest("provident") {{
                                creatorRequestId = "distinctio";
                                description = "quibusdam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "vel") {{
                                        key = "nulla";
                                        value = "corrupti";
                                    }}),
                                    add(new Tag("suscipit", "iure") {{
                                        key = "error";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("ipsa", "delectus") {{
                                        key = "magnam";
                                        value = "debitis";
                                    }}),
                                }};
                            }};, CreateHttpNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_CREATE_HTTP_NAMESPACE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateHttpNamespaceResponse res = sdk.createHttpNamespace(req);

            if (res.createHttpNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createHttpNamespace](docs/sdk/README.md#createhttpnamespace) - <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [createPrivateDnsNamespace](docs/sdk/README.md#createprivatednsnamespace) - Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.
* [createPublicDnsNamespace](docs/sdk/README.md#createpublicdnsnamespace) - <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>
* [createService](docs/sdk/README.md#createservice) - <p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [deleteNamespace](docs/sdk/README.md#deletenamespace) - Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
* [deleteService](docs/sdk/README.md#deleteservice) - Deletes a specified service. If the service still contains one or more registered instances, the request fails.
* [deregisterInstance](docs/sdk/README.md#deregisterinstance) - Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.
* [discoverInstances](docs/sdk/README.md#discoverinstances) - Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.
* [getInstance](docs/sdk/README.md#getinstance) - Gets information about a specified instance.
* [getInstancesHealthStatus](docs/sdk/README.md#getinstanceshealthstatus) - <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>
* [getNamespace](docs/sdk/README.md#getnamespace) - Gets information about a namespace.
* [getOperation](docs/sdk/README.md#getoperation) - <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>
* [getService](docs/sdk/README.md#getservice) - Gets the settings for a specified service.
* [listInstances](docs/sdk/README.md#listinstances) - Lists summary information about the instances that you registered by using a specified service.
* [listNamespaces](docs/sdk/README.md#listnamespaces) - Lists summary information about the namespaces that were created by the current Amazon Web Services account.
* [listOperations](docs/sdk/README.md#listoperations) - Lists operations that match the criteria that you specify.
* [listServices](docs/sdk/README.md#listservices) - Lists summary information for all the services that are associated with one or more specified namespaces.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists tags for the specified resource.
* [registerInstance](docs/sdk/README.md#registerinstance) - <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified resource.
* [updateHttpNamespace](docs/sdk/README.md#updatehttpnamespace) - Updates an HTTP namespace.
* [updateInstanceCustomHealthStatus](docs/sdk/README.md#updateinstancecustomhealthstatus) - <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
* [updatePrivateDnsNamespace](docs/sdk/README.md#updateprivatednsnamespace) - Updates a private DNS namespace.
* [updatePublicDnsNamespace](docs/sdk/README.md#updatepublicdnsnamespace) - Updates a public DNS namespace.
* [updateService](docs/sdk/README.md#updateservice) - <p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
