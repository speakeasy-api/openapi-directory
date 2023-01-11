import dataclasses
from typing import Optional


@dataclasses.dataclass
class OpportunitiesFilter:
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company_id' }})
    monetary_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'monetary_amount' }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title' }})
    win_probability: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'win_probability' }})
    
