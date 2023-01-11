import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatientAllergySnomedReactionEnum(str, Enum):
    UNKNOWN = ""
    FOURTEEN_MILLION_SIX_HUNDRED_AND_SIXTY_NINE_THOUSAND_AND_ONE = "14669001"
    THIRTY_NINE_MILLION_FIVE_HUNDRED_AND_SEVENTY_NINE_THOUSAND_AND_ONE = "39579001"
    FIFTY_SEVEN_MILLION_SIX_HUNDRED_AND_SEVENTY_SIX_THOUSAND_AND_TWO = "57676002"
    FORTY_THREE_MILLION_SEVEN_HUNDRED_AND_TWENTY_FOUR_THOUSAND_AND_TWO = "43724002"
    FORTY_NINE_MILLION_SEVEN_HUNDRED_AND_TWENTY_SEVEN_THOUSAND_AND_TWO = "49727002"
    THREE_HUNDRED_AND_EIGHTY_SIX_MILLION_SIX_HUNDRED_AND_SIXTY_ONE_THOUSAND_AND_SIX = "386661006"
    TWENTY_FIVE_MILLION_SIXTY_FOUR_THOUSAND_AND_TWO = "25064002"
    TWO_HUNDRED_AND_FORTY_SEVEN_MILLION_FOUR_HUNDRED_AND_SEVENTY_TWO_THOUSAND_AND_FOUR = "247472004"
    TWO_HUNDRED_AND_SEVENTY_ONE_MILLION_SEVEN_HUNDRED_AND_NINETY_FIVE_THOUSAND_AND_SIX = "271795006"
    SIXTY_EIGHT_MILLION_NINE_HUNDRED_AND_SIXTY_TWO_THOUSAND_AND_ONE = "68962001"
    SIXTY_EIGHT_MILLION_TWO_HUNDRED_AND_THIRTY_FIVE_THOUSAND = "68235000"
    FOUR_HUNDRED_AND_TWENTY_TWO_MILLION_FIVE_HUNDRED_AND_EIGHTY_SEVEN_THOUSAND_AND_SEVEN = "422587007"
    NINETY_FIVE_MILLION_THREE_HUNDRED_AND_EIGHTY_EIGHT_THOUSAND = "95388000"
    TWO_HUNDRED_AND_SEVENTY_ONE_MILLION_EIGHT_HUNDRED_AND_SEVEN_THOUSAND_AND_THREE = "271807003"
    TWO_HUNDRED_AND_SEVENTY_ONE_MILLION_EIGHT_HUNDRED_AND_TWENTY_FIVE_THOUSAND_AND_FIVE = "271825005"
    SIXTY_FOUR_MILLION_FIVE_HUNDRED_AND_THIRTY_ONE_THOUSAND_AND_THREE = "64531003"
    TWO_HUNDRED_AND_SIXTY_SEVEN_MILLION_THIRTY_SIX_THOUSAND_AND_SEVEN = "267036007"
    ONE_HUNDRED_AND_SIXTY_TWO_MILLION_THREE_HUNDRED_AND_NINETY_SEVEN_THOUSAND_AND_THREE = "162397003"
    SIXTY_FIVE_MILLION_ONE_HUNDRED_AND_TWENTY_FOUR_THOUSAND_AND_FOUR = "65124004"

class PatientAllergyStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class PatientAllergy:
    doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    reaction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reaction') }})
    rxnorm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxnorm') }})
    snomed_reaction: Optional[PatientAllergySnomedReactionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snomed_reaction') }})
    status: Optional[PatientAllergyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
