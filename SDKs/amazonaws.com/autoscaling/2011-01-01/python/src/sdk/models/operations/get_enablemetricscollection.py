import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetEnableMetricsCollectionActionEnum(str, Enum):
    ENABLE_METRICS_COLLECTION = "EnableMetricsCollection"

class GetEnableMetricsCollectionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclasses.dataclass
class GetEnableMetricsCollectionQueryParams:
    action: GetEnableMetricsCollectionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    granularity: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Granularity', 'style': 'form', 'explode': True }})
    version: GetEnableMetricsCollectionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    metrics: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Metrics', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEnableMetricsCollectionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnableMetricsCollectionRequest:
    headers: GetEnableMetricsCollectionHeaders = dataclasses.field()
    query_params: GetEnableMetricsCollectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnableMetricsCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
