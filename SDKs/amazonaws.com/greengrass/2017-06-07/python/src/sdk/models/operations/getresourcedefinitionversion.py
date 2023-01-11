import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getresourcedefinitionversionresponse as shared_getresourcedefinitionversionresponse


@dataclasses.dataclass
class GetResourceDefinitionVersionPathParams:
    resource_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceDefinitionId', 'style': 'simple', 'explode': False }})
    resource_definition_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceDefinitionVersionRequest:
    headers: GetResourceDefinitionVersionHeaders = dataclasses.field()
    path_params: GetResourceDefinitionVersionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourceDefinitionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    get_resource_definition_version_response: Optional[shared_getresourcedefinitionversionresponse.GetResourceDefinitionVersionResponse] = dataclasses.field(default=None)
    
