# SDK

## Overview

<fullname>App Runner</fullname> <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to provision and configure Amazon Web Services resources.</p> <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations, high performance, scalability, and security.</p> <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>. For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p> <p> To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/apprunner/>
### Available Operations

* [AssociateCustomDomain](#associatecustomdomain) - <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
* [CreateAutoScalingConfiguration](#createautoscalingconfiguration) - <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
* [CreateConnection](#createconnection) - <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
* [CreateObservabilityConfiguration](#createobservabilityconfiguration) - <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>
* [CreateService](#createservice) - <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
* [CreateVpcConnector](#createvpcconnector) - Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).
* [CreateVpcIngressConnection](#createvpcingressconnection) - Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.
* [DeleteAutoScalingConfiguration](#deleteautoscalingconfiguration) - Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [DeleteConnection](#deleteconnection) - Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
* [DeleteObservabilityConfiguration](#deleteobservabilityconfiguration) - Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [DeleteService](#deleteservice) - <p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>
* [DeleteVpcConnector](#deletevpcconnector) - Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.
* [DeleteVpcIngressConnection](#deletevpcingressconnection) - <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>
* [DescribeAutoScalingConfiguration](#describeautoscalingconfiguration) - Return a full description of an App Runner automatic scaling configuration resource.
* [DescribeCustomDomains](#describecustomdomains) - Return a description of custom domain names that are associated with an App Runner service.
* [DescribeObservabilityConfiguration](#describeobservabilityconfiguration) - Return a full description of an App Runner observability configuration resource.
* [DescribeService](#describeservice) - Return a full description of an App Runner service.
* [DescribeVpcConnector](#describevpcconnector) - Return a description of an App Runner VPC connector resource.
* [DescribeVpcIngressConnection](#describevpcingressconnection) - Return a full description of an App Runner VPC Ingress Connection resource.
* [DisassociateCustomDomain](#disassociatecustomdomain) - <p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
* [ListAutoScalingConfigurations](#listautoscalingconfigurations) - <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
* [ListConnections](#listconnections) - Returns a list of App Runner connections that are associated with your Amazon Web Services account.
* [ListObservabilityConfigurations](#listobservabilityconfigurations) - <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
* [ListOperations](#listoperations) - <p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
* [ListServices](#listservices) - Returns a list of running App Runner services in your Amazon Web Services account.
* [ListTagsForResource](#listtagsforresource) - List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.
* [ListVpcConnectors](#listvpcconnectors) - Returns a list of App Runner VPC connectors in your Amazon Web Services account.
* [ListVpcIngressConnections](#listvpcingressconnections) - Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.
* [PauseService](#pauseservice) - <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [ResumeService](#resumeservice) - <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [StartDeployment](#startdeployment) - <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [TagResource](#tagresource) - Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
* [UntagResource](#untagresource) - Remove tags from an App Runner resource.
* [UpdateService](#updateservice) - <p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [UpdateVpcIngressConnection](#updatevpcingressconnection) - <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>

## AssociateCustomDomain

<p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>

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
    res, err := s.SDK.AssociateCustomDomain(ctx, operations.AssociateCustomDomainRequest{
        AssociateCustomDomainRequest: shared.AssociateCustomDomainRequest{
            DomainName: "error",
            EnableWWWSubdomain: sdk.Bool(false),
            ServiceArn: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AssociateCustomDomainXAmzTargetEnumAppRunnerAssociateCustomDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCustomDomainResponse != nil {
        // handle response
    }
}
```

## CreateAutoScalingConfiguration

<p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>

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
    res, err := s.SDK.CreateAutoScalingConfiguration(ctx, operations.CreateAutoScalingConfigurationRequest{
        CreateAutoScalingConfigurationRequest: shared.CreateAutoScalingConfigurationRequest{
            AutoScalingConfigurationName: "suscipit",
            MaxConcurrency: sdk.Int64(477665),
            MaxSize: sdk.Int64(791725),
            MinSize: sdk.Int64(812169),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("iusto"),
                    Value: sdk.String("excepturi"),
                },
                shared.Tag{
                    Key: sdk.String("nisi"),
                    Value: sdk.String("recusandae"),
                },
                shared.Tag{
                    Key: sdk.String("temporibus"),
                    Value: sdk.String("ab"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.CreateAutoScalingConfigurationXAmzTargetEnumAppRunnerCreateAutoScalingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAutoScalingConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateConnection

<p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>

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
    res, err := s.SDK.CreateConnection(ctx, operations.CreateConnectionRequest{
        CreateConnectionRequest: shared.CreateConnectionRequest{
            ConnectionName: "quo",
            ProviderType: shared.ProviderTypeEnumGithub,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("at"),
                    Value: sdk.String("at"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.CreateConnectionXAmzTargetEnumAppRunnerCreateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionResponse != nil {
        // handle response
    }
}
```

## CreateObservabilityConfiguration

<p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>

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
    res, err := s.SDK.CreateObservabilityConfiguration(ctx, operations.CreateObservabilityConfigurationRequest{
        CreateObservabilityConfigurationRequest: shared.CreateObservabilityConfigurationRequest{
            ObservabilityConfigurationName: "dolorum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("nam"),
                    Value: sdk.String("officia"),
                },
            },
            TraceConfiguration: &shared.TraceConfiguration{
                Vendor: shared.TracingVendorEnumAwsxray,
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.CreateObservabilityConfigurationXAmzTargetEnumAppRunnerCreateObservabilityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateObservabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateService

<p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>

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
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceRequest{
        CreateServiceRequest: shared.CreateServiceRequest{
            AutoScalingConfigurationArn: sdk.String("commodi"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKey: "molestiae",
            },
            HealthCheckConfiguration: &shared.HealthCheckConfiguration{
                HealthyThreshold: sdk.Int64(264555),
                Interval: sdk.Int64(186332),
                Path: sdk.String("impedit"),
                Protocol: shared.HealthCheckProtocolEnumHTTP.ToPointer(),
                Timeout: sdk.Int64(456150),
                UnhealthyThreshold: sdk.Int64(216550),
            },
            InstanceConfiguration: &shared.InstanceConfiguration{
                CPU: sdk.String("excepturi"),
                InstanceRoleArn: sdk.String("aspernatur"),
                Memory: sdk.String("perferendis"),
            },
            NetworkConfiguration: &shared.NetworkConfiguration{
                EgressConfiguration: &shared.EgressConfiguration{
                    EgressType: shared.EgressTypeEnumDefault.ToPointer(),
                    VpcConnectorArn: sdk.String("natus"),
                },
                IngressConfiguration: &shared.IngressConfiguration{
                    IsPubliclyAccessible: sdk.Bool(false),
                },
            },
            ObservabilityConfiguration: &shared.ServiceObservabilityConfiguration{
                ObservabilityConfigurationArn: sdk.String("sed"),
                ObservabilityEnabled: false,
            },
            ServiceName: "iste",
            SourceConfiguration: shared.SourceConfiguration{
                AuthenticationConfiguration: &shared.AuthenticationConfiguration{
                    AccessRoleArn: sdk.String("dolor"),
                    ConnectionArn: sdk.String("natus"),
                },
                AutoDeploymentsEnabled: sdk.Bool(false),
                CodeRepository: &shared.CodeRepository{
                    CodeConfiguration: &shared.CodeConfiguration{
                        CodeConfigurationValues: &shared.CodeConfigurationValues{
                            BuildCommand: sdk.String("laboriosam"),
                            Port: sdk.String("hic"),
                            Runtime: shared.RuntimeEnumRuby31,
                            RuntimeEnvironmentSecrets: map[string]string{
                                "in": "corporis",
                                "iste": "iure",
                                "saepe": "quidem",
                            },
                            RuntimeEnvironmentVariables: map[string]string{
                                "ipsa": "reiciendis",
                            },
                            StartCommand: sdk.String("est"),
                        },
                        ConfigurationSource: shared.ConfigurationSourceEnumAPI,
                    },
                    RepositoryURL: "laborum",
                    SourceCodeVersion: shared.SourceCodeVersion{
                        Type: shared.SourceCodeVersionTypeEnumBranch,
                        Value: "dolores",
                    },
                },
                ImageRepository: &shared.ImageRepository{
                    ImageConfiguration: &shared.ImageConfiguration{
                        Port: sdk.String("dolorem"),
                        RuntimeEnvironmentSecrets: map[string]string{
                            "explicabo": "nobis",
                            "enim": "omnis",
                        },
                        RuntimeEnvironmentVariables: map[string]string{
                            "minima": "excepturi",
                            "accusantium": "iure",
                        },
                        StartCommand: sdk.String("culpa"),
                    },
                    ImageIdentifier: "doloribus",
                    ImageRepositoryType: shared.ImageRepositoryTypeEnumEcrPublic,
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("mollitia"),
                    Value: sdk.String("dolorem"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.CreateServiceXAmzTargetEnumAppRunnerCreateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceResponse != nil {
        // handle response
    }
}
```

## CreateVpcConnector

Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).

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
    res, err := s.SDK.CreateVpcConnector(ctx, operations.CreateVpcConnectorRequest{
        CreateVpcConnectorRequest: shared.CreateVpcConnectorRequest{
            SecurityGroups: []string{
                "molestiae",
                "velit",
            },
            Subnets: []string{
                "quia",
                "quis",
                "vitae",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("animi"),
                    Value: sdk.String("enim"),
                },
                shared.Tag{
                    Key: sdk.String("odit"),
                    Value: sdk.String("quo"),
                },
                shared.Tag{
                    Key: sdk.String("sequi"),
                    Value: sdk.String("tenetur"),
                },
            },
            VpcConnectorName: "ipsam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.CreateVpcConnectorXAmzTargetEnumAppRunnerCreateVpcConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVpcConnectorResponse != nil {
        // handle response
    }
}
```

## CreateVpcIngressConnection

Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.

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
    res, err := s.SDK.CreateVpcIngressConnection(ctx, operations.CreateVpcIngressConnectionRequest{
        CreateVpcIngressConnectionRequest: shared.CreateVpcIngressConnectionRequest{
            IngressVpcConfiguration: shared.IngressVpcConfiguration{
                VpcEndpointID: sdk.String("quasi"),
                VpcID: sdk.String("reiciendis"),
            },
            ServiceArn: "voluptatibus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("nihil"),
                    Value: sdk.String("praesentium"),
                },
                shared.Tag{
                    Key: sdk.String("voluptatibus"),
                    Value: sdk.String("ipsa"),
                },
                shared.Tag{
                    Key: sdk.String("omnis"),
                    Value: sdk.String("voluptate"),
                },
                shared.Tag{
                    Key: sdk.String("cum"),
                    Value: sdk.String("perferendis"),
                },
            },
            VpcIngressConnectionName: "doloremque",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.CreateVpcIngressConnectionXAmzTargetEnumAppRunnerCreateVpcIngressConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVpcIngressConnectionResponse != nil {
        // handle response
    }
}
```

## DeleteAutoScalingConfiguration

Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

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
    res, err := s.SDK.DeleteAutoScalingConfiguration(ctx, operations.DeleteAutoScalingConfigurationRequest{
        DeleteAutoScalingConfigurationRequest: shared.DeleteAutoScalingConfigurationRequest{
            AutoScalingConfigurationArn: "dicta",
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DeleteAutoScalingConfigurationXAmzTargetEnumAppRunnerDeleteAutoScalingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAutoScalingConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteConnection

Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.

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
    res, err := s.SDK.DeleteConnection(ctx, operations.DeleteConnectionRequest{
        DeleteConnectionRequest: shared.DeleteConnectionRequest{
            ConnectionArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.DeleteConnectionXAmzTargetEnumAppRunnerDeleteConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectionResponse != nil {
        // handle response
    }
}
```

## DeleteObservabilityConfiguration

Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

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
    res, err := s.SDK.DeleteObservabilityConfiguration(ctx, operations.DeleteObservabilityConfigurationRequest{
        DeleteObservabilityConfigurationRequest: shared.DeleteObservabilityConfigurationRequest{
            ObservabilityConfigurationArn: "quasi",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.DeleteObservabilityConfigurationXAmzTargetEnumAppRunnerDeleteObservabilityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteObservabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteService

<p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>

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
    res, err := s.SDK.DeleteService(ctx, operations.DeleteServiceRequest{
        DeleteServiceRequest: shared.DeleteServiceRequest{
            ServiceArn: "est",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DeleteServiceXAmzTargetEnumAppRunnerDeleteService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceResponse != nil {
        // handle response
    }
}
```

## DeleteVpcConnector

Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.

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
    res, err := s.SDK.DeleteVpcConnector(ctx, operations.DeleteVpcConnectorRequest{
        DeleteVpcConnectorRequest: shared.DeleteVpcConnectorRequest{
            VpcConnectorArn: "qui",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.DeleteVpcConnectorXAmzTargetEnumAppRunnerDeleteVpcConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVpcConnectorResponse != nil {
        // handle response
    }
}
```

## DeleteVpcIngressConnection

<p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>

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
    res, err := s.SDK.DeleteVpcIngressConnection(ctx, operations.DeleteVpcIngressConnectionRequest{
        DeleteVpcIngressConnectionRequest: shared.DeleteVpcIngressConnectionRequest{
            VpcIngressConnectionArn: "alias",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.DeleteVpcIngressConnectionXAmzTargetEnumAppRunnerDeleteVpcIngressConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVpcIngressConnectionResponse != nil {
        // handle response
    }
}
```

## DescribeAutoScalingConfiguration

Return a full description of an App Runner automatic scaling configuration resource.

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
    res, err := s.SDK.DescribeAutoScalingConfiguration(ctx, operations.DescribeAutoScalingConfigurationRequest{
        DescribeAutoScalingConfigurationRequest: shared.DescribeAutoScalingConfigurationRequest{
            AutoScalingConfigurationArn: "delectus",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DescribeAutoScalingConfigurationXAmzTargetEnumAppRunnerDescribeAutoScalingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAutoScalingConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeCustomDomains

Return a description of custom domain names that are associated with an App Runner service.

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
    res, err := s.SDK.DescribeCustomDomains(ctx, operations.DescribeCustomDomainsRequest{
        DescribeCustomDomainsRequest: shared.DescribeCustomDomainsRequest{
            MaxResults: sdk.Int64(572252),
            NextToken: sdk.String("officia"),
            ServiceArn: "dolor",
        },
        MaxResults: sdk.String("debitis"),
        NextToken: sdk.String("a"),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeCustomDomainsXAmzTargetEnumAppRunnerDescribeCustomDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomDomainsResponse != nil {
        // handle response
    }
}
```

## DescribeObservabilityConfiguration

Return a full description of an App Runner observability configuration resource.

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
    res, err := s.SDK.DescribeObservabilityConfiguration(ctx, operations.DescribeObservabilityConfigurationRequest{
        DescribeObservabilityConfigurationRequest: shared.DescribeObservabilityConfigurationRequest{
            ObservabilityConfigurationArn: "magnam",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.DescribeObservabilityConfigurationXAmzTargetEnumAppRunnerDescribeObservabilityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeObservabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeService

Return a full description of an App Runner service.

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
    res, err := s.SDK.DescribeService(ctx, operations.DescribeServiceRequest{
        DescribeServiceRequest: shared.DescribeServiceRequest{
            ServiceArn: "occaecati",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DescribeServiceXAmzTargetEnumAppRunnerDescribeService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServiceResponse != nil {
        // handle response
    }
}
```

## DescribeVpcConnector

Return a description of an App Runner VPC connector resource.

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
    res, err := s.SDK.DescribeVpcConnector(ctx, operations.DescribeVpcConnectorRequest{
        DescribeVpcConnectorRequest: shared.DescribeVpcConnectorRequest{
            VpcConnectorArn: "blanditiis",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DescribeVpcConnectorXAmzTargetEnumAppRunnerDescribeVpcConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVpcConnectorResponse != nil {
        // handle response
    }
}
```

## DescribeVpcIngressConnection

Return a full description of an App Runner VPC Ingress Connection resource.

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
    res, err := s.SDK.DescribeVpcIngressConnection(ctx, operations.DescribeVpcIngressConnectionRequest{
        DescribeVpcIngressConnectionRequest: shared.DescribeVpcIngressConnectionRequest{
            VpcIngressConnectionArn: "omnis",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.DescribeVpcIngressConnectionXAmzTargetEnumAppRunnerDescribeVpcIngressConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVpcIngressConnectionResponse != nil {
        // handle response
    }
}
```

## DisassociateCustomDomain

<p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>

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
    res, err := s.SDK.DisassociateCustomDomain(ctx, operations.DisassociateCustomDomainRequest{
        DisassociateCustomDomainRequest: shared.DisassociateCustomDomainRequest{
            DomainName: "labore",
            ServiceArn: "suscipit",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.DisassociateCustomDomainXAmzTargetEnumAppRunnerDisassociateCustomDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateCustomDomainResponse != nil {
        // handle response
    }
}
```

## ListAutoScalingConfigurations

<p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>

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
    res, err := s.SDK.ListAutoScalingConfigurations(ctx, operations.ListAutoScalingConfigurationsRequest{
        ListAutoScalingConfigurationsRequest: shared.ListAutoScalingConfigurationsRequest{
            AutoScalingConfigurationName: sdk.String("et"),
            LatestOnly: sdk.Bool(false),
            MaxResults: sdk.Int64(569965),
            NextToken: sdk.String("ullam"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("quos"),
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.ListAutoScalingConfigurationsXAmzTargetEnumAppRunnerListAutoScalingConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAutoScalingConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListConnections

Returns a list of App Runner connections that are associated with your Amazon Web Services account.

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
    res, err := s.SDK.ListConnections(ctx, operations.ListConnectionsRequest{
        ListConnectionsRequest: shared.ListConnectionsRequest{
            ConnectionName: sdk.String("dolor"),
            MaxResults: sdk.Int64(896547),
            NextToken: sdk.String("odit"),
        },
        MaxResults: sdk.String("nemo"),
        NextToken: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.ListConnectionsXAmzTargetEnumAppRunnerListConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionsResponse != nil {
        // handle response
    }
}
```

## ListObservabilityConfigurations

<p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>

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
    res, err := s.SDK.ListObservabilityConfigurations(ctx, operations.ListObservabilityConfigurationsRequest{
        ListObservabilityConfigurationsRequest: shared.ListObservabilityConfigurationsRequest{
            LatestOnly: sdk.Bool(false),
            MaxResults: sdk.Int64(447926),
            NextToken: sdk.String("architecto"),
            ObservabilityConfigurationName: sdk.String("architecto"),
        },
        MaxResults: sdk.String("repudiandae"),
        NextToken: sdk.String("ullam"),
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ListObservabilityConfigurationsXAmzTargetEnumAppRunnerListObservabilityConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListObservabilityConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListOperations

<p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>

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
    res, err := s.SDK.ListOperations(ctx, operations.ListOperationsRequest{
        ListOperationsRequest: shared.ListOperationsRequest{
            MaxResults: sdk.Int64(37559),
            NextToken: sdk.String("consequuntur"),
            ServiceArn: "praesentium",
        },
        MaxResults: sdk.String("natus"),
        NextToken: sdk.String("magni"),
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.ListOperationsXAmzTargetEnumAppRunnerListOperations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## ListServices

Returns a list of running App Runner services in your Amazon Web Services account.

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
    res, err := s.SDK.ListServices(ctx, operations.ListServicesRequest{
        ListServicesRequest: shared.ListServicesRequest{
            MaxResults: sdk.Int64(139972),
            NextToken: sdk.String("ea"),
        },
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("ab"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.ListServicesXAmzTargetEnumAppRunnerListServices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "pariatur",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAppRunnerListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListVpcConnectors

Returns a list of App Runner VPC connectors in your Amazon Web Services account.

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
    res, err := s.SDK.ListVpcConnectors(ctx, operations.ListVpcConnectorsRequest{
        ListVpcConnectorsRequest: shared.ListVpcConnectorsRequest{
            MaxResults: sdk.Int64(359978),
            NextToken: sdk.String("hic"),
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.ListVpcConnectorsXAmzTargetEnumAppRunnerListVpcConnectors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVpcConnectorsResponse != nil {
        // handle response
    }
}
```

## ListVpcIngressConnections

Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.

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
    res, err := s.SDK.ListVpcIngressConnections(ctx, operations.ListVpcIngressConnectionsRequest{
        ListVpcIngressConnectionsRequest: shared.ListVpcIngressConnectionsRequest{
            Filter: &shared.ListVpcIngressConnectionsFilter{
                ServiceArn: sdk.String("eos"),
                VpcEndpointID: sdk.String("perferendis"),
            },
            MaxResults: sdk.Int64(170986),
            NextToken: sdk.String("minus"),
        },
        MaxResults: sdk.String("quam"),
        NextToken: sdk.String("dolor"),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.ListVpcIngressConnectionsXAmzTargetEnumAppRunnerListVpcIngressConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVpcIngressConnectionsResponse != nil {
        // handle response
    }
}
```

## PauseService

<p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

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
    res, err := s.SDK.PauseService(ctx, operations.PauseServiceRequest{
        PauseServiceRequest: shared.PauseServiceRequest{
            ServiceArn: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.PauseServiceXAmzTargetEnumAppRunnerPauseService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PauseServiceResponse != nil {
        // handle response
    }
}
```

## ResumeService

<p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

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
    res, err := s.SDK.ResumeService(ctx, operations.ResumeServiceRequest{
        ResumeServiceRequest: shared.ResumeServiceRequest{
            ServiceArn: "adipisci",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ResumeServiceXAmzTargetEnumAppRunnerResumeService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResumeServiceResponse != nil {
        // handle response
    }
}
```

## StartDeployment

<p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

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
    res, err := s.SDK.StartDeployment(ctx, operations.StartDeploymentRequest{
        StartDeploymentRequest: shared.StartDeploymentRequest{
            ServiceArn: "provident",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.StartDeploymentXAmzTargetEnumAppRunnerStartDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDeploymentResponse != nil {
        // handle response
    }
}
```

## TagResource

Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "dolorem",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("qui"),
                    Value: sdk.String("ipsum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAppRunnerTagResource,
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

Remove tags from an App Runner resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "dolorum",
            TagKeys: []string{
                "veritatis",
                "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAppRunnerUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateService

<p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

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
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        UpdateServiceRequest: shared.UpdateServiceRequest{
            AutoScalingConfigurationArn: sdk.String("voluptas"),
            HealthCheckConfiguration: &shared.HealthCheckConfiguration{
                HealthyThreshold: sdk.Int64(617658),
                Interval: sdk.Int64(179603),
                Path: sdk.String("atque"),
                Protocol: shared.HealthCheckProtocolEnumTCP.ToPointer(),
                Timeout: sdk.Int64(854614),
                UnhealthyThreshold: sdk.Int64(67249),
            },
            InstanceConfiguration: &shared.InstanceConfiguration{
                CPU: sdk.String("soluta"),
                InstanceRoleArn: sdk.String("dolorum"),
                Memory: sdk.String("iusto"),
            },
            NetworkConfiguration: &shared.NetworkConfiguration{
                EgressConfiguration: &shared.EgressConfiguration{
                    EgressType: shared.EgressTypeEnumDefault.ToPointer(),
                    VpcConnectorArn: sdk.String("dolorum"),
                },
                IngressConfiguration: &shared.IngressConfiguration{
                    IsPubliclyAccessible: sdk.Bool(false),
                },
            },
            ObservabilityConfiguration: &shared.ServiceObservabilityConfiguration{
                ObservabilityConfigurationArn: sdk.String("deleniti"),
                ObservabilityEnabled: false,
            },
            ServiceArn: "omnis",
            SourceConfiguration: &shared.SourceConfiguration{
                AuthenticationConfiguration: &shared.AuthenticationConfiguration{
                    AccessRoleArn: sdk.String("necessitatibus"),
                    ConnectionArn: sdk.String("distinctio"),
                },
                AutoDeploymentsEnabled: sdk.Bool(false),
                CodeRepository: &shared.CodeRepository{
                    CodeConfiguration: &shared.CodeConfiguration{
                        CodeConfigurationValues: &shared.CodeConfigurationValues{
                            BuildCommand: sdk.String("asperiores"),
                            Port: sdk.String("nihil"),
                            Runtime: shared.RuntimeEnumNodejs14,
                            RuntimeEnvironmentSecrets: map[string]string{
                                "id": "saepe",
                                "eius": "aspernatur",
                            },
                            RuntimeEnvironmentVariables: map[string]string{
                                "amet": "optio",
                            },
                            StartCommand: sdk.String("accusamus"),
                        },
                        ConfigurationSource: shared.ConfigurationSourceEnumRepository,
                    },
                    RepositoryURL: "saepe",
                    SourceCodeVersion: shared.SourceCodeVersion{
                        Type: shared.SourceCodeVersionTypeEnumBranch,
                        Value: "suscipit",
                    },
                },
                ImageRepository: &shared.ImageRepository{
                    ImageConfiguration: &shared.ImageConfiguration{
                        Port: sdk.String("deserunt"),
                        RuntimeEnvironmentSecrets: map[string]string{
                            "minima": "repellendus",
                            "totam": "similique",
                            "alias": "at",
                        },
                        RuntimeEnvironmentVariables: map[string]string{
                            "tempora": "vel",
                            "quod": "officiis",
                        },
                        StartCommand: sdk.String("qui"),
                    },
                    ImageIdentifier: "dolorum",
                    ImageRepositoryType: shared.ImageRepositoryTypeEnumEcrPublic,
                },
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.UpdateServiceXAmzTargetEnumAppRunnerUpdateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceResponse != nil {
        // handle response
    }
}
```

## UpdateVpcIngressConnection

<p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>

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
    res, err := s.SDK.UpdateVpcIngressConnection(ctx, operations.UpdateVpcIngressConnectionRequest{
        UpdateVpcIngressConnectionRequest: shared.UpdateVpcIngressConnectionRequest{
            IngressVpcConfiguration: shared.IngressVpcConfiguration{
                VpcEndpointID: sdk.String("tempore"),
                VpcID: sdk.String("accusamus"),
            },
            VpcIngressConnectionArn: "numquam",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.UpdateVpcIngressConnectionXAmzTargetEnumAppRunnerUpdateVpcIngressConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVpcIngressConnectionResponse != nil {
        // handle response
    }
}
```
