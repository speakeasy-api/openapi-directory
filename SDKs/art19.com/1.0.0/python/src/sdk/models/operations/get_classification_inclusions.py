import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationinclusion as shared_classificationinclusion
from ..shared import links as shared_links

class GetClassificationInclusionsClassificationTypeEnum(str, Enum):
    ALTERNATE_FEED_TYPE = "AlternateFeedType"
    GENRE = "Genre"
    INDUSTRY = "Industry"
    LANGUAGE = "Language"
    MEDIA_RATING = "MediaRating"

class GetClassificationInclusionsClassifiedTypeEnum(str, Enum):
    SERIES = "Series"
    SEASON = "Season"
    EPISODE = "Episode"

class GetClassificationInclusionsSortEnum(str, Enum):
    CLASSIFICATION_VALUE = "classification_value"
    CREATED_AT = "created_at"
    POSITION = "position"


@dataclasses.dataclass
class GetClassificationInclusionsQueryParams:
    classification_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classification_id', 'style': 'form', 'explode': True }})
    classification_type: Optional[GetClassificationInclusionsClassificationTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classification_type', 'style': 'form', 'explode': True }})
    classified_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classified_id', 'style': 'form', 'explode': True }})
    classified_type: Optional[GetClassificationInclusionsClassifiedTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classified_type', 'style': 'form', 'explode': True }})
    ids_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    page_number_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[number]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[list[GetClassificationInclusionsSortEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassificationInclusions200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_classificationinclusion.ClassificationInclusion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassificationInclusions400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetClassificationInclusions400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassificationInclusions400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetClassificationInclusions400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassificationInclusions400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetClassificationInclusions400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetClassificationInclusionsRequest:
    query_params: GetClassificationInclusionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClassificationInclusionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_classification_inclusions_200_application_vnd_api_plus_json_object: Optional[GetClassificationInclusions200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_classification_inclusions_400_application_vnd_api_plus_json_object: Optional[GetClassificationInclusions400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
