import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllKubernetesClustersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum {
    Any = "any",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}
/**
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
export declare class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy extends SpeakeasyBase {
    day?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum;
    duration?: string;
    startTime?: string;
}
export declare enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum {
    Provisioning = "provisioning",
    Running = "running",
    Draining = "draining",
    Deleting = "deleting"
}
/**
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
**/
export declare class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus extends SpeakeasyBase {
    state?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum;
}
export declare class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes extends SpeakeasyBase {
    createdAt?: Date;
    dropletId?: string;
    id?: string;
    name?: string;
    status?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus;
    updatedAt?: Date;
}
export declare enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum {
    NoSchedule = "NoSchedule",
    PreferNoSchedule = "PreferNoSchedule",
    NoExecute = "NoExecute"
}
export declare class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints extends SpeakeasyBase {
    effect?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum;
    key?: string;
    value?: string;
}
export declare class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools extends SpeakeasyBase {
    autoScale?: boolean;
    count: number;
    id?: string;
    labels?: Record<string, any>;
    maxNodes?: number;
    minNodes?: number;
    name: string;
    nodes?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes[];
    size: string;
    tags?: string[];
    taints?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints[];
}
export declare enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum {
    Running = "running",
    Provisioning = "provisioning",
    Degraded = "degraded",
    Error = "error",
    Deleted = "deleted",
    Upgrading = "upgrading",
    Deleting = "deleting"
}
/**
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
**/
export declare class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus extends SpeakeasyBase {
    message?: string;
    state?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum;
}
export declare class ListAllKubernetesClusters200ApplicationJsonKubernetesClusters extends SpeakeasyBase {
    autoUpgrade?: boolean;
    clusterSubnet?: string;
    createdAt?: Date;
    endpoint?: string;
    id?: string;
    ipv4?: string;
    maintenancePolicy?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy;
    name: string;
    nodePools: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools[];
    region: string;
    registryEnabled?: boolean;
    serviceSubnet?: string;
    status?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus;
    surgeUpgrade?: boolean;
    tags?: string[];
    updatedAt?: Date;
    version: string;
    vpcUuid?: string;
}
export declare class ListAllKubernetesClusters200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllKubernetesClusters200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllKubernetesClusters200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllKubernetesClusters200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllKubernetesClusters200ApplicationJson extends SpeakeasyBase {
    kubernetesClusters?: ListAllKubernetesClusters200ApplicationJsonKubernetesClusters[];
    links?: ListAllKubernetesClusters200ApplicationJsonLinks;
    meta: ListAllKubernetesClusters200ApplicationJsonMeta;
}
export declare class ListAllKubernetesClusters401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllKubernetesClustersRequest extends SpeakeasyBase {
    queryParams: ListAllKubernetesClustersQueryParams;
}
export declare class ListAllKubernetesClustersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllKubernetesClusters200ApplicationJSONObject?: ListAllKubernetesClusters200ApplicationJson;
    listAllKubernetesClusters401ApplicationJSONObject?: ListAllKubernetesClusters401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
