import dataclasses
from typing import Optional
from ..shared import accountlineitementity as shared_accountlineitementity


@dataclasses.dataclass
class GetPaymentsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentsRequest:
    query_params: GetPaymentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_line_item_entities: Optional[list[shared_accountlineitementity.AccountLineItemEntity]] = dataclasses.field(default=None)
    
