import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://apprunner.{region}.amazonaws.com", "https://apprunner.{region}.amazonaws.com", "http://apprunner.{region}.amazonaws.com.cn", "https://apprunner.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>App Runner</fullname> <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to provision and configure Amazon Web Services resources.</p> <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations, high performance, scalability, and security.</p> <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>. For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p> <p> To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/apprunner/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
     */
    associateCustomDomain(req: operations.AssociateCustomDomainRequest, config?: AxiosRequestConfig): Promise<operations.AssociateCustomDomainResponse>;
    /**
     * <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
     */
    createAutoScalingConfiguration(req: operations.CreateAutoScalingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAutoScalingConfigurationResponse>;
    /**
     * <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
     */
    createConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    /**
     * <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>
     */
    createObservabilityConfiguration(req: operations.CreateObservabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateObservabilityConfigurationResponse>;
    /**
     * <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
     */
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).
     */
    createVpcConnector(req: operations.CreateVpcConnectorRequest, config?: AxiosRequestConfig): Promise<operations.CreateVpcConnectorResponse>;
    /**
     * Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.
     */
    createVpcIngressConnection(req: operations.CreateVpcIngressConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateVpcIngressConnectionResponse>;
    /**
     * Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
     */
    deleteAutoScalingConfiguration(req: operations.DeleteAutoScalingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutoScalingConfigurationResponse>;
    /**
     * Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
     */
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
     */
    deleteObservabilityConfiguration(req: operations.DeleteObservabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObservabilityConfigurationResponse>;
    /**
     * <p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>
     */
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.
     */
    deleteVpcConnector(req: operations.DeleteVpcConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVpcConnectorResponse>;
    /**
     * <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>
     */
    deleteVpcIngressConnection(req: operations.DeleteVpcIngressConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVpcIngressConnectionResponse>;
    /**
     * Return a full description of an App Runner automatic scaling configuration resource.
     */
    describeAutoScalingConfiguration(req: operations.DescribeAutoScalingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAutoScalingConfigurationResponse>;
    /**
     * Return a description of custom domain names that are associated with an App Runner service.
     */
    describeCustomDomains(req: operations.DescribeCustomDomainsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomDomainsResponse>;
    /**
     * Return a full description of an App Runner observability configuration resource.
     */
    describeObservabilityConfiguration(req: operations.DescribeObservabilityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeObservabilityConfigurationResponse>;
    /**
     * Return a full description of an App Runner service.
     */
    describeService(req: operations.DescribeServiceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceResponse>;
    /**
     * Return a description of an App Runner VPC connector resource.
     */
    describeVpcConnector(req: operations.DescribeVpcConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVpcConnectorResponse>;
    /**
     * Return a full description of an App Runner VPC Ingress Connection resource.
     */
    describeVpcIngressConnection(req: operations.DescribeVpcIngressConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVpcIngressConnectionResponse>;
    /**
     * <p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
     */
    disassociateCustomDomain(req: operations.DisassociateCustomDomainRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateCustomDomainResponse>;
    /**
     * <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
     */
    listAutoScalingConfigurations(req: operations.ListAutoScalingConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAutoScalingConfigurationsResponse>;
    /**
     * Returns a list of App Runner connections that are associated with your Amazon Web Services account.
     */
    listConnections(req: operations.ListConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionsResponse>;
    /**
     * <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
     */
    listObservabilityConfigurations(req: operations.ListObservabilityConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListObservabilityConfigurationsResponse>;
    /**
     * <p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
     */
    listOperations(req: operations.ListOperationsRequest, config?: AxiosRequestConfig): Promise<operations.ListOperationsResponse>;
    /**
     * Returns a list of running App Runner services in your Amazon Web Services account.
     */
    listServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Returns a list of App Runner VPC connectors in your Amazon Web Services account.
     */
    listVpcConnectors(req: operations.ListVpcConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListVpcConnectorsResponse>;
    /**
     * Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.
     */
    listVpcIngressConnections(req: operations.ListVpcIngressConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListVpcIngressConnectionsResponse>;
    /**
     * <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
     */
    pauseService(req: operations.PauseServiceRequest, config?: AxiosRequestConfig): Promise<operations.PauseServiceResponse>;
    /**
     * <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
     */
    resumeService(req: operations.ResumeServiceRequest, config?: AxiosRequestConfig): Promise<operations.ResumeServiceResponse>;
    /**
     * <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
     */
    startDeployment(req: operations.StartDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StartDeploymentResponse>;
    /**
     * Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Remove tags from an App Runner resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
     */
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>
     */
    updateVpcIngressConnection(req: operations.UpdateVpcIngressConnectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVpcIngressConnectionResponse>;
}
