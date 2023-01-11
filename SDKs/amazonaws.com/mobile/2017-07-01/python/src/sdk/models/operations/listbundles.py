import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import badrequestexception as shared_badrequestexception
from ..shared import internalfailureexception as shared_internalfailureexception
from ..shared import listbundlesresult as shared_listbundlesresult
from ..shared import serviceunavailableexception as shared_serviceunavailableexception
from ..shared import toomanyrequestsexception as shared_toomanyrequestsexception
from ..shared import unauthorizedexception as shared_unauthorizedexception


@dataclasses.dataclass
class ListBundlesQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBundlesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBundlesRequest:
    headers: ListBundlesHeaders = dataclasses.field()
    query_params: ListBundlesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListBundlesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[shared_badrequestexception.BadRequestException] = dataclasses.field(default=None)
    internal_failure_exception: Optional[shared_internalfailureexception.InternalFailureException] = dataclasses.field(default=None)
    list_bundles_result: Optional[shared_listbundlesresult.ListBundlesResult] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[shared_serviceunavailableexception.ServiceUnavailableException] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[shared_toomanyrequestsexception.TooManyRequestsException] = dataclasses.field(default=None)
    unauthorized_exception: Optional[shared_unauthorizedexception.UnauthorizedException] = dataclasses.field(default=None)
    
