import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basepopular as shared_basepopular


@dataclass_json
@dataclasses.dataclass
class PopularCars:
    r"""PopularCars
    Top 50 popular cars
    """
    
    new_top50: Optional[list[shared_basepopular.BasePopular]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_top50') }})
    used_top50: Optional[list[shared_basepopular.BasePopular]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_top50') }})
    
