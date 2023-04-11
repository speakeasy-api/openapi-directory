import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://docdb-elastic.{region}.amazonaws.com", "https://docdb-elastic.{region}.amazonaws.com", "http://docdb-elastic.{region}.amazonaws.com.cn", "https://docdb-elastic.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The new Amazon Elastic DocumentDB service endpoint.
 *
 * @see {@link https://docs.aws.amazon.com/docdb-elastic/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
     */
    createCluster(req: operations.CreateClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateClusterResponse>;
    /**
     * Creates a snapshot of a cluster.
     */
    createClusterSnapshot(req: operations.CreateClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateClusterSnapshotResponse>;
    /**
     * Delete a Elastic DocumentDB cluster.
     */
    deleteCluster(req: operations.DeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClusterResponse>;
    /**
     * Delete a Elastic DocumentDB snapshot.
     */
    deleteClusterSnapshot(req: operations.DeleteClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClusterSnapshotResponse>;
    /**
     * Returns information about a specific Elastic DocumentDB cluster.
     */
    getCluster(req: operations.GetClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetClusterResponse>;
    /**
     * Returns information about a specific Elastic DocumentDB snapshot
     */
    getClusterSnapshot(req: operations.GetClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetClusterSnapshotResponse>;
    /**
     * Returns information about Elastic DocumentDB snapshots for a specified cluster.
     */
    listClusterSnapshots(req: operations.ListClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.ListClusterSnapshotsResponse>;
    /**
     * Returns information about provisioned Elastic DocumentDB clusters.
     */
    listClusters(req: operations.ListClustersRequest, config?: AxiosRequestConfig): Promise<operations.ListClustersResponse>;
    /**
     * Lists all tags on a Elastic DocumentDB resource
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Restores a Elastic DocumentDB cluster from a snapshot.
     */
    restoreClusterFromSnapshot(req: operations.RestoreClusterFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.RestoreClusterFromSnapshotResponse>;
    /**
     * Adds metadata tags to a Elastic DocumentDB resource
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes metadata tags to a Elastic DocumentDB resource
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
     */
    updateCluster(req: operations.UpdateClusterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClusterResponse>;
}
