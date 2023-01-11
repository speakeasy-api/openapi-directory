import dataclasses
from typing import Optional


@dataclasses.dataclass
class SeeContentBlockInformationQueryParams:
    content_block_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content_block_id', 'style': 'form', 'explode': True }})
    include_inclusion_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_inclusion_data', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SeeContentBlockInformationRequest:
    query_params: SeeContentBlockInformationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SeeContentBlockInformationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
