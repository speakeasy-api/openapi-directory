import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connector as shared_connector
from ..shared import createconnectordefinitionversionresponse as shared_createconnectordefinitionversionresponse


@dataclasses.dataclass
class CreateConnectorDefinitionVersionPathParams:
    connector_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConnectorDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateConnectorDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorDefinitionVersionRequestBody:
    connectors: Optional[list[shared_connector.Connector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connectors') }})
    

@dataclasses.dataclass
class CreateConnectorDefinitionVersionRequest:
    headers: CreateConnectorDefinitionVersionHeaders = dataclasses.field()
    path_params: CreateConnectorDefinitionVersionPathParams = dataclasses.field()
    request: CreateConnectorDefinitionVersionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateConnectorDefinitionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_connector_definition_version_response: Optional[shared_createconnectordefinitionversionresponse.CreateConnectorDefinitionVersionResponse] = dataclasses.field(default=None)
    
