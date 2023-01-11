import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateStoreRequest:
    r"""CreateStoreRequest
    The request to create a store. The store identifier is optional, if null it will be automatically computed.
    """
    
    country_iso_code_alpha3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryIsoCodeAlpha3') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sectors: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectors') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
