import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicequota as shared_servicequota


@dataclass_json
@dataclasses.dataclass
class GetServiceQuotaResponse:
    quota: Optional[shared_servicequota.ServiceQuota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quota') }})
    
