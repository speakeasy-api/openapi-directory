# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.InstallKubernetesRequest(
    request=operations.InstallKubernetesRequestBody(
        addon_slugs=[
            "est",
        ],
        cluster_uuid="laudantium",
    ),
)
    
res = s.one_click_applications.install_kubernetes(req)

if res.install_kubernetes_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### 1-Click Applications

* `install_kubernetes` - Install Kubernetes 1-Click Applications
* `list` - List 1-Click Applications

### Account

* `get_user_information` - Get User Information

### Actions

* `get_action` - Retrieve an Existing Action
* `list_all_actions` - List All Actions

### Apps

* `create_app` - Create a New App
* `create_deployment` - Create an App Deployment
* `delete_app` - Delete an App
* `get_app` - Retrieve an Existing App
* `get_deployment` - Retrieve an App Deployment
* `get_instance_size` - Retrieve an Instance Size
* `get_logs` - Retrieve Deployment Logs
* `get_logs_aggregate` - Retrieve Aggregate Deployment Logs
* `get_tier` - Retrieve an App Tier
* `list_apps` - List All Apps
* `list_deployments` - List App Deployments
* `list_instance_sizes` - List Instance Sizes
* `list_regions` - List App Regions
* `list_tiers` - List App Tiers
* `post_cancel_deployment` - Cancel a Deployment
* `update_app` - Update an App
* `validate_app_spec` - Propose an App Spec

### Billing

* `get_customer_balance` - Get Customer Balance
* `get_invoice_by_uuid` - Retrieve an Invoice by UUID
* `get_invoice_csv_by_uuid` - Retrieve an Invoice CSV by UUID
* `get_invoice_pdf_by_uuid` - Retrieve an Invoice PDF by UUID
* `get_invoice_summary_by_uuid` - Retrieve an Invoice Summary by UUID
* `list_billing_history` - List Billing History
* `list_invoices` - List All Invoices

### Block Storage

* `create_new_volume` - Create a New Block Storage Volume
* `create_volume_snapshot` - Create Snapshot from a Volume
* `delete_volume` - Delete a Block Storage Volume
* `delete_volume_by_name` - Delete a Block Storage Volume by Name
* `delete_volume_snapshot_by_id` - Delete a Volume Snapshot
* `get_volume` - Retrieve an Existing Block Storage Volume
* `get_volume_snapshot_by_id` - Retreive an Existing Volume Snapshot
* `list_all_volumes` - List All Block Storage Volumes
* `list_volume_snapshots` - List Snapshots for a Volume

### Block Storage Actions

* `get_volume_action` - Retrieve an Existing Volume Action
* `list_all_volume_actions` - List All Actions for a Volume
* `post_volume_action_by_id` - Initiate A Block Storage Action By Volume Id
* `post_volume_action_by_name` - Initiate A Block Storage Action By Volume Name

### CDN Endpoints

* `create_cdn_endpoint` - Create a New CDN Endpoint
* `delete_cdn_endpoint` - Delete a CDN Endpoint
* `get_cdn_endpoint` - Retrieve an Existing CDN Endpoint
* `list_cdn_endpoints` - List All CDN Endpoints
* `purge_cdn_cache` - Purge the Cache for an Existing CDN Endpoint
* `update_cdn_endpoint` - Update a CDN Endpoint

### Certificates

* `create_certificates` - Create a New Certificate
* `delete_certificate` - Delete a Certificate
* `get_certificate` - Retrieve an Existing Certificate
* `list_certificates` - List All Certificates

### Container Registry

* `create_registry` - Create Container Registry
* `delete_registry` - Delete Container Registry
* `delete_repository_manifest` - Delete Container Registry Repository Manifest
* `delete_repository_tag` - Delete Container Registry Repository Tag
* `get_docker_credentials` - Get Docker Credentials for Container Registry
* `get_garbage_collection` - Get Active Garbage Collection
* `get_registry` - Get Container Registry Information
* `get_registry_options` - List Available Subscription Tiers
* `get_registry_subscription` - Get Subscription Information
* `list_garbage_collections` - List Garbage Collections
* `list_registry_repositories` - List All Container Registry Repositories
* `list_repository_tags` - List All Container Registry Repository Tags
* `post_registry_subscription` - Update Subscription Tier
* `run_garbage_collection` - Start Garbage Collection
* `update_garbage_collection` - Update Garbage Collection
* `validate_registry_name` - Validate a Container Registry Name

