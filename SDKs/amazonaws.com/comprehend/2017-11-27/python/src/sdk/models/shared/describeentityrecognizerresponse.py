import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entityrecognizerproperties as shared_entityrecognizerproperties


@dataclass_json
@dataclasses.dataclass
class DescribeEntityRecognizerResponse:
    entity_recognizer_properties: Optional[shared_entityrecognizerproperties.EntityRecognizerProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityRecognizerProperties') }})
    
