import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import corsrule as shared_corsrule


@dataclass_json
@dataclasses.dataclass
class PutCorsPolicyInput:
    container_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerName') }})
    cors_policy: list[shared_corsrule.CorsRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CorsPolicy') }})
    
