import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_source as shared_rule_source

class AmqpExternalRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpExternalRulePostRuleTypeEnum(str, Enum):
    AMQP_EXTERNAL = "amqp/external"


@dataclass_json
@dataclasses.dataclass
class AmqpExternalRulePostTargetHeaders:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AmqpExternalRulePostTarget:
    mandatory_route: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryRoute') }})
    persistent_messages: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentMessages') }})
    routing_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingKey') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    enveloped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[list[AmqpExternalRulePostTargetHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    message_ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageTtl') }})
    

@dataclass_json
@dataclasses.dataclass
class AmqpExternalRulePost:
    request_mode: AmqpExternalRulePostRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AmqpExternalRulePostRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AmqpExternalRulePostTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
