import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentclassifierproperties as shared_documentclassifierproperties


@dataclass_json
@dataclasses.dataclass
class ListDocumentClassifiersResponse:
    document_classifier_properties_list: Optional[list[shared_documentclassifierproperties.DocumentClassifierProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentClassifierPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
