import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getuserdefinedfunctionsrequest as shared_getuserdefinedfunctionsrequest
from ..shared import getuserdefinedfunctionsresponse as shared_getuserdefinedfunctionsresponse


@dataclasses.dataclass
class GetUserDefinedFunctionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetUserDefinedFunctionsXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_USER_DEFINED_FUNCTIONS = "AWSGlue.GetUserDefinedFunctions"


@dataclasses.dataclass
class GetUserDefinedFunctionsHeaders:
    x_amz_target: GetUserDefinedFunctionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserDefinedFunctionsRequest:
    headers: GetUserDefinedFunctionsHeaders = dataclasses.field()
    query_params: GetUserDefinedFunctionsQueryParams = dataclasses.field()
    request: shared_getuserdefinedfunctionsrequest.GetUserDefinedFunctionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetUserDefinedFunctionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    get_user_defined_functions_response: Optional[shared_getuserdefinedfunctionsresponse.GetUserDefinedFunctionsResponse] = dataclasses.field(default=None)
    glue_encryption_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    
