import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import methodname_enum as shared_methodname_enum


@dataclass_json
@dataclasses.dataclass
class CorsRule:
    r"""CorsRule
    A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
    """
    
    allowed_headers: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedHeaders') }})
    allowed_origins: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOrigins') }})
    allowed_methods: Optional[list[shared_methodname_enum.MethodNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedMethods') }})
    expose_headers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExposeHeaders') }})
    max_age_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAgeSeconds') }})
    
