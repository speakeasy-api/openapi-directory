import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listfunctionsbycodesigningconfigresponse as shared_listfunctionsbycodesigningconfigresponse


@dataclasses.dataclass
class ListFunctionsByCodeSigningConfigPathParams:
    code_signing_config_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CodeSigningConfigArn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFunctionsByCodeSigningConfigQueryParams:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFunctionsByCodeSigningConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFunctionsByCodeSigningConfigRequest:
    headers: ListFunctionsByCodeSigningConfigHeaders = dataclasses.field()
    path_params: ListFunctionsByCodeSigningConfigPathParams = dataclasses.field()
    query_params: ListFunctionsByCodeSigningConfigQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListFunctionsByCodeSigningConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    list_functions_by_code_signing_config_response: Optional[shared_listfunctionsbycodesigningconfigresponse.ListFunctionsByCodeSigningConfigResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    
