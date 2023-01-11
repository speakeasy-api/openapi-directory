import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule_source as shared_rule_source

class GoogleCloudFunctionRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class GoogleCloudFunctionRulePostRuleTypeEnum(str, Enum):
    HTTP_GOOGLE_CLOUD_FUNCTION = "http/google-cloud-function"

class GoogleCloudFunctionRulePostTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudFunctionRulePostTargetHeaders:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudFunctionRulePostTarget:
    function_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    project_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    enveloped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[GoogleCloudFunctionRulePostTargetFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[list[GoogleCloudFunctionRulePostTargetHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudFunctionRulePost:
    request_mode: GoogleCloudFunctionRulePostRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: GoogleCloudFunctionRulePostRuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: shared_rule_source.RuleSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: GoogleCloudFunctionRulePostTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
