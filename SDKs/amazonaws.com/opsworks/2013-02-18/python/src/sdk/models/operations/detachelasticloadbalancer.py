"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import detachelasticloadbalancerrequest as shared_detachelasticloadbalancerrequest
from enum import Enum
from typing import Any, Optional

class DetachElasticLoadBalancerXAmzTargetEnum(str, Enum):
    OPS_WORKS_20130218_DETACH_ELASTIC_LOAD_BALANCER = 'OpsWorks_20130218.DetachElasticLoadBalancer'


@dataclasses.dataclass
class DetachElasticLoadBalancerRequest:
    
    detach_elastic_load_balancer_request: shared_detachelasticloadbalancerrequest.DetachElasticLoadBalancerRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: DetachElasticLoadBalancerXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DetachElasticLoadBalancerResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    