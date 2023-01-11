import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_source as shared_rule_source

class AmqpRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpRulePostRuleTypeEnum(str, Enum):
    AMQP = "amqp"

class AmqpRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclasses.dataclass
class AmqpRulePostTargetHeaders:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AmqpRulePostTarget:
    queue_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueId') }})
    enveloped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[list[AmqpRulePostTargetHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    

@dataclass_json
@dataclasses.dataclass
class AmqpRulePost:
    request_mode: AmqpRulePostRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AmqpRulePostRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AmqpRulePostTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[AmqpRulePostStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
