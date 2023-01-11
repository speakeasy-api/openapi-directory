import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aws_access_keys_response as shared_aws_access_keys_response
from ..shared import aws_assume_role as shared_aws_assume_role
from ..shared import rule_source as shared_rule_source

class AwsLambdaRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsLambdaRuleResponseRuleTypeEnum(str, Enum):
    AWS_LAMBDA = "aws/lambda"

class AwsLambdaRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclasses.dataclass
class AwsLambdaRuleResponseTarget:
    authentication: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    function_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    enveloped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    

@dataclass_json
@dataclasses.dataclass
class AwsLambdaRuleResponse:
    request_mode: AwsLambdaRuleResponseRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AwsLambdaRuleResponseRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AwsLambdaRuleResponseTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[AwsLambdaRuleResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
