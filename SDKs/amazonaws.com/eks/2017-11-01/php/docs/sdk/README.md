# SDK

## Overview

<p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on Amazon Web Services without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. </p> <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/eks/>
### Available Operations

* [associateEncryptionConfig](#associateencryptionconfig) - <p>Associate encryption configuration to an existing cluster.</p> <p>You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</p>
* [associateIdentityProviderConfig](#associateidentityproviderconfig) - <p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>
* [createAddon](#createaddon) - <p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>
* [createCluster](#createcluster) - <p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
* [createFargateProfile](#createfargateprofile) - <p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>
* [createNodegroup](#createnodegroup) - <p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>
* [deleteAddon](#deleteaddon) - <p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>
* [deleteCluster](#deletecluster) - <p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>
* [deleteFargateProfile](#deletefargateprofile) - <p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>
* [deleteNodegroup](#deletenodegroup) - Deletes an Amazon EKS node group for a cluster.
* [deregisterCluster](#deregistercluster) - Deregisters a connected cluster to remove it from the Amazon EKS control plane.
* [describeAddon](#describeaddon) - Describes an Amazon EKS add-on.
* [describeAddonConfiguration](#describeaddonconfiguration) - Returns configuration options.
* [describeAddonVersions](#describeaddonversions) - Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned. 
* [describeCluster](#describecluster) - <p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>
* [describeFargateProfile](#describefargateprofile) - Returns descriptive information about an Fargate profile.
* [describeIdentityProviderConfig](#describeidentityproviderconfig) - Returns descriptive information about an identity provider configuration.
* [describeNodegroup](#describenodegroup) - Returns descriptive information about an Amazon EKS node group.
* [describeUpdate](#describeupdate) - <p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>
* [disassociateIdentityProviderConfig](#disassociateidentityproviderconfig) - Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.
* [listAddons](#listaddons) - Lists the available add-ons.
* [listClusters](#listclusters) - Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.
* [listFargateProfiles](#listfargateprofiles) - Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.
* [listIdentityProviderConfigs](#listidentityproviderconfigs) - A list of identity provider configurations.
* [listNodegroups](#listnodegroups) - Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.
* [listTagsForResource](#listtagsforresource) - List the tags for an Amazon EKS resource.
* [listUpdates](#listupdates) - Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.
* [registerCluster](#registercluster) - <p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.
* [untagResource](#untagresource) - Deletes specified tags from a resource.
* [updateAddon](#updateaddon) - Updates an Amazon EKS add-on.
* [updateClusterConfig](#updateclusterconfig) - <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can't update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
* [updateClusterVersion](#updateclusterversion) - <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>
* [updateNodegroupConfig](#updatenodegroupconfig) - Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
* [updateNodegroupVersion](#updatenodegroupversion) - <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>

## associateEncryptionConfig

<p>Associate encryption configuration to an existing cluster.</p> <p>You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEncryptionConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEncryptionConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\Provider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateEncryptionConfigRequest();
    $request->requestBody = new AssociateEncryptionConfigRequestBody();
    $request->requestBody->clientRequestToken = 'debitis';
    $request->requestBody->encryptionConfig = [
        new EncryptionConfig(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->name = 'Miriam Huel';

    $response = $sdk->sdk->associateEncryptionConfig($request);

    if ($response->associateEncryptionConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateIdentityProviderConfig

<p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateIdentityProviderConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateIdentityProviderConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AssociateIdentityProviderConfigRequestBodyOidc;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateIdentityProviderConfigRequest();
    $request->requestBody = new AssociateIdentityProviderConfigRequestBody();
    $request->requestBody->clientRequestToken = 'ab';
    $request->requestBody->oidc = new AssociateIdentityProviderConfigRequestBodyOidc();
    $request->requestBody->oidc->clientId = 'quis';
    $request->requestBody->oidc->groupsClaim = 'veritatis';
    $request->requestBody->oidc->groupsPrefix = 'deserunt';
    $request->requestBody->oidc->identityProviderConfigName = 'perferendis';
    $request->requestBody->oidc->issuerUrl = 'ipsam';
    $request->requestBody->oidc->requiredClaims = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->requestBody->oidc->usernameClaim = 'quod';
    $request->requestBody->oidc->usernamePrefix = 'esse';
    $request->requestBody->tags = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->name = 'Pauline Dibbert';

    $response = $sdk->sdk->associateIdentityProviderConfig($request);

    if ($response->associateIdentityProviderConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAddon

<p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddonRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddonRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddonRequestBodyResolveConflictsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAddonRequest();
    $request->requestBody = new CreateAddonRequestBody();
    $request->requestBody->addonName = 'esse';
    $request->requestBody->addonVersion = 'ipsum';
    $request->requestBody->clientRequestToken = 'excepturi';
    $request->requestBody->configurationValues = 'aspernatur';
    $request->requestBody->resolveConflicts = CreateAddonRequestBodyResolveConflictsEnum::OVERWRITE;
    $request->requestBody->serviceAccountRoleArn = 'ad';
    $request->requestBody->tags = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->name = 'Roger Beier';

    $response = $sdk->sdk->createAddon($request);

    if ($response->createAddonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCluster

<p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\Provider;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBodyKubernetesNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\IpFamilyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBodyLogging;
use \OpenAPI\OpenAPI\Models\Shared\LogSetup;
use \OpenAPI\OpenAPI\Models\Shared\LogTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBodyOutpostConfig;
use \OpenAPI\OpenAPI\Models\Shared\ControlPlanePlacementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBodyResourcesVpcConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->requestBody = new CreateClusterRequestBody();
    $request->requestBody->clientRequestToken = 'mollitia';
    $request->requestBody->encryptionConfig = [
        new EncryptionConfig(),
        new EncryptionConfig(),
        new EncryptionConfig(),
    ];
    $request->requestBody->kubernetesNetworkConfig = new CreateClusterRequestBodyKubernetesNetworkConfig();
    $request->requestBody->kubernetesNetworkConfig->ipFamily = IpFamilyEnum::IPV4;
    $request->requestBody->kubernetesNetworkConfig->serviceIpv4Cidr = 'dolorem';
    $request->requestBody->logging = new CreateClusterRequestBodyLogging();
    $request->requestBody->logging->clusterLogging = [
        new LogSetup(),
        new LogSetup(),
    ];
    $request->requestBody->name = 'Della Halvorson';
    $request->requestBody->outpostConfig = new CreateClusterRequestBodyOutpostConfig();
    $request->requestBody->outpostConfig->controlPlaneInstanceType = 'minima';
    $request->requestBody->outpostConfig->controlPlanePlacement = new ControlPlanePlacementRequest();
    $request->requestBody->outpostConfig->controlPlanePlacement->groupName = 'excepturi';
    $request->requestBody->outpostConfig->outpostArns = [
        'iure',
    ];
    $request->requestBody->resourcesVpcConfig = new CreateClusterRequestBodyResourcesVpcConfig();
    $request->requestBody->resourcesVpcConfig->endpointPrivateAccess = false;
    $request->requestBody->resourcesVpcConfig->endpointPublicAccess = false;
    $request->requestBody->resourcesVpcConfig->publicAccessCidrs = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->requestBody->resourcesVpcConfig->securityGroupIds = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->requestBody->resourcesVpcConfig->subnetIds = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->requestBody->roleArn = 'quam';
    $request->requestBody->tags = [
        'velit' => 'error',
        'quia' => 'quis',
    ];
    $request->requestBody->version = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFargateProfile

<p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFargateProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFargateProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FargateProfileSelector;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFargateProfileRequest();
    $request->requestBody = new CreateFargateProfileRequestBody();
    $request->requestBody->clientRequestToken = 'ipsam';
    $request->requestBody->fargateProfileName = 'id';
    $request->requestBody->podExecutionRoleArn = 'possimus';
    $request->requestBody->selectors = [
        new FargateProfileSelector(),
    ];
    $request->requestBody->subnets = [
        'error',
    ];
    $request->requestBody->tags = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->name = 'Shawna Carter';

    $response = $sdk->sdk->createFargateProfile($request);

    if ($response->createFargateProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNodegroup

<p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequestBodyAmiTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequestBodyCapacityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequestBodyLaunchTemplate;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequestBodyRemoteAccess;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequestBodyScalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\Taint;
use \OpenAPI\OpenAPI\Models\Shared\TaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNodegroupRequestBodyUpdateConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNodegroupRequest();
    $request->requestBody = new CreateNodegroupRequestBody();
    $request->requestBody->amiType = CreateNodegroupRequestBodyAmiTypeEnum::BOTTLEROCKETX8664;
    $request->requestBody->capacityType = CreateNodegroupRequestBodyCapacityTypeEnum::ON_DEMAND;
    $request->requestBody->clientRequestToken = 'harum';
    $request->requestBody->diskSize = 317983;
    $request->requestBody->instanceTypes = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->requestBody->labels = [
        'molestias' => 'excepturi',
        'pariatur' => 'modi',
        'praesentium' => 'rem',
    ];
    $request->requestBody->launchTemplate = new CreateNodegroupRequestBodyLaunchTemplate();
    $request->requestBody->launchTemplate->id = 'e1e91e45-0ad2-4abd-8426-9802d502a94b';
    $request->requestBody->launchTemplate->name = 'Francisco Windler';
    $request->requestBody->launchTemplate->version = 'eligendi';
    $request->requestBody->nodeRole = 'sint';
    $request->requestBody->nodegroupName = 'aliquid';
    $request->requestBody->releaseVersion = 'provident';
    $request->requestBody->remoteAccess = new CreateNodegroupRequestBodyRemoteAccess();
    $request->requestBody->remoteAccess->ec2SshKey = 'necessitatibus';
    $request->requestBody->remoteAccess->sourceSecurityGroups = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->requestBody->scalingConfig = new CreateNodegroupRequestBodyScalingConfig();
    $request->requestBody->scalingConfig->desiredSize = 952749;
    $request->requestBody->scalingConfig->maxSize = 680056;
    $request->requestBody->scalingConfig->minSize = 447125;
    $request->requestBody->subnets = [
        'illum',
        'maiores',
    ];
    $request->requestBody->tags = [
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->requestBody->taints = [
        new Taint(),
        new Taint(),
        new Taint(),
    ];
    $request->requestBody->updateConfig = new CreateNodegroupRequestBodyUpdateConfig();
    $request->requestBody->updateConfig->maxUnavailable = 881104;
    $request->requestBody->updateConfig->maxUnavailablePercentage = 249796;
    $request->requestBody->version = 'occaecati';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->name = 'Jaime Will';

    $response = $sdk->sdk->createNodegroup($request);

    if ($response->createNodegroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAddon

<p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddonRequest();
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->addonName = 'magnam';
    $request->name = 'Alfonso Green';
    $request->preserve = false;

    $response = $sdk->sdk->deleteAddon($request);

    if ($response->deleteAddonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCluster

<p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClusterRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';
    $request->name = 'Miriam Hermann';

    $response = $sdk->sdk->deleteCluster($request);

    if ($response->deleteClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFargateProfile

<p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFargateProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFargateProfileRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->fargateProfileName = 'dolor';
    $request->name = 'Ms. Fred Hilll';

    $response = $sdk->sdk->deleteFargateProfile($request);

    if ($response->deleteFargateProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNodegroup

Deletes an Amazon EKS node group for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNodegroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNodegroupRequest();
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';
    $request->name = 'Elvira Herman';
    $request->nodegroupName = 'repellat';

    $response = $sdk->sdk->deleteNodegroup($request);

    if ($response->deleteNodegroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterCluster

Deregisters a connected cluster to remove it from the Amazon EKS control plane.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterClusterRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->name = 'Victor Casper';

    $response = $sdk->sdk->deregisterCluster($request);

    if ($response->deregisterClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAddon

Describes an Amazon EKS add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAddonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAddonRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->addonName = 'ab';
    $request->name = 'Rickey Hintz';

    $response = $sdk->sdk->describeAddon($request);

    if ($response->describeAddonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAddonConfiguration

Returns configuration options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAddonConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAddonConfigurationRequest();
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->addonName = 'amet';
    $request->addonVersion = 'aut';

    $response = $sdk->sdk->describeAddonConfiguration($request);

    if ($response->describeAddonConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAddonVersions

Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAddonVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAddonVersionsRequest();
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';
    $request->addonName = 'totam';
    $request->kubernetesVersion = 'dignissimos';
    $request->maxResults = 54338;
    $request->nextToken = 'quis';
    $request->owners = [
        'eos',
    ];
    $request->publishers = [
        'dolores',
    ];
    $request->types = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];

    $response = $sdk->sdk->describeAddonVersions($request);

    if ($response->describeAddonVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCluster

<p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClusterRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->name = 'Ms. Vickie Mraz';

    $response = $sdk->sdk->describeCluster($request);

    if ($response->describeClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFargateProfile

Returns descriptive information about an Fargate profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFargateProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFargateProfileRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->fargateProfileName = 'pariatur';
    $request->name = 'Loren Renner';

    $response = $sdk->sdk->describeFargateProfile($request);

    if ($response->describeFargateProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIdentityProviderConfig

Returns descriptive information about an identity provider configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityProviderConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityProviderConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIdentityProviderConfigRequest();
    $request->requestBody = new DescribeIdentityProviderConfigRequestBody();
    $request->requestBody->identityProviderConfig = new DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig();
    $request->requestBody->identityProviderConfig->name = 'Gene Effertz';
    $request->requestBody->identityProviderConfig->type = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->name = 'Mr. Lee Funk III';

    $response = $sdk->sdk->describeIdentityProviderConfig($request);

    if ($response->describeIdentityProviderConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeNodegroup

Returns descriptive information about an Amazon EKS node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNodegroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNodegroupRequest();
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->name = 'Kay Bailey DDS';
    $request->nodegroupName = 'dolorum';

    $response = $sdk->sdk->describeNodegroup($request);

    if ($response->describeNodegroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUpdate

<p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUpdateRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->addonName = 'asperiores';
    $request->name = 'Edna Klocko';
    $request->nodegroupName = 'eius';
    $request->updateId = 'aspernatur';

    $response = $sdk->sdk->describeUpdate($request);

    if ($response->describeUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateIdentityProviderConfig

Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateIdentityProviderConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateIdentityProviderConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateIdentityProviderConfigRequest();
    $request->requestBody = new DisassociateIdentityProviderConfigRequestBody();
    $request->requestBody->clientRequestToken = 'perferendis';
    $request->requestBody->identityProviderConfig = new DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig();
    $request->requestBody->identityProviderConfig->name = 'Marianne Thompson';
    $request->requestBody->identityProviderConfig->type = 'suscipit';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->name = 'Alex Goodwin';

    $response = $sdk->sdk->disassociateIdentityProviderConfig($request);

    if ($response->disassociateIdentityProviderConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAddons

Lists the available add-ons.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAddonsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAddonsRequest();
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->maxResults = 215507;
    $request->name = 'Saul Fay';
    $request->nextToken = 'numquam';

    $response = $sdk->sdk->listAddons($request);

    if ($response->listAddonsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusters

Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClustersRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->include = [
        'sed',
    ];
    $request->maxResults = 424685;
    $request->nextToken = 'libero';

    $response = $sdk->sdk->listClusters($request);

    if ($response->listClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFargateProfiles

Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFargateProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFargateProfilesRequest();
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->maxResults = 807581;
    $request->name = 'Dominic Carroll';
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->listFargateProfiles($request);

    if ($response->listFargateProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentityProviderConfigs

A list of identity provider configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityProviderConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentityProviderConfigsRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->maxResults = 840429;
    $request->name = 'Gladys Considine';
    $request->nextToken = 'sunt';

    $response = $sdk->sdk->listIdentityProviderConfigs($request);

    if ($response->listIdentityProviderConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNodegroups

Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNodegroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNodegroupsRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';
    $request->maxResults = 92596;
    $request->name = 'Dale Boehm';
    $request->nextToken = 'tempore';

    $response = $sdk->sdk->listNodegroups($request);

    if ($response->listNodegroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags for an Amazon EKS resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->resourceArn = 'dolorum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUpdates

Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUpdatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUpdatesRequest();
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->addonName = 'repellendus';
    $request->maxResults = 785153;
    $request->name = 'Alexander Prosacco';
    $request->nextToken = 'quae';
    $request->nodegroupName = 'laudantium';

    $response = $sdk->sdk->listUpdates($request);

    if ($response->listUpdatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerCluster

<p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterClusterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterClusterRequestBodyConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorConfigProviderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterClusterRequest();
    $request->requestBody = new RegisterClusterRequestBody();
    $request->requestBody->clientRequestToken = 'odio';
    $request->requestBody->connectorConfig = new RegisterClusterRequestBodyConnectorConfig();
    $request->requestBody->connectorConfig->provider = ConnectorConfigProviderEnum::TANZU;
    $request->requestBody->connectorConfig->roleArn = 'voluptatibus';
    $request->requestBody->name = 'Ignacio Moen';
    $request->requestBody->tags = [
        'voluptate' => 'consectetur',
        'vero' => 'tenetur',
        'dignissimos' => 'hic',
        'distinctio' => 'quod',
    ];
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->registerCluster($request);

    if ($response->registerClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'sequi' => 'natus',
        'impedit' => 'aut',
        'voluptatibus' => 'exercitationem',
        'nulla' => 'fugit',
    ];
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'alias';
    $request->resourceArn = 'officia';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes specified tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'magnam';
    $request->resourceArn = 'ratione';
    $request->tagKeys = [
        'laudantium',
        'dicta',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAddon

Updates an Amazon EKS add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAddonRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAddonRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAddonRequestBodyResolveConflictsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAddonRequest();
    $request->requestBody = new UpdateAddonRequestBody();
    $request->requestBody->addonVersion = 'dolor';
    $request->requestBody->clientRequestToken = 'maiores';
    $request->requestBody->configurationValues = 'quasi';
    $request->requestBody->resolveConflicts = UpdateAddonRequestBodyResolveConflictsEnum::NONE;
    $request->requestBody->serviceAccountRoleArn = 'nulla';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';
    $request->addonName = 'impedit';
    $request->name = 'Mrs. Sally Jacobi';

    $response = $sdk->sdk->updateAddon($request);

    if ($response->updateAddonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClusterConfig

<p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can't update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterConfigRequestBodyLogging;
use \OpenAPI\OpenAPI\Models\Shared\LogSetup;
use \OpenAPI\OpenAPI\Models\Shared\LogTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterConfigRequestBodyResourcesVpcConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterConfigRequest();
    $request->requestBody = new UpdateClusterConfigRequestBody();
    $request->requestBody->clientRequestToken = 'quo';
    $request->requestBody->logging = new UpdateClusterConfigRequestBodyLogging();
    $request->requestBody->logging->clusterLogging = [
        new LogSetup(),
    ];
    $request->requestBody->resourcesVpcConfig = new UpdateClusterConfigRequestBodyResourcesVpcConfig();
    $request->requestBody->resourcesVpcConfig->endpointPrivateAccess = false;
    $request->requestBody->resourcesVpcConfig->endpointPublicAccess = false;
    $request->requestBody->resourcesVpcConfig->publicAccessCidrs = [
        'aspernatur',
        'minima',
        'eaque',
        'a',
    ];
    $request->requestBody->resourcesVpcConfig->securityGroupIds = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->requestBody->resourcesVpcConfig->subnetIds = [
        'aliquam',
        'fugit',
        'accusamus',
        'inventore',
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'eum';
    $request->name = 'Vicky Lynch';

    $response = $sdk->sdk->updateClusterConfig($request);

    if ($response->updateClusterConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClusterVersion

<p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterVersionRequest();
    $request->requestBody = new UpdateClusterVersionRequestBody();
    $request->requestBody->clientRequestToken = 'voluptas';
    $request->requestBody->version = 'libero';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->name = 'Viola Gibson';

    $response = $sdk->sdk->updateClusterVersion($request);

    if ($response->updateClusterVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNodegroupConfig

Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupConfigRequestBodyLabels;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupConfigRequestBodyScalingConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupConfigRequestBodyTaints;
use \OpenAPI\OpenAPI\Models\Shared\Taint;
use \OpenAPI\OpenAPI\Models\Shared\TaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupConfigRequestBodyUpdateConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNodegroupConfigRequest();
    $request->requestBody = new UpdateNodegroupConfigRequestBody();
    $request->requestBody->clientRequestToken = 'rem';
    $request->requestBody->labels = new UpdateNodegroupConfigRequestBodyLabels();
    $request->requestBody->labels->addOrUpdateLabels = [
        'reprehenderit' => 'quidem',
        'fugiat' => 'ut',
        'eum' => 'suscipit',
    ];
    $request->requestBody->labels->removeLabels = [
        'eos',
        'praesentium',
        'quisquam',
        'veritatis',
    ];
    $request->requestBody->scalingConfig = new UpdateNodegroupConfigRequestBodyScalingConfig();
    $request->requestBody->scalingConfig->desiredSize = 56848;
    $request->requestBody->scalingConfig->maxSize = 660040;
    $request->requestBody->scalingConfig->minSize = 696997;
    $request->requestBody->taints = new UpdateNodegroupConfigRequestBodyTaints();
    $request->requestBody->taints->addOrUpdateTaints = [
        new Taint(),
    ];
    $request->requestBody->taints->removeTaints = [
        new Taint(),
        new Taint(),
        new Taint(),
        new Taint(),
    ];
    $request->requestBody->updateConfig = new UpdateNodegroupConfigRequestBodyUpdateConfig();
    $request->requestBody->updateConfig->maxUnavailable = 847276;
    $request->requestBody->updateConfig->maxUnavailablePercentage = 777408;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->name = 'Henrietta Hilpert';
    $request->nodegroupName = 'quo';

    $response = $sdk->sdk->updateNodegroupConfig($request);

    if ($response->updateNodegroupConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNodegroupVersion

<p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNodegroupVersionRequestBodyLaunchTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNodegroupVersionRequest();
    $request->requestBody = new UpdateNodegroupVersionRequestBody();
    $request->requestBody->clientRequestToken = 'esse';
    $request->requestBody->force = false;
    $request->requestBody->launchTemplate = new UpdateNodegroupVersionRequestBodyLaunchTemplate();
    $request->requestBody->launchTemplate->id = 'e0bc7178-e479-46f2-a70c-688282aa4825';
    $request->requestBody->launchTemplate->name = 'Denise Will';
    $request->requestBody->launchTemplate->version = 'explicabo';
    $request->requestBody->releaseVersion = 'saepe';
    $request->requestBody->version = 'occaecati';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'esse';
    $request->name = 'Marco Terry PhD';
    $request->nodegroupName = 'vel';

    $response = $sdk->sdk->updateNodegroupVersion($request);

    if ($response->updateNodegroupVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
