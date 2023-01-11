import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Kubernetes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addKubernetesNodePool - Add a Node Pool to a Kubernetes Cluster
     *
     * To add an additional node pool to a Kubernetes clusters, send a POST request
     * to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools` with the following
     * attributes.
     *
    **/
    addKubernetesNodePool(req: operations.AddKubernetesNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.AddKubernetesNodePoolResponse>;
    /**
     * addRegistry - Add Container Registry to Kubernetes Clusters
     *
     * To integrate the container registry with Kubernetes clusters, send a POST request to `/v2/kubernetes/registry`.
    **/
    addRegistry(req: operations.AddRegistryRequest, config?: AxiosRequestConfig): Promise<operations.AddRegistryResponse>;
    /**
     * createKubernetesCluster - Create a New Kubernetes Cluster
     *
     * To create a new Kubernetes cluster, send a POST request to
     * `/v2/kubernetes/clusters`. The request must contain at least one node pool
     * with at least one worker.
     *
     * The request may contain a maintenance window policy describing a time period
     * when disruptive maintenance tasks may be carried out. Omitting the policy
     * implies that a window will be chosen automatically. See
     * [here](https://www.digitalocean.com/docs/kubernetes/how-to/upgrade-cluster/)
     * for details.
     *
    **/
    createKubernetesCluster(req: operations.CreateKubernetesClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateKubernetesClusterResponse>;
    /**
     * deleteKubernetesCluster - Delete a Kubernetes Cluster
     *
     * To delete a Kubernetes cluster and all services deployed to it, send a DELETE
     * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.
     *
     * A 204 status code with no body will be returned in response to a successful
     * request.
     *
    **/
    deleteKubernetesCluster(req: operations.DeleteKubernetesClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKubernetesClusterResponse>;
    /**
     * deleteKubernetesNode - Delete a Node in a Kubernetes Cluster
     *
     * To delete a single node in a pool, send a DELETE request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`.
     *
     * Appending the `skip_drain=1` query parameter to the request causes node
     * draining to be skipped. Omitting the query parameter or setting its value to
     * `0` carries out draining prior to deletion.
     *
     * Appending the `replace=1` query parameter to the request causes the node to
     * be replaced by a new one after deletion. Omitting the query parameter or
     * setting its value to `0` deletes without replacement.
     *
    **/
    deleteKubernetesNode(req: operations.DeleteKubernetesNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKubernetesNodeResponse>;
    /**
     * deleteKubernetesNodePool - Delete a Node Pool in a Kubernetes Cluster
     *
     * To delete a node pool, send a DELETE request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.
     *
     * A 204 status code with no body will be returned in response to a successful
     * request. Nodes in the pool will subsequently be drained and deleted.
     *
    **/
    deleteKubernetesNodePool(req: operations.DeleteKubernetesNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKubernetesNodePoolResponse>;
    /**
     * destroyKubernetesAssociatedResourcesDangerous - Delete a Cluster and All of its Associated Resources (Dangerous)
     *
     * To delete a Kubernetes cluster with all of its associated resources, send a
     * DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/dangerous`.
     * A 204 status code with no body will be returned in response to a successful request.
     *
    **/
    destroyKubernetesAssociatedResourcesDangerous(req: operations.DestroyKubernetesAssociatedResourcesDangerousRequest, config?: AxiosRequestConfig): Promise<operations.DestroyKubernetesAssociatedResourcesDangerousResponse>;
    /**
     * destroyKubernetesAssociatedResourcesSelective - Selectively Delete a Cluster and its Associated Resources
     *
     * To delete a Kubernetes cluster along with a subset of its associated resources,
     * send a DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/selective`.
     *
     * The JSON body of the request should include `load_balancers`, `volumes`, or
     * `volume_snapshots` keys each set to an array of IDs for the associated
     * resources to be destroyed.
     *
     * The IDs can be found by querying the cluster's associated resources endpoint.
     * Any associated resource not included in the request will remain and continue
     * to accrue changes on your account.
     *
    **/
    destroyKubernetesAssociatedResourcesSelective(req: operations.DestroyKubernetesAssociatedResourcesSelectiveRequest, config?: AxiosRequestConfig): Promise<operations.DestroyKubernetesAssociatedResourcesSelectiveResponse>;
    /**
     * getAvailableUpgrades - Retrieve Available Upgrades for an Existing Kubernetes Cluster
     *
     * To determine whether a cluster can be upgraded, and the versions to which it
     * can be upgraded, send a GET request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.
     *
    **/
    getAvailableUpgrades(req: operations.GetAvailableUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableUpgradesResponse>;
    /**
     * getClusterUser - Retrieve User Information for a Kubernetes Cluster
     *
     * To show information the user associated with a Kubernetes cluster, send a GET
     * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/user`.
     *
    **/
    getClusterUser(req: operations.GetClusterUserRequest, config?: AxiosRequestConfig): Promise<operations.GetClusterUserResponse>;
    /**
     * getClusterlintResults - Fetch Clusterlint Diagnostics for a Kubernetes Cluster
     *
     * To request clusterlint diagnostics for your cluster, send a GET request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. If the `run_id` query
     * parameter is provided, then the diagnostics for the specific run is fetched.
     * By default, the latest results are shown.
     *
     * To find out how to address clusterlint feedback, please refer to
     * [the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).
     *
    **/
    getClusterlintResults(req: operations.GetClusterlintResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetClusterlintResultsResponse>;
    /**
     * getCredentials - Retrieve Credentials for a Kubernetes Cluster
     *
     * This endpoint returns a JSON object . It can be used to programmatically
     * construct Kubernetes clients which cannot parse kubeconfig files.
     *
     * The resulting JSON object contains token-based authentication for clusters
     * supporting it, and certificate-based authentication otherwise. For a list of
     * supported versions and more information, see "[How to Connect to a DigitalOcean
     * Kubernetes Cluster with kubectl](https://www.digitalocean.com/docs/kubernetes/how-to/connect-with-kubectl/)".
     *
     * To retrieve credentials for accessing a Kubernetes cluster, send a GET
     * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials`.
     *
     * Clusters supporting token-based authentication may define an expiration by
     * passing a duration in seconds as a query parameter to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig?expiry_seconds=$DURATION_IN_SECONDS`.
     * If not set or 0, then the token will have a 7 day expiry. The query parameter
     * has no impact in certificate-based authentication.
     *
    **/
    getCredentials(req: operations.GetCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetCredentialsResponse>;
    /**
     * getKubeconfig - Retrieve the kubeconfig for a Kubernetes Cluster
     *
     * This endpoint returns a kubeconfig file in YAML format. It can be used to
     * connect to and administer the cluster using the Kubernetes command line tool,
     * `kubectl`, or other programs supporting kubeconfig files (e.g., client libraries).
     *
     * The resulting kubeconfig file uses token-based authentication for clusters
     * supporting it, and certificate-based authentication otherwise. For a list of
     * supported versions and more information, see "[How to Connect to a DigitalOcean
     * Kubernetes Cluster with kubectl](https://www.digitalocean.com/docs/kubernetes/how-to/connect-with-kubectl/)".
     *
     * To retrieve a kubeconfig file for use with a Kubernetes cluster, send a GET
     * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig`.
     *
     * Clusters supporting token-based authentication may define an expiration by
     * passing a duration in seconds as a query parameter to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig?expiry_seconds=$DURATION_IN_SECONDS`.
     * If not set or 0, then the token will have a 7 day expiry. The query parameter
     * has no impact in certificate-based authentication.
     *
    **/
    getKubeconfig(req: operations.GetKubeconfigRequest, config?: AxiosRequestConfig): Promise<operations.GetKubeconfigResponse>;
    /**
     * getKubernetesCluster - Retrieve an Existing Kubernetes Cluster
     *
     * To show information about an existing Kubernetes cluster, send a GET request
     * to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.
     *
    **/
    getKubernetesCluster(req: operations.GetKubernetesClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetKubernetesClusterResponse>;
    /**
     * getNodePool - Retrieve a Node Pool for a Kubernetes Cluster
     *
     * To show information about a specific node pool in a Kubernetes cluster, send
     * a GET request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.
     *
    **/
    getNodePool(req: operations.GetNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.GetNodePoolResponse>;
    /**
     * listAllKubernetesClusters - List All Kubernetes Clusters
     *
     * To list all of the Kubernetes clusters on your account, send a GET request
     * to `/v2/kubernetes/clusters`.
     *
    **/
    listAllKubernetesClusters(req: operations.ListAllKubernetesClustersRequest, config?: AxiosRequestConfig): Promise<operations.ListAllKubernetesClustersResponse>;
    /**
     * listKubernetesAssociatedResources - List Associated Resources for Cluster Deletion
     *
     * To list the associated billable resources that can be destroyed along with a cluster, send a GET request to the `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources` endpoint.
    **/
    listKubernetesAssociatedResources(req: operations.ListKubernetesAssociatedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListKubernetesAssociatedResourcesResponse>;
    /**
     * listKubernetesOptions - List Available Regions, Node Sizes, and Versions of Kubernetes
     *
     * To list the versions of Kubernetes available for use, the regions that support Kubernetes, and the available node sizes, send a GET request to `/v2/kubernetes/options`.
    **/
    listKubernetesOptions(config?: AxiosRequestConfig): Promise<operations.ListKubernetesOptionsResponse>;
    /**
     * listNodePools - List All Node Pools in a Kubernetes Clusters
     *
     * To list all of the node pools in a Kubernetes clusters, send a GET request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools`.
     *
    **/
    listNodePools(req: operations.ListNodePoolsRequest, config?: AxiosRequestConfig): Promise<operations.ListNodePoolsResponse>;
    /**
     * recycleKubernetesNodePool - Recycle a Kubernetes Node Pool
     *
     * The endpoint has been deprecated. Please use the DELETE
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`
     * method instead.
     *
    **/
    recycleKubernetesNodePool(req: operations.RecycleKubernetesNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.RecycleKubernetesNodePoolResponse>;
    /**
     * removeRegistry - Remove Container Registry from Kubernetes Clusters
     *
     * To remove the container registry from Kubernetes clusters, send a DELETE request to `/v2/kubernetes/registry`.
    **/
    removeRegistry(req: operations.RemoveRegistryRequest, config?: AxiosRequestConfig): Promise<operations.RemoveRegistryResponse>;
    /**
     * runClusterlint - Run Clusterlint Checks on a Kubernetes Cluster
     *
     * Clusterlint helps operators conform to Kubernetes best practices around
     * resources, security and reliability to avoid common problems while operating
     * or upgrading the clusters.
     *
     * To request a clusterlint run on your cluster, send a POST request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. This will run all
     * checks present in the `doks` group by default, if a request body is not
     * specified. Optionally specify the below attributes.
     *
     * For information about the available checks, please refer to
     * [the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).
     *
    **/
    runClusterlint(req: operations.RunClusterlintRequest, config?: AxiosRequestConfig): Promise<operations.RunClusterlintResponse>;
    /**
     * updateKubernetesCluster - Update a Kubernetes Cluster
     *
     * To update a Kubernetes cluster, send a PUT request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID` and specify one or more of the
     * attributes below.
     *
    **/
    updateKubernetesCluster(req: operations.UpdateKubernetesClusterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKubernetesClusterResponse>;
    /**
     * updateKubernetesNodePool - Update a Node Pool in a Kubernetes Cluster
     *
     * To update the name of a node pool, edit the tags applied to it, or adjust its
     * number of nodes, send a PUT request to
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID` with the
     * following attributes.
     *
    **/
    updateKubernetesNodePool(req: operations.UpdateKubernetesNodePoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKubernetesNodePoolResponse>;
    /**
     * upgradeKubernetesCluster - Upgrade a Kubernetes Cluster
     *
     * To immediately upgrade a Kubernetes cluster to a newer patch release of
     * Kubernetes, send a POST request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrade`.
     * The body of the request must specify a version attribute.
     *
     * Available upgrade versions for a cluster can be fetched from
     * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.
     *
    **/
    upgradeKubernetesCluster(req: operations.UpgradeKubernetesClusterRequest, config?: AxiosRequestConfig): Promise<operations.UpgradeKubernetesClusterResponse>;
}
