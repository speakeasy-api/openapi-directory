import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcekey as shared_resourcekey


@dataclass_json
@dataclasses.dataclass
class StartRemediationExecutionRequest:
    config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    resource_keys: list[shared_resourcekey.ResourceKey] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKeys') }})
    
