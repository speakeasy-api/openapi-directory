import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action


@dataclasses.dataclass
class ReplaceTopicRulePathParams:
    rule_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReplaceTopicRuleHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReplaceTopicRuleRequestBodyTopicRulePayload:
    r"""ReplaceTopicRuleRequestBodyTopicRulePayload
    Describes a rule.
    """
    
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    aws_iot_sql_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotSqlVersion') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_action: Optional[shared_action.Action] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorAction') }})
    rule_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleDisabled') }})
    sql: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    

@dataclass_json
@dataclasses.dataclass
class ReplaceTopicRuleRequestBody:
    topic_rule_payload: ReplaceTopicRuleRequestBodyTopicRulePayload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicRulePayload') }})
    

@dataclasses.dataclass
class ReplaceTopicRuleRequest:
    headers: ReplaceTopicRuleHeaders = dataclasses.field()
    path_params: ReplaceTopicRulePathParams = dataclasses.field()
    request: ReplaceTopicRuleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReplaceTopicRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_resource_update_exception: Optional[Any] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    sql_parse_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
