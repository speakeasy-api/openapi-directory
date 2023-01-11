import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automatictransitioninfo as shared_automatictransitioninfo
from ..shared import automatictransitioninfolistlinks as shared_automatictransitioninfolistlinks


@dataclass_json
@dataclasses.dataclass
class AutomaticTransitionInfoList:
    links: shared_automatictransitioninfolistlinks.AutomaticTransitionInfoListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    automatic_transition_infos: Optional[list[shared_automatictransitioninfo.AutomaticTransitionInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticTransitionInfos') }})
    
