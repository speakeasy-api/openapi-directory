import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datastorestatus_enum as shared_datastorestatus_enum
from ..shared import fhirversion_enum as shared_fhirversion_enum
from ..shared import preloaddataconfig as shared_preloaddataconfig
from ..shared import sseconfiguration as shared_sseconfiguration


@dataclass_json
@dataclasses.dataclass
class DatastoreProperties:
    r"""DatastoreProperties
    Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
    """
    
    datastore_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreArn') }})
    datastore_endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreEndpoint') }})
    datastore_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    datastore_status: shared_datastorestatus_enum.DatastoreStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreStatus') }})
    datastore_type_version: shared_fhirversion_enum.FhirVersionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreTypeVersion') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreName') }})
    preload_data_config: Optional[shared_preloaddataconfig.PreloadDataConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreloadDataConfig') }})
    sse_configuration: Optional[shared_sseconfiguration.SseConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseConfiguration') }})
    
