import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import country as shared_country


@dataclass_json
@dataclasses.dataclass
class CountryList:
    r"""CountryList
    Countries List
    """
    
    countries: list[shared_country.Country] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
