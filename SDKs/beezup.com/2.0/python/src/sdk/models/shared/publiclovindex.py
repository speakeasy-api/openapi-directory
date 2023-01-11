import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publiclovindexlinks as shared_publiclovindexlinks


@dataclass_json
@dataclasses.dataclass
class PublicLovIndex:
    links: Optional[shared_publiclovindexlinks.PublicLovIndexLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
