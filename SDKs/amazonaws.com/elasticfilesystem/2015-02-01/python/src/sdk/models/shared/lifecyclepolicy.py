import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transitiontoiarules_enum as shared_transitiontoiarules_enum
from ..shared import transitiontoprimarystorageclassrules_enum as shared_transitiontoprimarystorageclassrules_enum


@dataclass_json
@dataclasses.dataclass
class LifecyclePolicy:
    r"""LifecyclePolicy
    Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
    """
    
    transition_to_ia: Optional[shared_transitiontoiarules_enum.TransitionToIaRulesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitionToIA') }})
    transition_to_primary_storage_class: Optional[shared_transitiontoprimarystorageclassrules_enum.TransitionToPrimaryStorageClassRulesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitionToPrimaryStorageClass') }})
    
