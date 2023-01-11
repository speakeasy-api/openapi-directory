import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import inventorytaskcollection as shared_inventorytaskcollection


@dataclasses.dataclass
class GetInventoryTasksQueryParams:
    date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    feed_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    look_back_days: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'look_back_days', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    schedule_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'schedule_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInventoryTasksSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetInventoryTasksRequest:
    query_params: GetInventoryTasksQueryParams = dataclasses.field()
    security: GetInventoryTasksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetInventoryTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_task_collection: Optional[shared_inventorytaskcollection.InventoryTaskCollection] = dataclasses.field(default=None)
    
