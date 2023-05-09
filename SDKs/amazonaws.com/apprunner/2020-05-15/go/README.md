# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/apprunner/2020-05-15/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AssociateCustomDomain(ctx, operations.AssociateCustomDomainRequest{
        AssociateCustomDomainRequest: shared.AssociateCustomDomainRequest{
            DomainName: "corrupti",
            EnableWWWSubdomain: sdk.Bool(false),
            ServiceArn: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateCustomDomain](docs/sdk/README.md#associatecustomdomain) - <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
* [CreateAutoScalingConfiguration](docs/sdk/README.md#createautoscalingconfiguration) - <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
* [CreateConnection](docs/sdk/README.md#createconnection) - <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
* [CreateObservabilityConfiguration](docs/sdk/README.md#createobservabilityconfiguration) - <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>
* [CreateService](docs/sdk/README.md#createservice) - <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
* [CreateVpcConnector](docs/sdk/README.md#createvpcconnector) - Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).
* [CreateVpcIngressConnection](docs/sdk/README.md#createvpcingressconnection) - Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.
* [DeleteAutoScalingConfiguration](docs/sdk/README.md#deleteautoscalingconfiguration) - Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [DeleteConnection](docs/sdk/README.md#deleteconnection) - Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
* [DeleteObservabilityConfiguration](docs/sdk/README.md#deleteobservabilityconfiguration) - Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [DeleteService](docs/sdk/README.md#deleteservice) - <p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>
* [DeleteVpcConnector](docs/sdk/README.md#deletevpcconnector) - Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.
* [DeleteVpcIngressConnection](docs/sdk/README.md#deletevpcingressconnection) - <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>
* [DescribeAutoScalingConfiguration](docs/sdk/README.md#describeautoscalingconfiguration) - Return a full description of an App Runner automatic scaling configuration resource.
* [DescribeCustomDomains](docs/sdk/README.md#describecustomdomains) - Return a description of custom domain names that are associated with an App Runner service.
* [DescribeObservabilityConfiguration](docs/sdk/README.md#describeobservabilityconfiguration) - Return a full description of an App Runner observability configuration resource.
* [DescribeService](docs/sdk/README.md#describeservice) - Return a full description of an App Runner service.
* [DescribeVpcConnector](docs/sdk/README.md#describevpcconnector) - Return a description of an App Runner VPC connector resource.
* [DescribeVpcIngressConnection](docs/sdk/README.md#describevpcingressconnection) - Return a full description of an App Runner VPC Ingress Connection resource.
* [DisassociateCustomDomain](docs/sdk/README.md#disassociatecustomdomain) - <p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
* [ListAutoScalingConfigurations](docs/sdk/README.md#listautoscalingconfigurations) - <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
* [ListConnections](docs/sdk/README.md#listconnections) - Returns a list of App Runner connections that are associated with your Amazon Web Services account.
* [ListObservabilityConfigurations](docs/sdk/README.md#listobservabilityconfigurations) - <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
* [ListOperations](docs/sdk/README.md#listoperations) - <p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
* [ListServices](docs/sdk/README.md#listservices) - Returns a list of running App Runner services in your Amazon Web Services account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.
* [ListVpcConnectors](docs/sdk/README.md#listvpcconnectors) - Returns a list of App Runner VPC connectors in your Amazon Web Services account.
* [ListVpcIngressConnections](docs/sdk/README.md#listvpcingressconnections) - Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.
* [PauseService](docs/sdk/README.md#pauseservice) - <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [ResumeService](docs/sdk/README.md#resumeservice) - <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [StartDeployment](docs/sdk/README.md#startdeployment) - <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [TagResource](docs/sdk/README.md#tagresource) - Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
* [UntagResource](docs/sdk/README.md#untagresource) - Remove tags from an App Runner resource.
* [UpdateService](docs/sdk/README.md#updateservice) - <p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [UpdateVpcIngressConnection](docs/sdk/README.md#updatevpcingressconnection) - <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
