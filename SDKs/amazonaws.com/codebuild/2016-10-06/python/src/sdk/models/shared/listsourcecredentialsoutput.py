import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcecredentialsinfo as shared_sourcecredentialsinfo


@dataclass_json
@dataclasses.dataclass
class ListSourceCredentialsOutput:
    source_credentials_infos: Optional[list[shared_sourcecredentialsinfo.SourceCredentialsInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCredentialsInfos') }})
    
