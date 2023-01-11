import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getstatus as shared_getstatus
from ..shared import verifynamemeta as shared_verifynamemeta


@dataclass_json
@dataclasses.dataclass
class StatusCall:
    data: shared_getstatus.GetStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: shared_verifynamemeta.VerifyNameMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
