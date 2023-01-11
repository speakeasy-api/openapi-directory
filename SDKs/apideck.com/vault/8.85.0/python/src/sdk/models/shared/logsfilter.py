import dataclasses
from typing import Optional


@dataclasses.dataclass
class LogsFilter:
    connector_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'connector_id' }})
    exclude_unified_apis: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_unified_apis' }})
    status_code: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status_code' }})
    
