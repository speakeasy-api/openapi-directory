import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitionlanguage_enum as shared_definitionlanguage_enum


@dataclass_json
@dataclasses.dataclass
class DefinitionDocument:
    r"""DefinitionDocument
    A document that defines an entity. 
    """
    
    language: shared_definitionlanguage_enum.DefinitionLanguageEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
