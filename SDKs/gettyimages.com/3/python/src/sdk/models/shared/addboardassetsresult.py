import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boardasset as shared_boardasset


@dataclass_json
@dataclasses.dataclass
class AddBoardAssetsResult:
    assets_added: Optional[list[shared_boardasset.BoardAsset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets_added') }})
    assets_not_added: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets_not_added') }})
    
