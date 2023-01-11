import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validation_enum as shared_validation_enum


@dataclass_json
@dataclasses.dataclass
class UpdateResolverDnssecConfigRequest:
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    validation: shared_validation_enum.ValidationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validation') }})
    
