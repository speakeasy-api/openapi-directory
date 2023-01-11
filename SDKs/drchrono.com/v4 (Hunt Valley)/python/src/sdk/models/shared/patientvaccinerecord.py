import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatientVaccineRecordVaccinationStatusEnum(str, Enum):
    CP = "CP"
    RE = "RE"
    NA = "NA"
    PA = "PA"


@dataclass_json
@dataclasses.dataclass
class PatientVaccineRecordVaccineDose:
    r"""PatientVaccineRecordVaccineDose
    Vaccine dose ID
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_age_months: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_age_months') }})
    min_age_months: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_age_months') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class PatientVaccineRecordFundingEligibilityEnum(str, Enum):
    V01 = "V01"
    V02 = "V02"
    V03 = "V03"
    V04 = "V04"
    V05 = "V05"
    V07 = "V07"

class PatientVaccineRecordObservedImmunityEnum(str, Enum):
    THREE_HUNDRED_AND_NINETY_EIGHT_MILLION_ONE_HUNDRED_AND_TWO_THOUSAND_AND_NINE = "398102009"
    FOUR_HUNDRED_AND_NINE_MILLION_FOUR_HUNDRED_AND_NINETY_EIGHT_THOUSAND_AND_FOUR = "409498004"
    THREE_HUNDRED_AND_NINETY_SEVEN_MILLION_FOUR_HUNDRED_AND_TWENTY_EIGHT_THOUSAND = "397428000"
    EIGHTEEN_MILLION_SIX_HUNDRED_AND_TWENTY_FOUR_THOUSAND = "18624000"
    NINETY_ONE_MILLION_FOUR_HUNDRED_AND_TWENTY_EIGHT_THOUSAND_AND_FIVE = "91428005"
    TWO_HUNDRED_AND_SEVENTY_ONE_MILLION_FIVE_HUNDRED_AND_ELEVEN_THOUSAND = "271511000"
    TWO_HUNDRED_AND_FORTY_MILLION_FIVE_HUNDRED_AND_THIRTY_TWO_THOUSAND_AND_NINE = "240532009"
    SIX_MILLION_ONE_HUNDRED_AND_FORTY_TWO_THOUSAND_AND_FOUR = "6142004"
    FIFTY_TWO_MILLION_NINE_HUNDRED_AND_FORTY_SEVEN_THOUSAND_AND_SIX = "52947006"
    FOURTEEN_MILLION_ONE_HUNDRED_AND_EIGHTY_NINE_THOUSAND_AND_FOUR = "14189004"
    TWENTY_THREE_MILLION_FIVE_HUNDRED_AND_ELEVEN_THOUSAND_AND_SIX = "23511006"
    THIRTY_SIX_MILLION_NINE_HUNDRED_AND_EIGHTY_NINE_THOUSAND_AND_FIVE = "36989005"
    TWENTY_SEVEN_MILLION_EIGHT_HUNDRED_AND_THIRTY_SIX_THOUSAND_AND_SEVEN = "27836007"
    SIXTEEN_MILLION_EIGHT_HUNDRED_AND_FOURTEEN_THOUSAND_AND_FOUR = "16814004"
    FOURTEEN_MILLION_ONE_HUNDRED_AND_SIXTY_EIGHT_THOUSAND_AND_EIGHT = "14168008"
    THIRTY_SIX_MILLION_SIX_HUNDRED_AND_FIFTY_THREE_THOUSAND = "36653000"
    SEVENTY_SIX_MILLION_NINE_HUNDRED_AND_TWO_THOUSAND_AND_SIX = "76902006"
    SIXTY_SIX_MILLION_SEVENTY_ONE_THOUSAND_AND_TWO = "66071002"
    FOUR_MILLION_EIGHT_HUNDRED_AND_THIRTY_FOUR_THOUSAND = "4834000"
    ONE_HUNDRED_AND_ELEVEN_MILLION_EIGHT_HUNDRED_AND_FIFTY_TWO_THOUSAND_AND_THREE = "111852003"
    THIRTY_EIGHT_MILLION_NINE_HUNDRED_AND_SEVEN_THOUSAND_AND_THREE = "38907003"
    FORTY_MILLION_FOUR_HUNDRED_AND_SIXTY_EIGHT_THOUSAND_AND_THREE = "40468003"
    SIXTEEN_MILLION_FIVE_HUNDRED_AND_FORTY_ONE_THOUSAND_AND_ONE = "16541001"

class PatientVaccineRecordRecordTypeEnum(str, Enum):
    ZERO = "00"
    ONE = "01"
    TWO = "02"
    THREE = "03"
    FOUR = "04"
    FIVE = "05"
    SIX = "06"
    SEVEN = "07"
    EIGHT = "08"


@dataclass_json
@dataclasses.dataclass
class PatientVaccineRecord:
    cvx_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvx_code') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    administered_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administered_at') }})
    administered_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administered_by') }})
    administration_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administration_start') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    completion_status: Optional[PatientVaccineRecordVaccinationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion_status') }})
    consent_form: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consent_form') }})
    cpt_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpt_code') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    doses: Optional[list[PatientVaccineRecordVaccineDose]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doses') }})
    entered_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entered_by') }})
    funding_eligibility: Optional[PatientVaccineRecordFundingEligibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('funding_eligibility') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    next_dose_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_dose_date') }})
    observed_immunity: Optional[PatientVaccineRecordObservedImmunityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observed_immunity') }})
    ordering_doctor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordering_doctor') }})
    record_source: Optional[PatientVaccineRecordRecordTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_source') }})
    route: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    vaccine_inventory: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaccine_inventory') }})
    vis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vis') }})
    
