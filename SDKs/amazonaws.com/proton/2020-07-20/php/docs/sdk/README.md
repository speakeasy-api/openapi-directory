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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEnvironmentAccountConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptEnvironmentAccountConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEnvironmentAccountConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptEnvironmentAccountConnectionRequest();
    $request->acceptEnvironmentAccountConnectionInput = new AcceptEnvironmentAccountConnectionInput();
    $request->acceptEnvironmentAccountConnectionInput->id = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = AcceptEnvironmentAccountConnectionXAmzTargetEnum::AWS_PROTON20200720_ACCEPT_ENVIRONMENT_ACCOUNT_CONNECTION;

    $response = $sdk->sdk->acceptEnvironmentAccountConnection($request);

    if ($response->acceptEnvironmentAccountConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelComponentDeployment

<p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelComponentDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelComponentDeploymentInput;
use \OpenAPI\OpenAPI\Models\Operations\CancelComponentDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelComponentDeploymentRequest();
    $request->cancelComponentDeploymentInput = new CancelComponentDeploymentInput();
    $request->cancelComponentDeploymentInput->componentName = 'hic';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CancelComponentDeploymentXAmzTargetEnum::AWS_PROTON20200720_CANCEL_COMPONENT_DEPLOYMENT;

    $response = $sdk->sdk->cancelComponentDeployment($request);

    if ($response->cancelComponentDeploymentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelEnvironmentDeployment

<p>Attempts to cancel an environment deployment on an <a>UpdateEnvironment</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-update.html">Update an environment</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateEnvironment</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelEnvironmentDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelEnvironmentDeploymentInput;
use \OpenAPI\OpenAPI\Models\Operations\CancelEnvironmentDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelEnvironmentDeploymentRequest();
    $request->cancelEnvironmentDeploymentInput = new CancelEnvironmentDeploymentInput();
    $request->cancelEnvironmentDeploymentInput->environmentName = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = CancelEnvironmentDeploymentXAmzTargetEnum::AWS_PROTON20200720_CANCEL_ENVIRONMENT_DEPLOYMENT;

    $response = $sdk->sdk->cancelEnvironmentDeployment($request);

    if ($response->cancelEnvironmentDeploymentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelServiceInstanceDeployment

<p>Attempts to cancel a service instance deployment on an <a>UpdateServiceInstance</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html">Update a service instance</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServiceInstance</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelServiceInstanceDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelServiceInstanceDeploymentInput;
use \OpenAPI\OpenAPI\Models\Operations\CancelServiceInstanceDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelServiceInstanceDeploymentRequest();
    $request->cancelServiceInstanceDeploymentInput = new CancelServiceInstanceDeploymentInput();
    $request->cancelServiceInstanceDeploymentInput->serviceInstanceName = 'dolorem';
    $request->cancelServiceInstanceDeploymentInput->serviceName = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = CancelServiceInstanceDeploymentXAmzTargetEnum::AWS_PROTON20200720_CANCEL_SERVICE_INSTANCE_DEPLOYMENT;

    $response = $sdk->sdk->cancelServiceInstanceDeployment($request);

    if ($response->cancelServiceInstanceDeploymentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelServicePipelineDeployment

<p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a> in the <i>Proton User guide</i>.</p> <p>The following list includes potential cancellation scenarios.</p> <ul> <li> <p>If the cancellation attempt succeeds, the resulting deployment state is <code>CANCELLED</code>.</p> </li> <li> <p>If the cancellation attempt fails, the resulting deployment state is <code>FAILED</code>.</p> </li> <li> <p>If the current <a>UpdateServicePipeline</a> action succeeds before the cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and the cancellation attempt has no effect.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelServicePipelineDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelServicePipelineDeploymentInput;
use \OpenAPI\OpenAPI\Models\Operations\CancelServicePipelineDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelServicePipelineDeploymentRequest();
    $request->cancelServicePipelineDeploymentInput = new CancelServicePipelineDeploymentInput();
    $request->cancelServicePipelineDeploymentInput->serviceName = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = CancelServicePipelineDeploymentXAmzTargetEnum::AWS_PROTON20200720_CANCEL_SERVICE_PIPELINE_DEPLOYMENT;

    $response = $sdk->sdk->cancelServicePipelineDeployment($request);

    if ($response->cancelServicePipelineDeploymentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createComponent

<p>Create an Proton component. A component is an infrastructure extension for a service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateComponentInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComponentRequest();
    $request->createComponentInput = new CreateComponentInput();
    $request->createComponentInput->clientToken = 'culpa';
    $request->createComponentInput->description = 'consequuntur';
    $request->createComponentInput->environmentName = 'repellat';
    $request->createComponentInput->manifest = 'mollitia';
    $request->createComponentInput->name = 'Francis Jerde';
    $request->createComponentInput->serviceInstanceName = 'velit';
    $request->createComponentInput->serviceName = 'error';
    $request->createComponentInput->serviceSpec = 'quia';
    $request->createComponentInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createComponentInput->templateFile = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = CreateComponentXAmzTargetEnum::AWS_PROTON20200720_CREATE_COMPONENT;

    $response = $sdk->sdk->createComponent($request);

    if ($response->createComponentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironment

<p>Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.</p> <p class="title"> <b>You can provision environments using the following methods:</b> </p> <ul> <li> <p>Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.</p> </li> <li> <p>Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryBranchInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->createEnvironmentInput = new CreateEnvironmentInput();
    $request->createEnvironmentInput->codebuildRoleArn = 'ipsam';
    $request->createEnvironmentInput->componentRoleArn = 'id';
    $request->createEnvironmentInput->description = 'possimus';
    $request->createEnvironmentInput->environmentAccountConnectionId = 'aut';
    $request->createEnvironmentInput->name = 'Sabrina Smitham DVM';
    $request->createEnvironmentInput->protonServiceRoleArn = 'voluptatibus';
    $request->createEnvironmentInput->provisioningRepository = new RepositoryBranchInput();
    $request->createEnvironmentInput->provisioningRepository->branch = 'vero';
    $request->createEnvironmentInput->provisioningRepository->name = 'Miss Irma Wolff';
    $request->createEnvironmentInput->provisioningRepository->provider = RepositoryProviderEnum::BITBUCKET;
    $request->createEnvironmentInput->spec = 'perferendis';
    $request->createEnvironmentInput->tags = [
        new Tag(),
    ];
    $request->createEnvironmentInput->templateMajorVersion = 'reprehenderit';
    $request->createEnvironmentInput->templateMinorVersion = 'ut';
    $request->createEnvironmentInput->templateName = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateEnvironmentXAmzTargetEnum::AWS_PROTON20200720_CREATE_ENVIRONMENT;

    $response = $sdk->sdk->createEnvironment($request);

    if ($response->createEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironmentAccountConnection

<p>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.</p> <p>An environment account connection is a secure bi-directional connection between a <i>management account</i> and an <i>environment account</i> that maintains authorization and permissions. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentAccountConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentAccountConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentAccountConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentAccountConnectionRequest();
    $request->createEnvironmentAccountConnectionInput = new CreateEnvironmentAccountConnectionInput();
    $request->createEnvironmentAccountConnectionInput->clientToken = 'accusamus';
    $request->createEnvironmentAccountConnectionInput->codebuildRoleArn = 'commodi';
    $request->createEnvironmentAccountConnectionInput->componentRoleArn = 'repudiandae';
    $request->createEnvironmentAccountConnectionInput->environmentName = 'quae';
    $request->createEnvironmentAccountConnectionInput->managementAccountId = 'ipsum';
    $request->createEnvironmentAccountConnectionInput->roleArn = 'quidem';
    $request->createEnvironmentAccountConnectionInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateEnvironmentAccountConnectionXAmzTargetEnum::AWS_PROTON20200720_CREATE_ENVIRONMENT_ACCOUNT_CONNECTION;

    $response = $sdk->sdk->createEnvironmentAccountConnection($request);

    if ($response->createEnvironmentAccountConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironmentTemplate

<p>Create an environment template for Proton. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Environment Templates</a> in the <i>Proton User Guide</i>.</p> <p>You can create an environment template in one of the two following ways:</p> <ul> <li> <p>Register and publish a <i>standard</i> environment template that instructs Proton to deploy and manage environment infrastructure.</p> </li> <li> <p>Register and publish a <i>customer managed</i> environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton <i>doesn't</i> manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the <code>provisioning</code> parameter and set the value to <code>CUSTOMER_MANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/template-create.html">Register and publish an environment template</a> in the <i>Proton User Guide</i>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentTemplateRequest();
    $request->createEnvironmentTemplateInput = new CreateEnvironmentTemplateInput();
    $request->createEnvironmentTemplateInput->description = 'repudiandae';
    $request->createEnvironmentTemplateInput->displayName = 'sint';
    $request->createEnvironmentTemplateInput->encryptionKey = 'veritatis';
    $request->createEnvironmentTemplateInput->name = 'Miss Randall Hamill';
    $request->createEnvironmentTemplateInput->provisioning = ProvisioningEnum::CUSTOMER_MANAGED;
    $request->createEnvironmentTemplateInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = CreateEnvironmentTemplateXAmzTargetEnum::AWS_PROTON20200720_CREATE_ENVIRONMENT_TEMPLATE;

    $response = $sdk->sdk->createEnvironmentTemplate($request);

    if ($response->createEnvironmentTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironmentTemplateVersion

Create a new major or minor version of an environment template. A major version of an environment template is a version that <i>isn't</i> backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\TemplateVersionSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\S3ObjectSource;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentTemplateVersionRequest();
    $request->createEnvironmentTemplateVersionInput = new CreateEnvironmentTemplateVersionInput();
    $request->createEnvironmentTemplateVersionInput->clientToken = 'cupiditate';
    $request->createEnvironmentTemplateVersionInput->description = 'quos';
    $request->createEnvironmentTemplateVersionInput->majorVersion = 'perferendis';
    $request->createEnvironmentTemplateVersionInput->source = new TemplateVersionSourceInput();
    $request->createEnvironmentTemplateVersionInput->source->s3 = new S3ObjectSource();
    $request->createEnvironmentTemplateVersionInput->source->s3->bucket = 'magni';
    $request->createEnvironmentTemplateVersionInput->source->s3->key = 'assumenda';
    $request->createEnvironmentTemplateVersionInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createEnvironmentTemplateVersionInput->templateName = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = CreateEnvironmentTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_CREATE_ENVIRONMENT_TEMPLATE_VERSION;

    $response = $sdk->sdk->createEnvironmentTemplateVersion($request);

    if ($response->createEnvironmentTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRepository

<p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRepositoryInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRepositoryRequest();
    $request->createRepositoryInput = new CreateRepositoryInput();
    $request->createRepositoryInput->connectionArn = 'delectus';
    $request->createRepositoryInput->encryptionKey = 'eum';
    $request->createRepositoryInput->name = 'Sheri Mayer';
    $request->createRepositoryInput->provider = RepositoryProviderEnum::BITBUCKET;
    $request->createRepositoryInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateRepositoryXAmzTargetEnum::AWS_PROTON20200720_CREATE_REPOSITORY;

    $response = $sdk->sdk->createRepository($request);

    if ($response->createRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-services.html">Services</a> in the <i>Proton User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceRequest();
    $request->createServiceInput = new CreateServiceInput();
    $request->createServiceInput->branchName = 'illum';
    $request->createServiceInput->description = 'maiores';
    $request->createServiceInput->name = 'Keith Gulgowski';
    $request->createServiceInput->repositoryConnectionArn = 'ea';
    $request->createServiceInput->repositoryId = 'aliquid';
    $request->createServiceInput->spec = 'laborum';
    $request->createServiceInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createServiceInput->templateMajorVersion = 'non';
    $request->createServiceInput->templateMinorVersion = 'occaecati';
    $request->createServiceInput->templateName = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = CreateServiceXAmzTargetEnum::AWS_PROTON20200720_CREATE_SERVICE;

    $response = $sdk->sdk->createService($request);

    if ($response->createServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceInstance

Create a service instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceInstanceRequest();
    $request->createServiceInstanceInput = new CreateServiceInstanceInput();
    $request->createServiceInstanceInput->clientToken = 'deleniti';
    $request->createServiceInstanceInput->name = 'Vincent Nolan';
    $request->createServiceInstanceInput->serviceName = 'natus';
    $request->createServiceInstanceInput->spec = 'omnis';
    $request->createServiceInstanceInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createServiceInstanceInput->templateMajorVersion = 'perferendis';
    $request->createServiceInstanceInput->templateMinorVersion = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateServiceInstanceXAmzTargetEnum::AWS_PROTON20200720_CREATE_SERVICE_INSTANCE;

    $response = $sdk->sdk->createServiceInstance($request);

    if ($response->createServiceInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceSyncConfig

Create the Proton Ops configuration file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceSyncConfigRequest();
    $request->createServiceSyncConfigInput = new CreateServiceSyncConfigInput();
    $request->createServiceSyncConfigInput->branch = 'nobis';
    $request->createServiceSyncConfigInput->filePath = 'eum';
    $request->createServiceSyncConfigInput->repositoryName = 'vero';
    $request->createServiceSyncConfigInput->repositoryProvider = RepositoryProviderEnum::GITHUB;
    $request->createServiceSyncConfigInput->serviceName = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = CreateServiceSyncConfigXAmzTargetEnum::AWS_PROTON20200720_CREATE_SERVICE_SYNC_CONFIG;

    $response = $sdk->sdk->createServiceSyncConfig($request);

    if ($response->createServiceSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceTemplate

Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html">Proton templates</a> in the <i>Proton User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceTemplateRequest();
    $request->createServiceTemplateInput = new CreateServiceTemplateInput();
    $request->createServiceTemplateInput->description = 'accusantium';
    $request->createServiceTemplateInput->displayName = 'mollitia';
    $request->createServiceTemplateInput->encryptionKey = 'reiciendis';
    $request->createServiceTemplateInput->name = 'Tommy Kemmer';
    $request->createServiceTemplateInput->pipelineProvisioning = ProvisioningEnum::CUSTOMER_MANAGED;
    $request->createServiceTemplateInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = CreateServiceTemplateXAmzTargetEnum::AWS_PROTON20200720_CREATE_SERVICE_TEMPLATE;

    $response = $sdk->sdk->createServiceTemplate($request);

    if ($response->createServiceTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceTemplateVersion

Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward compatible. A minor version of a service template is a version that's backward compatible within its major version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\CompatibleEnvironmentTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\TemplateVersionSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\S3ObjectSource;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTemplateSupportedComponentSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceTemplateVersionRequest();
    $request->createServiceTemplateVersionInput = new CreateServiceTemplateVersionInput();
    $request->createServiceTemplateVersionInput->clientToken = 'deleniti';
    $request->createServiceTemplateVersionInput->compatibleEnvironmentTemplates = [
        new CompatibleEnvironmentTemplateInput(),
        new CompatibleEnvironmentTemplateInput(),
        new CompatibleEnvironmentTemplateInput(),
    ];
    $request->createServiceTemplateVersionInput->description = 'in';
    $request->createServiceTemplateVersionInput->majorVersion = 'architecto';
    $request->createServiceTemplateVersionInput->source = new TemplateVersionSourceInput();
    $request->createServiceTemplateVersionInput->source->s3 = new S3ObjectSource();
    $request->createServiceTemplateVersionInput->source->s3->bucket = 'architecto';
    $request->createServiceTemplateVersionInput->source->s3->key = 'repudiandae';
    $request->createServiceTemplateVersionInput->supportedComponentSources = [
        ServiceTemplateSupportedComponentSourceTypeEnum::DIRECTLY_DEFINED,
        ServiceTemplateSupportedComponentSourceTypeEnum::DIRECTLY_DEFINED,
    ];
    $request->createServiceTemplateVersionInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createServiceTemplateVersionInput->templateName = 'nihil';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = CreateServiceTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_CREATE_SERVICE_TEMPLATE_VERSION;

    $response = $sdk->sdk->createServiceTemplateVersion($request);

    if ($response->createServiceTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTemplateSyncConfig

<p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.</p> <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTemplateSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTemplateSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTemplateSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTemplateSyncConfigRequest();
    $request->createTemplateSyncConfigInput = new CreateTemplateSyncConfigInput();
    $request->createTemplateSyncConfigInput->branch = 'praesentium';
    $request->createTemplateSyncConfigInput->repositoryName = 'natus';
    $request->createTemplateSyncConfigInput->repositoryProvider = RepositoryProviderEnum::GITHUB;
    $request->createTemplateSyncConfigInput->subdirectory = 'sunt';
    $request->createTemplateSyncConfigInput->templateName = 'quo';
    $request->createTemplateSyncConfigInput->templateType = TemplateTypeEnum::SERVICE;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = CreateTemplateSyncConfigXAmzTargetEnum::AWS_PROTON20200720_CREATE_TEMPLATE_SYNC_CONFIG;

    $response = $sdk->sdk->createTemplateSyncConfig($request);

    if ($response->createTemplateSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComponent

<p>Delete an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteComponentInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteComponentRequest();
    $request->deleteComponentInput = new DeleteComponentInput();
    $request->deleteComponentInput->name = 'Ebony Predovic';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteComponentXAmzTargetEnum::AWS_PROTON20200720_DELETE_COMPONENT;

    $response = $sdk->sdk->deleteComponent($request);

    if ($response->deleteComponentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

Delete an environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEnvironmentInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentRequest();
    $request->deleteEnvironmentInput = new DeleteEnvironmentInput();
    $request->deleteEnvironmentInput->name = 'Vincent Anderson';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DeleteEnvironmentXAmzTargetEnum::AWS_PROTON20200720_DELETE_ENVIRONMENT;

    $response = $sdk->sdk->deleteEnvironment($request);

    if ($response->deleteEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironmentAccountConnection

<p>In an environment account, delete an environment account connection.</p> <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentAccountConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEnvironmentAccountConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentAccountConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentAccountConnectionRequest();
    $request->deleteEnvironmentAccountConnectionInput = new DeleteEnvironmentAccountConnectionInput();
    $request->deleteEnvironmentAccountConnectionInput->id = '053202c7-3d5f-4e9b-90c2-8909b3fe49a8';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = DeleteEnvironmentAccountConnectionXAmzTargetEnum::AWS_PROTON20200720_DELETE_ENVIRONMENT_ACCOUNT_CONNECTION;

    $response = $sdk->sdk->deleteEnvironmentAccountConnection($request);

    if ($response->deleteEnvironmentAccountConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironmentTemplate

If no other major or minor versions of an environment template exist, delete the environment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEnvironmentTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentTemplateRequest();
    $request->deleteEnvironmentTemplateInput = new DeleteEnvironmentTemplateInput();
    $request->deleteEnvironmentTemplateInput->name = 'Florence Ebert';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = DeleteEnvironmentTemplateXAmzTargetEnum::AWS_PROTON20200720_DELETE_ENVIRONMENT_TEMPLATE;

    $response = $sdk->sdk->deleteEnvironmentTemplate($request);

    if ($response->deleteEnvironmentTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironmentTemplateVersion

<p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p> <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEnvironmentTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentTemplateVersionRequest();
    $request->deleteEnvironmentTemplateVersionInput = new DeleteEnvironmentTemplateVersionInput();
    $request->deleteEnvironmentTemplateVersionInput->majorVersion = 'amet';
    $request->deleteEnvironmentTemplateVersionInput->minorVersion = 'dolorum';
    $request->deleteEnvironmentTemplateVersionInput->templateName = 'numquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteEnvironmentTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_DELETE_ENVIRONMENT_TEMPLATE_VERSION;

    $response = $sdk->sdk->deleteEnvironmentTemplateVersion($request);

    if ($response->deleteEnvironmentTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepository

De-register and unlink your repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRepositoryInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryRequest();
    $request->deleteRepositoryInput = new DeleteRepositoryInput();
    $request->deleteRepositoryInput->name = 'Jan Hodkiewicz';
    $request->deleteRepositoryInput->provider = RepositoryProviderEnum::GITHUB_ENTERPRISE;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DeleteRepositoryXAmzTargetEnum::AWS_PROTON20200720_DELETE_REPOSITORY;

    $response = $sdk->sdk->deleteRepository($request);

    if ($response->deleteRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

<p>Delete a service, with its instances and pipeline.</p> <note> <p>You can't delete a service if it has any service instances that have components attached to them.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->deleteServiceInput = new DeleteServiceInput();
    $request->deleteServiceInput->name = 'Alfredo Mohr';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DeleteServiceXAmzTargetEnum::AWS_PROTON20200720_DELETE_SERVICE;

    $response = $sdk->sdk->deleteService($request);

    if ($response->deleteServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceSyncConfig

Delete the Proton Ops file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceSyncConfigRequest();
    $request->deleteServiceSyncConfigInput = new DeleteServiceSyncConfigInput();
    $request->deleteServiceSyncConfigInput->serviceName = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = DeleteServiceSyncConfigXAmzTargetEnum::AWS_PROTON20200720_DELETE_SERVICE_SYNC_CONFIG;

    $response = $sdk->sdk->deleteServiceSyncConfig($request);

    if ($response->deleteServiceSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceTemplate

If no other major or minor versions of the service template exist, delete the service template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceTemplateRequest();
    $request->deleteServiceTemplateInput = new DeleteServiceTemplateInput();
    $request->deleteServiceTemplateInput->name = 'Rene Hane';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = DeleteServiceTemplateXAmzTargetEnum::AWS_PROTON20200720_DELETE_SERVICE_TEMPLATE;

    $response = $sdk->sdk->deleteServiceTemplate($request);

    if ($response->deleteServiceTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceTemplateVersion

<p>If no other minor versions of a service template exist, delete a major version of the service template if it's not the <code>Recommended</code> version. Delete the <code>Recommended</code> version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that <i>isn't</i> backwards compatible.</p> <p>Delete a minor version of a service template if it's not the <code>Recommended</code> version. Delete a <code>Recommended</code> minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceTemplateVersionRequest();
    $request->deleteServiceTemplateVersionInput = new DeleteServiceTemplateVersionInput();
    $request->deleteServiceTemplateVersionInput->majorVersion = 'officiis';
    $request->deleteServiceTemplateVersionInput->minorVersion = 'qui';
    $request->deleteServiceTemplateVersionInput->templateName = 'dolorum';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = DeleteServiceTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_DELETE_SERVICE_TEMPLATE_VERSION;

    $response = $sdk->sdk->deleteServiceTemplateVersion($request);

    if ($response->deleteServiceTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTemplateSyncConfig

Delete a template sync configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTemplateSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTemplateSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\TemplateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTemplateSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTemplateSyncConfigRequest();
    $request->deleteTemplateSyncConfigInput = new DeleteTemplateSyncConfigInput();
    $request->deleteTemplateSyncConfigInput->templateName = 'amet';
    $request->deleteTemplateSyncConfigInput->templateType = TemplateTypeEnum::SERVICE;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DeleteTemplateSyncConfigXAmzTargetEnum::AWS_PROTON20200720_DELETE_TEMPLATE_SYNC_CONFIG;

    $response = $sdk->sdk->deleteTemplateSyncConfig($request);

    if ($response->deleteTemplateSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountSettings

Get detail data for Proton account-wide settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountSettingsRequest();
    $request->requestBody = [
        'expedita' => 'neque',
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = GetAccountSettingsXAmzTargetEnum::AWS_PROTON20200720_GET_ACCOUNT_SETTINGS;

    $response = $sdk->sdk->getAccountSettings($request);

    if ($response->getAccountSettingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponent

<p>Get detailed data for a component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetComponentInput;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentRequest();
    $request->getComponentInput = new GetComponentInput();
    $request->getComponentInput->name = 'Norma McGlynn';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = GetComponentXAmzTargetEnum::AWS_PROTON20200720_GET_COMPONENT;

    $response = $sdk->sdk->getComponent($request);

    if ($response->getComponentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironment

Get detailed data for an environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEnvironmentInput;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentRequest();
    $request->getEnvironmentInput = new GetEnvironmentInput();
    $request->getEnvironmentInput->name = 'Cesar Hyatt';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = GetEnvironmentXAmzTargetEnum::AWS_PROTON20200720_GET_ENVIRONMENT;

    $response = $sdk->sdk->getEnvironment($request);

    if ($response->getEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironmentAccountConnection

<p>In an environment account, get the detailed data for an environment account connection.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentAccountConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEnvironmentAccountConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentAccountConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentAccountConnectionRequest();
    $request->getEnvironmentAccountConnectionInput = new GetEnvironmentAccountConnectionInput();
    $request->getEnvironmentAccountConnectionInput->id = '5bf0cbb1-e31b-48b9-8f34-43a1108e0adc';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = GetEnvironmentAccountConnectionXAmzTargetEnum::AWS_PROTON20200720_GET_ENVIRONMENT_ACCOUNT_CONNECTION;

    $response = $sdk->sdk->getEnvironmentAccountConnection($request);

    if ($response->getEnvironmentAccountConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironmentTemplate

Get detailed data for an environment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEnvironmentTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentTemplateRequest();
    $request->getEnvironmentTemplateInput = new GetEnvironmentTemplateInput();
    $request->getEnvironmentTemplateInput->name = 'Toni Wolff';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = GetEnvironmentTemplateXAmzTargetEnum::AWS_PROTON20200720_GET_ENVIRONMENT_TEMPLATE;

    $response = $sdk->sdk->getEnvironmentTemplate($request);

    if ($response->getEnvironmentTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironmentTemplateVersion

Get detailed data for a major or minor version of an environment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEnvironmentTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentTemplateVersionRequest();
    $request->getEnvironmentTemplateVersionInput = new GetEnvironmentTemplateVersionInput();
    $request->getEnvironmentTemplateVersionInput->majorVersion = 'tenetur';
    $request->getEnvironmentTemplateVersionInput->minorVersion = 'dignissimos';
    $request->getEnvironmentTemplateVersionInput->templateName = 'hic';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = GetEnvironmentTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_GET_ENVIRONMENT_TEMPLATE_VERSION;

    $response = $sdk->sdk->getEnvironmentTemplateVersion($request);

    if ($response->getEnvironmentTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepository

Get detail data for a linked repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRepositoryInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryRequest();
    $request->getRepositoryInput = new GetRepositoryInput();
    $request->getRepositoryInput->name = 'Rosemarie Stanton';
    $request->getRepositoryInput->provider = RepositoryProviderEnum::BITBUCKET;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = GetRepositoryXAmzTargetEnum::AWS_PROTON20200720_GET_REPOSITORY;

    $response = $sdk->sdk->getRepository($request);

    if ($response->getRepositoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositorySyncStatus

<p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p> <note> <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC).</p> <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositorySyncStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRepositorySyncStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositorySyncStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositorySyncStatusRequest();
    $request->getRepositorySyncStatusInput = new GetRepositorySyncStatusInput();
    $request->getRepositorySyncStatusInput->branch = 'doloribus';
    $request->getRepositorySyncStatusInput->repositoryName = 'iusto';
    $request->getRepositorySyncStatusInput->repositoryProvider = RepositoryProviderEnum::BITBUCKET;
    $request->getRepositorySyncStatusInput->syncType = SyncTypeEnum::TEMPLATE_SYNC;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = GetRepositorySyncStatusXAmzTargetEnum::AWS_PROTON20200720_GET_REPOSITORY_SYNC_STATUS;

    $response = $sdk->sdk->getRepositorySyncStatus($request);

    if ($response->getRepositorySyncStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesSummary

<p>Get counts of Proton resources.</p> <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p> <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p> <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesSummaryRequest();
    $request->requestBody = [
        'magnam' => 'ratione',
        'ex' => 'laudantium',
        'dicta' => 'dolor',
        'maiores' => 'quasi',
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = GetResourcesSummaryXAmzTargetEnum::AWS_PROTON20200720_GET_RESOURCES_SUMMARY;

    $response = $sdk->sdk->getResourcesSummary($request);

    if ($response->getResourcesSummaryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getService

Get detailed data for a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceInput;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceRequest();
    $request->getServiceInput = new GetServiceInput();
    $request->getServiceInput->name = 'Nathaniel Ryan';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = GetServiceXAmzTargetEnum::AWS_PROTON20200720_GET_SERVICE;

    $response = $sdk->sdk->getService($request);

    if ($response->getServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceInstance

Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceInstanceRequest();
    $request->getServiceInstanceInput = new GetServiceInstanceInput();
    $request->getServiceInstanceInput->name = 'Cathy Becker';
    $request->getServiceInstanceInput->serviceName = 'aut';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = GetServiceInstanceXAmzTargetEnum::AWS_PROTON20200720_GET_SERVICE_INSTANCE;

    $response = $sdk->sdk->getServiceInstance($request);

    if ($response->getServiceInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceInstanceSyncStatus

Get the status of the synced service instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceInstanceSyncStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceInstanceSyncStatusInput;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceInstanceSyncStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceInstanceSyncStatusRequest();
    $request->getServiceInstanceSyncStatusInput = new GetServiceInstanceSyncStatusInput();
    $request->getServiceInstanceSyncStatusInput->serviceInstanceName = 'non';
    $request->getServiceInstanceSyncStatusInput->serviceName = 'et';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = GetServiceInstanceSyncStatusXAmzTargetEnum::AWS_PROTON20200720_GET_SERVICE_INSTANCE_SYNC_STATUS;

    $response = $sdk->sdk->getServiceInstanceSyncStatus($request);

    if ($response->getServiceInstanceSyncStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceSyncBlockerSummary

Get detailed data for the service sync blocker summary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSyncBlockerSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceSyncBlockerSummaryInput;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSyncBlockerSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceSyncBlockerSummaryRequest();
    $request->getServiceSyncBlockerSummaryInput = new GetServiceSyncBlockerSummaryInput();
    $request->getServiceSyncBlockerSummaryInput->serviceInstanceName = 'quas';
    $request->getServiceSyncBlockerSummaryInput->serviceName = 'assumenda';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = GetServiceSyncBlockerSummaryXAmzTargetEnum::AWS_PROTON20200720_GET_SERVICE_SYNC_BLOCKER_SUMMARY;

    $response = $sdk->sdk->getServiceSyncBlockerSummary($request);

    if ($response->getServiceSyncBlockerSummaryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceSyncConfig

Get detailed information for the service sync configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceSyncConfigRequest();
    $request->getServiceSyncConfigInput = new GetServiceSyncConfigInput();
    $request->getServiceSyncConfigInput->serviceName = 'provident';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = GetServiceSyncConfigXAmzTargetEnum::AWS_PROTON20200720_GET_SERVICE_SYNC_CONFIG;

    $response = $sdk->sdk->getServiceSyncConfig($request);

    if ($response->getServiceSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceTemplate

Get detailed data for a service template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceTemplateRequest();
    $request->getServiceTemplateInput = new GetServiceTemplateInput();
    $request->getServiceTemplateInput->name = 'Blake Kihn';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = GetServiceTemplateXAmzTargetEnum::AWS_PROTON20200720_GET_SERVICE_TEMPLATE;

    $response = $sdk->sdk->getServiceTemplate($request);

    if ($response->getServiceTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceTemplateVersion

Get detailed data for a major or minor version of a service template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceTemplateVersionRequest();
    $request->getServiceTemplateVersionInput = new GetServiceTemplateVersionInput();
    $request->getServiceTemplateVersionInput->majorVersion = 'veritatis';
    $request->getServiceTemplateVersionInput->minorVersion = 'ipsa';
    $request->getServiceTemplateVersionInput->templateName = 'id';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = GetServiceTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_GET_SERVICE_TEMPLATE_VERSION;

    $response = $sdk->sdk->getServiceTemplateVersion($request);

    if ($response->getServiceTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplateSyncConfig

Get detail data for a template sync configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTemplateSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\TemplateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateSyncConfigRequest();
    $request->getTemplateSyncConfigInput = new GetTemplateSyncConfigInput();
    $request->getTemplateSyncConfigInput->templateName = 'eos';
    $request->getTemplateSyncConfigInput->templateType = TemplateTypeEnum::ENVIRONMENT;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = GetTemplateSyncConfigXAmzTargetEnum::AWS_PROTON20200720_GET_TEMPLATE_SYNC_CONFIG;

    $response = $sdk->sdk->getTemplateSyncConfig($request);

    if ($response->getTemplateSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplateSyncStatus

Get the status of a template sync.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateSyncStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTemplateSyncStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\TemplateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateSyncStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateSyncStatusRequest();
    $request->getTemplateSyncStatusInput = new GetTemplateSyncStatusInput();
    $request->getTemplateSyncStatusInput->templateName = 'sequi';
    $request->getTemplateSyncStatusInput->templateType = TemplateTypeEnum::SERVICE;
    $request->getTemplateSyncStatusInput->templateVersion = 'esse';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = GetTemplateSyncStatusXAmzTargetEnum::AWS_PROTON20200720_GET_TEMPLATE_SYNC_STATUS;

    $response = $sdk->sdk->getTemplateSyncStatus($request);

    if ($response->getTemplateSyncStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponentOutputs

<p>Get a list of component Infrastructure as Code (IaC) outputs.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentOutputsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComponentOutputsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentOutputsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentOutputsRequest();
    $request->listComponentOutputsInput = new ListComponentOutputsInput();
    $request->listComponentOutputsInput->componentName = 'totam';
    $request->listComponentOutputsInput->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ListComponentOutputsXAmzTargetEnum::AWS_PROTON20200720_LIST_COMPONENT_OUTPUTS;
    $request->nextToken = 'molestiae';

    $response = $sdk->sdk->listComponentOutputs($request);

    if ($response->listComponentOutputsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponentProvisionedResources

<p>List provisioned resources for a component with details.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentProvisionedResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComponentProvisionedResourcesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentProvisionedResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentProvisionedResourcesRequest();
    $request->listComponentProvisionedResourcesInput = new ListComponentProvisionedResourcesInput();
    $request->listComponentProvisionedResourcesInput->componentName = 'accusantium';
    $request->listComponentProvisionedResourcesInput->nextToken = 'porro';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = ListComponentProvisionedResourcesXAmzTargetEnum::AWS_PROTON20200720_LIST_COMPONENT_PROVISIONED_RESOURCES;
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->listComponentProvisionedResources($request);

    if ($response->listComponentProvisionedResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponents

<p>List components with summary data. You can filter the result list by environment, service, or a single service instance.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComponentsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentsRequest();
    $request->listComponentsInput = new ListComponentsInput();
    $request->listComponentsInput->environmentName = 'incidunt';
    $request->listComponentsInput->maxResults = 539224;
    $request->listComponentsInput->nextToken = 'explicabo';
    $request->listComponentsInput->serviceInstanceName = 'minima';
    $request->listComponentsInput->serviceName = 'nisi';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = ListComponentsXAmzTargetEnum::AWS_PROTON20200720_LIST_COMPONENTS;
    $request->maxResults = 'atque';
    $request->nextToken = 'et';

    $response = $sdk->sdk->listComponents($request);

    if ($response->listComponentsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironmentAccountConnections

<p>View a list of environment account connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentAccountConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEnvironmentAccountConnectionsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAccountConnectionRequesterAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAccountConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentAccountConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentAccountConnectionsRequest();
    $request->listEnvironmentAccountConnectionsInput = new ListEnvironmentAccountConnectionsInput();
    $request->listEnvironmentAccountConnectionsInput->environmentName = 'esse';
    $request->listEnvironmentAccountConnectionsInput->maxResults = 910545;
    $request->listEnvironmentAccountConnectionsInput->nextToken = 'accusamus';
    $request->listEnvironmentAccountConnectionsInput->requestedBy = EnvironmentAccountConnectionRequesterAccountTypeEnum::MANAGEMENT_ACCOUNT;
    $request->listEnvironmentAccountConnectionsInput->statuses = [
        EnvironmentAccountConnectionStatusEnum::REJECTED,
        EnvironmentAccountConnectionStatusEnum::REJECTED,
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = ListEnvironmentAccountConnectionsXAmzTargetEnum::AWS_PROTON20200720_LIST_ENVIRONMENT_ACCOUNT_CONNECTIONS;
    $request->maxResults = 'rerum';
    $request->nextToken = 'occaecati';

    $response = $sdk->sdk->listEnvironmentAccountConnections($request);

    if ($response->listEnvironmentAccountConnectionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironmentOutputs

List the infrastructure as code outputs for your environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentOutputsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEnvironmentOutputsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentOutputsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentOutputsRequest();
    $request->listEnvironmentOutputsInput = new ListEnvironmentOutputsInput();
    $request->listEnvironmentOutputsInput->environmentName = 'minima';
    $request->listEnvironmentOutputsInput->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = ListEnvironmentOutputsXAmzTargetEnum::AWS_PROTON20200720_LIST_ENVIRONMENT_OUTPUTS;
    $request->nextToken = 'consequatur';

    $response = $sdk->sdk->listEnvironmentOutputs($request);

    if ($response->listEnvironmentOutputsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironmentProvisionedResources

List the provisioned resources for your environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentProvisionedResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEnvironmentProvisionedResourcesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentProvisionedResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentProvisionedResourcesRequest();
    $request->listEnvironmentProvisionedResourcesInput = new ListEnvironmentProvisionedResourcesInput();
    $request->listEnvironmentProvisionedResourcesInput->environmentName = 'minus';
    $request->listEnvironmentProvisionedResourcesInput->nextToken = 'quaerat';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = ListEnvironmentProvisionedResourcesXAmzTargetEnum::AWS_PROTON20200720_LIST_ENVIRONMENT_PROVISIONED_RESOURCES;
    $request->nextToken = 'quas';

    $response = $sdk->sdk->listEnvironmentProvisionedResources($request);

    if ($response->listEnvironmentProvisionedResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironmentTemplateVersions

List major or minor versions of an environment template with detail data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentTemplateVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEnvironmentTemplateVersionsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentTemplateVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentTemplateVersionsRequest();
    $request->listEnvironmentTemplateVersionsInput = new ListEnvironmentTemplateVersionsInput();
    $request->listEnvironmentTemplateVersionsInput->majorVersion = 'esse';
    $request->listEnvironmentTemplateVersionsInput->maxResults = 97468;
    $request->listEnvironmentTemplateVersionsInput->nextToken = 'a';
    $request->listEnvironmentTemplateVersionsInput->templateName = 'error';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = ListEnvironmentTemplateVersionsXAmzTargetEnum::AWS_PROTON20200720_LIST_ENVIRONMENT_TEMPLATE_VERSIONS;
    $request->maxResults = 'veritatis';
    $request->nextToken = 'consequuntur';

    $response = $sdk->sdk->listEnvironmentTemplateVersions($request);

    if ($response->listEnvironmentTemplateVersionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironmentTemplates

List environment templates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEnvironmentTemplatesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentTemplatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentTemplatesRequest();
    $request->listEnvironmentTemplatesInput = new ListEnvironmentTemplatesInput();
    $request->listEnvironmentTemplatesInput->maxResults = 94458;
    $request->listEnvironmentTemplatesInput->nextToken = 'similique';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ListEnvironmentTemplatesXAmzTargetEnum::AWS_PROTON20200720_LIST_ENVIRONMENT_TEMPLATES;
    $request->maxResults = 'eius';
    $request->nextToken = 'libero';

    $response = $sdk->sdk->listEnvironmentTemplates($request);

    if ($response->listEnvironmentTemplatesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironments

List environments with detail data summaries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEnvironmentsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTemplateFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentsRequest();
    $request->listEnvironmentsInput = new ListEnvironmentsInput();
    $request->listEnvironmentsInput->environmentTemplates = [
        new EnvironmentTemplateFilter(),
        new EnvironmentTemplateFilter(),
        new EnvironmentTemplateFilter(),
        new EnvironmentTemplateFilter(),
    ];
    $request->listEnvironmentsInput->maxResults = 742238;
    $request->listEnvironmentsInput->nextToken = 'accusantium';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = ListEnvironmentsXAmzTargetEnum::AWS_PROTON20200720_LIST_ENVIRONMENTS;
    $request->maxResults = 'aut';
    $request->nextToken = 'voluptatum';

    $response = $sdk->sdk->listEnvironments($request);

    if ($response->listEnvironmentsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRepositories

List linked repositories with detail data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRepositoriesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRepositoriesRequest();
    $request->listRepositoriesInput = new ListRepositoriesInput();
    $request->listRepositoriesInput->maxResults = 185232;
    $request->listRepositoriesInput->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = ListRepositoriesXAmzTargetEnum::AWS_PROTON20200720_LIST_REPOSITORIES;
    $request->maxResults = 'quasi';
    $request->nextToken = 'at';

    $response = $sdk->sdk->listRepositories($request);

    if ($response->listRepositoriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRepositorySyncDefinitions

List repository sync definitions with detail data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositorySyncDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRepositorySyncDefinitionsInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositorySyncDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRepositorySyncDefinitionsRequest();
    $request->listRepositorySyncDefinitionsInput = new ListRepositorySyncDefinitionsInput();
    $request->listRepositorySyncDefinitionsInput->nextToken = 'et';
    $request->listRepositorySyncDefinitionsInput->repositoryName = 'voluptate';
    $request->listRepositorySyncDefinitionsInput->repositoryProvider = RepositoryProviderEnum::GITHUB;
    $request->listRepositorySyncDefinitionsInput->syncType = SyncTypeEnum::TEMPLATE_SYNC;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = ListRepositorySyncDefinitionsXAmzTargetEnum::AWS_PROTON20200720_LIST_REPOSITORY_SYNC_DEFINITIONS;
    $request->nextToken = 'aut';

    $response = $sdk->sdk->listRepositorySyncDefinitions($request);

    if ($response->listRepositorySyncDefinitionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceInstanceOutputs

Get a list service of instance Infrastructure as Code (IaC) outputs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInstanceOutputsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceInstanceOutputsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInstanceOutputsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceInstanceOutputsRequest();
    $request->listServiceInstanceOutputsInput = new ListServiceInstanceOutputsInput();
    $request->listServiceInstanceOutputsInput->nextToken = 'laudantium';
    $request->listServiceInstanceOutputsInput->serviceInstanceName = 'eum';
    $request->listServiceInstanceOutputsInput->serviceName = 'mollitia';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = ListServiceInstanceOutputsXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICE_INSTANCE_OUTPUTS;
    $request->nextToken = 'impedit';

    $response = $sdk->sdk->listServiceInstanceOutputs($request);

    if ($response->listServiceInstanceOutputsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceInstanceProvisionedResources

List provisioned resources for a service instance with details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInstanceProvisionedResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceInstanceProvisionedResourcesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInstanceProvisionedResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceInstanceProvisionedResourcesRequest();
    $request->listServiceInstanceProvisionedResourcesInput = new ListServiceInstanceProvisionedResourcesInput();
    $request->listServiceInstanceProvisionedResourcesInput->nextToken = 'explicabo';
    $request->listServiceInstanceProvisionedResourcesInput->serviceInstanceName = 'voluptas';
    $request->listServiceInstanceProvisionedResourcesInput->serviceName = 'aut';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = ListServiceInstanceProvisionedResourcesXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICE_INSTANCE_PROVISIONED_RESOURCES;
    $request->nextToken = 'asperiores';

    $response = $sdk->sdk->listServiceInstanceProvisionedResources($request);

    if ($response->listServiceInstanceProvisionedResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceInstances

List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceInstancesFilter;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceInstancesFilterByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceInstancesSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceInstancesRequest();
    $request->listServiceInstancesInput = new ListServiceInstancesInput();
    $request->listServiceInstancesInput->filters = [
        new ListServiceInstancesFilter(),
    ];
    $request->listServiceInstancesInput->maxResults = 409054;
    $request->listServiceInstancesInput->nextToken = 'quaerat';
    $request->listServiceInstancesInput->serviceName = 'consequuntur';
    $request->listServiceInstancesInput->sortBy = ListServiceInstancesSortByEnum::LAST_DEPLOYMENT_ATTEMPTED_AT;
    $request->listServiceInstancesInput->sortOrder = SortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ListServiceInstancesXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICE_INSTANCES;
    $request->maxResults = 'porro';
    $request->nextToken = 'quod';

    $response = $sdk->sdk->listServiceInstances($request);

    if ($response->listServiceInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServicePipelineOutputs

Get a list of service pipeline Infrastructure as Code (IaC) outputs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicePipelineOutputsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicePipelineOutputsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServicePipelineOutputsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicePipelineOutputsRequest();
    $request->listServicePipelineOutputsInput = new ListServicePipelineOutputsInput();
    $request->listServicePipelineOutputsInput->nextToken = 'labore';
    $request->listServicePipelineOutputsInput->serviceName = 'ab';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = ListServicePipelineOutputsXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICE_PIPELINE_OUTPUTS;
    $request->nextToken = 'recusandae';

    $response = $sdk->sdk->listServicePipelineOutputs($request);

    if ($response->listServicePipelineOutputsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServicePipelineProvisionedResources

List provisioned resources for a service and pipeline with details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicePipelineProvisionedResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicePipelineProvisionedResourcesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServicePipelineProvisionedResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicePipelineProvisionedResourcesRequest();
    $request->listServicePipelineProvisionedResourcesInput = new ListServicePipelineProvisionedResourcesInput();
    $request->listServicePipelineProvisionedResourcesInput->nextToken = 'totam';
    $request->listServicePipelineProvisionedResourcesInput->serviceName = 'fugiat';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ListServicePipelineProvisionedResourcesXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICE_PIPELINE_PROVISIONED_RESOURCES;
    $request->nextToken = 'cum';

    $response = $sdk->sdk->listServicePipelineProvisionedResources($request);

    if ($response->listServicePipelineProvisionedResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceTemplateVersions

List major or minor versions of a service template with detail data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceTemplateVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceTemplateVersionsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceTemplateVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceTemplateVersionsRequest();
    $request->listServiceTemplateVersionsInput = new ListServiceTemplateVersionsInput();
    $request->listServiceTemplateVersionsInput->majorVersion = 'commodi';
    $request->listServiceTemplateVersionsInput->maxResults = 447144;
    $request->listServiceTemplateVersionsInput->nextToken = 'corporis';
    $request->listServiceTemplateVersionsInput->templateName = 'reiciendis';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = ListServiceTemplateVersionsXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICE_TEMPLATE_VERSIONS;
    $request->maxResults = 'in';
    $request->nextToken = 'exercitationem';

    $response = $sdk->sdk->listServiceTemplateVersions($request);

    if ($response->listServiceTemplateVersionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceTemplates

List service templates with detail data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceTemplatesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceTemplatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceTemplatesRequest();
    $request->listServiceTemplatesInput = new ListServiceTemplatesInput();
    $request->listServiceTemplatesInput->maxResults = 937285;
    $request->listServiceTemplatesInput->nextToken = 'facere';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = ListServiceTemplatesXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICE_TEMPLATES;
    $request->maxResults = 'dolore';
    $request->nextToken = 'sunt';

    $response = $sdk->sdk->listServiceTemplates($request);

    if ($response->listServiceTemplatesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

List services with summaries of detail data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesRequest();
    $request->listServicesInput = new ListServicesInput();
    $request->listServicesInput->maxResults = 992012;
    $request->listServicesInput->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = ListServicesXAmzTargetEnum::AWS_PROTON20200720_LIST_SERVICES;
    $request->maxResults = 'corporis';
    $request->nextToken = 'harum';

    $response = $sdk->sdk->listServices($request);

    if ($response->listServicesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List tags for a resource. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->maxResults = 385237;
    $request->listTagsForResourceInput->nextToken = 'ipsa';
    $request->listTagsForResourceInput->resourceArn = 'voluptates';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_PROTON20200720_LIST_TAGS_FOR_RESOURCE;
    $request->maxResults = 'voluptas';
    $request->nextToken = 'voluptas';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyResourceDeploymentStatusChange

<p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyResourceDeploymentStatusChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyResourceDeploymentStatusChangeInput;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDeploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotifyResourceDeploymentStatusChangeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyResourceDeploymentStatusChangeRequest();
    $request->notifyResourceDeploymentStatusChangeInput = new NotifyResourceDeploymentStatusChangeInput();
    $request->notifyResourceDeploymentStatusChangeInput->deploymentId = 'minima';
    $request->notifyResourceDeploymentStatusChangeInput->outputs = [
        new Output(),
        new Output(),
        new Output(),
    ];
    $request->notifyResourceDeploymentStatusChangeInput->resourceArn = 'dolorum';
    $request->notifyResourceDeploymentStatusChangeInput->status = ResourceDeploymentStatusEnum::IN_PROGRESS;
    $request->notifyResourceDeploymentStatusChangeInput->statusMessage = 'minus';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = NotifyResourceDeploymentStatusChangeXAmzTargetEnum::AWS_PROTON20200720_NOTIFY_RESOURCE_DEPLOYMENT_STATUS_CHANGE;

    $response = $sdk->sdk->notifyResourceDeploymentStatusChange($request);

    if ($response->notifyResourceDeploymentStatusChangeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectEnvironmentAccountConnection

<p>In a management account, reject an environment account connection from another environment account.</p> <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account connection.</p> <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectEnvironmentAccountConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RejectEnvironmentAccountConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\RejectEnvironmentAccountConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectEnvironmentAccountConnectionRequest();
    $request->rejectEnvironmentAccountConnectionInput = new RejectEnvironmentAccountConnectionInput();
    $request->rejectEnvironmentAccountConnectionInput->id = '53b88f3a-8d8f-45c0-b2f2-fb7b194a276b';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = RejectEnvironmentAccountConnectionXAmzTargetEnum::AWS_PROTON20200720_REJECT_ENVIRONMENT_ACCOUNT_CONNECTION;

    $response = $sdk->sdk->rejectEnvironmentAccountConnection($request);

    if ($response->rejectEnvironmentAccountConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceArn = 'illo';
    $request->tagResourceInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_PROTON20200720_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceArn = 'necessitatibus';
    $request->untagResourceInput->tagKeys = [
        'ea',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_PROTON20200720_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountSettings

Update Proton settings that are used for multiple services in the Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryBranchInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountSettingsRequest();
    $request->updateAccountSettingsInput = new UpdateAccountSettingsInput();
    $request->updateAccountSettingsInput->deletePipelineProvisioningRepository = false;
    $request->updateAccountSettingsInput->pipelineCodebuildRoleArn = 'ex';
    $request->updateAccountSettingsInput->pipelineProvisioningRepository = new RepositoryBranchInput();
    $request->updateAccountSettingsInput->pipelineProvisioningRepository->branch = 'sit';
    $request->updateAccountSettingsInput->pipelineProvisioningRepository->name = 'Cecelia Lakin';
    $request->updateAccountSettingsInput->pipelineProvisioningRepository->provider = RepositoryProviderEnum::GITHUB;
    $request->updateAccountSettingsInput->pipelineServiceRoleArn = 'ipsam';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = UpdateAccountSettingsXAmzTargetEnum::AWS_PROTON20200720_UPDATE_ACCOUNT_SETTINGS;

    $response = $sdk->sdk->updateAccountSettings($request);

    if ($response->updateAccountSettingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComponent

<p>Update a component.</p> <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is <code>IN_PROGRESS</code>.</p> </note> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateComponentInput;
use \OpenAPI\OpenAPI\Models\Shared\ComponentDeploymentUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateComponentRequest();
    $request->updateComponentInput = new UpdateComponentInput();
    $request->updateComponentInput->clientToken = 'recusandae';
    $request->updateComponentInput->deploymentType = ComponentDeploymentUpdateTypeEnum::CURRENT_VERSION;
    $request->updateComponentInput->description = 'nulla';
    $request->updateComponentInput->name = 'Deborah Turcotte';
    $request->updateComponentInput->serviceInstanceName = 'in';
    $request->updateComponentInput->serviceName = 'officiis';
    $request->updateComponentInput->serviceSpec = 'beatae';
    $request->updateComponentInput->templateFile = 'laudantium';
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = UpdateComponentXAmzTargetEnum::AWS_PROTON20200720_UPDATE_COMPONENT;

    $response = $sdk->sdk->updateComponent($request);

    if ($response->updateComponentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironment

<p>Update an environment.</p> <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p> <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.</p> <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account connection if it <i>isn't</i> already associated with an environment connection.</p> <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update both.</p> <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p> <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User Guide</i>.</p> <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryBranchInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentRequest();
    $request->updateEnvironmentInput = new UpdateEnvironmentInput();
    $request->updateEnvironmentInput->codebuildRoleArn = 'hic';
    $request->updateEnvironmentInput->componentRoleArn = 'expedita';
    $request->updateEnvironmentInput->deploymentType = DeploymentUpdateTypeEnum::MAJOR_VERSION;
    $request->updateEnvironmentInput->description = 'neque';
    $request->updateEnvironmentInput->environmentAccountConnectionId = 'dolorum';
    $request->updateEnvironmentInput->name = 'Brandi Padberg';
    $request->updateEnvironmentInput->protonServiceRoleArn = 'tempora';
    $request->updateEnvironmentInput->provisioningRepository = new RepositoryBranchInput();
    $request->updateEnvironmentInput->provisioningRepository->branch = 'atque';
    $request->updateEnvironmentInput->provisioningRepository->name = 'Miss April Stiedemann';
    $request->updateEnvironmentInput->provisioningRepository->provider = RepositoryProviderEnum::GITHUB;
    $request->updateEnvironmentInput->spec = 'consequatur';
    $request->updateEnvironmentInput->templateMajorVersion = 'esse';
    $request->updateEnvironmentInput->templateMinorVersion = 'ipsam';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = UpdateEnvironmentXAmzTargetEnum::AWS_PROTON20200720_UPDATE_ENVIRONMENT;

    $response = $sdk->sdk->updateEnvironment($request);

    if ($response->updateEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironmentAccountConnection

<p>In an environment account, update an environment account connection to use a new IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account connections</a> in the <i>Proton User guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentAccountConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnvironmentAccountConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentAccountConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentAccountConnectionRequest();
    $request->updateEnvironmentAccountConnectionInput = new UpdateEnvironmentAccountConnectionInput();
    $request->updateEnvironmentAccountConnectionInput->codebuildRoleArn = 'ex';
    $request->updateEnvironmentAccountConnectionInput->componentRoleArn = 'sed';
    $request->updateEnvironmentAccountConnectionInput->id = '065e904f-3b11-494b-8abf-603a79f9dfe0';
    $request->updateEnvironmentAccountConnectionInput->roleArn = 'est';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = UpdateEnvironmentAccountConnectionXAmzTargetEnum::AWS_PROTON20200720_UPDATE_ENVIRONMENT_ACCOUNT_CONNECTION;

    $response = $sdk->sdk->updateEnvironmentAccountConnection($request);

    if ($response->updateEnvironmentAccountConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironmentTemplate

Update an environment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnvironmentTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentTemplateRequest();
    $request->updateEnvironmentTemplateInput = new UpdateEnvironmentTemplateInput();
    $request->updateEnvironmentTemplateInput->description = 'voluptatem';
    $request->updateEnvironmentTemplateInput->displayName = 'quisquam';
    $request->updateEnvironmentTemplateInput->name = 'Ryan Littel';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = UpdateEnvironmentTemplateXAmzTargetEnum::AWS_PROTON20200720_UPDATE_ENVIRONMENT_TEMPLATE;

    $response = $sdk->sdk->updateEnvironmentTemplate($request);

    if ($response->updateEnvironmentTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironmentTemplateVersion

Update a major or minor version of an environment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnvironmentTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\TemplateVersionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentTemplateVersionRequest();
    $request->updateEnvironmentTemplateVersionInput = new UpdateEnvironmentTemplateVersionInput();
    $request->updateEnvironmentTemplateVersionInput->description = 'assumenda';
    $request->updateEnvironmentTemplateVersionInput->majorVersion = 'ea';
    $request->updateEnvironmentTemplateVersionInput->minorVersion = 'atque';
    $request->updateEnvironmentTemplateVersionInput->status = TemplateVersionStatusEnum::DRAFT;
    $request->updateEnvironmentTemplateVersionInput->templateName = 'officiis';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = UpdateEnvironmentTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_UPDATE_ENVIRONMENT_TEMPLATE_VERSION;

    $response = $sdk->sdk->updateEnvironmentTemplateVersion($request);

    if ($response->updateEnvironmentTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

<p>Edit a service description or use a spec to add and delete service instances.</p> <note> <p>Existing service instances and the service pipeline <i>can't</i> be edited using this API. They can only be deleted.</p> </note> <p>Use the <code>description</code> parameter to modify the description.</p> <p>Edit the <code>spec</code> parameter to add or delete instances.</p> <note> <p>You can't delete a service instance (remove it from the spec) if it has an attached component.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->updateServiceInput = new UpdateServiceInput();
    $request->updateServiceInput->description = 'corrupti';
    $request->updateServiceInput->name = 'Jeremiah Kuvalis';
    $request->updateServiceInput->spec = 'atque';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = UpdateServiceXAmzTargetEnum::AWS_PROTON20200720_UPDATE_SERVICE;

    $response = $sdk->sdk->updateService($request);

    if ($response->updateServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceInstance

<p>Update a service instance.</p> <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p> <note> <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is <code>IN_PROGRESS</code>.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceInstanceRequest();
    $request->updateServiceInstanceInput = new UpdateServiceInstanceInput();
    $request->updateServiceInstanceInput->clientToken = 'doloremque';
    $request->updateServiceInstanceInput->deploymentType = DeploymentUpdateTypeEnum::MAJOR_VERSION;
    $request->updateServiceInstanceInput->name = 'Ruth Breitenberg';
    $request->updateServiceInstanceInput->serviceName = 'laboriosam';
    $request->updateServiceInstanceInput->spec = 'velit';
    $request->updateServiceInstanceInput->templateMajorVersion = 'a';
    $request->updateServiceInstanceInput->templateMinorVersion = 'molestias';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = UpdateServiceInstanceXAmzTargetEnum::AWS_PROTON20200720_UPDATE_SERVICE_INSTANCE;

    $response = $sdk->sdk->updateServiceInstance($request);

    if ($response->updateServiceInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServicePipeline

<p>Update the service pipeline.</p> <p>There are four modes for updating a service pipeline. The <code>deploymentType</code> field defines the mode.</p> <dl> <dt/> <dd> <p> <code>NONE</code> </p> <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p> </dd> <dt/> <dd> <p> <code>CURRENT_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. <i>Don’t</i> include major or minor version parameters when you use this <code>deployment-type</code>.</p> </dd> <dt/> <dd> <p> <code>MINOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.</p> </dd> <dt/> <dd> <p> <code>MAJOR_VERSION</code> </p> <p>In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</p> </dd> </dl>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServicePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServicePipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServicePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServicePipelineRequest();
    $request->updateServicePipelineInput = new UpdateServicePipelineInput();
    $request->updateServicePipelineInput->deploymentType = DeploymentUpdateTypeEnum::NONE;
    $request->updateServicePipelineInput->serviceName = 'eveniet';
    $request->updateServicePipelineInput->spec = 'occaecati';
    $request->updateServicePipelineInput->templateMajorVersion = 'consequuntur';
    $request->updateServicePipelineInput->templateMinorVersion = 'fugit';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = UpdateServicePipelineXAmzTargetEnum::AWS_PROTON20200720_UPDATE_SERVICE_PIPELINE;

    $response = $sdk->sdk->updateServicePipeline($request);

    if ($response->updateServicePipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceSyncBlocker

Update the service sync blocker by resolving it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSyncBlockerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceSyncBlockerInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSyncBlockerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceSyncBlockerRequest();
    $request->updateServiceSyncBlockerInput = new UpdateServiceSyncBlockerInput();
    $request->updateServiceSyncBlockerInput->id = 'e3e06080-7e2b-46e3-ab88-45f0597a60ff';
    $request->updateServiceSyncBlockerInput->resolvedReason = 'dolores';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = UpdateServiceSyncBlockerXAmzTargetEnum::AWS_PROTON20200720_UPDATE_SERVICE_SYNC_BLOCKER;

    $response = $sdk->sdk->updateServiceSyncBlocker($request);

    if ($response->updateServiceSyncBlockerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceSyncConfig

Update the Proton Ops config file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceSyncConfigRequest();
    $request->updateServiceSyncConfigInput = new UpdateServiceSyncConfigInput();
    $request->updateServiceSyncConfigInput->branch = 'omnis';
    $request->updateServiceSyncConfigInput->filePath = 'quaerat';
    $request->updateServiceSyncConfigInput->repositoryName = 'molestiae';
    $request->updateServiceSyncConfigInput->repositoryProvider = RepositoryProviderEnum::GITHUB_ENTERPRISE;
    $request->updateServiceSyncConfigInput->serviceName = 'ut';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = UpdateServiceSyncConfigXAmzTargetEnum::AWS_PROTON20200720_UPDATE_SERVICE_SYNC_CONFIG;

    $response = $sdk->sdk->updateServiceSyncConfig($request);

    if ($response->updateServiceSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceTemplate

Update a service template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceTemplateInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceTemplateRequest();
    $request->updateServiceTemplateInput = new UpdateServiceTemplateInput();
    $request->updateServiceTemplateInput->description = 'esse';
    $request->updateServiceTemplateInput->displayName = 'provident';
    $request->updateServiceTemplateInput->name = 'Natalie Witting';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = UpdateServiceTemplateXAmzTargetEnum::AWS_PROTON20200720_UPDATE_SERVICE_TEMPLATE;

    $response = $sdk->sdk->updateServiceTemplate($request);

    if ($response->updateServiceTemplateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceTemplateVersion

Update a major or minor version of a service template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\CompatibleEnvironmentTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\TemplateVersionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTemplateSupportedComponentSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTemplateVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceTemplateVersionRequest();
    $request->updateServiceTemplateVersionInput = new UpdateServiceTemplateVersionInput();
    $request->updateServiceTemplateVersionInput->compatibleEnvironmentTemplates = [
        new CompatibleEnvironmentTemplateInput(),
        new CompatibleEnvironmentTemplateInput(),
        new CompatibleEnvironmentTemplateInput(),
    ];
    $request->updateServiceTemplateVersionInput->description = 'ex';
    $request->updateServiceTemplateVersionInput->majorVersion = 'aliquid';
    $request->updateServiceTemplateVersionInput->minorVersion = 'accusantium';
    $request->updateServiceTemplateVersionInput->status = TemplateVersionStatusEnum::PUBLISHED;
    $request->updateServiceTemplateVersionInput->supportedComponentSources = [
        ServiceTemplateSupportedComponentSourceTypeEnum::DIRECTLY_DEFINED,
        ServiceTemplateSupportedComponentSourceTypeEnum::DIRECTLY_DEFINED,
        ServiceTemplateSupportedComponentSourceTypeEnum::DIRECTLY_DEFINED,
        ServiceTemplateSupportedComponentSourceTypeEnum::DIRECTLY_DEFINED,
    ];
    $request->updateServiceTemplateVersionInput->templateName = 'ullam';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = UpdateServiceTemplateVersionXAmzTargetEnum::AWS_PROTON20200720_UPDATE_SERVICE_TEMPLATE_VERSION;

    $response = $sdk->sdk->updateServiceTemplateVersion($request);

    if ($response->updateServiceTemplateVersionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTemplateSyncConfig

Update template sync configuration parameters, except for the <code>templateName</code> and <code>templateType</code>. Repository details (branch, name, and provider) should be of a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see <a>CreateRepository</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateSyncConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTemplateSyncConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateSyncConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTemplateSyncConfigRequest();
    $request->updateTemplateSyncConfigInput = new UpdateTemplateSyncConfigInput();
    $request->updateTemplateSyncConfigInput->branch = 'voluptatibus';
    $request->updateTemplateSyncConfigInput->repositoryName = 'molestias';
    $request->updateTemplateSyncConfigInput->repositoryProvider = RepositoryProviderEnum::BITBUCKET;
    $request->updateTemplateSyncConfigInput->subdirectory = 'sapiente';
    $request->updateTemplateSyncConfigInput->templateName = 'cumque';
    $request->updateTemplateSyncConfigInput->templateType = TemplateTypeEnum::ENVIRONMENT;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = UpdateTemplateSyncConfigXAmzTargetEnum::AWS_PROTON20200720_UPDATE_TEMPLATE_SYNC_CONFIG;

    $response = $sdk->sdk->updateTemplateSyncConfig($request);

    if ($response->updateTemplateSyncConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
