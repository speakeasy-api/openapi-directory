import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channeltype_enum as shared_channeltype_enum
from ..shared import endpointdemographic as shared_endpointdemographic
from ..shared import endpointlocation as shared_endpointlocation
from ..shared import endpointuser as shared_endpointuser


@dataclass_json
@dataclasses.dataclass
class EndpointBatchItem:
    r"""EndpointBatchItem
    Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    attributes: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    channel_type: Optional[shared_channeltype_enum.ChannelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelType') }})
    demographic: Optional[shared_endpointdemographic.EndpointDemographic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Demographic') }})
    effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate') }})
    endpoint_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointStatus') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    location: Optional[shared_endpointlocation.EndpointLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    metrics: Optional[dict[str, float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    opt_out: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptOut') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    user: Optional[shared_endpointuser.EndpointUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
