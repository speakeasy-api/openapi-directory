# SDK

## Overview

<p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton service.</p> <p>The documentation for each action shows the Query API request parameters and the XML response.</p> <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User Guide</a>.</p> <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in turn, select from the available service templates to automate their application or service deployments.</p> <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need permissions to use all of the listed API operations.</p> <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To monitor their applications that are running on Proton, developers need permissions to the service <i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i> API operations and the service instance <i>list</i> and <i>update</i> API operations.</p> <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p> <p> <b>Ensuring Idempotency</b> </p> <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are complete. Operations might also time out or encounter other server issues before they're complete, even if the request already returned a result. This might make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation occurs multiple times. This means that you might create more resources than you intended.</p> <p> <i>Idempotency</i> ensures that an API request action completes no more than one time. With an idempotent request, if the original request action completes successfully, any subsequent retries complete successfully without performing any further actions. However, the result might contain updated information, such as the current creation status.</p> <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p> <p> <b>Idempotent create APIs with a client token</b> </p> <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions, specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically provided by SDKs.</p> <p>Given a request action that has succeeded:</p> <p>If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is created.</p> <p>If the original resource is deleted and you retry the request, a new resource is created.</p> <p>Idempotent create APIs with a client token:</p> <ul> <li> <p>CreateEnvironmentTemplateVersion</p> </li> <li> <p>CreateServiceTemplateVersion</p> </li> <li> <p>CreateEnvironmentAccountConnection</p> </li> </ul> <p> <b>Idempotent create APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been modified, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p> <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Idempotent create APIs:</p> <ul> <li> <p>CreateEnvironmentTemplate</p> </li> <li> <p>CreateServiceTemplate</p> </li> <li> <p>CreateEnvironment</p> </li> <li> <p>CreateService</p> </li> </ul> <p> <b>Idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response.</p> <p>If you retry and the resource doesn't exist, the response is empty.</p> <p>In both cases, the retry succeeds.</p> <p>Idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironmentTemplate</p> </li> <li> <p>DeleteEnvironmentTemplateVersion</p> </li> <li> <p>DeleteServiceTemplate</p> </li> <li> <p>DeleteServiceTemplateVersion</p> </li> <li> <p>DeleteEnvironmentAccountConnection</p> </li> </ul> <p> <b>Asynchronous idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, if the original request delete operation status is <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any further actions.</p> <p>If the original request delete operation is complete, a retry returns an empty response.</p> <p>Asynchronous idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironment</p> </li> <li> <p>DeleteService</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/proton/>
### Available Operations

