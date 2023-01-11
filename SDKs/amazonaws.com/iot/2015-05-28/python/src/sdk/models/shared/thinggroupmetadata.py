import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupnameandarn as shared_groupnameandarn


@dataclass_json
@dataclasses.dataclass
class ThingGroupMetadata:
    r"""ThingGroupMetadata
    Thing group metadata.
    """
    
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentGroupName') }})
    root_to_parent_thing_groups: Optional[list[shared_groupnameandarn.GroupNameAndArn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootToParentThingGroups') }})
    