### Databases

* `add_connection_pool` - Add a New Connection Pool (PostgreSQL)
* `add_database` - Add a New Database
* `add_user` - Add a Database User
* `create_database_cluster` - Create a New Database Cluster
* `create_replica` - Create a Read-only Replica
* `delete_connection_pool` - Delete a Connection Pool (PostgreSQL)
* `delete_database` - Delete a Database
* `delete_online_migration` - Stop an Online Migration
* `delete_user` - Remove a Database User
* `destroy_cluster` - Destroy a Database Cluster
* `destroy_replica` - Destroy a Read-only Replica
* `get_connection_pool` - Retrieve Existing Connection Pool (PostgreSQL)
* `get_database` - Retrieve an Existing Database
* `get_database_cluster` - Retrieve an Existing Database Cluster
* `get_eviction_policy` - Retrieve the Eviction Policy for a Redis Cluster
* `get_migration_status` - Retrieve the Status of an Online Migration
* `get_replica` - Retrieve an Existing Read-only Replica
* `get_sql_mode` - Retrieve the SQL Modes for a MySQL Cluster
* `get_user` - Retrieve an Existing Database User
* `list_connection_pools` - List Connection Pools (PostgreSQL)
* `list_database_backups` - List Backups for a Database Cluster
* `list_database_clusters` - List All Database Clusters
* `list_database_firewalls` - List Firewall Rules (Trusted Sources) for a Database Cluster
* `list_databases` - List All Databases
* `list_replicas` - List All Read-only Replicas
* `list_users` - List all Database Users
* `reset_auth` - Reset a Database User's Password or Authentication Method
* `update_database_cluster` - Migrate a Database Cluster to a New Region
* `update_database_cluster_size` - Resize a Database Cluster
* `update_database_firewall` - Update Firewall Rules (Trusted Sources) for a Database
* `update_eviction_policy` - Configure the Eviction Policy for a Redis Cluster
* `update_maintenance_window` - Configure a Database Cluster's Maintenance Window
* `update_online_migration` - Start an Online Migration
* `update_sql_mode` - Update SQL Mode for a Cluster

### Domain Records

* `create_domain_record` - Create a New Domain Record
* `delete_domain_record` - Delete a Domain Record
* `get_domain_record` - Retrieve an Existing Domain Record
* `list_all_domain_records` - List All Domain Records
* `patch_update_domain_record` - Update a Domain Record
* `update_domain_record` - Update a Domain Record

### Domains

* `create_domain` - Create a New Domain
* `delete_domain` - Delete a Domain
* `get_domain` - Retrieve an Existing Domain
* `list_all_domains` - List All Domains

### Droplet Actions

* `get_droplet_action` - Retrieve a Droplet Action
* `list_droplet_actions` - List Actions for a Droplet
* `post_droplet_action` - Initiate a Droplet Action
* `post_droplet_action_by_tag` - Acting on Tagged Droplets

### Droplets

* `create_droplet` - Create a New Droplet
* `destroy_droplet` - Delete an Existing Droplet
* `destroy_droplets_by_tag` - Deleting Droplets by Tag
* `destroy_with_associated_resources_dangerous` - Destroy a Droplet and All of its Associated Resources (Dangerous)
* `destroy_with_associated_resources_selective` - Selectively Destroy a Droplet and its Associated Resources
* `get_destroy_with_associated_resources_status` - Check Status of a Droplet Destroy with Associated Resources Request
* `get_droplet` - Retrieve an Existing Droplet
* `list_all_droplet_neighbors_ids` - List All Droplet Neighbors
* `list_all_droplets` - List All Droplets
* `list_droplet_associated_resources` - List Associated Resources for a Droplet
* `list_droplet_backups` - List Backups for a Droplet
* `list_droplet_firewalls` - List all Firewalls Applied to a Droplet
* `list_droplet_kernels` - List All Available Kernels for a Droplet
* `list_droplet_neighbors` - List Neighbors for a Droplet
* `list_droplet_snapshots` - List Snapshots for a Droplet
* `retry_destroy_with_associated_resource` - Retry a Droplet Destroy with Associated Resources Request