* [AcceptEnvironmentAccountConnection](#acceptenvironmentaccountconnection) - <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [CancelComponentDeployment](#cancelcomponentdeployment) - <p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [CancelEnvironmentDeployment](#cancelenvironmentdeployment) - <p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* [CancelServiceInstanceDeployment](#cancelserviceinstancedeployment) - <p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* [CancelServicePipelineDeployment](#cancelservicepipelinedeployment) - <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* [CreateComponent](#createcomponent) - <p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [CreateEnvironment](#createenvironment) - <p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>
* [CreateEnvironmentAccountConnection](#createenvironmentaccountconnection) - <p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [CreateEnvironmentTemplate](#createenvironmenttemplate) - <p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>
* [CreateEnvironmentTemplateVersion](#createenvironmenttemplateversion) - Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
* [CreateRepository](#createrepository) - <p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
* [CreateService](#createservice) - Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.
* [CreateServiceInstance](#createserviceinstance) - Create a service instance.
* [CreateServiceSyncConfig](#createservicesyncconfig) - Create the Proton Ops configuration file.
* [CreateServiceTemplate](#createservicetemplate) - Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.
* [CreateServiceTemplateVersion](#createservicetemplateversion) - Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.
* [CreateTemplateSyncConfig](#createtemplatesyncconfig) - <p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
* [DeleteComponent](#deletecomponent) - <p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [DeleteEnvironment](#deleteenvironment) - Delete an environment.
* [DeleteEnvironmentAccountConnection](#deleteenvironmentaccountconnection) - <p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [DeleteEnvironmentTemplate](#deleteenvironmenttemplate) - If no other major or minor versions of an environment template exist, delete the environment template.
* [DeleteEnvironmentTemplateVersion](#deleteenvironmenttemplateversion) - <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>
* [DeleteRepository](#deleterepository) - De-register and unlink your repository.
* [DeleteService](#deleteservice) - <p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
* [DeleteServiceSyncConfig](#deleteservicesyncconfig) - Delete the Proton Ops file.
* [DeleteServiceTemplate](#deleteservicetemplate) - If no other major or minor versions of the service template exist, delete the service template.
* [DeleteServiceTemplateVersion](#deleteservicetemplateversion) - <p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>
* [DeleteTemplateSyncConfig](#deletetemplatesyncconfig) - Delete a template sync configuration.
* [GetAccountSettings](#getaccountsettings) - Get detail data for Proton account-wide settings.
* [GetComponent](#getcomponent) - <p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [GetEnvironment](#getenvironment) - Get detailed data for an environment.
* [GetEnvironmentAccountConnection](#getenvironmentaccountconnection) - <p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [GetEnvironmentTemplate](#getenvironmenttemplate) - Get detailed data for an environment template.
* [GetEnvironmentTemplateVersion](#getenvironmenttemplateversion) - Get detailed data for a major or minor version of an environment template.
* [GetRepository](#getrepository) - Get detail data for a linked repository.
* [GetRepositorySyncStatus](#getrepositorysyncstatus) - <p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>
* [GetResourcesSummary](#getresourcessummary) - <p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>
* [GetService](#getservice) - Get detailed data for a service.
* [GetServiceInstance](#getserviceinstance) - Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.
* [GetServiceInstanceSyncStatus](#getserviceinstancesyncstatus) - Get the status of the synced service instance.
* [GetServiceSyncBlockerSummary](#getservicesyncblockersummary) - Get detailed data for the service sync blocker summary.
* [GetServiceSyncConfig](#getservicesyncconfig) - Get detailed information for the service sync configuration.
* [GetServiceTemplate](#getservicetemplate) - Get detailed data for a service template.
* [GetServiceTemplateVersion](#getservicetemplateversion) - Get detailed data for a major or minor version of a service template.
* [GetTemplateSyncConfig](#gettemplatesyncconfig) - Get detail data for a template sync configuration.
* [GetTemplateSyncStatus](#gettemplatesyncstatus) - Get the status of a template sync.
* [ListComponentOutputs](#listcomponentoutputs) - <p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [ListComponentProvisionedResources](#listcomponentprovisionedresources) - <p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [ListComponents](#listcomponents) - <p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [ListEnvironmentAccountConnections](#listenvironmentaccountconnections) - <p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [ListEnvironmentOutputs](#listenvironmentoutputs) - List the infrastructure as code outputs for your environment.
* [ListEnvironmentProvisionedResources](#listenvironmentprovisionedresources) - List the provisioned resources for your environment.
* [ListEnvironmentTemplateVersions](#listenvironmenttemplateversions) - List major or minor versions of an environment template with detail data.
* [ListEnvironmentTemplates](#listenvironmenttemplates) - List environment templates.
* [ListEnvironments](#listenvironments) - List environments with detail data summaries.
* [ListRepositories](#listrepositories) - List linked repositories with detail data.
* [ListRepositorySyncDefinitions](#listrepositorysyncdefinitions) - List repository sync definitions with detail data.
* [ListServiceInstanceOutputs](#listserviceinstanceoutputs) - Get a list service of instance Infrastructure as Code (IaC) outputs.
* [ListServiceInstanceProvisionedResources](#listserviceinstanceprovisionedresources) - List provisioned resources for a service instance with details.
* [ListServiceInstances](#listserviceinstances) - List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.
* [ListServicePipelineOutputs](#listservicepipelineoutputs) - Get a list of service pipeline Infrastructure as Code (IaC) outputs.
* [ListServicePipelineProvisionedResources](#listservicepipelineprovisionedresources) - List provisioned resources for a service and pipeline with details.
* [ListServiceTemplateVersions](#listservicetemplateversions) - List major or minor versions of a service template with detail data.
* [ListServiceTemplates](#listservicetemplates) - List service templates with detail data.
* [ListServices](#listservices) - List services with summaries of detail data.
* [ListTagsForResource](#listtagsforresource) - List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.
* [NotifyResourceDeploymentStatusChange](#notifyresourcedeploymentstatuschange) - <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
* [RejectEnvironmentAccountConnection](#rejectenvironmentaccountconnection) - <p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [TagResource](#tagresource) - <p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
* [UntagResource](#untagresource) - <p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
* [UpdateAccountSettings](#updateaccountsettings) - Update Proton settings that are used for multiple services in the Amazon Web Services account.
* [UpdateComponent](#updatecomponent) - <p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [UpdateEnvironment](#updateenvironment) - <p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
* [UpdateEnvironmentAccountConnection](#updateenvironmentaccountconnection) - <p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [UpdateEnvironmentTemplate](#updateenvironmenttemplate) - Update an environment template.
* [UpdateEnvironmentTemplateVersion](#updateenvironmenttemplateversion) - Update a major or minor version of an environment template.
* [UpdateService](#updateservice) - <p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
* [UpdateServiceInstance](#updateserviceinstance) - <p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
* [UpdateServicePipeline](#updateservicepipeline) - <p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
* [UpdateServiceSyncBlocker](#updateservicesyncblocker) - Update the service sync blocker by resolving it.
* [UpdateServiceSyncConfig](#updateservicesyncconfig) - Update the Proton Ops config file.
* [UpdateServiceTemplate](#updateservicetemplate) - Update a service template.
* [UpdateServiceTemplateVersion](#updateservicetemplateversion) - Update a major or minor version of a service template.
* [UpdateTemplateSyncConfig](#updatetemplatesyncconfig) - Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.

## AcceptEnvironmentAccountConnection

<p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

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
    res, err := s.SDK.AcceptEnvironmentAccountConnection(ctx, operations.AcceptEnvironmentAccountConnectionRequest{
        AcceptEnvironmentAccountConnectionInput: shared.AcceptEnvironmentAccountConnectionInput{
            ID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.AcceptEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720AcceptEnvironmentAccountConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```

## CancelComponentDeployment

<p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.CancelComponentDeployment(ctx, operations.CancelComponentDeploymentRequest{
        CancelComponentDeploymentInput: shared.CancelComponentDeploymentInput{
            ComponentName: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CancelComponentDeploymentXAmzTargetEnumAwsProton20200720CancelComponentDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelComponentDeploymentOutput != nil {
        // handle response
    }
}
```

## CancelEnvironmentDeployment

<p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

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
    res, err := s.SDK.CancelEnvironmentDeployment(ctx, operations.CancelEnvironmentDeploymentRequest{
        CancelEnvironmentDeploymentInput: shared.CancelEnvironmentDeploymentInput{
            EnvironmentName: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.CancelEnvironmentDeploymentXAmzTargetEnumAwsProton20200720CancelEnvironmentDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelEnvironmentDeploymentOutput != nil {
        // handle response
    }
}
```

## CancelServiceInstanceDeployment

<p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

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
    res, err := s.SDK.CancelServiceInstanceDeployment(ctx, operations.CancelServiceInstanceDeploymentRequest{
        CancelServiceInstanceDeploymentInput: shared.CancelServiceInstanceDeploymentInput{
            ServiceInstanceName: "dolorem",
            ServiceName: "corporis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CancelServiceInstanceDeploymentXAmzTargetEnumAwsProton20200720CancelServiceInstanceDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelServiceInstanceDeploymentOutput != nil {
        // handle response
    }
}
```

## CancelServicePipelineDeployment

<p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

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
    res, err := s.SDK.CancelServicePipelineDeployment(ctx, operations.CancelServicePipelineDeploymentRequest{
        CancelServicePipelineDeploymentInput: shared.CancelServicePipelineDeploymentInput{
            ServiceName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.CancelServicePipelineDeploymentXAmzTargetEnumAwsProton20200720CancelServicePipelineDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelServicePipelineDeploymentOutput != nil {
        // handle response
    }
}
```

## CreateComponent

<p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.CreateComponent(ctx, operations.CreateComponentRequest{
        CreateComponentInput: shared.CreateComponentInput{
            ClientToken: sdk.String("culpa"),
            Description: sdk.String("consequuntur"),
            EnvironmentName: sdk.String("repellat"),
            Manifest: "mollitia",
            Name: "Francis Jerde",
            ServiceInstanceName: sdk.String("velit"),
            ServiceName: sdk.String("error"),
            ServiceSpec: sdk.String("quia"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vitae",
                    Value: "laborum",
                },
                shared.Tag{
                    Key: "animi",
                    Value: "enim",
                },
            },
            TemplateFile: "odit",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.CreateComponentXAmzTargetEnumAwsProton20200720CreateComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComponentOutput != nil {
        // handle response
    }
}
```

## CreateEnvironment

<p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.CreateEnvironment(ctx, operations.CreateEnvironmentRequest{
        CreateEnvironmentInput: shared.CreateEnvironmentInput{
            CodebuildRoleArn: sdk.String("quasi"),
            ComponentRoleArn: sdk.String("error"),
            Description: sdk.String("temporibus"),
            EnvironmentAccountConnectionID: sdk.String("laborum"),
            Name: "Johanna Wolf",
            ProtonServiceRoleArn: sdk.String("praesentium"),
            ProvisioningRepository: &shared.RepositoryBranchInput{
                Branch: "voluptatibus",
                Name: "Geneva Klein Jr.",
                Provider: shared.RepositoryProviderEnumGithubEnterprise,
            },
            Spec: "ut",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dicta",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "dolore",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "dicta",
                    Value: "harum",
                },
                shared.Tag{
                    Key: "enim",
                    Value: "accusamus",
                },
            },
            TemplateMajorVersion: "commodi",
            TemplateMinorVersion: sdk.String("repudiandae"),
            TemplateName: "quae",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.CreateEnvironmentXAmzTargetEnumAwsProton20200720CreateEnvironment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentOutput != nil {
        // handle response
    }
}
```

## CreateEnvironmentAccountConnection

<p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

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
    res, err := s.SDK.CreateEnvironmentAccountConnection(ctx, operations.CreateEnvironmentAccountConnectionRequest{
        CreateEnvironmentAccountConnectionInput: shared.CreateEnvironmentAccountConnectionInput{
            ClientToken: sdk.String("rem"),
            CodebuildRoleArn: sdk.String("voluptates"),
            ComponentRoleArn: sdk.String("quasi"),
            EnvironmentName: "repudiandae",
            ManagementAccountID: "sint",
            RoleArn: sdk.String("veritatis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "incidunt",
                    Value: "enim",
                },
                shared.Tag{
                    Key: "consequatur",
                    Value: "est",
                },
                shared.Tag{
                    Key: "quibusdam",
                    Value: "explicabo",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "distinctio",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.CreateEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720CreateEnvironmentAccountConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```

## CreateEnvironmentTemplate

<p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>

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
    res, err := s.SDK.CreateEnvironmentTemplate(ctx, operations.CreateEnvironmentTemplateRequest{
        CreateEnvironmentTemplateInput: shared.CreateEnvironmentTemplateInput{
            Description: sdk.String("perferendis"),
            DisplayName: sdk.String("magni"),
            EncryptionKey: sdk.String("assumenda"),
            Name: "Linda Corkery",
            Provisioning: shared.ProvisioningEnumCustomerManaged.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "facilis",
                    Value: "tempore",
                },
                shared.Tag{
                    Key: "labore",
                    Value: "delectus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.CreateEnvironmentTemplateXAmzTargetEnumAwsProton20200720CreateEnvironmentTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentTemplateOutput != nil {
        // handle response
    }
}
```

## CreateEnvironmentTemplateVersion

Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.

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
    res, err := s.SDK.CreateEnvironmentTemplateVersion(ctx, operations.CreateEnvironmentTemplateVersionRequest{
        CreateEnvironmentTemplateVersionInput: shared.CreateEnvironmentTemplateVersionInput{
            ClientToken: sdk.String("sint"),
            Description: sdk.String("officia"),
            MajorVersion: sdk.String("dolor"),
            Source: shared.TemplateVersionSourceInput{
                S3: &shared.S3ObjectSource{
                    Bucket: "debitis",
                    Key: "a",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "in",
                    Value: "in",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "maiores",
                },
                shared.Tag{
                    Key: "rerum",
                    Value: "dicta",
                },
            },
            TemplateName: "magnam",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.CreateEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720CreateEnvironmentTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentTemplateVersionOutput != nil {
        // handle response
    }
}
```

## CreateRepository

<p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.CreateRepository(ctx, operations.CreateRepositoryRequest{
        CreateRepositoryInput: shared.CreateRepositoryInput{
            ConnectionArn: "occaecati",
            EncryptionKey: sdk.String("enim"),
            Name: "Toby Pouros",
            Provider: shared.RepositoryProviderEnumGithubEnterprise,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deleniti",
                    Value: "sapiente",
                },
                shared.Tag{
                    Key: "amet",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "nisi",
                    Value: "vel",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.CreateRepositoryXAmzTargetEnumAwsProton20200720CreateRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRepositoryOutput != nil {
        // handle response
    }
}
```

## CreateService

Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.

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
        CreateServiceInput: shared.CreateServiceInput{
            BranchName: sdk.String("id"),
            Description: sdk.String("labore"),
            Name: "Laurie Mosciski",
            RepositoryConnectionArn: sdk.String("vero"),
            RepositoryID: sdk.String("aspernatur"),
            Spec: "architecto",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "ullam",
                    Value: "provident",
                },
            },
            TemplateMajorVersion: "quos",
            TemplateMinorVersion: sdk.String("sint"),
            TemplateName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.CreateServiceXAmzTargetEnumAwsProton20200720CreateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceOutput != nil {
        // handle response
    }
}
```

## CreateServiceInstance

Create a service instance.

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
    res, err := s.SDK.CreateServiceInstance(ctx, operations.CreateServiceInstanceRequest{
        CreateServiceInstanceInput: shared.CreateServiceInstanceInput{
            ClientToken: sdk.String("odit"),
            Name: "Joyce Kertzmann",
            ServiceName: "eius",
            Spec: "maxime",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "facilis",
                    Value: "in",
                },
                shared.Tag{
                    Key: "architecto",
                    Value: "architecto",
                },
                shared.Tag{
                    Key: "repudiandae",
                    Value: "ullam",
                },
            },
            TemplateMajorVersion: sdk.String("expedita"),
            TemplateMinorVersion: sdk.String("nihil"),
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.CreateServiceInstanceXAmzTargetEnumAwsProton20200720CreateServiceInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceInstanceOutput != nil {
        // handle response
    }
}
```

## CreateServiceSyncConfig

Create the Proton Ops configuration file.

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
    res, err := s.SDK.CreateServiceSyncConfig(ctx, operations.CreateServiceSyncConfigRequest{
        CreateServiceSyncConfigInput: shared.CreateServiceSyncConfigInput{
            Branch: "praesentium",
            FilePath: "natus",
            RepositoryName: "magni",
            RepositoryProvider: shared.RepositoryProviderEnumGithub,
            ServiceName: "quo",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.CreateServiceSyncConfigXAmzTargetEnumAwsProton20200720CreateServiceSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceSyncConfigOutput != nil {
        // handle response
    }
}
```

## CreateServiceTemplate

Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.

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
    res, err := s.SDK.CreateServiceTemplate(ctx, operations.CreateServiceTemplateRequest{
        CreateServiceTemplateInput: shared.CreateServiceTemplateInput{
            Description: sdk.String("accusantium"),
            DisplayName: sdk.String("ab"),
            EncryptionKey: sdk.String("maiores"),
            Name: "Clyde Kling",
            PipelineProvisioning: shared.ProvisioningEnumCustomerManaged.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "pariatur",
                    Value: "nemo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.CreateServiceTemplateXAmzTargetEnumAwsProton20200720CreateServiceTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceTemplateOutput != nil {
        // handle response
    }
}
```

## CreateServiceTemplateVersion

Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.

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
    res, err := s.SDK.CreateServiceTemplateVersion(ctx, operations.CreateServiceTemplateVersionRequest{
        CreateServiceTemplateVersionInput: shared.CreateServiceTemplateVersionInput{
            ClientToken: sdk.String("hic"),
            CompatibleEnvironmentTemplates: []shared.CompatibleEnvironmentTemplateInput{
                shared.CompatibleEnvironmentTemplateInput{
                    MajorVersion: "nobis",
                    TemplateName: "dolores",
                },
                shared.CompatibleEnvironmentTemplateInput{
                    MajorVersion: "quis",
                    TemplateName: "totam",
                },
                shared.CompatibleEnvironmentTemplateInput{
                    MajorVersion: "dignissimos",
                    TemplateName: "eaque",
                },
            },
            Description: sdk.String("quis"),
            MajorVersion: sdk.String("nesciunt"),
            Source: shared.TemplateVersionSourceInput{
                S3: &shared.S3ObjectSource{
                    Bucket: "eos",
                    Key: "perferendis",
                },
            },
            SupportedComponentSources: []shared.ServiceTemplateSupportedComponentSourceTypeEnum{
                shared.ServiceTemplateSupportedComponentSourceTypeEnumDirectlyDefined,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quam",
                    Value: "dolor",
                },
                shared.Tag{
                    Key: "vero",
                    Value: "nostrum",
                },
                shared.Tag{
                    Key: "hic",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "omnis",
                    Value: "facilis",
                },
            },
            TemplateName: "perspiciatis",
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreateServiceTemplateVersionXAmzTargetEnumAwsProton20200720CreateServiceTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceTemplateVersionOutput != nil {
        // handle response
    }
}
```

## CreateTemplateSyncConfig

<p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.CreateTemplateSyncConfig(ctx, operations.CreateTemplateSyncConfigRequest{
        CreateTemplateSyncConfigInput: shared.CreateTemplateSyncConfigInput{
            Branch: "rerum",
            RepositoryName: "adipisci",
            RepositoryProvider: shared.RepositoryProviderEnumBitbucket,
            Subdirectory: sdk.String("earum"),
            TemplateName: "modi",
            TemplateType: shared.TemplateTypeEnumService,
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.CreateTemplateSyncConfigXAmzTargetEnumAwsProton20200720CreateTemplateSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTemplateSyncConfigOutput != nil {
        // handle response
    }
}
```

## DeleteComponent

<p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.DeleteComponent(ctx, operations.DeleteComponentRequest{
        DeleteComponentInput: shared.DeleteComponentInput{
            Name: "Billie Jacobi",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteComponentXAmzTargetEnumAwsProton20200720DeleteComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteComponentOutput != nil {
        // handle response
    }
}
```

## DeleteEnvironment

Delete an environment.

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
    res, err := s.SDK.DeleteEnvironment(ctx, operations.DeleteEnvironmentRequest{
        DeleteEnvironmentInput: shared.DeleteEnvironmentInput{
            Name: "Johanna Farrell",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DeleteEnvironmentXAmzTargetEnumAwsProton20200720DeleteEnvironment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentOutput != nil {
        // handle response
    }
}
```

## DeleteEnvironmentAccountConnection

<p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

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
    res, err := s.SDK.DeleteEnvironmentAccountConnection(ctx, operations.DeleteEnvironmentAccountConnectionRequest{
        DeleteEnvironmentAccountConnectionInput: shared.DeleteEnvironmentAccountConnectionInput{
            ID: "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DeleteEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720DeleteEnvironmentAccountConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```

## DeleteEnvironmentTemplate

If no other major or minor versions of an environment template exist, delete the environment template.

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
    res, err := s.SDK.DeleteEnvironmentTemplate(ctx, operations.DeleteEnvironmentTemplateRequest{
        DeleteEnvironmentTemplateInput: shared.DeleteEnvironmentTemplateInput{
            Name: "James Swaniawski",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DeleteEnvironmentTemplateXAmzTargetEnumAwsProton20200720DeleteEnvironmentTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentTemplateOutput != nil {
        // handle response
    }
}
```

## DeleteEnvironmentTemplateVersion

<p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>

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
    res, err := s.SDK.DeleteEnvironmentTemplateVersion(ctx, operations.DeleteEnvironmentTemplateVersionRequest{
        DeleteEnvironmentTemplateVersionInput: shared.DeleteEnvironmentTemplateVersionInput{
            MajorVersion: "harum",
            MinorVersion: "iusto",
            TemplateName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DeleteEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720DeleteEnvironmentTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentTemplateVersionOutput != nil {
        // handle response
    }
}
```

## DeleteRepository

De-register and unlink your repository.

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
    res, err := s.SDK.DeleteRepository(ctx, operations.DeleteRepositoryRequest{
        DeleteRepositoryInput: shared.DeleteRepositoryInput{
            Name: "Jeannie Leannon MD",
            Provider: shared.RepositoryProviderEnumGithub,
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DeleteRepositoryXAmzTargetEnumAwsProton20200720DeleteRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRepositoryOutput != nil {
        // handle response
    }
}
```

## DeleteService

<p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

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
        DeleteServiceInput: shared.DeleteServiceInput{
            Name: "Norma McGlynn",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DeleteServiceXAmzTargetEnumAwsProton20200720DeleteService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceOutput != nil {
        // handle response
    }
}
```

## DeleteServiceSyncConfig

Delete the Proton Ops file.

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
    res, err := s.SDK.DeleteServiceSyncConfig(ctx, operations.DeleteServiceSyncConfigRequest{
        DeleteServiceSyncConfigInput: shared.DeleteServiceSyncConfigInput{
            ServiceName: "distinctio",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DeleteServiceSyncConfigXAmzTargetEnumAwsProton20200720DeleteServiceSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceSyncConfigOutput != nil {
        // handle response
    }
}
```

## DeleteServiceTemplate

If no other major or minor versions of the service template exist, delete the service template.

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
    res, err := s.SDK.DeleteServiceTemplate(ctx, operations.DeleteServiceTemplateRequest{
        DeleteServiceTemplateInput: shared.DeleteServiceTemplateInput{
            Name: "Mrs. Louise Kuhlman",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DeleteServiceTemplateXAmzTargetEnumAwsProton20200720DeleteServiceTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceTemplateOutput != nil {
        // handle response
    }
}
```

## DeleteServiceTemplateVersion

<p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>

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
    res, err := s.SDK.DeleteServiceTemplateVersion(ctx, operations.DeleteServiceTemplateVersionRequest{
        DeleteServiceTemplateVersionInput: shared.DeleteServiceTemplateVersionInput{
            MajorVersion: "ipsum",
            MinorVersion: "veritatis",
            TemplateName: "nobis",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DeleteServiceTemplateVersionXAmzTargetEnumAwsProton20200720DeleteServiceTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceTemplateVersionOutput != nil {
        // handle response
    }
}
```

## DeleteTemplateSyncConfig

Delete a template sync configuration.

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
    res, err := s.SDK.DeleteTemplateSyncConfig(ctx, operations.DeleteTemplateSyncConfigRequest{
        DeleteTemplateSyncConfigInput: shared.DeleteTemplateSyncConfigInput{
            TemplateName: "labore",
            TemplateType: shared.TemplateTypeEnumEnvironment,
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.DeleteTemplateSyncConfigXAmzTargetEnumAwsProton20200720DeleteTemplateSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTemplateSyncConfigOutput != nil {
        // handle response
    }
}
```

## GetAccountSettings

Get detail data for Proton account-wide settings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAccountSettings(ctx, operations.GetAccountSettingsRequest{
        RequestBody: map[string]interface{}{
            "repellendus": "porro",
            "doloribus": "ut",
            "facilis": "cupiditate",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.GetAccountSettingsXAmzTargetEnumAwsProton20200720GetAccountSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsOutput != nil {
        // handle response
    }
}
```

## GetComponent

<p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.GetComponent(ctx, operations.GetComponentRequest{
        GetComponentInput: shared.GetComponentInput{
            Name: "Arturo Hauck",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.GetComponentXAmzTargetEnumAwsProton20200720GetComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentOutput != nil {
        // handle response
    }
}
```

## GetEnvironment

Get detailed data for an environment.

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
    res, err := s.SDK.GetEnvironment(ctx, operations.GetEnvironmentRequest{
        GetEnvironmentInput: shared.GetEnvironmentInput{
            Name: "Lonnie Murray",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.GetEnvironmentXAmzTargetEnumAwsProton20200720GetEnvironment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentOutput != nil {
        // handle response
    }
}
```

## GetEnvironmentAccountConnection

<p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

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
    res, err := s.SDK.GetEnvironmentAccountConnection(ctx, operations.GetEnvironmentAccountConnectionRequest{
        GetEnvironmentAccountConnectionInput: shared.GetEnvironmentAccountConnectionInput{
            ID: "0f5d2cff-7c70-4a45-a26d-436813f16d9f",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.GetEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720GetEnvironmentAccountConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```

## GetEnvironmentTemplate

Get detailed data for an environment template.

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
    res, err := s.SDK.GetEnvironmentTemplate(ctx, operations.GetEnvironmentTemplateRequest{
        GetEnvironmentTemplateInput: shared.GetEnvironmentTemplateInput{
            Name: "Jeanne Bode",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.GetEnvironmentTemplateXAmzTargetEnumAwsProton20200720GetEnvironmentTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentTemplateOutput != nil {
        // handle response
    }
}
```

## GetEnvironmentTemplateVersion

Get detailed data for a major or minor version of an environment template.

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
    res, err := s.SDK.GetEnvironmentTemplateVersion(ctx, operations.GetEnvironmentTemplateVersionRequest{
        GetEnvironmentTemplateVersionInput: shared.GetEnvironmentTemplateVersionInput{
            MajorVersion: "libero",
            MinorVersion: "aut",
            TemplateName: "aut",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.GetEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720GetEnvironmentTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironmentTemplateVersionOutput != nil {
        // handle response
    }
}
```

## GetRepository

Get detail data for a linked repository.

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
    res, err := s.SDK.GetRepository(ctx, operations.GetRepositoryRequest{
        GetRepositoryInput: shared.GetRepositoryInput{
            Name: "Sonya Osinski",
            Provider: shared.RepositoryProviderEnumGithubEnterprise,
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.GetRepositoryXAmzTargetEnumAwsProton20200720GetRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRepositoryOutput != nil {
        // handle response
    }
}
```

## GetRepositorySyncStatus

<p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>

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
    res, err := s.SDK.GetRepositorySyncStatus(ctx, operations.GetRepositorySyncStatusRequest{
        GetRepositorySyncStatusInput: shared.GetRepositorySyncStatusInput{
            Branch: "quasi",
            RepositoryName: "tempora",
            RepositoryProvider: shared.RepositoryProviderEnumGithub,
            SyncType: shared.SyncTypeEnumTemplateSync,
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.GetRepositorySyncStatusXAmzTargetEnumAwsProton20200720GetRepositorySyncStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRepositorySyncStatusOutput != nil {
        // handle response
    }
}
```

## GetResourcesSummary

<p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResourcesSummary(ctx, operations.GetResourcesSummaryRequest{
        RequestBody: map[string]interface{}{
            "rem": "fuga",
            "reprehenderit": "quidem",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.GetResourcesSummaryXAmzTargetEnumAwsProton20200720GetResourcesSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcesSummaryOutput != nil {
        // handle response
    }
}
```

## GetService

Get detailed data for a service.

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
    res, err := s.SDK.GetService(ctx, operations.GetServiceRequest{
        GetServiceInput: shared.GetServiceInput{
            Name: "Harold Bednar",
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.GetServiceXAmzTargetEnumAwsProton20200720GetService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceOutput != nil {
        // handle response
    }
}
```

## GetServiceInstance

Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.

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
    res, err := s.SDK.GetServiceInstance(ctx, operations.GetServiceInstanceRequest{
        GetServiceInstanceInput: shared.GetServiceInstanceInput{
            Name: "Mrs. Virginia McGlynn",
            ServiceName: "ipsam",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.GetServiceInstanceXAmzTargetEnumAwsProton20200720GetServiceInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceInstanceOutput != nil {
        // handle response
    }
}
```

## GetServiceInstanceSyncStatus

Get the status of the synced service instance.

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
    res, err := s.SDK.GetServiceInstanceSyncStatus(ctx, operations.GetServiceInstanceSyncStatusRequest{
        GetServiceInstanceSyncStatusInput: shared.GetServiceInstanceSyncStatusInput{
            ServiceInstanceName: "quod",
            ServiceName: "dignissimos",
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.GetServiceInstanceSyncStatusXAmzTargetEnumAwsProton20200720GetServiceInstanceSyncStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceInstanceSyncStatusOutput != nil {
        // handle response
    }
}
```

## GetServiceSyncBlockerSummary

Get detailed data for the service sync blocker summary.

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
    res, err := s.SDK.GetServiceSyncBlockerSummary(ctx, operations.GetServiceSyncBlockerSummaryRequest{
        GetServiceSyncBlockerSummaryInput: shared.GetServiceSyncBlockerSummaryInput{
            ServiceInstanceName: sdk.String("commodi"),
            ServiceName: "sapiente",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.GetServiceSyncBlockerSummaryXAmzTargetEnumAwsProton20200720GetServiceSyncBlockerSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceSyncBlockerSummaryOutput != nil {
        // handle response
    }
}
```

## GetServiceSyncConfig

Get detailed information for the service sync configuration.

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
    res, err := s.SDK.GetServiceSyncConfig(ctx, operations.GetServiceSyncConfigRequest{
        GetServiceSyncConfigInput: shared.GetServiceSyncConfigInput{
            ServiceName: "praesentium",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.GetServiceSyncConfigXAmzTargetEnumAwsProton20200720GetServiceSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceSyncConfigOutput != nil {
        // handle response
    }
}
```

## GetServiceTemplate

Get detailed data for a service template.

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
    res, err := s.SDK.GetServiceTemplate(ctx, operations.GetServiceTemplateRequest{
        GetServiceTemplateInput: shared.GetServiceTemplateInput{
            Name: "Cathy Huel",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.GetServiceTemplateXAmzTargetEnumAwsProton20200720GetServiceTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceTemplateOutput != nil {
        // handle response
    }
}
```

## GetServiceTemplateVersion

Get detailed data for a major or minor version of a service template.

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
    res, err := s.SDK.GetServiceTemplateVersion(ctx, operations.GetServiceTemplateVersionRequest{
        GetServiceTemplateVersionInput: shared.GetServiceTemplateVersionInput{
            MajorVersion: "esse",
            MinorVersion: "eveniet",
            TemplateName: "accusamus",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.GetServiceTemplateVersionXAmzTargetEnumAwsProton20200720GetServiceTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceTemplateVersionOutput != nil {
        // handle response
    }
}
```

## GetTemplateSyncConfig

Get detail data for a template sync configuration.

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
    res, err := s.SDK.GetTemplateSyncConfig(ctx, operations.GetTemplateSyncConfigRequest{
        GetTemplateSyncConfigInput: shared.GetTemplateSyncConfigInput{
            TemplateName: "saepe",
            TemplateType: shared.TemplateTypeEnumEnvironment,
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.GetTemplateSyncConfigXAmzTargetEnumAwsProton20200720GetTemplateSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateSyncConfigOutput != nil {
        // handle response
    }
}
```

## GetTemplateSyncStatus

Get the status of a template sync.

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
    res, err := s.SDK.GetTemplateSyncStatus(ctx, operations.GetTemplateSyncStatusRequest{
        GetTemplateSyncStatusInput: shared.GetTemplateSyncStatusInput{
            TemplateName: "sit",
            TemplateType: shared.TemplateTypeEnumService,
            TemplateVersion: "tempore",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.GetTemplateSyncStatusXAmzTargetEnumAwsProton20200720GetTemplateSyncStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateSyncStatusOutput != nil {
        // handle response
    }
}
```

## ListComponentOutputs

<p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.ListComponentOutputs(ctx, operations.ListComponentOutputsRequest{
        ListComponentOutputsInput: shared.ListComponentOutputsInput{
            ComponentName: "consectetur",
            NextToken: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ListComponentOutputsXAmzTargetEnumAwsProton20200720ListComponentOutputs,
        NextToken: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentOutputsOutput != nil {
        // handle response
    }
}
```

## ListComponentProvisionedResources

<p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.ListComponentProvisionedResources(ctx, operations.ListComponentProvisionedResourcesRequest{
        ListComponentProvisionedResourcesInput: shared.ListComponentProvisionedResourcesInput{
            ComponentName: "error",
            NextToken: sdk.String("sint"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.ListComponentProvisionedResourcesXAmzTargetEnumAwsProton20200720ListComponentProvisionedResources,
        NextToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentProvisionedResourcesOutput != nil {
        // handle response
    }
}
```

## ListComponents

<p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.ListComponents(ctx, operations.ListComponentsRequest{
        ListComponentsInput: shared.ListComponentsInput{
            EnvironmentName: sdk.String("quasi"),
            MaxResults: sdk.Int64(628899),
            NextToken: sdk.String("culpa"),
            ServiceInstanceName: sdk.String("aliquid"),
            ServiceName: sdk.String("tenetur"),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.ListComponentsXAmzTargetEnumAwsProton20200720ListComponents,
        MaxResults: sdk.String("soluta"),
        NextToken: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentsOutput != nil {
        // handle response
    }
}
```

## ListEnvironmentAccountConnections

<p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

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
    res, err := s.SDK.ListEnvironmentAccountConnections(ctx, operations.ListEnvironmentAccountConnectionsRequest{
        ListEnvironmentAccountConnectionsInput: shared.ListEnvironmentAccountConnectionsInput{
            EnvironmentName: sdk.String("aliquam"),
            MaxResults: sdk.Int64(958983),
            NextToken: sdk.String("dicta"),
            RequestedBy: shared.EnvironmentAccountConnectionRequesterAccountTypeEnumManagementAccount,
            Statuses: []shared.EnvironmentAccountConnectionStatusEnum{
                shared.EnvironmentAccountConnectionStatusEnumConnected,
                shared.EnvironmentAccountConnectionStatusEnumConnected,
            },
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.ListEnvironmentAccountConnectionsXAmzTargetEnumAwsProton20200720ListEnvironmentAccountConnections,
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentAccountConnectionsOutput != nil {
        // handle response
    }
}
```

## ListEnvironmentOutputs

List the infrastructure as code outputs for your environment.

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
    res, err := s.SDK.ListEnvironmentOutputs(ctx, operations.ListEnvironmentOutputsRequest{
        ListEnvironmentOutputsInput: shared.ListEnvironmentOutputsInput{
            EnvironmentName: "omnis",
            NextToken: sdk.String("tenetur"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.ListEnvironmentOutputsXAmzTargetEnumAwsProton20200720ListEnvironmentOutputs,
        NextToken: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentOutputsOutput != nil {
        // handle response
    }
}
```

## ListEnvironmentProvisionedResources

List the provisioned resources for your environment.

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
    res, err := s.SDK.ListEnvironmentProvisionedResources(ctx, operations.ListEnvironmentProvisionedResourcesRequest{
        ListEnvironmentProvisionedResourcesInput: shared.ListEnvironmentProvisionedResourcesInput{
            EnvironmentName: "adipisci",
            NextToken: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.ListEnvironmentProvisionedResourcesXAmzTargetEnumAwsProton20200720ListEnvironmentProvisionedResources,
        NextToken: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentProvisionedResourcesOutput != nil {
        // handle response
    }
}
```

## ListEnvironmentTemplateVersions

List major or minor versions of an environment template with detail data.

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
    res, err := s.SDK.ListEnvironmentTemplateVersions(ctx, operations.ListEnvironmentTemplateVersionsRequest{
        ListEnvironmentTemplateVersionsInput: shared.ListEnvironmentTemplateVersionsInput{
            MajorVersion: sdk.String("corrupti"),
            MaxResults: sdk.Int64(251941),
            NextToken: sdk.String("voluptatem"),
            TemplateName: "dolor",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.ListEnvironmentTemplateVersionsXAmzTargetEnumAwsProton20200720ListEnvironmentTemplateVersions,
        MaxResults: sdk.String("dicta"),
        NextToken: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentTemplateVersionsOutput != nil {
        // handle response
    }
}
```

## ListEnvironmentTemplates

List environment templates.

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
    res, err := s.SDK.ListEnvironmentTemplates(ctx, operations.ListEnvironmentTemplatesRequest{
        ListEnvironmentTemplatesInput: shared.ListEnvironmentTemplatesInput{
            MaxResults: sdk.Int64(618480),
            NextToken: sdk.String("velit"),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.ListEnvironmentTemplatesXAmzTargetEnumAwsProton20200720ListEnvironmentTemplates,
        MaxResults: sdk.String("repellendus"),
        NextToken: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentTemplatesOutput != nil {
        // handle response
    }
}
```

## ListEnvironments

List environments with detail data summaries.

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
    res, err := s.SDK.ListEnvironments(ctx, operations.ListEnvironmentsRequest{
        ListEnvironmentsInput: shared.ListEnvironmentsInput{
            EnvironmentTemplates: []shared.EnvironmentTemplateFilter{
                shared.EnvironmentTemplateFilter{
                    MajorVersion: "dignissimos",
                    TemplateName: "officia",
                },
                shared.EnvironmentTemplateFilter{
                    MajorVersion: "asperiores",
                    TemplateName: "nemo",
                },
                shared.EnvironmentTemplateFilter{
                    MajorVersion: "quae",
                    TemplateName: "quaerat",
                },
                shared.EnvironmentTemplateFilter{
                    MajorVersion: "porro",
                    TemplateName: "quod",
                },
            },
            MaxResults: sdk.Int64(288398),
            NextToken: sdk.String("ab"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.ListEnvironmentsXAmzTargetEnumAwsProton20200720ListEnvironments,
        MaxResults: sdk.String("recusandae"),
        NextToken: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsOutput != nil {
        // handle response
    }
}
```

## ListRepositories

List linked repositories with detail data.

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
    res, err := s.SDK.ListRepositories(ctx, operations.ListRepositoriesRequest{
        ListRepositoriesInput: shared.ListRepositoriesInput{
            MaxResults: sdk.Int64(853940),
            NextToken: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.ListRepositoriesXAmzTargetEnumAwsProton20200720ListRepositories,
        MaxResults: sdk.String("commodi"),
        NextToken: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepositoriesOutput != nil {
        // handle response
    }
}
```

## ListRepositorySyncDefinitions

List repository sync definitions with detail data.

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
    res, err := s.SDK.ListRepositorySyncDefinitions(ctx, operations.ListRepositorySyncDefinitionsRequest{
        ListRepositorySyncDefinitionsInput: shared.ListRepositorySyncDefinitionsInput{
            NextToken: sdk.String("corporis"),
            RepositoryName: "reiciendis",
            RepositoryProvider: shared.RepositoryProviderEnumBitbucket,
            SyncType: shared.SyncTypeEnumTemplateSync,
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.ListRepositorySyncDefinitionsXAmzTargetEnumAwsProton20200720ListRepositorySyncDefinitions,
        NextToken: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepositorySyncDefinitionsOutput != nil {
        // handle response
    }
}
```

## ListServiceInstanceOutputs

Get a list service of instance Infrastructure as Code (IaC) outputs.

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
    res, err := s.SDK.ListServiceInstanceOutputs(ctx, operations.ListServiceInstanceOutputsRequest{
        ListServiceInstanceOutputsInput: shared.ListServiceInstanceOutputsInput{
            NextToken: sdk.String("facere"),
            ServiceInstanceName: "numquam",
            ServiceName: "doloribus",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.ListServiceInstanceOutputsXAmzTargetEnumAwsProton20200720ListServiceInstanceOutputs,
        NextToken: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceInstanceOutputsOutput != nil {
        // handle response
    }
}
```

## ListServiceInstanceProvisionedResources

List provisioned resources for a service instance with details.

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
    res, err := s.SDK.ListServiceInstanceProvisionedResources(ctx, operations.ListServiceInstanceProvisionedResourcesRequest{
        ListServiceInstanceProvisionedResourcesInput: shared.ListServiceInstanceProvisionedResourcesInput{
            NextToken: sdk.String("adipisci"),
            ServiceInstanceName: "non",
            ServiceName: "amet",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.ListServiceInstanceProvisionedResourcesXAmzTargetEnumAwsProton20200720ListServiceInstanceProvisionedResources,
        NextToken: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceInstanceProvisionedResourcesOutput != nil {
        // handle response
    }
}
```

## ListServiceInstances

List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.

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
    res, err := s.SDK.ListServiceInstances(ctx, operations.ListServiceInstancesRequest{
        ListServiceInstancesInput: shared.ListServiceInstancesInput{
            Filters: []shared.ListServiceInstancesFilter{
                shared.ListServiceInstancesFilter{
                    Key: shared.ListServiceInstancesFilterByEnumCreatedAtAfter.ToPointer(),
                    Value: sdk.String("libero"),
                },
            },
            MaxResults: sdk.Int64(113816),
            NextToken: sdk.String("accusamus"),
            ServiceName: sdk.String("similique"),
            SortBy: shared.ListServiceInstancesSortByEnumDeploymentStatus.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.ListServiceInstancesXAmzTargetEnumAwsProton20200720ListServiceInstances,
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceInstancesOutput != nil {
        // handle response
    }
}
```

## ListServicePipelineOutputs

Get a list of service pipeline Infrastructure as Code (IaC) outputs.

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
    res, err := s.SDK.ListServicePipelineOutputs(ctx, operations.ListServicePipelineOutputsRequest{
        ListServicePipelineOutputsInput: shared.ListServicePipelineOutputsInput{
            NextToken: sdk.String("blanditiis"),
            ServiceName: "in",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.ListServicePipelineOutputsXAmzTargetEnumAwsProton20200720ListServicePipelineOutputs,
        NextToken: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicePipelineOutputsOutput != nil {
        // handle response
    }
}
```

## ListServicePipelineProvisionedResources

List provisioned resources for a service and pipeline with details.

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
    res, err := s.SDK.ListServicePipelineProvisionedResources(ctx, operations.ListServicePipelineProvisionedResourcesRequest{
        ListServicePipelineProvisionedResourcesInput: shared.ListServicePipelineProvisionedResourcesInput{
            NextToken: sdk.String("quas"),
            ServiceName: "hic",
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.ListServicePipelineProvisionedResourcesXAmzTargetEnumAwsProton20200720ListServicePipelineProvisionedResources,
        NextToken: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicePipelineProvisionedResourcesOutput != nil {
        // handle response
    }
}
```

## ListServiceTemplateVersions

List major or minor versions of a service template with detail data.

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
    res, err := s.SDK.ListServiceTemplateVersions(ctx, operations.ListServiceTemplateVersionsRequest{
        ListServiceTemplateVersionsInput: shared.ListServiceTemplateVersionsInput{
            MajorVersion: sdk.String("sit"),
            MaxResults: sdk.Int64(699575),
            NextToken: sdk.String("sed"),
            TemplateName: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.ListServiceTemplateVersionsXAmzTargetEnumAwsProton20200720ListServiceTemplateVersions,
        MaxResults: sdk.String("dolore"),
        NextToken: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceTemplateVersionsOutput != nil {
        // handle response
    }
}
```

## ListServiceTemplates

List service templates with detail data.

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
    res, err := s.SDK.ListServiceTemplates(ctx, operations.ListServiceTemplatesRequest{
        ListServiceTemplatesInput: shared.ListServiceTemplatesInput{
            MaxResults: sdk.Int64(152354),
            NextToken: sdk.String("in"),
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.ListServiceTemplatesXAmzTargetEnumAwsProton20200720ListServiceTemplates,
        MaxResults: sdk.String("sapiente"),
        NextToken: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceTemplatesOutput != nil {
        // handle response
    }
}
```

## ListServices

List services with summaries of detail data.

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
        ListServicesInput: shared.ListServicesInput{
            MaxResults: sdk.Int64(72434),
            NextToken: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.ListServicesXAmzTargetEnumAwsProton20200720ListServices,
        MaxResults: sdk.String("necessitatibus"),
        NextToken: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.

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
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            MaxResults: sdk.Int64(406733),
            NextToken: sdk.String("occaecati"),
            ResourceArn: "quos",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsProton20200720ListTagsForResource,
        MaxResults: sdk.String("non"),
        NextToken: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## NotifyResourceDeploymentStatusChange

<p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.NotifyResourceDeploymentStatusChange(ctx, operations.NotifyResourceDeploymentStatusChangeRequest{
        NotifyResourceDeploymentStatusChangeInput: shared.NotifyResourceDeploymentStatusChangeInput{
            DeploymentID: sdk.String("praesentium"),
            Outputs: []shared.Output{
                shared.Output{
                    Key: sdk.String("quaerat"),
                    ValueString: sdk.String("incidunt"),
                },
                shared.Output{
                    Key: sdk.String("ipsam"),
                    ValueString: sdk.String("debitis"),
                },
                shared.Output{
                    Key: sdk.String("rem"),
                    ValueString: sdk.String("sit"),
                },
            },
            ResourceArn: "nobis",
            Status: shared.ResourceDeploymentStatusEnumFailed.ToPointer(),
            StatusMessage: sdk.String("veniam"),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.NotifyResourceDeploymentStatusChangeXAmzTargetEnumAwsProton20200720NotifyResourceDeploymentStatusChange,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyResourceDeploymentStatusChangeOutput != nil {
        // handle response
    }
}
```

## RejectEnvironmentAccountConnection

<p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

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
    res, err := s.SDK.RejectEnvironmentAccountConnection(ctx, operations.RejectEnvironmentAccountConnectionRequest{
        RejectEnvironmentAccountConnectionInput: shared.RejectEnvironmentAccountConnectionInput{
            ID: "457e1858-b6a8-49fb-a3a5-aa8e4824d0ab",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.RejectEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720RejectEnvironmentAccountConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```

## TagResource

<p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

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
        TagResourceInput: shared.TagResourceInput{
            ResourceArn: "repudiandae",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "blanditiis",
                },
                shared.Tag{
                    Key: "ex",
                    Value: "sed",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsProton20200720TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

<p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

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
        UntagResourceInput: shared.UntagResourceInput{
            ResourceArn: "reiciendis",
            TagKeys: []string{
                "harum",
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsProton20200720UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateAccountSettings

Update Proton settings that are used for multiple services in the Amazon Web Services account.

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
    res, err := s.SDK.UpdateAccountSettings(ctx, operations.UpdateAccountSettingsRequest{
        UpdateAccountSettingsInput: shared.UpdateAccountSettingsInput{
            DeletePipelineProvisioningRepository: sdk.Bool(false),
            PipelineCodebuildRoleArn: sdk.String("nam"),
            PipelineProvisioningRepository: &shared.RepositoryBranchInput{
                Branch: "tenetur",
                Name: "Patricia Farrell",
                Provider: shared.RepositoryProviderEnumGithubEnterprise,
            },
            PipelineServiceRoleArn: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.UpdateAccountSettingsXAmzTargetEnumAwsProton20200720UpdateAccountSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccountSettingsOutput != nil {
        // handle response
    }
}
```

## UpdateComponent

<p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

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
    res, err := s.SDK.UpdateComponent(ctx, operations.UpdateComponentRequest{
        UpdateComponentInput: shared.UpdateComponentInput{
            ClientToken: sdk.String("reprehenderit"),
            DeploymentType: shared.ComponentDeploymentUpdateTypeEnumCurrentVersion,
            Description: sdk.String("fuga"),
            Name: "Miss Hubert Hartmann",
            ServiceInstanceName: sdk.String("quasi"),
            ServiceName: sdk.String("atque"),
            ServiceSpec: sdk.String("reprehenderit"),
            TemplateFile: sdk.String("asperiores"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.UpdateComponentXAmzTargetEnumAwsProton20200720UpdateComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateComponentOutput != nil {
        // handle response
    }
}
```

## UpdateEnvironment

<p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

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
    res, err := s.SDK.UpdateEnvironment(ctx, operations.UpdateEnvironmentRequest{
        UpdateEnvironmentInput: shared.UpdateEnvironmentInput{
            CodebuildRoleArn: sdk.String("assumenda"),
            ComponentRoleArn: sdk.String("ea"),
            DeploymentType: shared.DeploymentUpdateTypeEnumMinorVersion,
            Description: sdk.String("error"),
            EnvironmentAccountConnectionID: sdk.String("officiis"),
            Name: "Tomas Mosciski",
            ProtonServiceRoleArn: sdk.String("ex"),
            ProvisioningRepository: &shared.RepositoryBranchInput{
                Branch: "maiores",
                Name: "Wilfred Mueller",
                Provider: shared.RepositoryProviderEnumBitbucket,
            },
            Spec: sdk.String("atque"),
            TemplateMajorVersion: sdk.String("atque"),
            TemplateMinorVersion: sdk.String("sunt"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.UpdateEnvironmentXAmzTargetEnumAwsProton20200720UpdateEnvironment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentOutput != nil {
        // handle response
    }
}
```

## UpdateEnvironmentAccountConnection

<p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

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
    res, err := s.SDK.UpdateEnvironmentAccountConnection(ctx, operations.UpdateEnvironmentAccountConnectionRequest{
        UpdateEnvironmentAccountConnectionInput: shared.UpdateEnvironmentAccountConnectionInput{
            CodebuildRoleArn: sdk.String("dicta"),
            ComponentRoleArn: sdk.String("accusantium"),
            ID: "12563f94-e29e-4973-a922-a57a15be3e06",
            RoleArn: sdk.String("ipsa"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.UpdateEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720UpdateEnvironmentAccountConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```

## UpdateEnvironmentTemplate

Update an environment template.

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
    res, err := s.SDK.UpdateEnvironmentTemplate(ctx, operations.UpdateEnvironmentTemplateRequest{
        UpdateEnvironmentTemplateInput: shared.UpdateEnvironmentTemplateInput{
            Description: sdk.String("necessitatibus"),
            DisplayName: sdk.String("ratione"),
            Name: "Kelvin Lehner",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.UpdateEnvironmentTemplateXAmzTargetEnumAwsProton20200720UpdateEnvironmentTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentTemplateOutput != nil {
        // handle response
    }
}
```

## UpdateEnvironmentTemplateVersion

Update a major or minor version of an environment template.

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
    res, err := s.SDK.UpdateEnvironmentTemplateVersion(ctx, operations.UpdateEnvironmentTemplateVersionRequest{
        UpdateEnvironmentTemplateVersionInput: shared.UpdateEnvironmentTemplateVersionInput{
            Description: sdk.String("voluptas"),
            MajorVersion: "alias",
            MinorVersion: "maiores",
            Status: shared.TemplateVersionStatusEnumPublished.ToPointer(),
            TemplateName: "dolores",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.UpdateEnvironmentTemplateVersionXAmzTargetEnumAwsProton20200720UpdateEnvironmentTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentTemplateVersionOutput != nil {
        // handle response
    }
}
```

## UpdateService

<p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

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
        UpdateServiceInput: shared.UpdateServiceInput{
            Description: sdk.String("omnis"),
            Name: "Minnie Jacobson",
            Spec: sdk.String("adipisci"),
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.UpdateServiceXAmzTargetEnumAwsProton20200720UpdateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceOutput != nil {
        // handle response
    }
}
```

## UpdateServiceInstance

<p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

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
    res, err := s.SDK.UpdateServiceInstance(ctx, operations.UpdateServiceInstanceRequest{
        UpdateServiceInstanceInput: shared.UpdateServiceInstanceInput{
            ClientToken: sdk.String("quis"),
            DeploymentType: shared.DeploymentUpdateTypeEnumCurrentVersion,
            Name: "Terrence Collier MD",
            ServiceName: "nostrum",
            Spec: sdk.String("mollitia"),
            TemplateMajorVersion: sdk.String("provident"),
            TemplateMinorVersion: sdk.String("possimus"),
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.UpdateServiceInstanceXAmzTargetEnumAwsProton20200720UpdateServiceInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceInstanceOutput != nil {
        // handle response
    }
}
```

## UpdateServicePipeline

<p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

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
    res, err := s.SDK.UpdateServicePipeline(ctx, operations.UpdateServicePipelineRequest{
        UpdateServicePipelineInput: shared.UpdateServicePipelineInput{
            DeploymentType: shared.DeploymentUpdateTypeEnumCurrentVersion,
            ServiceName: "nam",
            Spec: "earum",
            TemplateMajorVersion: sdk.String("officia"),
            TemplateMinorVersion: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.UpdateServicePipelineXAmzTargetEnumAwsProton20200720UpdateServicePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServicePipelineOutput != nil {
        // handle response
    }
}
```

## UpdateServiceSyncBlocker

Update the service sync blocker by resolving it.

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
    res, err := s.SDK.UpdateServiceSyncBlocker(ctx, operations.UpdateServiceSyncBlockerRequest{
        UpdateServiceSyncBlockerInput: shared.UpdateServiceSyncBlockerInput{
            ID: "1b4512c1-0326-448d-82f6-15199ebfd0e9",
            ResolvedReason: "maiores",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.UpdateServiceSyncBlockerXAmzTargetEnumAwsProton20200720UpdateServiceSyncBlocker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceSyncBlockerOutput != nil {
        // handle response
    }
}
```

## UpdateServiceSyncConfig

Update the Proton Ops config file.

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
    res, err := s.SDK.UpdateServiceSyncConfig(ctx, operations.UpdateServiceSyncConfigRequest{
        UpdateServiceSyncConfigInput: shared.UpdateServiceSyncConfigInput{
            Branch: "fuga",
            FilePath: "ratione",
            RepositoryName: "animi",
            RepositoryProvider: shared.RepositoryProviderEnumBitbucket,
            ServiceName: "nulla",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.UpdateServiceSyncConfigXAmzTargetEnumAwsProton20200720UpdateServiceSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceSyncConfigOutput != nil {
        // handle response
    }
}
```

## UpdateServiceTemplate

Update a service template.

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
    res, err := s.SDK.UpdateServiceTemplate(ctx, operations.UpdateServiceTemplateRequest{
        UpdateServiceTemplateInput: shared.UpdateServiceTemplateInput{
            Description: sdk.String("adipisci"),
            DisplayName: sdk.String("quasi"),
            Name: "Melba Stokes I",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.UpdateServiceTemplateXAmzTargetEnumAwsProton20200720UpdateServiceTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceTemplateOutput != nil {
        // handle response
    }
}
```

## UpdateServiceTemplateVersion

Update a major or minor version of a service template.

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
    res, err := s.SDK.UpdateServiceTemplateVersion(ctx, operations.UpdateServiceTemplateVersionRequest{
        UpdateServiceTemplateVersionInput: shared.UpdateServiceTemplateVersionInput{
            CompatibleEnvironmentTemplates: []shared.CompatibleEnvironmentTemplateInput{
                shared.CompatibleEnvironmentTemplateInput{
                    MajorVersion: "vel",
                    TemplateName: "architecto",
                },
                shared.CompatibleEnvironmentTemplateInput{
                    MajorVersion: "fugiat",
                    TemplateName: "doloremque",
                },
                shared.CompatibleEnvironmentTemplateInput{
                    MajorVersion: "dicta",
                    TemplateName: "odio",
                },
                shared.CompatibleEnvironmentTemplateInput{
                    MajorVersion: "tempora",
                    TemplateName: "esse",
                },
            },
            Description: sdk.String("ex"),
            MajorVersion: "consectetur",
            MinorVersion: "aliquid",
            Status: shared.TemplateVersionStatusEnumRegistrationInProgress.ToPointer(),
            SupportedComponentSources: []shared.ServiceTemplateSupportedComponentSourceTypeEnum{
                shared.ServiceTemplateSupportedComponentSourceTypeEnumDirectlyDefined,
                shared.ServiceTemplateSupportedComponentSourceTypeEnumDirectlyDefined,
                shared.ServiceTemplateSupportedComponentSourceTypeEnumDirectlyDefined,
            },
            TemplateName: "sunt",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.UpdateServiceTemplateVersionXAmzTargetEnumAwsProton20200720UpdateServiceTemplateVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceTemplateVersionOutput != nil {
        // handle response
    }
}
```

## UpdateTemplateSyncConfig

Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.

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
    res, err := s.SDK.UpdateTemplateSyncConfig(ctx, operations.UpdateTemplateSyncConfigRequest{
        UpdateTemplateSyncConfigInput: shared.UpdateTemplateSyncConfigInput{
            Branch: "perferendis",
            RepositoryName: "eum",
            RepositoryProvider: shared.RepositoryProviderEnumGithubEnterprise,
            Subdirectory: sdk.String("iste"),
            TemplateName: "id",
            TemplateType: shared.TemplateTypeEnumEnvironment,
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.UpdateTemplateSyncConfigXAmzTargetEnumAwsProton20200720UpdateTemplateSyncConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTemplateSyncConfigOutput != nil {
        // handle response
    }
}
```
