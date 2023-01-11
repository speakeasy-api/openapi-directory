import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportExportedData200ApplicationJSONCollections:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportedData200ApplicationJSON:
    collections: Optional[list[ImportExportedData200ApplicationJSONCollections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportedData400ApplicationJSONErrorDetails:
    param: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('param') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportedData400ApplicationJSONError:
    details: Optional[ImportExportedData400ApplicationJSONErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExportedData400ApplicationJSON:
    error: Optional[ImportExportedData400ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class ImportExportedDataRequest:
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclasses.dataclass
class ImportExportedDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_exported_data_200_application_json_object: Optional[ImportExportedData200ApplicationJSON] = dataclasses.field(default=None)
    import_exported_data_400_application_json_object: Optional[ImportExportedData400ApplicationJSON] = dataclasses.field(default=None)
    
