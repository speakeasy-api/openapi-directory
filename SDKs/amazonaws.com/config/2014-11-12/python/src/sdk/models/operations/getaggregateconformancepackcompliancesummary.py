import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getaggregateconformancepackcompliancesummaryrequest as shared_getaggregateconformancepackcompliancesummaryrequest
from ..shared import getaggregateconformancepackcompliancesummaryresponse as shared_getaggregateconformancepackcompliancesummaryresponse


@dataclasses.dataclass
class GetAggregateConformancePackComplianceSummaryQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetAggregateConformancePackComplianceSummaryXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_AGGREGATE_CONFORMANCE_PACK_COMPLIANCE_SUMMARY = "StarlingDoveService.GetAggregateConformancePackComplianceSummary"


@dataclasses.dataclass
class GetAggregateConformancePackComplianceSummaryHeaders:
    x_amz_target: GetAggregateConformancePackComplianceSummaryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAggregateConformancePackComplianceSummaryRequest:
    headers: GetAggregateConformancePackComplianceSummaryHeaders = dataclasses.field()
    query_params: GetAggregateConformancePackComplianceSummaryQueryParams = dataclasses.field()
    request: shared_getaggregateconformancepackcompliancesummaryrequest.GetAggregateConformancePackComplianceSummaryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAggregateConformancePackComplianceSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_aggregate_conformance_pack_compliance_summary_response: Optional[shared_getaggregateconformancepackcompliancesummaryresponse.GetAggregateConformancePackComplianceSummaryResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_configuration_aggregator_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
