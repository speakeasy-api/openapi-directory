# SDK

## Overview

<fullname>App Runner</fullname> <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to provision and configure Amazon Web Services resources.</p> <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations, high performance, scalability, and security.</p> <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>. For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p> <p> To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/apprunner/>
### Available Operations

* [associateCustomDomain](#associatecustomdomain) - <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
* [createAutoScalingConfiguration](#createautoscalingconfiguration) - <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
* [createConnection](#createconnection) - <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
* [createObservabilityConfiguration](#createobservabilityconfiguration) - <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>
* [createService](#createservice) - <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
* [createVpcConnector](#createvpcconnector) - Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).
* [createVpcIngressConnection](#createvpcingressconnection) - Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.
* [deleteAutoScalingConfiguration](#deleteautoscalingconfiguration) - Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [deleteConnection](#deleteconnection) - Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
* [deleteObservabilityConfiguration](#deleteobservabilityconfiguration) - Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [deleteService](#deleteservice) - <p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>
* [deleteVpcConnector](#deletevpcconnector) - Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.
* [deleteVpcIngressConnection](#deletevpcingressconnection) - <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>
* [describeAutoScalingConfiguration](#describeautoscalingconfiguration) - Return a full description of an App Runner automatic scaling configuration resource.
* [describeCustomDomains](#describecustomdomains) - Return a description of custom domain names that are associated with an App Runner service.
* [describeObservabilityConfiguration](#describeobservabilityconfiguration) - Return a full description of an App Runner observability configuration resource.
* [describeService](#describeservice) - Return a full description of an App Runner service.
* [describeVpcConnector](#describevpcconnector) - Return a description of an App Runner VPC connector resource.
* [describeVpcIngressConnection](#describevpcingressconnection) - Return a full description of an App Runner VPC Ingress Connection resource.
* [disassociateCustomDomain](#disassociatecustomdomain) - <p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
* [listAutoScalingConfigurations](#listautoscalingconfigurations) - <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
* [listConnections](#listconnections) - Returns a list of App Runner connections that are associated with your Amazon Web Services account.
* [listObservabilityConfigurations](#listobservabilityconfigurations) - <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
* [listOperations](#listoperations) - <p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
* [listServices](#listservices) - Returns a list of running App Runner services in your Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.
* [listVpcConnectors](#listvpcconnectors) - Returns a list of App Runner VPC connectors in your Amazon Web Services account.
* [listVpcIngressConnections](#listvpcingressconnections) - Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.
* [pauseService](#pauseservice) - <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [resumeService](#resumeservice) - <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [startDeployment](#startdeployment) - <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [tagResource](#tagresource) - Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
* [untagResource](#untagresource) - Remove tags from an App Runner resource.
* [updateService](#updateservice) - <p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [updateVpcIngressConnection](#updatevpcingressconnection) - <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>

## associateCustomDomain

<p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateCustomDomainRequest;
import org.openapis.openapi.models.operations.AssociateCustomDomainResponse;
import org.openapis.openapi.models.operations.AssociateCustomDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateCustomDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateCustomDomainRequest req = new AssociateCustomDomainRequest(                new AssociateCustomDomainRequest("suscipit", "iure") {{
                                enableWWWSubdomain = false;
                            }};, AssociateCustomDomainXAmzTargetEnum.APP_RUNNER_ASSOCIATE_CUSTOM_DOMAIN) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateCustomDomainResponse res = sdk.sdk.associateCustomDomain(req);

            if (res.associateCustomDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAutoScalingConfiguration

<p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAutoScalingConfigurationRequest;
import org.openapis.openapi.models.operations.CreateAutoScalingConfigurationResponse;
import org.openapis.openapi.models.operations.CreateAutoScalingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAutoScalingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAutoScalingConfigurationRequest req = new CreateAutoScalingConfigurationRequest(                new CreateAutoScalingConfigurationRequest("placeat") {{
                                maxConcurrency = 528895L;
                                maxSize = 479977L;
                                minSize = 568045L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "recusandae";
                                        value = "temporibus";
                                    }}),
                                    add(new Tag() {{
                                        key = "ab";
                                        value = "quis";
                                    }}),
                                }};
                            }};, CreateAutoScalingConfigurationXAmzTargetEnum.APP_RUNNER_CREATE_AUTO_SCALING_CONFIGURATION) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            CreateAutoScalingConfigurationResponse res = sdk.sdk.createAutoScalingConfiguration(req);

            if (res.createAutoScalingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnection

<p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionRequest;
import org.openapis.openapi.models.operations.CreateConnectionResponse;
import org.openapis.openapi.models.operations.CreateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConnectionRequest;
import org.openapis.openapi.models.shared.ProviderTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectionRequest req = new CreateConnectionRequest(                new CreateConnectionRequest("at", ProviderTypeEnum.GITHUB) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "maiores";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag() {{
                                        key = "quod";
                                        value = "quod";
                                    }}),
                                    add(new Tag() {{
                                        key = "esse";
                                        value = "totam";
                                    }}),
                                    add(new Tag() {{
                                        key = "porro";
                                        value = "dolorum";
                                    }}),
                                }};
                            }};, CreateConnectionXAmzTargetEnum.APP_RUNNER_CREATE_CONNECTION) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            CreateConnectionResponse res = sdk.sdk.createConnection(req);

            if (res.createConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createObservabilityConfiguration

<p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateObservabilityConfigurationRequest;
import org.openapis.openapi.models.operations.CreateObservabilityConfigurationResponse;
import org.openapis.openapi.models.operations.CreateObservabilityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateObservabilityConfigurationRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TraceConfiguration;
import org.openapis.openapi.models.shared.TracingVendorEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateObservabilityConfigurationRequest req = new CreateObservabilityConfigurationRequest(                new CreateObservabilityConfigurationRequest("totam") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "commodi";
                                        value = "molestiae";
                                    }}),
                                }};
                                traceConfiguration = new TraceConfiguration(TracingVendorEnum.AWSXRAY);;
                            }};, CreateObservabilityConfigurationXAmzTargetEnum.APP_RUNNER_CREATE_OBSERVABILITY_CONFIGURATION) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateObservabilityConfigurationResponse res = sdk.sdk.createObservabilityConfiguration(req);

            if (res.createObservabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

<p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationConfiguration;
import org.openapis.openapi.models.shared.CodeConfiguration;
import org.openapis.openapi.models.shared.CodeConfigurationValues;
import org.openapis.openapi.models.shared.CodeRepository;
import org.openapis.openapi.models.shared.ConfigurationSourceEnum;
import org.openapis.openapi.models.shared.CreateServiceRequest;
import org.openapis.openapi.models.shared.EgressConfiguration;
import org.openapis.openapi.models.shared.EgressTypeEnum;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.HealthCheckConfiguration;
import org.openapis.openapi.models.shared.HealthCheckProtocolEnum;
import org.openapis.openapi.models.shared.ImageConfiguration;
import org.openapis.openapi.models.shared.ImageRepository;
import org.openapis.openapi.models.shared.ImageRepositoryTypeEnum;
import org.openapis.openapi.models.shared.IngressConfiguration;
import org.openapis.openapi.models.shared.InstanceConfiguration;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.RuntimeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceObservabilityConfiguration;
import org.openapis.openapi.models.shared.SourceCodeVersion;
import org.openapis.openapi.models.shared.SourceCodeVersionTypeEnum;
import org.openapis.openapi.models.shared.SourceConfiguration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceRequest req = new CreateServiceRequest(                new CreateServiceRequest("perferendis",                 new SourceConfiguration() {{
                                                authenticationConfiguration = new AuthenticationConfiguration() {{
                                                    accessRoleArn = "ad";
                                                    connectionArn = "natus";
                                                }};;
                                                autoDeploymentsEnabled = false;
                                                codeRepository = new CodeRepository("sed",                 new SourceCodeVersion(SourceCodeVersionTypeEnum.BRANCH, "iste");) {{
                                                    codeConfiguration = new CodeConfiguration(ConfigurationSourceEnum.REPOSITORY) {{
                                                        codeConfigurationValues = new CodeConfigurationValues(RuntimeEnum.GO1) {{
                                                            buildCommand = "laboriosam";
                                                            port = "hic";
                                                            runtimeEnvironmentSecrets = new java.util.HashMap<String, String>() {{
                                                                put("fuga", "in");
                                                                put("corporis", "iste");
                                                                put("iure", "saepe");
                                                                put("quidem", "architecto");
                                                            }};
                                                            runtimeEnvironmentVariables = new java.util.HashMap<String, String>() {{
                                                                put("reiciendis", "est");
                                                            }};
                                                            startCommand = "mollitia";
                                                        }};;
                                                    }};;
                                                }};;
                                                imageRepository = new ImageRepository("laborum", ImageRepositoryTypeEnum.ECR) {{
                                                    imageConfiguration = new ImageConfiguration() {{
                                                        port = "dolorem";
                                                        runtimeEnvironmentSecrets = new java.util.HashMap<String, String>() {{
                                                            put("explicabo", "nobis");
                                                            put("enim", "omnis");
                                                        }};
                                                        runtimeEnvironmentVariables = new java.util.HashMap<String, String>() {{
                                                            put("minima", "excepturi");
                                                            put("accusantium", "iure");
                                                        }};
                                                        startCommand = "culpa";
                                                    }};;
                                                }};;
                                            }};) {{
                                autoScalingConfigurationArn = "doloribus";
                                encryptionConfiguration = new EncryptionConfiguration("sapiente");;
                                healthCheckConfiguration = new HealthCheckConfiguration() {{
                                    healthyThreshold = 102044L;
                                    interval = 652790L;
                                    path = "dolorem";
                                    protocol = HealthCheckProtocolEnum.HTTP;
                                    timeout = 161309L;
                                    unhealthyThreshold = 995300L;
                                }};;
                                instanceConfiguration = new InstanceConfiguration() {{
                                    cpu = "mollitia";
                                    instanceRoleArn = "occaecati";
                                    memory = "numquam";
                                }};;
                                networkConfiguration = new NetworkConfiguration() {{
                                    egressConfiguration = new EgressConfiguration() {{
                                        egressType = EgressTypeEnum.DEFAULT_;
                                        vpcConnectorArn = "quam";
                                    }};;
                                    ingressConfiguration = new IngressConfiguration() {{
                                        isPubliclyAccessible = false;
                                    }};;
                                }};;
                                observabilityConfiguration = new ServiceObservabilityConfiguration(false) {{
                                    observabilityConfigurationArn = "molestiae";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "error";
                                        value = "quia";
                                    }}),
                                }};
                            }};, CreateServiceXAmzTargetEnum.APP_RUNNER_CREATE_SERVICE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
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

## createVpcConnector

Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVpcConnectorRequest;
import org.openapis.openapi.models.operations.CreateVpcConnectorResponse;
import org.openapis.openapi.models.operations.CreateVpcConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVpcConnectorRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVpcConnectorRequest req = new CreateVpcConnectorRequest(                new CreateVpcConnectorRequest(                new String[]{{
                                                add("ipsam"),
                                                add("id"),
                                                add("possimus"),
                                                add("aut"),
                                            }}, "quasi") {{
                                securityGroups = new String[]{{
                                    add("temporibus"),
                                    add("laborum"),
                                    add("quasi"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "voluptatibus";
                                        value = "vero";
                                    }}),
                                    add(new Tag() {{
                                        key = "nihil";
                                        value = "praesentium";
                                    }}),
                                    add(new Tag() {{
                                        key = "voluptatibus";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag() {{
                                        key = "omnis";
                                        value = "voluptate";
                                    }}),
                                }};
                            }};, CreateVpcConnectorXAmzTargetEnum.APP_RUNNER_CREATE_VPC_CONNECTOR) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateVpcConnectorResponse res = sdk.sdk.createVpcConnector(req);

            if (res.createVpcConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVpcIngressConnection

Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVpcIngressConnectionRequest;
import org.openapis.openapi.models.operations.CreateVpcIngressConnectionResponse;
import org.openapis.openapi.models.operations.CreateVpcIngressConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVpcIngressConnectionRequest;
import org.openapis.openapi.models.shared.IngressVpcConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVpcIngressConnectionRequest req = new CreateVpcIngressConnectionRequest(                new CreateVpcIngressConnectionRequest(                new IngressVpcConfiguration() {{
                                                vpcEndpointId = "dolore";
                                                vpcId = "iusto";
                                            }};, "dicta", "harum") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "accusamus";
                                        value = "commodi";
                                    }}),
                                    add(new Tag() {{
                                        key = "repudiandae";
                                        value = "quae";
                                    }}),
                                }};
                            }};, CreateVpcIngressConnectionXAmzTargetEnum.APP_RUNNER_CREATE_VPC_INGRESS_CONNECTION) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            CreateVpcIngressConnectionResponse res = sdk.sdk.createVpcIngressConnection(req);

            if (res.createVpcIngressConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAutoScalingConfiguration

Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAutoScalingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteAutoScalingConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteAutoScalingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAutoScalingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAutoScalingConfigurationRequest req = new DeleteAutoScalingConfigurationRequest(                new DeleteAutoScalingConfigurationRequest("voluptates");, DeleteAutoScalingConfigurationXAmzTargetEnum.APP_RUNNER_DELETE_AUTO_SCALING_CONFIGURATION) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "sint";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteAutoScalingConfigurationResponse res = sdk.sdk.deleteAutoScalingConfiguration(req);

            if (res.deleteAutoScalingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnection

Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionRequest;
import org.openapis.openapi.models.operations.DeleteConnectionResponse;
import org.openapis.openapi.models.operations.DeleteConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectionRequest req = new DeleteConnectionRequest(                new DeleteConnectionRequest("est");, DeleteConnectionXAmzTargetEnum.APP_RUNNER_DELETE_CONNECTION) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            DeleteConnectionResponse res = sdk.sdk.deleteConnection(req);

            if (res.deleteConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteObservabilityConfiguration

Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteObservabilityConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteObservabilityConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteObservabilityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteObservabilityConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteObservabilityConfigurationRequest req = new DeleteObservabilityConfigurationRequest(                new DeleteObservabilityConfigurationRequest("aliquid");, DeleteObservabilityConfigurationXAmzTargetEnum.APP_RUNNER_DELETE_OBSERVABILITY_CONFIGURATION) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            DeleteObservabilityConfigurationResponse res = sdk.sdk.deleteObservabilityConfiguration(req);

            if (res.deleteObservabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

<p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>

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
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest(                new DeleteServiceRequest("dolorum");, DeleteServiceXAmzTargetEnum.APP_RUNNER_DELETE_SERVICE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
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

## deleteVpcConnector

Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVpcConnectorRequest;
import org.openapis.openapi.models.operations.DeleteVpcConnectorResponse;
import org.openapis.openapi.models.operations.DeleteVpcConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVpcConnectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVpcConnectorRequest req = new DeleteVpcConnectorRequest(                new DeleteVpcConnectorRequest("eligendi");, DeleteVpcConnectorXAmzTargetEnum.APP_RUNNER_DELETE_VPC_CONNECTOR) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
            }};            

            DeleteVpcConnectorResponse res = sdk.sdk.deleteVpcConnector(req);

            if (res.deleteVpcConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVpcIngressConnection

<p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVpcIngressConnectionRequest;
import org.openapis.openapi.models.operations.DeleteVpcIngressConnectionResponse;
import org.openapis.openapi.models.operations.DeleteVpcIngressConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVpcIngressConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVpcIngressConnectionRequest req = new DeleteVpcIngressConnectionRequest(                new DeleteVpcIngressConnectionRequest("a");, DeleteVpcIngressConnectionXAmzTargetEnum.APP_RUNNER_DELETE_VPC_INGRESS_CONNECTION) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "in";
                xAmzCredential = "in";
                xAmzDate = "illum";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteVpcIngressConnectionResponse res = sdk.sdk.deleteVpcIngressConnection(req);

            if (res.deleteVpcIngressConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAutoScalingConfiguration

Return a full description of an App Runner automatic scaling configuration resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAutoScalingConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeAutoScalingConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeAutoScalingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAutoScalingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAutoScalingConfigurationRequest req = new DescribeAutoScalingConfigurationRequest(                new DescribeAutoScalingConfigurationRequest("cumque");, DescribeAutoScalingConfigurationXAmzTargetEnum.APP_RUNNER_DESCRIBE_AUTO_SCALING_CONFIGURATION) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            DescribeAutoScalingConfigurationResponse res = sdk.sdk.describeAutoScalingConfiguration(req);

            if (res.describeAutoScalingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCustomDomains

Return a description of custom domain names that are associated with an App Runner service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCustomDomainsRequest;
import org.openapis.openapi.models.operations.DescribeCustomDomainsResponse;
import org.openapis.openapi.models.operations.DescribeCustomDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCustomDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCustomDomainsRequest req = new DescribeCustomDomainsRequest(                new DescribeCustomDomainsRequest("accusamus") {{
                                maxResults = 965417L;
                                nextToken = "quidem";
                            }};, DescribeCustomDomainsXAmzTargetEnum.APP_RUNNER_DESCRIBE_CUSTOM_DOMAINS) {{
                maxResults = "provident";
                nextToken = "nam";
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            DescribeCustomDomainsResponse res = sdk.sdk.describeCustomDomains(req);

            if (res.describeCustomDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeObservabilityConfiguration

Return a full description of an App Runner observability configuration resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeObservabilityConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeObservabilityConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeObservabilityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeObservabilityConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeObservabilityConfigurationRequest req = new DescribeObservabilityConfigurationRequest(                new DescribeObservabilityConfigurationRequest("natus");, DescribeObservabilityConfigurationXAmzTargetEnum.APP_RUNNER_DESCRIBE_OBSERVABILITY_CONFIGURATION) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            DescribeObservabilityConfigurationResponse res = sdk.sdk.describeObservabilityConfiguration(req);

            if (res.describeObservabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeService

Return a full description of an App Runner service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServiceRequest;
import org.openapis.openapi.models.operations.DescribeServiceResponse;
import org.openapis.openapi.models.operations.DescribeServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServiceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServiceRequest req = new DescribeServiceRequest(                new DescribeServiceRequest("labore");, DescribeServiceXAmzTargetEnum.APP_RUNNER_DESCRIBE_SERVICE) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeServiceResponse res = sdk.sdk.describeService(req);

            if (res.describeServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVpcConnector

Return a description of an App Runner VPC connector resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVpcConnectorRequest;
import org.openapis.openapi.models.operations.DescribeVpcConnectorResponse;
import org.openapis.openapi.models.operations.DescribeVpcConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeVpcConnectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVpcConnectorRequest req = new DescribeVpcConnectorRequest(                new DescribeVpcConnectorRequest("et");, DescribeVpcConnectorXAmzTargetEnum.APP_RUNNER_DESCRIBE_VPC_CONNECTOR) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            DescribeVpcConnectorResponse res = sdk.sdk.describeVpcConnector(req);

            if (res.describeVpcConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVpcIngressConnection

Return a full description of an App Runner VPC Ingress Connection resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVpcIngressConnectionRequest;
import org.openapis.openapi.models.operations.DescribeVpcIngressConnectionResponse;
import org.openapis.openapi.models.operations.DescribeVpcIngressConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeVpcIngressConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVpcIngressConnectionRequest req = new DescribeVpcIngressConnectionRequest(                new DescribeVpcIngressConnectionRequest("mollitia");, DescribeVpcIngressConnectionXAmzTargetEnum.APP_RUNNER_DESCRIBE_VPC_INGRESS_CONNECTION) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeVpcIngressConnectionResponse res = sdk.sdk.describeVpcIngressConnection(req);

            if (res.describeVpcIngressConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateCustomDomain

<p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateCustomDomainRequest;
import org.openapis.openapi.models.operations.DisassociateCustomDomainResponse;
import org.openapis.openapi.models.operations.DisassociateCustomDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateCustomDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateCustomDomainRequest req = new DisassociateCustomDomainRequest(                new DisassociateCustomDomainRequest("doloribus", "debitis");, DisassociateCustomDomainXAmzTargetEnum.APP_RUNNER_DISASSOCIATE_CUSTOM_DOMAIN) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            DisassociateCustomDomainResponse res = sdk.sdk.disassociateCustomDomain(req);

            if (res.disassociateCustomDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAutoScalingConfigurations

<p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAutoScalingConfigurationsRequest;
import org.openapis.openapi.models.operations.ListAutoScalingConfigurationsResponse;
import org.openapis.openapi.models.operations.ListAutoScalingConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAutoScalingConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAutoScalingConfigurationsRequest req = new ListAutoScalingConfigurationsRequest(                new ListAutoScalingConfigurationsRequest() {{
                                autoScalingConfigurationName = "ullam";
                                latestOnly = false;
                                maxResults = 714242L;
                                nextToken = "nihil";
                            }};, ListAutoScalingConfigurationsXAmzTargetEnum.APP_RUNNER_LIST_AUTO_SCALING_CONFIGURATIONS) {{
                maxResults = "repellat";
                nextToken = "quibusdam";
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
            }};            

            ListAutoScalingConfigurationsResponse res = sdk.sdk.listAutoScalingConfigurations(req);

            if (res.listAutoScalingConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnections

Returns a list of App Runner connections that are associated with your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectionsRequest;
import org.openapis.openapi.models.operations.ListConnectionsResponse;
import org.openapis.openapi.models.operations.ListConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListConnectionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectionsRequest req = new ListConnectionsRequest(                new ListConnectionsRequest() {{
                                connectionName = "sunt";
                                maxResults = 779051L;
                                nextToken = "illum";
                            }};, ListConnectionsXAmzTargetEnum.APP_RUNNER_LIST_CONNECTIONS) {{
                maxResults = "pariatur";
                nextToken = "maxime";
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            ListConnectionsResponse res = sdk.sdk.listConnections(req);

            if (res.listConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listObservabilityConfigurations

<p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListObservabilityConfigurationsRequest;
import org.openapis.openapi.models.operations.ListObservabilityConfigurationsResponse;
import org.openapis.openapi.models.operations.ListObservabilityConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListObservabilityConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObservabilityConfigurationsRequest req = new ListObservabilityConfigurationsRequest(                new ListObservabilityConfigurationsRequest() {{
                                latestOnly = false;
                                maxResults = 373291L;
                                nextToken = "voluptate";
                                observabilityConfigurationName = "autem";
                            }};, ListObservabilityConfigurationsXAmzTargetEnum.APP_RUNNER_LIST_OBSERVABILITY_CONFIGURATIONS) {{
                maxResults = "nam";
                nextToken = "eaque";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            ListObservabilityConfigurationsResponse res = sdk.sdk.listObservabilityConfigurations(req);

            if (res.listObservabilityConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOperations

<p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOperationsRequest;
import org.openapis.openapi.models.operations.ListOperationsResponse;
import org.openapis.openapi.models.operations.ListOperationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOperationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOperationsRequest req = new ListOperationsRequest(                new ListOperationsRequest("corporis") {{
                                maxResults = 944124L;
                                nextToken = "libero";
                            }};, ListOperationsXAmzTargetEnum.APP_RUNNER_LIST_OPERATIONS) {{
                maxResults = "nobis";
                nextToken = "dolores";
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
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

Returns a list of running App Runner services in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesRequest;
import org.openapis.openapi.models.operations.ListServicesResponse;
import org.openapis.openapi.models.operations.ListServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicesRequest req = new ListServicesRequest(                new ListServicesRequest() {{
                                maxResults = 170986L;
                                nextToken = "minus";
                            }};, ListServicesXAmzTargetEnum.APP_RUNNER_LIST_SERVICES) {{
                maxResults = "quam";
                nextToken = "dolor";
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
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

List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.

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
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("porro");, ListTagsForResourceXAmzTargetEnum.APP_RUNNER_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
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

## listVpcConnectors

Returns a list of App Runner VPC connectors in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVpcConnectorsRequest;
import org.openapis.openapi.models.operations.ListVpcConnectorsResponse;
import org.openapis.openapi.models.operations.ListVpcConnectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVpcConnectorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVpcConnectorsRequest req = new ListVpcConnectorsRequest(                new ListVpcConnectorsRequest() {{
                                maxResults = 934214L;
                                nextToken = "modi";
                            }};, ListVpcConnectorsXAmzTargetEnum.APP_RUNNER_LIST_VPC_CONNECTORS) {{
                maxResults = "iste";
                nextToken = "dolorum";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
            }};            

            ListVpcConnectorsResponse res = sdk.sdk.listVpcConnectors(req);

            if (res.listVpcConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVpcIngressConnections

Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVpcIngressConnectionsRequest;
import org.openapis.openapi.models.operations.ListVpcIngressConnectionsResponse;
import org.openapis.openapi.models.operations.ListVpcIngressConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVpcIngressConnectionsFilter;
import org.openapis.openapi.models.shared.ListVpcIngressConnectionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVpcIngressConnectionsRequest req = new ListVpcIngressConnectionsRequest(                new ListVpcIngressConnectionsRequest() {{
                                filter = new ListVpcIngressConnectionsFilter() {{
                                    serviceArn = "aliquid";
                                    vpcEndpointId = "dolorem";
                                }};;
                                maxResults = 209843L;
                                nextToken = "dolor";
                            }};, ListVpcIngressConnectionsXAmzTargetEnum.APP_RUNNER_LIST_VPC_INGRESS_CONNECTIONS) {{
                maxResults = "qui";
                nextToken = "ipsum";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            ListVpcIngressConnectionsResponse res = sdk.sdk.listVpcIngressConnections(req);

            if (res.listVpcIngressConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pauseService

<p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PauseServiceRequest;
import org.openapis.openapi.models.operations.PauseServiceResponse;
import org.openapis.openapi.models.operations.PauseServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.PauseServiceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PauseServiceRequest req = new PauseServiceRequest(                new PauseServiceRequest("numquam");, PauseServiceXAmzTargetEnum.APP_RUNNER_PAUSE_SERVICE) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
            }};            

            PauseServiceResponse res = sdk.sdk.pauseService(req);

            if (res.pauseServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resumeService

<p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeServiceRequest;
import org.openapis.openapi.models.operations.ResumeServiceResponse;
import org.openapis.openapi.models.operations.ResumeServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResumeServiceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResumeServiceRequest req = new ResumeServiceRequest(                new ResumeServiceRequest("voluptatibus");, ResumeServiceXAmzTargetEnum.APP_RUNNER_RESUME_SERVICE) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "natus";
                xAmzCredential = "eos";
                xAmzDate = "atque";
                xAmzSecurityToken = "sit";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ab";
            }};            

            ResumeServiceResponse res = sdk.sdk.resumeService(req);

            if (res.resumeServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDeployment

<p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDeploymentRequest;
import org.openapis.openapi.models.operations.StartDeploymentResponse;
import org.openapis.openapi.models.operations.StartDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDeploymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDeploymentRequest req = new StartDeploymentRequest(                new StartDeploymentRequest("dolorum");, StartDeploymentXAmzTargetEnum.APP_RUNNER_START_DEPLOYMENT) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            StartDeploymentResponse res = sdk.sdk.startDeployment(req);

            if (res.startDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.

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
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("nihil",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "voluptate";
                                                    value = "id";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.APP_RUNNER_TAG_RESOURCE) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
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

Remove tags from an App Runner resource.

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
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("saepe",                 new String[]{{
                                                add("deserunt"),
                                                add("provident"),
                                            }});, UntagResourceXAmzTargetEnum.APP_RUNNER_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "totam";
                xAmzDate = "similique";
                xAmzSecurityToken = "alias";
                xAmzSignature = "at";
                xAmzSignedHeaders = "quaerat";
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

## updateService

<p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationConfiguration;
import org.openapis.openapi.models.shared.CodeConfiguration;
import org.openapis.openapi.models.shared.CodeConfigurationValues;
import org.openapis.openapi.models.shared.CodeRepository;
import org.openapis.openapi.models.shared.ConfigurationSourceEnum;
import org.openapis.openapi.models.shared.EgressConfiguration;
import org.openapis.openapi.models.shared.EgressTypeEnum;
import org.openapis.openapi.models.shared.HealthCheckConfiguration;
import org.openapis.openapi.models.shared.HealthCheckProtocolEnum;
import org.openapis.openapi.models.shared.ImageConfiguration;
import org.openapis.openapi.models.shared.ImageRepository;
import org.openapis.openapi.models.shared.ImageRepositoryTypeEnum;
import org.openapis.openapi.models.shared.IngressConfiguration;
import org.openapis.openapi.models.shared.InstanceConfiguration;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.RuntimeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceObservabilityConfiguration;
import org.openapis.openapi.models.shared.SourceCodeVersion;
import org.openapis.openapi.models.shared.SourceCodeVersionTypeEnum;
import org.openapis.openapi.models.shared.SourceConfiguration;
import org.openapis.openapi.models.shared.UpdateServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest(                new UpdateServiceRequest("vel") {{
                                autoScalingConfigurationArn = "quod";
                                healthCheckConfiguration = new HealthCheckConfiguration() {{
                                    healthyThreshold = 885338L;
                                    interval = 185636L;
                                    path = "dolorum";
                                    protocol = HealthCheckProtocolEnum.HTTP;
                                    timeout = 456130L;
                                    unhealthyThreshold = 687488L;
                                }};;
                                instanceConfiguration = new InstanceConfiguration() {{
                                    cpu = "iusto";
                                    instanceRoleArn = "ipsum";
                                    memory = "quisquam";
                                }};;
                                networkConfiguration = new NetworkConfiguration() {{
                                    egressConfiguration = new EgressConfiguration() {{
                                        egressType = EgressTypeEnum.VPC;
                                        vpcConnectorArn = "amet";
                                    }};;
                                    ingressConfiguration = new IngressConfiguration() {{
                                        isPubliclyAccessible = false;
                                    }};;
                                }};;
                                observabilityConfiguration = new ServiceObservabilityConfiguration(false) {{
                                    observabilityConfigurationArn = "tempore";
                                }};;
                                sourceConfiguration = new SourceConfiguration() {{
                                    authenticationConfiguration = new AuthenticationConfiguration() {{
                                        accessRoleArn = "accusamus";
                                        connectionArn = "numquam";
                                    }};;
                                    autoDeploymentsEnabled = false;
                                    codeRepository = new CodeRepository("enim",                 new SourceCodeVersion(SourceCodeVersionTypeEnum.BRANCH, "dolorem");) {{
                                        codeConfiguration = new CodeConfiguration(ConfigurationSourceEnum.API) {{
                                            codeConfigurationValues = new CodeConfigurationValues(RuntimeEnum.NODEJS16) {{
                                                buildCommand = "nihil";
                                                port = "sit";
                                                runtimeEnvironmentSecrets = new java.util.HashMap<String, String>() {{
                                                    put("neque", "sed");
                                                    put("vel", "libero");
                                                    put("voluptas", "deserunt");
                                                }};
                                                runtimeEnvironmentVariables = new java.util.HashMap<String, String>() {{
                                                    put("ipsum", "incidunt");
                                                    put("qui", "cupiditate");
                                                }};
                                                startCommand = "maxime";
                                            }};;
                                        }};;
                                    }};;
                                    imageRepository = new ImageRepository("pariatur", ImageRepositoryTypeEnum.ECR_PUBLIC) {{
                                        imageConfiguration = new ImageConfiguration() {{
                                            port = "dicta";
                                            runtimeEnvironmentSecrets = new java.util.HashMap<String, String>() {{
                                                put("totam", "incidunt");
                                                put("aspernatur", "dolores");
                                                put("distinctio", "facilis");
                                            }};
                                            runtimeEnvironmentVariables = new java.util.HashMap<String, String>() {{
                                                put("quam", "molestias");
                                                put("temporibus", "qui");
                                            }};
                                            startCommand = "neque";
                                        }};;
                                    }};;
                                }};;
                            }};, UpdateServiceXAmzTargetEnum.APP_RUNNER_UPDATE_SERVICE) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
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

## updateVpcIngressConnection

<p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVpcIngressConnectionRequest;
import org.openapis.openapi.models.operations.UpdateVpcIngressConnectionResponse;
import org.openapis.openapi.models.operations.UpdateVpcIngressConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.IngressVpcConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateVpcIngressConnectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVpcIngressConnectionRequest req = new UpdateVpcIngressConnectionRequest(                new UpdateVpcIngressConnectionRequest(                new IngressVpcConfiguration() {{
                                                vpcEndpointId = "cumque";
                                                vpcId = "soluta";
                                            }};, "nobis");, UpdateVpcIngressConnectionXAmzTargetEnum.APP_RUNNER_UPDATE_VPC_INGRESS_CONNECTION) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
            }};            

            UpdateVpcIngressConnectionResponse res = sdk.sdk.updateVpcIngressConnection(req);

            if (res.updateVpcIngressConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
