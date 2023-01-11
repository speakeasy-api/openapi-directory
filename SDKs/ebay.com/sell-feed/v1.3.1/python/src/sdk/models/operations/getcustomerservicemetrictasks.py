import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import customerservicemetrictaskcollection as shared_customerservicemetrictaskcollection


@dataclasses.dataclass
class GetCustomerServiceMetricTasksQueryParams:
    date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    feed_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    look_back_days: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'look_back_days', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCustomerServiceMetricTasksSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCustomerServiceMetricTasksRequest:
    query_params: GetCustomerServiceMetricTasksQueryParams = dataclasses.field()
    security: GetCustomerServiceMetricTasksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomerServiceMetricTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_service_metric_task_collection: Optional[shared_customerservicemetrictaskcollection.CustomerServiceMetricTaskCollection] = dataclasses.field(default=None)
    
