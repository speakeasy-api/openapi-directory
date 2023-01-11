import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import associateresourceresponse as shared_associateresourceresponse

class AssociateResourceResourceTypeEnum(str, Enum):
    CFN_STACK = "CFN_STACK"


@dataclasses.dataclass
class AssociateResourcePathParams:
    application: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application', 'style': 'simple', 'explode': False }})
    resource: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    resource_type: AssociateResourceResourceTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateResourceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateResourceRequest:
    headers: AssociateResourceHeaders = dataclasses.field()
    path_params: AssociateResourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class AssociateResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_resource_response: Optional[shared_associateresourceresponse.AssociateResourceResponse] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
