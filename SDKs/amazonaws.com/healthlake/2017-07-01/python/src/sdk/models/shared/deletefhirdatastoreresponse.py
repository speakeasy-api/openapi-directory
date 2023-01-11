import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datastorestatus_enum as shared_datastorestatus_enum


@dataclass_json
@dataclasses.dataclass
class DeleteFhirDatastoreResponse:
    datastore_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreArn') }})
    datastore_endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreEndpoint') }})
    datastore_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    datastore_status: shared_datastorestatus_enum.DatastoreStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreStatus') }})
    
