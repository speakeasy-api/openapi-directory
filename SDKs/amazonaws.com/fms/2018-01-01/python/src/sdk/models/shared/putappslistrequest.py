import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appslistdata as shared_appslistdata
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class PutAppsListRequest:
    apps_list: shared_appslistdata.AppsListData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsList') }})
    tag_list: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
