import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duplicateproductvalueconfiguration as shared_duplicateproductvalueconfiguration
from ..shared import inputconfiguration as shared_inputconfiguration
from ..shared import schedulingtype_enum as shared_schedulingtype_enum


@dataclass_json
@dataclasses.dataclass
class AutoImportConfiguration:
    duplicate_product_configuration: shared_duplicateproductvalueconfiguration.DuplicateProductValueConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateProductConfiguration') }})
    input: shared_inputconfiguration.InputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    input_configured_by_user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfiguredByUserId') }})
    paused: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paused') }})
    scheduling_type: shared_schedulingtype_enum.SchedulingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingType') }})
    scheduling_value: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingValue') }})
    pause_status_changed_by_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pauseStatusChangedByUserId') }})
    pause_status_changed_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pauseStatusChangedUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_by_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledByUserId') }})
    scheduling_local_time_zone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingLocalTimeZoneName') }})
    
