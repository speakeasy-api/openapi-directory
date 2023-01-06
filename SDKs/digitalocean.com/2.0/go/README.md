# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuth: shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.InstallKubernetesRequest{
        Request: operations.InstallKubernetesRequestBody{
            AddonSlugs: []string{
                "corrupti",
                "quod",
            },
            ClusterUUID: "voluptas",
        },
    }
    
    res, err := s.OneClickApplications.InstallKubernetes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallKubernetes200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### 1-Click Applications

* `InstallKubernetes` - Install Kubernetes 1-Click Applications
* `List` - List 1-Click Applications

### Account

* `GetUserInformation` - Get User Information

### Actions

* `GetAction` - Retrieve an Existing Action
* `ListAllActions` - List All Actions

### Apps

* `CreateApp` - Create a New App
* `CreateDeployment` - Create an App Deployment
* `DeleteApp` - Delete an App
* `GetApp` - Retrieve an Existing App
* `GetDeployment` - Retrieve an App Deployment
* `GetInstanceSize` - Retrieve an Instance Size
* `GetLogs` - Retrieve Deployment Logs
* `GetLogsAggregate` - Retrieve Aggregate Deployment Logs
* `GetTier` - Retrieve an App Tier
* `ListApps` - List All Apps
* `ListDeployments` - List App Deployments
* `ListInstanceSizes` - List Instance Sizes
* `ListRegions` - List App Regions
* `ListTiers` - List App Tiers
* `PostCancelDeployment` - Cancel a Deployment
* `UpdateApp` - Update an App
* `ValidateAppSpec` - Propose an App Spec

### Billing

* `GetCustomerBalance` - Get Customer Balance
* `GetInvoiceByUUID` - Retrieve an Invoice by UUID
* `GetInvoiceCsvByUUID` - Retrieve an Invoice CSV by UUID
* `GetInvoicePdfByUUID` - Retrieve an Invoice PDF by UUID
* `GetInvoiceSummaryByUUID` - Retrieve an Invoice Summary by UUID
* `ListBillingHistory` - List Billing History
* `ListInvoices` - List All Invoices

### Block Storage

* `CreateNewVolume` - Create a New Block Storage Volume
* `CreateVolumeSnapshot` - Create Snapshot from a Volume
* `DeleteVolume` - Delete a Block Storage Volume
* `DeleteVolumeByName` - Delete a Block Storage Volume by Name
* `DeleteVolumeSnapshotByID` - Delete a Volume Snapshot
* `GetVolume` - Retrieve an Existing Block Storage Volume
* `GetVolumeSnapshotByID` - Retreive an Existing Volume Snapshot
* `ListAllVolumes` - List All Block Storage Volumes
* `ListVolumeSnapshots` - List Snapshots for a Volume

### Block Storage Actions

* `GetVolumeAction` - Retrieve an Existing Volume Action
* `ListAllVolumeActions` - List All Actions for a Volume
* `PostVolumeActionByID` - Initiate A Block Storage Action By Volume Id
* `PostVolumeActionByName` - Initiate A Block Storage Action By Volume Name

### CDN Endpoints

* `CreateCdnEndpoint` - Create a New CDN Endpoint
* `DeleteCdnEndpoint` - Delete a CDN Endpoint
* `GetCdnEndpoint` - Retrieve an Existing CDN Endpoint
* `ListCdnEndpoints` - List All CDN Endpoints
* `PurgeCdnCache` - Purge the Cache for an Existing CDN Endpoint
* `UpdateCdnEndpoint` - Update a CDN Endpoint

### Certificates

* `CreateCertificates` - Create a New Certificate
* `DeleteCertificate` - Delete a Certificate
* `GetCertificate` - Retrieve an Existing Certificate
* `ListCertificates` - List All Certificates

### Container Registry

