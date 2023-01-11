import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field
from ..shared import thinggroupindexingmode_enum as shared_thinggroupindexingmode_enum
from ..shared import thingconnectivityindexingmode_enum as shared_thingconnectivityindexingmode_enum
from ..shared import thingindexingmode_enum as shared_thingindexingmode_enum


@dataclasses.dataclass
class UpdateIndexingConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration:
    r"""UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration
    Thing group indexing configuration.
    """
    
    custom_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    managed_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedFields') }})
    thing_group_indexing_mode: Optional[shared_thinggroupindexingmode_enum.ThingGroupIndexingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupIndexingMode') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration:
    r"""UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration
    The thing indexing configuration. For more information, see <a href=\"https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html\">Managing Thing Indexing</a>.
    """
    
    custom_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    managed_fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedFields') }})
    thing_connectivity_indexing_mode: Optional[shared_thingconnectivityindexingmode_enum.ThingConnectivityIndexingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingConnectivityIndexingMode') }})
    thing_indexing_mode: Optional[shared_thingindexingmode_enum.ThingIndexingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingIndexingMode') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIndexingConfigurationRequestBody:
    thing_group_indexing_configuration: Optional[UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupIndexingConfiguration') }})
    thing_indexing_configuration: Optional[UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingIndexingConfiguration') }})
    

@dataclasses.dataclass
class UpdateIndexingConfigurationRequest:
    headers: UpdateIndexingConfigurationHeaders = dataclasses.field()
    request: UpdateIndexingConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateIndexingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    update_indexing_configuration_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
