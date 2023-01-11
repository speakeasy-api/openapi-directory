import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devendpointcustomlibraries as shared_devendpointcustomlibraries


@dataclass_json
@dataclasses.dataclass
class UpdateDevEndpointRequest:
    endpoint_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    add_arguments: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddArguments') }})
    add_public_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddPublicKeys') }})
    custom_libraries: Optional[shared_devendpointcustomlibraries.DevEndpointCustomLibraries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomLibraries') }})
    delete_arguments: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteArguments') }})
    delete_public_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletePublicKeys') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKey') }})
    update_etl_libraries: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateEtlLibraries') }})
    
