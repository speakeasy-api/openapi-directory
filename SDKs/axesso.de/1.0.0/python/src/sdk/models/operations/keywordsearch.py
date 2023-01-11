import dataclasses
from typing import Optional
from ..shared import keywordsearchresponse as shared_keywordsearchresponse


@dataclasses.dataclass
class KeywordSearchQueryParams:
    domain_code: str = dataclasses.field(metadata={'query_param': { 'field_name': 'domainCode', 'style': 'form', 'explode': True }})
    keyword: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    number_of_products: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'numberOfProducts', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class KeywordSearchRequest:
    query_params: KeywordSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class KeywordSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keyword_search_response: Optional[shared_keywordsearchresponse.KeywordSearchResponse] = dataclasses.field(default=None)
    
