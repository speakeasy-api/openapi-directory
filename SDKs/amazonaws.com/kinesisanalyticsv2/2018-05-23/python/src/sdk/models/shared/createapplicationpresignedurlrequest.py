import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urltype_enum as shared_urltype_enum


@dataclass_json
@dataclasses.dataclass
class CreateApplicationPresignedURLRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    url_type: shared_urltype_enum.URLTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UrlType') }})
    session_expiration_duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionExpirationDurationInSeconds') }})
    
