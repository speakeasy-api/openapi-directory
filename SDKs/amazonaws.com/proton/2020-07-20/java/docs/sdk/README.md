# SDK

## Overview

<p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton service.</p> <p>The documentation for each action shows the Query API request parameters and the XML response.</p> <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User Guide</a>.</p> <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in turn, select from the available service templates to automate their application or service deployments.</p> <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need permissions to use all of the listed API operations.</p> <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To monitor their applications that are running on Proton, developers need permissions to the service <i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i> API operations and the service instance <i>list</i> and <i>update</i> API operations.</p> <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p> <p> <b>Ensuring Idempotency</b> </p> <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are complete. Operations might also time out or encounter other server issues before they're complete, even if the request already returned a result. This might make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation occurs multiple times. This means that you might create more resources than you intended.</p> <p> <i>Idempotency</i> ensures that an API request action completes no more than one time. With an idempotent request, if the original request action completes successfully, any subsequent retries complete successfully without performing any further actions. However, the result might contain updated information, such as the current creation status.</p> <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p> <p> <b>Idempotent create APIs with a client token</b> </p> <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions, specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically provided by SDKs.</p> <p>Given a request action that has succeeded:</p> <p>If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is created.</p> <p>If the original resource is deleted and you retry the request, a new resource is created.</p> <p>Idempotent create APIs with a client token:</p> <ul> <li> <p>CreateEnvironmentTemplateVersion</p> </li> <li> <p>CreateServiceTemplateVersion</p> </li> <li> <p>CreateEnvironmentAccountConnection</p> </li> </ul> <p> <b>Idempotent create APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been modified, the retry succeeds without performing any further actions other than returning the original resource detail data in the response.</p> <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p> <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p> <p>Idempotent create APIs:</p> <ul> <li> <p>CreateEnvironmentTemplate</p> </li> <li> <p>CreateServiceTemplate</p> </li> <li> <p>CreateEnvironment</p> </li> <li> <p>CreateService</p> </li> </ul> <p> <b>Idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response.</p> <p>If you retry and the resource doesn't exist, the response is empty.</p> <p>In both cases, the retry succeeds.</p> <p>Idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironmentTemplate</p> </li> <li> <p>DeleteEnvironmentTemplateVersion</p> </li> <li> <p>DeleteServiceTemplate</p> </li> <li> <p>DeleteServiceTemplateVersion</p> </li> <li> <p>DeleteEnvironmentAccountConnection</p> </li> </ul> <p> <b>Asynchronous idempotent delete APIs</b> </p> <p>Given a request action that has succeeded:</p> <p>If you retry the request with an API from this group, if the original request delete operation status is <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any further actions.</p> <p>If the original request delete operation is complete, a retry returns an empty response.</p> <p>Asynchronous idempotent delete APIs:</p> <ul> <li> <p>DeleteEnvironment</p> </li> <li> <p>DeleteService</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/proton/>
### Available Operations

