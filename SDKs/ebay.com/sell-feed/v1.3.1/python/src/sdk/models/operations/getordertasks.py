import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import ordertaskcollection as shared_ordertaskcollection


@dataclasses.dataclass
class GetOrderTasksQueryParams:
    date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    feed_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    look_back_days: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'look_back_days', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    schedule_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'schedule_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrderTasksSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetOrderTasksRequest:
    query_params: GetOrderTasksQueryParams = dataclasses.field()
    security: GetOrderTasksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_task_collection: Optional[shared_ordertaskcollection.OrderTaskCollection] = dataclasses.field(default=None)
    
