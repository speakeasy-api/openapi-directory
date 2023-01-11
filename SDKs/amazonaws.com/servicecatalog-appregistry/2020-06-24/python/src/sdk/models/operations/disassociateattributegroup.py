import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import disassociateattributegroupresponse as shared_disassociateattributegroupresponse


@dataclasses.dataclass
class DisassociateAttributeGroupPathParams:
    application: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application', 'style': 'simple', 'explode': False }})
    attribute_group: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attributeGroup', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisassociateAttributeGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisassociateAttributeGroupRequest:
    headers: DisassociateAttributeGroupHeaders = dataclasses.field()
    path_params: DisassociateAttributeGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DisassociateAttributeGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    disassociate_attribute_group_response: Optional[shared_disassociateattributegroupresponse.DisassociateAttributeGroupResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
