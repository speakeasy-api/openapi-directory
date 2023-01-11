import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import similarcompany as shared_similarcompany
from ..shared import inputcompany as shared_inputcompany


@dataclasses.dataclass
class GetSimilarQueryParams:
    link: str = dataclasses.field(metadata={'query_param': { 'field_name': 'link', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSimilar200ApplicationJSON:
    calls_per_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls_per_month') }})
    companies: Optional[list[shared_similarcompany.SimilarCompany]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companies') }})
    count_remaining: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_remaining') }})
    input_company: Optional[shared_inputcompany.InputCompany] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input_company') }})
    renewal_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal_date') }})
    

@dataclasses.dataclass
class GetSimilarRequest:
    query_params: GetSimilarQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSimilarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_similar_200_application_json_object: Optional[GetSimilar200ApplicationJSON] = dataclasses.field(default=None)
    
