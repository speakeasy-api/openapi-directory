import dataclasses
from typing import Optional
from enum import Enum
from ..shared import boardrelationship_enum as shared_boardrelationship_enum
from ..shared import boardsortorder_enum as shared_boardsortorder_enum
from ..shared import boardlist as shared_boardlist


@dataclasses.dataclass
class GetV3BoardsQueryParams:
    board_relationship: Optional[shared_boardrelationship_enum.BoardRelationshipEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'board_relationship', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared_boardsortorder_enum.BoardSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3BoardsRequest:
    query_params: GetV3BoardsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3BoardsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    board_list: Optional[shared_boardlist.BoardList] = dataclasses.field(default=None)
    
