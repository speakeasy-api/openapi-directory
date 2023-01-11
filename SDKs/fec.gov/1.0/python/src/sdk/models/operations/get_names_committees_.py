import dataclasses
from typing import Optional
from ..shared import committeesearchlist as shared_committeesearchlist


@dataclasses.dataclass
class GetNamesCommitteesQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNamesCommitteesRequest:
    query_params: GetNamesCommitteesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesCommitteesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    committee_search_list: Optional[shared_committeesearchlist.CommitteeSearchList] = dataclasses.field(default=None)
    
