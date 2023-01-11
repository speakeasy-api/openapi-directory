import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import article as shared_article
from ..shared import contentprocompany as shared_contentprocompany
from ..shared import contentprosnippets as shared_contentprosnippets


@dataclasses.dataclass
class GetContentproSearchQueryParams:
    terms: str = dataclasses.field(metadata={'query_param': { 'field_name': 'terms', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetContentproSearch200ApplicationJSONData:
    article: Optional[shared_article.Article] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article') }})
    company: Optional[shared_contentprocompany.ContentProCompany] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    snippets: Optional[shared_contentprosnippets.ContentProSnippets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippets') }})
    

@dataclass_json
@dataclasses.dataclass
class GetContentproSearch200ApplicationJSON:
    calls_per_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls_per_month') }})
    count_remaining: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_remaining') }})
    data: Optional[list[GetContentproSearch200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    renewal_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal_date') }})
    

@dataclasses.dataclass
class GetContentproSearchRequest:
    query_params: GetContentproSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentproSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_contentpro_search_200_application_json_object: Optional[GetContentproSearch200ApplicationJSON] = dataclasses.field(default=None)
    
