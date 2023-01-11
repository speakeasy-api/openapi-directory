import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationeventresourcetype_enum as shared_configurationeventresourcetype_enum
from ..shared import configurationeventstatus_enum as shared_configurationeventstatus_enum


@dataclass_json
@dataclasses.dataclass
class ConfigurationEvent:
    r"""ConfigurationEvent
     The event information. 
    """
    
    event_detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventDetail') }})
    event_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventResourceName') }})
    event_resource_type: Optional[shared_configurationeventresourcetype_enum.ConfigurationEventResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventResourceType') }})
    event_status: Optional[shared_configurationeventstatus_enum.ConfigurationEventStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventStatus') }})
    event_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitored_resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoredResourceARN') }})
    
