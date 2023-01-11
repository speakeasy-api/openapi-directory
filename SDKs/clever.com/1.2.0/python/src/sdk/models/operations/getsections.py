import dataclasses
from typing import Optional
from ..shared import sectionsresponse as shared_sectionsresponse


@dataclasses.dataclass
class GetSectionsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSectionsRequest:
    query_params: GetSectionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sections_response: Optional[shared_sectionsresponse.SectionsResponse] = dataclasses.field(default=None)
    
