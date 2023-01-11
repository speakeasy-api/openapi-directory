import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetCredentialsPathParams:
    cluster_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCredentialsQueryParams:
    expiry_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expiry_seconds', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetCredentials200ApplicationJSON:
    certificate_authority_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_authority_data') }})
    client_certificate_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_certificate_data') }})
    client_key_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_key_data') }})
    expires_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCredentials401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetCredentialsRequest:
    path_params: GetCredentialsPathParams = dataclasses.field()
    query_params: GetCredentialsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCredentialsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credentials_200_application_json_object: Optional[GetCredentials200ApplicationJSON] = dataclasses.field(default=None)
    get_credentials_401_application_json_object: Optional[GetCredentials401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
