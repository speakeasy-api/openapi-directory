import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fhirversion_enum as shared_fhirversion_enum
from ..shared import preloaddataconfig as shared_preloaddataconfig
from ..shared import sseconfiguration as shared_sseconfiguration
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateFhirDatastoreRequest:
    datastore_type_version: shared_fhirversion_enum.FhirVersionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreTypeVersion') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    datastore_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreName') }})
    preload_data_config: Optional[shared_preloaddataconfig.PreloadDataConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreloadDataConfig') }})
    sse_configuration: Optional[shared_sseconfiguration.SseConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseConfiguration') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
