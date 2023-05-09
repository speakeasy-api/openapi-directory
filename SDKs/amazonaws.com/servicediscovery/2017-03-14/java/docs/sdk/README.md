# SDK

## Overview

<fullname>Cloud Map</fullname> <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance becomes available, you can call the Cloud Map API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicediscovery/>
### Available Operations

* [createHttpNamespace](#createhttpnamespace) - <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [createPrivateDnsNamespace](#createprivatednsnamespace) - Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.
* [createPublicDnsNamespace](#createpublicdnsnamespace) - <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>
* [createService](#createservice) - <p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [deleteNamespace](#deletenamespace) - Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
* [deleteService](#deleteservice) - Deletes a specified service. If the service still contains one or more registered instances, the request fails.
* [deregisterInstance](#deregisterinstance) - Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.
* [discoverInstances](#discoverinstances) - Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.
* [getInstance](#getinstance) - Gets information about a specified instance.
* [getInstancesHealthStatus](#getinstanceshealthstatus) - <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>
* [getNamespace](#getnamespace) - Gets information about a namespace.
* [getOperation](#getoperation) - <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>
* [getService](#getservice) - Gets the settings for a specified service.
* [listInstances](#listinstances) - Lists summary information about the instances that you registered by using a specified service.
* [listNamespaces](#listnamespaces) - Lists summary information about the namespaces that were created by the current Amazon Web Services account.
* [listOperations](#listoperations) - Lists operations that match the criteria that you specify.
* [listServices](#listservices) - Lists summary information for all the services that are associated with one or more specified namespaces.
* [listTagsForResource](#listtagsforresource) - Lists tags for the specified resource.
* [registerInstance](#registerinstance) - <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [tagResource](#tagresource) - Adds one or more tags to the specified resource.
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateHttpNamespace](#updatehttpnamespace) - Updates an HTTP namespace.
* [updateInstanceCustomHealthStatus](#updateinstancecustomhealthstatus) - <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
* [updatePrivateDnsNamespace](#updateprivatednsnamespace) - Updates a private DNS namespace.
* [updatePublicDnsNamespace](#updatepublicdnsnamespace) - Updates a public DNS namespace.
* [updateService](#updateservice) - <p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

## createHttpNamespace

<p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

### Example Usage

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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHttpNamespaceRequest req = new CreateHttpNamespaceRequest(                new CreateHttpNamespaceRequest("nisi") {{
                                creatorRequestId = "recusandae";
                                description = "temporibus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "perferendis") {{
                                        key = "quis";
                                        value = "veritatis";
                                    }}),
                                }};
                            }};, CreateHttpNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_CREATE_HTTP_NAMESPACE) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateHttpNamespaceResponse res = sdk.sdk.createHttpNamespace(req);

            if (res.createHttpNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPrivateDnsNamespace

Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePrivateDnsNamespaceRequest;
import org.openapis.openapi.models.operations.CreatePrivateDnsNamespaceResponse;
import org.openapis.openapi.models.operations.CreatePrivateDnsNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePrivateDnsNamespaceRequest;
import org.openapis.openapi.models.shared.PrivateDnsNamespaceProperties;
import org.openapis.openapi.models.shared.PrivateDnsPropertiesMutable;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Soa;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePrivateDnsNamespaceRequest req = new CreatePrivateDnsNamespaceRequest(                new CreatePrivateDnsNamespaceRequest("molestiae", "quod") {{
                                creatorRequestId = "quod";
                                description = "esse";
                                properties = new PrivateDnsNamespaceProperties(                new PrivateDnsPropertiesMutable(                new Soa(520478L);););;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                    add(new Tag("deleniti", "hic") {{
                                        key = "occaecati";
                                        value = "fugit";
                                    }}),
                                    add(new Tag("beatae", "commodi") {{
                                        key = "optio";
                                        value = "totam";
                                    }}),
                                    add(new Tag("qui", "impedit") {{
                                        key = "molestiae";
                                        value = "modi";
                                    }}),
                                }};
                            }};, CreatePrivateDnsNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_CREATE_PRIVATE_DNS_NAMESPACE) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            CreatePrivateDnsNamespaceResponse res = sdk.sdk.createPrivateDnsNamespace(req);

            if (res.createPrivateDnsNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPublicDnsNamespace

<p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePublicDnsNamespaceRequest;
import org.openapis.openapi.models.operations.CreatePublicDnsNamespaceResponse;
import org.openapis.openapi.models.operations.CreatePublicDnsNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePublicDnsNamespaceRequest;
import org.openapis.openapi.models.shared.PublicDnsNamespaceProperties;
import org.openapis.openapi.models.shared.PublicDnsPropertiesMutable;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Soa;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePublicDnsNamespaceRequest req = new CreatePublicDnsNamespaceRequest(                new CreatePublicDnsNamespaceRequest("sed") {{
                                creatorRequestId = "iste";
                                description = "dolor";
                                properties = new PublicDnsNamespaceProperties(                new PublicDnsPropertiesMutable(                new Soa(616934L);););;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("fuga", "in") {{
                                        key = "hic";
                                        value = "saepe";
                                    }}),
                                    add(new Tag("iure", "saepe") {{
                                        key = "corporis";
                                        value = "iste";
                                    }}),
                                }};
                            }};, CreatePublicDnsNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_CREATE_PUBLIC_DNS_NAMESPACE) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            CreatePublicDnsNamespaceResponse res = sdk.sdk.createPublicDnsNamespace(req);

            if (res.createPublicDnsNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

<p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateServiceRequest;
import org.openapis.openapi.models.shared.DnsConfig;
import org.openapis.openapi.models.shared.DnsRecord;
import org.openapis.openapi.models.shared.HealthCheckConfig;
import org.openapis.openapi.models.shared.HealthCheckCustomConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.RecordTypeEnum;
import org.openapis.openapi.models.shared.RoutingPolicyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeOptionEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceRequest req = new CreateServiceRequest(                new CreateServiceRequest("dolorem") {{
                                creatorRequestId = "corporis";
                                description = "explicabo";
                                dnsConfig = new DnsConfig(                new org.openapis.openapi.models.shared.DnsRecord[]{{
                                                    add(new DnsRecord(363711L, RecordTypeEnum.A) {{
                                                        ttl = 315428L;
                                                        type = RecordTypeEnum.AAAA;
                                                    }}),
                                                    add(new DnsRecord(438601L, RecordTypeEnum.AAAA) {{
                                                        ttl = 570197L;
                                                        type = RecordTypeEnum.SRV;
                                                    }}),
                                                    add(new DnsRecord(102044L, RecordTypeEnum.AAAA) {{
                                                        ttl = 988374L;
                                                        type = RecordTypeEnum.CNAME;
                                                    }}),
                                                    add(new DnsRecord(161309L, RecordTypeEnum.CNAME) {{
                                                        ttl = 208876L;
                                                        type = RecordTypeEnum.AAAA;
                                                    }}),
                                                }}) {{
                                    namespaceId = "mollitia";
                                    routingPolicy = RoutingPolicyEnum.WEIGHTED;
                                }};;
                                healthCheckConfig = new HealthCheckConfig(HealthCheckTypeEnum.HTTP) {{
                                    failureThreshold = 414369L;
                                    resourcePath = "quam";
                                }};;
                                healthCheckCustomConfig = new HealthCheckCustomConfig() {{
                                    failureThreshold = 474697L;
                                }};;
                                namespaceId = "velit";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vitae", "laborum") {{
                                        key = "quia";
                                        value = "quis";
                                    }}),
                                    add(new Tag("odit", "quo") {{
                                        key = "animi";
                                        value = "enim";
                                    }}),
                                    add(new Tag("ipsam", "id") {{
                                        key = "sequi";
                                        value = "tenetur";
                                    }}),
                                }};
                                type = ServiceTypeOptionEnum.HTTP;
                            }};, CreateServiceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_CREATE_SERVICE) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req);

            if (res.createServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNamespace

Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNamespaceRequest;
import org.openapis.openapi.models.operations.DeleteNamespaceResponse;
import org.openapis.openapi.models.operations.DeleteNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteNamespaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNamespaceRequest req = new DeleteNamespaceRequest(                new DeleteNamespaceRequest("voluptatibus");, DeleteNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_DELETE_NAMESPACE) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteNamespaceResponse res = sdk.sdk.deleteNamespace(req);

            if (res.deleteNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

Deletes a specified service. If the service still contains one or more registered instances, the request fails.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest(                new DeleteServiceRequest("perferendis");, DeleteServiceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_DELETE_SERVICE) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteServiceResponse res = sdk.sdk.deleteService(req);

            if (res.deleteServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterInstance

Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterInstanceRequest;
import org.openapis.openapi.models.operations.DeregisterInstanceResponse;
import org.openapis.openapi.models.operations.DeregisterInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterInstanceRequest req = new DeregisterInstanceRequest(                new DeregisterInstanceRequest("dicta", "harum");, DeregisterInstanceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_DEREGISTER_INSTANCE) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            DeregisterInstanceResponse res = sdk.sdk.deregisterInstance(req);

            if (res.deregisterInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoverInstances

Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoverInstancesRequest;
import org.openapis.openapi.models.operations.DiscoverInstancesResponse;
import org.openapis.openapi.models.operations.DiscoverInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DiscoverInstancesRequest;
import org.openapis.openapi.models.shared.HealthStatusFilterEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DiscoverInstancesRequest req = new DiscoverInstancesRequest(                new DiscoverInstancesRequest("excepturi", "pariatur") {{
                                healthStatus = HealthStatusFilterEnum.UNHEALTHY;
                                maxResults = 508969L;
                                optionalParameters = new java.util.HashMap<String, String>() {{
                                    put("voluptates", "quasi");
                                    put("repudiandae", "sint");
                                    put("veritatis", "itaque");
                                }};
                                queryParameters = new java.util.HashMap<String, String>() {{
                                    put("enim", "consequatur");
                                    put("est", "quibusdam");
                                }};
                            }};, DiscoverInstancesXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_DISCOVER_INSTANCES) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            DiscoverInstancesResponse res = sdk.sdk.discoverInstances(req);

            if (res.discoverInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstance

Gets information about a specified instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceRequest;
import org.openapis.openapi.models.operations.GetInstanceResponse;
import org.openapis.openapi.models.operations.GetInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceRequest req = new GetInstanceRequest(                new GetInstanceRequest("cupiditate", "quos");, GetInstanceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_GET_INSTANCE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetInstanceResponse res = sdk.sdk.getInstance(req);

            if (res.getInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstancesHealthStatus

<p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstancesHealthStatusRequest;
import org.openapis.openapi.models.operations.GetInstancesHealthStatusResponse;
import org.openapis.openapi.models.operations.GetInstancesHealthStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstancesHealthStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstancesHealthStatusRequest req = new GetInstancesHealthStatusRequest(                new GetInstancesHealthStatusRequest("tempora") {{
                                instances = new String[]{{
                                    add("tempore"),
                                    add("labore"),
                                    add("delectus"),
                                }};
                                maxResults = 433288L;
                                nextToken = "non";
                            }};, GetInstancesHealthStatusXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_GET_INSTANCES_HEALTH_STATUS) {{
                maxResults = "eligendi";
                nextToken = "sint";
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            GetInstancesHealthStatusResponse res = sdk.sdk.getInstancesHealthStatus(req);

            if (res.getInstancesHealthStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespace

Gets information about a namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceRequest;
import org.openapis.openapi.models.operations.GetNamespaceResponse;
import org.openapis.openapi.models.operations.GetNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetNamespaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamespaceRequest req = new GetNamespaceRequest(                new GetNamespaceRequest("dolorum");, GetNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_GET_NAMESPACE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            GetNamespaceResponse res = sdk.sdk.getNamespace(req);

            if (res.getNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperation

<p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationRequest;
import org.openapis.openapi.models.operations.GetOperationResponse;
import org.openapis.openapi.models.operations.GetOperationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOperationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOperationRequest req = new GetOperationRequest(                new GetOperationRequest("facere");, GetOperationXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_GET_OPERATION) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            GetOperationResponse res = sdk.sdk.getOperation(req);

            if (res.getOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getService

Gets the settings for a specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceRequest;
import org.openapis.openapi.models.operations.GetServiceResponse;
import org.openapis.openapi.models.operations.GetServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceRequest req = new GetServiceRequest(                new GetServiceRequest("delectus");, GetServiceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_GET_SERVICE) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            GetServiceResponse res = sdk.sdk.getService(req);

            if (res.getServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstances

Lists summary information about the instances that you registered by using a specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstancesRequest;
import org.openapis.openapi.models.operations.ListInstancesResponse;
import org.openapis.openapi.models.operations.ListInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstancesRequest req = new ListInstancesRequest(                new ListInstancesRequest("deserunt") {{
                                maxResults = 394869L;
                                nextToken = "vel";
                            }};, ListInstancesXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_LIST_INSTANCES) {{
                maxResults = "natus";
                nextToken = "omnis";
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            ListInstancesResponse res = sdk.sdk.listInstances(req);

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNamespaces

Lists summary information about the namespaces that were created by the current Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNamespacesRequest;
import org.openapis.openapi.models.operations.ListNamespacesResponse;
import org.openapis.openapi.models.operations.ListNamespacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.FilterConditionEnum;
import org.openapis.openapi.models.shared.ListNamespacesRequest;
import org.openapis.openapi.models.shared.NamespaceFilter;
import org.openapis.openapi.models.shared.NamespaceFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNamespacesRequest req = new ListNamespacesRequest(                new ListNamespacesRequest() {{
                                filters = new org.openapis.openapi.models.shared.NamespaceFilter[]{{
                                    add(new NamespaceFilter(NamespaceFilterNameEnum.TYPE,                 new String[]{{
                                                        add("et"),
                                                        add("excepturi"),
                                                    }}) {{
                                        condition = FilterConditionEnum.BETWEEN;
                                        name = NamespaceFilterNameEnum.HTTP_NAME;
                                        values = new String[]{{
                                            add("vero"),
                                            add("aspernatur"),
                                        }};
                                    }}),
                                    add(new NamespaceFilter(NamespaceFilterNameEnum.HTTP_NAME,                 new String[]{{
                                                        add("ad"),
                                                        add("eum"),
                                                        add("dolor"),
                                                    }}) {{
                                        condition = FilterConditionEnum.IN;
                                        name = NamespaceFilterNameEnum.NAME;
                                        values = new String[]{{
                                            add("sint"),
                                            add("accusantium"),
                                            add("mollitia"),
                                        }};
                                    }}),
                                }};
                                maxResults = 896547L;
                                nextToken = "odit";
                            }};, ListNamespacesXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_LIST_NAMESPACES) {{
                maxResults = "nemo";
                nextToken = "quasi";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            ListNamespacesResponse res = sdk.sdk.listNamespaces(req);

            if (res.listNamespacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOperations

Lists operations that match the criteria that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOperationsRequest;
import org.openapis.openapi.models.operations.ListOperationsResponse;
import org.openapis.openapi.models.operations.ListOperationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FilterConditionEnum;
import org.openapis.openapi.models.shared.ListOperationsRequest;
import org.openapis.openapi.models.shared.OperationFilter;
import org.openapis.openapi.models.shared.OperationFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOperationsRequest req = new ListOperationsRequest(                new ListOperationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.OperationFilter[]{{
                                    add(new OperationFilter(OperationFilterNameEnum.UPDATE_DATE,                 new String[]{{
                                                        add("sed"),
                                                        add("saepe"),
                                                        add("pariatur"),
                                                        add("accusantium"),
                                                    }}) {{
                                        condition = FilterConditionEnum.EQ;
                                        name = OperationFilterNameEnum.UPDATE_DATE;
                                        values = new String[]{{
                                            add("expedita"),
                                            add("nihil"),
                                        }};
                                    }}),
                                }};
                                maxResults = 162493L;
                                nextToken = "praesentium";
                            }};, ListOperationsXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_LIST_OPERATIONS) {{
                maxResults = "natus";
                nextToken = "magni";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListOperationsResponse res = sdk.sdk.listOperations(req);

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServices

Lists summary information for all the services that are associated with one or more specified namespaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesRequest;
import org.openapis.openapi.models.operations.ListServicesResponse;
import org.openapis.openapi.models.operations.ListServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.FilterConditionEnum;
import org.openapis.openapi.models.shared.ListServicesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceFilter;
import org.openapis.openapi.models.shared.ServiceFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicesRequest req = new ListServicesRequest(                new ListServicesRequest() {{
                                filters = new org.openapis.openapi.models.shared.ServiceFilter[]{{
                                    add(new ServiceFilter(ServiceFilterNameEnum.NAMESPACE_ID,                 new String[]{{
                                                        add("ipsam"),
                                                        add("voluptate"),
                                                        add("autem"),
                                                    }}) {{
                                        condition = FilterConditionEnum.EQ;
                                        name = ServiceFilterNameEnum.NAMESPACE_ID;
                                        values = new String[]{{
                                            add("maiores"),
                                        }};
                                    }}),
                                    add(new ServiceFilter(ServiceFilterNameEnum.NAMESPACE_ID,                 new String[]{{
                                                        add("voluptatibus"),
                                                        add("perferendis"),
                                                    }}) {{
                                        condition = FilterConditionEnum.BETWEEN;
                                        name = ServiceFilterNameEnum.NAMESPACE_ID;
                                        values = new String[]{{
                                            add("pariatur"),
                                        }};
                                    }}),
                                }};
                                maxResults = 855804L;
                                nextToken = "amet";
                            }};, ListServicesXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_LIST_SERVICES) {{
                maxResults = "aut";
                nextToken = "cumque";
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "hic";
                xAmzCredential = "libero";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "totam";
            }};            

            ListServicesResponse res = sdk.sdk.listServices(req);

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("eaque");, ListTagsForResourceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
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

## registerInstance

<p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterInstanceRequest;
import org.openapis.openapi.models.operations.RegisterInstanceResponse;
import org.openapis.openapi.models.operations.RegisterInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterInstanceRequest req = new RegisterInstanceRequest(                new RegisterInstanceRequest(                new java.util.HashMap<String, String>() {{
                                                put("nostrum", "hic");
                                                put("recusandae", "omnis");
                                                put("facilis", "perspiciatis");
                                                put("voluptatem", "porro");
                                            }}, "consequuntur", "blanditiis") {{
                                creatorRequestId = "error";
                            }};, RegisterInstanceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_REGISTER_INSTANCE) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "rerum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "modi";
            }};            

            RegisterInstanceResponse res = sdk.sdk.registerInstance(req);

            if (res.registerInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more tags to the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("dolorum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("nobis", "libero") {{
                                                    key = "pariatur";
                                                    value = "provident";
                                                }}),
                                                add(new Tag("quos", "aliquid") {{
                                                    key = "delectus";
                                                    value = "quaerat";
                                                }}),
                                                add(new Tag("dolor", "qui") {{
                                                    key = "dolorem";
                                                    value = "dolorem";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_TAG_RESOURCE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
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

Removes one or more tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("dolorum",                 new String[]{{
                                                add("veritatis"),
                                                add("ipsa"),
                                            }});, UntagResourceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
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

## updateHttpNamespace

Updates an HTTP namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHttpNamespaceRequest;
import org.openapis.openapi.models.operations.UpdateHttpNamespaceResponse;
import org.openapis.openapi.models.operations.UpdateHttpNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.HttpNamespaceChange;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateHttpNamespaceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateHttpNamespaceRequest req = new UpdateHttpNamespaceRequest(                new UpdateHttpNamespaceRequest("natus",                 new HttpNamespaceChange("eos");) {{
                                updaterRequestId = "atque";
                            }};, UpdateHttpNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_UPDATE_HTTP_NAMESPACE) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            UpdateHttpNamespaceResponse res = sdk.sdk.updateHttpNamespace(req);

            if (res.updateHttpNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstanceCustomHealthStatus

<p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstanceCustomHealthStatusRequest;
import org.openapis.openapi.models.operations.UpdateInstanceCustomHealthStatusResponse;
import org.openapis.openapi.models.operations.UpdateInstanceCustomHealthStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.CustomHealthStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateInstanceCustomHealthStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInstanceCustomHealthStatusRequest req = new UpdateInstanceCustomHealthStatusRequest(                new UpdateInstanceCustomHealthStatusRequest("deleniti", "omnis", CustomHealthStatusEnum.UNHEALTHY);, UpdateInstanceCustomHealthStatusXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateInstanceCustomHealthStatusResponse res = sdk.sdk.updateInstanceCustomHealthStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePrivateDnsNamespace

Updates a private DNS namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePrivateDnsNamespaceRequest;
import org.openapis.openapi.models.operations.UpdatePrivateDnsNamespaceResponse;
import org.openapis.openapi.models.operations.UpdatePrivateDnsNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.PrivateDnsNamespaceChange;
import org.openapis.openapi.models.shared.PrivateDnsNamespacePropertiesChange;
import org.openapis.openapi.models.shared.PrivateDnsPropertiesMutableChange;
import org.openapis.openapi.models.shared.SOAChange;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePrivateDnsNamespaceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePrivateDnsNamespaceRequest req = new UpdatePrivateDnsNamespaceRequest(                new UpdatePrivateDnsNamespaceRequest("aspernatur",                 new PrivateDnsNamespaceChange() {{
                                                description = "perferendis";
                                                properties = new PrivateDnsNamespacePropertiesChange(                new PrivateDnsPropertiesMutableChange(                new SOAChange(229219L);););;
                                            }};) {{
                                updaterRequestId = "optio";
                            }};, UpdatePrivateDnsNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_UPDATE_PRIVATE_DNS_NAMESPACE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            UpdatePrivateDnsNamespaceResponse res = sdk.sdk.updatePrivateDnsNamespace(req);

            if (res.updatePrivateDnsNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePublicDnsNamespace

Updates a public DNS namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePublicDnsNamespaceRequest;
import org.openapis.openapi.models.operations.UpdatePublicDnsNamespaceResponse;
import org.openapis.openapi.models.operations.UpdatePublicDnsNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.PublicDnsNamespaceChange;
import org.openapis.openapi.models.shared.PublicDnsNamespacePropertiesChange;
import org.openapis.openapi.models.shared.PublicDnsPropertiesMutableChange;
import org.openapis.openapi.models.shared.SOAChange;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePublicDnsNamespaceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePublicDnsNamespaceRequest req = new UpdatePublicDnsNamespaceRequest(                new UpdatePublicDnsNamespaceRequest("totam",                 new PublicDnsNamespaceChange() {{
                                                description = "similique";
                                                properties = new PublicDnsNamespacePropertiesChange(                new PublicDnsPropertiesMutableChange(                new SOAChange(55L);););;
                                            }};) {{
                                updaterRequestId = "at";
                            }};, UpdatePublicDnsNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_UPDATE_PUBLIC_DNS_NAMESPACE) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            UpdatePublicDnsNamespaceResponse res = sdk.sdk.updatePublicDnsNamespace(req);

            if (res.updatePublicDnsNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

<p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DnsConfigChange;
import org.openapis.openapi.models.shared.DnsRecord;
import org.openapis.openapi.models.shared.HealthCheckConfig;
import org.openapis.openapi.models.shared.HealthCheckTypeEnum;
import org.openapis.openapi.models.shared.RecordTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChange;
import org.openapis.openapi.models.shared.UpdateServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest(                new UpdateServiceRequest("esse",                 new ServiceChange() {{
                                                description = "harum";
                                                dnsConfig = new DnsConfigChange(                new org.openapis.openapi.models.shared.DnsRecord[]{{
                                                                    add(new DnsRecord(947371L, RecordTypeEnum.SRV) {{
                                                                        ttl = 215507L;
                                                                        type = RecordTypeEnum.CNAME;
                                                                    }}),
                                                                    add(new DnsRecord(253941L, RecordTypeEnum.A) {{
                                                                        ttl = 730856L;
                                                                        type = RecordTypeEnum.CNAME;
                                                                    }}),
                                                                }});;
                                                healthCheckConfig = new HealthCheckConfig(HealthCheckTypeEnum.HTTP) {{
                                                    failureThreshold = 957451L;
                                                    resourcePath = "totam";
                                                }};;
                                            }};);, UpdateServiceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_UPDATE_SERVICE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req);

            if (res.updateServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
