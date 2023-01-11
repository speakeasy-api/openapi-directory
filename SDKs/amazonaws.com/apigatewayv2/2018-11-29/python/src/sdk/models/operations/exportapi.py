import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import exportapiresponse as shared_exportapiresponse


@dataclasses.dataclass
class ExportAPIPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    specification: str = dataclasses.field(metadata={'path_param': { 'field_name': 'specification', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportAPIQueryParams:
    output_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'outputType', 'style': 'form', 'explode': True }})
    export_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exportVersion', 'style': 'form', 'explode': True }})
    include_extensions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeExtensions', 'style': 'form', 'explode': True }})
    stage_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stageName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportAPIHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportAPIRequest:
    headers: ExportAPIHeaders = dataclasses.field()
    path_params: ExportAPIPathParams = dataclasses.field()
    query_params: ExportAPIQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExportAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    export_api_response: Optional[shared_exportapiresponse.ExportAPIResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
