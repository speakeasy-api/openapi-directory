import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterendpoint as shared_clusterendpoint
from ..shared import status_enum as shared_status_enum


@dataclass_json
@dataclasses.dataclass
class Cluster:
    r"""Cluster
    A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.
    """
    
    cluster_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterArn') }})
    cluster_endpoints: Optional[list[shared_clusterendpoint.ClusterEndpoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpoints') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
