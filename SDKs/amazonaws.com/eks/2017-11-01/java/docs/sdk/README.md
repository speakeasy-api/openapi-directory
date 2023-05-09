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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigRequest;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigRequestBody;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigResponse;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.Provider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEncryptionConfigRequest req = new AssociateEncryptionConfigRequest(                new AssociateEncryptionConfigRequestBody(                new org.openapis.openapi.models.shared.EncryptionConfig[]{{
                                                add(new EncryptionConfig() {{
                                                    provider = new Provider() {{
                                                        keyArn = "veritatis";
                                                    }};
                                                    resources = new String[]{{
                                                        add("perferendis"),
                                                        add("ipsam"),
                                                        add("repellendus"),
                                                    }};
                                                }}),
                                                add(new EncryptionConfig() {{
                                                    provider = new Provider() {{
                                                        keyArn = "sapiente";
                                                    }};
                                                    resources = new String[]{{
                                                        add("odit"),
                                                        add("at"),
                                                        add("at"),
                                                        add("maiores"),
                                                    }};
                                                }}),
                                            }}) {{
                                clientRequestToken = "molestiae";
                            }};, "quod") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            AssociateEncryptionConfigResponse res = sdk.sdk.associateEncryptionConfig(req);

            if (res.associateEncryptionConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateIdentityProviderConfig

<p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateIdentityProviderConfigRequest;
import org.openapis.openapi.models.operations.AssociateIdentityProviderConfigRequestBody;
import org.openapis.openapi.models.operations.AssociateIdentityProviderConfigRequestBodyOidc;
import org.openapis.openapi.models.operations.AssociateIdentityProviderConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateIdentityProviderConfigRequest req = new AssociateIdentityProviderConfigRequest(                new AssociateIdentityProviderConfigRequestBody(                new AssociateIdentityProviderConfigRequestBodyOidc() {{
                                                clientId = "occaecati";
                                                groupsClaim = "fugit";
                                                groupsPrefix = "deleniti";
                                                identityProviderConfigName = "hic";
                                                issuerUrl = "optio";
                                                requiredClaims = new java.util.HashMap<String, String>() {{
                                                    put("beatae", "commodi");
                                                    put("molestiae", "modi");
                                                    put("qui", "impedit");
                                                }};
                                                usernameClaim = "cum";
                                                usernamePrefix = "esse";
                                            }};) {{
                                clientRequestToken = "ipsum";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aspernatur", "perferendis");
                                    put("ad", "natus");
                                    put("sed", "iste");
                                }};
                            }};, "dolor") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            AssociateIdentityProviderConfigResponse res = sdk.sdk.associateIdentityProviderConfig(req);

            if (res.associateIdentityProviderConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAddon

<p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAddonRequest;
import org.openapis.openapi.models.operations.CreateAddonRequestBody;
import org.openapis.openapi.models.operations.CreateAddonRequestBodyResolveConflictsEnum;
import org.openapis.openapi.models.operations.CreateAddonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAddonRequest req = new CreateAddonRequest(                new CreateAddonRequestBody("iure") {{
                                addonVersion = "saepe";
                                clientRequestToken = "quidem";
                                configurationValues = "architecto";
                                resolveConflicts = CreateAddonRequestBodyResolveConflictsEnum.OVERWRITE;
                                serviceAccountRoleArn = "reiciendis";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("mollitia", "laborum");
                                    put("dolores", "dolorem");
                                    put("corporis", "explicabo");
                                }};
                            }};, "nobis") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            CreateAddonResponse res = sdk.sdk.createAddon(req);

            if (res.createAddonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCluster

<p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterRequestBody;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyKubernetesNetworkConfig;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyLogging;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyOutpostConfig;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyResourcesVpcConfig;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.shared.ControlPlanePlacementRequest;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.IpFamilyEnum;
import org.openapis.openapi.models.shared.LogSetup;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.Provider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequestBody("doloribus",                 new CreateClusterRequestBodyResourcesVpcConfig() {{
                                                endpointPrivateAccess = false;
                                                endpointPublicAccess = false;
                                                publicAccessCidrs = new String[]{{
                                                    add("architecto"),
                                                    add("mollitia"),
                                                    add("dolorem"),
                                                    add("culpa"),
                                                }};
                                                securityGroupIds = new String[]{{
                                                    add("repellat"),
                                                }};
                                                subnetIds = new String[]{{
                                                    add("occaecati"),
                                                    add("numquam"),
                                                    add("commodi"),
                                                }};
                                            }};, "quam") {{
                                clientRequestToken = "molestiae";
                                encryptionConfig = new org.openapis.openapi.models.shared.EncryptionConfig[]{{
                                    add(new EncryptionConfig() {{
                                        provider = new Provider() {{
                                            keyArn = "error";
                                        }};
                                        resources = new String[]{{
                                            add("quis"),
                                        }};
                                    }}),
                                }};
                                kubernetesNetworkConfig = new CreateClusterRequestBodyKubernetesNetworkConfig() {{
                                    ipFamily = IpFamilyEnum.IPV4;
                                    serviceIpv4Cidr = "laborum";
                                }};;
                                logging = new CreateClusterRequestBodyLogging() {{
                                    clusterLogging = new org.openapis.openapi.models.shared.LogSetup[]{{
                                        add(new LogSetup() {{
                                            enabled = false;
                                            types = new org.openapis.openapi.models.shared.LogTypeEnum[]{{
                                                add(LogTypeEnum.API),
                                                add(LogTypeEnum.CONTROLLER_MANAGER),
                                            }};
                                        }}),
                                        add(new LogSetup() {{
                                            enabled = false;
                                            types = new org.openapis.openapi.models.shared.LogTypeEnum[]{{
                                                add(LogTypeEnum.SCHEDULER),
                                            }};
                                        }}),
                                        add(new LogSetup() {{
                                            enabled = false;
                                            types = new org.openapis.openapi.models.shared.LogTypeEnum[]{{
                                                add(LogTypeEnum.CONTROLLER_MANAGER),
                                                add(LogTypeEnum.SCHEDULER),
                                            }};
                                        }}),
                                    }};
                                }};;
                                outpostConfig = new CreateClusterRequestBodyOutpostConfig() {{
                                    controlPlaneInstanceType = "aut";
                                    controlPlanePlacement = new ControlPlanePlacementRequest() {{
                                        groupName = "quasi";
                                    }};;
                                    outpostArns = new String[]{{
                                        add("temporibus"),
                                        add("laborum"),
                                        add("quasi"),
                                    }};
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("voluptatibus", "vero");
                                    put("nihil", "praesentium");
                                    put("voluptatibus", "ipsa");
                                    put("omnis", "voluptate");
                                }};
                                version = "cum";
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateClusterResponse res = sdk.sdk.createCluster(req);

            if (res.createClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFargateProfile

<p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFargateProfileRequest;
import org.openapis.openapi.models.operations.CreateFargateProfileRequestBody;
import org.openapis.openapi.models.operations.CreateFargateProfileResponse;
import org.openapis.openapi.models.shared.FargateProfileSelector;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFargateProfileRequest req = new CreateFargateProfileRequest(                new CreateFargateProfileRequestBody("iusto", "dicta") {{
                                clientRequestToken = "harum";
                                selectors = new org.openapis.openapi.models.shared.FargateProfileSelector[]{{
                                    add(new FargateProfileSelector() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("commodi", "repudiandae");
                                            put("quae", "ipsum");
                                            put("quidem", "molestias");
                                            put("excepturi", "pariatur");
                                        }};
                                        namespace = "modi";
                                    }}),
                                    add(new FargateProfileSelector() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("rem", "voluptates");
                                            put("quasi", "repudiandae");
                                            put("sint", "veritatis");
                                        }};
                                        namespace = "itaque";
                                    }}),
                                }};
                                subnets = new String[]{{
                                    add("enim"),
                                    add("consequatur"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "explicabo");
                                    put("deserunt", "distinctio");
                                    put("quibusdam", "labore");
                                }};
                            }};, "modi") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            CreateFargateProfileResponse res = sdk.sdk.createFargateProfile(req);

            if (res.createFargateProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNodegroup

<p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNodegroupRequest;
import org.openapis.openapi.models.operations.CreateNodegroupRequestBody;
import org.openapis.openapi.models.operations.CreateNodegroupRequestBodyAmiTypeEnum;
import org.openapis.openapi.models.operations.CreateNodegroupRequestBodyCapacityTypeEnum;
import org.openapis.openapi.models.operations.CreateNodegroupRequestBodyLaunchTemplate;
import org.openapis.openapi.models.operations.CreateNodegroupRequestBodyRemoteAccess;
import org.openapis.openapi.models.operations.CreateNodegroupRequestBodyScalingConfig;
import org.openapis.openapi.models.operations.CreateNodegroupRequestBodyUpdateConfig;
import org.openapis.openapi.models.operations.CreateNodegroupResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Taint;
import org.openapis.openapi.models.shared.TaintEffectEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNodegroupRequest req = new CreateNodegroupRequest(                new CreateNodegroupRequestBody("alias", "fugit",                 new String[]{{
                                                add("excepturi"),
                                                add("tempora"),
                                                add("facilis"),
                                            }}) {{
                                amiType = CreateNodegroupRequestBodyAmiTypeEnum.WINDOWSCORE2019_X8664;
                                capacityType = CreateNodegroupRequestBodyCapacityTypeEnum.ON_DEMAND;
                                clientRequestToken = "delectus";
                                diskSize = 433288L;
                                instanceTypes = new String[]{{
                                    add("eligendi"),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "provident");
                                    put("necessitatibus", "sint");
                                    put("officia", "dolor");
                                }};
                                launchTemplate = new CreateNodegroupRequestBodyLaunchTemplate() {{
                                    id = "efa77dfb-14cd-466a-a395-efb9ba88f3a6";
                                    name = "Ada Moen IV";
                                    version = "magnam";
                                }};;
                                releaseVersion = "distinctio";
                                remoteAccess = new CreateNodegroupRequestBodyRemoteAccess() {{
                                    ec2SshKey = "id";
                                    sourceSecurityGroups = new String[]{{
                                        add("labore"),
                                        add("suscipit"),
                                    }};
                                }};;
                                scalingConfig = new CreateNodegroupRequestBodyScalingConfig() {{
                                    desiredSize = 618016L;
                                    maxSize = 749170L;
                                    minSize = 428769L;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aspernatur", "architecto");
                                    put("magnam", "et");
                                    put("excepturi", "ullam");
                                    put("provident", "quos");
                                }};
                                taints = new org.openapis.openapi.models.shared.Taint[]{{
                                    add(new Taint() {{
                                        effect = TaintEffectEnum.NO_SCHEDULE;
                                        key = "mollitia";
                                        value = "reiciendis";
                                    }}),
                                    add(new Taint() {{
                                        effect = TaintEffectEnum.NO_EXECUTE;
                                        key = "ad";
                                        value = "eum";
                                    }}),
                                    add(new Taint() {{
                                        effect = TaintEffectEnum.NO_SCHEDULE;
                                        key = "necessitatibus";
                                        value = "odit";
                                    }}),
                                }};
                                updateConfig = new CreateNodegroupRequestBodyUpdateConfig() {{
                                    maxUnavailable = 367562L;
                                    maxUnavailablePercentage = 97260L;
                                }};;
                                version = "iure";
                            }};, "doloribus") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateNodegroupResponse res = sdk.sdk.createNodegroup(req);

            if (res.createNodegroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAddon

<p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddonRequest;
import org.openapis.openapi.models.operations.DeleteAddonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAddonRequest req = new DeleteAddonRequest("repudiandae", "ullam") {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
                preserve = false;
            }};            

            DeleteAddonResponse res = sdk.sdk.deleteAddon(req);

            if (res.deleteAddonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCluster

<p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClusterRequest;
import org.openapis.openapi.models.operations.DeleteClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClusterRequest req = new DeleteClusterRequest("consequuntur") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "natus";
                xAmzCredential = "magni";
                xAmzDate = "sunt";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "pariatur";
            }};            

            DeleteClusterResponse res = sdk.sdk.deleteCluster(req);

            if (res.deleteClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFargateProfile

<p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFargateProfileRequest;
import org.openapis.openapi.models.operations.DeleteFargateProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFargateProfileRequest req = new DeleteFargateProfileRequest("ea", "excepturi") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteFargateProfileResponse res = sdk.sdk.deleteFargateProfile(req);

            if (res.deleteFargateProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNodegroup

Deletes an Amazon EKS node group for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNodegroupRequest;
import org.openapis.openapi.models.operations.DeleteNodegroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNodegroupRequest req = new DeleteNodegroupRequest("autem", "nam") {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "nemo";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteNodegroupResponse res = sdk.sdk.deleteNodegroup(req);

            if (res.deleteNodegroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterCluster

Deregisters a connected cluster to remove it from the Amazon EKS control plane.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterClusterRequest;
import org.openapis.openapi.models.operations.DeregisterClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterClusterRequest req = new DeregisterClusterRequest("cumque") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "hic";
                xAmzCredential = "libero";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "totam";
            }};            

            DeregisterClusterResponse res = sdk.sdk.deregisterCluster(req);

            if (res.deregisterClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAddon

Describes an Amazon EKS add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAddonRequest;
import org.openapis.openapi.models.operations.DescribeAddonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAddonRequest req = new DescribeAddonRequest("eaque", "quis") {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
            }};            

            DescribeAddonResponse res = sdk.sdk.describeAddon(req);

            if (res.describeAddonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAddonConfiguration

Returns configuration options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAddonConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeAddonConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAddonConfigurationRequest req = new DescribeAddonConfigurationRequest("nostrum", "hic") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DescribeAddonConfigurationResponse res = sdk.sdk.describeAddonConfiguration(req);

            if (res.describeAddonConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAddonVersions

Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAddonVersionsRequest;
import org.openapis.openapi.models.operations.DescribeAddonVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAddonVersionsRequest req = new DescribeAddonVersionsRequest() {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
                addonName = "modi";
                kubernetesVersion = "iste";
                maxResults = 679091L;
                nextToken = "deleniti";
                owners = new String[]{{
                    add("provident"),
                    add("nobis"),
                    add("libero"),
                    add("delectus"),
                }};
                publishers = new String[]{{
                    add("quos"),
                    add("aliquid"),
                }};
                types = new String[]{{
                    add("dolorem"),
                }};
            }};            

            DescribeAddonVersionsResponse res = sdk.sdk.describeAddonVersions(req);

            if (res.describeAddonVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCluster

<p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClusterRequest;
import org.openapis.openapi.models.operations.DescribeClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClusterRequest req = new DescribeClusterRequest("qui") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DescribeClusterResponse res = sdk.sdk.describeCluster(req);

            if (res.describeClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFargateProfile

Returns descriptive information about an Fargate profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFargateProfileRequest;
import org.openapis.openapi.models.operations.DescribeFargateProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFargateProfileRequest req = new DescribeFargateProfileRequest("dolorum", "numquam") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribeFargateProfileResponse res = sdk.sdk.describeFargateProfile(req);

            if (res.describeFargateProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIdentityProviderConfig

Returns descriptive information about an identity provider configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIdentityProviderConfigRequest;
import org.openapis.openapi.models.operations.DescribeIdentityProviderConfigRequestBody;
import org.openapis.openapi.models.operations.DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig;
import org.openapis.openapi.models.operations.DescribeIdentityProviderConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIdentityProviderConfigRequest req = new DescribeIdentityProviderConfigRequest(                new DescribeIdentityProviderConfigRequestBody(                new DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig() {{
                                                name = "Hector Mosciski";
                                                type = "sit";
                                            }};);, "fugiat") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            DescribeIdentityProviderConfigResponse res = sdk.sdk.describeIdentityProviderConfig(req);

            if (res.describeIdentityProviderConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeNodegroup

Returns descriptive information about an Amazon EKS node group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeNodegroupRequest;
import org.openapis.openapi.models.operations.DescribeNodegroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeNodegroupRequest req = new DescribeNodegroupRequest("necessitatibus", "distinctio") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            DescribeNodegroupResponse res = sdk.sdk.describeNodegroup(req);

            if (res.describeNodegroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUpdate

<p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUpdateRequest;
import org.openapis.openapi.models.operations.DescribeUpdateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUpdateRequest req = new DescribeUpdateRequest("perferendis", "amet") {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "ad";
                xAmzDate = "saepe";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "provident";
                addonName = "minima";
                nodegroupName = "repellendus";
            }};            

            DescribeUpdateResponse res = sdk.sdk.describeUpdate(req);

            if (res.describeUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateIdentityProviderConfig

Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateIdentityProviderConfigRequest;
import org.openapis.openapi.models.operations.DisassociateIdentityProviderConfigRequestBody;
import org.openapis.openapi.models.operations.DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig;
import org.openapis.openapi.models.operations.DisassociateIdentityProviderConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateIdentityProviderConfigRequest req = new DisassociateIdentityProviderConfigRequest(                new DisassociateIdentityProviderConfigRequestBody(                new DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig() {{
                                                name = "James Swaniawski";
                                                type = "vel";
                                            }};) {{
                                clientRequestToken = "quod";
                            }};, "officiis") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "a";
                xAmzDate = "esse";
                xAmzSecurityToken = "harum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "ipsum";
            }};            

            DisassociateIdentityProviderConfigResponse res = sdk.sdk.disassociateIdentityProviderConfig(req);

            if (res.disassociateIdentityProviderConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAddons

Lists the available add-ons.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAddonsRequest;
import org.openapis.openapi.models.operations.ListAddonsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAddonsRequest req = new ListAddonsRequest("tenetur") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "accusamus";
                xAmzDate = "numquam";
                xAmzSecurityToken = "enim";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "sapiente";
                maxResults = 518201L;
                nextToken = "nihil";
            }};            

            ListAddonsResponse res = sdk.sdk.listAddons(req);

            if (res.listAddonsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusters

Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClustersRequest;
import org.openapis.openapi.models.operations.ListClustersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClustersRequest req = new ListClustersRequest() {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "neque";
                xAmzCredential = "sed";
                xAmzDate = "vel";
                xAmzSecurityToken = "libero";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "deserunt";
                include = new String[]{{
                    add("ipsum"),
                    add("incidunt"),
                }};
                maxResults = 186458L;
                nextToken = "cupiditate";
            }};            

            ListClustersResponse res = sdk.sdk.listClusters(req);

            if (res.listClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFargateProfiles

Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFargateProfilesRequest;
import org.openapis.openapi.models.operations.ListFargateProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFargateProfilesRequest req = new ListFargateProfilesRequest("pariatur") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "laborum";
                xAmzDate = "totam";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "dolores";
                maxResults = 716860L;
                nextToken = "facilis";
            }};            

            ListFargateProfilesResponse res = sdk.sdk.listFargateProfiles(req);

            if (res.listFargateProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIdentityProviderConfigs

A list of identity provider configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentityProviderConfigsRequest;
import org.openapis.openapi.models.operations.ListIdentityProviderConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentityProviderConfigsRequest req = new ListIdentityProviderConfigsRequest("quam") {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "qui";
                xAmzDate = "neque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "odio";
                maxResults = 124833L;
                nextToken = "ullam";
            }};            

            ListIdentityProviderConfigsResponse res = sdk.sdk.listIdentityProviderConfigs(req);

            if (res.listIdentityProviderConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNodegroups

Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNodegroupsRequest;
import org.openapis.openapi.models.operations.ListNodegroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNodegroupsRequest req = new ListNodegroupsRequest("hic") {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "soluta";
                xAmzDate = "nobis";
                xAmzSecurityToken = "et";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ipsum";
                maxResults = 83422L;
                nextToken = "nobis";
            }};            

            ListNodegroupsResponse res = sdk.sdk.listNodegroups(req);

            if (res.listNodegroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List the tags for an Amazon EKS resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("tempore") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "delectus";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "labore";
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

## listUpdates

Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUpdatesRequest;
import org.openapis.openapi.models.operations.ListUpdatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUpdatesRequest req = new ListUpdatesRequest("architecto") {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
                addonName = "porro";
                maxResults = 984330L;
                nextToken = "ut";
                nodegroupName = "facilis";
            }};            

            ListUpdatesResponse res = sdk.sdk.listUpdates(req);

            if (res.listUpdatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerCluster

<p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterClusterRequest;
import org.openapis.openapi.models.operations.RegisterClusterRequestBody;
import org.openapis.openapi.models.operations.RegisterClusterRequestBodyConnectorConfig;
import org.openapis.openapi.models.operations.RegisterClusterResponse;
import org.openapis.openapi.models.shared.ConnectorConfigProviderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterClusterRequest req = new RegisterClusterRequest(                new RegisterClusterRequestBody(                new RegisterClusterRequestBodyConnectorConfig() {{
                                                provider = ConnectorConfigProviderEnum.ANTHOS;
                                                roleArn = "quae";
                                            }};, "laudantium") {{
                                clientRequestToken = "odio";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("voluptatibus", "quisquam");
                                    put("vero", "omnis");
                                    put("quis", "ipsum");
                                }};
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            RegisterClusterResponse res = sdk.sdk.registerCluster(req);

            if (res.registerClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("odio", "similique");
                                                put("facilis", "vero");
                                                put("ducimus", "dolore");
                                                put("quibusdam", "illum");
                                            }});, "sequi") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
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

Deletes specified tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("maiores",                 new String[]{{
                                add("iusto"),
                                add("eligendi"),
                                add("ducimus"),
                                add("alias"),
                            }}) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "ipsam";
                xAmzDate = "ea";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "possimus";
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

## updateAddon

Updates an Amazon EKS add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAddonRequest;
import org.openapis.openapi.models.operations.UpdateAddonRequestBody;
import org.openapis.openapi.models.operations.UpdateAddonRequestBodyResolveConflictsEnum;
import org.openapis.openapi.models.operations.UpdateAddonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAddonRequest req = new UpdateAddonRequest(                new UpdateAddonRequestBody() {{
                                addonVersion = "ratione";
                                clientRequestToken = "ex";
                                configurationValues = "laudantium";
                                resolveConflicts = UpdateAddonRequestBodyResolveConflictsEnum.OVERWRITE;
                                serviceAccountRoleArn = "dolor";
                            }};, "maiores", "quasi") {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            UpdateAddonResponse res = sdk.sdk.updateAddon(req);

            if (res.updateAddonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClusterConfig

<p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can't update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterConfigRequest;
import org.openapis.openapi.models.operations.UpdateClusterConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateClusterConfigRequestBodyLogging;
import org.openapis.openapi.models.operations.UpdateClusterConfigRequestBodyResourcesVpcConfig;
import org.openapis.openapi.models.operations.UpdateClusterConfigResponse;
import org.openapis.openapi.models.shared.LogSetup;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterConfigRequest req = new UpdateClusterConfigRequest(                new UpdateClusterConfigRequestBody() {{
                                clientRequestToken = "ea";
                                logging = new UpdateClusterConfigRequestBodyLogging() {{
                                    clusterLogging = new org.openapis.openapi.models.shared.LogSetup[]{{
                                        add(new LogSetup() {{
                                            enabled = false;
                                            types = new org.openapis.openapi.models.shared.LogTypeEnum[]{{
                                                add(LogTypeEnum.AUDIT),
                                                add(LogTypeEnum.AUDIT),
                                            }};
                                        }}),
                                        add(new LogSetup() {{
                                            enabled = false;
                                            types = new org.openapis.openapi.models.shared.LogTypeEnum[]{{
                                                add(LogTypeEnum.AUDIT),
                                            }};
                                        }}),
                                        add(new LogSetup() {{
                                            enabled = false;
                                            types = new org.openapis.openapi.models.shared.LogTypeEnum[]{{
                                                add(LogTypeEnum.CONTROLLER_MANAGER),
                                                add(LogTypeEnum.AUDIT),
                                            }};
                                        }}),
                                        add(new LogSetup() {{
                                            enabled = false;
                                            types = new org.openapis.openapi.models.shared.LogTypeEnum[]{{
                                                add(LogTypeEnum.API),
                                                add(LogTypeEnum.AUDIT),
                                                add(LogTypeEnum.API),
                                                add(LogTypeEnum.SCHEDULER),
                                            }};
                                        }}),
                                    }};
                                }};;
                                resourcesVpcConfig = new UpdateClusterConfigRequestBodyResourcesVpcConfig() {{
                                    endpointPrivateAccess = false;
                                    endpointPublicAccess = false;
                                    publicAccessCidrs = new String[]{{
                                        add("aut"),
                                        add("aut"),
                                        add("deleniti"),
                                    }};
                                    securityGroupIds = new String[]{{
                                        add("aliquam"),
                                        add("fugit"),
                                        add("accusamus"),
                                        add("inventore"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("et"),
                                        add("dolorum"),
                                    }};
                                }};;
                            }};, "laborum") {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "velit";
                xAmzCredential = "eum";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "assumenda";
            }};            

            UpdateClusterConfigResponse res = sdk.sdk.updateClusterConfig(req);

            if (res.updateClusterConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClusterVersion

<p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterVersionRequest;
import org.openapis.openapi.models.operations.UpdateClusterVersionRequestBody;
import org.openapis.openapi.models.operations.UpdateClusterVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterVersionRequest req = new UpdateClusterVersionRequest(                new UpdateClusterVersionRequestBody("voluptas") {{
                                clientRequestToken = "libero";
                            }};, "quasi") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "explicabo";
                xAmzDate = "provident";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "magnam";
            }};            

            UpdateClusterVersionResponse res = sdk.sdk.updateClusterVersion(req);

            if (res.updateClusterVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNodegroupConfig

Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNodegroupConfigRequest;
import org.openapis.openapi.models.operations.UpdateNodegroupConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateNodegroupConfigRequestBodyLabels;
import org.openapis.openapi.models.operations.UpdateNodegroupConfigRequestBodyScalingConfig;
import org.openapis.openapi.models.operations.UpdateNodegroupConfigRequestBodyTaints;
import org.openapis.openapi.models.operations.UpdateNodegroupConfigRequestBodyUpdateConfig;
import org.openapis.openapi.models.operations.UpdateNodegroupConfigResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Taint;
import org.openapis.openapi.models.shared.TaintEffectEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNodegroupConfigRequest req = new UpdateNodegroupConfigRequest(                new UpdateNodegroupConfigRequestBody() {{
                                clientRequestToken = "eius";
                                labels = new UpdateNodegroupConfigRequestBodyLabels() {{
                                    addOrUpdateLabels = new java.util.HashMap<String, String>() {{
                                        put("esse", "rem");
                                        put("fuga", "reprehenderit");
                                    }};
                                    removeLabels = new String[]{{
                                        add("fugiat"),
                                        add("ut"),
                                        add("eum"),
                                    }};
                                }};;
                                scalingConfig = new UpdateNodegroupConfigRequestBodyScalingConfig() {{
                                    desiredSize = 379927L;
                                    maxSize = 826871L;
                                    minSize = 181151L;
                                }};;
                                taints = new UpdateNodegroupConfigRequestBodyTaints() {{
                                    addOrUpdateTaints = new org.openapis.openapi.models.shared.Taint[]{{
                                        add(new Taint() {{
                                            effect = TaintEffectEnum.PREFER_NO_SCHEDULE;
                                            key = "veritatis";
                                            value = "ipsa";
                                        }}),
                                        add(new Taint() {{
                                            effect = TaintEffectEnum.NO_EXECUTE;
                                            key = "quidem";
                                            value = "neque";
                                        }}),
                                        add(new Taint() {{
                                            effect = TaintEffectEnum.PREFER_NO_SCHEDULE;
                                            key = "illum";
                                            value = "quo";
                                        }}),
                                    }};
                                    removeTaints = new org.openapis.openapi.models.shared.Taint[]{{
                                        add(new Taint() {{
                                            effect = TaintEffectEnum.NO_SCHEDULE;
                                            key = "eos";
                                            value = "voluptas";
                                        }}),
                                        add(new Taint() {{
                                            effect = TaintEffectEnum.NO_SCHEDULE;
                                            key = "cupiditate";
                                            value = "consequatur";
                                        }}),
                                        add(new Taint() {{
                                            effect = TaintEffectEnum.NO_SCHEDULE;
                                            key = "debitis";
                                            value = "ipsam";
                                        }}),
                                    }};
                                }};;
                                updateConfig = new UpdateNodegroupConfigRequestBodyUpdateConfig() {{
                                    maxUnavailable = 133465L;
                                    maxUnavailablePercentage = 197054L;
                                }};;
                            }};, "quo", "esse") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
            }};            

            UpdateNodegroupConfigResponse res = sdk.sdk.updateNodegroupConfig(req);

            if (res.updateNodegroupConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNodegroupVersion

<p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNodegroupVersionRequest;
import org.openapis.openapi.models.operations.UpdateNodegroupVersionRequestBody;
import org.openapis.openapi.models.operations.UpdateNodegroupVersionRequestBodyLaunchTemplate;
import org.openapis.openapi.models.operations.UpdateNodegroupVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNodegroupVersionRequest req = new UpdateNodegroupVersionRequest(                new UpdateNodegroupVersionRequestBody() {{
                                clientRequestToken = "accusamus";
                                force = false;
                                launchTemplate = new UpdateNodegroupVersionRequestBodyLaunchTemplate() {{
                                    id = "4796f2a7-0c68-4828-aaa4-82562f222e98";
                                    name = "Tamara Vandervort IV";
                                    version = "quod";
                                }};;
                                releaseVersion = "nam";
                                version = "vero";
                            }};, "aliquid", "quasi") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "vel";
                xAmzCredential = "harum";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "minima";
            }};            

            UpdateNodegroupVersionResponse res = sdk.sdk.updateNodegroupVersion(req);

            if (res.updateNodegroupVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
