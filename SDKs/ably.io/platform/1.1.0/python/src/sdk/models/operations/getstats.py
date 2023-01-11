import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import filterdirection_enum as shared_filterdirection_enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import filterdirection_enum1 as shared_filterdirection_enum1
from ..shared import error as shared_error


@dataclasses.dataclass
class GetStatsQueryParams:
    direction: Optional[shared_filterdirection_enum.FilterDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    unit: Optional[shared_filterdirection_enum1.FilterDirectionEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatsHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStatsRequest:
    headers: GetStatsHeaders = dataclasses.field()
    query_params: GetStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_stats_2_xx_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
