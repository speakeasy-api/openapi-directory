import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transferable_enum as shared_transferable_enum


@dataclass_json
@dataclasses.dataclass
class DomainTransferability:
    r"""DomainTransferability
    A complex type that contains information about whether the specified domain can be transferred to Route 53.
    """
    
    transferable: Optional[shared_transferable_enum.TransferableEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transferable') }})
    
