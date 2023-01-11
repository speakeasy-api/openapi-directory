import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Phone:
    r"""Phone
    Phone
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryName') }})
    
