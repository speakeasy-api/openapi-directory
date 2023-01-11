import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protocolslistdata as shared_protocolslistdata
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class PutProtocolsListRequest:
    protocols_list: shared_protocolslistdata.ProtocolsListData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolsList') }})
    tag_list: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
