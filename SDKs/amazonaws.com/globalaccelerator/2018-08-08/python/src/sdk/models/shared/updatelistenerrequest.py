import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientaffinity_enum as shared_clientaffinity_enum
from ..shared import portrange as shared_portrange
from ..shared import protocol_enum as shared_protocol_enum


@dataclass_json
@dataclasses.dataclass
class UpdateListenerRequest:
    listener_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    client_affinity: Optional[shared_clientaffinity_enum.ClientAffinityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAffinity') }})
    port_ranges: Optional[list[shared_portrange.PortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    protocol: Optional[shared_protocol_enum.ProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    
