import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getdomainstatisticsreportresponse as shared_getdomainstatisticsreportresponse


@dataclasses.dataclass
class GetDomainStatisticsReportPathParams:
    domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Domain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainStatisticsReportQueryParams:
    end_date: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    start_date: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDomainStatisticsReportHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainStatisticsReportRequest:
    headers: GetDomainStatisticsReportHeaders = dataclasses.field()
    path_params: GetDomainStatisticsReportPathParams = dataclasses.field()
    query_params: GetDomainStatisticsReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainStatisticsReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    get_domain_statistics_report_response: Optional[shared_getdomainstatisticsreportresponse.GetDomainStatisticsReportResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
