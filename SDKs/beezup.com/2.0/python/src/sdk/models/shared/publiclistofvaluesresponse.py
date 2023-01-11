import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_listofvalueitem as shared_beezup_common_listofvalueitem
from ..shared import publiclistofvaluesresponselinks as shared_publiclistofvaluesresponselinks


@dataclass_json
@dataclasses.dataclass
class PublicListOfValuesResponse:
    items: Optional[list[shared_beezup_common_listofvalueitem.BeezUpCommonListOfValueItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    links: Optional[shared_publiclistofvaluesresponselinks.PublicListOfValuesResponseLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
