import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evaluationtype_enum as shared_evaluationtype_enum
from ..shared import resourcetargetdefinition as shared_resourcetargetdefinition


@dataclass_json
@dataclasses.dataclass
class ResourceChangeDetail:
    r"""ResourceChangeDetail
    Information about a change to a resource attribute.
    """
    
    causing_entity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CausingEntity') }})
    evaluation: Optional[shared_evaluationtype_enum.EvaluationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Evaluation') }})
    target: Optional[shared_resourcetargetdefinition.ResourceTargetDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    
