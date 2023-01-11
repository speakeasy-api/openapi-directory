import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListAllKubernetesClustersQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum(str, Enum):
    ANY = "any"
    MONDAY = "monday"
    TUESDAY = "tuesday"
    WEDNESDAY = "wednesday"
    THURSDAY = "thursday"
    FRIDAY = "friday"
    SATURDAY = "saturday"
    SUNDAY = "sunday"


@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy:
    r"""ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy
    An object specifying the maintenance window policy for the Kubernetes cluster.
    """
    
    day: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum(str, Enum):
    PROVISIONING = "provisioning"
    RUNNING = "running"
    DRAINING = "draining"
    DELETING = "deleting"


@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus:
    r"""ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus
    An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
    """
    
    state: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_id') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum(str, Enum):
    NO_SCHEDULE = "NoSchedule"
    PREFER_NO_SCHEDULE = "PreferNoSchedule"
    NO_EXECUTE = "NoExecute"


@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints:
    effect: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    auto_scale: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_scale') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_nodes') }})
    min_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_nodes') }})
    nodes: Optional[list[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    taints: Optional[list[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum(str, Enum):
    RUNNING = "running"
    PROVISIONING = "provisioning"
    DEGRADED = "degraded"
    ERROR = "error"
    DELETED = "deleted"
    UPGRADING = "upgrading"
    DELETING = "deleting"


@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus:
    r"""ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus
    An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    state: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONKubernetesClusters:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_pools: list[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_pools') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    auto_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_upgrade') }})
    cluster_subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_subnet') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ipv4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    maintenance_policy: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenance_policy') }})
    registry_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_enabled') }})
    service_subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_subnet') }})
    status: Optional[ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    surge_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surge_upgrade') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSONMeta:
    r"""ListAllKubernetesClusters200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters200ApplicationJSON:
    meta: ListAllKubernetesClusters200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    kubernetes_clusters: Optional[list[ListAllKubernetesClusters200ApplicationJSONKubernetesClusters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetes_clusters') }})
    links: Optional[ListAllKubernetesClusters200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllKubernetesClusters401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListAllKubernetesClustersRequest:
    query_params: ListAllKubernetesClustersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAllKubernetesClustersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_all_kubernetes_clusters_200_application_json_object: Optional[ListAllKubernetesClusters200ApplicationJSON] = dataclasses.field(default=None)
    list_all_kubernetes_clusters_401_application_json_object: Optional[ListAllKubernetesClusters401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
