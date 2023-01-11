# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { InstallKubernetesRequest, InstallKubernetesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: InstallKubernetesRequest = {
  request: {
    addonSlugs: [
      "voluptas",
    ],
    clusterUuid: "culpa",
  },
};

sdk.oneClickApplications.installKubernetes(req).then((res: InstallKubernetesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### 1-Click Applications

* `installKubernetes` - Install Kubernetes 1-Click Applications
* `list` - List 1-Click Applications

### Account

* `getUserInformation` - Get User Information

### Actions

* `getAction` - Retrieve an Existing Action
* `listAllActions` - List All Actions

### Apps

* `createApp` - Create a New App
* `createDeployment` - Create an App Deployment
* `deleteApp` - Delete an App
* `getApp` - Retrieve an Existing App
* `getDeployment` - Retrieve an App Deployment
* `getInstanceSize` - Retrieve an Instance Size
* `getLogs` - Retrieve Deployment Logs
* `getLogsAggregate` - Retrieve Aggregate Deployment Logs
* `getTier` - Retrieve an App Tier
* `listApps` - List All Apps
* `listDeployments` - List App Deployments
* `listInstanceSizes` - List Instance Sizes
* `listRegions` - List App Regions
* `listTiers` - List App Tiers
* `postCancelDeployment` - Cancel a Deployment
* `updateApp` - Update an App
* `validateAppSpec` - Propose an App Spec

### Billing

* `getCustomerBalance` - Get Customer Balance
* `getInvoiceByUuid` - Retrieve an Invoice by UUID
* `getInvoiceCsvByUuid` - Retrieve an Invoice CSV by UUID
* `getInvoicePdfByUuid` - Retrieve an Invoice PDF by UUID
* `getInvoiceSummaryByUuid` - Retrieve an Invoice Summary by UUID
* `listBillingHistory` - List Billing History
* `listInvoices` - List All Invoices

### Block Storage

* `createNewVolume` - Create a New Block Storage Volume
* `createVolumeSnapshot` - Create Snapshot from a Volume
* `deleteVolume` - Delete a Block Storage Volume
* `deleteVolumeByName` - Delete a Block Storage Volume by Name
* `deleteVolumeSnapshotById` - Delete a Volume Snapshot
* `getVolume` - Retrieve an Existing Block Storage Volume
* `getVolumeSnapshotById` - Retreive an Existing Volume Snapshot
* `listAllVolumes` - List All Block Storage Volumes
* `listVolumeSnapshots` - List Snapshots for a Volume

### Block Storage Actions

* `getVolumeAction` - Retrieve an Existing Volume Action
* `listAllVolumeActions` - List All Actions for a Volume
* `postVolumeActionById` - Initiate A Block Storage Action By Volume Id
* `postVolumeActionByName` - Initiate A Block Storage Action By Volume Name

### CDN Endpoints

* `createCdnEndpoint` - Create a New CDN Endpoint
* `deleteCdnEndpoint` - Delete a CDN Endpoint
* `getCdnEndpoint` - Retrieve an Existing CDN Endpoint
* `listCdnEndpoints` - List All CDN Endpoints
* `purgeCdnCache` - Purge the Cache for an Existing CDN Endpoint
* `updateCdnEndpoint` - Update a CDN Endpoint

### Certificates

* `createCertificates` - Create a New Certificate
* `deleteCertificate` - Delete a Certificate
* `getCertificate` - Retrieve an Existing Certificate
* `listCertificates` - List All Certificates

### Container Registry

* `createRegistry` - Create Container Registry
* `deleteRegistry` - Delete Container Registry
* `deleteRepositoryManifest` - Delete Container Registry Repository Manifest
* `deleteRepositoryTag` - Delete Container Registry Repository Tag
* `getDockerCredentials` - Get Docker Credentials for Container Registry
* `getGarbageCollection` - Get Active Garbage Collection
* `getRegistry` - Get Container Registry Information
* `getRegistryOptions` - List Available Subscription Tiers
* `getRegistrySubscription` - Get Subscription Information
* `listGarbageCollections` - List Garbage Collections
* `listRegistryRepositories` - List All Container Registry Repositories
* `listRepositoryTags` - List All Container Registry Repository Tags
* `postRegistrySubscription` - Update Subscription Tier
* `runGarbageCollection` - Start Garbage Collection
* `updateGarbageCollection` - Update Garbage Collection
* `validateRegistryName` - Validate a Container Registry Name

### Databases

* `addConnectionPool` - Add a New Connection Pool (PostgreSQL)
* `addDatabase` - Add a New Database
* `addUser` - Add a Database User
* `createDatabaseCluster` - Create a New Database Cluster
* `createReplica` - Create a Read-only Replica
* `deleteConnectionPool` - Delete a Connection Pool (PostgreSQL)
* `deleteDatabase` - Delete a Database
* `deleteOnlineMigration` - Stop an Online Migration
* `deleteUser` - Remove a Database User
* `destroyCluster` - Destroy a Database Cluster
* `destroyReplica` - Destroy a Read-only Replica
* `getConnectionPool` - Retrieve Existing Connection Pool (PostgreSQL)
* `getDatabase` - Retrieve an Existing Database
* `getDatabaseCluster` - Retrieve an Existing Database Cluster
* `getEvictionPolicy` - Retrieve the Eviction Policy for a Redis Cluster
* `getMigrationStatus` - Retrieve the Status of an Online Migration
* `getReplica` - Retrieve an Existing Read-only Replica
* `getSqlMode` - Retrieve the SQL Modes for a MySQL Cluster
* `getUser` - Retrieve an Existing Database User
* `listConnectionPools` - List Connection Pools (PostgreSQL)
* `listDatabaseBackups` - List Backups for a Database Cluster
* `listDatabaseClusters` - List All Database Clusters
* `listDatabaseFirewalls` - List Firewall Rules (Trusted Sources) for a Database Cluster
* `listDatabases` - List All Databases
* `listReplicas` - List All Read-only Replicas
* `listUsers` - List all Database Users
* `resetAuth` - Reset a Database User's Password or Authentication Method
* `updateDatabaseCluster` - Migrate a Database Cluster to a New Region
* `updateDatabaseClusterSize` - Resize a Database Cluster
* `updateDatabaseFirewall` - Update Firewall Rules (Trusted Sources) for a Database
* `updateEvictionPolicy` - Configure the Eviction Policy for a Redis Cluster
* `updateMaintenanceWindow` - Configure a Database Cluster's Maintenance Window
* `updateOnlineMigration` - Start an Online Migration
* `updateSqlMode` - Update SQL Mode for a Cluster

### Domain Records

* `createDomainRecord` - Create a New Domain Record
* `deleteDomainRecord` - Delete a Domain Record
* `getDomainRecord` - Retrieve an Existing Domain Record
* `listAllDomainRecords` - List All Domain Records
* `patchUpdateDomainRecord` - Update a Domain Record
* `updateDomainRecord` - Update a Domain Record

### Domains

* `createDomain` - Create a New Domain
* `deleteDomain` - Delete a Domain
* `getDomain` - Retrieve an Existing Domain
* `listAllDomains` - List All Domains

### Droplet Actions

* `getDropletAction` - Retrieve a Droplet Action
* `listDropletActions` - List Actions for a Droplet
* `postDropletAction` - Initiate a Droplet Action
* `postDropletActionByTag` - Acting on Tagged Droplets

### Droplets

* `createDroplet` - Create a New Droplet
* `destroyDroplet` - Delete an Existing Droplet
* `destroyDropletsByTag` - Deleting Droplets by Tag
* `destroyWithAssociatedResourcesDangerous` - Destroy a Droplet and All of its Associated Resources (Dangerous)
* `destroyWithAssociatedResourcesSelective` - Selectively Destroy a Droplet and its Associated Resources
* `getDestroyWithAssociatedResourcesStatus` - Check Status of a Droplet Destroy with Associated Resources Request
* `getDroplet` - Retrieve an Existing Droplet
* `listAllDropletNeighborsIds` - List All Droplet Neighbors
* `listAllDroplets` - List All Droplets
* `listDropletAssociatedResources` - List Associated Resources for a Droplet
* `listDropletBackups` - List Backups for a Droplet
* `listDropletFirewalls` - List all Firewalls Applied to a Droplet
* `listDropletKernels` - List All Available Kernels for a Droplet
* `listDropletNeighbors` - List Neighbors for a Droplet
* `listDropletSnapshots` - List Snapshots for a Droplet
* `retryDestroyWithAssociatedResource` - Retry a Droplet Destroy with Associated Resources Request

### Firewalls

* `addFirewallDroplets` - Add Droplets to a Firewall
* `addFirewallRules` - Add Rules to a Firewall
* `addFirewallTags` - Add Tags to a Firewall
* `createFirewall` - Create a New Firewall
* `deleteFirewall` - Delete a Firewall
* `deleteFirewallDroplets` - Remove Droplets from a Firewall
* `deleteFirewallRules` - Remove Rules from a Firewall
* `deleteFirewallTags` - Remove Tags from a Firewall
* `getFirewall` - Retrieve an Existing Firewall
* `listFirewalls` - List All Firewalls
* `updateFirewall` - Update a Firewall

### Floating IP Actions

* `getFloatingIpAction` - Retrieve an Existing Floating IP Action
* `listFloatingIpActions` - List All Actions for a Floating IP
* `postFloatingIpAction` - Initiate a Floating IP Action

### Floating IPs

* `createFloatingIp` - Create a New Floating IP
* `deleteFloatingIp` - Delete a Floating IPs
* `getFloatingIp` - Retrieve an Existing Floating IP
* `listFloatingIps` - List All Floating IPs

### Image Actions

* `getImageAction` - Retrieve an Existing Action
* `listImageActions` - List All Actions for an Image
* `postImageAction` - Initiate an Image Action

### Images

* `createCustomImage` - Create a Custom Image
* `deleteImage` - Delete an Image
* `getImage` - Retrieve an Existing Image
* `getImagesList` - List All Images
* `updateImage` - Update an Image

### Kubernetes

* `addKubernetesNodePool` - Add a Node Pool to a Kubernetes Cluster
* `addRegistry` - Add Container Registry to Kubernetes Clusters
* `createKubernetesCluster` - Create a New Kubernetes Cluster
* `deleteKubernetesCluster` - Delete a Kubernetes Cluster
* `deleteKubernetesNode` - Delete a Node in a Kubernetes Cluster
* `deleteKubernetesNodePool` - Delete a Node Pool in a Kubernetes Cluster
* `destroyKubernetesAssociatedResourcesDangerous` - Delete a Cluster and All of its Associated Resources (Dangerous)
* `destroyKubernetesAssociatedResourcesSelective` - Selectively Delete a Cluster and its Associated Resources
* `getAvailableUpgrades` - Retrieve Available Upgrades for an Existing Kubernetes Cluster
* `getClusterUser` - Retrieve User Information for a Kubernetes Cluster
* `getClusterlintResults` - Fetch Clusterlint Diagnostics for a Kubernetes Cluster
* `getCredentials` - Retrieve Credentials for a Kubernetes Cluster
* `getKubeconfig` - Retrieve the kubeconfig for a Kubernetes Cluster
* `getKubernetesCluster` - Retrieve an Existing Kubernetes Cluster
* `getNodePool` - Retrieve a Node Pool for a Kubernetes Cluster
* `listAllKubernetesClusters` - List All Kubernetes Clusters
* `listKubernetesAssociatedResources` - List Associated Resources for Cluster Deletion
* `listKubernetesOptions` - List Available Regions, Node Sizes, and Versions of Kubernetes
* `listNodePools` - List All Node Pools in a Kubernetes Clusters
* `recycleKubernetesNodePool` - Recycle a Kubernetes Node Pool
* `removeRegistry` - Remove Container Registry from Kubernetes Clusters
* `runClusterlint` - Run Clusterlint Checks on a Kubernetes Cluster
* `updateKubernetesCluster` - Update a Kubernetes Cluster
* `updateKubernetesNodePool` - Update a Node Pool in a Kubernetes Cluster
* `upgradeKubernetesCluster` - Upgrade a Kubernetes Cluster

### Load Balancers

* `addLoadBalancerDroplets` - Add Droplets to a Load Balancer
* `addLoadBalancerForwardingRules` - Add Forwarding Rules to a Load Balancer
* `createLoadBalancer` - Create a New Load Balancer
* `deleteLoadBalancer` - Delete a Load Balancer
* `getLoadBalancer` - Retrieve an Existing Load Balancer
* `listAllLoadBalancers` - List All Load Balancers
* `removeLoadBalancerDroplets` - Remove Droplets from a Load Balancer
* `removeLoadBalancerForwardingRules` - Remove Forwarding Rules from a Load Balancer
* `updateLoadBalancer` - Update a Load Balancer

### Monitoring

* `createAlertPolicy` - Create Alert Policy
* `deleteAlertPolicy` - Delete an Alert Policy
* `getAlertPolicy` - Retrieve an Existing Alert Policy
* `getDropletBandwidthMetrics` - Get Droplet Bandwidth Metrics
* `getDropletCpuMetrics` - Get Droplet CPU Metrics
* `getDropletFilesystemFreeMetrics` - Get Droplet Filesystem Free Metrics
* `getDropletFilesystemSizeMetrics` - Get Droplet Filesystem Size Metrics
* `getDropletLoad15Metrics` - Get Droplet Load15 Metrics
* `getDropletLoad1Metrics` - Get Droplet Load1 Metrics
* `getDropletLoad5Metrics` - Get Droplet Load5 Metrics
* `getDropletMemoryAvailableMetrics` - Get Droplet Available Memory Metrics
* `getDropletMemoryCachedMetrics` - Get Droplet Cached Memory Metrics
* `getDropletMemoryFreeMetrics` - Get Droplet Free Memory Metrics
* `getDropletMemoryTotalMetrics` - Get Droplet Total Memory Metrics
* `listAlertPolicies` - List Alert Policies
* `updateAlertPolicy` - Update an Alert Policy

### Project Resources

* `assignDefaultProjectResources` - Assign Resources to Default Project
* `assignProjectResources` - Assign Resources to a Project
* `listDefaultProjectResources` - List Default Project Resources
* `listProjectResources` - List Project Resources

### Projects

* `createProject` - Create a Project
* `deleteProject` - Delete an Existing Project
* `getDefaultProject` - Retrieve the Default Project
* `getProject` - Retrieve an Existing Project
* `listProjects` - List All Projects
* `patchDefaultProject` - Patch the Default Project
* `patchProject` - Patch a Project
* `updateDefaultProject` - Update the Default Project
* `updateProject` - Update a Project

### Regions

* `listAllRegions` - List All Data Center Regions

### SSH Keys

* `createSshKey` - Create a New SSH Key
* `destroySshKey` - Delete an SSH Key
* `getSshKey` - Retrieve an Existing SSH Key
* `listAllKeys` - List All SSH Keys
* `updateSshKey` - Update an SSH Key's Name

### Sizes

* `listAllSizes` - List All Droplet Sizes

### Snapshots

* `deleteSnapshot` - Delete a Snapshot
* `getSnapshot` - Retrieve an Existing Snapshot
* `listAllSnapshots` - List All Snapshots

### Tags

* `createNewTag` - Create a New Tag
* `deleteTag` - Delete a Tag
* `getTag` - Retrieve a Tag
* `listAllTags` - List All Tags
* `tagResource` - Tag a Resource
* `untagResource` - Untag a Resource

### VPCs

* `createVpc` - Create a New VPC
* `deleteVpc` - Delete a VPC
* `getVpc` - Retrieve an Existing VPC
* `listVpcMembers` - List the Member Resources of a VPC
* `listVpcs` - List All VPCs
* `patchVpc` - Partially Update a VPC
* `updateVpc` - Update a VPC

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
