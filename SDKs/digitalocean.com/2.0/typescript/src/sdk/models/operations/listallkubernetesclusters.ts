import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllKubernetesClustersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum {
    Any = "any",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}


// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy
/** 
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum {
    Provisioning = "provisioning",
    Running = "running",
    Draining = "draining",
    Deleting = "deleting"
}


// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus
/** 
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
**/
export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum;
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum {
    NoSchedule = "NoSchedule",
    PreferNoSchedule = "PreferNoSchedule",
    NoExecute = "NoExecute"
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effect" })
  effect?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_scale" })
  autoScale?: boolean;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_nodes" })
  maxNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=min_nodes" })
  minNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes })
  nodes?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=taints", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints })
  taints?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints[];
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum {
    Running = "running",
    Provisioning = "provisioning",
    Degraded = "degraded",
    Error = "error",
    Deleted = "deleted",
    Upgrading = "upgrading",
    Deleting = "deleting"
}


// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus
/** 
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
**/
export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum;
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClusters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_upgrade" })
  autoUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cluster_subnet" })
  clusterSubnet?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenance_policy" })
  maintenancePolicy?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_pools", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools })
  nodePools: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=registry_enabled" })
  registryEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=service_subnet" })
  serviceSubnet?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus;

  @SpeakeasyMetadata({ data: "json, name=surge_upgrade" })
  surgeUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllKubernetesClusters200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllKubernetesClusters200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAllKubernetesClusters200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kubernetes_clusters", elemType: ListAllKubernetesClusters200ApplicationJsonKubernetesClusters })
  kubernetesClusters?: ListAllKubernetesClusters200ApplicationJsonKubernetesClusters[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllKubernetesClusters200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllKubernetesClusters200ApplicationJsonMeta;
}


export class ListAllKubernetesClusters401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllKubernetesClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAllKubernetesClustersQueryParams;
}


export class ListAllKubernetesClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllKubernetesClusters200ApplicationJSONObject?: ListAllKubernetesClusters200ApplicationJson;

  @SpeakeasyMetadata()
  listAllKubernetesClusters401ApplicationJSONObject?: ListAllKubernetesClusters401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
