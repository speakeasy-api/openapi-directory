import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import icd10cmattribute as shared_icd10cmattribute
from ..shared import icd10cmentitycategory_enum as shared_icd10cmentitycategory_enum
from ..shared import icd10cmconcept as shared_icd10cmconcept
from ..shared import icd10cmtrait as shared_icd10cmtrait
from ..shared import icd10cmentitytype_enum as shared_icd10cmentitytype_enum


@dataclass_json
@dataclasses.dataclass
class Icd10CmEntity:
    r"""Icd10CmEntity
    The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
    """
    
    attributes: Optional[list[shared_icd10cmattribute.Icd10CmAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    begin_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffset') }})
    category: Optional[shared_icd10cmentitycategory_enum.Icd10CmEntityCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    end_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffset') }})
    icd10_cm_concepts: Optional[list[shared_icd10cmconcept.Icd10CmConcept]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ICD10CMConcepts') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    traits: Optional[list[shared_icd10cmtrait.Icd10CmTrait]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Traits') }})
    type: Optional[shared_icd10cmentitytype_enum.Icd10CmEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
