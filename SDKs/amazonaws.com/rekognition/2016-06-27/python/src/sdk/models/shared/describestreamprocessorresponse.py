import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamprocessorinput as shared_streamprocessorinput
from ..shared import streamprocessoroutput as shared_streamprocessoroutput
from ..shared import streamprocessorsettings as shared_streamprocessorsettings
from ..shared import streamprocessorstatus_enum as shared_streamprocessorstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeStreamProcessorResponse:
    creation_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input: Optional[shared_streamprocessorinput.StreamProcessorInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    last_update_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output: Optional[shared_streamprocessoroutput.StreamProcessorOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    settings: Optional[shared_streamprocessorsettings.StreamProcessorSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    status: Optional[shared_streamprocessorstatus_enum.StreamProcessorStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    stream_processor_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamProcessorArn') }})
    
