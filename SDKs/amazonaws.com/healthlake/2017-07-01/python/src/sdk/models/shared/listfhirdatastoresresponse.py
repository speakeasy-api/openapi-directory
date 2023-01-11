import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datastoreproperties as shared_datastoreproperties


@dataclass_json
@dataclasses.dataclass
class ListFhirDatastoresResponse:
    datastore_properties_list: list[shared_datastoreproperties.DatastoreProperties] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastorePropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
