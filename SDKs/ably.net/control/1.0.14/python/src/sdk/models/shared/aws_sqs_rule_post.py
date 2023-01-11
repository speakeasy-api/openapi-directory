import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aws_access_keys as shared_aws_access_keys
from ..shared import aws_assume_role as shared_aws_assume_role
from ..shared import rule_source as shared_rule_source

class AwsSqsRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsSqsRulePostRuleTypeEnum(str, Enum):
    AWS_SQS = "aws/sqs"

class AwsSqsRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclasses.dataclass
class AwsSqsRulePostTarget:
    authentication: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    aws_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccountId') }})
    queue_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueName') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    enveloped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    

@dataclass_json
@dataclasses.dataclass
class AwsSqsRulePost:
    request_mode: AwsSqsRulePostRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AwsSqsRulePostRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AwsSqsRulePostTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[AwsSqsRulePostStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
