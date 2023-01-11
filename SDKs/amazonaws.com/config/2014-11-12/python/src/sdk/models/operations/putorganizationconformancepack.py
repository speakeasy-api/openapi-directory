import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putorganizationconformancepackrequest as shared_putorganizationconformancepackrequest
from ..shared import putorganizationconformancepackresponse as shared_putorganizationconformancepackresponse

class PutOrganizationConformancePackXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_ORGANIZATION_CONFORMANCE_PACK = "StarlingDoveService.PutOrganizationConformancePack"


@dataclasses.dataclass
class PutOrganizationConformancePackHeaders:
    x_amz_target: PutOrganizationConformancePackXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutOrganizationConformancePackRequest:
    headers: PutOrganizationConformancePackHeaders = dataclasses.field()
    request: shared_putorganizationconformancepackrequest.PutOrganizationConformancePackRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutOrganizationConformancePackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insufficient_permissions_exception: Optional[Any] = dataclasses.field(default=None)
    max_number_of_organization_conformance_packs_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    no_available_organization_exception: Optional[Any] = dataclasses.field(default=None)
    organization_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    organization_all_features_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    organization_conformance_pack_template_validation_exception: Optional[Any] = dataclasses.field(default=None)
    put_organization_conformance_pack_response: Optional[shared_putorganizationconformancepackresponse.PutOrganizationConformancePackResponse] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