### Firewalls

* `add_firewall_droplets` - Add Droplets to a Firewall
* `add_firewall_rules` - Add Rules to a Firewall
* `add_firewall_tags` - Add Tags to a Firewall
* `create_firewall` - Create a New Firewall
* `delete_firewall` - Delete a Firewall
* `delete_firewall_droplets` - Remove Droplets from a Firewall
* `delete_firewall_rules` - Remove Rules from a Firewall
* `delete_firewall_tags` - Remove Tags from a Firewall
* `get_firewall` - Retrieve an Existing Firewall
* `list_firewalls` - List All Firewalls
* `update_firewall` - Update a Firewall

### Floating IP Actions

* `get_floating_ip_action` - Retrieve an Existing Floating IP Action
* `list_floating_ip_actions` - List All Actions for a Floating IP
* `post_floating_ip_action` - Initiate a Floating IP Action

### Floating IPs

* `create_floating_ip` - Create a New Floating IP
* `delete_floating_ip` - Delete a Floating IPs
* `get_floating_ip` - Retrieve an Existing Floating IP
* `list_floating_ips` - List All Floating IPs

### Image Actions

* `get_image_action` - Retrieve an Existing Action
* `list_image_actions` - List All Actions for an Image
* `post_image_action` - Initiate an Image Action

### Images

* `create_custom_image` - Create a Custom Image
* `delete_image` - Delete an Image
* `get_image` - Retrieve an Existing Image
* `get_images_list` - List All Images
* `update_image` - Update an Image

### Kubernetes

* `add_kubernetes_node_pool` - Add a Node Pool to a Kubernetes Cluster
* `add_registry` - Add Container Registry to Kubernetes Clusters
* `create_kubernetes_cluster` - Create a New Kubernetes Cluster
* `delete_kubernetes_cluster` - Delete a Kubernetes Cluster
* `delete_kubernetes_node` - Delete a Node in a Kubernetes Cluster
* `delete_kubernetes_node_pool` - Delete a Node Pool in a Kubernetes Cluster
* `destroy_kubernetes_associated_resources_dangerous` - Delete a Cluster and All of its Associated Resources (Dangerous)
* `destroy_kubernetes_associated_resources_selective` - Selectively Delete a Cluster and its Associated Resources
* `get_available_upgrades` - Retrieve Available Upgrades for an Existing Kubernetes Cluster
* `get_cluster_user` - Retrieve User Information for a Kubernetes Cluster
* `get_clusterlint_results` - Fetch Clusterlint Diagnostics for a Kubernetes Cluster
* `get_credentials` - Retrieve Credentials for a Kubernetes Cluster
* `get_kubeconfig` - Retrieve the kubeconfig for a Kubernetes Cluster
* `get_kubernetes_cluster` - Retrieve an Existing Kubernetes Cluster
* `get_node_pool` - Retrieve a Node Pool for a Kubernetes Cluster
* `list_all_kubernetes_clusters` - List All Kubernetes Clusters
* `list_kubernetes_associated_resources` - List Associated Resources for Cluster Deletion
* `list_kubernetes_options` - List Available Regions, Node Sizes, and Versions of Kubernetes
* `list_node_pools` - List All Node Pools in a Kubernetes Clusters
* `recycle_kubernetes_node_pool` - Recycle a Kubernetes Node Pool
* `remove_registry` - Remove Container Registry from Kubernetes Clusters
* `run_clusterlint` - Run Clusterlint Checks on a Kubernetes Cluster
* `update_kubernetes_cluster` - Update a Kubernetes Cluster
* `update_kubernetes_node_pool` - Update a Node Pool in a Kubernetes Cluster
* `upgrade_kubernetes_cluster` - Upgrade a Kubernetes Cluster

