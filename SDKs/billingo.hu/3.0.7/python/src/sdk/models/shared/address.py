import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import country_enum as shared_country_enum


@dataclass_json
@dataclasses.dataclass
class Address:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country_code: shared_country_enum.CountryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    post_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_code') }})
    
