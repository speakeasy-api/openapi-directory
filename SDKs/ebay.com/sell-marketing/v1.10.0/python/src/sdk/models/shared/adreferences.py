import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adreference as shared_adreference


@dataclass_json
@dataclasses.dataclass
class AdReferences:
    r"""AdReferences
    This type is a container for a list of ad IDs and their associated URIs.
    """
    
    ads: Optional[list[shared_adreference.AdReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ads') }})
    
