import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualinterfacetesthistory as shared_virtualinterfacetesthistory


@dataclass_json
@dataclasses.dataclass
class ListVirtualInterfaceTestHistoryResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    virtual_interface_test_history: Optional[list[shared_virtualinterfacetesthistory.VirtualInterfaceTestHistory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceTestHistory') }})
    
