import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcompliancedetailsbyresourcerequest as shared_getcompliancedetailsbyresourcerequest
from ..shared import getcompliancedetailsbyresourceresponse as shared_getcompliancedetailsbyresourceresponse


@dataclasses.dataclass
class GetComplianceDetailsByResourceQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetComplianceDetailsByResourceXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_COMPLIANCE_DETAILS_BY_RESOURCE = "StarlingDoveService.GetComplianceDetailsByResource"


@dataclasses.dataclass
class GetComplianceDetailsByResourceHeaders:
    x_amz_target: GetComplianceDetailsByResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetComplianceDetailsByResourceRequest:
    headers: GetComplianceDetailsByResourceHeaders = dataclasses.field()
    query_params: GetComplianceDetailsByResourceQueryParams = dataclasses.field()
    request: shared_getcompliancedetailsbyresourcerequest.GetComplianceDetailsByResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetComplianceDetailsByResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_compliance_details_by_resource_response: Optional[shared_getcompliancedetailsbyresourceresponse.GetComplianceDetailsByResourceResponse] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    
