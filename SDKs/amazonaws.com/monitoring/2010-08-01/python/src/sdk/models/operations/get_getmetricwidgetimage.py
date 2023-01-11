import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetMetricWidgetImageActionEnum(str, Enum):
    GET_METRIC_WIDGET_IMAGE = "GetMetricWidgetImage"

class GetGetMetricWidgetImageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclasses.dataclass
class GetGetMetricWidgetImageQueryParams:
    action: GetGetMetricWidgetImageActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    metric_widget: str = dataclasses.field(metadata={'query_param': { 'field_name': 'MetricWidget', 'style': 'form', 'explode': True }})
    version: GetGetMetricWidgetImageVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    output_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OutputFormat', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetMetricWidgetImageHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGetMetricWidgetImageRequest:
    headers: GetGetMetricWidgetImageHeaders = dataclasses.field()
    query_params: GetGetMetricWidgetImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetMetricWidgetImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
