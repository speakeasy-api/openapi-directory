import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appvalidationoutput as shared_appvalidationoutput
from ..shared import servervalidationoutput as shared_servervalidationoutput
from ..shared import validationstatus_enum as shared_validationstatus_enum


@dataclass_json
@dataclasses.dataclass
class ValidationOutput:
    r"""ValidationOutput
    Contains validation output.
    """
    
    app_validation_output: Optional[shared_appvalidationoutput.AppValidationOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appValidationOutput') }})
    latest_validation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestValidationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_validation_output: Optional[shared_servervalidationoutput.ServerValidationOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationOutput') }})
    status: Optional[shared_validationstatus_enum.ValidationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    validation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationId') }})
    
