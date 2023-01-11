import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import ruletype_enum as shared_ruletype_enum
from ..shared import rule as shared_rule
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateGlobalRuleConfigPathParams:
    rule: shared_ruletype_enum.RuleTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateGlobalRuleConfigRequest:
    path_params: UpdateGlobalRuleConfigPathParams = dataclasses.field()
    request: shared_rule.Rule = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateGlobalRuleConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rule: Optional[shared_rule.Rule] = dataclasses.field(default=None)
    
