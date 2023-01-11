import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class FunctionsListTagsPathParams:
    function_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FunctionsListTagsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FunctionsListTagsSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FunctionsListTagsRequest:
    path_params: FunctionsListTagsPathParams = dataclasses.field()
    query_params: FunctionsListTagsQueryParams = dataclasses.field()
    security: FunctionsListTagsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FunctionsListTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_list: Optional[shared_taglist.TagList] = dataclasses.field(default=None)
    
