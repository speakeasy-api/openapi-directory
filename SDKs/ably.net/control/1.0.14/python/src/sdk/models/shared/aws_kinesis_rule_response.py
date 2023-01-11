import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aws_access_keys_response as shared_aws_access_keys_response
from ..shared import aws_assume_role as shared_aws_assume_role
from ..shared import rule_source as shared_rule_source

class AwsKinesisRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsKinesisRuleResponseRuleTypeEnum(str, Enum):
    AWS_KINESIS = "aws/kinesis"

class AwsKinesisRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class AwsKinesisRuleResponseTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclasses.dataclass
class AwsKinesisRuleResponseTarget:
    authentication: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    format: AwsKinesisRuleResponseTargetFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    partition_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionKey') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    enveloped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    

@dataclass_json
@dataclasses.dataclass
class AwsKinesisRuleResponse:
    request_mode: AwsKinesisRuleResponseRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AwsKinesisRuleResponseRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AwsKinesisRuleResponseTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[AwsKinesisRuleResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
