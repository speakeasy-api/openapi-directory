import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclass_json
@dataclasses.dataclass
class CheckSuitePreferencePreferencesAutoTriggerChecks:
    app_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_id') }})
    setting: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    

@dataclass_json
@dataclasses.dataclass
class CheckSuitePreferencePreferences:
    auto_trigger_checks: Optional[list[CheckSuitePreferencePreferencesAutoTriggerChecks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_trigger_checks') }})
    

@dataclass_json
@dataclasses.dataclass
class CheckSuitePreference:
    r"""CheckSuitePreference
    Check suite configuration preferences for a repository.
    """
    
    preferences: CheckSuitePreferencePreferences = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    repository: shared_repository.Repository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
