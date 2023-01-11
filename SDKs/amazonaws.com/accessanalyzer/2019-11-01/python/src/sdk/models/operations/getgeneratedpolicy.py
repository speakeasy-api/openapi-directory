import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getgeneratedpolicyresponse as shared_getgeneratedpolicyresponse


@dataclasses.dataclass
class GetGeneratedPolicyPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeneratedPolicyQueryParams:
    include_resource_placeholders: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeResourcePlaceholders', 'style': 'form', 'explode': True }})
    include_service_level_template: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeServiceLevelTemplate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeneratedPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeneratedPolicyRequest:
    headers: GetGeneratedPolicyHeaders = dataclasses.field()
    path_params: GetGeneratedPolicyPathParams = dataclasses.field()
    query_params: GetGeneratedPolicyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeneratedPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_generated_policy_response: Optional[shared_getgeneratedpolicyresponse.GetGeneratedPolicyResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
