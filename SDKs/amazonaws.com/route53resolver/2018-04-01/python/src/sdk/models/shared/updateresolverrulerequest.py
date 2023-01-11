import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverruleconfig as shared_resolverruleconfig


@dataclass_json
@dataclasses.dataclass
class UpdateResolverRuleRequest:
    config: shared_resolverruleconfig.ResolverRuleConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Config') }})
    resolver_rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRuleId') }})
    
