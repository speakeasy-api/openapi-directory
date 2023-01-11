import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protocolslistdata as shared_protocolslistdata


@dataclass_json
@dataclasses.dataclass
class PutProtocolsListResponse:
    protocols_list: Optional[shared_protocolslistdata.ProtocolsListData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolsList') }})
    protocols_list_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolsListArn') }})
    
