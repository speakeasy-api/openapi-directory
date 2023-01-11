import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import similarcompanysearch as shared_similarcompanysearch


@dataclasses.dataclass
class GetSearchQueryParams:
    terms: str = dataclasses.field(metadata={'query_param': { 'field_name': 'terms', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSearch200ApplicationJSON:
    calls_per_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls_per_month') }})
    companies: Optional[list[shared_similarcompanysearch.SimilarCompanySearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companies') }})
    count_remaining: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_remaining') }})
    renewal_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal_date') }})
    

@dataclasses.dataclass
class GetSearchRequest:
    query_params: GetSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_search_200_application_json_object: Optional[GetSearch200ApplicationJSON] = dataclasses.field(default=None)
    
