import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://proton.{region}.amazonaws.com", "https://proton.{region}.amazonaws.com", "http://proton.{region}.amazonaws.com.cn", "https://proton.{region}.amazonaws.com.cn"];
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
 * <p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton service.</p> <p>The documentation for each action shows the Query API request parameters and the XML response.</p> <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User Guide</a>.</p> <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in turn, select from the available service templates to automate their application or service deployments.</p> <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need permissions to use all of the listed API operations.</p> <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To monitor their applications that are running on Proton, developers need permissions to the service <i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i> API operations and the service instance <i>list</i> and <i>update</i> API operations.</p> <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p> <p> <b>Ensuring Idempotency</b> </p> <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are complete. Operations might also time out or encounter other server issues before they're complete, even if the request already returned a result. This might make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation occurs multiple times. This means that you might create more resources than you intended.</p> <p> <i>Idempotency</i> ensures that an API request action completes no more than one time. With an idempotent request, if the original request action completes successfully, any subsequent retries complete successfully without performing any further actions. However, the result might contain updated information, such as the current creation status.</p> <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p> <p> <b>Idempotent create APIs with a client token</b> </p> <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions, specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically provided by SDKs.</p> <p>Given a request action that has succeeded:</p> <p>If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is created.</p> <p>If the original resource is deleted and you retry the request, a new resource is created.</p> <p>Idempotent create APIs with a client token:</p> <ul> <li> <p>CreateEnvironmentTemplateVersion</p> </li> <li> <p>CreateServiceTemplateVersion</p> </li> <li> <p>CreateEnvironmentAccountConnection</p> </li> </ul> <p> <b>Idempotent create APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been modified, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p> <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Idempotent create APIs:</p> <ul> <li> <p>CreateEnvironmentTemplate</p> </li> <li> <p>CreateServiceTemplate</p> </li> <li> <p>CreateEnvironment</p> </li> <li> <p>CreateService</p> </li> </ul> <p> <b>Idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response.</p> <p>If you retry and the resource doesn't exist, the response is empty.</p> <p>In both cases, the retry succeeds.</p> <p>Idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironmentTemplate</p> </li> <li> <p>DeleteEnvironmentTemplateVersion</p> </li> <li> <p>DeleteServiceTemplate</p> </li> <li> <p>DeleteServiceTemplateVersion</p> </li> <li> <p>DeleteEnvironmentAccountConnection</p> </li> </ul> <p> <b>Asynchronous idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, if the original request delete operation status is <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any further actions.</p> <p>If the original request delete operation is complete, a retry returns an empty response.</p> <p>Asynchronous idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironment</p> </li> <li> <p>DeleteService</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/proton/} - Amazon Web Services documentation
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
     * <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
     */
    acceptEnvironmentAccountConnection(req: operations.AcceptEnvironmentAccountConnectionRequest, config?: AxiosRequestConfig): Promise<operations.AcceptEnvironmentAccountConnectionResponse>;
    /**
     * <p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    cancelComponentDeployment(req: operations.CancelComponentDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CancelComponentDeploymentResponse>;
    /**
     * <p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
     */
    cancelEnvironmentDeployment(req: operations.CancelEnvironmentDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CancelEnvironmentDeploymentResponse>;
    /**
     * <p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
     */
    cancelServiceInstanceDeployment(req: operations.CancelServiceInstanceDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CancelServiceInstanceDeploymentResponse>;
    /**
     * <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
     */
    cancelServicePipelineDeployment(req: operations.CancelServicePipelineDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CancelServicePipelineDeploymentResponse>;
    /**
     * <p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    createComponent(req: operations.CreateComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateComponentResponse>;
    /**
     * <p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>
     */
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * <p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
     */
    createEnvironmentAccountConnection(req: operations.CreateEnvironmentAccountConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentAccountConnectionResponse>;
    /**
     * <p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>
     */
    createEnvironmentTemplate(req: operations.CreateEnvironmentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentTemplateResponse>;
    /**
     * Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
     */
    createEnvironmentTemplateVersion(req: operations.CreateEnvironmentTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentTemplateVersionResponse>;
    /**
     * <p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
     */
    createRepository(req: operations.CreateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryResponse>;
    /**
     * Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.
     */
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.
     */
    createServiceTemplate(req: operations.CreateServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceTemplateResponse>;
    /**
     * Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.
     */
    createServiceTemplateVersion(req: operations.CreateServiceTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceTemplateVersionResponse>;
    /**
     * <p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
     */
    createTemplateSyncConfig(req: operations.CreateTemplateSyncConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateTemplateSyncConfigResponse>;
    /**
     * <p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    deleteComponent(req: operations.DeleteComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComponentResponse>;
    /**
     * Delete an environment.
     */
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * <p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
     */
    deleteEnvironmentAccountConnection(req: operations.DeleteEnvironmentAccountConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentAccountConnectionResponse>;
    /**
     * If no other major or minor versions of an environment template exist, delete the environment template.
     */
    deleteEnvironmentTemplate(req: operations.DeleteEnvironmentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentTemplateResponse>;
    /**
     * <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>
     */
    deleteEnvironmentTemplateVersion(req: operations.DeleteEnvironmentTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentTemplateVersionResponse>;
    /**
     * De-register and unlink your repository.
     */
    deleteRepository(req: operations.DeleteRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryResponse>;
    /**
     * <p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
     */
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * If no other major or minor versions of the service template exist, delete the service template.
     */
    deleteServiceTemplate(req: operations.DeleteServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceTemplateResponse>;
    /**
     * <p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>
     */
    deleteServiceTemplateVersion(req: operations.DeleteServiceTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceTemplateVersionResponse>;
    /**
     * Delete a template sync configuration.
     */
    deleteTemplateSyncConfig(req: operations.DeleteTemplateSyncConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTemplateSyncConfigResponse>;
    /**
     * Get detail data for Proton account-wide settings.
     */
    getAccountSettings(req: operations.GetAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSettingsResponse>;
    /**
     * <p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    getComponent(req: operations.GetComponentRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentResponse>;
    /**
     * Get detailed data for an environment.
     */
    getEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * <p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
     */
    getEnvironmentAccountConnection(req: operations.GetEnvironmentAccountConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentAccountConnectionResponse>;
    /**
     * Get detailed data for an environment template.
     */
    getEnvironmentTemplate(req: operations.GetEnvironmentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentTemplateResponse>;
    /**
     * Get detailed data for a major or minor version of an environment template.
     */
    getEnvironmentTemplateVersion(req: operations.GetEnvironmentTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentTemplateVersionResponse>;
    /**
     * Get detail data for a linked repository.
     */
    getRepository(req: operations.GetRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryResponse>;
    /**
     * <p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>
     */
    getRepositorySyncStatus(req: operations.GetRepositorySyncStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositorySyncStatusResponse>;
    /**
     * <p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates are exceptions—see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>
     */
    getResourcesSummary(req: operations.GetResourcesSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSummaryResponse>;
    /**
     * Get detailed data for a service.
     */
    getService(req: operations.GetServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceResponse>;
    /**
     * Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.
     */
    getServiceInstance(req: operations.GetServiceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceInstanceResponse>;
    /**
     * Get detailed data for a service template.
     */
    getServiceTemplate(req: operations.GetServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceTemplateResponse>;
    /**
     * Get detailed data for a major or minor version of a service template.
     */
    getServiceTemplateVersion(req: operations.GetServiceTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceTemplateVersionResponse>;
    /**
     * Get detail data for a template sync configuration.
     */
    getTemplateSyncConfig(req: operations.GetTemplateSyncConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateSyncConfigResponse>;
    /**
     * Get the status of a template sync.
     */
    getTemplateSyncStatus(req: operations.GetTemplateSyncStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateSyncStatusResponse>;
    /**
     * <p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    listComponentOutputs(req: operations.ListComponentOutputsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentOutputsResponse>;
    /**
     * <p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    listComponentProvisionedResources(req: operations.ListComponentProvisionedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentProvisionedResourcesResponse>;
    /**
     * <p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    listComponents(req: operations.ListComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentsResponse>;
    /**
     * <p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
     */
    listEnvironmentAccountConnections(req: operations.ListEnvironmentAccountConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentAccountConnectionsResponse>;
    /**
     * List the infrastructure as code outputs for your environment.
     */
    listEnvironmentOutputs(req: operations.ListEnvironmentOutputsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentOutputsResponse>;
    /**
     * List the provisioned resources for your environment.
     */
    listEnvironmentProvisionedResources(req: operations.ListEnvironmentProvisionedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentProvisionedResourcesResponse>;
    /**
     * List major or minor versions of an environment template with detail data.
     */
    listEnvironmentTemplateVersions(req: operations.ListEnvironmentTemplateVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentTemplateVersionsResponse>;
    /**
     * List environment templates.
     */
    listEnvironmentTemplates(req: operations.ListEnvironmentTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentTemplatesResponse>;
    /**
     * List environments with detail data summaries.
     */
    listEnvironments(req: operations.ListEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentsResponse>;
    /**
     * List linked repositories with detail data.
     */
    listRepositories(req: operations.ListRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoriesResponse>;
    /**
     * List repository sync definitions with detail data.
     */
    listRepositorySyncDefinitions(req: operations.ListRepositorySyncDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositorySyncDefinitionsResponse>;
    /**
     * Get a list service of instance Infrastructure as Code (IaC) outputs.
     */
    listServiceInstanceOutputs(req: operations.ListServiceInstanceOutputsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInstanceOutputsResponse>;
    /**
     * List provisioned resources for a service instance with details.
     */
    listServiceInstanceProvisionedResources(req: operations.ListServiceInstanceProvisionedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInstanceProvisionedResourcesResponse>;
    /**
     * List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.
     */
    listServiceInstances(req: operations.ListServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInstancesResponse>;
    /**
     * Get a list of service pipeline Infrastructure as Code (IaC) outputs.
     */
    listServicePipelineOutputs(req: operations.ListServicePipelineOutputsRequest, config?: AxiosRequestConfig): Promise<operations.ListServicePipelineOutputsResponse>;
    /**
     * List provisioned resources for a service and pipeline with details.
     */
    listServicePipelineProvisionedResources(req: operations.ListServicePipelineProvisionedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicePipelineProvisionedResourcesResponse>;
    /**
     * List major or minor versions of a service template with detail data.
     */
    listServiceTemplateVersions(req: operations.ListServiceTemplateVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceTemplateVersionsResponse>;
    /**
     * List service templates with detail data.
     */
    listServiceTemplates(req: operations.ListServiceTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceTemplatesResponse>;
    /**
     * List services with summaries of detail data.
     */
    listServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
     */
    notifyResourceDeploymentStatusChange(req: operations.NotifyResourceDeploymentStatusChangeRequest, config?: AxiosRequestConfig): Promise<operations.NotifyResourceDeploymentStatusChangeResponse>;
    /**
     * <p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
     */
    rejectEnvironmentAccountConnection(req: operations.RejectEnvironmentAccountConnectionRequest, config?: AxiosRequestConfig): Promise<operations.RejectEnvironmentAccountConnectionResponse>;
    /**
     * <p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update Proton settings that are used for multiple services in the Amazon Web Services account.
     */
    updateAccountSettings(req: operations.UpdateAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountSettingsResponse>;
    /**
     * <p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
     */
    updateComponent(req: operations.UpdateComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComponentResponse>;
    /**
     * <p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
     */
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
    /**
     * <p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
     */
    updateEnvironmentAccountConnection(req: operations.UpdateEnvironmentAccountConnectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentAccountConnectionResponse>;
    /**
     * Update an environment template.
     */
    updateEnvironmentTemplate(req: operations.UpdateEnvironmentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentTemplateResponse>;
    /**
     * Update a major or minor version of an environment template.
     */
    updateEnvironmentTemplateVersion(req: operations.UpdateEnvironmentTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentTemplateVersionResponse>;
    /**
     * <p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
     */
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * <p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
     */
    updateServiceInstance(req: operations.UpdateServiceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceInstanceResponse>;
    /**
     * <p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
     */
    updateServicePipeline(req: operations.UpdateServicePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServicePipelineResponse>;
    /**
     * Update a service template.
     */
    updateServiceTemplate(req: operations.UpdateServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceTemplateResponse>;
    /**
     * Update a major or minor version of a service template.
     */
    updateServiceTemplateVersion(req: operations.UpdateServiceTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceTemplateVersionResponse>;
    /**
     * Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.
     */
    updateTemplateSyncConfig(req: operations.UpdateTemplateSyncConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateSyncConfigResponse>;
}
