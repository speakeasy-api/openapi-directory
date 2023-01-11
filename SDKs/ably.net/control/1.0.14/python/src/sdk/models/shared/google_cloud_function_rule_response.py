import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_source as shared_rule_source

class GoogleCloudFunctionRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class GoogleCloudFunctionRuleResponseRuleTypeEnum(str, Enum):
    HTTP_GOOGLE_CLOUD_FUNCTION = "http/google-cloud-function"

class GoogleCloudFunctionRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class GoogleCloudFunctionRuleResponseTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudFunctionRuleResponseTargetHeaders:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudFunctionRuleResponseTarget:
    function_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    project_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    enveloped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[GoogleCloudFunctionRuleResponseTargetFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[list[GoogleCloudFunctionRuleResponseTargetHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudFunctionRuleResponse:
    request_mode: GoogleCloudFunctionRuleResponseRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: GoogleCloudFunctionRuleResponseRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: GoogleCloudFunctionRuleResponseTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[GoogleCloudFunctionRuleResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
