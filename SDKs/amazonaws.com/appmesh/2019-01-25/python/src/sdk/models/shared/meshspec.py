import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import egressfilter as shared_egressfilter


@dataclass_json
@dataclasses.dataclass
class MeshSpec:
    r"""MeshSpec
    An object that represents the specification of a service mesh.
    """
    
    egress_filter: Optional[shared_egressfilter.EgressFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressFilter') }})
    