* [acceptEnvironmentAccountConnection](#acceptenvironmentaccountconnection) - <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [cancelComponentDeployment](#cancelcomponentdeployment) - <p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [cancelEnvironmentDeployment](#cancelenvironmentdeployment) - <p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* [cancelServiceInstanceDeployment](#cancelserviceinstancedeployment) - <p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* [cancelServicePipelineDeployment](#cancelservicepipelinedeployment) - <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>
* [createComponent](#createcomponent) - <p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [createEnvironment](#createenvironment) - <p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>
* [createEnvironmentAccountConnection](#createenvironmentaccountconnection) - <p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [createEnvironmentTemplate](#createenvironmenttemplate) - <p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>
* [createEnvironmentTemplateVersion](#createenvironmenttemplateversion) - Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
* [createRepository](#createrepository) - <p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
* [createService](#createservice) - Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.
* [createServiceInstance](#createserviceinstance) - Create a service instance.
* [createServiceSyncConfig](#createservicesyncconfig) - Create the Proton Ops configuration file.
* [createServiceTemplate](#createservicetemplate) - Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.
* [createServiceTemplateVersion](#createservicetemplateversion) - Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.
* [createTemplateSyncConfig](#createtemplatesyncconfig) - <p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>
* [deleteComponent](#deletecomponent) - <p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [deleteEnvironment](#deleteenvironment) - Delete an environment.
* [deleteEnvironmentAccountConnection](#deleteenvironmentaccountconnection) - <p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [deleteEnvironmentTemplate](#deleteenvironmenttemplate) - If no other major or minor versions of an environment template exist, delete the environment template.
* [deleteEnvironmentTemplateVersion](#deleteenvironmenttemplateversion) - <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>
* [deleteRepository](#deleterepository) - De-register and unlink your repository.
* [deleteService](#deleteservice) - <p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
* [deleteServiceSyncConfig](#deleteservicesyncconfig) - Delete the Proton Ops file.
* [deleteServiceTemplate](#deleteservicetemplate) - If no other major or minor versions of the service template exist, delete the service template.
* [deleteServiceTemplateVersion](#deleteservicetemplateversion) - <p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>
* [deleteTemplateSyncConfig](#deletetemplatesyncconfig) - Delete a template sync configuration.
* [getAccountSettings](#getaccountsettings) - Get detail data for Proton account-wide settings.
* [getComponent](#getcomponent) - <p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [getEnvironment](#getenvironment) - Get detailed data for an environment.
* [getEnvironmentAccountConnection](#getenvironmentaccountconnection) - <p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [getEnvironmentTemplate](#getenvironmenttemplate) - Get detailed data for an environment template.
* [getEnvironmentTemplateVersion](#getenvironmenttemplateversion) - Get detailed data for a major or minor version of an environment template.
* [getRepository](#getrepository) - Get detail data for a linked repository.
* [getRepositorySyncStatus](#getrepositorysyncstatus) - <p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>
* [getResourcesSummary](#getresourcessummary) - <p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>
* [getService](#getservice) - Get detailed data for a service.
* [getServiceInstance](#getserviceinstance) - Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.
* [getServiceInstanceSyncStatus](#getserviceinstancesyncstatus) - Get the status of the synced service instance.
* [getServiceSyncBlockerSummary](#getservicesyncblockersummary) - Get detailed data for the service sync blocker summary.
* [getServiceSyncConfig](#getservicesyncconfig) - Get detailed information for the service sync configuration.
* [getServiceTemplate](#getservicetemplate) - Get detailed data for a service template.
* [getServiceTemplateVersion](#getservicetemplateversion) - Get detailed data for a major or minor version of a service template.
* [getTemplateSyncConfig](#gettemplatesyncconfig) - Get detail data for a template sync configuration.
* [getTemplateSyncStatus](#gettemplatesyncstatus) - Get the status of a template sync.
* [listComponentOutputs](#listcomponentoutputs) - <p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [listComponentProvisionedResources](#listcomponentprovisionedresources) - <p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [listComponents](#listcomponents) - <p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [listEnvironmentAccountConnections](#listenvironmentaccountconnections) - <p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [listEnvironmentOutputs](#listenvironmentoutputs) - List the infrastructure as code outputs for your environment.
* [listEnvironmentProvisionedResources](#listenvironmentprovisionedresources) - List the provisioned resources for your environment.
* [listEnvironmentTemplateVersions](#listenvironmenttemplateversions) - List major or minor versions of an environment template with detail data.
* [listEnvironmentTemplates](#listenvironmenttemplates) - List environment templates.
* [listEnvironments](#listenvironments) - List environments with detail data summaries.
* [listRepositories](#listrepositories) - List linked repositories with detail data.
* [listRepositorySyncDefinitions](#listrepositorysyncdefinitions) - List repository sync definitions with detail data.
* [listServiceInstanceOutputs](#listserviceinstanceoutputs) - Get a list service of instance Infrastructure as Code (IaC) outputs.
* [listServiceInstanceProvisionedResources](#listserviceinstanceprovisionedresources) - List provisioned resources for a service instance with details.
* [listServiceInstances](#listserviceinstances) - List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.
* [listServicePipelineOutputs](#listservicepipelineoutputs) - Get a list of service pipeline Infrastructure as Code (IaC) outputs.
* [listServicePipelineProvisionedResources](#listservicepipelineprovisionedresources) - List provisioned resources for a service and pipeline with details.
* [listServiceTemplateVersions](#listservicetemplateversions) - List major or minor versions of a service template with detail data.
* [listServiceTemplates](#listservicetemplates) - List service templates with detail data.
* [listServices](#listservices) - List services with summaries of detail data.
* [listTagsForResource](#listtagsforresource) - List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.
* [notifyResourceDeploymentStatusChange](#notifyresourcedeploymentstatuschange) - <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
* [rejectEnvironmentAccountConnection](#rejectenvironmentaccountconnection) - <p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [tagResource](#tagresource) - <p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
* [untagResource](#untagresource) - <p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>
* [updateAccountSettings](#updateaccountsettings) - Update Proton settings that are used for multiple services in the Amazon Web Services account.
* [updateComponent](#updatecomponent) - <p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
* [updateEnvironment](#updateenvironment) - <p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
* [updateEnvironmentAccountConnection](#updateenvironmentaccountconnection) - <p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>
* [updateEnvironmentTemplate](#updateenvironmenttemplate) - Update an environment template.
* [updateEnvironmentTemplateVersion](#updateenvironmenttemplateversion) - Update a major or minor version of an environment template.
* [updateService](#updateservice) - <p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
* [updateServiceInstance](#updateserviceinstance) - <p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>
* [updateServicePipeline](#updateservicepipeline) - <p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>
* [updateServiceSyncBlocker](#updateservicesyncblocker) - Update the service sync blocker by resolving it.
* [updateServiceSyncConfig](#updateservicesyncconfig) - Update the Proton Ops config file.
* [updateServiceTemplate](#updateservicetemplate) - Update a service template.
* [updateServiceTemplateVersion](#updateservicetemplateversion) - Update a major or minor version of a service template.
* [updateTemplateSyncConfig](#updatetemplatesyncconfig) - Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.

## acceptEnvironmentAccountConnection

<p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptEnvironmentAccountConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptEnvironmentAccountConnectionRequest req = new AcceptEnvironmentAccountConnectionRequest(                new AcceptEnvironmentAccountConnectionInput("deserunt");, AcceptEnvironmentAccountConnectionXAmzTargetEnum.AWS_PROTON20200720_ACCEPT_ENVIRONMENT_ACCOUNT_CONNECTION) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AcceptEnvironmentAccountConnectionResponse res = sdk.sdk.acceptEnvironmentAccountConnection(req);

            if (res.acceptEnvironmentAccountConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelComponentDeployment

<p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelComponentDeploymentRequest;
import org.openapis.openapi.models.operations.CancelComponentDeploymentResponse;
import org.openapis.openapi.models.operations.CancelComponentDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelComponentDeploymentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelComponentDeploymentRequest req = new CancelComponentDeploymentRequest(                new CancelComponentDeploymentInput("molestiae");, CancelComponentDeploymentXAmzTargetEnum.AWS_PROTON20200720_CANCEL_COMPONENT_DEPLOYMENT) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CancelComponentDeploymentResponse res = sdk.sdk.cancelComponentDeployment(req);

            if (res.cancelComponentDeploymentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelEnvironmentDeployment

<p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelEnvironmentDeploymentRequest;
import org.openapis.openapi.models.operations.CancelEnvironmentDeploymentResponse;
import org.openapis.openapi.models.operations.CancelEnvironmentDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelEnvironmentDeploymentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelEnvironmentDeploymentRequest req = new CancelEnvironmentDeploymentRequest(                new CancelEnvironmentDeploymentInput("ab");, CancelEnvironmentDeploymentXAmzTargetEnum.AWS_PROTON20200720_CANCEL_ENVIRONMENT_DEPLOYMENT) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            CancelEnvironmentDeploymentResponse res = sdk.sdk.cancelEnvironmentDeployment(req);

            if (res.cancelEnvironmentDeploymentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelServiceInstanceDeployment

<p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelServiceInstanceDeploymentRequest;
import org.openapis.openapi.models.operations.CancelServiceInstanceDeploymentResponse;
import org.openapis.openapi.models.operations.CancelServiceInstanceDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelServiceInstanceDeploymentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelServiceInstanceDeploymentRequest req = new CancelServiceInstanceDeploymentRequest(                new CancelServiceInstanceDeploymentInput("odit", "at");, CancelServiceInstanceDeploymentXAmzTargetEnum.AWS_PROTON20200720_CANCEL_SERVICE_INSTANCE_DEPLOYMENT) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            CancelServiceInstanceDeploymentResponse res = sdk.sdk.cancelServiceInstanceDeployment(req);

            if (res.cancelServiceInstanceDeploymentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelServicePipelineDeployment

<p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelServicePipelineDeploymentRequest;
import org.openapis.openapi.models.operations.CancelServicePipelineDeploymentResponse;
import org.openapis.openapi.models.operations.CancelServicePipelineDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelServicePipelineDeploymentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelServicePipelineDeploymentRequest req = new CancelServicePipelineDeploymentRequest(                new CancelServicePipelineDeploymentInput("dolorum");, CancelServicePipelineDeploymentXAmzTargetEnum.AWS_PROTON20200720_CANCEL_SERVICE_PIPELINE_DEPLOYMENT) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            CancelServicePipelineDeploymentResponse res = sdk.sdk.cancelServicePipelineDeployment(req);

            if (res.cancelServicePipelineDeploymentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createComponent

<p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComponentRequest;
import org.openapis.openapi.models.operations.CreateComponentResponse;
import org.openapis.openapi.models.operations.CreateComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateComponentInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComponentRequest req = new CreateComponentRequest(                new CreateComponentInput("totam", "beatae", "commodi") {{
                                clientToken = "molestiae";
                                description = "modi";
                                environmentName = "qui";
                                serviceInstanceName = "impedit";
                                serviceName = "cum";
                                serviceSpec = "esse";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perferendis", "ad") {{
                                        key = "excepturi";
                                        value = "aspernatur";
                                    }}),
                                }};
                            }};, CreateComponentXAmzTargetEnum.AWS_PROTON20200720_CREATE_COMPONENT) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            CreateComponentResponse res = sdk.sdk.createComponent(req);

            if (res.createComponentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironment

<p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.operations.CreateEnvironmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentInput;
import org.openapis.openapi.models.shared.RepositoryBranchInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest(                new CreateEnvironmentInput("fuga", "in", "corporis", "iste") {{
                                codebuildRoleArn = "iure";
                                componentRoleArn = "saepe";
                                description = "quidem";
                                environmentAccountConnectionId = "architecto";
                                protonServiceRoleArn = "ipsa";
                                provisioningRepository = new RepositoryBranchInput("reiciendis", "est", RepositoryProviderEnum.GITHUB_ENTERPRISE);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("corporis", "explicabo") {{
                                        key = "dolores";
                                        value = "dolorem";
                                    }}),
                                    add(new Tag("omnis", "nemo") {{
                                        key = "nobis";
                                        value = "enim";
                                    }}),
                                    add(new Tag("accusantium", "iure") {{
                                        key = "minima";
                                        value = "excepturi";
                                    }}),
                                }};
                                templateMinorVersion = "culpa";
                            }};, CreateEnvironmentXAmzTargetEnum.AWS_PROTON20200720_CREATE_ENVIRONMENT) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateEnvironmentResponse res = sdk.sdk.createEnvironment(req);

            if (res.createEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironmentAccountConnection

<p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.operations.CreateEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentAccountConnectionInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentAccountConnectionRequest req = new CreateEnvironmentAccountConnectionRequest(                new CreateEnvironmentAccountConnectionInput("mollitia", "occaecati") {{
                                clientToken = "numquam";
                                codebuildRoleArn = "commodi";
                                componentRoleArn = "quam";
                                roleArn = "molestiae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quis", "vitae") {{
                                        key = "error";
                                        value = "quia";
                                    }}),
                                }};
                            }};, CreateEnvironmentAccountConnectionXAmzTargetEnum.AWS_PROTON20200720_CREATE_ENVIRONMENT_ACCOUNT_CONNECTION) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            CreateEnvironmentAccountConnectionResponse res = sdk.sdk.createEnvironmentAccountConnection(req);

            if (res.createEnvironmentAccountConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironmentTemplate

<p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentTemplateRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentTemplateResponse;
import org.openapis.openapi.models.operations.CreateEnvironmentTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentTemplateInput;
import org.openapis.openapi.models.shared.ProvisioningEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentTemplateRequest req = new CreateEnvironmentTemplateRequest(                new CreateEnvironmentTemplateInput("id") {{
                                description = "possimus";
                                displayName = "aut";
                                encryptionKey = "quasi";
                                provisioning = ProvisioningEnum.CUSTOMER_MANAGED;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quasi", "reiciendis") {{
                                        key = "temporibus";
                                        value = "laborum";
                                    }}),
                                    add(new Tag("nihil", "praesentium") {{
                                        key = "voluptatibus";
                                        value = "vero";
                                    }}),
                                    add(new Tag("omnis", "voluptate") {{
                                        key = "voluptatibus";
                                        value = "ipsa";
                                    }}),
                                }};
                            }};, CreateEnvironmentTemplateXAmzTargetEnum.AWS_PROTON20200720_CREATE_ENVIRONMENT_TEMPLATE) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateEnvironmentTemplateResponse res = sdk.sdk.createEnvironmentTemplate(req);

            if (res.createEnvironmentTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironmentTemplateVersion

Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentTemplateVersionRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentTemplateVersionResponse;
import org.openapis.openapi.models.operations.CreateEnvironmentTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentTemplateVersionInput;
import org.openapis.openapi.models.shared.S3ObjectSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TemplateVersionSourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentTemplateVersionRequest req = new CreateEnvironmentTemplateVersionRequest(                new CreateEnvironmentTemplateVersionInput(                new TemplateVersionSourceInput() {{
                                                s3 = new S3ObjectSource("dolore", "iusto");;
                                            }};, "dicta") {{
                                clientToken = "harum";
                                description = "enim";
                                majorVersion = "accusamus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsum", "quidem") {{
                                        key = "repudiandae";
                                        value = "quae";
                                    }}),
                                    add(new Tag("pariatur", "modi") {{
                                        key = "molestias";
                                        value = "excepturi";
                                    }}),
                                }};
                            }};, CreateEnvironmentTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_CREATE_ENVIRONMENT_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
            }};            

            CreateEnvironmentTemplateVersionResponse res = sdk.sdk.createEnvironmentTemplateVersion(req);

            if (res.createEnvironmentTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRepository

<p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRepositoryRequest;
import org.openapis.openapi.models.operations.CreateRepositoryResponse;
import org.openapis.openapi.models.operations.CreateRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRepositoryInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRepositoryRequest req = new CreateRepositoryRequest(                new CreateRepositoryInput("incidunt", "enim", RepositoryProviderEnum.GITHUB) {{
                                encryptionKey = "est";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("distinctio", "quibusdam") {{
                                        key = "explicabo";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("qui", "aliquid") {{
                                        key = "labore";
                                        value = "modi";
                                    }}),
                                    add(new Tag("perferendis", "magni") {{
                                        key = "cupiditate";
                                        value = "quos";
                                    }}),
                                    add(new Tag("alias", "fugit") {{
                                        key = "assumenda";
                                        value = "ipsam";
                                    }}),
                                }};
                            }};, CreateRepositoryXAmzTargetEnum.AWS_PROTON20200720_CREATE_REPOSITORY) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            CreateRepositoryResponse res = sdk.sdk.createRepository(req);

            if (res.createRepositoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateServiceInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceRequest req = new CreateServiceRequest(                new CreateServiceInput("non", "eligendi", "sint", "aliquid") {{
                                branchName = "provident";
                                description = "necessitatibus";
                                repositoryConnectionArn = "sint";
                                repositoryId = "officia";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolorum", "in") {{
                                        key = "debitis";
                                        value = "a";
                                    }}),
                                }};
                                templateMinorVersion = "in";
                            }};, CreateServiceXAmzTargetEnum.AWS_PROTON20200720_CREATE_SERVICE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req);

            if (res.createServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceInstance

Create a service instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceInstanceRequest;
import org.openapis.openapi.models.operations.CreateServiceInstanceResponse;
import org.openapis.openapi.models.operations.CreateServiceInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateServiceInstanceInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceInstanceRequest req = new CreateServiceInstanceRequest(                new CreateServiceInstanceInput("aliquid", "laborum", "accusamus") {{
                                clientToken = "non";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("delectus", "quidem") {{
                                        key = "enim";
                                        value = "accusamus";
                                    }}),
                                    add(new Tag("id", "blanditiis") {{
                                        key = "provident";
                                        value = "nam";
                                    }}),
                                    add(new Tag("amet", "deserunt") {{
                                        key = "deleniti";
                                        value = "sapiente";
                                    }}),
                                }};
                                templateMajorVersion = "nisi";
                                templateMinorVersion = "vel";
                            }};, CreateServiceInstanceXAmzTargetEnum.AWS_PROTON20200720_CREATE_SERVICE_INSTANCE) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "molestiae";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "distinctio";
            }};            

            CreateServiceInstanceResponse res = sdk.sdk.createServiceInstance(req);

            if (res.createServiceInstanceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceSyncConfig

Create the Proton Ops configuration file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceSyncConfigRequest;
import org.openapis.openapi.models.operations.CreateServiceSyncConfigResponse;
import org.openapis.openapi.models.operations.CreateServiceSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateServiceSyncConfigInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceSyncConfigRequest req = new CreateServiceSyncConfigRequest(                new CreateServiceSyncConfigInput("labore", "labore", "suscipit", RepositoryProviderEnum.GITHUB_ENTERPRISE, "nobis");, CreateServiceSyncConfigXAmzTargetEnum.AWS_PROTON20200720_CREATE_SERVICE_SYNC_CONFIG) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateServiceSyncConfigResponse res = sdk.sdk.createServiceSyncConfig(req);

            if (res.createServiceSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceTemplate

Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceTemplateRequest;
import org.openapis.openapi.models.operations.CreateServiceTemplateResponse;
import org.openapis.openapi.models.operations.CreateServiceTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateServiceTemplateInput;
import org.openapis.openapi.models.shared.ProvisioningEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceTemplateRequest req = new CreateServiceTemplateRequest(                new CreateServiceTemplateInput("provident") {{
                                description = "quos";
                                displayName = "sint";
                                encryptionKey = "accusantium";
                                pipelineProvisioning = ProvisioningEnum.CUSTOMER_MANAGED;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ad", "eum") {{
                                        key = "reiciendis";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag("odit", "nemo") {{
                                        key = "dolor";
                                        value = "necessitatibus";
                                    }}),
                                    add(new Tag("doloribus", "debitis") {{
                                        key = "quasi";
                                        value = "iure";
                                    }}),
                                }};
                            }};, CreateServiceTemplateXAmzTargetEnum.AWS_PROTON20200720_CREATE_SERVICE_TEMPLATE) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateServiceTemplateResponse res = sdk.sdk.createServiceTemplate(req);

            if (res.createServiceTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceTemplateVersion

Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceTemplateVersionRequest;
import org.openapis.openapi.models.operations.CreateServiceTemplateVersionResponse;
import org.openapis.openapi.models.operations.CreateServiceTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CompatibleEnvironmentTemplateInput;
import org.openapis.openapi.models.shared.CreateServiceTemplateVersionInput;
import org.openapis.openapi.models.shared.S3ObjectSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTemplateSupportedComponentSourceTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TemplateVersionSourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServiceTemplateVersionRequest req = new CreateServiceTemplateVersionRequest(                new CreateServiceTemplateVersionInput(                new org.openapis.openapi.models.shared.CompatibleEnvironmentTemplateInput[]{{
                                                add(new CompatibleEnvironmentTemplateInput("repellat", "quibusdam") {{
                                                    majorVersion = "expedita";
                                                    templateName = "nihil";
                                                }}),
                                                add(new CompatibleEnvironmentTemplateInput("pariatur", "accusantium") {{
                                                    majorVersion = "sed";
                                                    templateName = "saepe";
                                                }}),
                                            }},                 new TemplateVersionSourceInput() {{
                                                s3 = new S3ObjectSource("consequuntur", "praesentium");;
                                            }};, "natus") {{
                                clientToken = "magni";
                                description = "sunt";
                                majorVersion = "quo";
                                supportedComponentSources = new org.openapis.openapi.models.shared.ServiceTemplateSupportedComponentSourceTypeEnum[]{{
                                    add(ServiceTemplateSupportedComponentSourceTypeEnum.DIRECTLY_DEFINED),
                                    add(ServiceTemplateSupportedComponentSourceTypeEnum.DIRECTLY_DEFINED),
                                    add(ServiceTemplateSupportedComponentSourceTypeEnum.DIRECTLY_DEFINED),
                                    add(ServiceTemplateSupportedComponentSourceTypeEnum.DIRECTLY_DEFINED),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("excepturi", "odit") {{
                                        key = "maxime";
                                        value = "ea";
                                    }}),
                                    add(new Tag("ab", "maiores") {{
                                        key = "ea";
                                        value = "accusantium";
                                    }}),
                                    add(new Tag("voluptate", "autem") {{
                                        key = "quidem";
                                        value = "ipsam";
                                    }}),
                                    add(new Tag("pariatur", "nemo") {{
                                        key = "nam";
                                        value = "eaque";
                                    }}),
                                }};
                            }};, CreateServiceTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_CREATE_SERVICE_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateServiceTemplateVersionResponse res = sdk.sdk.createServiceTemplateVersion(req);

            if (res.createServiceTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTemplateSyncConfig

<p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTemplateSyncConfigRequest;
import org.openapis.openapi.models.operations.CreateTemplateSyncConfigResponse;
import org.openapis.openapi.models.operations.CreateTemplateSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTemplateSyncConfigInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTemplateSyncConfigRequest req = new CreateTemplateSyncConfigRequest(                new CreateTemplateSyncConfigInput("libero", "nobis", RepositoryProviderEnum.GITHUB, "quis", TemplateTypeEnum.SERVICE) {{
                                subdirectory = "dignissimos";
                            }};, CreateTemplateSyncConfigXAmzTargetEnum.AWS_PROTON20200720_CREATE_TEMPLATE_SYNC_CONFIG) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            CreateTemplateSyncConfigResponse res = sdk.sdk.createTemplateSyncConfig(req);

            if (res.createTemplateSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteComponent

<p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteComponentRequest;
import org.openapis.openapi.models.operations.DeleteComponentResponse;
import org.openapis.openapi.models.operations.DeleteComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteComponentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteComponentRequest req = new DeleteComponentRequest(                new DeleteComponentInput("dolor");, DeleteComponentXAmzTargetEnum.AWS_PROTON20200720_DELETE_COMPONENT) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            DeleteComponentResponse res = sdk.sdk.deleteComponent(req);

            if (res.deleteComponentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironment

Delete an environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;
import org.openapis.openapi.models.operations.DeleteEnvironmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEnvironmentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest(                new DeleteEnvironmentInput("porro");, DeleteEnvironmentXAmzTargetEnum.AWS_PROTON20200720_DELETE_ENVIRONMENT) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
            }};            

            DeleteEnvironmentResponse res = sdk.sdk.deleteEnvironment(req);

            if (res.deleteEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironmentAccountConnection

<p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.operations.DeleteEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEnvironmentAccountConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentAccountConnectionRequest req = new DeleteEnvironmentAccountConnectionRequest(                new DeleteEnvironmentAccountConnectionInput("earum");, DeleteEnvironmentAccountConnectionXAmzTargetEnum.AWS_PROTON20200720_DELETE_ENVIRONMENT_ACCOUNT_CONNECTION) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteEnvironmentAccountConnectionResponse res = sdk.sdk.deleteEnvironmentAccountConnection(req);

            if (res.deleteEnvironmentAccountConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironmentTemplate

If no other major or minor versions of an environment template exist, delete the environment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentTemplateRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentTemplateResponse;
import org.openapis.openapi.models.operations.DeleteEnvironmentTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEnvironmentTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentTemplateRequest req = new DeleteEnvironmentTemplateRequest(                new DeleteEnvironmentTemplateInput("delectus");, DeleteEnvironmentTemplateXAmzTargetEnum.AWS_PROTON20200720_DELETE_ENVIRONMENT_TEMPLATE) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            DeleteEnvironmentTemplateResponse res = sdk.sdk.deleteEnvironmentTemplate(req);

            if (res.deleteEnvironmentTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironmentTemplateVersion

<p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentTemplateVersionRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentTemplateVersionResponse;
import org.openapis.openapi.models.operations.DeleteEnvironmentTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEnvironmentTemplateVersionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentTemplateVersionRequest req = new DeleteEnvironmentTemplateVersionRequest(                new DeleteEnvironmentTemplateVersionInput("hic", "excepturi", "cum");, DeleteEnvironmentTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_DELETE_ENVIRONMENT_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteEnvironmentTemplateVersionResponse res = sdk.sdk.deleteEnvironmentTemplateVersion(req);

            if (res.deleteEnvironmentTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepository

De-register and unlink your repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryResponse;
import org.openapis.openapi.models.operations.DeleteRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRepositoryInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRepositoryRequest req = new DeleteRepositoryRequest(                new DeleteRepositoryInput("ipsa", RepositoryProviderEnum.GITHUB_ENTERPRISE);, DeleteRepositoryXAmzTargetEnum.AWS_PROTON20200720_DELETE_REPOSITORY) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteRepositoryResponse res = sdk.sdk.deleteRepository(req);

            if (res.deleteRepositoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

<p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest(                new DeleteServiceInput("atque");, DeleteServiceXAmzTargetEnum.AWS_PROTON20200720_DELETE_SERVICE) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteServiceResponse res = sdk.sdk.deleteService(req);

            if (res.deleteServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceSyncConfig

Delete the Proton Ops file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceSyncConfigRequest;
import org.openapis.openapi.models.operations.DeleteServiceSyncConfigResponse;
import org.openapis.openapi.models.operations.DeleteServiceSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceSyncConfigInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceSyncConfigRequest req = new DeleteServiceSyncConfigRequest(                new DeleteServiceSyncConfigInput("deleniti");, DeleteServiceSyncConfigXAmzTargetEnum.AWS_PROTON20200720_DELETE_SERVICE_SYNC_CONFIG) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteServiceSyncConfigResponse res = sdk.sdk.deleteServiceSyncConfig(req);

            if (res.deleteServiceSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceTemplate

If no other major or minor versions of the service template exist, delete the service template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceTemplateRequest;
import org.openapis.openapi.models.operations.DeleteServiceTemplateResponse;
import org.openapis.openapi.models.operations.DeleteServiceTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceTemplateRequest req = new DeleteServiceTemplateRequest(                new DeleteServiceTemplateInput("saepe");, DeleteServiceTemplateXAmzTargetEnum.AWS_PROTON20200720_DELETE_SERVICE_TEMPLATE) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "optio";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "ad";
            }};            

            DeleteServiceTemplateResponse res = sdk.sdk.deleteServiceTemplate(req);

            if (res.deleteServiceTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServiceTemplateVersion

<p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceTemplateVersionRequest;
import org.openapis.openapi.models.operations.DeleteServiceTemplateVersionResponse;
import org.openapis.openapi.models.operations.DeleteServiceTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServiceTemplateVersionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServiceTemplateVersionRequest req = new DeleteServiceTemplateVersionRequest(                new DeleteServiceTemplateVersionInput("suscipit", "deserunt", "provident");, DeleteServiceTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_DELETE_SERVICE_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "totam";
                xAmzDate = "similique";
                xAmzSecurityToken = "alias";
                xAmzSignature = "at";
                xAmzSignedHeaders = "quaerat";
            }};            

            DeleteServiceTemplateVersionResponse res = sdk.sdk.deleteServiceTemplateVersion(req);

            if (res.deleteServiceTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTemplateSyncConfig

Delete a template sync configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTemplateSyncConfigRequest;
import org.openapis.openapi.models.operations.DeleteTemplateSyncConfigResponse;
import org.openapis.openapi.models.operations.DeleteTemplateSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTemplateSyncConfigInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTemplateSyncConfigRequest req = new DeleteTemplateSyncConfigRequest(                new DeleteTemplateSyncConfigInput("vel", TemplateTypeEnum.SERVICE);, DeleteTemplateSyncConfigXAmzTargetEnum.AWS_PROTON20200720_DELETE_TEMPLATE_SYNC_CONFIG) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            DeleteTemplateSyncConfigResponse res = sdk.sdk.deleteTemplateSyncConfig(req);

            if (res.deleteTemplateSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountSettings

Get detail data for Proton account-wide settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountSettingsRequest;
import org.openapis.openapi.models.operations.GetAccountSettingsResponse;
import org.openapis.openapi.models.operations.GetAccountSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountSettingsRequest req = new GetAccountSettingsRequest(                new java.util.HashMap<String, Object>() {{
                                put("tenetur", "amet");
                                put("tempore", "accusamus");
                                put("numquam", "enim");
                                put("dolorem", "sapiente");
                            }}, GetAccountSettingsXAmzTargetEnum.AWS_PROTON20200720_GET_ACCOUNT_SETTINGS) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            GetAccountSettingsResponse res = sdk.sdk.getAccountSettings(req);

            if (res.getAccountSettingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComponent

<p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComponentRequest;
import org.openapis.openapi.models.operations.GetComponentResponse;
import org.openapis.openapi.models.operations.GetComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetComponentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComponentRequest req = new GetComponentRequest(                new GetComponentInput("voluptas");, GetComponentXAmzTargetEnum.AWS_PROTON20200720_GET_COMPONENT) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
            }};            

            GetComponentResponse res = sdk.sdk.getComponent(req);

            if (res.getComponentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironment

Get detailed data for an environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentRequest;
import org.openapis.openapi.models.operations.GetEnvironmentResponse;
import org.openapis.openapi.models.operations.GetEnvironmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEnvironmentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnvironmentRequest req = new GetEnvironmentRequest(                new GetEnvironmentInput("soluta");, GetEnvironmentXAmzTargetEnum.AWS_PROTON20200720_GET_ENVIRONMENT) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            GetEnvironmentResponse res = sdk.sdk.getEnvironment(req);

            if (res.getEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironmentAccountConnection

<p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.GetEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.operations.GetEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEnvironmentAccountConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnvironmentAccountConnectionRequest req = new GetEnvironmentAccountConnectionRequest(                new GetEnvironmentAccountConnectionInput("aliquid");, GetEnvironmentAccountConnectionXAmzTargetEnum.AWS_PROTON20200720_GET_ENVIRONMENT_ACCOUNT_CONNECTION) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "temporibus";
                xAmzDate = "qui";
                xAmzSecurityToken = "neque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "magni";
            }};            

            GetEnvironmentAccountConnectionResponse res = sdk.sdk.getEnvironmentAccountConnection(req);

            if (res.getEnvironmentAccountConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironmentTemplate

Get detailed data for an environment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentTemplateRequest;
import org.openapis.openapi.models.operations.GetEnvironmentTemplateResponse;
import org.openapis.openapi.models.operations.GetEnvironmentTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEnvironmentTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnvironmentTemplateRequest req = new GetEnvironmentTemplateRequest(                new GetEnvironmentTemplateInput("sunt");, GetEnvironmentTemplateXAmzTargetEnum.AWS_PROTON20200720_GET_ENVIRONMENT_TEMPLATE) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            GetEnvironmentTemplateResponse res = sdk.sdk.getEnvironmentTemplate(req);

            if (res.getEnvironmentTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironmentTemplateVersion

Get detailed data for a major or minor version of an environment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentTemplateVersionRequest;
import org.openapis.openapi.models.operations.GetEnvironmentTemplateVersionResponse;
import org.openapis.openapi.models.operations.GetEnvironmentTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEnvironmentTemplateVersionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnvironmentTemplateVersionRequest req = new GetEnvironmentTemplateVersionRequest(                new GetEnvironmentTemplateVersionInput("saepe", "ipsum", "veritatis");, GetEnvironmentTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_GET_ENVIRONMENT_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quos";
                xAmzCredential = "tempore";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "dolorem";
            }};            

            GetEnvironmentTemplateVersionResponse res = sdk.sdk.getEnvironmentTemplateVersion(req);

            if (res.getEnvironmentTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepository

Get detail data for a linked repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryRequest;
import org.openapis.openapi.models.operations.GetRepositoryResponse;
import org.openapis.openapi.models.operations.GetRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRepositoryInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRepositoryRequest req = new GetRepositoryRequest(                new GetRepositoryInput("labore", RepositoryProviderEnum.GITHUB);, GetRepositoryXAmzTargetEnum.AWS_PROTON20200720_GET_REPOSITORY) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "quae";
                xAmzDate = "aut";
                xAmzSecurityToken = "quas";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "consequatur";
            }};            

            GetRepositoryResponse res = sdk.sdk.getRepository(req);

            if (res.getRepositoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositorySyncStatus

<p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositorySyncStatusRequest;
import org.openapis.openapi.models.operations.GetRepositorySyncStatusResponse;
import org.openapis.openapi.models.operations.GetRepositorySyncStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRepositorySyncStatusInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyncTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRepositorySyncStatusRequest req = new GetRepositorySyncStatusRequest(                new GetRepositorySyncStatusInput("repellendus", "porro", RepositoryProviderEnum.BITBUCKET, SyncTypeEnum.TEMPLATE_SYNC);, GetRepositorySyncStatusXAmzTargetEnum.AWS_PROTON20200720_GET_REPOSITORY_SYNC_STATUS) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "qui";
                xAmzDate = "quae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetRepositorySyncStatusResponse res = sdk.sdk.getRepositorySyncStatus(req);

            if (res.getRepositorySyncStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesSummary

<p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesSummaryRequest;
import org.openapis.openapi.models.operations.GetResourcesSummaryResponse;
import org.openapis.openapi.models.operations.GetResourcesSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcesSummaryRequest req = new GetResourcesSummaryRequest(                new java.util.HashMap<String, Object>() {{
                                put("vero", "omnis");
                                put("quis", "ipsum");
                                put("delectus", "voluptate");
                                put("consectetur", "vero");
                            }}, GetResourcesSummaryXAmzTargetEnum.AWS_PROTON20200720_GET_RESOURCES_SUMMARY) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "hic";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "similique";
            }};            

            GetResourcesSummaryResponse res = sdk.sdk.getResourcesSummary(req);

            if (res.getResourcesSummaryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getService

Get detailed data for a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceRequest;
import org.openapis.openapi.models.operations.GetServiceResponse;
import org.openapis.openapi.models.operations.GetServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceRequest req = new GetServiceRequest(                new GetServiceInput("vero");, GetServiceXAmzTargetEnum.AWS_PROTON20200720_GET_SERVICE) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
            }};            

            GetServiceResponse res = sdk.sdk.getService(req);

            if (res.getServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceInstance

Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceInstanceRequest;
import org.openapis.openapi.models.operations.GetServiceInstanceResponse;
import org.openapis.openapi.models.operations.GetServiceInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceInstanceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceInstanceRequest req = new GetServiceInstanceRequest(                new GetServiceInstanceInput("voluptatibus", "exercitationem");, GetServiceInstanceXAmzTargetEnum.AWS_PROTON20200720_GET_SERVICE_INSTANCE) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "porro";
                xAmzDate = "maiores";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "eligendi";
            }};            

            GetServiceInstanceResponse res = sdk.sdk.getServiceInstance(req);

            if (res.getServiceInstanceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceInstanceSyncStatus

Get the status of the synced service instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceInstanceSyncStatusRequest;
import org.openapis.openapi.models.operations.GetServiceInstanceSyncStatusResponse;
import org.openapis.openapi.models.operations.GetServiceInstanceSyncStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceInstanceSyncStatusInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceInstanceSyncStatusRequest req = new GetServiceInstanceSyncStatusRequest(                new GetServiceInstanceSyncStatusInput("alias", "officia");, GetServiceInstanceSyncStatusXAmzTargetEnum.AWS_PROTON20200720_GET_SERVICE_INSTANCE_SYNC_STATUS) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "ea";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "vel";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "magnam";
            }};            

            GetServiceInstanceSyncStatusResponse res = sdk.sdk.getServiceInstanceSyncStatus(req);

            if (res.getServiceInstanceSyncStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceSyncBlockerSummary

Get detailed data for the service sync blocker summary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceSyncBlockerSummaryRequest;
import org.openapis.openapi.models.operations.GetServiceSyncBlockerSummaryResponse;
import org.openapis.openapi.models.operations.GetServiceSyncBlockerSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceSyncBlockerSummaryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceSyncBlockerSummaryRequest req = new GetServiceSyncBlockerSummaryRequest(                new GetServiceSyncBlockerSummaryInput("ex") {{
                                serviceInstanceName = "laudantium";
                            }};, GetServiceSyncBlockerSummaryXAmzTargetEnum.AWS_PROTON20200720_GET_SERVICE_SYNC_BLOCKER_SUMMARY) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            GetServiceSyncBlockerSummaryResponse res = sdk.sdk.getServiceSyncBlockerSummary(req);

            if (res.getServiceSyncBlockerSummaryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceSyncConfig

Get detailed information for the service sync configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceSyncConfigRequest;
import org.openapis.openapi.models.operations.GetServiceSyncConfigResponse;
import org.openapis.openapi.models.operations.GetServiceSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceSyncConfigInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceSyncConfigRequest req = new GetServiceSyncConfigRequest(                new GetServiceSyncConfigInput("nostrum");, GetServiceSyncConfigXAmzTargetEnum.AWS_PROTON20200720_GET_SERVICE_SYNC_CONFIG) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "saepe";
                xAmzDate = "ea";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "veniam";
            }};            

            GetServiceSyncConfigResponse res = sdk.sdk.getServiceSyncConfig(req);

            if (res.getServiceSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceTemplate

Get detailed data for a service template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceTemplateRequest;
import org.openapis.openapi.models.operations.GetServiceTemplateResponse;
import org.openapis.openapi.models.operations.GetServiceTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceTemplateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceTemplateRequest req = new GetServiceTemplateRequest(                new GetServiceTemplateInput("inventore");, GetServiceTemplateXAmzTargetEnum.AWS_PROTON20200720_GET_SERVICE_TEMPLATE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quo";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "minima";
            }};            

            GetServiceTemplateResponse res = sdk.sdk.getServiceTemplate(req);

            if (res.getServiceTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceTemplateVersion

Get detailed data for a major or minor version of a service template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceTemplateVersionRequest;
import org.openapis.openapi.models.operations.GetServiceTemplateVersionResponse;
import org.openapis.openapi.models.operations.GetServiceTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceTemplateVersionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceTemplateVersionRequest req = new GetServiceTemplateVersionRequest(                new GetServiceTemplateVersionInput("a", "libero", "aut");, GetServiceTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_GET_SERVICE_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
            }};            

            GetServiceTemplateVersionResponse res = sdk.sdk.getServiceTemplateVersion(req);

            if (res.getServiceTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplateSyncConfig

Get detail data for a template sync configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateSyncConfigRequest;
import org.openapis.openapi.models.operations.GetTemplateSyncConfigResponse;
import org.openapis.openapi.models.operations.GetTemplateSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTemplateSyncConfigInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemplateSyncConfigRequest req = new GetTemplateSyncConfigRequest(                new GetTemplateSyncConfigInput("et", TemplateTypeEnum.SERVICE);, GetTemplateSyncConfigXAmzTargetEnum.AWS_PROTON20200720_GET_TEMPLATE_SYNC_CONFIG) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            GetTemplateSyncConfigResponse res = sdk.sdk.getTemplateSyncConfig(req);

            if (res.getTemplateSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplateSyncStatus

Get the status of a template sync.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateSyncStatusRequest;
import org.openapis.openapi.models.operations.GetTemplateSyncStatusResponse;
import org.openapis.openapi.models.operations.GetTemplateSyncStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTemplateSyncStatusInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemplateSyncStatusRequest req = new GetTemplateSyncStatusRequest(                new GetTemplateSyncStatusInput("nulla", TemplateTypeEnum.ENVIRONMENT, "libero");, GetTemplateSyncStatusXAmzTargetEnum.AWS_PROTON20200720_GET_TEMPLATE_SYNC_STATUS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "numquam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "provident";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetTemplateSyncStatusResponse res = sdk.sdk.getTemplateSyncStatus(req);

            if (res.getTemplateSyncStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponentOutputs

<p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentOutputsRequest;
import org.openapis.openapi.models.operations.ListComponentOutputsResponse;
import org.openapis.openapi.models.operations.ListComponentOutputsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListComponentOutputsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentOutputsRequest req = new ListComponentOutputsRequest(                new ListComponentOutputsInput("odio") {{
                                nextToken = "eius";
                            }};, ListComponentOutputsXAmzTargetEnum.AWS_PROTON20200720_LIST_COMPONENT_OUTPUTS) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "esse";
                xAmzCredential = "rem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "fugiat";
                nextToken = "ut";
            }};            

            ListComponentOutputsResponse res = sdk.sdk.listComponentOutputs(req);

            if (res.listComponentOutputsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponentProvisionedResources

<p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentProvisionedResourcesRequest;
import org.openapis.openapi.models.operations.ListComponentProvisionedResourcesResponse;
import org.openapis.openapi.models.operations.ListComponentProvisionedResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListComponentProvisionedResourcesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentProvisionedResourcesRequest req = new ListComponentProvisionedResourcesRequest(                new ListComponentProvisionedResourcesInput("suscipit") {{
                                nextToken = "assumenda";
                            }};, ListComponentProvisionedResourcesXAmzTargetEnum.AWS_PROTON20200720_LIST_COMPONENT_PROVISIONED_RESOURCES) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "quisquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "id";
                xAmzSignedHeaders = "quidem";
                nextToken = "neque";
            }};            

            ListComponentProvisionedResourcesResponse res = sdk.sdk.listComponentProvisionedResources(req);

            if (res.listComponentProvisionedResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponents

<p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentsRequest;
import org.openapis.openapi.models.operations.ListComponentsResponse;
import org.openapis.openapi.models.operations.ListComponentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListComponentsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentsRequest req = new ListComponentsRequest(                new ListComponentsInput() {{
                                environmentName = "illum";
                                maxResults = 777408L;
                                nextToken = "fuga";
                                serviceInstanceName = "eius";
                                serviceName = "eos";
                            }};, ListComponentsXAmzTargetEnum.AWS_PROTON20200720_LIST_COMPONENTS) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "ab";
                xAmzCredential = "cupiditate";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsam";
                maxResults = "aspernatur";
                nextToken = "sequi";
            }};            

            ListComponentsResponse res = sdk.sdk.listComponents(req);

            if (res.listComponentsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironmentAccountConnections

<p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentAccountConnectionsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentAccountConnectionsResponse;
import org.openapis.openapi.models.operations.ListEnvironmentAccountConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnvironmentAccountConnectionRequesterAccountTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentAccountConnectionStatusEnum;
import org.openapis.openapi.models.shared.ListEnvironmentAccountConnectionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentAccountConnectionsRequest req = new ListEnvironmentAccountConnectionsRequest(                new ListEnvironmentAccountConnectionsInput(EnvironmentAccountConnectionRequesterAccountTypeEnum.MANAGEMENT_ACCOUNT) {{
                                environmentName = "recusandae";
                                maxResults = 44612L;
                                nextToken = "distinctio";
                                statuses = new org.openapis.openapi.models.shared.EnvironmentAccountConnectionStatusEnum[]{{
                                    add(EnvironmentAccountConnectionStatusEnum.CONNECTED),
                                    add(EnvironmentAccountConnectionStatusEnum.PENDING),
                                    add(EnvironmentAccountConnectionStatusEnum.CONNECTED),
                                    add(EnvironmentAccountConnectionStatusEnum.CONNECTED),
                                }};
                            }};, ListEnvironmentAccountConnectionsXAmzTargetEnum.AWS_PROTON20200720_LIST_ENVIRONMENT_ACCOUNT_CONNECTIONS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "odio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dolores";
                maxResults = "deserunt";
                nextToken = "molestiae";
            }};            

            ListEnvironmentAccountConnectionsResponse res = sdk.sdk.listEnvironmentAccountConnections(req);

            if (res.listEnvironmentAccountConnectionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironmentOutputs

List the infrastructure as code outputs for your environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentOutputsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentOutputsResponse;
import org.openapis.openapi.models.operations.ListEnvironmentOutputsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEnvironmentOutputsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentOutputsRequest req = new ListEnvironmentOutputsRequest(                new ListEnvironmentOutputsInput("porro") {{
                                nextToken = "eum";
                            }};, ListEnvironmentOutputsXAmzTargetEnum.AWS_PROTON20200720_LIST_ENVIRONMENT_OUTPUTS) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "consequuntur";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "mollitia";
                nextToken = "incidunt";
            }};            

            ListEnvironmentOutputsResponse res = sdk.sdk.listEnvironmentOutputs(req);

            if (res.listEnvironmentOutputsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironmentProvisionedResources

List the provisioned resources for your environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentProvisionedResourcesRequest;
import org.openapis.openapi.models.operations.ListEnvironmentProvisionedResourcesResponse;
import org.openapis.openapi.models.operations.ListEnvironmentProvisionedResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEnvironmentProvisionedResourcesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentProvisionedResourcesRequest req = new ListEnvironmentProvisionedResourcesRequest(                new ListEnvironmentProvisionedResourcesInput("explicabo") {{
                                nextToken = "minima";
                            }};, ListEnvironmentProvisionedResourcesXAmzTargetEnum.AWS_PROTON20200720_LIST_ENVIRONMENT_PROVISIONED_RESOURCES) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "sapiente";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "saepe";
                nextToken = "occaecati";
            }};            

            ListEnvironmentProvisionedResourcesResponse res = sdk.sdk.listEnvironmentProvisionedResources(req);

            if (res.listEnvironmentProvisionedResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironmentTemplateVersions

List major or minor versions of an environment template with detail data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentTemplateVersionsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentTemplateVersionsResponse;
import org.openapis.openapi.models.operations.ListEnvironmentTemplateVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEnvironmentTemplateVersionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentTemplateVersionsRequest req = new ListEnvironmentTemplateVersionsRequest(                new ListEnvironmentTemplateVersionsInput("et") {{
                                majorVersion = "esse";
                                maxResults = 910545L;
                                nextToken = "accusamus";
                            }};, ListEnvironmentTemplateVersionsXAmzTargetEnum.AWS_PROTON20200720_LIST_ENVIRONMENT_TEMPLATE_VERSIONS) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quod";
                xAmzDate = "nam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quasi";
                maxResults = "saepe";
                nextToken = "vel";
            }};            

            ListEnvironmentTemplateVersionsResponse res = sdk.sdk.listEnvironmentTemplateVersions(req);

            if (res.listEnvironmentTemplateVersionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironmentTemplates

List environment templates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentTemplatesRequest;
import org.openapis.openapi.models.operations.ListEnvironmentTemplatesResponse;
import org.openapis.openapi.models.operations.ListEnvironmentTemplatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEnvironmentTemplatesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentTemplatesRequest req = new ListEnvironmentTemplatesRequest(                new ListEnvironmentTemplatesInput() {{
                                maxResults = 473221L;
                                nextToken = "rerum";
                            }};, ListEnvironmentTemplatesXAmzTargetEnum.AWS_PROTON20200720_LIST_ENVIRONMENT_TEMPLATES) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "minima";
                xAmzCredential = "distinctio";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sit";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "tempore";
                maxResults = "adipisci";
                nextToken = "cumque";
            }};            

            ListEnvironmentTemplatesResponse res = sdk.sdk.listEnvironmentTemplates(req);

            if (res.listEnvironmentTemplatesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironments

List environments with detail data summaries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentsResponse;
import org.openapis.openapi.models.operations.ListEnvironmentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnvironmentTemplateFilter;
import org.openapis.openapi.models.shared.ListEnvironmentsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentsRequest req = new ListEnvironmentsRequest(                new ListEnvironmentsInput() {{
                                environmentTemplates = new org.openapis.openapi.models.shared.EnvironmentTemplateFilter[]{{
                                    add(new EnvironmentTemplateFilter("sapiente", "consectetur") {{
                                        majorVersion = "minus";
                                        templateName = "quaerat";
                                    }}),
                                }};
                                maxResults = 458139L;
                                nextToken = "blanditiis";
                            }};, ListEnvironmentsXAmzTargetEnum.AWS_PROTON20200720_LIST_ENVIRONMENTS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "a";
                xAmzCredential = "nulla";
                xAmzDate = "quas";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "a";
                maxResults = "error";
                nextToken = "sint";
            }};            

            ListEnvironmentsResponse res = sdk.sdk.listEnvironments(req);

            if (res.listEnvironmentsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRepositories

List linked repositories with detail data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRepositoriesRequest;
import org.openapis.openapi.models.operations.ListRepositoriesResponse;
import org.openapis.openapi.models.operations.ListRepositoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRepositoriesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRepositoriesRequest req = new ListRepositoriesRequest(                new ListRepositoriesInput() {{
                                maxResults = 820767L;
                                nextToken = "quia";
                            }};, ListRepositoriesXAmzTargetEnum.AWS_PROTON20200720_LIST_REPOSITORIES) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facere";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "similique";
                maxResults = "culpa";
                nextToken = "aliquid";
            }};            

            ListRepositoriesResponse res = sdk.sdk.listRepositories(req);

            if (res.listRepositoriesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRepositorySyncDefinitions

List repository sync definitions with detail data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRepositorySyncDefinitionsRequest;
import org.openapis.openapi.models.operations.ListRepositorySyncDefinitionsResponse;
import org.openapis.openapi.models.operations.ListRepositorySyncDefinitionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRepositorySyncDefinitionsInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyncTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRepositorySyncDefinitionsRequest req = new ListRepositorySyncDefinitionsRequest(                new ListRepositorySyncDefinitionsInput("quae", RepositoryProviderEnum.BITBUCKET, SyncTypeEnum.TEMPLATE_SYNC) {{
                                nextToken = "in";
                            }};, ListRepositorySyncDefinitionsXAmzTargetEnum.AWS_PROTON20200720_LIST_REPOSITORY_SYNC_DEFINITIONS) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illum";
                xAmzDate = "soluta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "sapiente";
                nextToken = "dicta";
            }};            

            ListRepositorySyncDefinitionsResponse res = sdk.sdk.listRepositorySyncDefinitions(req);

            if (res.listRepositorySyncDefinitionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceInstanceOutputs

Get a list service of instance Infrastructure as Code (IaC) outputs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceInstanceOutputsRequest;
import org.openapis.openapi.models.operations.ListServiceInstanceOutputsResponse;
import org.openapis.openapi.models.operations.ListServiceInstanceOutputsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceInstanceOutputsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceInstanceOutputsRequest req = new ListServiceInstanceOutputsRequest(                new ListServiceInstanceOutputsInput("reprehenderit", "ullam") {{
                                nextToken = "nisi";
                            }};, ListServiceInstanceOutputsXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICE_INSTANCE_OUTPUTS) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "qui";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "ex";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "itaque";
                nextToken = "dolorum";
            }};            

            ListServiceInstanceOutputsResponse res = sdk.sdk.listServiceInstanceOutputs(req);

            if (res.listServiceInstanceOutputsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceInstanceProvisionedResources

List provisioned resources for a service instance with details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceInstanceProvisionedResourcesRequest;
import org.openapis.openapi.models.operations.ListServiceInstanceProvisionedResourcesResponse;
import org.openapis.openapi.models.operations.ListServiceInstanceProvisionedResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceInstanceProvisionedResourcesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceInstanceProvisionedResourcesRequest req = new ListServiceInstanceProvisionedResourcesRequest(                new ListServiceInstanceProvisionedResourcesInput("omnis", "tenetur") {{
                                nextToken = "quasi";
                            }};, ListServiceInstanceProvisionedResourcesXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICE_INSTANCE_PROVISIONED_RESOURCES) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "et";
                xAmzCredential = "voluptate";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "minima";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consectetur";
                nextToken = "adipisci";
            }};            

            ListServiceInstanceProvisionedResourcesResponse res = sdk.sdk.listServiceInstanceProvisionedResources(req);

            if (res.listServiceInstanceProvisionedResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceInstances

List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceInstancesRequest;
import org.openapis.openapi.models.operations.ListServiceInstancesResponse;
import org.openapis.openapi.models.operations.ListServiceInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceInstancesFilter;
import org.openapis.openapi.models.shared.ListServiceInstancesFilterByEnum;
import org.openapis.openapi.models.shared.ListServiceInstancesInput;
import org.openapis.openapi.models.shared.ListServiceInstancesSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceInstancesRequest req = new ListServiceInstancesRequest(                new ListServiceInstancesInput() {{
                                filters = new org.openapis.openapi.models.shared.ListServiceInstancesFilter[]{{
                                    add(new ListServiceInstancesFilter() {{
                                        key = ListServiceInstancesFilterByEnum.NAME;
                                        value = "rem";
                                    }}),
                                    add(new ListServiceInstancesFilter() {{
                                        key = ListServiceInstancesFilterByEnum.NAME;
                                        value = "laudantium";
                                    }}),
                                    add(new ListServiceInstancesFilter() {{
                                        key = ListServiceInstancesFilterByEnum.DEPLOYED_TEMPLATE_VERSION_STATUS;
                                        value = "mollitia";
                                    }}),
                                    add(new ListServiceInstancesFilter() {{
                                        key = ListServiceInstancesFilterByEnum.NAME;
                                        value = "corrupti";
                                    }}),
                                }};
                                maxResults = 251941L;
                                nextToken = "voluptatem";
                                serviceName = "dolor";
                                sortBy = ListServiceInstancesSortByEnum.ENVIRONMENT_NAME;
                                sortOrder = SortOrderEnum.ASCENDING;
                            }};, ListServiceInstancesXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICE_INSTANCES) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "aut";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "maiores";
                maxResults = "natus";
                nextToken = "velit";
            }};            

            ListServiceInstancesResponse res = sdk.sdk.listServiceInstances(req);

            if (res.listServiceInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServicePipelineOutputs

Get a list of service pipeline Infrastructure as Code (IaC) outputs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicePipelineOutputsRequest;
import org.openapis.openapi.models.operations.ListServicePipelineOutputsResponse;
import org.openapis.openapi.models.operations.ListServicePipelineOutputsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServicePipelineOutputsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicePipelineOutputsRequest req = new ListServicePipelineOutputsRequest(                new ListServicePipelineOutputsInput("voluptas") {{
                                nextToken = "asperiores";
                            }};, ListServicePipelineOutputsXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICE_PIPELINE_OUTPUTS) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quaerat";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "maxime";
                nextToken = "dignissimos";
            }};            

            ListServicePipelineOutputsResponse res = sdk.sdk.listServicePipelineOutputs(req);

            if (res.listServicePipelineOutputsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServicePipelineProvisionedResources

List provisioned resources for a service and pipeline with details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicePipelineProvisionedResourcesRequest;
import org.openapis.openapi.models.operations.ListServicePipelineProvisionedResourcesResponse;
import org.openapis.openapi.models.operations.ListServicePipelineProvisionedResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServicePipelineProvisionedResourcesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicePipelineProvisionedResourcesRequest req = new ListServicePipelineProvisionedResourcesRequest(                new ListServicePipelineProvisionedResourcesInput("asperiores") {{
                                nextToken = "nemo";
                            }};, ListServicePipelineProvisionedResourcesXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICE_PIPELINE_PROVISIONED_RESOURCES) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "porro";
                xAmzDate = "quod";
                xAmzSecurityToken = "labore";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "adipisci";
                nextToken = "fuga";
            }};            

            ListServicePipelineProvisionedResourcesResponse res = sdk.sdk.listServicePipelineProvisionedResources(req);

            if (res.listServicePipelineProvisionedResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceTemplateVersions

List major or minor versions of a service template with detail data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceTemplateVersionsRequest;
import org.openapis.openapi.models.operations.ListServiceTemplateVersionsResponse;
import org.openapis.openapi.models.operations.ListServiceTemplateVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceTemplateVersionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceTemplateVersionsRequest req = new ListServiceTemplateVersionsRequest(                new ListServiceTemplateVersionsInput("suscipit") {{
                                majorVersion = "velit";
                                maxResults = 633931L;
                                nextToken = "est";
                            }};, ListServiceTemplateVersionsXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICE_TEMPLATE_VERSIONS) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "totam";
                xAmzCredential = "fugiat";
                xAmzDate = "vel";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "vel";
                maxResults = "labore";
                nextToken = "possimus";
            }};            

            ListServiceTemplateVersionsResponse res = sdk.sdk.listServiceTemplateVersions(req);

            if (res.listServiceTemplateVersionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceTemplates

List service templates with detail data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceTemplatesRequest;
import org.openapis.openapi.models.operations.ListServiceTemplatesResponse;
import org.openapis.openapi.models.operations.ListServiceTemplatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServiceTemplatesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServiceTemplatesRequest req = new ListServiceTemplatesRequest(                new ListServiceTemplatesInput() {{
                                maxResults = 738227L;
                                nextToken = "commodi";
                            }};, ListServiceTemplatesXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICE_TEMPLATES) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "reiciendis";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "aliquid";
                maxResults = "aperiam";
                nextToken = "cum";
            }};            

            ListServiceTemplatesResponse res = sdk.sdk.listServiceTemplates(req);

            if (res.listServiceTemplatesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServices

List services with summaries of detail data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesRequest;
import org.openapis.openapi.models.operations.ListServicesResponse;
import org.openapis.openapi.models.operations.ListServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServicesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServicesRequest req = new ListServicesRequest(                new ListServicesInput() {{
                                maxResults = 449083L;
                                nextToken = "exercitationem";
                            }};, ListServicesXAmzTargetEnum.AWS_PROTON20200720_LIST_SERVICES) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "facere";
                xAmzCredential = "numquam";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "quidem";
                maxResults = "saepe";
                nextToken = "necessitatibus";
            }};            

            ListServicesResponse res = sdk.sdk.listServices(req);

            if (res.listServicesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("sunt") {{
                                maxResults = 992012L;
                                nextToken = "adipisci";
                            }};, ListTagsForResourceXAmzTargetEnum.AWS_PROTON20200720_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "amet";
                xAmzCredential = "beatae";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "a";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "consectetur";
                maxResults = "corporis";
                nextToken = "harum";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyResourceDeploymentStatusChange

<p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyResourceDeploymentStatusChangeRequest;
import org.openapis.openapi.models.operations.NotifyResourceDeploymentStatusChangeResponse;
import org.openapis.openapi.models.operations.NotifyResourceDeploymentStatusChangeXAmzTargetEnum;
import org.openapis.openapi.models.shared.NotifyResourceDeploymentStatusChangeInput;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.ResourceDeploymentStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyResourceDeploymentStatusChangeRequest req = new NotifyResourceDeploymentStatusChangeRequest(                new NotifyResourceDeploymentStatusChangeInput("ipsa") {{
                                deploymentId = "voluptates";
                                outputs = new org.openapis.openapi.models.shared.Output[]{{
                                    add(new Output() {{
                                        key = "vitae";
                                        valueString = "accusamus";
                                    }}),
                                    add(new Output() {{
                                        key = "similique";
                                        valueString = "tempora";
                                    }}),
                                    add(new Output() {{
                                        key = "aspernatur";
                                        valueString = "voluptas";
                                    }}),
                                }};
                                status = ResourceDeploymentStatusEnum.FAILED;
                                statusMessage = "voluptas";
                            }};, NotifyResourceDeploymentStatusChangeXAmzTargetEnum.AWS_PROTON20200720_NOTIFY_RESOURCE_DEPLOYMENT_STATUS_CHANGE) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolorum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "minus";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "blanditiis";
            }};            

            NotifyResourceDeploymentStatusChangeResponse res = sdk.sdk.notifyResourceDeploymentStatusChange(req);

            if (res.notifyResourceDeploymentStatusChangeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectEnvironmentAccountConnection

<p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.RejectEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.operations.RejectEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.RejectEnvironmentAccountConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectEnvironmentAccountConnectionRequest req = new RejectEnvironmentAccountConnectionRequest(                new RejectEnvironmentAccountConnectionInput("dolore");, RejectEnvironmentAccountConnectionXAmzTargetEnum.AWS_PROTON20200720_REJECT_ENVIRONMENT_ACCOUNT_CONNECTION) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "temporibus";
                xAmzDate = "ullam";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "blanditiis";
            }};            

            RejectEnvironmentAccountConnectionResponse res = sdk.sdk.rejectEnvironmentAccountConnection(req);

            if (res.rejectEnvironmentAccountConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("hic",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("pariatur", "totam") {{
                                                    key = "culpa";
                                                    value = "corrupti";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_PROTON20200720_TAG_RESOURCE) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nobis";
                xAmzDate = "sit";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "reiciendis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("asperiores",                 new String[]{{
                                                add("voluptate"),
                                                add("expedita"),
                                                add("ab"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_PROTON20200720_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "laborum";
                xAmzDate = "sed";
                xAmzSecurityToken = "in";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quidem";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountSettings

Update Proton settings that are used for multiple services in the Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountSettingsRequest;
import org.openapis.openapi.models.operations.UpdateAccountSettingsResponse;
import org.openapis.openapi.models.operations.UpdateAccountSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.RepositoryBranchInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAccountSettingsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccountSettingsRequest req = new UpdateAccountSettingsRequest(                new UpdateAccountSettingsInput() {{
                                deletePipelineProvisioningRepository = false;
                                pipelineCodebuildRoleArn = "voluptas";
                                pipelineProvisioningRepository = new RepositoryBranchInput("unde", "architecto", RepositoryProviderEnum.GITHUB_ENTERPRISE);;
                                pipelineServiceRoleArn = "sapiente";
                            }};, UpdateAccountSettingsXAmzTargetEnum.AWS_PROTON20200720_UPDATE_ACCOUNT_SETTINGS) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "illo";
                xAmzCredential = "reiciendis";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "incidunt";
            }};            

            UpdateAccountSettingsResponse res = sdk.sdk.updateAccountSettings(req);

            if (res.updateAccountSettingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateComponent

<p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateComponentRequest;
import org.openapis.openapi.models.operations.UpdateComponentResponse;
import org.openapis.openapi.models.operations.UpdateComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComponentDeploymentUpdateTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateComponentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateComponentRequest req = new UpdateComponentRequest(                new UpdateComponentInput(ComponentDeploymentUpdateTypeEnum.CURRENT_VERSION, "eius") {{
                                clientToken = "necessitatibus";
                                description = "ipsum";
                                serviceInstanceName = "ea";
                                serviceName = "occaecati";
                                serviceSpec = "quos";
                                templateFile = "voluptatibus";
                            }};, UpdateComponentXAmzTargetEnum.AWS_PROTON20200720_UPDATE_COMPONENT) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "voluptate";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "non";
            }};            

            UpdateComponentResponse res = sdk.sdk.updateComponent(req);

            if (res.updateComponentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironment

<p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentResponse;
import org.openapis.openapi.models.operations.UpdateEnvironmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeploymentUpdateTypeEnum;
import org.openapis.openapi.models.shared.RepositoryBranchInput;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEnvironmentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentRequest req = new UpdateEnvironmentRequest(                new UpdateEnvironmentInput(DeploymentUpdateTypeEnum.MINOR_VERSION, "facilis") {{
                                codebuildRoleArn = "quaerat";
                                componentRoleArn = "incidunt";
                                description = "ipsam";
                                environmentAccountConnectionId = "debitis";
                                protonServiceRoleArn = "rem";
                                provisioningRepository = new RepositoryBranchInput("sit", "nobis", RepositoryProviderEnum.GITHUB_ENTERPRISE);;
                                spec = "veniam";
                                templateMajorVersion = "minima";
                                templateMinorVersion = "recusandae";
                            }};, UpdateEnvironmentXAmzTargetEnum.AWS_PROTON20200720_UPDATE_ENVIRONMENT) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "magni";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veniam";
            }};            

            UpdateEnvironmentResponse res = sdk.sdk.updateEnvironment(req);

            if (res.updateEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironmentAccountConnection

<p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.operations.UpdateEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEnvironmentAccountConnectionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentAccountConnectionRequest req = new UpdateEnvironmentAccountConnectionRequest(                new UpdateEnvironmentAccountConnectionInput("officiis") {{
                                codebuildRoleArn = "beatae";
                                componentRoleArn = "laudantium";
                                roleArn = "exercitationem";
                            }};, UpdateEnvironmentAccountConnectionXAmzTargetEnum.AWS_PROTON20200720_UPDATE_ENVIRONMENT_ACCOUNT_CONNECTION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "cum";
                xAmzCredential = "laboriosam";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "error";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateEnvironmentAccountConnectionResponse res = sdk.sdk.updateEnvironmentAccountConnection(req);

            if (res.updateEnvironmentAccountConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironmentTemplate

Update an environment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentTemplateRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentTemplateResponse;
import org.openapis.openapi.models.operations.UpdateEnvironmentTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEnvironmentTemplateInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentTemplateRequest req = new UpdateEnvironmentTemplateRequest(                new UpdateEnvironmentTemplateInput("debitis") {{
                                description = "neque";
                                displayName = "dolorum";
                            }};, UpdateEnvironmentTemplateXAmzTargetEnum.AWS_PROTON20200720_UPDATE_ENVIRONMENT_TEMPLATE) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolorum";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "atque";
            }};            

            UpdateEnvironmentTemplateResponse res = sdk.sdk.updateEnvironmentTemplate(req);

            if (res.updateEnvironmentTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironmentTemplateVersion

Update a major or minor version of an environment template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentTemplateVersionRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentTemplateVersionResponse;
import org.openapis.openapi.models.operations.UpdateEnvironmentTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateVersionStatusEnum;
import org.openapis.openapi.models.shared.UpdateEnvironmentTemplateVersionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentTemplateVersionRequest req = new UpdateEnvironmentTemplateVersionRequest(                new UpdateEnvironmentTemplateVersionInput("ut", "fugiat", "voluptatem") {{
                                description = "culpa";
                                status = TemplateVersionStatusEnum.DRAFT;
                            }};, UpdateEnvironmentTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_UPDATE_ENVIRONMENT_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "esse";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "sit";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "quas";
            }};            

            UpdateEnvironmentTemplateVersionResponse res = sdk.sdk.updateEnvironmentTemplateVersion(req);

            if (res.updateEnvironmentTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

<p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest(                new UpdateServiceInput("corporis") {{
                                description = "et";
                                spec = "blanditiis";
                            }};, UpdateServiceXAmzTargetEnum.AWS_PROTON20200720_UPDATE_SERVICE) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sed";
                xAmzCredential = "sit";
                xAmzDate = "vel";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "error";
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req);

            if (res.updateServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceInstance

<p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceInstanceRequest;
import org.openapis.openapi.models.operations.UpdateServiceInstanceResponse;
import org.openapis.openapi.models.operations.UpdateServiceInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeploymentUpdateTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceInstanceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceInstanceRequest req = new UpdateServiceInstanceRequest(                new UpdateServiceInstanceInput(DeploymentUpdateTypeEnum.CURRENT_VERSION, "reiciendis", "dolorem") {{
                                clientToken = "harum";
                                spec = "dicta";
                                templateMajorVersion = "architecto";
                                templateMinorVersion = "occaecati";
                            }};, UpdateServiceInstanceXAmzTargetEnum.AWS_PROTON20200720_UPDATE_SERVICE_INSTANCE) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "atque";
                xAmzDate = "laborum";
                xAmzSecurityToken = "nam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "laboriosam";
            }};            

            UpdateServiceInstanceResponse res = sdk.sdk.updateServiceInstance(req);

            if (res.updateServiceInstanceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServicePipeline

<p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServicePipelineRequest;
import org.openapis.openapi.models.operations.UpdateServicePipelineResponse;
import org.openapis.openapi.models.operations.UpdateServicePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeploymentUpdateTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServicePipelineInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServicePipelineRequest req = new UpdateServicePipelineRequest(                new UpdateServicePipelineInput(DeploymentUpdateTypeEnum.NONE, "deserunt", "voluptate") {{
                                templateMajorVersion = "unde";
                                templateMinorVersion = "reiciendis";
                            }};, UpdateServicePipelineXAmzTargetEnum.AWS_PROTON20200720_UPDATE_SERVICE_PIPELINE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "delectus";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quidem";
            }};            

            UpdateServicePipelineResponse res = sdk.sdk.updateServicePipeline(req);

            if (res.updateServicePipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceSyncBlocker

Update the service sync blocker by resolving it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceSyncBlockerRequest;
import org.openapis.openapi.models.operations.UpdateServiceSyncBlockerResponse;
import org.openapis.openapi.models.operations.UpdateServiceSyncBlockerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceSyncBlockerInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceSyncBlockerRequest req = new UpdateServiceSyncBlockerRequest(                new UpdateServiceSyncBlockerInput("facere", "fuga");, UpdateServiceSyncBlockerXAmzTargetEnum.AWS_PROTON20200720_UPDATE_SERVICE_SYNC_BLOCKER) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "veniam";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quasi";
            }};            

            UpdateServiceSyncBlockerResponse res = sdk.sdk.updateServiceSyncBlocker(req);

            if (res.updateServiceSyncBlockerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceSyncConfig

Update the Proton Ops config file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceSyncConfigRequest;
import org.openapis.openapi.models.operations.UpdateServiceSyncConfigResponse;
import org.openapis.openapi.models.operations.UpdateServiceSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceSyncConfigInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceSyncConfigRequest req = new UpdateServiceSyncConfigRequest(                new UpdateServiceSyncConfigInput("reprehenderit", "asperiores", "totam", RepositoryProviderEnum.GITHUB_ENTERPRISE, "quidem");, UpdateServiceSyncConfigXAmzTargetEnum.AWS_PROTON20200720_UPDATE_SERVICE_SYNC_CONFIG) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "amet";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "atque";
            }};            

            UpdateServiceSyncConfigResponse res = sdk.sdk.updateServiceSyncConfig(req);

            if (res.updateServiceSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceTemplate

Update a service template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceTemplateRequest;
import org.openapis.openapi.models.operations.UpdateServiceTemplateResponse;
import org.openapis.openapi.models.operations.UpdateServiceTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceTemplateInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceTemplateRequest req = new UpdateServiceTemplateRequest(                new UpdateServiceTemplateInput("officiis") {{
                                description = "officiis";
                                displayName = "accusamus";
                            }};, UpdateServiceTemplateXAmzTargetEnum.AWS_PROTON20200720_UPDATE_SERVICE_TEMPLATE) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "minima";
                xAmzCredential = "aspernatur";
                xAmzDate = "ex";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "at";
            }};            

            UpdateServiceTemplateResponse res = sdk.sdk.updateServiceTemplate(req);

            if (res.updateServiceTemplateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceTemplateVersion

Update a major or minor version of a service template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceTemplateVersionRequest;
import org.openapis.openapi.models.operations.UpdateServiceTemplateVersionResponse;
import org.openapis.openapi.models.operations.UpdateServiceTemplateVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CompatibleEnvironmentTemplateInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTemplateSupportedComponentSourceTypeEnum;
import org.openapis.openapi.models.shared.TemplateVersionStatusEnum;
import org.openapis.openapi.models.shared.UpdateServiceTemplateVersionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceTemplateVersionRequest req = new UpdateServiceTemplateVersionRequest(                new UpdateServiceTemplateVersionInput("blanditiis", "suscipit", "repudiandae") {{
                                compatibleEnvironmentTemplates = new org.openapis.openapi.models.shared.CompatibleEnvironmentTemplateInput[]{{
                                    add(new CompatibleEnvironmentTemplateInput("recusandae", "dolorum") {{
                                        majorVersion = "atque";
                                        templateName = "sunt";
                                    }}),
                                    add(new CompatibleEnvironmentTemplateInput("reiciendis", "doloremque") {{
                                        majorVersion = "repellendus";
                                        templateName = "labore";
                                    }}),
                                    add(new CompatibleEnvironmentTemplateInput("accusantium", "beatae") {{
                                        majorVersion = "repudiandae";
                                        templateName = "dicta";
                                    }}),
                                }};
                                description = "dolores";
                                status = TemplateVersionStatusEnum.REGISTRATION_FAILED;
                                supportedComponentSources = new org.openapis.openapi.models.shared.ServiceTemplateSupportedComponentSourceTypeEnum[]{{
                                    add(ServiceTemplateSupportedComponentSourceTypeEnum.DIRECTLY_DEFINED),
                                    add(ServiceTemplateSupportedComponentSourceTypeEnum.DIRECTLY_DEFINED),
                                }};
                            }};, UpdateServiceTemplateVersionXAmzTargetEnum.AWS_PROTON20200720_UPDATE_SERVICE_TEMPLATE_VERSION) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "a";
                xAmzCredential = "molestias";
                xAmzDate = "magnam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "occaecati";
            }};            

            UpdateServiceTemplateVersionResponse res = sdk.sdk.updateServiceTemplateVersion(req);

            if (res.updateServiceTemplateVersionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTemplateSyncConfig

Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTemplateSyncConfigRequest;
import org.openapis.openapi.models.operations.UpdateTemplateSyncConfigResponse;
import org.openapis.openapi.models.operations.UpdateTemplateSyncConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.RepositoryProviderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateTypeEnum;
import org.openapis.openapi.models.shared.UpdateTemplateSyncConfigInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTemplateSyncConfigRequest req = new UpdateTemplateSyncConfigRequest(                new UpdateTemplateSyncConfigInput("perspiciatis", "in", RepositoryProviderEnum.GITHUB, "eveniet", TemplateTypeEnum.SERVICE) {{
                                subdirectory = "consequuntur";
                            }};, UpdateTemplateSyncConfigXAmzTargetEnum.AWS_PROTON20200720_UPDATE_TEMPLATE_SYNC_CONFIG) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "id";
                xAmzCredential = "quis";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "error";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "corporis";
            }};            

            UpdateTemplateSyncConfigResponse res = sdk.sdk.updateTemplateSyncConfig(req);

            if (res.updateTemplateSyncConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
