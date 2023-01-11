import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import summarizedcounter as shared_summarizedcounter
from ..shared import attackproperty as shared_attackproperty
from ..shared import mitigation as shared_mitigation
from ..shared import subresourcesummary as shared_subresourcesummary


@dataclass_json
@dataclasses.dataclass
class AttackDetail:
    r"""AttackDetail
    The details of a DDoS attack.
    """
    
    attack_counters: Optional[list[shared_summarizedcounter.SummarizedCounter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackCounters') }})
    attack_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackId') }})
    attack_properties: Optional[list[shared_attackproperty.AttackProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackProperties') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mitigations: Optional[list[shared_mitigation.Mitigation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mitigations') }})
    resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_resources: Optional[list[shared_subresourcesummary.SubResourceSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubResources') }})
    
