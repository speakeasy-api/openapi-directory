"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import describedirectconnectgatewaysrequest as shared_describedirectconnectgatewaysrequest
from ..shared import describedirectconnectgatewaysresult as shared_describedirectconnectgatewaysresult
from enum import Enum
from typing import Any, Optional

class DescribeDirectConnectGatewaysXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAYS = 'OvertureService.DescribeDirectConnectGateways'


@dataclasses.dataclass
class DescribeDirectConnectGatewaysRequest:
    
    describe_direct_connect_gateways_request: shared_describedirectconnectgatewaysrequest.DescribeDirectConnectGatewaysRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: DescribeDirectConnectGatewaysXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DescribeDirectConnectGatewaysResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    describe_direct_connect_gateways_result: Optional[shared_describedirectconnectgatewaysresult.DescribeDirectConnectGatewaysResult] = dataclasses.field(default=None)
    r"""Success"""  
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DirectConnectClientException"""  
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DirectConnectServerException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    