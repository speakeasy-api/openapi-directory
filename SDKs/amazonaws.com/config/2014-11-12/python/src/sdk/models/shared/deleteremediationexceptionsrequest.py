import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationexceptionresourcekey as shared_remediationexceptionresourcekey


@dataclass_json
@dataclasses.dataclass
class DeleteRemediationExceptionsRequest:
    config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    resource_keys: list[shared_remediationexceptionresourcekey.RemediationExceptionResourceKey] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKeys') }})
    
