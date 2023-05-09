# SDK

## Overview

<p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on Amazon Web Services without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. </p> <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/eks/>
### Available Operations

* [AssociateEncryptionConfig](#associateencryptionconfig) - <p>Associate encryption configuration to an existing cluster.</p> <p>You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</p>
* [AssociateIdentityProviderConfig](#associateidentityproviderconfig) - <p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>
* [CreateAddon](#createaddon) - <p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>
* [CreateCluster](#createcluster) - <p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
* [CreateFargateProfile](#createfargateprofile) - <p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>
* [CreateNodegroup](#createnodegroup) - <p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>
* [DeleteAddon](#deleteaddon) - <p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>
* [DeleteCluster](#deletecluster) - <p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>
* [DeleteFargateProfile](#deletefargateprofile) - <p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>
* [DeleteNodegroup](#deletenodegroup) - Deletes an Amazon EKS node group for a cluster.
* [DeregisterCluster](#deregistercluster) - Deregisters a connected cluster to remove it from the Amazon EKS control plane.
* [DescribeAddon](#describeaddon) - Describes an Amazon EKS add-on.
* [DescribeAddonConfiguration](#describeaddonconfiguration) - Returns configuration options.
* [DescribeAddonVersions](#describeaddonversions) - Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned. 
* [DescribeCluster](#describecluster) - <p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>
* [DescribeFargateProfile](#describefargateprofile) - Returns descriptive information about an Fargate profile.
* [DescribeIdentityProviderConfig](#describeidentityproviderconfig) - Returns descriptive information about an identity provider configuration.
* [DescribeNodegroup](#describenodegroup) - Returns descriptive information about an Amazon EKS node group.
* [DescribeUpdate](#describeupdate) - <p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>
* [DisassociateIdentityProviderConfig](#disassociateidentityproviderconfig) - Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.
* [ListAddons](#listaddons) - Lists the available add-ons.
* [ListClusters](#listclusters) - Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.
* [ListFargateProfiles](#listfargateprofiles) - Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.
* [ListIdentityProviderConfigs](#listidentityproviderconfigs) - A list of identity provider configurations.
* [ListNodegroups](#listnodegroups) - Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.
* [ListTagsForResource](#listtagsforresource) - List the tags for an Amazon EKS resource.
* [ListUpdates](#listupdates) - Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.
* [RegisterCluster](#registercluster) - <p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.
* [UntagResource](#untagresource) - Deletes specified tags from a resource.
* [UpdateAddon](#updateaddon) - Updates an Amazon EKS add-on.
* [UpdateClusterConfig](#updateclusterconfig) - <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can't update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
* [UpdateClusterVersion](#updateclusterversion) - <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>
* [UpdateNodegroupConfig](#updatenodegroupconfig) - Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
* [UpdateNodegroupVersion](#updatenodegroupversion) - <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>

## AssociateEncryptionConfig

<p>Associate encryption configuration to an existing cluster.</p> <p>You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</p>

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
    res, err := s.SDK.AssociateEncryptionConfig(ctx, operations.AssociateEncryptionConfigRequest{
        RequestBody: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: sdk.String("perferendis"),
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: sdk.String("repellendus"),
                    },
                    Resources: []string{
                        "quo",
                        "odit",
                        "at",
                        "at",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: sdk.String("maiores"),
                    },
                    Resources: []string{
                        "quod",
                        "quod",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
        Name: "Wayne Lind",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEncryptionConfigResponse != nil {
        // handle response
    }
}
```

## AssociateIdentityProviderConfig

<p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>

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
    res, err := s.SDK.AssociateIdentityProviderConfig(ctx, operations.AssociateIdentityProviderConfigRequest{
        RequestBody: operations.AssociateIdentityProviderConfigRequestBody{
            ClientRequestToken: sdk.String("totam"),
            Oidc: operations.AssociateIdentityProviderConfigRequestBodyOidc{
                ClientID: sdk.String("beatae"),
                GroupsClaim: sdk.String("commodi"),
                GroupsPrefix: sdk.String("molestiae"),
                IdentityProviderConfigName: sdk.String("modi"),
                IssuerURL: sdk.String("qui"),
                RequiredClaims: map[string]string{
                    "cum": "esse",
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                    "ad": "natus",
                },
                UsernameClaim: sdk.String("sed"),
                UsernamePrefix: sdk.String("iste"),
            },
            Tags: map[string]string{
                "natus": "laboriosam",
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        Name: "Dr. Rickey Boyle",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateIdentityProviderConfigResponse != nil {
        // handle response
    }
}
```

## CreateAddon

<p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>

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
    res, err := s.SDK.CreateAddon(ctx, operations.CreateAddonRequest{
        RequestBody: operations.CreateAddonRequestBody{
            AddonName: "mollitia",
            AddonVersion: sdk.String("laborum"),
            ClientRequestToken: sdk.String("dolores"),
            ConfigurationValues: sdk.String("dolorem"),
            ResolveConflicts: operations.CreateAddonRequestBodyResolveConflictsEnumNone.ToPointer(),
            ServiceAccountRoleArn: sdk.String("explicabo"),
            Tags: map[string]string{
                "enim": "omnis",
                "nemo": "minima",
                "excepturi": "accusantium",
                "iure": "culpa",
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        Name: "Shaun McCullough",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAddonResponse != nil {
        // handle response
    }
}
```

## CreateCluster

<p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>

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
    res, err := s.SDK.CreateCluster(ctx, operations.CreateClusterRequest{
        RequestBody: operations.CreateClusterRequestBody{
            ClientRequestToken: sdk.String("quam"),
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: sdk.String("velit"),
                    },
                    Resources: []string{
                        "quia",
                        "quis",
                        "vitae",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: sdk.String("laborum"),
                    },
                    Resources: []string{
                        "enim",
                        "odit",
                        "quo",
                    },
                },
            },
            KubernetesNetworkConfig: &operations.CreateClusterRequestBodyKubernetesNetworkConfig{
                IPFamily: shared.IPFamilyEnumIpv4.ToPointer(),
                ServiceIpv4Cidr: sdk.String("tenetur"),
            },
            Logging: &operations.CreateClusterRequestBodyLogging{
                ClusterLogging: []shared.LogSetup{
                    shared.LogSetup{
                        Enabled: sdk.Bool(false),
                        Types: []shared.LogTypeEnum{
                            shared.LogTypeEnumScheduler,
                            shared.LogTypeEnumAPI,
                            shared.LogTypeEnumAPI,
                        },
                    },
                    shared.LogSetup{
                        Enabled: sdk.Bool(false),
                        Types: []shared.LogTypeEnum{
                            shared.LogTypeEnumScheduler,
                            shared.LogTypeEnumControllerManager,
                            shared.LogTypeEnumAPI,
                        },
                    },
                },
            },
            Name: "Jan Thiel",
            OutpostConfig: &operations.CreateClusterRequestBodyOutpostConfig{
                ControlPlaneInstanceType: sdk.String("voluptatibus"),
                ControlPlanePlacement: &shared.ControlPlanePlacementRequest{
                    GroupName: sdk.String("ipsa"),
                },
                OutpostArns: []string{
                    "voluptate",
                    "cum",
                    "perferendis",
                },
            },
            ResourcesVpcConfig: operations.CreateClusterRequestBodyResourcesVpcConfig{
                EndpointPrivateAccess: sdk.Bool(false),
                EndpointPublicAccess: sdk.Bool(false),
                PublicAccessCidrs: []string{
                    "reprehenderit",
                },
                SecurityGroupIds: []string{
                    "maiores",
                    "dicta",
                },
                SubnetIds: []string{
                    "dolore",
                    "iusto",
                },
            },
            RoleArn: "dicta",
            Tags: map[string]string{
                "enim": "accusamus",
                "commodi": "repudiandae",
                "quae": "ipsum",
            },
            Version: sdk.String("quidem"),
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```

## CreateFargateProfile

<p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>

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
    res, err := s.SDK.CreateFargateProfile(ctx, operations.CreateFargateProfileRequest{
        RequestBody: operations.CreateFargateProfileRequestBody{
            ClientRequestToken: sdk.String("quasi"),
            FargateProfileName: "repudiandae",
            PodExecutionRoleArn: "sint",
            Selectors: []shared.FargateProfileSelector{
                shared.FargateProfileSelector{
                    Labels: map[string]string{
                        "incidunt": "enim",
                        "consequatur": "est",
                        "quibusdam": "explicabo",
                        "deserunt": "distinctio",
                    },
                    Namespace: sdk.String("quibusdam"),
                },
            },
            Subnets: []string{
                "modi",
                "qui",
            },
            Tags: map[string]string{
                "cupiditate": "quos",
                "perferendis": "magni",
            },
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        Name: "Geoffrey Green",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFargateProfileResponse != nil {
        // handle response
    }
}
```

## CreateNodegroup

<p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>

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
    res, err := s.SDK.CreateNodegroup(ctx, operations.CreateNodegroupRequest{
        RequestBody: operations.CreateNodegroupRequestBody{
            AmiType: operations.CreateNodegroupRequestBodyAmiTypeEnumAl2Arm64.ToPointer(),
            CapacityType: operations.CreateNodegroupRequestBodyCapacityTypeEnumSpot.ToPointer(),
            ClientRequestToken: sdk.String("sint"),
            DiskSize: sdk.Int64(396098),
            InstanceTypes: []string{
                "necessitatibus",
                "sint",
                "officia",
            },
            Labels: map[string]string{
                "debitis": "a",
            },
            LaunchTemplate: &operations.CreateNodegroupRequestBodyLaunchTemplate{
                ID: sdk.String("a77dfb14-cd66-4ae3-95ef-b9ba88f3a669"),
                Name: sdk.String("Fernando Aufderhar"),
                Version: sdk.String("distinctio"),
            },
            NodeRole: "id",
            NodegroupName: "labore",
            ReleaseVersion: sdk.String("labore"),
            RemoteAccess: &operations.CreateNodegroupRequestBodyRemoteAccess{
                Ec2SSHKey: sdk.String("suscipit"),
                SourceSecurityGroups: []string{
                    "nobis",
                    "eum",
                    "vero",
                },
            },
            ScalingConfig: &operations.CreateNodegroupRequestBodyScalingConfig{
                DesiredSize: sdk.Int64(135474),
                MaxSize: sdk.Int64(102863),
                MinSize: sdk.Int64(298282),
            },
            Subnets: []string{
                "excepturi",
            },
            Tags: map[string]string{
                "provident": "quos",
                "sint": "accusantium",
            },
            Taints: []shared.Taint{
                shared.Taint{
                    Effect: shared.TaintEffectEnumPreferNoSchedule.ToPointer(),
                    Key: sdk.String("mollitia"),
                    Value: sdk.String("ad"),
                },
                shared.Taint{
                    Effect: shared.TaintEffectEnumNoExecute.ToPointer(),
                    Key: sdk.String("dolor"),
                    Value: sdk.String("necessitatibus"),
                },
                shared.Taint{
                    Effect: shared.TaintEffectEnumNoSchedule.ToPointer(),
                    Key: sdk.String("nemo"),
                    Value: sdk.String("quasi"),
                },
            },
            UpdateConfig: &operations.CreateNodegroupRequestBodyUpdateConfig{
                MaxUnavailable: sdk.Int64(435865),
                MaxUnavailablePercentage: sdk.Int64(984043),
            },
            Version: sdk.String("debitis"),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
        Name: "Pedro Ratke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNodegroupResponse != nil {
        // handle response
    }
}
```

## DeleteAddon

<p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>

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
    res, err := s.SDK.DeleteAddon(ctx, operations.DeleteAddonRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        AddonName: "natus",
        Name: "Joan Satterfield",
        Preserve: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAddonResponse != nil {
        // handle response
    }
}
```

## DeleteCluster

<p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>

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
    res, err := s.SDK.DeleteCluster(ctx, operations.DeleteClusterRequest{
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        Name: "Rickey Hintz",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClusterResponse != nil {
        // handle response
    }
}
```

## DeleteFargateProfile

<p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>

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
    res, err := s.SDK.DeleteFargateProfile(ctx, operations.DeleteFargateProfileRequest{
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        FargateProfileName: "amet",
        Name: "Erma Hessel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFargateProfileResponse != nil {
        // handle response
    }
}
```

## DeleteNodegroup

Deletes an Amazon EKS node group for a cluster.

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
    res, err := s.SDK.DeleteNodegroup(ctx, operations.DeleteNodegroupRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
        Name: "Ruby Auer",
        NodegroupName: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNodegroupResponse != nil {
        // handle response
    }
}
```

## DeregisterCluster

Deregisters a connected cluster to remove it from the Amazon EKS control plane.

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
    res, err := s.SDK.DeregisterCluster(ctx, operations.DeregisterClusterRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        Name: "George Sawayn",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterClusterResponse != nil {
        // handle response
    }
}
```

## DescribeAddon

Describes an Amazon EKS add-on.

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
    res, err := s.SDK.DescribeAddon(ctx, operations.DescribeAddonRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
        AddonName: "modi",
        Name: "Omar Leuschke",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAddonResponse != nil {
        // handle response
    }
}
```

## DescribeAddonConfiguration

Returns configuration options.

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
    res, err := s.SDK.DescribeAddonConfiguration(ctx, operations.DescribeAddonConfigurationRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        AddonName: "dolorem",
        AddonVersion: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAddonConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeAddonVersions

Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned. 

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
    res, err := s.SDK.DescribeAddonVersions(ctx, operations.DescribeAddonVersionsRequest{
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        AddonName: sdk.String("reiciendis"),
        KubernetesVersion: sdk.String("amet"),
        MaxResults: sdk.Int64(680545),
        NextToken: sdk.String("numquam"),
        Owners: []string{
            "ipsa",
        },
        Publishers: []string{
            "iure",
        },
        Types: []string{
            "quaerat",
            "accusamus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAddonVersionsResponse != nil {
        // handle response
    }
}
```

## DescribeCluster

<p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>

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
    res, err := s.SDK.DescribeCluster(ctx, operations.DescribeClusterRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
        Name: "Stephen Roberts",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClusterResponse != nil {
        // handle response
    }
}
```

## DescribeFargateProfile

Returns descriptive information about an Fargate profile.

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
    res, err := s.SDK.DescribeFargateProfile(ctx, operations.DescribeFargateProfileRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        FargateProfileName: "nihil",
        Name: "Tamara Ondricka",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFargateProfileResponse != nil {
        // handle response
    }
}
```

## DescribeIdentityProviderConfig

Returns descriptive information about an identity provider configuration.

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
    res, err := s.SDK.DescribeIdentityProviderConfig(ctx, operations.DescribeIdentityProviderConfigRequest{
        RequestBody: operations.DescribeIdentityProviderConfigRequestBody{
            IdentityProviderConfig: operations.DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig{
                Name: sdk.String("Lisa Fay"),
                Type: sdk.String("ad"),
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
        Name: "James Swaniawski",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIdentityProviderConfigResponse != nil {
        // handle response
    }
}
```

## DescribeNodegroup

Returns descriptive information about an Amazon EKS node group.

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
    res, err := s.SDK.DescribeNodegroup(ctx, operations.DescribeNodegroupRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("esse"),
        Name: "Tyrone Emard",
        NodegroupName: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNodegroupResponse != nil {
        // handle response
    }
}
```

## DescribeUpdate

<p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>

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
    res, err := s.SDK.DescribeUpdate(ctx, operations.DescribeUpdateRequest{
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("totam"),
        AddonName: sdk.String("nihil"),
        Name: "Mamie Durgan",
        NodegroupName: sdk.String("libero"),
        UpdateID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUpdateResponse != nil {
        // handle response
    }
}
```

## DisassociateIdentityProviderConfig

Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.

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
    res, err := s.SDK.DisassociateIdentityProviderConfig(ctx, operations.DisassociateIdentityProviderConfigRequest{
        RequestBody: operations.DisassociateIdentityProviderConfigRequestBody{
            ClientRequestToken: sdk.String("deserunt"),
            IdentityProviderConfig: operations.DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig{
                Name: sdk.String("Tracy Gottlieb"),
                Type: sdk.String("maxime"),
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        Name: "Verna Purdy",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateIdentityProviderConfigResponse != nil {
        // handle response
    }
}
```

## ListAddons

Lists the available add-ons.

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
    res, err := s.SDK.ListAddons(ctx, operations.ListAddonsRequest{
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("odio"),
        MaxResults: sdk.Int64(124833),
        Name: "Miss Candice Weimann",
        NextToken: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAddonsResponse != nil {
        // handle response
    }
}
```

## ListClusters

Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.

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
    res, err := s.SDK.ListClusters(ctx, operations.ListClustersRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        Include: []string{
            "aperiam",
            "delectus",
            "dolorem",
        },
        MaxResults: sdk.Int64(292147),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResponse != nil {
        // handle response
    }
}
```

## ListFargateProfiles

Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.

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
    res, err := s.SDK.ListFargateProfiles(ctx, operations.ListFargateProfilesRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        MaxResults: sdk.Int64(9240),
        Name: "Marcos Schaden",
        NextToken: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFargateProfilesResponse != nil {
        // handle response
    }
}
```

## ListIdentityProviderConfigs

A list of identity provider configurations.

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
    res, err := s.SDK.ListIdentityProviderConfigs(ctx, operations.ListIdentityProviderConfigsRequest{
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        MaxResults: sdk.Int64(787542),
        Name: "Arturo Hauck",
        NextToken: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityProviderConfigsResponse != nil {
        // handle response
    }
}
```

## ListNodegroups

Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.

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
    res, err := s.SDK.ListNodegroups(ctx, operations.ListNodegroupsRequest{
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
        MaxResults: sdk.Int64(486160),
        Name: "Malcolm Swift",
        NextToken: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNodegroupsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags for an Amazon EKS resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        ResourceArn: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListUpdates

Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.

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
    res, err := s.SDK.ListUpdates(ctx, operations.ListUpdatesRequest{
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        AddonName: sdk.String("alias"),
        MaxResults: sdk.Int64(639473),
        Name: "Roberta Jenkins",
        NextToken: sdk.String("possimus"),
        NodegroupName: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUpdatesResponse != nil {
        // handle response
    }
}
```

## RegisterCluster

<p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>

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
    res, err := s.SDK.RegisterCluster(ctx, operations.RegisterClusterRequest{
        RequestBody: operations.RegisterClusterRequestBody{
            ClientRequestToken: sdk.String("ratione"),
            ConnectorConfig: operations.RegisterClusterRequestBodyConnectorConfig{
                Provider: shared.ConnectorConfigProviderEnumAks.ToPointer(),
                RoleArn: sdk.String("laudantium"),
            },
            Name: "Ms. Cindy Wuckert",
            Tags: map[string]string{
                "voluptatibus": "nostrum",
                "sapiente": "quisquam",
                "saepe": "ea",
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterClusterResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "consectetur": "recusandae",
                "aspernatur": "minima",
                "eaque": "a",
                "libero": "aut",
            },
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
        ResourceArn: "non",
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

Deletes specified tags from a resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("autem"),
        ResourceArn: "nobis",
        TagKeys: []string{
            "assumenda",
            "nulla",
            "voluptas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAddon

Updates an Amazon EKS add-on.

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
    res, err := s.SDK.UpdateAddon(ctx, operations.UpdateAddonRequest{
        RequestBody: operations.UpdateAddonRequestBody{
            AddonVersion: sdk.String("libero"),
            ClientRequestToken: sdk.String("quasi"),
            ConfigurationValues: sdk.String("tempora"),
            ResolveConflicts: operations.UpdateAddonRequestBodyResolveConflictsEnumOverwrite.ToPointer(),
            ServiceAccountRoleArn: sdk.String("explicabo"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("esse"),
        AddonName: "esse",
        Name: "Blake Kihn",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAddonResponse != nil {
        // handle response
    }
}
```

## UpdateClusterConfig

<p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can't update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>

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
    res, err := s.SDK.UpdateClusterConfig(ctx, operations.UpdateClusterConfigRequest{
        RequestBody: operations.UpdateClusterConfigRequestBody{
            ClientRequestToken: sdk.String("ut"),
            Logging: &operations.UpdateClusterConfigRequestBodyLogging{
                ClusterLogging: []shared.LogSetup{
                    shared.LogSetup{
                        Enabled: sdk.Bool(false),
                        Types: []shared.LogTypeEnum{
                            shared.LogTypeEnumScheduler,
                            shared.LogTypeEnumAPI,
                        },
                    },
                    shared.LogSetup{
                        Enabled: sdk.Bool(false),
                        Types: []shared.LogTypeEnum{
                            shared.LogTypeEnumControllerManager,
                            shared.LogTypeEnumAPI,
                            shared.LogTypeEnumAPI,
                        },
                    },
                },
            },
            ResourcesVpcConfig: &operations.UpdateClusterConfigRequestBodyResourcesVpcConfig{
                EndpointPrivateAccess: sdk.Bool(false),
                EndpointPublicAccess: sdk.Bool(false),
                PublicAccessCidrs: []string{
                    "quidem",
                    "neque",
                    "quo",
                },
                SecurityGroupIds: []string{
                    "quo",
                    "fuga",
                    "eius",
                    "eos",
                },
                SubnetIds: []string{
                    "ab",
                    "cupiditate",
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("quo"),
        Name: "Sophie Bayer",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClusterConfigResponse != nil {
        // handle response
    }
}
```

## UpdateClusterVersion

<p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>

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
    res, err := s.SDK.UpdateClusterVersion(ctx, operations.UpdateClusterVersionRequest{
        RequestBody: operations.UpdateClusterVersionRequestBody{
            ClientRequestToken: sdk.String("dignissimos"),
            Version: "inventore",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("commodi"),
        Name: "Todd Oberbrunner DDS",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClusterVersionResponse != nil {
        // handle response
    }
}
```

## UpdateNodegroupConfig

Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.

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
    res, err := s.SDK.UpdateNodegroupConfig(ctx, operations.UpdateNodegroupConfigRequest{
        RequestBody: operations.UpdateNodegroupConfigRequestBody{
            ClientRequestToken: sdk.String("eum"),
            Labels: &operations.UpdateNodegroupConfigRequestBodyLabels{
                AddOrUpdateLabels: map[string]string{
                    "praesentium": "consequuntur",
                    "deleniti": "fugit",
                    "fuga": "mollitia",
                },
                RemoveLabels: []string{
                    "atque",
                    "explicabo",
                },
            },
            ScalingConfig: &operations.UpdateNodegroupConfigRequestBodyScalingConfig{
                DesiredSize: sdk.Int64(325685),
                MaxSize: sdk.Int64(392676),
                MinSize: sdk.Int64(147014),
            },
            Taints: &operations.UpdateNodegroupConfigRequestBodyTaints{
                AddOrUpdateTaints: []shared.Taint{
                    shared.Taint{
                        Effect: shared.TaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("ratione"),
                        Value: sdk.String("explicabo"),
                    },
                    shared.Taint{
                        Effect: shared.TaintEffectEnumPreferNoSchedule.ToPointer(),
                        Key: sdk.String("occaecati"),
                        Value: sdk.String("atque"),
                    },
                    shared.Taint{
                        Effect: shared.TaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("esse"),
                        Value: sdk.String("eveniet"),
                    },
                    shared.Taint{
                        Effect: shared.TaintEffectEnumPreferNoSchedule.ToPointer(),
                        Key: sdk.String("veritatis"),
                        Value: sdk.String("esse"),
                    },
                },
                RemoveTaints: []shared.Taint{
                    shared.Taint{
                        Effect: shared.TaintEffectEnumPreferNoSchedule.ToPointer(),
                        Key: sdk.String("vero"),
                        Value: sdk.String("aliquid"),
                    },
                    shared.Taint{
                        Effect: shared.TaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("saepe"),
                        Value: sdk.String("vel"),
                    },
                    shared.Taint{
                        Effect: shared.TaintEffectEnumPreferNoSchedule.ToPointer(),
                        Key: sdk.String("molestiae"),
                        Value: sdk.String("rerum"),
                    },
                    shared.Taint{
                        Effect: shared.TaintEffectEnumNoExecute.ToPointer(),
                        Key: sdk.String("minima"),
                        Value: sdk.String("distinctio"),
                    },
                },
            },
            UpdateConfig: &operations.UpdateNodegroupConfigRequestBodyUpdateConfig{
                MaxUnavailable: sdk.Int64(756779),
                MaxUnavailablePercentage: sdk.Int64(27069),
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("minus"),
        Name: "Miranda Feest",
        NodegroupName: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNodegroupConfigResponse != nil {
        // handle response
    }
}
```

## UpdateNodegroupVersion

<p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>

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
    res, err := s.SDK.UpdateNodegroupVersion(ctx, operations.UpdateNodegroupVersionRequest{
        RequestBody: operations.UpdateNodegroupVersionRequestBody{
            ClientRequestToken: sdk.String("a"),
            Force: sdk.Bool(false),
            LaunchTemplate: &operations.UpdateNodegroupVersionRequestBodyLaunchTemplate{
                ID: sdk.String("d871f99d-d2ef-4d12-9aa6-f1e674bdb04f"),
                Name: sdk.String("Marion Kihn"),
                Version: sdk.String("aut"),
            },
            ReleaseVersion: sdk.String("voluptatum"),
            Version: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("omnis"),
        Name: "Ms. Roger Strosin II",
        NodegroupName: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNodegroupVersionResponse != nil {
        // handle response
    }
}
```
