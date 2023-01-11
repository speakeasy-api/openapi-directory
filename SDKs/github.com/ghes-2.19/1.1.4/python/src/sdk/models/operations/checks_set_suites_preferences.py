import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import check_suite_preference as shared_check_suite_preference


@dataclasses.dataclass
class ChecksSetSuitesPreferencesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks:
    app_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_id') }})
    setting: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksSetSuitesPreferencesRequestBody:
    auto_trigger_checks: Optional[list[ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_trigger_checks') }})
    

@dataclasses.dataclass
class ChecksSetSuitesPreferencesRequest:
    path_params: ChecksSetSuitesPreferencesPathParams = dataclasses.field()
    request: Optional[ChecksSetSuitesPreferencesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChecksSetSuitesPreferencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_suite_preference: Optional[shared_check_suite_preference.CheckSuitePreference] = dataclasses.field(default=None)
    