* `CreateRegistry` - Create Container Registry
* `DeleteRegistry` - Delete Container Registry
* `DeleteRepositoryManifest` - Delete Container Registry Repository Manifest
* `DeleteRepositoryTag` - Delete Container Registry Repository Tag
* `GetDockerCredentials` - Get Docker Credentials for Container Registry
* `GetGarbageCollection` - Get Active Garbage Collection
* `GetRegistry` - Get Container Registry Information
* `GetRegistryOptions` - List Available Subscription Tiers
* `GetRegistrySubscription` - Get Subscription Information
* `ListGarbageCollections` - List Garbage Collections
* `ListRegistryRepositories` - List All Container Registry Repositories
* `ListRepositoryTags` - List All Container Registry Repository Tags
* `PostRegistrySubscription` - Update Subscription Tier
* `RunGarbageCollection` - Start Garbage Collection
* `UpdateGarbageCollection` - Update Garbage Collection
* `ValidateRegistryName` - Validate a Container Registry Name

### Databases

* `AddConnectionPool` - Add a New Connection Pool (PostgreSQL)
* `AddDatabase` - Add a New Database
* `AddUser` - Add a Database User
* `CreateDatabaseCluster` - Create a New Database Cluster
* `CreateReplica` - Create a Read-only Replica
* `DeleteConnectionPool` - Delete a Connection Pool (PostgreSQL)
* `DeleteDatabase` - Delete a Database
* `DeleteOnlineMigration` - Stop an Online Migration
* `DeleteUser` - Remove a Database User
* `DestroyCluster` - Destroy a Database Cluster
* `DestroyReplica` - Destroy a Read-only Replica
* `GetConnectionPool` - Retrieve Existing Connection Pool (PostgreSQL)
* `GetDatabase` - Retrieve an Existing Database
* `GetDatabaseCluster` - Retrieve an Existing Database Cluster
* `GetEvictionPolicy` - Retrieve the Eviction Policy for a Redis Cluster
* `GetMigrationStatus` - Retrieve the Status of an Online Migration
* `GetReplica` - Retrieve an Existing Read-only Replica
* `GetSQLMode` - Retrieve the SQL Modes for a MySQL Cluster
* `GetUser` - Retrieve an Existing Database User
* `ListConnectionPools` - List Connection Pools (PostgreSQL)
* `ListDatabaseBackups` - List Backups for a Database Cluster
* `ListDatabaseClusters` - List All Database Clusters
* `ListDatabaseFirewalls` - List Firewall Rules (Trusted Sources) for a Database Cluster
* `ListDatabases` - List All Databases
* `ListReplicas` - List All Read-only Replicas
* `ListUsers` - List all Database Users
* `ResetAuth` - Reset a Database User's Password or Authentication Method
* `UpdateDatabaseCluster` - Migrate a Database Cluster to a New Region
* `UpdateDatabaseClusterSize` - Resize a Database Cluster
* `UpdateDatabaseFirewall` - Update Firewall Rules (Trusted Sources) for a Database
* `UpdateEvictionPolicy` - Configure the Eviction Policy for a Redis Cluster
* `UpdateMaintenanceWindow` - Configure a Database Cluster's Maintenance Window
* `UpdateOnlineMigration` - Start an Online Migration
* `UpdateSQLMode` - Update SQL Mode for a Cluster

### Domain Records

* `CreateDomainRecord` - Create a New Domain Record
* `DeleteDomainRecord` - Delete a Domain Record
* `GetDomainRecord` - Retrieve an Existing Domain Record
* `ListAllDomainRecords` - List All Domain Records
* `PatchUpdateDomainRecord` - Update a Domain Record
* `UpdateDomainRecord` - Update a Domain Record

### Domains

* `CreateDomain` - Create a New Domain
* `DeleteDomain` - Delete a Domain
* `GetDomain` - Retrieve an Existing Domain
* `ListAllDomains` - List All Domains

### Droplet Actions

* `GetDropletAction` - Retrieve a Droplet Action
* `ListDropletActions` - List Actions for a Droplet
* `PostDropletAction` - Initiate a Droplet Action
* `PostDropletActionByTag` - Acting on Tagged Droplets

### Droplets

