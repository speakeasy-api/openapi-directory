import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainavailability_enum as shared_domainavailability_enum


@dataclass_json
@dataclasses.dataclass
class CheckDomainAvailabilityResponse:
    r"""CheckDomainAvailabilityResponse
    The CheckDomainAvailability response includes the following elements.
    """
    
    availability: shared_domainavailability_enum.DomainAvailabilityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Availability') }})
    
