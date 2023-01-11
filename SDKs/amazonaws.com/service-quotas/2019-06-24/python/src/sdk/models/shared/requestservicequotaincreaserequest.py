import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RequestServiceQuotaIncreaseRequest:
    desired_value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredValue') }})
    quota_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaCode') }})
    service_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    
