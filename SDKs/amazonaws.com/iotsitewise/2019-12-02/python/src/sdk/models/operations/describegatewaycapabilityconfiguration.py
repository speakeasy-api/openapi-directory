import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describegatewaycapabilityconfigurationresponse as shared_describegatewaycapabilityconfigurationresponse


@dataclasses.dataclass
class DescribeGatewayCapabilityConfigurationPathParams:
    capability_namespace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'capabilityNamespace', 'style': 'simple', 'explode': False }})
    gateway_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gatewayId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeGatewayCapabilityConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeGatewayCapabilityConfigurationRequest:
    headers: DescribeGatewayCapabilityConfigurationHeaders = dataclasses.field()
    path_params: DescribeGatewayCapabilityConfigurationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeGatewayCapabilityConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_gateway_capability_configuration_response: Optional[shared_describegatewaycapabilityconfigurationresponse.DescribeGatewayCapabilityConfigurationResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
