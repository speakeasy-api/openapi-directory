import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeCacheEngineVersionsActionEnum(str, Enum):
    DESCRIBE_CACHE_ENGINE_VERSIONS = "DescribeCacheEngineVersions"

class GetDescribeCacheEngineVersionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetDescribeCacheEngineVersionsQueryParams:
    action: GetDescribeCacheEngineVersionsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeCacheEngineVersionsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_parameter_group_family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CacheParameterGroupFamily', 'style': 'form', 'explode': True }})
    default_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DefaultOnly', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeCacheEngineVersionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeCacheEngineVersionsRequest:
    headers: GetDescribeCacheEngineVersionsHeaders = dataclasses.field()
    query_params: GetDescribeCacheEngineVersionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeCacheEngineVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
