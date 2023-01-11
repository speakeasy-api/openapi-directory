import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleconfig as shared_ruleconfig
from ..shared import createsafetyruleresponse as shared_createsafetyruleresponse


@dataclasses.dataclass
class CreateSafetyRuleHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSafetyRuleRequestBodyAssertionRule:
    r"""CreateSafetyRuleRequestBodyAssertionRule
    A new assertion rule for a control panel.
    """
    
    asserted_controls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssertedControls') }})
    control_panel_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanelArn') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_config: Optional[shared_ruleconfig.RuleConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfig') }})
    wait_period_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSafetyRuleRequestBodyGatingRule:
    r"""CreateSafetyRuleRequestBodyGatingRule
    A new gating rule for a control panel.
    """
    
    control_panel_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanelArn') }})
    gating_controls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatingControls') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_config: Optional[shared_ruleconfig.RuleConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfig') }})
    target_controls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetControls') }})
    wait_period_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSafetyRuleRequestBody:
    assertion_rule: Optional[CreateSafetyRuleRequestBodyAssertionRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssertionRule') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    gating_rule: Optional[CreateSafetyRuleRequestBodyGatingRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatingRule') }})
    

@dataclasses.dataclass
class CreateSafetyRuleRequest:
    headers: CreateSafetyRuleHeaders = dataclasses.field()
    request: CreateSafetyRuleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSafetyRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_safety_rule_response: Optional[shared_createsafetyruleresponse.CreateSafetyRuleResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
