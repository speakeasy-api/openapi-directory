import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rxnormattribute as shared_rxnormattribute
from ..shared import rxnormentitycategory_enum as shared_rxnormentitycategory_enum
from ..shared import rxnormconcept as shared_rxnormconcept
from ..shared import rxnormtrait as shared_rxnormtrait
from ..shared import rxnormentitytype_enum as shared_rxnormentitytype_enum


@dataclass_json
@dataclasses.dataclass
class RxNormEntity:
    r"""RxNormEntity
    The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
    """
    
    attributes: Optional[list[shared_rxnormattribute.RxNormAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    begin_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffset') }})
    category: Optional[shared_rxnormentitycategory_enum.RxNormEntityCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    end_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffset') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    rx_norm_concepts: Optional[list[shared_rxnormconcept.RxNormConcept]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RxNormConcepts') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    traits: Optional[list[shared_rxnormtrait.RxNormTrait]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Traits') }})
    type: Optional[shared_rxnormentitytype_enum.RxNormEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
