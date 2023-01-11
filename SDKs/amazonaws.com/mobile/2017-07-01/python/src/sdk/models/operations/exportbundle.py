import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import badrequestexception as shared_badrequestexception
from ..shared import exportbundleresult as shared_exportbundleresult
from ..shared import internalfailureexception as shared_internalfailureexception
from ..shared import notfoundexception as shared_notfoundexception
from ..shared import serviceunavailableexception as shared_serviceunavailableexception
from ..shared import toomanyrequestsexception as shared_toomanyrequestsexception
from ..shared import unauthorizedexception as shared_unauthorizedexception


@dataclasses.dataclass
class ExportBundlePathParams:
    bundle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bundleId', 'style': 'simple', 'explode': False }})
    
class ExportBundlePlatformEnum(str, Enum):
    OSX = "OSX"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    OBJC = "OBJC"
    SWIFT = "SWIFT"
    ANDROID = "ANDROID"
    JAVASCRIPT = "JAVASCRIPT"


@dataclasses.dataclass
class ExportBundleQueryParams:
    platform: Optional[ExportBundlePlatformEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportBundleHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportBundleRequest:
    headers: ExportBundleHeaders = dataclasses.field()
    path_params: ExportBundlePathParams = dataclasses.field()
    query_params: ExportBundleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExportBundleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[shared_badrequestexception.BadRequestException] = dataclasses.field(default=None)
    export_bundle_result: Optional[shared_exportbundleresult.ExportBundleResult] = dataclasses.field(default=None)
    internal_failure_exception: Optional[shared_internalfailureexception.InternalFailureException] = dataclasses.field(default=None)
    not_found_exception: Optional[shared_notfoundexception.NotFoundException] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[shared_serviceunavailableexception.ServiceUnavailableException] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[shared_toomanyrequestsexception.TooManyRequestsException] = dataclasses.field(default=None)
    unauthorized_exception: Optional[shared_unauthorizedexception.UnauthorizedException] = dataclasses.field(default=None)
    