* `CreateDroplet` - Create a New Droplet
* `DestroyDroplet` - Delete an Existing Droplet
* `DestroyDropletsByTag` - Deleting Droplets by Tag
* `DestroyWithAssociatedResourcesDangerous` - Destroy a Droplet and All of its Associated Resources (Dangerous)
* `DestroyWithAssociatedResourcesSelective` - Selectively Destroy a Droplet and its Associated Resources
* `GetDestroyWithAssociatedResourcesStatus` - Check Status of a Droplet Destroy with Associated Resources Request
* `GetDroplet` - Retrieve an Existing Droplet
* `ListAllDropletNeighborsIds` - List All Droplet Neighbors
* `ListAllDroplets` - List All Droplets
* `ListDropletAssociatedResources` - List Associated Resources for a Droplet
* `ListDropletBackups` - List Backups for a Droplet
* `ListDropletFirewalls` - List all Firewalls Applied to a Droplet
* `ListDropletKernels` - List All Available Kernels for a Droplet
* `ListDropletNeighbors` - List Neighbors for a Droplet
* `ListDropletSnapshots` - List Snapshots for a Droplet
* `RetryDestroyWithAssociatedResource` - Retry a Droplet Destroy with Associated Resources Request

### Firewalls

* `AddFirewallDroplets` - Add Droplets to a Firewall
* `AddFirewallRules` - Add Rules to a Firewall
* `AddFirewallTags` - Add Tags to a Firewall
* `CreateFirewall` - Create a New Firewall
* `DeleteFirewall` - Delete a Firewall
* `DeleteFirewallDroplets` - Remove Droplets from a Firewall
* `DeleteFirewallRules` - Remove Rules from a Firewall
* `DeleteFirewallTags` - Remove Tags from a Firewall
* `GetFirewall` - Retrieve an Existing Firewall
* `ListFirewalls` - List All Firewalls
* `UpdateFirewall` - Update a Firewall

### Floating IP Actions

* `GetFloatingIPAction` - Retrieve an Existing Floating IP Action
* `ListFloatingIPActions` - List All Actions for a Floating IP
* `PostFloatingIPAction` - Initiate a Floating IP Action

### Floating IPs

* `CreateFloatingIP` - Create a New Floating IP
* `DeleteFloatingIP` - Delete a Floating IPs
* `GetFloatingIP` - Retrieve an Existing Floating IP
* `ListFloatingIps` - List All Floating IPs

### Image Actions

* `GetImageAction` - Retrieve an Existing Action
* `ListImageActions` - List All Actions for an Image
* `PostImageAction` - Initiate an Image Action

### Images

* `CreateCustomImage` - Create a Custom Image
* `DeleteImage` - Delete an Image
* `GetImage` - Retrieve an Existing Image
* `GetImagesList` - List All Images
* `UpdateImage` - Update an Image

### Kubernetes

* `AddKubernetesNodePool` - Add a Node Pool to a Kubernetes Cluster
* `AddRegistry` - Add Container Registry to Kubernetes Clusters
* `CreateKubernetesCluster` - Create a New Kubernetes Cluster
* `DeleteKubernetesCluster` - Delete a Kubernetes Cluster
* `DeleteKubernetesNode` - Delete a Node in a Kubernetes Cluster
* `DeleteKubernetesNodePool` - Delete a Node Pool in a Kubernetes Cluster
* `DestroyKubernetesAssociatedResourcesDangerous` - Delete a Cluster and All of its Associated Resources (Dangerous)
* `DestroyKubernetesAssociatedResourcesSelective` - Selectively Delete a Cluster and its Associated Resources
* `GetAvailableUpgrades` - Retrieve Available Upgrades for an Existing Kubernetes Cluster
* `GetClusterUser` - Retrieve User Information for a Kubernetes Cluster
* `GetClusterlintResults` - Fetch Clusterlint Diagnostics for a Kubernetes Cluster
* `GetCredentials` - Retrieve Credentials for a Kubernetes Cluster
* `GetKubeconfig` - Retrieve the kubeconfig for a Kubernetes Cluster
* `GetKubernetesCluster` - Retrieve an Existing Kubernetes Cluster
* `GetNodePool` - Retrieve a Node Pool for a Kubernetes Cluster
* `ListAllKubernetesClusters` - List All Kubernetes Clusters
* `ListKubernetesAssociatedResources` - List Associated Resources for Cluster Deletion
* `ListKubernetesOptions` - List Available Regions, Node Sizes, and Versions of Kubernetes
* `ListNodePools` - List All Node Pools in a Kubernetes Clusters
* `RecycleKubernetesNodePool` - Recycle a Kubernetes Node Pool
* `RemoveRegistry` - Remove Container Registry from Kubernetes Clusters
* `RunClusterlint` - Run Clusterlint Checks on a Kubernetes Cluster
* `UpdateKubernetesCluster` - Update a Kubernetes Cluster
* `UpdateKubernetesNodePool` - Update a Node Pool in a Kubernetes Cluster
* `UpgradeKubernetesCluster` - Upgrade a Kubernetes Cluster

