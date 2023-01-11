import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import import_ as shared_import_
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class MigrationsSetLfsPreferencePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class MigrationsSetLfsPreferenceRequestBodyUseLfsEnum(str, Enum):
    OPT_IN = "opt_in"
    OPT_OUT = "opt_out"


@dataclass_json
@dataclasses.dataclass
class MigrationsSetLfsPreferenceRequestBody:
    use_lfs: MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_lfs') }})
    

@dataclasses.dataclass
class MigrationsSetLfsPreferenceRequest:
    path_params: MigrationsSetLfsPreferencePathParams = dataclasses.field()
    request: Optional[MigrationsSetLfsPreferenceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MigrationsSetLfsPreferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_: Optional[shared_import_.Import] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
