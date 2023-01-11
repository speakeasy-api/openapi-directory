import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetOrganizationsAccessReportActionEnum(str, Enum):
    GET_ORGANIZATIONS_ACCESS_REPORT = "GetOrganizationsAccessReport"

class GetGetOrganizationsAccessReportSortKeyEnum(str, Enum):
    SERVICE_NAMESPACE_ASCENDING = "SERVICE_NAMESPACE_ASCENDING"
    SERVICE_NAMESPACE_DESCENDING = "SERVICE_NAMESPACE_DESCENDING"
    LAST_AUTHENTICATED_TIME_ASCENDING = "LAST_AUTHENTICATED_TIME_ASCENDING"
    LAST_AUTHENTICATED_TIME_DESCENDING = "LAST_AUTHENTICATED_TIME_DESCENDING"

class GetGetOrganizationsAccessReportVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetGetOrganizationsAccessReportQueryParams:
    action: GetGetOrganizationsAccessReportActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    version: GetGetOrganizationsAccessReportVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    sort_key: Optional[GetGetOrganizationsAccessReportSortKeyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SortKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetOrganizationsAccessReportHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGetOrganizationsAccessReportRequest:
    headers: GetGetOrganizationsAccessReportHeaders = dataclasses.field()
    query_params: GetGetOrganizationsAccessReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetOrganizationsAccessReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
