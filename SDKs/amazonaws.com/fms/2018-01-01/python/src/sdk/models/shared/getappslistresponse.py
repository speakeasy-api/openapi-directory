import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appslistdata as shared_appslistdata


@dataclass_json
@dataclasses.dataclass
class GetAppsListResponse:
    apps_list: Optional[shared_appslistdata.AppsListData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsList') }})
    apps_list_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsListArn') }})
    