### Load Balancers

* `AddLoadBalancerDroplets` - Add Droplets to a Load Balancer
* `AddLoadBalancerForwardingRules` - Add Forwarding Rules to a Load Balancer
* `CreateLoadBalancer` - Create a New Load Balancer
* `DeleteLoadBalancer` - Delete a Load Balancer
* `GetLoadBalancer` - Retrieve an Existing Load Balancer
* `ListAllLoadBalancers` - List All Load Balancers
* `RemoveLoadBalancerDroplets` - Remove Droplets from a Load Balancer
* `RemoveLoadBalancerForwardingRules` - Remove Forwarding Rules from a Load Balancer
* `UpdateLoadBalancer` - Update a Load Balancer

### Monitoring

* `CreateAlertPolicy` - Create Alert Policy
* `DeleteAlertPolicy` - Delete an Alert Policy
* `GetAlertPolicy` - Retrieve an Existing Alert Policy
* `GetDropletBandwidthMetrics` - Get Droplet Bandwidth Metrics
* `GetDropletCPUMetrics` - Get Droplet CPU Metrics
* `GetDropletFilesystemFreeMetrics` - Get Droplet Filesystem Free Metrics
* `GetDropletFilesystemSizeMetrics` - Get Droplet Filesystem Size Metrics
* `GetDropletLoad15Metrics` - Get Droplet Load15 Metrics
* `GetDropletLoad1Metrics` - Get Droplet Load1 Metrics
* `GetDropletLoad5Metrics` - Get Droplet Load5 Metrics
* `GetDropletMemoryAvailableMetrics` - Get Droplet Available Memory Metrics
* `GetDropletMemoryCachedMetrics` - Get Droplet Cached Memory Metrics
* `GetDropletMemoryFreeMetrics` - Get Droplet Free Memory Metrics
* `GetDropletMemoryTotalMetrics` - Get Droplet Total Memory Metrics
* `ListAlertPolicies` - List Alert Policies
* `UpdateAlertPolicy` - Update an Alert Policy

### Project Resources

* `AssignDefaultProjectResources` - Assign Resources to Default Project
* `AssignProjectResources` - Assign Resources to a Project
* `ListDefaultProjectResources` - List Default Project Resources
* `ListProjectResources` - List Project Resources

### Projects

* `CreateProject` - Create a Project
* `DeleteProject` - Delete an Existing Project
* `GetDefaultProject` - Retrieve the Default Project
* `GetProject` - Retrieve an Existing Project
* `ListProjects` - List All Projects
* `PatchDefaultProject` - Patch the Default Project
* `PatchProject` - Patch a Project
* `UpdateDefaultProject` - Update the Default Project
* `UpdateProject` - Update a Project

### Regions

* `ListAllRegions` - List All Data Center Regions

### SSH Keys

* `CreateSSHKey` - Create a New SSH Key
* `DestroySSHKey` - Delete an SSH Key
* `GetSSHKey` - Retrieve an Existing SSH Key
* `ListAllKeys` - List All SSH Keys
* `UpdateSSHKey` - Update an SSH Key's Name

### Sizes

* `ListAllSizes` - List All Droplet Sizes

### Snapshots

* `DeleteSnapshot` - Delete a Snapshot
* `GetSnapshot` - Retrieve an Existing Snapshot
* `ListAllSnapshots` - List All Snapshots

### Tags

* `CreateNewTag` - Create a New Tag
* `DeleteTag` - Delete a Tag
* `GetTag` - Retrieve a Tag
* `ListAllTags` - List All Tags
* `TagResource` - Tag a Resource
* `UntagResource` - Untag a Resource

### VPCs

* `CreateVpc` - Create a New VPC
* `DeleteVpc` - Delete a VPC
* `GetVpc` - Retrieve an Existing VPC
* `ListVpcMembers` - List the Member Resources of a VPC
* `ListVpcs` - List All VPCs
* `PatchVpc` - Partially Update a VPC
* `UpdateVpc` - Update a VPC

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
