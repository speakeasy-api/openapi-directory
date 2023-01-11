import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcompliancesummaryinput as shared_getcompliancesummaryinput
from ..shared import getcompliancesummaryoutput as shared_getcompliancesummaryoutput


@dataclasses.dataclass
class GetComplianceSummaryQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PaginationToken', 'style': 'form', 'explode': True }})
    
class GetComplianceSummaryXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_GET_COMPLIANCE_SUMMARY = "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary"


@dataclasses.dataclass
class GetComplianceSummaryHeaders:
    x_amz_target: GetComplianceSummaryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetComplianceSummaryRequest:
    headers: GetComplianceSummaryHeaders = dataclasses.field()
    query_params: GetComplianceSummaryQueryParams = dataclasses.field()
    request: shared_getcompliancesummaryinput.GetComplianceSummaryInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetComplianceSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    constraint_violation_exception: Optional[Any] = dataclasses.field(default=None)
    get_compliance_summary_output: Optional[shared_getcompliancesummaryoutput.GetComplianceSummaryOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    throttled_exception: Optional[Any] = dataclasses.field(default=None)
    
