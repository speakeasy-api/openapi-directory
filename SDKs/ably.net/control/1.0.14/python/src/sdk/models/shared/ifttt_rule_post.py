import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_source as shared_rule_source

class IftttRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class IftttRulePostRuleTypeEnum(str, Enum):
    HTTP_IFTTT = "http/ifttt"

class IftttRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclasses.dataclass
class IftttRulePostTarget:
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    webhook_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookKey') }})
    

@dataclass_json
@dataclasses.dataclass
class IftttRulePost:
    request_mode: IftttRulePostRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: IftttRulePostRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: IftttRulePostTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[IftttRulePostStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
