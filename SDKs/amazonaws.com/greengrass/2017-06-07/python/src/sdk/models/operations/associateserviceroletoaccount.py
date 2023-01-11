import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import associateserviceroletoaccountresponse as shared_associateserviceroletoaccountresponse


@dataclasses.dataclass
class AssociateServiceRoleToAccountHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssociateServiceRoleToAccountRequestBody:
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    

@dataclasses.dataclass
class AssociateServiceRoleToAccountRequest:
    headers: AssociateServiceRoleToAccountHeaders = dataclasses.field()
    request: AssociateServiceRoleToAccountRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateServiceRoleToAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_service_role_to_account_response: Optional[shared_associateserviceroletoaccountresponse.AssociateServiceRoleToAccountResponse] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    
