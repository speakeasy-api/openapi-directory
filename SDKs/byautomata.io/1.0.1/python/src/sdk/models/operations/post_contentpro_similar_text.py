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


@dataclass_json
@dataclasses.dataclass
class PostContentproSimilarTextRequestBody:
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class PostContentproSimilarText200ApplicationJSONData:
    article: Optional[shared_article.Article] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article') }})
    company: Optional[shared_contentprocompany.ContentProCompany] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    snippets: Optional[shared_contentprosnippets.ContentProSnippets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostContentproSimilarText200ApplicationJSON:
    calls_per_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls_per_month') }})
    count_remaining: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_remaining') }})
    data: Optional[list[PostContentproSimilarText200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    renewal_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal_date') }})
    

@dataclasses.dataclass
class PostContentproSimilarTextRequest:
    request: PostContentproSimilarTextRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostContentproSimilarTextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_contentpro_similar_text_200_application_json_object: Optional[PostContentproSimilarText200ApplicationJSON] = dataclasses.field(default=None)
    
