import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingmetadata as shared_settingmetadata
from ..shared import customconfiguration as shared_customconfiguration
from ..shared import standardhl7configuration as shared_standardhl7configuration

class ReceiverJurisdictionalFiltersMatchFieldsEnum(str, Enum):
    FACILITY_OR_PATIENT_ADDRESS = "FACILITY_OR_PATIENT_ADDRESS"
    FACILITY_ADDRESS = "FACILITY_ADDRESS"
    FACILITY_NAME = "FACILITY_NAME"
    ABNORMAL_VALUE = "ABNORMAL_VALUE"


@dataclass_json
@dataclasses.dataclass
class ReceiverJurisdictionalFilters:
    r"""ReceiverJurisdictionalFilters
    A single filter
    """
    
    does_not_match: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doesNotMatch') }})
    match_fields: Optional[ReceiverJurisdictionalFiltersMatchFieldsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchFields') }})
    match_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchValues') }})
    
class ReceiverTimingFrequencyEnum(str, Enum):
    REAL_TIME = "REAL_TIME"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclasses.dataclass
class ReceiverTiming:
    r"""ReceiverTiming
    When the report is sent if not immediately
    """
    
    frequency: ReceiverTimingFrequencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    daily_at: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyAt') }})
    

@dataclass_json
@dataclasses.dataclass
class Receiver:
    r"""Receiver
    A receiver of reports from the data hub
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timing: ReceiverTiming = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    jurisdictional_filters: Optional[list[ReceiverJurisdictionalFilters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdictionalFilters') }})
    meta: Optional[shared_settingmetadata.SettingMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    organization_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationName') }})
    translations: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    

@dataclass_json
@dataclasses.dataclass
class ReceiverInput:
    r"""ReceiverInput
    A receiver of reports from the data hub
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timing: ReceiverTiming = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    jurisdictional_filters: Optional[list[ReceiverJurisdictionalFilters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdictionalFilters') }})
    translations: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
