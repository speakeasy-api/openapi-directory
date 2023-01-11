import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getprovisionedconcurrencyconfigresponse as shared_getprovisionedconcurrencyconfigresponse


@dataclasses.dataclass
class GetProvisionedConcurrencyConfigPathParams:
    function_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProvisionedConcurrencyConfigQueryParams:
    qualifier: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProvisionedConcurrencyConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProvisionedConcurrencyConfigRequest:
    headers: GetProvisionedConcurrencyConfigHeaders = dataclasses.field()
    path_params: GetProvisionedConcurrencyConfigPathParams = dataclasses.field()
    query_params: GetProvisionedConcurrencyConfigQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProvisionedConcurrencyConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_provisioned_concurrency_config_response: Optional[shared_getprovisionedconcurrencyconfigresponse.GetProvisionedConcurrencyConfigResponse] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    provisioned_concurrency_config_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
