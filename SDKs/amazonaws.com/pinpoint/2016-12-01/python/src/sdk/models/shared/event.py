import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import session as shared_session


@dataclass_json
@dataclasses.dataclass
class Event:
    app_package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppPackageName') }})
    app_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppTitle') }})
    app_version_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppVersionCode') }})
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    client_sdk_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSdkVersion') }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    metrics: Optional[dict[str, float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    sdk_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SdkName') }})
    session: Optional[shared_session.Session] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
