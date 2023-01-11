import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import egressfiltertype_enum as shared_egressfiltertype_enum


@dataclass_json
@dataclasses.dataclass
class EgressFilter:
    r"""EgressFilter
    An object that represents the egress filter rules for a service mesh.
    """
    
    type: shared_egressfiltertype_enum.EgressFilterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
