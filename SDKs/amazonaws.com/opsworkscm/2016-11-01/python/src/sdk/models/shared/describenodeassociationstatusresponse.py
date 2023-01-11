import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineattribute as shared_engineattribute
from ..shared import nodeassociationstatus_enum as shared_nodeassociationstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeNodeAssociationStatusResponse:
    engine_attributes: Optional[list[shared_engineattribute.EngineAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttributes') }})
    node_association_status: Optional[shared_nodeassociationstatus_enum.NodeAssociationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeAssociationStatus') }})
    
