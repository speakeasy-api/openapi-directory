import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instance as shared_instance


@dataclass_json
@dataclasses.dataclass
class InstanceSummary:
    r"""InstanceSummary
    The details about the instance.
    """
    
    instance: Optional[shared_instance.Instance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
