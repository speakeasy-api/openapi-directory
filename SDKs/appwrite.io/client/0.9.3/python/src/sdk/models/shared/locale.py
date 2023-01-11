import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Locale:
    r"""Locale
    Locale
    """
    
    continent: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continent') }})
    continent_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continentCode') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    eu: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eu') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    
