import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changedassetdetail as shared_changedassetdetail


@dataclass_json
@dataclasses.dataclass
class AssetChanges:
    change_set_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_set_id') }})
    changed_assets: Optional[list[shared_changedassetdetail.ChangedAssetDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_assets') }})
    
