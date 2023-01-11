import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listprofileobjecttypetemplateitem as shared_listprofileobjecttypetemplateitem


@dataclass_json
@dataclasses.dataclass
class ListProfileObjectTypeTemplatesResponse:
    items: Optional[list[shared_listprofileobjecttypetemplateitem.ListProfileObjectTypeTemplateItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