### Load Balancers

* `add_load_balancer_droplets` - Add Droplets to a Load Balancer
* `add_load_balancer_forwarding_rules` - Add Forwarding Rules to a Load Balancer
* `create_load_balancer` - Create a New Load Balancer
* `delete_load_balancer` - Delete a Load Balancer
* `get_load_balancer` - Retrieve an Existing Load Balancer
* `list_all_load_balancers` - List All Load Balancers
* `remove_load_balancer_droplets` - Remove Droplets from a Load Balancer
* `remove_load_balancer_forwarding_rules` - Remove Forwarding Rules from a Load Balancer
* `update_load_balancer` - Update a Load Balancer

### Monitoring

* `create_alert_policy` - Create Alert Policy
* `delete_alert_policy` - Delete an Alert Policy
* `get_alert_policy` - Retrieve an Existing Alert Policy
* `get_droplet_bandwidth_metrics` - Get Droplet Bandwidth Metrics
* `get_droplet_cpu_metrics` - Get Droplet CPU Metrics
* `get_droplet_filesystem_free_metrics` - Get Droplet Filesystem Free Metrics
* `get_droplet_filesystem_size_metrics` - Get Droplet Filesystem Size Metrics
* `get_droplet_load15_metrics` - Get Droplet Load15 Metrics
* `get_droplet_load1_metrics` - Get Droplet Load1 Metrics
* `get_droplet_load5_metrics` - Get Droplet Load5 Metrics
* `get_droplet_memory_available_metrics` - Get Droplet Available Memory Metrics
* `get_droplet_memory_cached_metrics` - Get Droplet Cached Memory Metrics
* `get_droplet_memory_free_metrics` - Get Droplet Free Memory Metrics
* `get_droplet_memory_total_metrics` - Get Droplet Total Memory Metrics
* `list_alert_policies` - List Alert Policies
* `update_alert_policy` - Update an Alert Policy

### Project Resources

* `assign_default_project_resources` - Assign Resources to Default Project
* `assign_project_resources` - Assign Resources to a Project
* `list_default_project_resources` - List Default Project Resources
* `list_project_resources` - List Project Resources

### Projects

* `create_project` - Create a Project
* `delete_project` - Delete an Existing Project
* `get_default_project` - Retrieve the Default Project
* `get_project` - Retrieve an Existing Project
* `list_projects` - List All Projects
* `patch_default_project` - Patch the Default Project
* `patch_project` - Patch a Project
* `update_default_project` - Update the Default Project
* `update_project` - Update a Project

### Regions

* `list_all_regions` - List All Data Center Regions

### SSH Keys

* `create_ssh_key` - Create a New SSH Key
* `destroy_ssh_key` - Delete an SSH Key
* `get_ssh_key` - Retrieve an Existing SSH Key
* `list_all_keys` - List All SSH Keys
* `update_ssh_key` - Update an SSH Key's Name

### Sizes

* `list_all_sizes` - List All Droplet Sizes

### Snapshots

* `delete_snapshot` - Delete a Snapshot
* `get_snapshot` - Retrieve an Existing Snapshot
* `list_all_snapshots` - List All Snapshots

### Tags

* `create_new_tag` - Create a New Tag
* `delete_tag` - Delete a Tag
* `get_tag` - Retrieve a Tag
* `list_all_tags` - List All Tags
* `tag_resource` - Tag a Resource
* `untag_resource` - Untag a Resource

### VPCs

* `create_vpc` - Create a New VPC
* `delete_vpc` - Delete a VPC
* `get_vpc` - Retrieve an Existing VPC
* `list_vpc_members` - List the Member Resources of a VPC
* `list_vpcs` - List All VPCs
* `patch_vpc` - Partially Update a VPC
* `update_vpc` - Update a VPC

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
