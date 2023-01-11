import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getconformancepackcompliancedetailsrequest as shared_getconformancepackcompliancedetailsrequest
from ..shared import getconformancepackcompliancedetailsresponse as shared_getconformancepackcompliancedetailsresponse


@dataclasses.dataclass
class GetConformancePackComplianceDetailsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetConformancePackComplianceDetailsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_CONFORMANCE_PACK_COMPLIANCE_DETAILS = "StarlingDoveService.GetConformancePackComplianceDetails"


@dataclasses.dataclass
class GetConformancePackComplianceDetailsHeaders:
    x_amz_target: GetConformancePackComplianceDetailsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConformancePackComplianceDetailsRequest:
    headers: GetConformancePackComplianceDetailsHeaders = dataclasses.field()
    query_params: GetConformancePackComplianceDetailsQueryParams = dataclasses.field()
    request: shared_getconformancepackcompliancedetailsrequest.GetConformancePackComplianceDetailsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetConformancePackComplianceDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_conformance_pack_compliance_details_response: Optional[shared_getconformancepackcompliancedetailsresponse.GetConformancePackComplianceDetailsResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_config_rule_in_conformance_pack_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_conformance_pack_exception: Optional[Any] = dataclasses.field(default=None)
    
