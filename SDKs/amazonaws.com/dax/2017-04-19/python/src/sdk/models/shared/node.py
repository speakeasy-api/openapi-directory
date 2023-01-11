import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpoint as shared_endpoint


@dataclass_json
@dataclasses.dataclass
class Node:
    r"""Node
    Represents an individual node within a DAX cluster.
    """
    
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    node_create_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeCreateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeId') }})
    node_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeStatus') }})
    parameter_group_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupStatus') }})
    
