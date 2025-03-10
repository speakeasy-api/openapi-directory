"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import aliases as shared_aliases
from ..shared import cachebehaviors as shared_cachebehaviors
from ..shared import customerrorresponses as shared_customerrorresponses
from ..shared import defaultcachebehavior as shared_defaultcachebehavior
from ..shared import httpversion_enum as shared_httpversion_enum
from ..shared import loggingconfig as shared_loggingconfig
from ..shared import origingroups as shared_origingroups
from ..shared import origins as shared_origins
from ..shared import priceclass_enum as shared_priceclass_enum
from ..shared import restrictions as shared_restrictions
from ..shared import viewercertificate as shared_viewercertificate
from typing import Optional


@dataclasses.dataclass
class CreateDistribution20181105RequestBodyDistributionConfig:
    r"""A distribution configuration."""
    
    aliases: Optional[shared_aliases.Aliases] = dataclasses.field(default=None)  
    cache_behaviors: Optional[shared_cachebehaviors.CacheBehaviors] = dataclasses.field(default=None)  
    caller_reference: Optional[str] = dataclasses.field(default=None)  
    comment: Optional[str] = dataclasses.field(default=None)  
    custom_error_responses: Optional[shared_customerrorresponses.CustomErrorResponses] = dataclasses.field(default=None)  
    default_cache_behavior: Optional[shared_defaultcachebehavior.DefaultCacheBehavior] = dataclasses.field(default=None)  
    default_root_object: Optional[str] = dataclasses.field(default=None)  
    enabled: Optional[bool] = dataclasses.field(default=None)  
    http_version: Optional[shared_httpversion_enum.HTTPVersionEnum] = dataclasses.field(default=None)  
    is_ipv6_enabled: Optional[bool] = dataclasses.field(default=None)  
    logging: Optional[shared_loggingconfig.LoggingConfig] = dataclasses.field(default=None)  
    origin_groups: Optional[shared_origingroups.OriginGroups] = dataclasses.field(default=None)  
    origins: Optional[shared_origins.Origins] = dataclasses.field(default=None)  
    price_class: Optional[shared_priceclass_enum.PriceClassEnum] = dataclasses.field(default=None)  
    restrictions: Optional[shared_restrictions.Restrictions] = dataclasses.field(default=None)  
    viewer_certificate: Optional[shared_viewercertificate.ViewerCertificate] = dataclasses.field(default=None)  
    web_acl_id: Optional[str] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class CreateDistribution20181105RequestBody:
    
    distribution_config: CreateDistribution20181105RequestBodyDistributionConfig = dataclasses.field()
    r"""A distribution configuration."""  
    

@dataclasses.dataclass
class CreateDistribution20181105Request:
    
    request_body: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CreateDistribution20181105Response:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    