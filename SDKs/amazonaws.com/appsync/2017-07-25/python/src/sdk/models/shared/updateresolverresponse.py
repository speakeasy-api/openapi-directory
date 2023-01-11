import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolver as shared_resolver


@dataclass_json
@dataclasses.dataclass
class UpdateResolverResponse:
    resolver: Optional[shared_resolver.Resolver] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolver') }})
    
