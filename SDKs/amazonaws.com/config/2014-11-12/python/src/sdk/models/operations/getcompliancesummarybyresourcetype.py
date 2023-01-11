import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcompliancesummarybyresourcetyperequest as shared_getcompliancesummarybyresourcetyperequest
from ..shared import getcompliancesummarybyresourcetyperesponse as shared_getcompliancesummarybyresourcetyperesponse

class GetComplianceSummaryByResourceTypeXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE = "StarlingDoveService.GetComplianceSummaryByResourceType"


@dataclasses.dataclass
class GetComplianceSummaryByResourceTypeHeaders:
    x_amz_target: GetComplianceSummaryByResourceTypeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetComplianceSummaryByResourceTypeRequest:
    headers: GetComplianceSummaryByResourceTypeHeaders = dataclasses.field()
    request: shared_getcompliancesummarybyresourcetyperequest.GetComplianceSummaryByResourceTypeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetComplianceSummaryByResourceTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_compliance_summary_by_resource_type_response: Optional[shared_getcompliancesummarybyresourcetyperesponse.GetComplianceSummaryByResourceTypeResponse] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    
