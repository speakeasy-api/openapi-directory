import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorprofilecredentials as shared_connectorprofilecredentials
from ..shared import connectorprofileproperties as shared_connectorprofileproperties
from ..shared import updateconnectorprofileresponse as shared_updateconnectorprofileresponse


@dataclasses.dataclass
class UpdateConnectorProfileHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateConnectorProfileRequestBodyConnectionModeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"


@dataclass_json
@dataclasses.dataclass
class UpdateConnectorProfileRequestBodyConnectorProfileConfig:
    r"""UpdateConnectorProfileRequestBodyConnectorProfileConfig
     Defines the connector-specific configuration and credentials for the connector profile. 
    """
    
    connector_profile_credentials: Optional[shared_connectorprofilecredentials.ConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileCredentials') }})
    connector_profile_properties: Optional[shared_connectorprofileproperties.ConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileProperties') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConnectorProfileRequestBody:
    connection_mode: UpdateConnectorProfileRequestBodyConnectionModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionMode') }})
    connector_profile_config: UpdateConnectorProfileRequestBodyConnectorProfileConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileConfig') }})
    connector_profile_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    

@dataclasses.dataclass
class UpdateConnectorProfileRequest:
    headers: UpdateConnectorProfileHeaders = dataclasses.field()
    request: UpdateConnectorProfileRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateConnectorProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    connector_authentication_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_connector_profile_response: Optional[shared_updateconnectorprofileresponse.UpdateConnectorProfileResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
