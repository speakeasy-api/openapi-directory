import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import search_result_text_matches as shared_search_result_text_matches


@dataclass_json
@dataclasses.dataclass
class TopicSearchResultItemAliasesTopicRelation:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relation_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation_type') }})
    topic_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_id') }})
    

@dataclass_json
@dataclasses.dataclass
class TopicSearchResultItemAliases:
    topic_relation: Optional[TopicSearchResultItemAliasesTopicRelation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_relation') }})
    

@dataclass_json
@dataclasses.dataclass
class TopicSearchResultItemRelatedTopicRelation:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relation_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation_type') }})
    topic_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_id') }})
    

@dataclass_json
@dataclasses.dataclass
class TopicSearchResultItemRelated:
    topic_relation: Optional[TopicSearchResultItemRelatedTopicRelation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_relation') }})
    

@dataclass_json
@dataclasses.dataclass
class TopicSearchResultItem:
    r"""TopicSearchResultItem
    Topic Search Result Item
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    curated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('curated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    featured: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    released: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('released') }})
    score: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    short_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_description') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    aliases: Optional[list[TopicSearchResultItemAliases]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_url') }})
    related: Optional[list[TopicSearchResultItemRelated]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    repository_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_count') }})
    text_matches: Optional[list[shared_search_result_text_matches.SearchResultTextMatches]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_matches') }})
    
