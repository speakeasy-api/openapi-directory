import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionsubtype_enum as shared_actionsubtype_enum


@dataclass_json
@dataclasses.dataclass
class SsmActionDefinition:
    r"""SsmActionDefinition
     The AWS Systems Manager (SSM) action definition details. 
    """
    
    action_sub_type: shared_actionsubtype_enum.ActionSubTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionSubType') }})
    instance_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIds') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    
