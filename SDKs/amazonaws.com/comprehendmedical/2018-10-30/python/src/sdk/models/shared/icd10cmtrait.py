import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import icd10cmtraitname_enum as shared_icd10cmtraitname_enum


@dataclass_json
@dataclasses.dataclass
class Icd10CmTrait:
    r"""Icd10CmTrait
    Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.
    """
    
    name: Optional[shared_icd10cmtraitname_enum.Icd10CmTraitNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    
