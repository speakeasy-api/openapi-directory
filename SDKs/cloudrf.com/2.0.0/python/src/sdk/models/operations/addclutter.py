import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import feature as shared_feature
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class AddClutterRequestBody:
    features: Optional[list[shared_feature.Feature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddClutterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AddClutterRequest:
    request: AddClutterRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddClutterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddClutterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
